'use strict';
/**
 * Home page content.
 * Data only. The template decides markup, spacing and colour, and it pulls
 * the six services, the review carousel, the insurance carriers and the
 * latest articles straight from the live data files.
 */

module.exports = {
  slug: 'home',
  path: '/',
  metaTitle: 'TrueNorth Dental | Family & Cosmetic Dentist in Kansas City',
  metaDescription:
    'Gentle family, cosmetic and emergency dentistry in the Kansas City northland. Transparent pricing, same-day emergency slots and a $99 new-patient visit.',
  metaKeywords:
    'kansas city dentist, northland dental, family dentist kansas city mo, emergency dentist kansas city, cosmetic dentist gladstone mo, dental implants liberty mo, new patient special kansas city',

  hero: {
    eyebrow: 'Dental care for the Kansas City northland',
    h1: 'A healthier smile, pointed True North',
    intro:
      'A modern family, cosmetic and emergency dental practice on North Oak Trafficway. We run on time, explain everything first, and quote your cost before we begin. New patients are usually seen within 48 hours.',
    image: '/img/hero-smile.webp',
    imageAlt:
      'Smiling woman holding a toothbrush against a teal and navy backdrop, a patient of TrueNorth Dental in Kansas City',
    primaryCta: { label: 'Book an appointment', path: '/contact#book' },
    secondaryCta: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' },
    quickCards: [
      {
        icon: 'clock',
        title: 'Working hours',
        text: 'Early mornings through Saturday lunchtime.',
        meta: 'Mon–Thu 8a–6p · Fri 8a–5p · Sat 9a–2p',
        path: '/contact'
      },
      {
        icon: 'calendar-check',
        title: 'Book an appointment',
        text: 'Online in under a minute, any hour.',
        meta: 'New patients seen within 48 hours',
        path: '/contact#book'
      },
      {
        icon: 'alert-triangle',
        title: 'Emergency service',
        text: 'A real person answers, day or night.',
        meta: '24/7 line: (816) 555-0199',
        path: 'tel:+18165550199'
      }
    ]
  },

  blocks: [
    /* ------------------------------------------------------------ trust bar */
    { type: 'trust-bar' },

    /* ----------------------------------------------------------- services grid */
    {
      type: 'services-grid',
      eyebrow: 'What we do',
      h2: 'Six kinds of dentistry, one calm office',
      intro:
        'General and family care, cosmetic work, whitening, implants, orthodontics and same-day emergency treatment, all under one roof.'
    },

    /* ----------------------------------------------------------------- numbers */
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Fifteen years in the Kansas City northland',
      intro: 'The numbers behind a practice built on repeat visits and word of mouth.',
      items: [
        { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,400+ reviews' },
        { value: 15, suffix: ' yrs', label: 'Serving the Kansas City northland' },
        { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' }
      ]
    },

    /* ------------------------------------------------------- new patient offer */
    {
      type: 'offer',
      eyebrow: 'New patient special',
      h2: 'Your first visit for $99, not $389',
      intro:
        'Your first appointment is $99 instead of the regular $389, and it covers a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a written treatment plan with a cost estimate. It suits anyone due for a check-up, new to the northland, or wanting a second opinion before a bigger treatment.',
      cta: { label: 'Book your $99 visit', path: '/contact#book' }
    },

    /* ------------------------------------------------------------ testimonials */
    {
      type: 'testimonials',
      eyebrow: 'Patient reviews',
      h2: 'Rated 4.9 out of 5 by more than 1,400 neighbours',
      intro:
        'Our reviews come mostly from patients who found us through a friend, and they say the same things we work hardest on: a calm visit, an honest price and a team that remembers your name.'
    },

    /* ---------------------------------------------------------------------- FAQ */
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions new patients ask us',
      intro: 'Straight answers to the things people most want to know before their first visit.',
      items: [
        {
          q: 'Where are you located, and is parking easy?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, in the heart of the northland. Parking is free and step-free access runs from the lot to our suite by elevator.'
        },
        {
          q: 'Do you accept my insurance?',
          a: 'Yes. We are in-network with most major carriers in the metro, including Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare and Blue Cross Blue Shield of Kansas City. Sofia verifies your benefits before your first visit.'
        },
        {
          q: 'What does the $99 new patient special include?',
          a: 'Your first visit covers a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a written treatment plan with a cost estimate. The regular fee is $389.'
        },
        {
          q: 'How quickly can I get an appointment?',
          a: 'Most new patients are seen within 48 hours, and we hold same-day slots open every weekday for emergencies. If you are in pain, call our 24/7 line at (816) 555-0199.'
        },
        {
          q: 'I have not been to a dentist in years. Will I be judged?',
          a: 'Not here, and you will not be the only one. We start with a full exam and X-rays, tell you honestly what needs attention now, and build a plan you can follow at your own pace.'
        },
        {
          q: 'What should I do in a dental emergency?',
          a: 'Call our 24/7 line at (816) 555-0199 and a real person will answer, day or night. We hold same-day emergency slots every weekday, and you do not need to be an existing patient.'
        }
      ]
    }
  ],

  faqs: [
    {
      q: 'Where are you located, and is parking easy?',
      a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, in the heart of the northland. Parking is free and step-free access runs from the lot to our suite by elevator.'
    },
    {
      q: 'Do you accept my insurance?',
      a: 'Yes. We are in-network with most major carriers in the metro, including Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare and Blue Cross Blue Shield of Kansas City. Sofia verifies your benefits before your first visit.'
    },
    {
      q: 'What does the $99 new patient special include?',
      a: 'Your first visit covers a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a written treatment plan with a cost estimate. The regular fee is $389.'
    },
    {
      q: 'How quickly can I get an appointment?',
      a: 'Most new patients are seen within 48 hours, and we hold same-day slots open every weekday for emergencies. If you are in pain, call our 24/7 line at (816) 555-0199.'
    },
    {
      q: 'I have not been to a dentist in years. Will I be judged?',
      a: 'Not here, and you will not be the only one. We start with a full exam and X-rays, tell you honestly what needs attention now, and build a plan you can follow at your own pace.'
    },
    {
      q: 'What should I do in a dental emergency?',
      a: 'Call our 24/7 line at (816) 555-0199 and a real person will answer, day or night. We hold same-day emergency slots every weekday, and you do not need to be an existing patient.'
    }
  ],

  cta: {
    h2: 'Ready for a dentist you do not have to brace for?',
    text: 'Book your $99 new patient visit and get a full exam, digital X-rays, a cleaning and a written plan. Same-day emergency slots are held every weekday, and our phone is answered around the clock.',
    primary: { label: 'Book online', path: '/contact#book' }
  }
};
