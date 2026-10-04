'use strict';
/* Dev-only: screenshot the footer credit line to check icon placement. */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');
const OUT = path.resolve(__dirname, '..', '_screenshots');
const EXE = 'C:/Users/GrowNion/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch({ executablePath: EXE, args: ['--force-color-profile=srgb'] });
  for (const [nm, w] of [['desktop', 1440], ['mobile', 390]]) {
    const c = await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
    const p = await c.newPage();
    await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 30000 });
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await p.waitForTimeout(900);
    const el = await p.$('.footer__credit');
    if (!el) { console.log('no .footer__credit'); await c.close(); continue; }
    await el.scrollIntoViewIfNeeded();
    await p.waitForTimeout(400);
    // include a little surrounding context
    const box = await el.boundingBox();
    await p.screenshot({
      path: path.join(OUT, 'credit-' + nm + '.png'),
      clip: { x: Math.max(0, box.x - 16), y: Math.max(0, box.y - 90), width: Math.min(w, box.width + 32), height: box.height + 120 }
    });
    console.log('shot credit-' + nm + '.png');
    await c.close();
  }
  await b.close();
})();
