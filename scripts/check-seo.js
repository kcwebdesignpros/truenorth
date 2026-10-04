'use strict';
/**
 * Full-site SEO audit. Checks every route for the things that actually move
 * rankings and that are easy to break when content is rewritten:
 *   unique + correctly-sized titles and meta descriptions, one H1 per page,
 *   canonical URLs, valid JSON-LD, internal linking and image alt coverage.
 *
 * Run: node scripts/check-seo.js     (server must be running on :3000)
 */

const http = require('http');

const services = require('../data/services');
const { pages } = require('../data/pages');
const { posts } = require('../data/posts');
const site = require('../data/site');

const BASE = process.env.BASE_URL || 'http://localhost:3000';

const ROUTES = ['/', '/blog', '/sitemap', '/search?q=implant']
  .concat(pages.map((p) => p.path))
  .concat(services.map((s) => '/services/' + s.slug))
  .concat(posts.map((p) => '/blog/' + p.slug))
  .filter((v, i, a) => a.indexOf(v) === i);

function get(p) {
  return new Promise((res, rej) => {
    http
      .get(BASE + p, (r) => {
        let d = '';
        r.on('data', (c) => (d += c));
        r.on('end', () => res({ status: r.statusCode, html: d }));
      })
      .on('error', rej);
  });
}

const decode = (s) =>
  String(s || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

function pick(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]).trim() : null;
}

(async () => {
  const rows = [];
  let jsonldTotal = 0;
  let jsonldBad = 0;
  const schemaTypes = new Set();

  for (const route of ROUTES) {
    const { status, html } = await get(route);
    const title = pick(html, /<title>([\s\S]*?)<\/title>/);
    const desc = pick(html, /<meta name="description" content="([^"]*)"/);
    const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
    const robots = pick(html, /<meta name="robots" content="([^"]*)"/);
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    const imgs = (html.match(/<img\b[^>]*>/g) || []).length;
    const noAlt = (html.match(/<img\b(?![^>]*\balt=)[^>]*>/g) || []).length;
    const internalLinks = (html.match(/href="\/[^"]*"/g) || []).length;

    const blocks = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || [];
    blocks.forEach((b) => {
      jsonldTotal++;
      const body = b.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
      try {
        const o = JSON.parse(body);
        const arr = Array.isArray(o) ? o : [o];
        arr.forEach((x) => {
          if (!x['@context'] || !x['@type']) throw new Error('missing @context/@type');
          [].concat(x['@type']).forEach((t) => schemaTypes.add(t));
        });
      } catch (e) {
        jsonldBad++;
        console.log('  INVALID JSON-LD on ' + route + ': ' + e.message);
      }
    });

    rows.push({ route, status, title, desc, canonical, robots, h1s, imgs, noAlt, internalLinks });
  }

  /* ------------------------------------------------------------- report */
  console.log('\n=== TITLES & DESCRIPTIONS ===');
  console.log(
    'route'.padEnd(38) + 'code  tLen  dLen  h1  img  noAlt  links  robots'
  );
  rows.forEach((r) => {
    console.log(
      r.route.padEnd(38) +
        String(r.status).padEnd(6) +
        String(r.title ? r.title.length : '—').padStart(4) +
        '  ' +
        String(r.desc ? r.desc.length : '—').padStart(4) +
        '  ' +
        String(r.h1s).padStart(2) +
        '  ' +
        String(r.imgs).padStart(3) +
        '  ' +
        String(r.noAlt).padStart(5) +
        '  ' +
        String(r.internalLinks).padStart(5) +
        '  ' +
        (r.robots || '').split(',')[0]
    );
  });

  /* ------------------------------------------------------------- checks */
  const problems = [];
  const check = (label, ok, detail) => {
    if (!ok) problems.push(label + (detail ? ' — ' + detail : ''));
    console.log((ok ? '  PASS  ' : '  FAIL  ') + label + (detail && !ok ? ' — ' + detail : ''));
  };

  console.log('\n=== ASSERTIONS ===');

  const noTitle = rows.filter((r) => !r.title);
  check('every page has a title', noTitle.length === 0, noTitle.map((r) => r.route).join(', '));

  const longTitle = rows.filter((r) => r.title && r.title.length > 65);
  check('no title over 65 chars', longTitle.length === 0,
    longTitle.map((r) => r.route + ' (' + r.title.length + ')').join(', '));

  const shortTitle = rows.filter((r) => r.title && r.title.length < 30);
  check('no title under 30 chars', shortTitle.length === 0,
    shortTitle.map((r) => r.route + ' (' + r.title.length + ')').join(', '));

  const titles = rows.map((r) => r.title).filter(Boolean);
  const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
  check('all titles unique', dupTitles.length === 0, [...new Set(dupTitles)].join(' | '));

  const noDesc = rows.filter((r) => !r.desc);
  check('every page has a meta description', noDesc.length === 0, noDesc.map((r) => r.route).join(', '));

  const badDesc = rows.filter((r) => r.desc && (r.desc.length < 120 || r.desc.length > 175));
  check('meta descriptions are 120–175 chars', badDesc.length === 0,
    badDesc.map((r) => r.route + ' (' + r.desc.length + ')').join(', '));

  const descs = rows.map((r) => r.desc).filter(Boolean);
  const dupDescs = descs.filter((d, i) => descs.indexOf(d) !== i);
  check('all meta descriptions unique', dupDescs.length === 0, dupDescs.length + ' duplicates');

  const badH1 = rows.filter((r) => r.h1s !== 1);
  check('exactly one H1 per page', badH1.length === 0,
    badH1.map((r) => r.route + ' (' + r.h1s + ')').join(', '));

  const noCanonical = rows.filter((r) => !r.canonical);
  check('every page has a canonical', noCanonical.length === 0, noCanonical.map((r) => r.route).join(', '));

  const wrongCanonical = rows.filter((r) => r.canonical && !r.canonical.startsWith('https://'));
  check('canonicals are absolute https URLs', wrongCanonical.length === 0);

  const missingAlt = rows.filter((r) => r.noAlt > 0);
  check('every <img> has an alt attribute', missingAlt.length === 0,
    missingAlt.map((r) => r.route + ' (' + r.noAlt + ')').join(', '));

  const thinLinks = rows.filter((r) => r.internalLinks < 12);
  check('every page has 12+ internal links', thinLinks.length === 0,
    thinLinks.map((r) => r.route + ' (' + r.internalLinks + ')').join(', '));

  check('all JSON-LD parses and has @context/@type', jsonldBad === 0, jsonldBad + ' invalid blocks');

  const noindex = rows.filter((r) => r.robots && r.robots.indexOf('noindex') === 0);
  console.log('  NOTE  ' + noindex.length + ' page(s) intentionally noindex: ' +
    noindex.map((r) => r.route).join(', '));

  console.log('\n=== SUMMARY ===');
  console.log('routes checked     : ' + rows.length);
  console.log('JSON-LD blocks     : ' + jsonldTotal + ' (' + jsonldBad + ' invalid)');
  console.log('schema types       : ' + [...schemaTypes].sort().join(', '));
  console.log('title length range : ' +
    Math.min(...titles.map((t) => t.length)) + '–' + Math.max(...titles.map((t) => t.length)));
  const dl = descs.map((d) => d.length);
  console.log('desc length range  : ' + Math.min(...dl) + '–' + Math.max(...dl));
  console.log('');
  console.log(problems.length ? problems.length + ' PROBLEM(S)' : 'ALL SEO CHECKS PASSED');
  process.exitCode = problems.length ? 1 : 0;
})();
