'use strict';
/**
 * Patient Reviews page — data/pages/reviews.js
 * Quotes are drawn from data/testimonials.js.
 */

module.exports = {
  slug: 'reviews',
  path: '/reviews',
  name: 'Patient Reviews',
  metaTitle: 'Patient Reviews | TrueNorth Dental, Kansas City',
  metaDescription:
    'Read 1,401 verified reviews of TrueNorth Dental in Kansas City, MO. A 4.9-star average from northland patients since 2011 — here is exactly what they say.',
  metaKeywords:
    'kansas city dentist reviews, northland dental reviews, truenorth dental reviews, kansas city patient testimonials, google reviews dentist kansas city, yelp dentist northland',
  eyebrow: 'Patient Reviews',
  h1: 'What Northland Patients Actually Say About Us',
  heroIntro:
    'More than 1,400 neighbours have reviewed TrueNorth Dental since we opened in 2011. Here is the honest summary — the praise, the themes, and how we handle the reviews that sting.',
  heroImage: '/img/cta-smile.webp',
  heroImageAlt: 'Group of happy TrueNorth Dental patients laughing together outdoors',
  heroStats: [
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating on Google and Yelp' },
    { value: 1401, label: 'Verified reviews across both platforms' },
    { value: 15, suffix: ' yrs', label: 'Built almost entirely by word of mouth' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'quote',
      text:
        'I cracked a molar on a Saturday morning and called four offices before TrueNorth answered. They had me in a chair by 11:30, took the pain away, and finished the root canal on Monday. Dr. Hart explained every step, and I have never been less afraid at a dentist.',
      author: 'Marissa T.',
      role: 'Emergency root canal · Gladstone, MO'
    },
    {
      type: 'quote',
      text:
        'I avoided dentists for nine years because of a bad experience as a teenager. Dr. Hart booked a longer appointment just to talk, and three visits later I have had a cleaning, two fillings and a crown. I actually show up on time now.',
      author: 'Alicia M.',
      role: 'Sedation dentistry · Kansas City, MO'
    },
    {
      type: 'quote',
      text:
        'Dr. Nair told me my son did not need braces yet, showed me the X-rays, and said to come back in a year. Any other office would have sold me the treatment that day. We came back for my own aligners instead.',
      author: 'Priyanka S.',
      role: 'Clear aligners · Liberty, MO'
    },
    {
      type: 'stats',
      id: 'review-numbers',
      h2: 'The numbers behind the stars',
      intro: 'We keep these figures current, because a rating only means something when you can see the sample behind it.',
      items: [
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating across Google and Yelp' },
        { value: 1401, label: 'Verified reviews in total' },
        { value: 1187, label: 'Google reviews at a 4.9 average' },
        { value: 96, suffix: '%', label: 'Of surveyed patients would refer a friend' }
      ]
    },
    {
      type: 'faq',
      id: 'reviews-faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our reviews',
      intro: 'A few things patients ask us about ratings, and how we answer them.',
      items: [
        {
          q: 'Are these reviews verified?',
          a: 'Yes. Every review here was published on Google or Yelp by a patient who visited the practice. We do not write, edit or delete them.'
        },
        {
          q: 'Why is your rating 4.9 and not 5.0?',
          a: 'Because no practice with more than a thousand reviews has a perfect score. A handful of patients had a frustrating day with us, we called them, and we left the review in place.'
        },
        {
          q: 'Do you offer anything for leaving a review?',
          a: 'No. We never offer discounts or gift cards in exchange for a review, because that would make the rating meaningless. If you write one, it is because you chose to.'
        },
        {
          q: 'What if I had a bad experience?',
          a: 'Call us at (816) 555-0182 and ask for Sofia Delgado. She is our practice manager and will call you back within 48 hours so we can put it right.'
        },
        {
          q: 'Do you respond to reviews?',
          a: 'Yes, though briefly. We thank patients for the good ones and ask the unhappy ones to call so we can help. The review belongs to the patient, not to us.'
        },
        {
          q: 'Which platform should I use?',
          a: 'Whichever you already use. Google reviews reach the most people searching for a dentist near Kansas City, and Yelp helps northland patients compare practices.'
        },
        {
          q: 'Can I use a payment plan for treatment?',
          a: 'The $99 new patient special is usually paid at the visit, but any larger plan can be split through CareCredit, Cherry, Sunbit or our $29 monthly membership.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Are these reviews verified?',
      a: 'Yes. Every review here was published on Google or Yelp by a patient who visited the practice. We do not write, edit or delete them.'
    },
    {
      q: 'Why is your rating 4.9 and not 5.0?',
      a: 'Because no practice with more than a thousand reviews has a perfect score. A handful of patients had a frustrating day with us, we called them, and we left the review in place.'
    },
    {
      q: 'Do you offer anything for leaving a review?',
      a: 'No. We never offer discounts or gift cards in exchange for a review, because that would make the rating meaningless. If you write one, it is because you chose to.'
    },
    {
      q: 'What if I had a bad experience?',
      a: 'Call us at (816) 555-0182 and ask for Sofia Delgado. She is our practice manager and will call you back within 48 hours so we can put it right.'
    },
    {
      q: 'Do you respond to reviews?',
      a: 'Yes, though briefly. We thank patients for the good ones and ask the unhappy ones to call so we can help. The review belongs to the patient, not to us.'
    },
    {
      q: 'Which platform should I use?',
      a: 'Whichever you already use. Google reviews reach the most people searching for a dentist near Kansas City, and Yelp helps northland patients compare practices.'
    },
    {
      q: 'Can I use a payment plan for treatment?',
      a: 'The $99 new patient special is usually paid at the visit, but any larger plan can be split through CareCredit, Cherry, Sunbit or our $29 monthly membership.'
    }
  ],
  cta: {
    h2: 'Ready to see for yourself?',
    text:
      'Book a visit and find out why more than 1,400 neighbours took the time to write about us. The $99 new patient special includes an exam, full digital X-rays, a cleaning, an oral cancer screening and a written treatment plan.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
