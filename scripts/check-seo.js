'use strict';
const http = require('http');
const pages = [
  '/', '/about', '/doctors', '/services', '/services/dental-implants',
  '/blog', '/blog/dental-implants-what-to-expect', '/faq', '/contact',
  '/reviews', '/careers', '/insurance-financing', '/technology',
  '/new-patients', '/privacy-policy', '/services/emergency-dentistry'
];
function get(p) {
  return new Promise((res, rej) => {
    http.get('http://localhost:3000' + p, (r) => {
      let d = '';
      r.on('data', (c) => (d += c));
      r.on('end', () => res(d));
    }).on('error', rej);
  });
}
(async () => {
  let total = 0;
  let bad = 0;
  const types = new Set();
  for (const p of pages) {
    const html = await get(p);
    const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
    let m;
    let n = 0;
    while ((m = re.exec(html))) {
      n++;
      total++;
      try {
        const o = JSON.parse(m[1]);
        const arr = Array.isArray(o) ? o : [o];
        arr.forEach((x) => {
          if (!x['@context'] || !x['@type']) throw new Error('missing @context/@type');
          [].concat(x['@type']).forEach((t) => types.add(t));
        });
      } catch (e) {
        bad++;
        console.log('  INVALID on ' + p + ': ' + e.message);
      }
    }
    if (n === 0) console.log('  NO JSON-LD on ' + p);
  }
  console.log('JSON-LD blocks parsed: ' + total + ', invalid: ' + bad);
  console.log('distinct schema types: ' + [...types].sort().join(', '));

  const home = await get('/');
  const credit =
    home.includes('Web and Marketing By') &&
    home.includes('href="https://kansascitywebdesignpros.com/"') &&
    home.includes('>KC Web Design Pros</a>');
  console.log('footer credit "Web and Marketing By KC Web Design Pros" linking to kansascitywebdesignpros.com: ' + credit);

  // Key on-page SEO assertions
  const checks = [
    ['canonical present', /<link rel="canonical" href="https:\/\/www\.truenorthdental\.com\//.test(home)],
    ['og:image 1200x630', /og:image:width" content="1200"/.test(home) && /og:image:height" content="630"/.test(home)],
    ['twitter summary_large_image', /twitter:card" content="summary_large_image"/.test(home)],
    ['favicon.ico linked', /rel="icon" href="\/img\/favicon\.ico"/.test(home)],
    ['manifest linked', /rel="manifest" href="\/site\.webmanifest"/.test(home)],
    ['font preload (self-hosted)', /preload" as="font"[^>]*\/fonts\/plus-jakarta-sans-400\.woff2/.test(home)],
    ['hero LCP preload + srcset', /preload" as="image" href="\/img\/hero-smile\.webp" imagesrcset=/.test(home)],
    ['Kansas City in title', /<title>[^<]*Kansas City/.test(home)],
    ['lang="en-US"', /<html lang="en-US"/.test(home)],
    ['skip link present', /class="skip-link"/.test(home)]
  ];
  console.log('');
  checks.forEach(([l, ok]) => console.log((ok ? '  PASS  ' : '  FAIL  ') + l));
})();
