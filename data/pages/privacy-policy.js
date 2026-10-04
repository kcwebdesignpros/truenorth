'use strict';

module.exports = {
  slug: 'privacy-policy',
  path: '/privacy-policy',
  name: 'Privacy Policy',
  metaTitle: 'Privacy Policy | TrueNorth Dental Kansas City',
  metaDescription:
    'How TrueNorth Dental collects, uses and protects your health information, the rights HIPAA gives you, and how to reach our Privacy Officer in Kansas City.',
  metaKeywords:
    'dental privacy policy kansas city, HIPAA notice of privacy practices, dental records missouri, patient rights dentist, dental data security, privacy officer truenorth dental',
  eyebrow: 'Legal',
  h1: 'Privacy Policy',
  heroIntro:
    'This policy explains what TrueNorth Dental collects, why, how we protect it, and the rights you hold over your dental and health records.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Bright modern dental operatory at TrueNorth Dental in Kansas City',
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'what-we-collect',
      eyebrow: 'What we collect',
      h2: 'What we collect and why',
      body: [
        'We collect what you tell us, what your care produces and what our website records. Booking or a call gives us your name, contact details, date of birth, emergency contact and insurance information.',
        'Your dental and medical history covers medications, allergies, past treatment and relevant conditions, because it shapes every safe treatment decision. Your clinical record adds exam findings, X-rays, scans, photographs and notes.',
        'We use it to provide safe care, be paid, run the practice and meet our legal duties, and you may withdraw consent at any time.'
      ]
    },
    {
      type: 'table',
      id: 'data-categories',
      eyebrow: 'At a glance',
      h2: 'What we collect and why',
      intro:
        'The main categories of information we hold, and why.',
      head: ['Category', 'What it includes', 'Why we collect it'],
      rows: [
        ['Contact details', 'Name, address, phone, email, date of birth, emergency contact', 'Booking appointments and reaching you about your care'],
        ['Insurance and billing', 'Carrier, member and group numbers, policyholder details, payment method', 'Verifying benefits, filing claims and taking payment'],
        ['Medical and dental history', 'Medications, allergies, conditions, past treatment, family history', 'Planning treatment that is safe for you'],
        ['Clinical records', 'Exam findings, X-rays, scans, photographs, notes, prescriptions', 'Diagnosing, treating and documenting your care'],
        ['Appointment records', 'Bookings, reminders, cancellations and attendance', 'Running the schedule and following up on your care'],
        ['Website analytics', 'Pages viewed, approximate location, device and browser type', 'Improving the site and understanding visitor interest'],
        ['Cookies', 'Session and analytics identifiers set in your browser', 'Keeping the site working and measuring how it is used']
      ],
      note:
        'We collect only the minimum each purpose needs. Optional form fields may be left blank.'
    },
    {
      type: 'prose',
      id: 'hipaa-and-rights',
      eyebrow: 'Your rights',
      h2: 'HIPAA, our Notice of Privacy Practices and your rights',
      body: [
        'Your records are protected health information under HIPAA, and we may use and share them only as the law allows. Our Notice of Privacy Practices explains how, and we give you a copy at your first visit.',
        'The notice lets you inspect and copy your records, ask us to amend inaccurate information, receive an accounting of our disclosures, and request restrictions on certain uses. You may also choose how we contact you and receive a paper copy.',
        'Exercising a right never affects your care, and we will notify you in writing if your unsecured information is breached. Complaints go to us or to the Office for Civil Rights.'
      ]
    },
    {
      type: 'checklist',
      id: 'patient-rights',
      eyebrow: 'Your rights',
      h2: 'The rights your Notice of Privacy Practices gives you',
      intro:
        'These rights apply to the information we hold about you. Contact our Privacy Officer to use any of them.',
      columns: 2,
      items: [
        'Inspect and copy your dental and health records',
        'Ask us to amend information you believe is inaccurate',
        'Request an accounting of our disclosures',
        'Request restrictions on certain uses and disclosures',
        'Ask us to contact you in a specific way or place',
        'Receive a paper copy of our Notice of Privacy Practices',
        'Be notified if your unsecured information is breached',
        'Name someone to act on your behalf',
        'Withdraw an authorisation you have given us',
        'File a complaint without fear of retaliation'
      ]
    },
    {
      type: 'prose',
      id: 'security-retention-providers',
      eyebrow: 'Security and retention',
      h2: 'How we protect, retain and share your information',
      body: [
        'Electronic records are encrypted in transit and at rest, access is limited by role, and our systems log who opened which record. Paper records are locked, and our team trains on privacy each year.',
        'Missouri law sets retention: generally seven years after an adult’s last treatment, and seven years after a minor turns eighteen. We dispose of records securely once that period ends.',
        'Our records software, clearinghouses, payment processors and analytics providers each sign a business associate agreement before touching your information. We never sell your information or share it with advertisers.'
      ]
    },
    {
      type: 'prose',
      id: 'cookies-and-children',
      eyebrow: 'Website and minors',
      h2: 'Cookies, analytics and children’s privacy',
      body: [
        'Our site uses necessary cookies to keep navigation and forms working, plus analytics cookies showing which pages are read. That data is aggregate, never used to identify you and never combined with your clinical record. You can block cookies in your browser.',
        'A parent or guardian consents to a child’s treatment, and our site is not directed at children under thirteen. At eighteen a patient controls their own records unless a legal arrangement says otherwise.'
      ]
    },
    {
      type: 'prose',
      id: 'contact-and-changes',
      eyebrow: 'Contact and updates',
      h2: 'Contacting our Privacy Officer, and changes to this policy',
      body: [
        'Questions, rights requests and concerns go to our Privacy Officer at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, by phone at (816) 555-0182, or by email at hello@truenorthdental.com.',
        'You may complain to us without fear of retaliation, and your care will not change. You may also complain to the Office for Civil Rights.',
        'We update this policy when our practices or the law change, posting a new effective date here. This policy is effective September 18, 2026, and replaces all earlier versions.'
      ]
    }
  ]
};
