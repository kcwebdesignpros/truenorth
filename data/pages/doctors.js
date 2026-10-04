'use strict';
/**
 * Meet the Doctors page. Introduces how we hire and what every clinician has in
 * common. The full team is rendered from data/team.js by the team-grid block.
 */

module.exports = {
  slug: 'doctors',
  path: '/doctors',
  name: 'Meet the Doctors',
  metaTitle: 'Meet Our Kansas City Northland Dentists | TrueNorth',
  metaDescription:
    'Meet the team behind TrueNorth Dental in the Kansas City northland: Dr. Hart, Dr. Reed, Dr. Nair and hygienist Jordan Ellis, with the same dentist each visit.',
  metaKeywords:
    'kansas city dentist, northland dentists, meet the dentist kansas city mo, dr amelia hart dds, implant dentist northland, orthodontist gladstone mo, dental hygienist kansas city',
  eyebrow: 'Our clinical team',
  h1: 'Meet the doctors and clinicians behind TrueNorth',
  heroIntro:
    'Every clinician here was hired against one standard: would we be happy for them to treat the very first patient Dr. Hart ever saw? These are the people who look after your smile.',
  heroImage: '/img/about-dentist-patient.webp',
  heroImageAlt: 'Dentist talking with a smiling patient in the chair at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 6, label: 'Clinicians and coordinators you can ask for by name' },
    { value: 22, label: 'People across the whole practice' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'MedicalWebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'team-grid',
      id: 'team',
      eyebrow: 'The people you will meet',
      h2: 'Four clinicians and two coordinators, one standard of care',
      intro:
        'These are the doctors, hygienist and coordinators who will look after you, and every one of them can be booked by name.',
      cta: { label: 'Book with a specific clinician', path: '/contact' }
    },
    {
      type: 'prose',
      id: 'how-we-hire',
      eyebrow: 'How we hire',
      h2: 'What every TrueNorth clinician has in common',
      body: [
        'We grow slowly on purpose. Before anyone joins, they spend a day watching how appointments actually run, and the whole team gets a say. The question is never whether a candidate can fill a tooth, but whether they will listen before they reach for an instrument.',
        'Three habits are non-negotiable. Appointments run long enough to finish a conversation, every finding is explained in plain English on a screen you can see, and nobody upsells. If the honest answer is that a tooth can be watched for six months, that is what you will hear.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our doctors and team',
      intro: 'Straight answers to what patients ask most before they book with a clinician.',
      items: [
        {
          q: 'Can I choose which dentist I see?',
          a: 'Yes. Ask for any clinician by name when you book, or let our coordinators match you in one call. Once you find someone you trust, we keep you with them for the whole course of treatment.'
        },
        {
          q: 'Do I see the same dentist at every visit?',
          a: 'Wherever possible, yes. If Dr. Hart starts your restorative work, she finishes it, and if Jordan measures your gum pockets he tracks them again next time. Continuity is built into our schedule on purpose.'
        },
        {
          q: 'What if I am nervous about the dentist?',
          a: 'Tell us when you book and we will note it on your file. Dr. Hart leads our anxiety-free and sedation care and holds a Missouri sedation permit, and you can raise a stop signal at any moment.'
        },
        {
          q: 'Do you treat children as well as adults?',
          a: 'Yes. We care for whole families, from a child’s first check-up around age one through senior dentistry. Dr. Nair also provides orthodontics for children, teens and adults.'
        },
        {
          q: 'Can I meet a doctor before a big treatment plan?',
          a: 'Absolutely. Your first visit includes time to talk about your goals and concerns before any plan is proposed. Ask when you call and we will arrange a consultation with no obligation.'
        },
        {
          q: 'Do the doctors work together on complex cases?',
          a: 'Constantly. An implant case may involve Dr. Reed for surgery, Dr. Hart for the restoration and Jordan for gum health, all planned on one record so everyone agrees before you arrive.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Book with the clinician who fits your needs',
      text: 'Tell us what you need and we will match you to the right doctor, or book with someone by name.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Can I choose which dentist I see?',
      a: 'Yes. Ask for any clinician by name when you book, or let our coordinators match you in one call. Once you find someone you trust, we keep you with them for the whole course of treatment.'
    },
    {
      q: 'Do I see the same dentist at every visit?',
      a: 'Wherever possible, yes. If Dr. Hart starts your restorative work, she finishes it, and if Jordan measures your gum pockets he tracks them again next time. Continuity is built into our schedule on purpose.'
    },
    {
      q: 'What if I am nervous about the dentist?',
      a: 'Tell us when you book and we will note it on your file. Dr. Hart leads our anxiety-free and sedation care and holds a Missouri sedation permit, and you can raise a stop signal at any moment.'
    },
    {
      q: 'Do you treat children as well as adults?',
      a: 'Yes. We care for whole families, from a child’s first check-up around age one through senior dentistry. Dr. Nair also provides orthodontics for children, teens and adults.'
    },
    {
      q: 'Can I meet a doctor before a big treatment plan?',
      a: 'Absolutely. Your first visit includes time to talk about your goals and concerns before any plan is proposed. Ask when you call and we will arrange a consultation with no obligation.'
    },
    {
      q: 'Do the doctors work together on complex cases?',
      a: 'Constantly. An implant case may involve Dr. Reed for surgery, Dr. Hart for the restoration and Jordan for gum health, all planned on one record so everyone agrees before you arrive.'
    }
  ],
  cta: {
    h2: 'Meet the team in person',
    text: 'Book a first visit and spend the time with the clinician who will look after you. We are easy to reach from anywhere in the Kansas City northland.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
