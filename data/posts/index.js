'use strict';
/**
 * Blog articles, newest first.
 *
 * NOTE: static requires only — see data/services/index.js for why a dynamic
 * require breaks the Netlify function bundle.
 */

const all = [
  require('./how-often-should-you-see-the-dentist'),
  require('./clear-aligners-vs-braces'),
  require('./dental-emergency-what-to-do'),
  require('./dental-implants-what-to-expect'),
  require('./signs-you-may-need-a-root-canal')
];

const posts = all.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

const bySlug = posts.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});

const categories = [...new Set(posts.map((p) => p.category))];

module.exports = { posts, bySlug, categories };
