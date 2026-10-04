'use strict';
/**
 * Insurance & Financing page. How dental coverage works, accepted carriers,
 * the membership plan and financing partners — rendered by views/page.ejs.
 */

module.exports = {
  slug: 'insurance-financing',
  path: '/insurance-financing',
  name: 'Insurance & Financing',
  metaTitle: 'Insurance & Financing | TrueNorth Dental Kansas City',
  metaDescription:
    'Understand dental insurance, annual maximums and financing at our Kansas City northland practice, including a $29 membership plan and flexible payment options.',
  metaKeywords:
    'dental insurance kansas city, dental financing northland, dentist accepts delta dental kansas city, dental membership plan kansas city, carecredit dentist kansas city mo',
  eyebrow: 'Coverage and payment',
  h1: 'Dental Insurance and Financing, Explained Clearly',
  heroIntro:
    'Insurance paperwork should never stand between you and a healthy mouth. Here is how dental coverage works at our Kansas City northland practice, and every option when you pay yourself.',
  heroImage: '/img/cta-smile.webp',
  heroImageAlt: 'Group of happy people laughing outdoors, patients of TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 12, label: 'Insurance carriers accepted' },
    { value: 29, prefix: '$', suffix: '/mo', label: 'In-house membership plan' },
    { value: 15, suffix: '%', label: 'Member discount on other treatment' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'how-insurance-works',
      eyebrow: 'The basics',
      h2: 'How Dental Insurance Actually Works',
      body: [
        'Most plans set an annual maximum, often between $1,000 and $2,000, and once it is used the plan pays nothing more until your benefits reset. It is a cap on what your insurer will contribute, not an open-ended promise.',
        'You also have a deductible, usually $50 to $150, though preventive care such as cleanings is almost always exempt. Plans then pay 100% for preventive care, about 80% for fillings and roughly 50% for crowns.',
        'If treatment can wait, timing it so your benefits are not split across two calendar years can save you a second deductible. We will help you plan larger work around your benefit year.'
      ]
    },
    {
      type: 'marquee',
      h2: 'Insurance Plans We Accept',
      items: [
        'Delta Dental',
        'Cigna',
        'Aetna',
        'MetLife',
        'Guardian',
        'UnitedHealthcare',
        'Blue Cross Blue Shield of Kansas City',
        'Humana',
        'Ameritas',
        'Principal',
        'Careington',
        'Assurant'
      ]
    },
    {
      type: 'cards',
      id: 'financing',
      eyebrow: 'Payment options',
      h2: 'Financing Options for Larger Treatment',
      intro: 'When treatment costs more than one paycheck, these partners spread it into monthly payments.',
      columns: 2,
      items: [
        {
          icon: 'credit-card',
          title: 'CareCredit',
          text: 'A healthcare credit card with 6, 12, 18 and 24-month interest-free promotional periods on approved credit.'
        },
        {
          icon: 'zap',
          title: 'Cherry',
          text: 'Cherry gives you an instant approval decision and lets you see your options without a hard credit check.'
        },
        {
          icon: 'wallet',
          title: 'Sunbit',
          text: 'Point-of-sale financing with 90-day no-interest promotional periods and approval decisions in seconds.'
        },
        {
          icon: 'percent',
          title: 'In-House Membership',
          text: 'Our own $29-a-month plan for patients without insurance, with two cleanings, exams and X-rays a year plus 15% off everything else.'
        }
      ]
    },
    {
      type: 'table',
      id: 'membership',
      eyebrow: 'Compare',
      h2: 'How the Membership Plan Compares',
      intro: 'A side-by-side look at our in-house plan and a typical dental policy.',
      head: ['What you get', 'Membership plan', 'Typical insurance'],
      rows: [
        ['Monthly cost', '$29 per adult', 'Premium from pay'],
        ['Two cleanings a year', 'Included', 'Usually covered'],
        ['Annual maximum', 'None', '$1,000–$2,000'],
        ['Deductible', 'None', '$50–$150'],
        ['Discount on other treatment', '15% off everything', 'About 50% on major work'],
        ['Waiting periods', 'None', 'Sometimes 6–12 months']
      ],
      note: 'Membership pricing is per adult, and family plans are available at a lower rate.'
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Insurance and Financing Questions',
      intro: 'What patients ask most about coverage, cost and paying over time.',
      items: [
        {
          q: 'Do you accept my dental insurance?',
          a: 'We work with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant.'
        },
        {
          q: 'What is an annual maximum?',
          a: 'It is the most your plan pays for dental treatment in a calendar year, often $1,000 to $2,000, and it resets each January.'
        },
        {
          q: 'What if I do not have dental insurance?',
          a: 'Our in-house membership plan is $29 a month per adult and includes two cleanings, exams and X-rays plus 15% off everything else.'
        },
        {
          q: 'Can I spread the cost over time?',
          a: 'Yes. We work with CareCredit, Cherry and Sunbit, which offer interest-free promotional periods and fast approvals.'
        },
        {
          q: 'Can I use my HSA or FSA for dental work?',
          a: 'Usually yes. Cleanings, fillings, crowns, implants and some orthodontics typically qualify, and we provide an itemised receipt.'
        },
        {
          q: 'Will I know the cost before treatment starts?',
          a: 'Always. After your exam you receive a written estimate showing what your insurance covers and what you owe.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Let Us Handle the Paperwork',
      text: 'Call us with your insurance details and we will verify your benefits before your visit. If you are paying yourself, we will walk you through every option.',
      primary: { label: 'Book an appointment', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Do you accept my dental insurance?',
      a: 'We work with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant.'
    },
    {
      q: 'What is an annual maximum?',
      a: 'It is the most your plan pays for dental treatment in a calendar year, often $1,000 to $2,000, and it resets each January.'
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'Our in-house membership plan is $29 a month per adult and includes two cleanings, exams and X-rays plus 15% off everything else.'
    },
    {
      q: 'Can I spread the cost over time?',
      a: 'Yes. We work with CareCredit, Cherry and Sunbit, which offer interest-free promotional periods and fast approvals.'
    },
    {
      q: 'Can I use my HSA or FSA for dental work?',
      a: 'Usually yes. Cleanings, fillings, crowns, implants and some orthodontics typically qualify, and we provide an itemised receipt.'
    },
    {
      q: 'Will I know the cost before treatment starts?',
      a: 'Always. After your exam you receive a written estimate showing what your insurance covers and what you owe.'
    }
  ],
  cta: {
    h2: 'Let Us Handle the Paperwork',
    text: 'Call us with your insurance details and we will verify your benefits before your visit. If you are paying yourself, we will walk you through every option.',
    primary: { label: 'Book an appointment', path: '/contact' }
  }
};
