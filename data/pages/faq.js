'use strict';
/**
 * Frequently Asked Questions page — data/pages/faq.js
 * Rendered by views/page.ejs. Content only; no markup.
 * The page-level `faqs` array mirrors every question in the faq blocks below.
 */

module.exports = {
  slug: 'faq',
  path: '/faq',
  name: 'Frequently Asked Questions',
  metaTitle: 'Dental FAQ | TrueNorth Dental, Kansas City Northland',
  metaDescription:
    'Answers to the questions northland patients ask most — appointments, cost, insurance, comfort, kids, emergencies and your first visit to TrueNorth Dental.',
  metaKeywords:
    'kansas city dental faq, northland dentist questions, truenorth dental faq, dentist cost kansas city, dental insurance northland, emergency dentist faq kansas city',
  eyebrow: 'Good to know',
  h1: 'Frequently Asked Dental Questions',
  heroIntro:
    'The questions northland patients ask us most, answered plainly — appointments, cost, comfort, treatment and bringing the whole family to our Kansas City office.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Bright modern dental operatory at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 18, label: 'Questions answered on this page' },
    { value: 48, suffix: ' hrs', label: 'Typical wait for a new patient visit' },
    { value: 2011, label: 'Answering northland questions since' }
  ],
  schemaType: 'FAQPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'faq-intro',
      eyebrow: 'Start here',
      h2: 'Straight answers about dental care in the northland',
      body: [
        'Most people arrive at a dentist with the same few questions. Will it hurt, what will it cost, can I get in this week, and do you take my insurance. We answer them plainly below, grouped by topic so you can jump straight to the part that matters.',
        'We are a family, cosmetic and implant practice in the Kansas City northland, open since 2011. If your question is not here, call (816) 555-0182 and a real person will answer.'
      ]
    },
    {
      type: 'faq',
      id: 'appointments',
      eyebrow: 'Booking',
      h2: 'Appointments and scheduling',
      items: [
        {
          q: 'How do I book an appointment?',
          a: 'Book online any time or call (816) 555-0182 during office hours.'
        },
        {
          q: 'What are your office hours?',
          a: 'Monday to Thursday 8 to 6, Friday 8 to 5, Saturday 9 to 2.'
        },
        {
          q: 'How long does a first visit take?',
          a: 'Plan on 60 to 90 minutes for the exam, X-rays and cleaning.'
        },
        {
          q: 'Can I get a same-day appointment?',
          a: 'Often, yes. Call before noon and we can usually see you that afternoon.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'cost-insurance',
      eyebrow: 'Cost & insurance',
      h2: 'Cost, insurance and payment',
      items: [
        {
          q: 'What does the new patient special include?',
          a: 'For $99 you get an exam, full X-rays, a cleaning and a treatment plan.'
        },
        {
          q: 'Which insurance plans do you accept?',
          a: 'Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare and Blue Cross Blue Shield.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes. CareCredit, Cherry and Sunbit spread the cost monthly, plus a $29 membership plan.'
        },
        {
          q: 'Will I know the cost before treatment starts?',
          a: 'Always. We give you a written estimate before anything begins.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'comfort',
      eyebrow: 'Comfort',
      h2: 'Comfort and anxiety',
      items: [
        {
          q: 'I am nervous about the dentist. Can you help?',
          a: 'Yes. We book longer visits so there is time to talk before anything starts.'
        },
        {
          q: 'What sedation options do you offer?',
          a: 'Nitrous oxide for mild relaxation, and oral sedation for more anxious patients.'
        },
        {
          q: 'Does treatment hurt?',
          a: 'Modern numbing keeps most treatment comfortable, and we stop the moment you raise a hand.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'treatments',
      eyebrow: 'Treatments',
      h2: 'Treatments and procedures',
      items: [
        {
          q: 'What treatments do you offer?',
          a: 'General and family dentistry, cosmetic work, whitening, implants, orthodontics and emergency care.'
        },
        {
          q: 'Do you place dental implants?',
          a: 'Yes. Dr. Marcus Reed places and restores them, from a single tooth to full-arch cases.'
        },
        {
          q: 'How long does teeth whitening take?',
          a: 'In-office whitening takes about an hour, with custom trays for touch-ups at home.'
        },
        {
          q: 'What about cosmetic work like veneers?',
          a: 'Dr. Reed designs veneers with a digital mock-up you approve before anything is made.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'new-patients',
      eyebrow: 'Your first visit',
      h2: 'New patients',
      items: [
        {
          q: 'What happens at my first visit?',
          a: 'A conversation about your goals, then an exam, X-rays, a cleaning and a written plan.'
        },
        {
          q: 'What should I bring to my first appointment?',
          a: 'A photo ID, your insurance card and a list of any medications you take.'
        },
        {
          q: 'Where are you located, and is parking easy?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, with free parking out front.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Still have a question?',
      text:
        'Call (816) 555-0182 and a real person at our northland office will answer, or book online and we will follow up within one business day.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'How do I book an appointment?',
      a: 'Book online any time or call (816) 555-0182 during office hours.'
    },
    {
      q: 'What are your office hours?',
      a: 'Monday to Thursday 8 to 6, Friday 8 to 5, Saturday 9 to 2.'
    },
    {
      q: 'How long does a first visit take?',
      a: 'Plan on 60 to 90 minutes for the exam, X-rays and cleaning.'
    },
    {
      q: 'Can I get a same-day appointment?',
      a: 'Often, yes. Call before noon and we can usually see you that afternoon.'
    },
    {
      q: 'What does the new patient special include?',
      a: 'For $99 you get an exam, full X-rays, a cleaning and a treatment plan.'
    },
    {
      q: 'Which insurance plans do you accept?',
      a: 'Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare and Blue Cross Blue Shield.'
    },
    {
      q: 'Do you offer payment plans?',
      a: 'Yes. CareCredit, Cherry and Sunbit spread the cost monthly, plus a $29 membership plan.'
    },
    {
      q: 'Will I know the cost before treatment starts?',
      a: 'Always. We give you a written estimate before anything begins.'
    },
    {
      q: 'I am nervous about the dentist. Can you help?',
      a: 'Yes. We book longer visits so there is time to talk before anything starts.'
    },
    {
      q: 'What sedation options do you offer?',
      a: 'Nitrous oxide for mild relaxation, and oral sedation for more anxious patients.'
    },
    {
      q: 'Does treatment hurt?',
      a: 'Modern numbing keeps most treatment comfortable, and we stop the moment you raise a hand.'
    },
    {
      q: 'What treatments do you offer?',
      a: 'General and family dentistry, cosmetic work, whitening, implants, orthodontics and emergency care.'
    },
    {
      q: 'Do you place dental implants?',
      a: 'Yes. Dr. Marcus Reed places and restores them, from a single tooth to full-arch cases.'
    },
    {
      q: 'How long does teeth whitening take?',
      a: 'In-office whitening takes about an hour, with custom trays for touch-ups at home.'
    },
    {
      q: 'What about cosmetic work like veneers?',
      a: 'Dr. Reed designs veneers with a digital mock-up you approve before anything is made.'
    },
    {
      q: 'What happens at my first visit?',
      a: 'A conversation about your goals, then an exam, X-rays, a cleaning and a written plan.'
    },
    {
      q: 'What should I bring to my first appointment?',
      a: 'A photo ID, your insurance card and a list of any medications you take.'
    },
    {
      q: 'Where are you located, and is parking easy?',
      a: 'We are at 4820 N Oak Trafficway, Suite 210, with free parking out front.'
    }
  ],
  cta: {
    h2: 'Ready to book your first visit?',
    text:
      'Start with the $99 new patient special and get answers to your questions in person, chair-side. Book online or call (816) 555-0182 and we will take it from there.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
