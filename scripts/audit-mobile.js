'use strict';
/**
 * Mobile UX audit (dev-only). Measures the things that actually make a page
 * feel unfriendly on a phone, rather than eyeballing screenshots.
 *
 * Run: node scripts/audit-mobile.js
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_screenshots');
const BASE = 'http://localhost:3000';
const EXE = 'C:/Users/GrowNion/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

const PAGES = [
  ['home', '/'],
  ['service', '/services/general-dentistry'],
  ['about', '/about'],
  ['faq', '/faq'],
  ['contact', '/contact'],
  ['post', '/blog/dental-emergency-what-to-do'],
  ['new-patients', '/new-patients'],
  ['doctors', '/doctors']
];

async function audit(page) {
  return page.evaluate(() => {
    const px = (v) => Math.round(parseFloat(v) || 0);
    const vw = window.innerWidth;

    // Horizontal overflow. Decorative absolutely-positioned elements (the footer
    // glow) and masked marquees are clipped by an overflow:hidden ancestor, so
    // they are not real overflow — only report when the document itself scrolls.
    const docOverflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    const overflowing = [];
    if (docOverflow > 1) {
      document.querySelectorAll('main > section, .site-footer').forEach((s) => {
        const over = s.scrollWidth - s.clientWidth;
        if (over > 1) {
          overflowing.push({
            cls: (s.className || '').toString().split(' ').slice(0, 2).join('.'),
            over
          });
        }
      });
    }

    // Widest element that genuinely sticks out of the viewport (ignores
    // absolutely-positioned decoration and anything inside a clipped parent).
    let widest = null;
    document.querySelectorAll('main *').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.position === 'absolute' || cs.position === 'fixed') return;
      const r = el.getBoundingClientRect();
      if (r.width > vw + 1 && r.height > 0) {
        const over = Math.round(r.width - vw);
        if (!widest || over > widest.over) {
          widest = { tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 40), over };
        }
      }
    });

    // Long paragraphs (chars) — a phone-friendly paragraph is < ~320 chars
    const paras = [...document.querySelectorAll('main p')]
      .map((p) => ({
        chars: p.textContent.trim().length,
        words: p.textContent.trim().split(/\s+/).filter(Boolean).length
      }))
      .filter((p) => p.words > 0);
    const longParas = paras.filter((p) => p.chars > 340);
    const avgPara = paras.length
      ? Math.round(paras.reduce((s, p) => s + p.words, 0) / paras.length)
      : 0;
    const maxPara = paras.length ? Math.max(...paras.map((p) => p.words)) : 0;

    // Headings vs body ratio (scannability proxy)
    const h2 = document.querySelectorAll('main h2').length;
    const h3 = document.querySelectorAll('main h3').length;

    // Font sizes actually rendered for body copy
    const bodyP = document.querySelector('main .prose p') || document.querySelector('main p');
    const bodySize = bodyP ? px(getComputedStyle(bodyP).fontSize) : null;

    // Touch targets: interactive elements smaller than 44x44
    const small = [];
    document.querySelectorAll('main a, main button, .nav__link, .footer__links a').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.height < 40 || r.width < 40) {
        small.push({
          tag: el.tagName.toLowerCase(),
          txt: (el.textContent || '').trim().slice(0, 22),
          w: Math.round(r.width),
          h: Math.round(r.height)
        });
      }
    });

    // Tables that scroll horizontally
    const tables = [...document.querySelectorAll('.table-wrap')].map((t) => ({
      scrollable: t.scrollWidth > t.clientWidth + 1,
      overflow: t.scrollWidth - t.clientWidth
    }));

    // Hero specifics
    const hero = document.querySelector('.hero__title');
    const heroSec = document.querySelector('.hero');
    const heroImg = document.querySelector('.hero__img');
    const heroInfo = hero
      ? {
          titleSize: px(getComputedStyle(hero).fontSize),
          titleLines: Math.round(hero.getBoundingClientRect().height / (px(getComputedStyle(hero).lineHeight) || 1)),
          heroHeight: heroSec ? Math.round(heroSec.getBoundingClientRect().height) : null,
          viewportRatio: heroSec ? +(heroSec.getBoundingClientRect().height / window.innerHeight).toFixed(2) : null,
          imgPosition: heroImg ? getComputedStyle(heroImg).objectPosition : null
        }
      : null;

    // Section padding rhythm
    const pads = [...document.querySelectorAll('main > section')].slice(0, 8).map((s) => ({
      cls: (s.className || '').toString().split(' ').find((c) => c.startsWith('section--')) || 'section',
      padTop: px(getComputedStyle(s).paddingTop)
    }));

    // Total page height in screens
    const screens = +(document.documentElement.scrollHeight / window.innerHeight).toFixed(1);

    return {
      vw,
      docOverflow,
      overflowing,
      widest,
      paras: paras.length,
      avgPara,
      maxPara,
      longParas: longParas.length,
      h2,
      h3,
      bodySize,
      smallTargets: small.length,
      smallSample: small.slice(0, 6),
      tables,
      hero: heroInfo,
      pads,
      screens
    };
  });
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: EXE });

  for (const width of [390, 360]) {
    const ctx = await browser.newContext({
      viewport: { width, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    const page = await ctx.newPage();
    console.log('\n' + '='.repeat(72));
    console.log('VIEWPORT ' + width + 'px');
    console.log('='.repeat(72));

    for (const [name, url] of PAGES) {
      await page.goto(BASE + url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(300);
      const a = await audit(page);
      console.log(
        '\n' +
          name.padEnd(13) +
          ' | ' +
          String(a.screens).padStart(5) +
          ' screens | docOverflow=' +
          a.docOverflow +
          ' | paras=' +
          a.paras +
          ' (avg ' +
          a.avgPara +
          'w, max ' +
          a.maxPara +
          'w, ' +
          a.longParas +
          ' long)' +
          ' | h2=' +
          a.h2 +
          ' h3=' +
          a.h3
      );
      console.log(
        '  body ' +
          a.bodySize +
          'px | smallTargets=' +
          a.smallTargets +
          (a.tables.length
            ? ' | tables=' + a.tables.map((t) => (t.scrollable ? 'scroll+' + t.overflow : 'fits')).join(',')
            : '')
      );
      if (a.widest) console.log('  WIDEST OVERFLOW: <' + a.widest.tag + ' class="' + a.widest.cls + '"> +' + a.widest.over + 'px');
      if (a.overflowing.length) console.log('  overflowing sections: ' + JSON.stringify(a.overflowing));
      if (a.smallSample.length) console.log('  small targets: ' + JSON.stringify(a.smallSample));
      if (a.hero) console.log('  HERO: ' + JSON.stringify(a.hero));
      if (width === 390 && ['home', 'service', 'faq', 'contact'].includes(name)) {
        await page.screenshot({ path: path.join(OUT, 'm390-' + name + '-full.png'), fullPage: true });
      }
    }
    await ctx.close();
  }

  await browser.close();
  console.log('\nscreenshots → ' + OUT);
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
