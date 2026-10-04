'use strict';

/**
 * Service detail page: Professional Teeth Whitening.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'teeth-whitening',
  order: 3,
  name: 'Professional Teeth Whitening',
  shortName: 'Teeth Whitening',
  icon: 'tooth-sparkle',
  image: '/img/svc-teeth-whitening.webp',
  imageAlt: 'Patient under whitening LED trays at TrueNorth Dental in Kansas City',
  tagline: 'A brighter shade in about an hour, without the sting.',
  metaTitle: 'Professional Teeth Whitening in Kansas City Northland',
  metaDescription:
    'In-office LED whitening and custom take-home trays from a Kansas City northland dentist. Brighter teeth in about an hour, with sensitivity managed throughout.',
  metaKeywords:
    'teeth whitening kansas city, professional whitening northland, LED teeth whitening kansas city mo, custom whitening trays gladstone, teeth bleaching liberty mo, whitening after braces parkville',
  eyebrow: 'Cosmetic whitening',
  heroIntro:
    'Professional teeth whitening in Kansas City that lifts years of coffee and tea staining in one visit, with a take-home kit to keep the shade.',
  priceFrom: 'From $249',
  priceValue: 249,
  duration: '60–75 minutes',
  highlights: [
    'In-office LED whitening',
    'Custom take-home trays',
    'Sensitivity management',
    'Event whitening',
    'Post-braces whitening',
    'Maintenance refills'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'how-it-works',
      eyebrow: 'What is happening',
      h2: 'How professional teeth whitening works',
      body: [
        'Under a translucent layer of enamel sits dentine, which is naturally yellow and deepens with age. Coffee, tea, wine and tobacco leave pigments that build up over years.',
        'Whitening does not scrub those stains off. It uses peroxide to break the pigment molecules apart inside the tooth, which is why it works.',
        'In-office gel runs six to ten percent hydrogen peroxide in three fifteen-minute cycles under an LED light. Most patients finish four to eight shades brighter.',
        'How long it lasts depends on your habits. Heavy coffee drinkers may fade in six months, while careful patients hold their shade for two years or more.'
      ]
    },
    {
      type: 'cards',
      id: 'options',
      eyebrow: 'Your options',
      h2: 'How we whiten at TrueNorth',
      intro:
        'Not every patient wants the same thing, so we offer several approaches and combine them when it makes sense.',
      columns: 3,
      items: [
        {
          icon: 'zap',
          title: 'In-office LED whitening',
          text: 'Full-strength gel in three fifteen-minute cycles under an LED light. It is the fastest route to a brighter smile.'
        },
        {
          icon: 'shield',
          title: 'Custom take-home trays',
          text: 'Trays made from a scan of your teeth hold the gel evenly and keep it off your gums. Wear them for a few hours or overnight.'
        },
        {
          icon: 'heart-pulse',
          title: 'Sensitivity management',
          text: 'A desensitising gel and protective barrier before whitening, plus a gentler protocol when your teeth need it.'
        },
        {
          icon: 'calendar-check',
          title: 'Event whitening',
          text: 'One session timed a week or two before a wedding, reunion or photo shoot, early enough for any sensitivity to settle.'
        },
        {
          icon: 'refresh',
          title: 'Maintenance refills',
          text: 'Keep your custom trays for years. A refill syringe or two tops up the shade without paying for the full visit again.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'visit',
      eyebrow: 'What to expect',
      h2: 'Your whitening visit, minute by minute',
      intro: 'An in-office session takes a little over an hour. Here is how that hour runs.',
      items: [
        {
          title: 'Shade match and photos',
          text: 'We record your starting shade against the guide and take a photo, so you can compare before and after side by side.'
        },
        {
          title: 'Clean and protect',
          text: 'We polish off surface film and place a barrier over your gums. A desensitising gel goes on first if you have been sensitive.'
        },
        {
          title: 'Three whitening cycles',
          text: 'Gel is applied, activated under the LED light for fifteen minutes, then removed and reapplied. Three cycles is typical.'
        },
        {
          title: 'Shade check and aftercare',
          text: 'We compare your new shade to the starting photo, rinse, then apply a fluoride finish and brief you on the next two days.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Teeth whitening questions we hear most',
      intro: 'Clear answers before you choose a whitening route.',
      items: [
        {
          q: 'Does professional whitening hurt?',
          a: 'Most patients feel nothing during the visit. Some notice brief sensitivity for a day or two afterwards, which a desensitising gel and a gentler protocol keep manageable.'
        },
        {
          q: 'How long do the results last?',
          a: 'Typically one to three years, depending on your habits. Regular touch-ups with custom trays keep it close to the original shade.'
        },
        {
          q: 'Will whitening work on crowns or veneers?',
          a: 'No. Porcelain and composite do not respond to peroxide, so they keep their shade while your natural teeth lighten. We plan the sequence around that.'
        },
        {
          q: 'Is whitening safe for my enamel?',
          a: 'Yes, with professional-strength products and a proper protocol. We check for cavities and gum problems first, because whitening over decay can worsen sensitivity.'
        },
        {
          q: 'How soon before a wedding should I whiten?',
          a: 'Book your in-office session about two weeks before the event. That gives any sensitivity time to settle and the shade time to stabilise.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Brighter teeth before your next big day',
      text: 'Book an in-office whitening session and see the before and after the same afternoon, with sensitivity managed throughout.',
      primary: { label: 'Book whitening', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Does professional whitening hurt?',
      a: 'Most patients feel nothing during the visit. Some notice brief sensitivity for a day or two afterwards, which a desensitising gel and a gentler protocol keep manageable.'
    },
    {
      q: 'How long do the results last?',
      a: 'Typically one to three years, depending on your habits. Regular touch-ups with custom trays keep it close to the original shade.'
    },
    {
      q: 'Will whitening work on crowns or veneers?',
      a: 'No. Porcelain and composite do not respond to peroxide, so they keep their shade while your natural teeth lighten. We plan the sequence around that.'
    },
    {
      q: 'Is whitening safe for my enamel?',
      a: 'Yes, with professional-strength products and a proper protocol. We check for cavities and gum problems first, because whitening over decay can worsen sensitivity.'
    },
    {
      q: 'How soon before a wedding should I whiten?',
      a: 'Book your in-office session about two weeks before the event. That gives any sensitivity time to settle and the shade time to stabilise.'
    }
  ],
  related: ['cosmetic-dentistry', 'general-dentistry'],
  cta: {
    h2: 'See your brighter shade the same day',
    text: 'Book an in-office whitening session or start with custom take-home trays. Either way, we match the strength to your teeth and give you the aftercare plan in writing.',
    primary: { label: 'Book your whitening', path: '/contact' }
  }
};
