'use strict';

/**
 * Service detail page: General & Family Dentistry.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'general-dentistry',
  order: 1,
  name: 'General & Family Dentistry',
  shortName: 'General Dentistry',
  icon: 'tooth',
  image: '/img/svc-general-dentistry.webp',
  imageAlt: 'Dentist in gloves carrying out a routine dental exam at TrueNorth Dental in Kansas City',
  tagline: 'Everyday care that keeps your whole family out of the repair shop.',
  metaTitle: 'General & Family Dentistry in Kansas City | TrueNorth Dental',
  metaDescription:
    'Routine exams, cleanings, fillings and root canal therapy for Kansas City northland families. Gentle, judgement-free general dentistry starting at $99 a visit.',
  metaKeywords:
    'general dentist kansas city, family dentist northland, dental cleaning kansas city mo, root canal therapy kansas city, gum disease treatment gladstone, kids dentist liberty mo',
  eyebrow: 'Preventive & family care',
  heroIntro:
    'Exams, cleanings, fillings and gum care for every age in your household, delivered in a calm northland office where nobody lectures you about flossing.',
  priceFrom: 'From $99',
  priceValue: 99,
  duration: '45–60 minutes',
  highlights: [
    'Routine exams & cleanings',
    'Digital X-rays',
    'Tooth-coloured fillings',
    'Root canal therapy',
    'Gum disease treatment',
    'Kids & senior dentistry'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-it-matters',
      eyebrow: 'Why prevention pays',
      h2: 'The appointment that keeps the expensive work away',
      body: [
        'Most dental treatment is optional only if you ignore it long enough. A small cavity caught at a six-month check-up is a twenty-minute filling that you forget about by dinner. The same cavity left for two years can become a root canal, a crown and a bill that runs well into four figures, plus a tooth that is never quite the same again. That difference is what preventive dentistry is really about, and it is the reason we ask you to come in twice a year instead of waiting for something to hurt.',
        'Our hygiene team cleans with ultrasonic scalers and hand instruments, then finishes with a polish that leaves your enamel smooth enough to resist new plaque for weeks. Jordan Ellis, our lead hygienist, has been doing this work for more than a decade and will tell you plainly when a spot needs watching versus treating today. You see the intraoral camera image on the screen in front of you, magnified twenty times, so you are never just taking our word for anything.',
        'Digital X-rays use roughly eighty percent less radiation than the film system many of us grew up with, and they appear on screen in seconds rather than sitting in a developer. We take a full series once every three to five years and bitewings every twelve to eighteen months, adjusting that schedule for your individual risk rather than a fixed rule. If your gums have pockets, we measure and record the depths at every visit, so you can watch the numbers improve instead of hoping they did.',
        'We look after entire households here, from a three-year-old’s first check-up to a grandparent managing a bridge. Children get a slow, friendly introduction, sealants on their new molars and a fluoride varnish that hardens young enamel. Adults get straight talk about grinding, acid erosion and the small daily habits that quietly add up over a decade. Older patients get help with dry mouth, medication side effects and keeping their natural teeth comfortable and working for as long as possible.',
        'None of this works if you dread walking through the door, so comfort is treated as part of the treatment. We run on time, we explain before we act, and we never rush a nervous patient into a decision on the spot. If it has been years since your last visit, you are in good company here, and we will meet you exactly where you are without a single comment about the gap.'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we treat',
      h2: 'Nine kinds of everyday dentistry under one roof',
      intro:
        'General dentistry covers far more than a polish twice a year. These are the treatments we handle in-house, so you are not bounced between three offices for one plan.',
      columns: 3,
      items: [
        {
          icon: 'tooth',
          title: 'Exams & cleanings',
          text: 'A full-mouth exam, gum measurements, scaling, polishing and a written note of anything we are watching. Most adults are in and out in under an hour, with no lecture attached.'
        },
        {
          icon: 'scan',
          title: 'Digital X-rays',
          text: 'Low-dose sensors capture a full set in seconds and load straight onto the screen beside you. We keep the radiation as low as the diagnostic value allows, and we always tell you why a particular image is needed.'
        },
        {
          icon: 'tooth',
          title: 'Tooth-coloured fillings',
          text: 'Composite resin matched to your enamel shade, layered and light-cured for a tight seal that blends in. Most fillings are finished in a single thirty-minute visit, and you can eat on them the same day.'
        },
        {
          icon: 'syringe',
          title: 'Root canal therapy',
          text: 'When decay reaches the nerve, we clean and seal the canal to save the tooth instead of pulling it. Modern rotary instruments make the visit far calmer than its reputation suggests, and most cases finish in one sitting.'
        },
        {
          icon: 'shield-check',
          title: 'Gum disease treatment',
          text: 'Scaling and root planing below the gumline, followed by a maintenance schedule that keeps pockets from deepening again. Early gum disease is reversible with the right routine, and we show you the measurements to prove it.'
        },
        {
          icon: 'shield-plus',
          title: 'Sealants & fluoride',
          text: 'A thin protective coating painted onto the chewing surfaces of molars, plus varnish to harden enamel. We recommend them for children, teens and any adult whose back teeth have deep, hard-to-clean grooves.'
        },
        {
          icon: 'shield',
          title: 'Custom mouthguards',
          text: 'Lab-made guards for sport, and night guards for grinding that protects your enamel from eight hours of nightly wear. Store-bought boil-and-bite guards are bulky and do not come close to a fitted one.'
        },
        {
          icon: 'baby',
          title: 'Kids’ dentistry',
          text: 'First visits from age one, gentle cleanings, growth checks and cavity prevention in a room built to keep children calm. We name every tool and show it to them before it goes anywhere near their mouth.'
        },
        {
          icon: 'heart-pulse',
          title: 'Senior dental care',
          text: 'Help with dry mouth, gum recession, worn restorations and medication interactions that affect oral health. The goal is simple: keep your own teeth working comfortably for as many decades as possible.'
        }
      ]
    },
    {
      type: 'split',
      id: 'comfort',
      eyebrow: 'What to expect',
      h2: 'What a visit actually feels like',
      body: [
        'You park for free right outside the building and take the elevator up to Suite 210, no ramp and no long walk from a distant garage. Nia at the front desk already knows your name and your appointment, so check-in takes about a minute. If you completed your forms online, you will not be handed a clipboard at all.',
        'In the chair you get a neck pillow, a blanket if you are cold and a screen showing your own X-rays at a comfortable angle. We explain what we see before we do anything, and we tell you the cost before we start, never after. If you need a break at any point, you raise your hand and we stop immediately. That is the whole protocol, and it applies to every patient.',
        'The cleaning itself is unhurried. You will feel pressure, cool water and the tick of the ultrasonic scaler, but the sharp scraping that people dread is mostly a thing of the past. Afterwards Dr. Hart or Dr. Reed reviews the findings with you in plain language, and you leave with a printed plan and one clear next step rather than a vague suggestion to think about it.'
      ],
      list: [
        'Free surface parking and step-free access',
        'Neck pillow, blanket and a screen showing your images',
        'Written estimate before any treatment begins',
        'A printed plan you can take home and think about'
      ],
      image: '/img/clinic-interior.webp',
      imageAlt: 'Bright modern dental operatory at TrueNorth Dental in the Kansas City northland',
      reverse: false,
      cta: { label: 'See what your first visit includes', path: '/new-patients' }
    },
    {
      type: 'steps',
      id: 'first-visit',
      eyebrow: 'How it works',
      h2: 'Your first visit, step by step',
      intro:
        'New patients are usually with us for about an hour. Here is exactly how that hour is spent.',
      items: [
        {
          title: 'Paperwork, done early',
          text: 'Complete your health history online before you arrive. It saves about fifteen minutes at the desk and lets us flag allergies or medications in advance, so nothing slows down your appointment.'
        },
        {
          title: 'A conversation first',
          text: 'Before any instrument comes out, we ask what brought you in, what you are worried about and what you actually want from your smile. Your answers shape the rest of the visit far more than the X-rays do.'
        },
        {
          title: 'Imaging and a full exam',
          text: 'Digital X-rays, intraoral photos and a head-and-neck exam that includes an oral cancer screening. Dr. Hart or Dr. Reed then reviews every image with you on the screen, pointing out what is healthy and what needs attention.'
        },
        {
          title: 'Cleaning and gum check',
          text: 'A hygienist cleans your teeth and measures your gum pockets to the millimetre. If you need deeper cleaning than a routine polish, we explain why and exactly what the treatment involves before you book it.'
        },
        {
          title: 'Your written plan',
          text: 'You leave with a printed treatment plan, a cost estimate and honest priorities, urgent items first and cosmetic wants last. Nothing is scheduled until you understand the plan and agree to it.'
        }
      ]
    },
    {
      type: 'table',
      id: 'frequency',
      eyebrow: 'Prevention schedule',
      h2: 'How often you actually need what',
      intro:
        'There is no single schedule that fits every mouth. This is the rhythm we typically recommend for adults in good health, and we adjust it up or down based on what we actually find during your exam.',
      head: ['Visit or service', 'Typical frequency', 'Who needs it more often'],
      rows: [
        ['Exam and cleaning', 'Every 6 months', 'Smokers, diabetics, gum disease history'],
        ['Bitewing X-rays', 'Every 12–18 months', 'Adults with a history of cavities'],
        ['Full X-ray series', 'Every 3–5 years', 'New patients, or after a long gap in care'],
        ['Fluoride varnish', 'Every 6 months', 'Children, teens and adults with root exposure'],
        ['Gum maintenance visit', 'Every 3–4 months', 'Anyone treated for periodontal disease']
      ],
      note: 'Pregnancy, dry mouth and certain medications can all justify a closer schedule. We will tell you when you fall into one of those groups.'
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'New patient special',
      h2: 'What the $99 new patient visit includes',
      intro:
        'One flat price, no surprises, whether or not you have insurance. The regular fee for this visit is $389.',
      columns: 2,
      items: [
        'Comprehensive oral exam',
        'Full set of digital X-rays',
        'Professional cleaning',
        'Oral cancer screening',
        'Gum pocket measurements',
        'Intraoral camera photos',
        'Personalised treatment plan',
        'Written cost estimate',
        'Answers to every question you bring',
        'A clear recommendation on what to do next'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Fifteen years in the northland',
      intro: 'The numbers behind a practice built on repeat visits and referrals.',
      items: [
        { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,400+ reviews' },
        { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' },
        { value: 15, suffix: ' yrs', label: 'Serving Clay and Platte County families' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'General dentistry questions we hear every week',
      intro: 'Straight answers to the things patients ask us most often.',
      items: [
        {
          q: 'How often do I really need a cleaning?',
          a: 'For most healthy adults, every six months is right. If you have gum disease, diabetes, dry mouth or a smoking history, we may recommend every three to four months instead. We set your interval from your gum measurements and bleeding points, not from a blanket rule that ignores what is actually happening in your mouth.'
        },
        {
          q: 'Does the $99 new patient special work with my insurance?',
          a: 'Yes. We bill the visit to your plan and apply the $99 special to anything your insurance does not cover, so you never pay more than that for the visit itself. If your plan pays for exams and X-rays in full, your out-of-pocket cost can be even lower. We check your benefits before you arrive whenever we can.'
        },
        {
          q: 'Is a root canal as painful as people say?',
          a: 'The tooth is fully numb before we begin, and most patients describe the appointment as long rather than painful. The pain people remember is usually the infection beforehand, which is exactly what the root canal is there to end. Mild tenderness for two or three days afterwards is normal and settles with over-the-counter pain relief.'
        },
        {
          q: 'What is the difference between a cleaning and gum treatment?',
          a: 'A routine cleaning works above the gumline on healthy tissue. Scaling and root planing goes below the gumline to remove hardened tartar from the root surfaces, and it is used when pockets have deepened past three millimetres. We only recommend it when your measurements and X-rays show it is genuinely needed, and we explain the difference before you decide.'
        },
        {
          q: 'At what age should my child first see a dentist?',
          a: 'We like to see children by their first birthday, or within six months of the first tooth appearing, whichever comes first. Early visits are short, friendly and mostly about getting used to the chair, the light and the sound of the suction. That familiarity makes later appointments far easier on everyone.'
        },
        {
          q: 'Do you see patients who have not been in for years?',
          a: 'Constantly, and you will not be judged for it. We start with a full exam and X-rays, tell you honestly what needs attention now versus what can wait, and build a plan you can afford to follow at your own pace. Many of our long-term patients started exactly where you are now.'
        },
        {
          q: 'Can I get everything done in one appointment?',
          a: 'Many fillings, sealants and simple extractions can be combined into a single longer visit if you would rather get it over with. Larger plans are usually split into stages so treatment stays comfortable and your budget is not stretched in one month. We will map out the order and the timing with you up front.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Ready for a dentist you do not dread?',
      text: 'Book your $99 new patient visit and get a full exam, X-rays, cleaning and a written plan. Same-day emergency slots are held every weekday.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'How often do I really need a cleaning?',
      a: 'For most healthy adults, every six months is right. If you have gum disease, diabetes, dry mouth or a smoking history, we may recommend every three to four months instead. We set your interval from your gum measurements and bleeding points, not from a blanket rule that ignores what is actually happening in your mouth.'
    },
    {
      q: 'Does the $99 new patient special work with my insurance?',
      a: 'Yes. We bill the visit to your plan and apply the $99 special to anything your insurance does not cover, so you never pay more than that for the visit itself. If your plan pays for exams and X-rays in full, your out-of-pocket cost can be even lower. We check your benefits before you arrive whenever we can.'
    },
    {
      q: 'Is a root canal as painful as people say?',
      a: 'The tooth is fully numb before we begin, and most patients describe the appointment as long rather than painful. The pain people remember is usually the infection beforehand, which is exactly what the root canal is there to end. Mild tenderness for two or three days afterwards is normal and settles with over-the-counter pain relief.'
    },
    {
      q: 'What is the difference between a cleaning and gum treatment?',
      a: 'A routine cleaning works above the gumline on healthy tissue. Scaling and root planing goes below the gumline to remove hardened tartar from the root surfaces, and it is used when pockets have deepened past three millimetres. We only recommend it when your measurements and X-rays show it is genuinely needed, and we explain the difference before you decide.'
    },
    {
      q: 'At what age should my child first see a dentist?',
      a: 'We like to see children by their first birthday, or within six months of the first tooth appearing, whichever comes first. Early visits are short, friendly and mostly about getting used to the chair, the light and the sound of the suction. That familiarity makes later appointments far easier on everyone.'
    },
    {
      q: 'Do you see patients who have not been in for years?',
      a: 'Constantly, and you will not be judged for it. We start with a full exam and X-rays, tell you honestly what needs attention now versus what can wait, and build a plan you can afford to follow at your own pace. Many of our long-term patients started exactly where you are now.'
    },
    {
      q: 'Can I get everything done in one appointment?',
      a: 'Many fillings, sealants and simple extractions can be combined into a single longer visit if you would rather get it over with. Larger plans are usually split into stages so treatment stays comfortable and your budget is not stretched in one month. We will map out the order and the timing with you up front.'
    }
  ],
  related: ['cosmetic-dentistry', 'dental-implants'],
  cta: {
    h2: 'Start with a visit that costs $99, not $389',
    text: 'New patients get a full exam, digital X-rays, a cleaning and a written plan for one flat price. Book online or call and we will find a time that fits.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
