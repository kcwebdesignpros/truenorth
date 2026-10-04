'use strict';
/**
 * Image pipeline.
 *
 *   Phase 1 (one-time, only when img/raw contains generated PNGs):
 *     converts the raw source renders into committed WebP masters in /img,
 *     plus favicons, an apple-touch-icon, a real .ico and a 1200x630 OG image.
 *
 *   Phase 2 (idempotent, safe to run on every install):
 *     writes responsive WebP variants (img/<name>-<w>.webp) and img/manifest.json
 *     which the server reads at boot to build srcset attributes.
 *
 * Run: node scripts/generate-image-variants.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const IMG = path.join(ROOT, 'img');
const RAW = path.join(IMG, 'raw');
const MANIFEST = path.join(IMG, 'manifest.json');

/* ------------------------------------------------------------------ config */

// Raw render (by filename prefix, or exact stem) -> committed master name.
const IMPORT = [
  { match: 'Photorealistic_professional_de_', as: 'hero-smile' },
  { match: 'Photorealistic_modern_dental_c_', as: 'clinic-interior' },
  { match: 'Photorealistic_dental_care_pho_', as: 'about-dentist-patient' },
  { match: 'Photorealistic_general_dentist_', as: 'svc-general-dentistry' },
  { match: 'Photorealistic_cosmetic_dentis_', as: 'svc-cosmetic-dentistry' },
  { match: 'Photorealistic_teeth_whitening_', as: 'svc-teeth-whitening' },
  { match: 'Photorealistic_dental_implant_', as: 'svc-dental-implants' },
  { match: 'Photorealistic_orthodontics_ph_', as: 'svc-orthodontics' },
  { match: 'Photorealistic_emergency_denta_', as: 'svc-emergency-dentistry' },
  { match: 'Photorealistic_lifestyle_photo_', as: 'cta-smile' },
  // Headshots share a prefix, so match on the full unique stem.
  { match: 'Professional_corporate_headsho_2026-10-04T06-21-13', as: 'team-marcus-reed' },
  { match: 'Professional_corporate_headsho_2026-10-04T06-21-15', as: 'team-amelia-hart' },
  { match: 'Professional_corporate_headsho_2026-10-04T06-23-53', as: 'team-jordan-ellis' },
  { match: 'Professional_corporate_headsho_2026-10-04T06-23-55', as: 'team-priya-nair' }
];

// Master name -> widths to generate. Largest entry should be <= the master width.
const VARIANTS = {
  'hero-smile': [480, 760, 1100, 1400],
  'clinic-interior': [420, 700, 1000, 1400],
  'about-dentist-patient': [380, 620, 880, 1024],
  'cta-smile': [560, 900, 1200, 1400],
  'svc-general-dentistry': [420, 700, 1000, 1400],
  'svc-cosmetic-dentistry': [420, 700, 1000, 1400],
  'svc-teeth-whitening': [420, 700, 1000, 1400],
  'svc-dental-implants': [420, 700, 1000, 1400],
  'svc-orthodontics': [420, 700, 1000, 1400],
  'svc-emergency-dentistry': [420, 700, 1000, 1400],
  'team-marcus-reed': [240, 360, 480, 720],
  'team-amelia-hart': [240, 360, 480, 720],
  'team-priya-nair': [240, 360, 480, 720],
  'team-jordan-ellis': [240, 360, 480, 720]
};

// Masters that never get responsive variants (icons / already tiny).
const SKIP_VARIANTS = new Set(['logo', 'favicon', 'og-image']);

/* ----------------------------------------------------------------- helpers */

function listRaw() {
  if (!fs.existsSync(RAW)) return [];
  return fs.readdirSync(RAW).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
}

async function toWebp(src, dest, width, quality = 82) {
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dest);
  return fs.statSync(dest).size;
}

/** Minimal single-image .ico container wrapping a PNG payload. */
function writeIco(pngBuffer, dest, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12); // offset
  fs.writeFileSync(dest, Buffer.concat([header, entry, pngBuffer]));
}

/* ------------------------------------------------------- phase 1: import */

async function importSources() {
  const files = listRaw();
  if (!files.length) return false;

  console.log('Phase 1 — importing raw sources…');
  let imported = 0;

  for (const item of IMPORT) {
    const hit = files.find((f) => f.startsWith(item.match));
    if (!hit) {
      console.warn('  ! no raw file matched', item.match);
      continue;
    }
    const dest = path.join(IMG, item.as + '.webp');
    const bytes = await toWebp(path.join(RAW, hit), dest, 1600, 84);
    const meta = await sharp(dest).metadata();
    console.log(`  ✓ ${item.as}.webp  ${meta.width}x${meta.height}  ${(bytes / 1024).toFixed(0)} KB`);
    imported++;
  }

  // Brand assets already shipped as WebP in /img.
  const logo = path.join(IMG, 'TrueNorth Dental Logo.webp');
  const fav = path.join(IMG, 'TrueNorth Dental Favicon.webp');
  if (fs.existsSync(logo)) {
    await sharp(logo).resize({ width: 500, withoutEnlargement: true }).webp({ quality: 90, effort: 6 }).toFile(path.join(IMG, 'logo.webp'));
    const m = await sharp(path.join(IMG, 'logo.webp')).metadata();
    console.log(`  ✓ logo.webp  ${m.width}x${m.height}`);
  }
  if (fs.existsSync(fav)) {
    const src = fav;
    const m0 = await sharp(src).metadata();
    // Flatten onto white so the mark keeps its contrast on dark browser chrome.
    const flat = await sharp(src)
      .resize({ width: 512, height: 512, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();

    await sharp(flat).resize(512, 512, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).webp({ quality: 92, effort: 6 }).toFile(path.join(IMG, 'favicon.webp'));

    const sizes = [
      [16, 'favicon-16.png'],
      [32, 'favicon-32.png'],
      [48, 'favicon-48.png'],
      [180, 'apple-touch-icon.png'],
      [192, 'favicon-192.png'],
      [512, 'favicon-512.png']
    ];
    for (const [size, name] of sizes) {
      await sharp(flat)
        .resize(size, size, { fit: 'contain', background: '#ffffff' })
        .flatten({ background: '#ffffff' })
        .png({ compressionLevel: 9 })
        .toFile(path.join(IMG, name));
    }
    const ico = await sharp(flat).resize(32, 32, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toBuffer();
    writeIco(ico, path.join(IMG, 'favicon.ico'), 32);
    console.log(`  ✓ favicons (16/32/48/180/192/512 + favicon.ico) from ${m0.width}x${m0.height}`);
  }

  // 1200x630 Open Graph card.
  const ogBase = path.join(IMG, 'hero-smile.webp');
  if (fs.existsSync(ogBase)) {
    const W = 1200;
    const H = 630;
    const base = await sharp(ogBase).resize(W, H, { fit: 'cover', position: 'attention' }).toBuffer();
    const logoBuf = fs.existsSync(path.join(IMG, 'logo.webp'))
      ? await sharp(path.join(IMG, 'logo.webp')).resize({ width: 240 }).png().toBuffer()
      : null;
    const logoMeta = logoBuf ? await sharp(logoBuf).metadata() : null;

    // The wordmark is dark navy, so it needs a white badge to stay legible.
    const badge = logoMeta
      ? `<rect x="64" y="64" width="${logoMeta.width + 44}" height="${logoMeta.height + 28}" rx="18" fill="#FFFFFF"/>`
      : '';

    const overlay = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
         <defs>
           <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
             <stop offset="0%" stop-color="#063B8C" stop-opacity="0.94"/>
             <stop offset="52%" stop-color="#063B8C" stop-opacity="0.72"/>
             <stop offset="100%" stop-color="#08A8B8" stop-opacity="0.10"/>
           </linearGradient>
         </defs>
         <rect width="${W}" height="${H}" fill="url(#g)"/>
         <rect x="0" y="0" width="10" height="${H}" fill="#08A8B8"/>
         ${badge}
         <text x="72" y="330" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#FFFFFF">Dentistry that points</text>
         <text x="72" y="392" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#DDF6F8">you True North.</text>
         <text x="72" y="450" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="25" fill="#EAF4FC">Family, cosmetic &amp; implant dentistry in Kansas City</text>
         <text x="72" y="486" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="25" fill="#EAF4FC">(816) 555-0182  ·  truenorthdental.com</text>
       </svg>`
    );

    const composite = [{ input: overlay, top: 0, left: 0 }];
    if (logoBuf) composite.push({ input: logoBuf, top: 64 + 14, left: 64 + 22 });
    await sharp(base)
      .composite(composite)
      .jpeg({ quality: 86, progressive: true, mozjpeg: true })
      .toFile(path.join(IMG, 'og-image.jpg'));
    console.log('  ✓ og-image.jpg 1200x630');
  }

  console.log(`Phase 1 complete — ${imported} masters imported.`);
  return true;
}

/* ----------------------------------------------------- phase 2: variants */

async function buildVariants() {
  console.log('\nPhase 2 — building responsive variants…');
  const manifest = {};
  let made = 0;
  let pruned = 0;

  const names = Object.keys(VARIANTS).filter((n) => fs.existsSync(path.join(IMG, n + '.webp')));

  for (const name of names) {
    const master = path.join(IMG, name + '.webp');
    const originalBytes = fs.statSync(master).size;
    const meta = await sharp(master).metadata();
    const natural = meta.width;

    // Build an explicit allow-list first — never glob-delete.
    const planned = VARIANTS[name].filter((w) => w < natural);
    const built = [];

    for (const w of planned) {
      const dest = path.join(IMG, `${name}-${w}.webp`);
      const bytes = await toWebp(master, dest, w, 82);
      built.push({ w, bytes, dest });
    }

    // Keep only a strictly increasing size ladder, ascending by width, and never
    // offer a variant that is heavier than the master itself.
    built.sort((a, b) => a.w - b.w);
    const kept = [];
    let prevBytes = 0;
    for (const b of built) {
      if (b.bytes < originalBytes && b.bytes > prevBytes) {
        kept.push(b.w);
        prevBytes = b.bytes;
        made++;
      } else {
        fs.unlinkSync(b.dest);
        pruned++;
      }
    }

    // Remove only variants that are no longer in the plan (explicit names).
    const existing = fs
      .readdirSync(IMG)
      .filter((f) => f.startsWith(name + '-') && /-\d+\.webp$/.test(f));
    for (const f of existing) {
      const w = Number(f.replace(name + '-', '').replace('.webp', ''));
      if (!kept.includes(w)) {
        fs.unlinkSync(path.join(IMG, f));
        pruned++;
      }
    }

    manifest[name + '.webp'] = { natural, height: meta.height, variants: kept, bytes: originalBytes };
    console.log(`  ${name}: natural ${natural}w ${(originalBytes / 1024).toFixed(0)} KB → variants ${kept.join(', ') || '(none)'}`);
  }

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Phase 2 complete — ${made} variants written, ${pruned} pruned. manifest.json updated.`);
}

/* ------------------------------------------------------------------- main */

(async () => {
  try {
    if (!fs.existsSync(IMG)) throw new Error('img/ directory not found at ' + IMG);
    await importSources();
    await buildVariants();
  } catch (err) {
    console.error('Image pipeline failed:', err.message);
    process.exitCode = 1;
  }
})();
