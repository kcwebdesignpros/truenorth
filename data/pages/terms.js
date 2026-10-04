'use strict';

module.exports = {
  slug: 'terms',
  path: '/terms',
  name: 'Terms of Service',
  metaTitle: 'Terms of Service | TrueNorth Dental Kansas City',
  metaDescription:
    'The terms that govern your use of the TrueNorth Dental website and our appointment, cancellation, payment and dispute policies for patients in Kansas City.',
  metaKeywords:
    'dental terms of service kansas city, dental cancellation policy, dental payment policy missouri, patient responsibilities dentist, dental website terms, clay county dental practice',
  eyebrow: 'Legal',
  h1: 'Terms of Service',
  heroIntro:
    'These terms govern your use of the TrueNorth Dental website and the practical side of your relationship with our practice, from appointments to payment.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Dental treatment room and equipment at TrueNorth Dental in Kansas City',
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'acceptance-and-information',
      eyebrow: 'Acceptance',
      h2: 'Accepting these terms, and the limits of our website',
      body: [
        'By using this website or booking with us, you agree to these Terms of Service. If you disagree with any part, please do not use the site. Our privacy and accessibility policies also form part of this agreement.',
        'You must be eighteen or older to book online or submit a form; a parent or guardian must act for anyone younger. Keep the information you give us accurate and current.',
        'Website content is general information about dental health and our services, not dental advice, a diagnosis or a substitute for an examination. A dentist-patient relationship begins only after a completed exam and signed consent to treatment, and an email or voicemail does not create one.'
      ]
    },
    {
      type: 'prose',
      id: 'appointments',
      eyebrow: 'Appointments',
      h2: 'Appointment and cancellation policy',
      body: [
        'We hold a specific time for every patient, so we ask for at least twenty-four hours notice to cancel or reschedule. Call the practice, reply to your reminder or use the contact form and we will find you a new time.',
        'Cancel with less than twenty-four hours notice, or miss the appointment, and a fifty dollar late-cancellation fee may apply. We waive it for a first missed appointment and for genuine emergencies or illness.',
        'After two missed appointments within twelve months we may request a deposit before booking further visits.'
      ]
    },
    {
      type: 'table',
      id: 'cancellation-policy',
      eyebrow: 'Appointments',
      h2: 'Appointment and cancellation policy at a glance',
      intro:
        'What happens in each situation.',
      head: ['Situation', 'Notice required', 'What happens'],
      rows: [
        ['Rescheduling or cancelling', 'At least 24 hours before your appointment', 'No fee, and we rebook you at the next suitable time'],
        ['Late cancellation', 'Less than 24 hours before your appointment', 'A $50 late-cancellation fee may apply'],
        ['First missed appointment', 'No notice given', 'We waive the fee and call you to rebook'],
        ['Second missed appointment', 'No notice given', 'A $50 fee may apply and a deposit may be requested for future bookings'],
        ['Repeated no-shows', 'No notice given', 'We may shorten reserved appointments or require prepayment'],
        ['Emergency or illness', 'Tell us as soon as you can', 'We waive the fee and focus on getting you seen']
      ],
      note:
        'Fees cover the clinical time we held for you. Tell us if a fee would cause real hardship.'
    },
    {
      type: 'checklist',
      id: 'responsibilities',
      eyebrow: 'Your part',
      h2: 'What you agree to when you book with us',
      intro: 'The commitments that keep care running smoothly for everyone.',
      columns: 2,
      items: [
        'Give us accurate contact, insurance and health information',
        'Tell us about changes to your medications or conditions',
        'Give at least 24 hours notice to cancel or reschedule',
        'Arrive on time so your full appointment can be used',
        'Pay your balance at the time of service',
        'Ask questions when something is unclear to you',
        'Follow the home-care advice we give you',
        'Treat our team and other patients with respect',
        'Tell us promptly when your details change',
        'Read our privacy and accessibility policies'
      ]
    },
    {
      type: 'prose',
      id: 'payment-and-outcomes',
      eyebrow: 'Payment',
      h2: 'Payment, estimates and treatment outcomes',
      body: [
        'Payment is due at the time of service unless we agree otherwise in writing. We accept cash, debit and major cards, and offer financing through CareCredit, Cherry and Sunbit, plus a twenty-nine dollar monthly membership plan.',
        'A written estimate is our best judgement, not a guarantee. If treatment reveals more than expected we will stop, explain the change and give you a new estimate before continuing.',
        'Insurance is a contract between you and your carrier, so you remain responsible for deductibles, co-insurance and any denied balance. Outcomes vary with hygiene, diet, health and genetics, so we cannot promise a specific result, but we will explain the realistic range.'
      ]
    },
    {
      type: 'prose',
      id: 'use-and-ip',
      eyebrow: 'Using the site',
      h2: 'Acceptable use, intellectual property and third-party links',
      body: [
        'Use this site lawfully and respectfully. Do not attempt unauthorised access, interfere with its operation, upload malicious code or scrape content at scale. All text, images and design belong to TrueNorth Dental or are used with permission, and may not be reused commercially without written permission.',
        'We sometimes link to other websites, such as dental associations or financing partners. We do not control them and are not responsible for their content, accuracy or privacy practices. A link is not an endorsement.'
      ]
    },
    {
      type: 'prose',
      id: 'liability-and-changes',
      eyebrow: 'Legal',
      h2: 'Liability, disputes and changes to these terms',
      body: [
        'To the fullest extent the law allows, we are not liable for indirect or consequential losses arising from your use of this website. Nothing here limits our responsibility for the professional care we provide.',
        'These terms are governed by Missouri law, with the courts of Clay County as the venue for any action. We ask that you contact us first, because most concerns are resolved more quickly with a conversation.',
        'We may update these terms and will post the revised version here with a new effective date. These terms are effective September 18, 2026. Questions go to (816) 555-0182 or hello@truenorthdental.com.'
      ]
    }
  ]
};
