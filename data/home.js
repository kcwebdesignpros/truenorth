'use strict';
/**
 * Home page content.
 * Data only. The template decides markup, spacing and colour, and it pulls
 * the six services, the review carousel, the clinician cards, the insurance
 * carriers and the latest articles straight from the live data files.
 */

module.exports = {
  slug: 'home',
  path: '/',
  metaTitle: 'TrueNorth Dental | Family & Cosmetic Dentist in Kansas City',
  metaDescription:
    'Gentle family, cosmetic and emergency dentistry in the Kansas City northland. Transparent pricing, same-day emergency slots and a $99 new-patient visit.',
  metaKeywords:
    'kansas city dentist, northland dental, family dentist kansas city mo, emergency dentist kansas city, cosmetic dentist gladstone mo, dental implants liberty mo, new patient special kansas city',

  hero: {
    eyebrow: 'Dental care for the Kansas City northland',
    h1: 'A healthier smile, pointed True North',
    intro:
      'A modern family, cosmetic and emergency dental practice on North Oak Trafficway, built for the Kansas City northland. We run on time, explain everything first, and quote your cost before we begin. New patients are usually seen within 48 hours.',
    image: '/img/hero-smile.webp',
    imageAlt:
      'Smiling woman holding a toothbrush against a teal and navy backdrop, a patient of TrueNorth Dental in Kansas City',
    primaryCta: { label: 'Book an appointment', path: '/contact#book' },
    secondaryCta: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' },
    quickCards: [
      {
        icon: 'clock',
        title: 'Working hours',
        text: 'Early mornings through Saturday lunchtime.',
        meta: 'Mon–Thu 8a–6p · Fri 8a–5p · Sat 9a–2p',
        path: '/contact'
      },
      {
        icon: 'calendar-check',
        title: 'Book an appointment',
        text: 'Online in under a minute, any hour.',
        meta: 'New patients seen within 48 hours',
        path: '/contact#book'
      },
      {
        icon: 'alert-triangle',
        title: 'Emergency service',
        text: 'A real person answers, day or night.',
        meta: '24/7 line: (816) 555-0199',
        path: 'tel:+18165550199'
      }
    ]
  },

  blocks: [
    /* ------------------------------------------------------------ trust bar */
    { type: 'trust-bar' },

    /* ------------------------------------------------------------- who we are */
    {
      type: 'split',
      id: 'who-we-are',
      eyebrow: 'Who we are',
      h2: 'A northland practice that runs on relationships, not volume',
      body: [
        'TrueNorth Dental opened in 2011 with one treatment room on North Oak Trafficway and a promise Dr. Amelia Hart made to her very first patient: you will never be rushed, and you will never be lectured. Fifteen years later we have grown to eight operatories and a team of twenty-two, but the schedule still leaves room for a real conversation before anyone picks up an instrument.',
        'That slower pace is deliberate. We are not a fifteen-minute-per-patient office, and we do not treat a check-up as a formality before a sales pitch. Our doctors and hygienists show you what they see on the screen in front of you, tell you plainly what can wait and what should not, and put the cost in writing before any treatment starts. You leave with a plan you understand, not a list of things you were told to worry about.',
        'Most of our patients come from Gladstone, Liberty, Parkville, North Kansas City and the surrounding Clay and Platte County neighbourhoods, and most of them found us through a friend or a neighbour rather than an advertisement. That is exactly the way we think a dental practice should grow, and it is why so many families here have stayed with us from their first check-up onward. Walk in on a Tuesday morning and you will hear the front desk asking about somebody’s grandson, not reading from a script.'
      ],
      list: [
        'Eight operatories and a team of twenty-two',
        'Four clinicians, including an in-house orthodontist and implant dentist',
        'Free surface parking and step-free access on North Oak Trafficway',
        'Open since 2011, with patients who have stayed the whole time'
      ],
      image: '/img/about-dentist-patient.webp',
      imageAlt:
        'Dentist talking with a smiling patient in the dental chair at TrueNorth Dental in Kansas City',
      reverse: false,
      cta: { label: 'More about our practice', path: '/about' }
    },

    /* ----------------------------------------------------------- services grid */
    {
      type: 'services-grid',
      eyebrow: 'What we do',
      h2: 'Six kinds of dentistry, one calm office',
      intro:
        'General and family care, cosmetic work, whitening, implants, orthodontics and same-day emergency treatment, all handled under one roof. You are not sent across town for the specialist, and you keep the same team from your first check-up to your last follow-up.',
      cta: { label: 'See all six services', path: '/services' }
    },

    /* -------------------------------------------------------------- why switch */
    {
      type: 'prose',
      id: 'why-patients-switch',
      eyebrow: 'Why patients switch',
      h2: 'The reasons people leave their old dentist for us',
      body: [
        'People rarely switch dentists because of a single bad filling. They switch because they felt like a number, because the bill did not match the estimate, or because they sat in a waiting room for forty minutes and then got ten minutes with the doctor. We hear the same three stories over and over, and we built this practice specifically to avoid all three. We run on time, we quote before we treat, and we give you the doctor’s full attention while you are in the chair.',
        'The second most common reason is cost anxiety. Many patients put off care for years because they were afraid of what it might cost, and by the time they finally come in, a small problem has quietly become an expensive one. That is why every plan here comes with a written estimate, why we are in-network with most major insurers in the metro, and why we offer financing through CareCredit, Cherry and Sunbit alongside a $29 monthly membership for people without insurance.',
        'The third is fear. If you have avoided the dentist since a rough experience years ago, you are not unusual here, and you will not be treated like a difficult patient. We will book a longer first appointment if you need one, move at your pace, and give you a stop signal you can use at any moment. Dr. Hart holds a Missouri sedation permit, and nitrous oxide is available for patients who want it. Nothing is done without your say-so.',
        'What patients tell us afterwards is almost always the same: the visit was easier than they expected, and nobody made them feel bad about anything. That is the whole point. Dentistry should be a routine part of looking after yourself, not something you brace for twice a year. When the experience is calm and the pricing is honest, people keep their appointments, and keeping appointments is what actually protects your teeth.',
        'We are also a neighbourhood practice in the literal sense. Our lead hygienist grew up in North Kansas City, our founder lives in Parkville, and the practice runs a free dental day for children in Clay County every year. When you call after hours with a broken crown, you are reaching someone who may live a few streets away. That closeness is not a marketing line here; it is simply how a practice that has served the same towns for fifteen years tends to work.'
      ],
      listTitle: 'What you get here that you may not have had before',
      list: [
        'Appointments that start on time, not forty minutes late',
        'A written estimate before any treatment begins',
        'The same clinician seeing you visit after visit',
        'Sedation and nitrous options for anxious patients',
        'Straight answers about what can wait and what cannot'
      ]
    },

    /* ----------------------------------------------------------------- numbers */
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Fifteen years in the Kansas City northland',
      intro: 'The numbers behind a practice built on repeat visits and word of mouth.',
      items: [
        { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,400+ reviews' },
        { value: 15, suffix: ' yrs', label: 'Serving the Kansas City northland' },
        { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' }
      ]
    },

    /* ----------------------------------------------------------- new patient offer */
    {
      type: 'offer',
      eyebrow: 'New patient special',
      h2: 'Your first visit for $99, not $389',
      intro:
        'If you are new to the practice, your first appointment is $99 instead of the regular $389. That covers a comprehensive oral exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a written treatment plan with a cost estimate. It suits anyone who is due for a check-up, has recently moved to the northland, or simply wants a second opinion before committing to a bigger treatment. There is no membership required and no obligation to book anything else.',
      cta: { label: 'Book your $99 visit', path: '/contact#book' }
    },

    /* ------------------------------------------------------------------ journey */
    {
      type: 'steps',
      id: 'patient-journey',
      eyebrow: 'How it works',
      h2: 'From your first phone call to care you can keep up with',
      intro:
        'New patients are usually with us for about an hour, and the whole path from that first call to ongoing care is straightforward. Here is exactly how it goes.',
      items: [
        {
          title: 'Get in touch',
          text: 'Call the office or book online, whichever is easier for you. Nia at the front desk will find a time that fits your week, and most new patients are seen within 48 hours. If you are in pain, call the 24/7 line and we will get you in the same day wherever we possibly can.'
        },
        {
          title: 'Finish your forms early',
          text: 'Complete your health history online before you arrive and save about fifteen minutes at the desk. It also lets us flag allergies, medications and any anxiety you want us to know about, so your appointment starts smoothly rather than with a clipboard and a pen.'
        },
        {
          title: 'Talk with your dentist first',
          text: 'Before any instrument comes out, we ask what brought you in and what you are worried about. Dr. Hart or Dr. Reed then reviews your digital X-rays and intraoral photos with you on the screen, pointing out what looks healthy and what genuinely needs attention.'
        },
        {
          title: 'Cleaning and a written plan',
          text: 'A hygienist cleans your teeth and measures your gum pockets to the millimetre, then you sit down with a printed plan and a clear cost estimate. Urgent items come first and cosmetic wishes last, and nothing is scheduled until you understand it and agree to it.'
        },
        {
          title: 'Stay on track afterwards',
          text: 'We book your next visit before you leave and send reminders that actually reach you. Most patients come back every six months, and our hygienists will adjust that interval if your gums or your health history call for a closer watch. If something changes between visits, you can call or send a message and we will get back to you the same day.'
        }
      ]
    },

    /* ------------------------------------------------------------ why families */
    {
      type: 'cards',
      id: 'why-families',
      eyebrow: 'Why families choose us',
      h2: 'Six things northland families tell us they value most',
      intro:
        'We ask patients what keeps them coming back, and the answers are remarkably consistent. These are the six that come up most often, from the first visit right through to years of routine care.',
      columns: 3,
      items: [
        {
          icon: 'hand-heart',
          title: 'Comfort first',
          text: 'Neck pillows, blankets, numbing gel before injections and a stop signal you can use at any time. Anxious patients get longer appointments, and sedation is available whenever you want it.'
        },
        {
          icon: 'scan',
          title: 'Modern technology',
          text: 'Digital X-rays at roughly a fifth of the radiation of old film, intraoral cameras you can see for yourself, 3D scans for implants and aligners, and no goopy impression trays.'
        },
        {
          icon: 'credit-card',
          title: 'Honest pricing',
          text: 'A written estimate before treatment, in-network billing with most major carriers, and financing that can spread a larger plan across manageable monthly payments. Sofia checks your benefits first and appeals any claim that comes back wrong.'
        },
        {
          icon: 'timer',
          title: 'Same-day emergencies',
          text: 'We hold slots open every weekday for pain, breakage and injuries. Call before noon and you can usually be seen that afternoon, whether you are a patient of ours or not.'
        },
        {
          icon: 'calendar-check',
          title: 'Family scheduling',
          text: 'Book parents and children back to back, with early morning and Saturday morning options. We see kids from their first birthday, keep the visit short and friendly, and never rush a young patient who needs a few extra minutes to settle.'
        },
        {
          icon: 'shield-check',
          title: 'Judgement-free care',
          text: 'If it has been years, nobody here will comment on it. We start where you are, tell you what matters now, and build a plan you can actually follow at your own pace.'
        }
      ]
    },

    /* ------------------------------------------------------------ testimonials */
    {
      type: 'testimonials',
      eyebrow: 'Patient reviews',
      h2: 'Rated 4.9 out of 5 by more than 1,400 neighbours',
      intro:
        'Our reviews come mostly from patients who found us through a friend, and they say the same things we work hardest on: a calm visit, an honest price and a team that remembers your name. Here are a few of them in their own words.',
      cta: { label: 'Read all patient reviews', path: '/reviews' },
      limit: 8
    },

    /* ------------------------------------------------------------ team preview */
    {
      type: 'team-preview',
      eyebrow: 'Meet the team',
      h2: 'The people who will look after your smile',
      intro:
        'Four clinicians, one standard of care. Between them they carry decades of experience, and every one of them will tell you the truth about what you need and what you do not. The same faces look after you visit after visit.',
      cta: { label: 'Meet the whole team', path: '/doctors' },
      limit: 3
    },

    /* ----------------------------------------------------------- insurance strip */
    {
      type: 'insurance-strip',
      h2: 'In-network with most major insurers in the metro',
      cta: { label: 'Insurance & financing', path: '/insurance-financing' }
    },

    /* ------------------------------------------------------------- blog preview */
    {
      type: 'blog-preview',
      eyebrow: 'From the blog',
      h2: 'Practical answers to the questions we hear most',
      intro:
        'Our dentists and hygienists write about the everyday things patients ask us, from how often you really need a cleaning to what to do when a tooth breaks on a Saturday morning. No jargon and no scare tactics, just the advice we would give a neighbour.',
      cta: { label: 'Visit the blog', path: '/blog' },
      limit: 3
    },

    /* ---------------------------------------------------------------------- FAQ */
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions new patients ask us',
      intro: 'Straight answers to the things people most want to know before their first visit.',
      items: [
        {
          q: 'Where are you located, and is parking easy?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, right in the heart of the northland. There is free surface parking directly in front of the building, and step-free access from the lot to our second-floor suite by elevator. We are a short drive from Gladstone, North Kansas City, Liberty, Parkville and Riverside.'
        },
        {
          q: 'Do you accept my insurance?',
          a: 'We are in-network with most major carriers in the metro, including Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. Sofia verifies your benefits before your first visit and walks you through exactly what your plan does and does not cover.'
        },
        {
          q: 'What does the $99 new patient special include?',
          a: 'It includes a comprehensive oral exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan with a written cost estimate. The regular fee for that visit is $389. If you have insurance, we bill your plan first and apply the special to whatever it does not cover.'
        },
        {
          q: 'How quickly can I get an appointment?',
          a: 'Most new patients are seen within 48 hours, and we hold same-day slots open every weekday for emergencies. If you are in pain, call the 24/7 line at (816) 555-0199 and we will do everything we can to see you the same day. Saturday morning appointments are also available by arrangement.'
        },
        {
          q: 'I have not been to a dentist in years. Will I be judged?',
          a: 'Not here, and you will not be the only one. A large share of our long-term patients first arrived after a long gap in care. We start with a full exam and X-rays, tell you honestly what needs attention now versus what can wait, and build a plan you can afford to follow at your own pace.'
        },
        {
          q: 'Do you treat children?',
          a: 'Yes, we look after whole families. We like to see children by their first birthday or within six months of the first tooth appearing, and early visits are short and friendly. We name every tool, show it to them first, and keep the room calm so the experience is easy to repeat in six months.'
        },
        {
          q: 'What should I do in a dental emergency?',
          a: 'Call our 24/7 line at (816) 555-0199 and a real person will answer, day or night, including weekends and holidays. We hold same-day emergency slots every weekday, and most patients who call before noon are seen that day. You do not need to be an existing patient to call us.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes. We offer financing through CareCredit, Cherry and Sunbit, including interest-free promotional periods on approved credit. For patients without insurance, our in-house membership is $29 a month per adult and covers two cleanings, exams and X-rays, plus 15% off everything else.'
        },
        {
          q: 'Can I book online?',
          a: 'You can book online at any hour, and you will get a confirmation within one business day. If you would rather talk it through, call (816) 555-0182 during office hours and Nia or Sofia will find a time that fits your family’s schedule, including early mornings and Saturday mornings.'
        }
      ]
    }
  ],

  faqs: [
    {
      q: 'Where are you located, and is parking easy?',
      a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, right in the heart of the northland. There is free surface parking directly in front of the building, and step-free access from the lot to our second-floor suite by elevator. We are a short drive from Gladstone, North Kansas City, Liberty, Parkville and Riverside.'
    },
    {
      q: 'Do you accept my insurance?',
      a: 'We are in-network with most major carriers in the metro, including Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. Sofia verifies your benefits before your first visit and walks you through exactly what your plan does and does not cover.'
    },
    {
      q: 'What does the $99 new patient special include?',
      a: 'It includes a comprehensive oral exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan with a written cost estimate. The regular fee for that visit is $389. If you have insurance, we bill your plan first and apply the special to whatever it does not cover.'
    },
    {
      q: 'How quickly can I get an appointment?',
      a: 'Most new patients are seen within 48 hours, and we hold same-day slots open every weekday for emergencies. If you are in pain, call the 24/7 line at (816) 555-0199 and we will do everything we can to see you the same day. Saturday morning appointments are also available by arrangement.'
    },
    {
      q: 'I have not been to a dentist in years. Will I be judged?',
      a: 'Not here, and you will not be the only one. A large share of our long-term patients first arrived after a long gap in care. We start with a full exam and X-rays, tell you honestly what needs attention now versus what can wait, and build a plan you can afford to follow at your own pace.'
    },
    {
      q: 'Do you treat children?',
      a: 'Yes, we look after whole families. We like to see children by their first birthday or within six months of the first tooth appearing, and early visits are short and friendly. We name every tool, show it to them first, and keep the room calm so the experience is easy to repeat in six months.'
    },
    {
      q: 'What should I do in a dental emergency?',
      a: 'Call our 24/7 line at (816) 555-0199 and a real person will answer, day or night, including weekends and holidays. We hold same-day emergency slots every weekday, and most patients who call before noon are seen that day. You do not need to be an existing patient to call us.'
    },
    {
      q: 'Do you offer payment plans?',
      a: 'Yes. We offer financing through CareCredit, Cherry and Sunbit, including interest-free promotional periods on approved credit. For patients without insurance, our in-house membership is $29 a month per adult and covers two cleanings, exams and X-rays, plus 15% off everything else.'
    },
    {
      q: 'Can I book online?',
      a: 'You can book online at any hour, and you will get a confirmation within one business day. If you would rather talk it through, call (816) 555-0182 during office hours and Nia or Sofia will find a time that fits your family’s schedule, including early mornings and Saturday mornings.'
    }
  ],

  cta: {
    h2: 'Ready for a dentist you do not have to brace for?',
    text: 'Book your $99 new patient visit and get a full exam, digital X-rays, a cleaning and a written plan. Same-day emergency slots are held every weekday, and our phone is answered around the clock.',
    primary: { label: 'Book online', path: '/contact#book' }
  }
};
