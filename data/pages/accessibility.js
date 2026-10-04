'use strict';

module.exports = {
  slug: 'accessibility',
  path: '/accessibility',
  name: 'Accessibility Statement',
  metaTitle: 'Accessibility Statement | TrueNorth Dental Kansas City',
  metaDescription:
    'How TrueNorth Dental meets WCAG 2.2 AA and Section 508, how our Kansas City office supports patients with disabilities, and how to request an accommodation.',
  metaKeywords:
    'accessible dentist kansas city, dental office wheelchair access, WCAG 2.2 AA dentist, section 508 dental website, interpreter dental appointment, accessible dental care northland',
  eyebrow: 'Commitment',
  h1: 'Accessibility Statement',
  heroIntro:
    'Everyone deserves to reach dental care without unnecessary barriers. This statement explains how we make our website and our Kansas City office accessible, and how to ask for help.',
  heroImage: '/img/about-dentist-patient.webp',
  heroImageAlt: 'Dentist talking with a smiling patient in the dental chair at TrueNorth Dental',
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'commitment',
      eyebrow: 'Our commitment',
      h2: 'Our commitment to accessible care',
      body: [
        'TrueNorth Dental is committed to making our website and practice usable by everyone, including people with disabilities. We aim to meet the Web Content Accessibility Guidelines version 2.2 at Level AA, the standard referenced by Section 508 of the Rehabilitation Act.',
        'We treat digital access as part of the care we provide. If something does not work for you, tell us and we will act on it.'
      ]
    },
    {
      type: 'checklist',
      id: 'features',
      eyebrow: 'In place today',
      h2: 'Accessibility features in place today',
      intro: 'Live now on our website and in our office.',
      columns: 2,
      items: [
        'Semantic HTML with a logical heading structure',
        'Menus and forms fully keyboard navigable',
        'Visible focus indicators on every interactive element',
        'Descriptive alt text on every meaningful image',
        'Colour contrast above 4.5 to 1 for body text',
        'Text that scales to 200 percent without losing function',
        'Reduced-motion support that follows your operating system setting',
        'Captions and transcripts for our video content',
        'Form labels and errors announced to screen readers',
        'No meaning conveyed by colour alone',
        'Step-free entry and an elevator to our second-floor suite',
        'Accessible parking, restroom and wide operatories'
      ]
    },
    {
      type: 'prose',
      id: 'physical-accessibility',
      eyebrow: 'At the office',
      h2: 'Physical accessibility of our office',
      body: [
        'Our office at 4820 N Oak Trafficway is on the second floor, with step-free entry and an elevator to Suite 210. Accessible parking sits close to the entrance, and the route from the car park is level and free of steps.',
        'Our operatories are wide enough for a wheelchair, and our team is trained to help with a safe transfer into the chair. We have an accessible restroom and seating with and without arms. Guide dogs and service animals are welcome.',
        'If you need extra time to get comfortable or a break mid-appointment, tell us when you book so we can plan the schedule around you.'
      ]
    },
    {
      type: 'prose',
      id: 'communication-and-requests',
      eyebrow: 'Communication and requests',
      h2: 'Communication access and how to request an accommodation',
      body: [
        'We offer communication support at no cost. You can contact us through the Missouri Relay service, and we can arrange a qualified sign-language interpreter if you give us notice.',
        'To request an accommodation, call (816) 555-0182, email hello@truenorthdental.com, mention it when you book or tell us when you arrive. You do not need to give a diagnosis, and you will never be charged.',
        'Tell us what would help, whether that is a longer appointment, a quieter room, a wheelchair-accessible route or large-print materials. Our Practice Manager, Sofia Delgado, coordinates requests.'
      ]
    },
    {
      type: 'table',
      id: 'accommodations',
      eyebrow: 'Options',
      h2: 'Types of accommodation we can arrange',
      intro:
        'A starting point, not a limit. Ask if you need something else.',
      head: ['Accommodation', 'What it covers', 'How to request it'],
      rows: [
        ['Communication', 'Sign-language interpreters, relay calls, written and plain-language summaries', 'Call, email or ask when booking, ideally a week ahead'],
        ['Print and format', 'Large-print forms, high-contrast documents, digital copies you can enlarge', 'Ask at the front desk or by email'],
        ['Mobility', 'Step-free access, elevator, wide operatories, wheelchair transfer support', 'Tell us when booking so we can prepare the room'],
        ['Scheduling', 'Longer appointments, quieter times, extra time to settle into the chair', 'Request when you book or call to adjust an existing visit'],
        ['Sensory', 'A quieter room, reduced lighting, breaks during treatment, no strong scents', 'Mention your preferences in advance or when you arrive'],
        ['Support person', 'A family member, carer or support person in the room with you', 'Simply bring them along, or tell us if you need extra seating']
      ],
      note: 'Accommodations are provided at no cost. You will never be charged for asking.'
    },
    {
      type: 'prose',
      id: 'known-limitations',
      eyebrow: 'Still working on it',
      h2: 'Known limitations we are still working on',
      body: [
        'Some older PDF documents on this site are not yet fully tagged for screen readers, and we are working through them. Where a document is not accessible, we will provide the information in another format on request.',
        'A few third-party tools, including the online booking and financing widgets, are built by outside providers. Our team can complete those tasks by phone if a tool blocks you.',
        'Our building predates current standards, so call before your visit and we will tell you honestly whether our space will work for you.'
      ]
    },
    {
      type: 'prose',
      id: 'feedback-and-audit',
      eyebrow: 'Feedback and review',
      h2: 'Feedback, response times, complaints and our last audit',
      body: [
        'If you find a barrier, email hello@truenorthdental.com, call (816) 555-0182 or ask for Sofia Delgado, our Practice Manager. We commit to responding within five business days.',
        'If you are not satisfied with our response, escalate in writing to the practice owner, Dr. Amelia Hart, at our office address. You may also contact the U.S. Department of Justice or the Missouri Commission on Human Rights.',
        'Our most recent accessibility audit was completed in August 2026 and covered our website, booking and contact forms, and our office route. We will re-test at least once a year.'
      ]
    }
  ],
  cta: {
    h2: 'Tell us what would help',
    text: 'If something on our website or in our office is difficult for you, call the practice or send us a note. We respond within five business days and will work with you to find a solution.',
    primary: { label: 'Contact the practice', path: '/contact' }
  }
};
