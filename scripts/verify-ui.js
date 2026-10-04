'use strict';
/**
 * UI verification harness (dev-only, not part of the deployed site).
 * Screenshots key pages at desktop + mobile and asserts the interaction
 * behaviours that are easy to get wrong (drawer clicks, header overflow,
 * topbar height stability, reduced-motion fallback).
 *
 * Run: node scripts/verify-ui.js
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_screenshots');
const BASE = process.env.BASE_URL || 'http://localhost:3000';
const EXE = 'C:/Users/GrowNion/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

const PAGES = [
  ['home', '/'],
  ['service', '/services/general-dentistry'],
  ['services-index', '/services'],
  ['about', '/about'],
  ['blog', '/blog'],
  ['post', '/blog/dental-emergency-what-to-do'],
  ['contact', '/contact'],
  ['doctors', '/doctors'],
  ['404', '/this-page-does-not-exist']
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: EXE, args: ['--force-color-profile=srgb'] });
  const results = [];

  /* ------------------------------------------------- desktop full pages */
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const dp = await desktop.newPage();

  for (const [name, url] of PAGES) {
    await dp.goto(BASE + url, { waitUntil: 'load', timeout: 30000 });
    await dp.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await dp.waitForTimeout(900);
    await dp.evaluate(() => window.scrollTo(0, 0));
    await dp.waitForTimeout(500);
    await dp.screenshot({ path: path.join(OUT, `desktop-${name}.png`), fullPage: true });
  }

  /* --------------------------------------------- dropdown hover + bridge */
  await dp.goto(BASE + '/', { waitUntil: 'load', timeout: 30000 });
  await dp.hover('.nav__item--mega .nav__link');
  await dp.waitForTimeout(500);
  const dropdown = await dp.evaluate(() => {
    const panel = document.getElementById('menu-services');
    const r = panel.getBoundingClientRect();
    const inside = document.elementFromPoint(Math.round(r.x + r.width / 2), Math.round(r.y + r.height / 2));
    return {
      visible: getComputedStyle(panel).visibility === 'visible' && parseFloat(getComputedStyle(panel).opacity) > 0.9,
      insideViewport: r.right <= window.innerWidth + 1 && r.left >= -1,
      childHoverable: !!(inside && panel.contains(inside)),
      links: panel.querySelectorAll('a').length
    };
  });
  results.push(['desktop dropdown opens on hover', dropdown.visible]);
  results.push(['dropdown stays inside viewport', dropdown.insideViewport]);
  results.push(['dropdown children are hoverable', dropdown.childHoverable]);
  results.push(['dropdown has 7 links (6 services + view all)', dropdown.links === 7]);
  await dp.screenshot({ path: path.join(OUT, 'desktop-dropdown.png'), clip: { x: 0, y: 0, width: 1440, height: 620 } });

  /* --------------------------------- header geometry at several widths */
  const widths = [1440, 1280, 1100, 1000, 900, 800, 700, 600, 480, 390];
  const geom = [];
  for (const w of widths) {
    await dp.setViewportSize({ width: w, height: 900 });
    await dp.waitForTimeout(220);
    const g = await dp.evaluate(() => {
      const inner = document.querySelector('.header__inner');
      const topbar = document.querySelector('.topbar__inner');
      return {
        overflow: inner.scrollWidth - inner.clientWidth,
        topbar: Math.round(topbar.getBoundingClientRect().height),
        header: Math.round(document.getElementById('siteHeader').getBoundingClientRect().height)
      };
    });
    geom.push([w, g]);
  }
  const overflowMax = Math.max(...geom.map(([, g]) => g.overflow));
  const topbarHeights = [...new Set(geom.map(([, g]) => g.topbar))];
  results.push(['header never overflows horizontally (max ' + overflowMax + 'px)', overflowMax === 0]);
  results.push(['topbar height constant (' + topbarHeights.join('/') + ')', topbarHeights.length === 1]);

  /* -------------------------------------------------------- mobile drawer */
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mp = await mobile.newPage();

  for (const [name, url] of [['home', '/'], ['service', '/services/emergency-dentistry'], ['contact', '/contact']]) {
    await mp.goto(BASE + url, { waitUntil: 'load', timeout: 30000 });
    await mp.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await mp.waitForTimeout(900);
    await mp.evaluate(() => window.scrollTo(0, 0));
    await mp.waitForTimeout(400);
    await mp.screenshot({ path: path.join(OUT, `mobile-${name}.png`), fullPage: true });
  }

  await mp.goto(BASE + '/', { waitUntil: 'load', timeout: 30000 });
  await mp.click('#navToggle');
  await mp.waitForTimeout(600);
  const drawer = await mp.evaluate(() => {
    const nav = document.getElementById('primaryNav');
    const r = nav.getBoundingClientRect();
    const el = document.elementFromPoint(Math.round(r.x + r.width / 2), Math.round(r.y + r.height / 2));
    const cta = nav.querySelector('.nav__actions .btn');
    const cr = cta.getBoundingClientRect();
    const ctaEl = document.elementFromPoint(Math.round(cr.x + cr.width / 2), Math.round(cr.y + cr.height / 2));
    const closeBtn = nav.querySelector('.nav__close');
    const br = closeBtn.getBoundingClientRect();
    const bEl = document.elementFromPoint(Math.round(br.x + br.width / 2), Math.round(br.y + br.height / 2));
    const head = nav.querySelector('.nav__head').getBoundingClientRect();
    return {
      open: nav.classList.contains('is-open'),
      drawerReceivesClicks: nav.contains(el),
      ctaClickable: nav.contains(ctaEl),
      closeClickable: nav.contains(bEl),
      headFullyVisible: head.top >= -1,
      bodyLocked: getComputedStyle(document.body).overflow === 'hidden',
      width: Math.round(r.width)
    };
  });
  results.push(['mobile drawer opens', drawer.open]);
  results.push(['drawer receives clicks (not covered by overlay)', drawer.drawerReceivesClicks]);
  results.push(['drawer CTA is clickable', drawer.ctaClickable]);
  results.push(['drawer close button is clickable (not under the topbar)', drawer.closeClickable]);
  results.push(['drawer header fully on screen', drawer.headFullyVisible]);
  results.push(['body scroll locked while drawer open', drawer.bodyLocked]);
  await mp.screenshot({ path: path.join(OUT, 'mobile-drawer.png') });

  // mobile accordion submenu
  await mp.click('.nav__item--mega .nav__sub-toggle');
  await mp.waitForTimeout(450);
  const acc = await mp.evaluate(() => {
    const m = document.getElementById('menu-services');
    return { open: m.classList.contains('is-open'), display: getComputedStyle(m).display };
  });
  results.push(['mobile submenu accordion expands', acc.open && acc.display === 'block']);
  await mp.screenshot({ path: path.join(OUT, 'mobile-drawer-submenu.png') });

  // Escape closes
  await mp.keyboard.press('Escape');
  await mp.waitForTimeout(500);
  const closed = await mp.evaluate(() => !document.getElementById('primaryNav').classList.contains('is-open'));
  results.push(['Escape closes the drawer', closed]);

  /* ------------------------------------------------ reduced motion mode */
  const rm = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const rp = await rm.newPage();
  await rp.goto(BASE + '/', { waitUntil: 'load', timeout: 30000 });
  await rp.waitForTimeout(500);
  const rmState = await rp.evaluate(() => {
    const hidden = [...document.querySelectorAll('.reveal')].filter(
      (el) => parseFloat(getComputedStyle(el).opacity) < 0.9
    ).length;
    const counter = document.querySelector('[data-count]');
    return { hiddenReveals: hidden, counterText: counter ? counter.textContent.trim() : null };
  });
  results.push(['reduced motion: no content left hidden (' + rmState.hiddenReveals + ')', rmState.hiddenReveals === 0]);
  results.push(['reduced motion: counters render final value (' + rmState.counterText + ')', /[\d,]{3,}/.test(rmState.counterText || '')]);
  await rp.screenshot({ path: path.join(OUT, 'desktop-reduced-motion.png'), fullPage: false });

  /* ------------------------------------------------------- horizontal scroll */
  const noHScroll = [];
  for (const w of [1440, 1024, 768, 480, 390, 360]) {
    await dp.setViewportSize({ width: w, height: 900 });
    await dp.goto(BASE + '/', { waitUntil: 'load', timeout: 30000 });
    await dp.waitForTimeout(300);
    const over = await dp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    noHScroll.push([w, over]);
  }
  const worst = Math.max(...noHScroll.map(([, o]) => o));
  results.push(['no horizontal page scroll at any width (worst ' + worst + 'px)', worst <= 1]);

  /* --------------------------------------------------------------- report */
  console.log('\n================ UI VERIFICATION ================');
  let failed = 0;
  for (const [label, ok] of results) {
    if (!ok) failed++;
    console.log((ok ? '  PASS  ' : '  FAIL  ') + label);
  }
  console.log('================================================');
  console.log(failed === 0 ? 'ALL CHECKS PASSED' : failed + ' CHECK(S) FAILED');
  console.log('screenshots → ' + OUT);

  await browser.close();
  process.exitCode = failed === 0 ? 0 : 1;
}

main().catch((e) => {
  console.error('verify-ui failed:', e);
  process.exitCode = 1;
});
