'use strict';

/**
 * Service detail page: Cosmetic Dentistry & Smile Design.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'cosmetic-dentistry',
  order: 2,
  name: 'Cosmetic Dentistry & Smile Design',
  shortName: 'Cosmetic Dentistry',
  icon: 'sparkles',
  image: '/img/svc-cosmetic-dentistry.webp',
  imageAlt: 'Veneer shade guide held beside a patient’s smile at TrueNorth Dental in Kansas City',
  tagline: 'A smile that looks like yours, only more finished.',
  metaTitle: 'Cosmetic Dentistry & Smile Design | Kansas City Northland',
  metaDescription:
    'Porcelain veneers, bonding, tooth-coloured crowns and digital smile design from a Kansas City northland cosmetic dentist. Preview your smile before we begin.',
  metaKeywords:
    'cosmetic dentist kansas city, porcelain veneers northland, smile makeover kansas city mo, composite bonding gladstone, tooth coloured crowns liberty mo, digital smile design parkville',
  eyebrow: 'Cosmetic & smile design',
  heroIntro:
    'Cosmetic dentistry in Kansas City planned around your face, not a catalogue, so the result looks like a better version of you.',
  priceFrom: 'From $450',
  priceValue: 450,
  duration: '60–90 minutes per visit',
  highlights: [
    'Porcelain veneers',
    'Composite bonding',
    'Smile makeovers',
    'Tooth-coloured crowns',
    'Gum contouring',
    'Digital smile design'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-cosmetic',
      eyebrow: 'Why it is not vanity',
      h2: 'Cosmetic dentistry is about proportion, not perfection',
      body: [
        'A good result is not about the whitest, biggest teeth. It is about proportion, how each tooth relates to your face and smile line.',
        'So we start with your face, not your teeth. Dr. Marcus Reed photographs your smile, measures the proportions and asks what you actually dislike.',
        'Sometimes the answer is whitening and a little bonding. Sometimes it is a few veneers. We tell you which one your case calls for.',
        'Modern porcelain is thin enough to bond with minimal preparation, and composite can be sculpted freehand in a single visit. Both match your neighbours closely.'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we offer',
      h2: 'Six ways to change a smile',
      intro:
        'Most makeovers combine two or three treatments, chosen to suit your teeth and your budget.',
      columns: 3,
      items: [
        {
          icon: 'sparkles',
          title: 'Porcelain veneers',
          text: 'Thin custom shells bonded to the front of your teeth to change shape and shade. Six to ten teeth take two or three visits.'
        },
        {
          icon: 'tooth',
          title: 'Composite bonding',
          text: 'Tooth-coloured resin sculpted by hand for chips, small gaps and worn edges. Most cases finish in one visit.'
        },
        {
          icon: 'certificate',
          title: 'Tooth-coloured crowns',
          text: 'All-ceramic crowns that cover a worn or root-treated tooth while matching its neighbours. Zirconia gives a natural translucency.'
        },
        {
          icon: 'activity',
          title: 'Gum contouring',
          text: 'Reshaping the gumline with a soft-tissue laser to even a gummy or lopsided smile. It often heals within a week.'
        },
        {
          icon: 'scan',
          title: 'Digital smile design',
          text: 'Photos and a 3D scan let us plan and preview your result before treatment. You approve the shape and shade first.'
        },
        {
          icon: 'aligner',
          title: 'Diastema closure',
          text: 'Closing the gap between your front teeth with bonding or veneers, or with clear aligners when the spacing is wider.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Choosing a treatment',
      h2: 'Veneers, bonding or crowns?',
      intro:
        'These three can all change how a tooth looks, but they suit different problems and last different lengths of time.',
      head: ['Treatment', 'Best for', 'Typical lifespan'],
      rows: [
        ['Porcelain veneers', 'Shape, shade and alignment', '10–15 years'],
        ['Composite bonding', 'Chips, small gaps, single teeth', '5–8 years'],
        ['Tooth-coloured crowns', 'Worn or root-treated teeth', '10–15 years'],
        ['Whitening', 'Yellowing with healthy, well-shaped teeth', '1–3 years']
      ],
      note: 'Bonding is quicker and cheaper but chips sooner. Veneers cost more and last longer. We tell you which your teeth need.'
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Cosmetic dentistry questions, answered',
      intro: 'What patients most want to know before they begin.',
      items: [
        {
          q: 'Will veneers look obviously fake?',
          a: 'Not when designed properly. We match the shade and shape to your face, so the result reads as your own teeth on a very good day.'
        },
        {
          q: 'How much tooth do you remove for veneers?',
          a: 'Usually less than half a millimetre of enamel, and often none at all for a minimal-prep case. We always choose the most conservative option.'
        },
        {
          q: 'Is bonding as good as veneers?',
          a: 'For one chip or small gap, bonding is excellent and far cheaper. Across several teeth, porcelain holds its colour and shape longer.'
        },
        {
          q: 'How long does a smile makeover take?',
          a: 'A single bonding visit can finish in an hour. A set of six to ten veneers usually takes two or three appointments over three to five weeks.'
        },
        {
          q: 'Do you offer financing for cosmetic treatment?',
          a: 'Yes. We work with CareCredit, Cherry and Sunbit, and can stage treatment across several months to spread the cost.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'See your new smile before you commit',
      text: 'Book a cosmetic consultation and preview a digital design on your own face, with costs in writing.',
      primary: { label: 'Book a consultation', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Will veneers look obviously fake?',
      a: 'Not when designed properly. We match the shade and shape to your face, so the result reads as your own teeth on a very good day.'
    },
    {
      q: 'How much tooth do you remove for veneers?',
      a: 'Usually less than half a millimetre of enamel, and often none at all for a minimal-prep case. We always choose the most conservative option.'
    },
    {
      q: 'Is bonding as good as veneers?',
      a: 'For one chip or small gap, bonding is excellent and far cheaper. Across several teeth, porcelain holds its colour and shape longer.'
    },
    {
      q: 'How long does a smile makeover take?',
      a: 'A single bonding visit can finish in an hour. A set of six to ten veneers usually takes two or three appointments over three to five weeks.'
    },
    {
      q: 'Do you offer financing for cosmetic treatment?',
      a: 'Yes. We work with CareCredit, Cherry and Sunbit, and can stage treatment across several months to spread the cost.'
    }
  ],
  related: ['teeth-whitening', 'general-dentistry'],
  cta: {
    h2: 'Design the smile you actually want',
    text: 'Start with a cosmetic consultation, preview the result digitally and decide in your own time. We will give you the options, the costs and the honest advice.',
    primary: { label: 'Book your consultation', path: '/contact' }
  }
};
