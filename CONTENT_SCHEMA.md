# TrueNorth Dental — Content Schema (authoritative contract)

Every page on this site is **data-driven**. Templates render generic "blocks", so a content
file only needs to describe content — never markup, never CSS classes.

Write files as plain CommonJS modules: `module.exports = { ... };`
Use **single-quoted JS strings** and the typographic apostrophe `’` in prose (never an ASCII `'`
inside prose) so nothing needs escaping. No backticks, no template literals.

---

## Business facts — use these consistently in every file

| Field | Value |
|---|---|
| Brand | TrueNorth Dental |
| Tagline | Dentistry That Points You True North |
| Address | 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118 |
| Main phone | (816) 555-0182 |
| Emergency line | (816) 555-0199 (24/7) |
| Email | hello@truenorthdental.com |
| Hours | Mon–Thu 8:00 AM – 6:00 PM · Fri 8:00 AM – 5:00 PM · Sat 9:00 AM – 2:00 PM (by appointment) · Sun closed |
| Founded | 2011 |
| Service area | Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside, Smithville, Platte City, Claycomo, Briarcliff, Weatherby Lake, Kearney, Excelsior Springs and the wider Clay & Platte County northland |
| Doctors | Dr. Amelia Hart, DDS (Founder & Lead Dentist) · Dr. Marcus Reed, DMD (Cosmetic & Implant) · Dr. Priya Nair, DDS, MS (Orthodontist) · Jordan Ellis, RDH (Lead Hygienist) · Sofia Delgado (Practice Manager) · Nia Brooks (Treatment Coordinator) |
| New patient special | $99 (regularly $389): exam, full digital X-rays, cleaning, oral cancer screening, treatment plan |
| Insurance | Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington, Assurant |
| Financing | CareCredit, Cherry, Sunbit, and a $29/month in-house membership plan |
| Rating | 4.9/5 from 1,401 reviews |

Voice: warm, plain-spoken, confident, never salesy or fear-based. Short paragraphs (2–4
sentences). Second person ("you"). Concrete numbers and details. No em-dash overuse, no
"in today's fast-paced world", no filler.

---

## Available icon names

Use **only** these values in `icon:` fields.

```
arrow-right arrow-left arrow-up-right arrow-up arrow-down chevron-down chevron-up
chevron-right chevron-left menu close plus minus check check-circle badge-check search
play external-link phone phone-call mail send map-pin navigation clock calendar
calendar-check timer user users hand-heart award certificate graduation star star-fill
heart heart-pulse activity shield shield-check shield-plus credit-card wallet percent
gift file-text clipboard-check building microscope scan camera image quote smile
smile-plus sparkles zap sun leaf droplet lock refresh thumbs-up headphones
accessibility baby tooth tooth-sparkle implant braces aligner syringe bone stethoscope
alert-triangle first-aid floss brush facebook instagram linkedin youtube x-twitter
tiktok yelp google
```

---

## Blocks

A page is `blocks: [ ... ]`. Every block object has a `type`. Render order = array order.

### 1. `prose` — heading + body copy (the workhorse)
```js
{ type: 'prose', id: 'why-it-matters', eyebrow: 'Optional label', h2: 'Heading',
  body: ['Paragraph one.', 'Paragraph two.'],
  listTitle: 'Optional list heading',
  list: ['Bullet one', 'Bullet two'] }
```
`body` needs **3–5 paragraphs of 60–110 words each**. Optional `list` of 3–6 strings.

### 2. `cards` — icon feature grid
```js
{ type: 'cards', id: 'treatments', eyebrow: 'What we treat', h2: 'Heading', intro: 'One short paragraph.',
  columns: 3,                    // 2, 3 or 4
  items: [ { icon: 'tooth', title: 'Card title', text: '2–3 sentences.' } ] }   // 4–9 items
```

### 3. `steps` — numbered process
```js
{ type: 'steps', id: 'process', eyebrow: 'How it works', h2: 'Heading', intro: 'Short paragraph.',
  items: [ { title: 'Step title', text: '2–3 sentences.' } ] }   // 4–6 items
```

### 4. `stats` — animated counters
```js
{ type: 'stats', id: 'numbers', h2: 'Optional heading', intro: 'Optional line.',
  items: [ { value: 14800, suffix: '+', label: 'Label text' } ] }   // 3–4 items
```
`value` is a number. Optional `prefix`, `decimals`.

### 5. `timeline` — history / milestones
```js
{ type: 'timeline', id: 'history', eyebrow: 'Our story', h2: 'Heading', intro: 'Short paragraph.',
  items: [ { year: '2011', title: 'Milestone', text: '2–3 sentences.' } ] }   // 4–7 items
```

### 6. `split` — image beside copy (alternate `reverse: true`)
```js
{ type: 'split', id: 'comfort', eyebrow: 'Optional', h2: 'Heading',
  body: ['Paragraph one.', 'Paragraph two.'],
  list: ['Checklist line', 'Checklist line'],
  image: '/img/clinic-interior.webp',
  imageAlt: 'Descriptive alt text',
  reverse: false,
  cta: { label: 'Button label', path: '/contact' } }
```

### 7. `table` — comparison or pricing table
```js
{ type: 'table', id: 'cost', eyebrow: 'Optional', h2: 'Heading', intro: 'Short paragraph.',
  head: ['Column A', 'Column B', 'Column C'],
  rows: [ ['Row label', 'Cell', 'Cell'] ],
  note: 'Optional footnote.' }
```
The first cell of each row renders as a bold row header.

### 8. `checklist` — ticked two-column list
```js
{ type: 'checklist', id: 'included', eyebrow: 'Optional', h2: 'Heading', intro: 'Optional line.',
  columns: 2, items: ['Item one', 'Item two'] }   // 6–14 items
```

### 9. `faq` — accordion (also feeds FAQPage schema via the page-level `faqs` array)
```js
{ type: 'faq', id: 'faq', eyebrow: 'Good to know', h2: 'Heading', intro: 'Optional line.',
  items: [ { q: 'Question?', a: '2–4 sentence answer.' } ] }   // 6–10 items
```

### 10. `quote` — pull quote / testimonial
```js
{ type: 'quote', text: 'The quote.', author: 'Marissa T.', role: 'Patient since 2019' }
```

### 11. `gallery` — image grid
```js
{ type: 'gallery', id: 'gallery', eyebrow: 'Optional', h2: 'Heading', intro: 'Optional line.',
  items: [ { image: '/img/clinic-interior.webp', alt: 'Alt text', caption: 'Optional caption' } ] }
```

### 12. `marquee` — scrolling chip strip
```js
{ type: 'marquee', h2: 'Optional heading', items: ['Delta Dental', 'Cigna'] }
```

### 13. `cta` — inline call-to-action band
```js
{ type: 'cta', h2: 'Heading', text: 'One or two sentences.',
  primary: { label: 'Book online', path: '/contact' },
  secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' } }
```

### 14. `text` — small centred note / disclaimer
```js
{ type: 'text', h2: 'Optional heading', body: ['Paragraph.'] }
```

---

## Page object (inner pages)

Write to `data/pages/<slug>.js`:
```js
module.exports = {
  slug: 'about',
  path: '/about',
  name: 'About Us',                 // used in breadcrumbs + nav
  metaTitle: 'About TrueNorth Dental | Kansas City Dentists Since 2011',   // ≤ 62 chars
  metaDescription: '...',           // 150–160 chars, unique, includes a benefit + location
  metaKeywords: 'kansas city dentist, northland dental, ...',
  eyebrow: 'About TrueNorth',
  h1: 'Page headline',
  heroIntro: 'One or two sentences under the H1.',      // 20–35 words
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Descriptive alt text',
  heroStats: [ { value: 14800, suffix: '+', label: 'Patients cared for' } ],  // optional, 2–4
  schemaType: 'AboutPage',          // WebPage | AboutPage | ContactPage | MedicalWebPage
  dateModified: '2026-09-18',
  blocks: [ /* 6–10 blocks */ ],
  faqs: [ { q: '...', a: '...' } ], // optional; required if a `faq` block exists (same content)
  cta: { h2: '...', text: '...', primary: { label: '...', path: '/contact' } }
};
```

**Word count target: 1,900–2,300 words of body copy per page** (counted across
`heroIntro`, all block `body`/`text`/`intro` fields, `items[].text`, and `faqs[].a`).

---

## Service object

Write to `data/services/<slug>.js`:
```js
module.exports = {
  slug: 'general-dentistry',
  order: 1,
  name: 'General & Family Dentistry',
  shortName: 'General Dentistry',
  icon: 'tooth',
  image: '/img/svc-general-dentistry.webp',
  imageAlt: '...',
  tagline: 'One short sentence, 8–14 words.',
  metaTitle: 'General & Family Dentistry in Kansas City | TrueNorth Dental',
  metaDescription: '...',           // 150–160 chars
  metaKeywords: '...',
  eyebrow: 'Preventive & family care',
  heroIntro: '20–35 words under the H1.',
  priceFrom: 'From $99',            // display string
  priceValue: 99,                   // number, for schema
  duration: '45–60 minutes',
  highlights: ['5–6 short treatment names for the offer catalogue'],
  blocks: [ /* 6–9 blocks */ ],
  faqs: [ { q: '...', a: '...' } ],  // 6–8, matching the `faq` block
  related: ['cosmetic-dentistry', 'orthodontics'],   // 2–3 other service slugs
  cta: { h2: '...', text: '...', primary: { label: '...', path: '/contact' } }
};
```

**Word count target: 1,900–2,300 words of body copy per service page.**

---

## Blog post object

Write to `data/posts/<slug>.js`:
```js
module.exports = {
  slug: 'how-often-should-you-visit-the-dentist',
  title: 'How Often Should You Actually See the Dentist?',
  metaTitle: '...',            // ≤ 62 chars
  metaDescription: '...',      // 150–160 chars
  metaKeywords: '...',
  excerpt: '35–50 word summary used on the blog index and cards.',
  image: '/img/svc-general-dentistry.webp',
  imageAlt: '...',
  category: 'Preventive Care',
  tags: ['cleanings', 'prevention'],
  author: 'Dr. Amelia Hart',
  authorRole: 'Founder & Lead Dentist',
  date: '2026-08-22',
  updated: '2026-09-10',
  readTime: '7 min read',
  wordCount: 1450,
  blocks: [ /* 7–10 blocks */ ],
  faqs: [ { q: '...', a: '...' } ],
  cta: { h2: '...', text: '...', primary: { label: '...', path: '/contact' } }
};
```

**Word count target: 1,300–1,800 words per post.**

---

## Available site imagery

Reuse these — never invent image paths.

| Path | What it shows |
|---|---|
| `/img/hero-smile.webp` | Woman laughing with a toothbrush, navy/teal backdrop (home hero) |
| `/img/clinic-interior.webp` | Bright modern dental operatory |
| `/img/about-dentist-patient.webp` | Dentist with a smiling patient in the chair |
| `/img/svc-general-dentistry.webp` | Gloved hands doing a routine exam |
| `/img/svc-cosmetic-dentistry.webp` | Veneer shade guide next to a smile |
| `/img/svc-teeth-whitening.webp` | Patient under whitening LED trays |
| `/img/svc-dental-implants.webp` | Surgeon placing an implant |
| `/img/svc-orthodontics.webp` | Teen holding a clear aligner |
| `/img/svc-emergency-dentistry.webp` | Dentist comforting a patient with jaw pain |
| `/img/cta-smile.webp` | Group of happy people laughing outdoors |
| `/img/team-amelia-hart.webp` | Dr. Amelia Hart portrait |
| `/img/team-marcus-reed.webp` | Dr. Marcus Reed portrait |
| `/img/team-priya-nair.webp` | Dr. Priya Nair portrait |
| `/img/team-jordan-ellis.webp` | Jordan Ellis portrait |

---

## Hard rules

1. Output **only** the module file, valid JavaScript, `module.exports = { ... };`.
2. Never include HTML tags inside strings — plain text only.
3. Every `faqs` entry must also appear in the matching `faq` block (schema must mirror visible content).
4. Internal links must be real routes:
   `/`, `/about`, `/doctors`, `/services`, `/services/<slug>`, `/new-patients`,
   `/insurance-financing`, `/technology`, `/reviews`, `/faq`, `/blog`, `/blog/<slug>`,
   `/contact`, `/careers`, `/privacy-policy`, `/terms`, `/accessibility`, `/sitemap`.
   Phone links use `tel:+18165550182`.
5. Vary block types — never use `prose` for the whole page.
6. No competitor names. No claims of being "the best" or "#1". No medical guarantees.
