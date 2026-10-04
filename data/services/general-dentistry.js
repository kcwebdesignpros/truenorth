'use strict';

/**
 * Service detail page: General & Family Dentistry.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'general-dentistry',
  order: 1,
  name: 'General & Family Dentistry',
  shortName: 'General Dentistry',
  icon: 'tooth',
  image: '/img/svc-general-dentistry.webp',
  imageAlt: 'Dentist in gloves carrying out a routine dental exam at TrueNorth Dental in Kansas City',
  tagline: 'Everyday care that keeps your whole family out of the repair shop.',
  metaTitle: 'General & Family Dentistry in Kansas City | TrueNorth Dental',
  metaDescription:
    'Routine exams, cleanings, fillings and root canal therapy for Kansas City northland families. Gentle, judgement-free general dentistry starting at $99 a visit.',
  metaKeywords:
    'general dentist kansas city, family dentist northland, dental cleaning kansas city mo, root canal therapy kansas city, gum disease treatment gladstone, kids dentist liberty mo',
  eyebrow: 'Preventive & family care',
  heroIntro:
    'Exams, cleanings, fillings and gum care for every age in your household, in a calm Kansas City northland office where nobody lectures you about flossing.',
  priceFrom: 'From $99',
  priceValue: 99,
  duration: '45–60 minutes',
  highlights: [
    'Routine exams & cleanings',
    'Digital X-rays',
    'Tooth-coloured fillings',
    'Root canal therapy',
    'Gum disease treatment',
    'Kids & senior dentistry'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-it-matters',
      eyebrow: 'Why prevention pays',
      h2: 'The visit that keeps expensive work away',
      body: [
        'A small cavity caught at a six-month check-up is a twenty-minute filling. Left for two years, the same cavity can become a root canal, a crown and a four-figure bill.',
        'We clean with ultrasonic scalers and hand instruments, then polish the enamel smooth. You see your own magnified images on screen, so you never just take our word for it.',
        'Digital X-rays use about eighty percent less radiation than old film and appear on screen in seconds. We schedule them around your risk, not a fixed rule.'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we treat',
      h2: 'Everyday dentistry under one roof',
      intro:
        'General dentistry is more than a polish twice a year. These are the treatments we handle in-house, so one plan stays with one office.',
      columns: 3,
      items: [
        {
          icon: 'tooth',
          title: 'Exams & cleanings',
          text: 'A full-mouth exam, gum measurements, scaling and polish. Most adults are in and out in under an hour.'
        },
        {
          icon: 'scan',
          title: 'Digital X-rays',
          text: 'Low-dose sensors capture a full set in seconds. We keep radiation as low as the diagnostic value allows.'
        },
        {
          icon: 'tooth',
          title: 'Tooth-coloured fillings',
          text: 'Composite resin matched to your enamel, layered and light-cured. Most fillings finish in one thirty-minute visit.'
        },
        {
          icon: 'syringe',
          title: 'Root canal therapy',
          text: 'We clean and seal the canal to save the tooth instead of pulling it. Modern rotary instruments make it calmer than its reputation suggests.'
        },
        {
          icon: 'shield-check',
          title: 'Gum disease treatment',
          text: 'Scaling and root planing below the gumline, then a maintenance schedule that keeps pockets from deepening. Early gum disease is reversible.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'first-visit',
      eyebrow: 'How it works',
      h2: 'Your first visit, step by step',
      intro: 'New patients are usually with us about an hour. Here is how that hour is spent.',
      items: [
        {
          title: 'Paperwork, done early',
          text: 'Complete your health history online before you arrive. It saves about fifteen minutes at the desk.'
        },
        {
          title: 'A conversation first',
          text: 'Before any instrument comes out, we ask what brought you in and what you want from your smile.'
        },
        {
          title: 'Imaging and a full exam',
          text: 'Digital X-rays, intraoral photos and an oral cancer screening. Then we review every image with you on the screen.'
        },
        {
          title: 'Your written plan',
          text: 'You leave with a printed plan, a cost estimate and honest priorities. Nothing is scheduled until you agree.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'General dentistry questions we hear',
      intro: 'Straight answers to the things patients ask most.',
      items: [
        {
          q: 'How often do I really need a cleaning?',
          a: 'For most healthy adults, every six months. If you have gum disease, diabetes or a smoking history, we may suggest every three to four months instead.'
        },
        {
          q: 'Does the $99 special work with my insurance?',
          a: 'Yes. We bill your plan and apply the $99 to anything it does not cover, so you never pay more for the visit itself.'
        },
        {
          q: 'Is a root canal as painful as people say?',
          a: 'The tooth is fully numb first, and most patients call it long rather than painful. Mild tenderness for a day or two is normal.'
        },
        {
          q: 'At what age should my child first see a dentist?',
          a: 'By their first birthday, or within six months of the first tooth. Early visits are short and mostly about getting used to the chair.'
        },
        {
          q: 'Do you see patients who have not been in for years?',
          a: 'Constantly, and you will not be judged. We start with a full exam, then tell you honestly what needs attention now and what can wait.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Ready for a dentist you do not dread?',
      text: 'Book your $99 new patient visit and get a full exam, X-rays, cleaning and a written plan.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'How often do I really need a cleaning?',
      a: 'For most healthy adults, every six months. If you have gum disease, diabetes or a smoking history, we may suggest every three to four months instead.'
    },
    {
      q: 'Does the $99 special work with my insurance?',
      a: 'Yes. We bill your plan and apply the $99 to anything it does not cover, so you never pay more for the visit itself.'
    },
    {
      q: 'Is a root canal as painful as people say?',
      a: 'The tooth is fully numb first, and most patients call it long rather than painful. Mild tenderness for a day or two is normal.'
    },
    {
      q: 'At what age should my child first see a dentist?',
      a: 'By their first birthday, or within six months of the first tooth. Early visits are short and mostly about getting used to the chair.'
    },
    {
      q: 'Do you see patients who have not been in for years?',
      a: 'Constantly, and you will not be judged. We start with a full exam, then tell you honestly what needs attention now and what can wait.'
    }
  ],
  related: ['cosmetic-dentistry', 'dental-implants'],
  cta: {
    h2: 'Start with a visit that costs $99, not $389',
    text: 'New patients get a full exam, digital X-rays, a cleaning and a written plan for one flat price. Book online or call and we will find a time that fits.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
