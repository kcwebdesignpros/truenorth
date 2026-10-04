'use strict';
/**
 * Contrast auditor (dev-only, not part of the deployed site).
 *
 * Walks every route at desktop + mobile and flags any text node whose
 * rendered colour is (near-)white while the nearest *opaque* background
 * behind it is light. That combination is the "white text on a white
 * section" class of bug — invisible copy in production but easy to miss
 * in a screenshot review.
 *
 * For every element that carries its own text we compute:
 *   1. the element's computed `color`
 *   2. the first *opaque* background colour walking up the ancestor chain
 *      (compositing translucent layers over their own ancestors)
 *   3. the WCAG 2.1 contrast ratio of the two
 *
 * Anything below 3.0 is reported as a hard failure (large display text
 * still needs 3:1). 3.0–4.5 is reported as a warning for secondary copy.
 *
 * Run:  node scripts/audit-contrast.js
 * Exit: 0 when no hard failures, 1 otherwise.
 */

const path = require('path');
const { chromium } = require('playwright-core');

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const EXE = 'C:/Users/GrowNion/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/general-dentistry',
  '/services/cosmetic-dentistry',
  '/services/emergency-dentistry',
  '/services/orthodontics',
  '/services/pediatric-dentistry',
  '/services/restorative-dentistry',
  '/doctors',
  '/blog',
  '/blog/dental-emergency-what-to-do',
  '/contact',
  '/new-patients',
  '/insurance-and-financing',
  '/reviews',
  '/faq',
  '/our-office',
  '/technology',
  '/thank-you',
  '/privacy-policy',
  '/terms-of-service',
  '/accessibility-statement',
  '/sitemap',
  '/this-page-does-not-exist'
];

/* The in-page probe. Runs inside the browser, returns an array of offenders. */
const PROBE = () => {
  const out = [];

  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[,/\s]+/).filter(Boolean).map(Number);
    if (p.length < 3 || p.some((n) => Number.isNaN(n))) return null;
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };

  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1
  });

  const lum = ({ r, g, b }) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };

  const ratio = (a, b) => {
    const l1 = lum(a);
    const l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };

  const rgbStr = (c) =>
    c ? `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})` : '?';

  /* Pull the first colour stop out of a linear/radial gradient so a gradient
     backdrop can be judged approximately instead of being written off as
     "unknown". Approximate is fine here: every gradient on this site runs
     dark→dark or light→light, so the first stop is representative.
     Note: the stop list contains nested parens (`rgba(...)`), so a naive
     `gradient\(([^)]*)\)` truncates at the first `)`. Match from the opening
     paren of `gradient(` to the end of its balanced group instead. */
  const gradientFirstStop = (bi) => {
    if (!bi || bi === 'none') return null;
    const start = bi.indexOf('gradient(');
    if (start === -1) return null;
    let i = start + 'gradient('.length;
    let depth = 1;
    while (i < bi.length && depth > 0) {
      if (bi[i] === '(') depth++;
      else if (bi[i] === ')') depth--;
      i++;
    }
    const inner = bi.slice(start + 'gradient('.length, i - 1);
    /* Drop the leading direction token (an angle or `to <side>`), then take
       the first colour stop that follows it. */
    const body = inner.replace(/^\s*(?:[-+]?[\d.]+(?:deg|rad|turn|grad)\s*,|to\s+[a-z ]+\s*,)/i, '');
    const stops = body.match(/rgba?\([^)]*\)/g);
    if (!stops || !stops.length) return null;
    return parse(stops[0]);
  };

  /* Walk up the tree compositing every background layer until we hit an
     opaque one. Returns the effective backdrop colour. */
  const backdrop = (el) => {
    const layers = [];
    let sawImage = false;
    let node = el;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      const bi = cs.backgroundImage;
      let bg = parse(cs.backgroundColor);
      if (bi && bi !== 'none') {
        sawImage = true;
        /* Prefer the gradient's first stop; fall back to the flat colour. */
        const g = gradientFirstStop(bi);
        if (g) bg = bg && bg.a > 0 ? bg : g;
      }
      if (bg && bg.a > 0) {
        layers.push(bg);
        if (bg.a >= 0.999) break;
      }
      node = node.parentElement;
    }
    let acc = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) acc = over(layers[i], acc);
    return { color: acc, kind: sawImage ? 'image' : 'solid' };
  };

  const skip = (el) => {
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return true;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return true;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') return true;
    if (parseFloat(cs.opacity) < 0.15) return true;
    /* Visually-hidden helper text (skip links, sr-only labels). */
    if (cs.clip === 'rect(0px, 0px, 0px, 0px)' || cs.clipPath === 'inset(50%)') return true;
    if (parseFloat(cs.fontSize) < 4) return true;
    return false;
  };

  const seen = new Set();
  const all = document.querySelectorAll('body *');
  for (const el of all) {
    if (skip(el)) continue;
    /* Only elements that directly own visible text. */
    const own = [...el.childNodes]
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent.trim())
      .join(' ')
      .trim();
    if (!own) continue;

    const cs = getComputedStyle(el);
    const fg = parse(cs.color);
    if (!fg) continue;

    const bd = backdrop(el);
    if (!bd.color) continue;

    /* Translucent text composites over its own backdrop. */
    const effFg = fg.a < 0.999 ? over(fg, bd.color) : fg;
    const r = ratio(effFg, bd.color);

    if (r >= 4.5) continue;

    const key = `${Math.round(el.getBoundingClientRect().top)}|${cs.color}|${rgbStr(bd.color)}|${own.slice(0, 40)}`;
    if (seen.has(key)) continue;
    seen.add(key);

    out.push({
      tag: el.tagName.toLowerCase(),
      cls: (el.className && typeof el.className === 'string' ? el.className : '').slice(0, 90),
      text: own.slice(0, 60),
      color: cs.color,
      backdrop: rgbStr(bd.color),
      backdropKind: bd.kind,
      ratio: +r.toFixed(2),
      fontSize: cs.fontSize,
      bold: parseInt(cs.fontWeight, 10) >= 600,
      inNav: !!el.closest('.site-header, #primaryNav'),
      inFooter: !!el.closest('.footer'),
      section: (() => {
        const s = el.closest('section, .footer, .site-header, .mobile-bar');
        if (!s) return null;
        const c = typeof s.className === 'string' ? s.className : '';
        return (c.split(/\s+/).filter((x) => x && !/^(reveal|is-done|container)$/.test(x))[0] || s.tagName.toLowerCase()).slice(0, 60);
      })()
    });
  }
  return out;
};

async function main() {
  const browser = await chromium.launch({ executablePath: EXE, args: ['--force-color-profile=srgb'] });
  const offenders = [];

  for (const [label, vp] of [
    ['desktop', { width: 1440, height: 900 }],
    ['mobile', { width: 390, height: 844 }]
  ]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: 'load', timeout: 30000 });
      /* Force every scroll-reveal into its finished state so nothing is
         measured while still translated/faded out. */
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(250);

      let found = [];
      try {
        found = await page.evaluate(PROBE);
      } catch (e) {
        console.log(`  probe error on ${route}: ${e.message}`);
      }
      for (const f of found) offenders.push({ viewport: label, route, ...f });
    }
    await ctx.close();
  }

  await browser.close();

  /* ------------------------------------------------------------- report */
  const hard = offenders.filter((o) => o.ratio < 3);
  const soft = offenders.filter((o) => o.ratio >= 3 && o.ratio < 4.5);

  console.log('\n================ CONTRAST AUDIT ================');
  console.log(`routes scanned : ${ROUTES.length} x 2 viewports`);
  console.log(`hard failures  : ${hard.length}   (< 3.0:1 — unreadable)`);
  console.log(`warnings       : ${soft.length}   (3.0–4.5:1)`);

  const dump = (rows, title) => {
    if (!rows.length) return;
    console.log(`\n--- ${title} ---`);
    /* Group by selector + backdrop so 50 identical rows collapse to one. */
    const groups = new Map();
    for (const o of rows) {
      const k = `${o.tag}.${o.cls}|${o.color}|${o.backdrop}`;
      if (!groups.has(k)) groups.set(k, { ...o, count: 0, routes: new Set() });
      const g = groups.get(k);
      g.count++;
      g.routes.add(`${o.route}@${o.viewport}`);
      g.ratio = Math.min(g.ratio, o.ratio);
    }
    const sorted = [...groups.values()].sort((a, b) => a.ratio - b.ratio);
    for (const g of sorted) {
      console.log(
        `\n  ${g.ratio}:1  ${g.tag}.${g.cls || '(no class)'}\n` +
          `      color ${g.color}  on  ${g.backdrop}${g.backdropKind === 'image' ? ' + image' : ''}\n` +
          `      section: ${g.section}   ${g.bold ? 'bold ' : ''}${g.fontSize}\n` +
          `      "${g.text}"\n` +
          `      ${g.count} element(s) across ${[...g.routes].slice(0, 4).join(', ')}${g.routes.size > 4 ? ` (+${g.routes.size - 4} more)` : ''}`
      );
    }
  };

  dump(hard, 'HARD FAILURES — white-on-light / unreadable');
  dump(soft, 'WARNINGS — below 4.5:1');

  console.log('\n================================================');
  console.log(hard.length === 0 ? 'NO UNREADABLE TEXT FOUND' : `${hard.length} ELEMENT(S) UNREADABLE`);
  console.log('================================================\n');

  process.exitCode = hard.length === 0 ? 0 : 1;
}

main().catch((e) => {
  console.error('audit-contrast failed:', e);
  process.exitCode = 1;
});
