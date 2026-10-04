'use strict';

module.exports = {
  slug: 'contact',
  path: '/contact',
  name: 'Contact',
  metaTitle: 'Contact TrueNorth Dental | Kansas City Northland Office',
  metaDescription:
    'Call, text or book online with TrueNorth Dental at 4820 N Oak Trafficway in Kansas City. Same-day emergency line, full opening hours and northland directions.',
  metaKeywords:
    'contact dentist kansas city, northland dental office, dentist near 64118, emergency dentist kansas city, book dental appointment',
  eyebrow: 'Contact us',
  h1: 'Contact TrueNorth Dental',
  heroIntro:
    'Whether you need a cleaning, a second opinion or help tonight, here is every way to reach our North Oak Trafficway office, and exactly what happens after you do.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Front desk and bright waiting area at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 1, suffix: ' hr', label: 'Typical call-back time' },
    { value: 24, suffix: ' hrs', label: 'Online request response' },
    { value: 48, suffix: ' hrs', label: 'New-patient appointment window' }
  ],
  schemaType: 'ContactPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'cards',
      id: 'book',
      eyebrow: 'Get in touch',
      h2: 'Four easy ways to reach us',
      intro:
        'Pick whichever suits you. A real person answers the phone during every open hour, and the emergency line never closes.',
      columns: 4,
      items: [
        {
          icon: 'phone-call',
          title: 'Call or text (816) 555-0182',
          text: 'Our front desk answers live from 8 a.m. every open hour, and texts reach the same number. Leave a message and we call back within one business hour.'
        },
        {
          icon: 'mail',
          title: 'Email hello@truenorthdental.com',
          text: 'Best for insurance questions and records requests. We reply within one business day. Include your name and a good callback number.'
        },
        {
          icon: 'calendar-check',
          title: 'Book online, any hour',
          text: 'The form on this page reaches our scheduling inbox instantly. Submit it at 2 a.m. and you will still hear from us the next business day.'
        },
        {
          icon: 'first-aid',
          title: 'Emergency line (816) 555-0199',
          text: 'For severe pain, swelling or a knocked-out tooth, call any time. A clinician is on call around the clock, including weekends.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'after-form',
      eyebrow: 'What happens next',
      h2: 'After you submit the booking form',
      intro: 'The form is not a black hole. Here is what happens on our side.',
      items: [
        {
          title: 'Confirmation email, straight away',
          text: 'An automatic email confirms we received your request and repeats the details you sent.'
        },
        {
          title: 'A human reviews it',
          text: 'Nia or Sofia reads every request, checks the schedule and looks up your insurance if you included it.'
        },
        {
          title: 'We call with real options',
          text: 'You get a call or text with specific times, not a vague promise to be in touch.'
        },
        {
          title: 'Forms handled ahead',
          text: 'We send your new-patient forms and verify your benefits before you arrive, saving you waiting-room time.'
        }
      ]
    },
    {
      type: 'table',
      id: 'hours',
      eyebrow: 'When we are open',
      h2: 'Office hours',
      intro: 'Appointments run during all open hours. The emergency line never closes.',
      head: ['Day', 'Hours', 'Notes'],
      rows: [
        ['Monday', '8:00 AM – 6:00 PM', 'Regular appointments'],
        ['Tuesday', '8:00 AM – 6:00 PM', 'Regular appointments'],
        ['Wednesday', '8:00 AM – 6:00 PM', 'Late slots until 6 p.m.'],
        ['Thursday', '8:00 AM – 6:00 PM', 'Regular appointments'],
        ['Friday', '8:00 AM – 5:00 PM', 'Regular appointments'],
        ['Saturday', '9:00 AM – 2:00 PM', 'By appointment'],
        ['Sunday', 'Closed', 'Emergency line only']
      ],
      note:
        'Closed New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving and Christmas. The emergency line stays open.'
    },
    {
      type: 'marquee',
      h2: 'Neighbourhoods we serve',
      items: [
        'Kansas City',
        'North Kansas City',
        'Gladstone',
        'Liberty',
        'Parkville',
        'Riverside',
        'Smithville',
        'Platte City',
        'Claycomo',
        'Briarcliff',
        'Weatherby Lake',
        'Kearney',
        'Excelsior Springs',
        'Avondale',
        'Northmoor',
        'Oakview',
        'Houston Lake',
        'Lake Waukomis',
        'Randolph',
        'Pleasant Valley'
      ]
    },
    {
      type: 'prose',
      id: 'directions',
      eyebrow: 'Finding us',
      h2: 'Directions and parking',
      body: [
        'We are at 4820 N Oak Trafficway, Suite 210, on the east side of North Oak just north of 48th Street. Suite 210 sits on the second floor, reached by an elevator inside the main entrance.',
        'Parking is free and surface-level right in front of the building, with extra spaces along the north side. The route from the lot to our door is step-free the whole way.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about getting in touch',
      intro: 'The things patients ask before they pick up the phone.',
      items: [
        {
          q: 'Do I need an appointment, or can I walk in?',
          a: 'We see emergencies same-day, so walk-ins with pain are always welcome. For everything else, a quick call or the form takes under a minute.'
        },
        {
          q: 'How quickly will you call me back?',
          a: 'Calls are returned within one business hour, online requests within 24 hours, and new patients are booked within 48 hours.'
        },
        {
          q: 'Is there parking at the office?',
          a: 'Yes, and it is free. There is surface parking in front plus extra spaces on the north side.'
        },
        {
          q: 'What should I bring to my first visit?',
          a: 'Bring a photo ID, your dental insurance card and a list of any medications you take.'
        },
        {
          q: 'Do you take my insurance?',
          a: 'We are in network with most major plans, including Delta Dental, Cigna, Aetna and MetLife. Send us your member ID and we will verify.'
        },
        {
          q: 'Can I text instead of calling?',
          a: 'Yes. Texts to (816) 555-0182 reach the same front desk and are handy for appointment changes.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Do I need an appointment, or can I walk in?',
      a: 'We see emergencies same-day, so walk-ins with pain are always welcome. For everything else, a quick call or the form takes under a minute.'
    },
    {
      q: 'How quickly will you call me back?',
      a: 'Calls are returned within one business hour, online requests within 24 hours, and new patients are booked within 48 hours.'
    },
    {
      q: 'Is there parking at the office?',
      a: 'Yes, and it is free. There is surface parking in front plus extra spaces on the north side.'
    },
    {
      q: 'What should I bring to my first visit?',
      a: 'Bring a photo ID, your dental insurance card and a list of any medications you take.'
    },
    {
      q: 'Do you take my insurance?',
      a: 'We are in network with most major plans, including Delta Dental, Cigna, Aetna and MetLife. Send us your member ID and we will verify.'
    },
    {
      q: 'Can I text instead of calling?',
      a: 'Yes. Texts to (816) 555-0182 reach the same front desk and are handy for appointment changes.'
    }
  ],
  cta: {
    h2: 'Ready when you are',
    text: 'Call, text or send the form and we will get you on the schedule, usually within one business day.',
    primary: { label: 'Book online', path: '/contact#book' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
