'use strict';
/**
 * Service detail page — Emergency Dental Care.
 * Data only. No markup, no CSS classes. Rendered by generic block templates.
 */

module.exports = {
  slug: 'emergency-dentistry',
  order: 6,
  name: 'Emergency Dental Care',
  shortName: 'Emergency Dentistry',
  icon: 'first-aid',
  image: '/img/svc-emergency-dentistry.webp',
  imageAlt: 'Dentist comforting a patient with jaw pain at TrueNorth Dental in Kansas City',
  tagline: 'Same-day relief for pain, breakage and dental injuries.',
  metaTitle: 'Emergency Dentist Kansas City | TrueNorth 24/7',
  metaDescription:
    'Same-day emergency dental care in the Kansas City northland for toothache, knocked-out teeth and swelling. Our 24/7 line is (816) 555-0199. Call us now.',
  metaKeywords:
    'emergency dentist kansas city, 24 hour dentist northland, toothache relief, knocked out tooth, abscess treatment, same day dental appointment gladstone mo',
  eyebrow: 'Care when it cannot wait',
  heroIntro:
    'Tooth pain, a broken crown or a knocked-out tooth cannot wait until Monday. Call our 24/7 line and we will get you seen, usually the same day.',
  priceFrom: 'From $99',
  priceValue: 99,
  duration: '30–60 minutes',
  highlights: [
    'Same-Day Appointments',
    'Severe Toothache',
    'Knocked-Out Tooth',
    'Chipped & Cracked Teeth',
    'Abscess & Swelling',
    '24/7 Emergency Line'
  ],
  blocks: [
    {
      type: 'cards',
      id: 'emergencies',
      eyebrow: 'What we treat',
      h2: 'Dental emergencies we see every week',
      intro:
        'Most emergencies fall into a handful of categories, and we keep same-day slots open for exactly these.',
      columns: 3,
      items: [
        {
          icon: 'zap',
          title: 'Severe Toothache',
          text: 'Constant pain usually means an inflamed or infected nerve. We find the source with an X-ray and start a root canal or remove the tooth the same visit.'
        },
        {
          icon: 'tooth',
          title: 'Knocked-Out Tooth',
          text: 'A permanent tooth re-implanted within about an hour often survives. Call us at once, keep it moist in milk, and come straight in.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Chipped or Cracked Tooth',
          text: 'A small chip can often be bonded in one visit. A crack that reaches the nerve needs a crown or root canal, so come in sooner.'
        },
        {
          icon: 'alert-triangle',
          title: 'Abscess & Swelling',
          text: 'An abscess is a pocket of infection that can spread into the jaw and neck. We drain it, start antibiotics and treat the tooth itself.'
        },
        {
          icon: 'first-aid',
          title: 'Lost Filling or Crown',
          text: 'A lost filling leaves the tooth sensitive and open to decay. We can usually place a restoration the same day. Bring your crown if it came off cleanly.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'first-30',
      eyebrow: 'Before you arrive',
      h2: 'What to do in the first 30 minutes',
      intro: 'What you do at home in the first half hour often decides how well we can fix things.',
      items: [
        {
          title: 'Control any bleeding',
          text: 'Bite firmly on clean gauze for 20 minutes without checking. Sit upright and do not rinse, spit or use a straw.'
        },
        {
          title: 'Save the tooth',
          text: 'Pick a knocked-out tooth up by the crown, not the root, and rinse it gently. Keep it in milk or inside your cheek.'
        },
        {
          title: 'Manage pain and swelling',
          text: 'Take an anti-inflammatory such as ibuprofen if you can. Apply a cold pack outside your face for 20 minutes at a time.'
        },
        {
          title: 'Keep the area clean',
          text: 'Rinse gently with warm salt water if the mouth is not bleeding, and cover a sharp edge with dental wax.'
        },
        {
          title: 'Call the 24/7 line',
          text: 'Ring (816) 555-0199 and describe what happened. Call before noon on a weekday and you can usually be seen that afternoon.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'bring',
      eyebrow: 'Before you come in',
      h2: 'How to make the visit easier',
      intro: 'A few small things help us diagnose faster. None are essential, so do not delay getting here for them.',
      columns: 2,
      items: [
        'Bring any piece of tooth, crown or denture you saved',
        'Note when the pain started and what makes it worse',
        'List any medications you take, especially blood thinners',
        'Bring your insurance card and photo ID',
        'Eat something light unless told otherwise',
        'Arrange a lift if you think you may want sedation',
        'Write down your questions so you do not forget them',
        'Have someone to call if you need help getting home'
      ]
    },
    {
      type: 'prose',
      id: 'after',
      eyebrow: 'After the emergency',
      h2: 'Getting you out of pain, then getting you well',
      body: [
        'An emergency visit has one job first: stop the pain and stop the problem spreading. You should always leave with comfort, a diagnosis and a clear idea of what comes next.',
        'Once the urgent part is handled, we plan the real repair at a calmer appointment. A cracked tooth may need a crown, and an infected tooth may need a root canal finished or an extraction.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Emergency dental questions',
      intro: 'What patients ask us most when something goes wrong, answered without the runaround.',
      items: [
        {
          q: 'Do you really answer the phone 24/7?',
          a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock, including nights, weekends and holidays, by our own clinical team.'
        },
        {
          q: 'How quickly can I be seen?',
          a: 'We hold same-day slots every weekday and offer Saturday mornings by arrangement. Most patients who call before noon are seen that day.'
        },
        {
          q: 'What does an emergency visit cost?',
          a: 'A focused emergency exam starts at $99 and covers the assessment and X-rays. We give you a written estimate before any treatment starts.'
        },
        {
          q: 'What should I do if a tooth is knocked out?',
          a: 'Act within the hour. Hold the tooth by the crown, keep it in milk, and come straight in. Do not scrub the root or let it dry out.'
        },
        {
          q: 'I have facial swelling. Is that an emergency?',
          a: 'Yes. A dental infection can spread quickly through the face and neck. Call us right away, and if you have trouble swallowing or breathing, go to the emergency room.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Do you really answer the phone 24/7?',
      a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock, including nights, weekends and holidays, by our own clinical team.'
    },
    {
      q: 'How quickly can I be seen?',
      a: 'We hold same-day slots every weekday and offer Saturday mornings by arrangement. Most patients who call before noon are seen that day.'
    },
    {
      q: 'What does an emergency visit cost?',
      a: 'A focused emergency exam starts at $99 and covers the assessment and X-rays. We give you a written estimate before any treatment starts.'
    },
    {
      q: 'What should I do if a tooth is knocked out?',
      a: 'Act within the hour. Hold the tooth by the crown, keep it in milk, and come straight in. Do not scrub the root or let it dry out.'
    },
    {
      q: 'I have facial swelling. Is that an emergency?',
      a: 'Yes. A dental infection can spread quickly through the face and neck. Call us right away, and if you have trouble swallowing or breathing, go to the emergency room.'
    }
  ],
  related: ['general-dentistry', 'dental-implants', 'cosmetic-dentistry'],
  cta: {
    h2: 'In pain right now? Call us.',
    text: 'Our emergency line is answered around the clock. If you can call before noon on a weekday, you can usually be seen the same day.',
    primary: { label: 'Call (816) 555-0199', path: 'tel:+18165550199' },
    secondary: { label: 'Book online', path: '/contact' }
  }
};
