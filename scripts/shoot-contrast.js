'use strict';
/**
 * Captures close-ups of the sections that carried the contrast bugs, so the
 * fix can be reviewed visually rather than only numerically.
 * Run: node scripts/shoot-contrast.js
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const OUT = path.resolve(__dirname, '..', '_screenshots');
const BASE = process.env.BASE_URL || 'http://localhost:3000';
const EXE = 'C:/Users/GrowNion/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

const SHOTS = [
  ['offer-panel', '/new-patients', '.offer', 1440],
  ['offer-panel-mobile', '/new-patients', '.offer', 390],
  ['steps-block', '/services/general-dentistry', '.section--steps', 1440],
  ['cta-band', '/', '.cta-band', 1440],
  ['footer-cta', '/', '.footer__cta', 1440],
  ['stats-block', '/', '.section--stats', 1440],
  ['hero', '/', '.hero', 1440],
  ['reviews', '/reviews', '.section--carousel', 1440]
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: EXE, args: ['--force-color-profile=srgb'] });

  for (const [name, url, sel, width] of SHOTS) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(BASE + url, { waitUntil: 'load', timeout: 30000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(700);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const el = await page.$(sel);
    if (!el) { console.log(`  skip ${name}: no ${sel}`); await ctx.close(); continue; }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: path.join(OUT, `fix-${name}.png`) });
    console.log(`  shot fix-${name}.png`);
    await ctx.close();
  }
  await browser.close();
})();
