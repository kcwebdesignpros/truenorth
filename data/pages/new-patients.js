'use strict';
/**
 * New Patients page. First-visit walkthrough, what to bring, comfort options,
 * the $99 special and questions — rendered by views/page.ejs.
 */

module.exports = {
  slug: 'new-patients',
  path: '/new-patients',
  name: 'New Patients',
  metaTitle: 'New Patients | TrueNorth Dental, Kansas City Northland',
  metaDescription:
    'See what happens at your first visit to our Kansas City northland office, including the $99 new patient special, parking, forms and a step-by-step walkthrough.',
  metaKeywords:
    'new patient dentist kansas city, northland dental new patients, $99 dental special kansas city, first dental visit kansas city mo, dentist north oak trafficway',
  eyebrow: 'Your first visit',
  h1: 'What to Expect as a New Patient',
  heroIntro:
    'Your first appointment as a new patient at TrueNorth Dental takes about an hour and covers a full exam, digital X-rays, a cleaning and a plain-English plan.',
  heroImage: '/img/about-dentist-patient.webp',
  heroImageAlt: 'Dentist with a smiling patient in the chair at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 99, prefix: '$', label: 'New patient special, regularly $389' },
    { value: 60, suffix: ' min', label: 'Typical length of a first visit' },
    { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' },
    { value: 15, suffix: ' min', label: 'Saved by completing forms online' }
  ],
  schemaType: 'MedicalWebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'Your First Visit, Step by Step',
      intro: 'Here is the actual sequence of a new patient appointment at our North Oak office.',
      items: [
        {
          title: 'Check in and meet your team',
          text: 'You are greeted by name, given a short tour, and we confirm your insurance before anything begins.'
        },
        {
          title: 'Digital X-rays',
          text: 'A full set of digital X-rays appears on the screen beside your chair within seconds, with no film to develop.'
        },
        {
          title: 'Comprehensive exam and screening',
          text: 'Your dentist checks every tooth, your gums and your bite, then performs a gentle oral cancer screening.'
        },
        {
          title: 'Professional cleaning',
          text: 'Your hygienist removes plaque and tartar, polishes your teeth and checks for early gum disease. Comfort breaks are always available.'
        },
        {
          title: 'Your plan with Nia Brooks',
          text: 'Nia walks through what we found in plain language, answers your questions and hands you a written estimate before you leave.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'bring',
      eyebrow: 'Come prepared',
      h2: 'What to Bring to Your First Visit',
      intro: 'Bringing these items lets us verify your benefits and start on time.',
      columns: 2,
      items: [
        'A photo ID, such as a driver’s licence',
        'Your dental insurance card, if you have one',
        'A list of any medications you take',
        'The name of your previous dentist',
        'Your completed new patient forms',
        'A form of payment for any co-pay',
        'Any questions you have been saving up',
        'A light sweater, since we keep the office cool'
      ]
    },
    {
      type: 'cards',
      id: 'comfort',
      eyebrow: 'Extra care',
      h2: 'For Nervous Patients and Young Ones',
      intro: 'Two groups get extra time and patience at TrueNorth.',
      columns: 2,
      items: [
        {
          icon: 'hand-heart',
          title: 'A stop signal you control',
          text: 'Every patient gets a raised-hand signal that pauses treatment instantly, so you are always in control.'
        },
        {
          icon: 'heart-pulse',
          title: 'Nitrous and sedation options',
          text: 'Laughing gas takes the edge off for most anxious patients, and Dr. Hart holds a Missouri sedation permit for longer treatment.'
        },
        {
          icon: 'baby',
          title: 'Children from age one',
          text: 'A child’s first visit is short and friendly. We count teeth, take a gentle look and keep the whole thing positive.'
        },
        {
          icon: 'users',
          title: 'Parents stay in the room',
          text: 'Parents are welcome beside the chair for every visit, and we explain what we are doing as we go.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'special',
      eyebrow: 'New patient special',
      h2: 'The $99 New Patient Special',
      body: [
        'Our new patient special is $99 and includes a comprehensive exam, a full set of digital X-rays, a cleaning, an oral cancer screening and a personalised plan. The same visit is regularly $389, so you save $290.',
        'The special applies whether or not you carry dental insurance. If you have coverage, we still bill your plan for the portions it covers, which often lowers what you owe even further.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'New Patient Questions',
      intro: 'The questions our front desk hears most from people booking a first visit.',
      items: [
        {
          q: 'How long does a first visit take?',
          a: 'Plan for about an hour, including check-in, digital X-rays, a comprehensive exam, a cleaning and a treatment plan conversation.'
        },
        {
          q: 'What does the $99 special include?',
          a: 'It covers a comprehensive exam, a full set of digital X-rays, a cleaning, an oral cancer screening and a personalised treatment plan.'
        },
        {
          q: 'What should I bring?',
          a: 'Bring a photo ID, your dental insurance card, a list of medications and the name of your previous dentist.'
        },
        {
          q: 'Where do I park?',
          a: 'There is free surface parking in front of our building at 4820 N Oak Trafficway, and an elevator takes you to Suite 210.'
        },
        {
          q: 'I am nervous about the dentist. What can you do?',
          a: 'Tell us when you book and we will allow extra time. Every patient gets a raised-hand stop signal and we explain each step first.'
        },
        {
          q: 'What if I do not have dental insurance?',
          a: 'Our in-house membership plan is $29 a month and includes two cleanings, exams and X-rays plus 15% off everything else.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Ready for a First Visit That Feels Easy?',
      text: 'Book your $99 new patient appointment and we will take it from there. If you have questions first, call and talk to a real person.',
      primary: { label: 'Book your visit', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'How long does a first visit take?',
      a: 'Plan for about an hour, including check-in, digital X-rays, a comprehensive exam, a cleaning and a treatment plan conversation.'
    },
    {
      q: 'What does the $99 special include?',
      a: 'It covers a comprehensive exam, a full set of digital X-rays, a cleaning, an oral cancer screening and a personalised treatment plan.'
    },
    {
      q: 'What should I bring?',
      a: 'Bring a photo ID, your dental insurance card, a list of medications and the name of your previous dentist.'
    },
    {
      q: 'Where do I park?',
      a: 'There is free surface parking in front of our building at 4820 N Oak Trafficway, and an elevator takes you to Suite 210.'
    },
    {
      q: 'I am nervous about the dentist. What can you do?',
      a: 'Tell us when you book and we will allow extra time. Every patient gets a raised-hand stop signal and we explain each step first.'
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'Our in-house membership plan is $29 a month and includes two cleanings, exams and X-rays plus 15% off everything else.'
    }
  ],
  cta: {
    h2: 'Ready for a First Visit That Feels Easy?',
    text: 'Book your $99 new patient appointment and we will take it from there. If you have questions first, call and talk to a real person.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
