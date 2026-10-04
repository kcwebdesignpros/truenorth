'use strict';
/**
 * New Patients page. First-visit walkthrough, the $99 special, parking,
 * insurance verification, comfort and forms — rendered by views/page.ejs.
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
    'Your first appointment at TrueNorth Dental takes about an hour and covers everything — a full exam, digital X-rays, a cleaning and a plain-English plan. Here is exactly what happens.',
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
      type: 'prose',
      id: 'welcome',
      eyebrow: 'Start here',
      h2: 'A First Visit Without the Guesswork',
      body: [
        'Walking into a new dental office can feel like a test you did not study for. We designed our first visit to remove that feeling entirely. Nobody here is counting the years since your last cleaning or grading the state of your teeth. We are simply gathering information so we can help you, and we will do it at whatever pace keeps you comfortable.',
        'Your first appointment runs about an hour, sometimes a little longer if we find something that deserves a closer look. That is deliberate. We would rather spend the time now than rush you through a five-minute exam and miss something that matters. Slow is not inefficient in dentistry; it is how good decisions get made. A thorough first visit is also the best way we know to avoid bigger, more expensive problems later.',
        'You will leave knowing three things: what is happening in your mouth, what it will cost to address anything we found, and what the next step looks like. If the answer to any of those is unclear when you walk out, we have not done our job. Ask us before you go, because that is exactly what the visit is for.',
        'Everything described below is the real order of a first visit at our North Oak Trafficway office, not a generic checklist copied from a brochure. If you have a question before you arrive, call us at (816) 555-0182 and a person will answer the phone.',
        'One more thing worth saying plainly: you do not need to get your teeth in order before you come in. That is like cleaning the house before the cleaner arrives. Come exactly as you are, and we will take it from there together.'
      ]
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'Your First Visit, Step by Step',
      intro: 'Here is the actual sequence of a new patient appointment, from the front door to the car park.',
      items: [
        {
          title: 'Check in and meet your team',
          text: 'You will be greeted by name at the front desk, then given a short tour so the office feels familiar before anything begins. This is also when we confirm your insurance and review any forms you have not finished online. You will never be handed a clipboard and told to hurry.'
        },
        {
          title: 'Digital X-rays',
          text: 'We take a full set of digital X-rays using sensors that are far more comfortable than the old film packets. The images appear on the screen beside your chair within seconds, so your dentist can review them with you right away. There is no waiting around for film to develop.'
        },
        {
          title: 'Comprehensive exam and oral cancer screening',
          text: 'Your dentist examines every tooth, your gums, your bite and your jaw, then performs a gentle oral cancer screening of your lips, tongue and throat. This part is quick, painless and genuinely can save a life. We will tell you exactly what we see as we go.'
        },
        {
          title: 'Professional cleaning',
          text: 'Your hygienist removes plaque and tartar, polishes your teeth and checks for early gum disease. If your gums need deeper care than a routine cleaning, we will explain that before doing anything and give you the cost first. Comfort breaks are always available if you need one.'
        },
        {
          title: 'Your treatment plan conversation with Nia Brooks',
          text: 'You sit down with Nia Brooks, our treatment coordinator, who walks through what we found in plain language. She presents the options, answers your questions and hands you a written estimate before you leave the room. There is no pressure and no deadline on the decision.'
        },
        {
          title: 'Booking your next visit',
          text: 'If everything looks healthy, we schedule your next cleaning for six months out. If treatment is needed, you choose when to start. There is never any pressure to book anything on the spot, and a reminder will arrive by text a few days beforehand.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'bring',
      eyebrow: 'Come prepared',
      h2: 'What to Bring to Your First Visit',
      intro: 'Bringing these items means we can verify your benefits and start your appointment on time.',
      columns: 2,
      items: [
        'A photo ID, such as a driver’s licence',
        'Your dental insurance card, if you have one',
        'A list of any medications you take',
        'The name of your previous dentist, so we can request records',
        'Your completed new patient forms, or arrive 15 minutes early',
        'A form of payment for any co-pay or balance',
        'Any questions you have been saving up',
        'A light sweater, since we keep the office cool'
      ]
    },
    {
      type: 'prose',
      id: 'special',
      eyebrow: 'New patient special',
      h2: 'The $99 New Patient Special',
      body: [
        'Our new patient special is $99 and includes everything in a first visit: a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan. That same visit is regularly $389, so the saving works out to $290. There is no membership or subscription required to claim it, and it is one of the most affordable ways to get a complete picture of your dental health.',
        'The offer is for new patients and covers the visit described above. If we find that you need treatment beyond a routine cleaning, we will tell you plainly and quote it separately before you decide anything. The $99 covers the visit itself, not any future work, so you will never be surprised by a larger bill.',
        'The special applies whether or not you carry dental insurance. If you do have coverage, we will still bill your plan for the portions it covers, which often reduces what you owe out of pocket even further. Ask us to verify your benefits and we will show you both numbers side by side.',
        'The most common thing we hear from new patients is that they expected to be judged and were not. If cost is the reason you have stayed away, tell us early. We would far rather build a smaller, staged plan you can actually afford than hand you a large one you will never start.'
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'By the numbers',
      h2: 'First Visit Compared With a Routine Check-Up',
      intro: 'A first visit is more thorough than a regular six-month cleaning, and here is exactly how.',
      head: ['What happens', 'First visit', 'Routine visit'],
      rows: [
        ['Time in the chair', 'About 60 minutes', 'About 45 minutes'],
        ['Full set of X-rays', 'Yes, always', 'Only when needed'],
        ['Comprehensive exam', 'Yes, head to toe', 'A focused update'],
        ['Oral cancer screening', 'Yes', 'Yes'],
        ['Professional cleaning', 'Yes', 'Yes'],
        ['Treatment plan conversation', 'Yes, with a written estimate', 'Only if something changed'],
        ['Cost with our special', '$99 for new patients', 'Covered by most plans']
      ],
      note: 'The $99 new patient special applies to your first visit. Routine cleaning visits are billed to your insurance or to our in-house membership plan.'
    },
    {
      type: 'split',
      id: 'parking-insurance',
      eyebrow: 'Getting here',
      h2: 'Finding Us, and Getting Your Insurance Sorted',
      body: [
        'We are at 4820 N Oak Trafficway, Suite 210, in Kansas City, Missouri 64118, just off the North Oak exit. There is free surface parking directly in front of the building, and an elevator carries you from the lot to our second-floor suite with step-free access the whole way. If you are coming from Gladstone, Liberty or Parkville, the drive is usually under fifteen minutes.',
        'Before your appointment, our team verifies your dental benefits so there are no surprises at the desk. Sofia Delgado and the front-office staff confirm your annual maximum, deductible and coverage percentages in advance, then explain in plain terms what is likely to be covered and what is not. You will know your estimated cost before you sit down.',
        'If your plan is out of network, we can still usually file the claim for you so you receive whatever out-of-network benefits apply. Ask us and we will run the numbers both ways, so you can see the real difference in dollars before you decide anything.'
      ],
      list: [
        'Free parking directly in front of the building',
        'Step-free access by elevator to Suite 210',
        'Benefits verified before you arrive'
      ],
      image: '/img/clinic-interior.webp',
      imageAlt: 'Bright modern dental operatory at TrueNorth Dental in the Kansas City northland',
      reverse: false,
      cta: { label: 'Get directions', path: '/contact' }
    },
    {
      type: 'cards',
      id: 'comfort',
      eyebrow: 'Extra care',
      h2: 'For Nervous Patients and Young Ones',
      intro: 'Two groups get extra time and extra patience at TrueNorth — anxious adults and small children.',
      columns: 3,
      items: [
        {
          icon: 'hand-heart',
          title: 'A stop signal you control',
          text: 'Every patient gets a simple raised-hand signal that pauses treatment instantly. You are always in control of what happens and when it happens. It is your appointment and your call at every stage.'
        },
        {
          icon: 'heart-pulse',
          title: 'Nitrous and sedation options',
          text: 'Laughing gas takes the edge off for most anxious patients. For longer treatment, Dr. Hart holds a Missouri sedation permit and can offer oral sedation. Both options are discussed with you beforehand so there are no surprises.'
        },
        {
          icon: 'headphones',
          title: 'Quiet, unhurried rooms',
          text: 'Bring your own playlist or borrow a pair of headphones. We talk through every instrument before it goes anywhere near you, so nothing comes as a surprise. The room is yours for the length of your appointment.'
        },
        {
          icon: 'baby',
          title: 'Children from age one',
          text: 'A child’s first visit is short, friendly and mostly about getting comfortable in the chair. We count teeth, take a gentle look and keep the whole thing positive. We keep that first appointment to about twenty minutes for a young child.'
        },
        {
          icon: 'smile',
          title: 'Sticker charts and patience',
          text: 'Nia Brooks has been known to turn a filling into an accomplishment with a sticker chart. Children are never rushed, talked over or made to feel silly. Small rewards go a long way at that age.'
        },
        {
          icon: 'users',
          title: 'Parents stay in the room',
          text: 'Parents are welcome beside the chair for every visit. We explain what we are doing so you can reassure your child and ask questions as we go. You know your child better than we do, and we will listen.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'forms-return',
      eyebrow: 'Before and after',
      h2: 'Forms, Scheduling and Coming Back',
      body: [
        'New patient forms are available online and take about ten minutes to complete. Finishing them before you arrive saves roughly fifteen minutes at the front desk and lets us verify your insurance ahead of time. If you would rather fill them out in the office, simply arrive fifteen minutes early and we will get you started with a clipboard.',
        'You will need your insurance details and a list of medications handy when you complete the forms. If a question does not make sense, leave it blank and ask us when you arrive. Nobody will mind, and it is far better than guessing at an answer that could affect your care. If you get stuck, call and we will walk you through it.',
        'Most patients come back every six months for a cleaning and check-up, which is the schedule that keeps small problems small. If you have gum disease or another condition we are monitoring, we may recommend visits every three or four months, and we will explain exactly why rather than simply handing you a date. We also send reminders before each visit so a routine appointment never quietly slips past you.',
        'If it has been a long time since your last visit, please do not let that stop you. Come in, let us take a look and we will build the schedule around what you actually need rather than what a textbook says. Starting today is always better than starting next year.',
        'If you are transferring from another dentist, we can request your previous records for you once you give us the practice name. It usually takes a few days, and we will tell you if anything we need has not arrived before your appointment so the visit is not delayed.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'New Patient Questions',
      intro: 'The questions our front desk hears most often from people booking their first visit.',
      items: [
        {
          q: 'How long does a first visit take?',
          a: 'Plan for about an hour. That includes check-in, digital X-rays, a comprehensive exam, an oral cancer screening, a cleaning and a conversation about your treatment plan with a written estimate in hand.'
        },
        {
          q: 'What does the $99 new patient special include?',
          a: 'The $99 covers a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan. The same visit is regularly $389, so you save $290.'
        },
        {
          q: 'Do I need to bring anything to my first appointment?',
          a: 'Bring a photo ID, your dental insurance card if you have one, a list of your medications and the name of your previous dentist. If you complete your forms online, that is everything you need.'
        },
        {
          q: 'Where do I park?',
          a: 'There is free surface parking directly in front of our building at 4820 N Oak Trafficway. An elevator takes you to Suite 210 on the second floor, with step-free access the entire way from the lot.'
        },
        {
          q: 'I am nervous about the dentist. What can you do?',
          a: 'Tell us when you book and we will schedule extra time. Every patient gets a raised-hand stop signal, we explain each step before it happens, and we offer nitrous oxide plus oral sedation for anxious patients.'
        },
        {
          q: 'Can I bring my child to their first dental visit?',
          a: 'Yes, and the earlier the better. We like to see children around their first birthday. The visit is short and friendly, parents stay in the room, and we focus on making the chair feel safe.'
        },
        {
          q: 'How often should I come back?',
          a: 'Most patients return every six months for a cleaning and check-up. If we are monitoring gum disease or another condition, we may recommend visits every three to four months and will explain the reasoning.'
        },
        {
          q: 'What if I do not have dental insurance?',
          a: 'You are very welcome here. Our in-house membership plan is $29 a month and includes two cleanings, exams and X-rays plus 15% off everything else. We can also arrange financing through CareCredit, Cherry or Sunbit.'
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
      a: 'Plan for about an hour. That includes check-in, digital X-rays, a comprehensive exam, an oral cancer screening, a cleaning and a conversation about your treatment plan with a written estimate in hand.'
    },
    {
      q: 'What does the $99 new patient special include?',
      a: 'The $99 covers a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan. The same visit is regularly $389, so you save $290.'
    },
    {
      q: 'Do I need to bring anything to my first appointment?',
      a: 'Bring a photo ID, your dental insurance card if you have one, a list of your medications and the name of your previous dentist. If you complete your forms online, that is everything you need.'
    },
    {
      q: 'Where do I park?',
      a: 'There is free surface parking directly in front of our building at 4820 N Oak Trafficway. An elevator takes you to Suite 210 on the second floor, with step-free access the entire way from the lot.'
    },
    {
      q: 'I am nervous about the dentist. What can you do?',
      a: 'Tell us when you book and we will schedule extra time. Every patient gets a raised-hand stop signal, we explain each step before it happens, and we offer nitrous oxide plus oral sedation for anxious patients.'
    },
    {
      q: 'Can I bring my child to their first dental visit?',
      a: 'Yes, and the earlier the better. We like to see children around their first birthday. The visit is short and friendly, parents stay in the room, and we focus on making the chair feel safe.'
    },
    {
      q: 'How often should I come back?',
      a: 'Most patients return every six months for a cleaning and check-up. If we are monitoring gum disease or another condition, we may recommend visits every three to four months and will explain the reasoning.'
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'You are very welcome here. Our in-house membership plan is $29 a month and includes two cleanings, exams and X-rays plus 15% off everything else. We can also arrange financing through CareCredit, Cherry or Sunbit.'
    }
  ],
  cta: {
    h2: 'Ready for a First Visit That Feels Easy?',
    text: 'Book your $99 new patient appointment and we will take it from there. If you have questions first, call and talk to a real person.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
