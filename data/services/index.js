'use strict';
/**
 * Ordered service catalogue. Each file is one service detail page.
 * Order here drives the nav mega-menu, the services index and the sitemap.
 *
 * NOTE: every require is STATIC on purpose. A dynamic `require('./' + slug)`
 * cannot be resolved by esbuild when Netlify bundles the function, and the
 * deployed site then throws `Module not found in bundle` on every request.
 */

const services = [
  require('./general-dentistry'),
  require('./cosmetic-dentistry'),
  require('./teeth-whitening'),
  require('./dental-implants'),
  require('./orthodontics'),
  require('./emergency-dentistry')
];

module.exports = services.sort((a, b) => (a.order || 99) - (b.order || 99));
