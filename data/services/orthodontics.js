'use strict';
/**
 * Service detail page — Braces & Clear Aligners.
 * Data only. No markup, no CSS classes. Rendered by generic block templates.
 */

module.exports = {
  slug: 'orthodontics',
  order: 5,
  name: 'Braces & Clear Aligners',
  shortName: 'Orthodontics',
  icon: 'braces',
  image: '/img/svc-orthodontics.webp',
  imageAlt: 'Teen holding a clear aligner at TrueNorth Dental in Kansas City',
  tagline: 'Straight teeth for kids, teens and adults, without the guesswork.',
  metaTitle: 'Braces & Clear Aligners in Kansas City | TrueNorth',
  metaDescription:
    'Clear aligners, ceramic and metal braces for kids, teens and adults in the Kansas City northland, led by Dr. Priya Nair. Free school screenings. Book today.',
  metaKeywords:
    'braces kansas city, clear aligners northland, invisalign kansas city, orthodontist gladstone mo, adult orthodontics, early treatment children, retainers',
  eyebrow: 'Straighten with confidence',
  heroIntro:
    'Braces and clear aligners for every age, from a child’s first check at seven to adults who never had the chance. Dr. Priya Nair leads our orthodontic care.',
  priceFrom: 'From $3,200',
  priceValue: 3200,
  duration: '6–24 months',
  highlights: [
    'Clear Aligners',
    'Ceramic Braces',
    'Metal Braces',
    'Early Treatment (Ages 7–10)',
    'Adult Orthodontics',
    'Retainers & Retention'
  ],
  blocks: [
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'Your options',
      h2: 'Braces and aligner treatments',
      intro:
        'The right way to straighten your teeth depends on your bite, your age and how visible you are happy for treatment to be.',
      columns: 3,
      items: [
        {
          icon: 'aligner',
          title: 'Clear Aligners',
          text: 'Custom, nearly invisible trays you change every one to two weeks. They work best for mild to moderate crowding when worn 20 to 22 hours a day.'
        },
        {
          icon: 'braces',
          title: 'Ceramic Braces',
          text: 'Tooth-coloured brackets that blend in far more than metal but handle the same complex movements. Treatment usually runs 18 to 24 months.'
        },
        {
          icon: 'tooth',
          title: 'Metal Braces',
          text: 'Traditional stainless steel brackets and wire, still the most durable option. Best for complex bites, rotated teeth and younger patients.'
        },
        {
          icon: 'baby',
          title: 'Early Treatment (7–10)',
          text: 'A first check around age seven catches problems while the jaw is still growing. Short, simple treatment can prevent extractions or surgery later.'
        },
        {
          icon: 'user',
          title: 'Adult Orthodontics',
          text: 'Adults make up about a quarter of our orthodontic patients. Aligners let you straighten your teeth without anyone at work noticing.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'From first scan to your last retainer check',
      intro: 'Orthodontics is a series of small appointments rather than one big event.',
      items: [
        {
          title: 'Consultation and digital scan',
          text: 'We take an intraoral scan, photos and X-rays, then examine how your teeth and jaw meet. There are no impression trays.'
        },
        {
          title: 'Your treatment plan',
          text: 'Dr. Nair shows you a digital simulation of the finished result, plus how long it will take and what it will cost.'
        },
        {
          title: 'Fitting or first trays',
          text: 'Braces are bonded in one visit of about an hour. Aligner patients receive their first sets and a schedule for changing them.'
        },
        {
          title: 'Adjustments along the way',
          text: 'Braces are checked every six to eight weeks. Aligner patients are seen every eight to ten weeks and can send photos between visits.'
        },
        {
          title: 'Retention for life',
          text: 'When the teeth are aligned, we remove the braces and fit a retainer. A fixed wire plus a night retainer keeps your result for decades.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Compare your options',
      h2: 'Aligners or braces?',
      intro:
        'Both straighten teeth well when used properly. The honest difference comes down to your bite and how disciplined you are about wear time.',
      head: ['', 'Clear aligners', 'Ceramic braces', 'Metal braces'],
      rows: [
        ['How visible', 'Nearly invisible', 'Tooth-coloured', 'Visible metal'],
        ['Removable', 'Yes, to eat and clean', 'No', 'No'],
        ['Typical treatment', '6–18 months', '18–24 months', '18–24 months'],
        ['Best for', 'Mild to moderate crowding', 'Moderate to complex bites', 'Complex bites, all ages'],
        ['Typical KC cost', '$3,200–$6,500', '$3,800–$6,000', '$3,000–$5,200']
      ],
      note: 'Costs reflect the Kansas City market in 2026 and depend on case complexity. You receive a written quote after your free consultation.'
    },
    {
      type: 'checklist',
      id: 'first-weeks',
      eyebrow: 'Getting started',
      h2: 'What to expect in the first weeks',
      intro: 'The first week is the adjustment period. Knowing what is normal helps you settle in faster.',
      columns: 2,
      items: [
        'Expect mild soreness for two to three days',
        'Stick to soft foods until chewing feels comfortable',
        'Use the wax we give you on any bracket that rubs',
        'Brush after every meal with braces on',
        'Change aligners at night so tightness passes while you sleep',
        'Clean aligners with cool water, never hot',
        'Keep aligners in their case when they are out',
        'Call us if a bracket comes loose or a wire pokes'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Orthodontic questions',
      intro: 'The things parents and adult patients ask us most, answered plainly.',
      items: [
        {
          q: 'At what age should my child first see an orthodontist?',
          a: 'A first check around age seven, while the jaw is still growing, is recommended. Most seven-year-olds need only monitoring, and we will say so.'
        },
        {
          q: 'Are clear aligners as effective as braces?',
          a: 'For mild to moderate crowding they work just as well, provided you wear them 20 to 22 hours a day. Complex bites still respond better to braces.'
        },
        {
          q: 'How long will treatment take?',
          a: 'Most cases run 12 to 24 months. Aligner cases are often shorter, around 6 to 18 months, and we give you a realistic estimate after your scan.'
        },
        {
          q: 'Do you still use impression trays?',
          a: 'No. We use an intraoral scanner that takes a few minutes and shows a digital model on screen. It is far more comfortable than putty.'
        },
        {
          q: 'What happens after treatment ends?',
          a: 'Retention is not optional, because teeth drift back for life. Most patients get a fixed wire plus a night retainer, which holds the result for decades.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'At what age should my child first see an orthodontist?',
      a: 'A first check around age seven, while the jaw is still growing, is recommended. Most seven-year-olds need only monitoring, and we will say so.'
    },
    {
      q: 'Are clear aligners as effective as braces?',
      a: 'For mild to moderate crowding they work just as well, provided you wear them 20 to 22 hours a day. Complex bites still respond better to braces.'
    },
    {
      q: 'How long will treatment take?',
      a: 'Most cases run 12 to 24 months. Aligner cases are often shorter, around 6 to 18 months, and we give you a realistic estimate after your scan.'
    },
    {
      q: 'Do you still use impression trays?',
      a: 'No. We use an intraoral scanner that takes a few minutes and shows a digital model on screen. It is far more comfortable than putty.'
    },
    {
      q: 'What happens after treatment ends?',
      a: 'Retention is not optional, because teeth drift back for life. Most patients get a fixed wire plus a night retainer, which holds the result for decades.'
    }
  ],
  related: ['general-dentistry', 'dental-implants', 'teeth-whitening'],
  cta: {
    h2: 'See your future smile before you commit',
    text: 'Book a free orthodontic consultation and leave with a digital simulation of your finished result, plus a clear price.',
    primary: { label: 'Book a free consult', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
