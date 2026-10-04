'use strict';
/**
 * Counts body copy per content file using the same definition as CONTENT_SCHEMA.md:
 * heroIntro + block body/text/intro + items[].text + faqs[].a.
 *
 * Run: node scripts/wordcount.js
 */

const services = require('../data/services');
const { pages } = require('../data/pages');
const { posts } = require('../data/posts');
const home = require('../data/home');

const TARGET = [700, 900];
const HARD_MAX = 950;

function words(v) {
  if (v == null) return 0;
  if (Array.isArray(v)) return v.reduce((s, x) => s + words(x), 0);
  if (typeof v === 'object') {
    return Object.keys(v).reduce((s, k) => s + words(v[k]), 0);
  }
  return String(v).trim().split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

function countBlocks(blocks) {
  let n = 0;
  (blocks || []).forEach((b) => {
    n += words(b.body);
    n += words(b.text);
    n += words(b.intro);
    n += words(b.list);
    n += words(b.listTitle);
    n += words(b.note);
    n += words(b.rows);
    n += words(b.head);
    n += words(b.items);
    n += words(b.quote);
    if (b.h2) n += words(b.h2);
    if (b.eyebrow) n += words(b.eyebrow);
  });
  return n;
}

function report(label, obj) {
  const heroIntro = words(obj.heroIntro) + words(obj.hero && obj.hero.intro);
  const blocks = countBlocks(obj.blocks);
  const faqs = words(obj.faqs);
  const total = heroIntro + blocks + faqs;
  const over = total > HARD_MAX;
  const under = total < TARGET[0] - 80;
  const flag = over ? '  <<< TOO LONG' : under ? '  <<< short' : '';
  console.log(
    String(total).padStart(5) +
      ' words  ' +
      String((obj.blocks || []).length).padStart(2) +
      ' blocks  ' +
      String((obj.faqs || []).length).padStart(2) +
      ' faqs   ' +
      label +
      flag
  );
  return { total, over, under };
}

let problems = 0;
let totals = [];

function run(label, obj) {
  const r = report(label, obj);
  totals.push(r.total);
  if (r.over) problems++;
  return r;
}

console.log('\n--- HOME ---');
run('home', home);

console.log('\n--- SERVICES ---');
services.forEach((s) => run('services/' + s.slug, s));

console.log('\n--- PAGES ---');
pages.forEach((p) => run('pages/' + p.slug, p));

console.log('\n--- POSTS ---');
posts.forEach((p) => run('posts/' + p.slug, p));

const avg = Math.round(totals.reduce((a, b) => a + b, 0) / totals.length);
console.log(
  '\n' +
    totals.length +
    ' files | avg ' +
    avg +
    ' words | range ' +
    Math.min(...totals) +
    '-' +
    Math.max(...totals) +
    ' | over ' +
    HARD_MAX +
    ': ' +
    problems
);
console.log('target ' + TARGET[0] + '-' + TARGET[1] + ' words per file\n');

process.exitCode = problems ? 1 : 0;
