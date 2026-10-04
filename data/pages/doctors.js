'use strict';
/**
 * Meet the Doctors page. Introduces how we hire, what every clinician has in
 * common, how the team divides specialisms and how to choose who to book with.
 * The full team is rendered from data/team.js by the team-grid block.
 */

module.exports = {
  slug: 'doctors',
  path: '/doctors',
  name: 'Meet the Doctors',
  metaTitle: 'Meet Our Kansas City Northland Dentists | TrueNorth',
  metaDescription:
    'Meet the team behind TrueNorth Dental in the Kansas City northland: Dr. Hart, Dr. Reed, Dr. Nair and hygienist Jordan Ellis, with the same dentist each visit.',
  metaKeywords:
    'kansas city dentist, northland dentists, meet the dentist kansas city mo, dr amelia hart dds, implant dentist northland, orthodontist gladstone mo, dental hygienist kansas city',
  eyebrow: 'Our clinical team',
  h1: 'Meet the doctors and clinicians behind TrueNorth',
  heroIntro:
    'Every clinician here was hired against one standard: would we be happy for them to treat the very first patient Dr. Hart ever saw? These are the people who look after your smile.',
  heroImage: '/img/about-dentist-patient.webp',
  heroImageAlt: 'Dentist talking with a smiling patient in the chair at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 6, label: 'Clinicians and coordinators you can ask for by name' },
    { value: 22, label: 'People across the whole practice' },
    { value: 3000, suffix: '+', label: 'Continuing education hours logged by Dr. Hart' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'MedicalWebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'team-grid',
      id: 'team',
      eyebrow: 'The people you will meet',
      h2: 'Four clinicians and two coordinators, one standard of care',
      intro:
        'These are the people who will look after you — the doctors, the hygienist who keeps your gums healthy, and the coordinators who untangle your insurance. Every profile below is someone you can ask for by name when you book.',
      cta: { label: 'Book with a specific clinician', path: '/contact' }
    },
    {
      type: 'prose',
      id: 'how-we-hire',
      eyebrow: 'How we hire',
      h2: 'What every TrueNorth clinician has in common',
      body: [
        'We have grown slowly on purpose. Before anyone joins the team, they spend a day in the practice watching how appointments actually run, and the whole team gets a say. The question is never whether a candidate can fill a tooth. It is whether they will sit down, ask what brought you in, and listen to the answer before they reach for an instrument. Plenty of skilled dentists do not pass that test, and we would rather keep looking than hire someone who treats people like a schedule.',
        'Once someone is here, three habits are non-negotiable. Appointments run long enough to finish a conversation, not just a procedure. Every finding is explained in plain English on a screen you can see, so nothing is hidden behind jargon. And nobody upsells. If the honest answer is that a tooth can be watched for six months rather than treated today, that is what you will hear, even when it earns the practice less.',
        'That means you can book with any of our doctors and expect the same things. A written estimate before treatment begins. A stop signal you can raise at any moment. A plan with the urgent work first and the cosmetic work last. And a clinician who will tell you when the right choice is to do nothing at all. The personalities differ, but the standard does not.',
        'The team divides its work so that complex cases land with the person who does them every day. Dr. Amelia Hart leads anxiety-free and restorative care and holds the practice’s sedation permit. Dr. Marcus Reed handles implants and cosmetic work, from a single tooth to a full arch. Dr. Priya Nair looks after orthodontics for children and adults. Jordan Ellis runs hygiene and periodontal therapy. On the non-clinical side, Sofia Delgado manages insurance and scheduling while Nia Brooks turns your treatment plan into plain language and a workable budget. You still see the same clinician at every visit for a given piece of work. The division simply means the right hands are on the right job.'
      ],
      listTitle: 'What the whole team agrees on',
      list: [
        'No patient is rushed through an appointment',
        'Every cost is written down before treatment',
        'The urgent work is always scheduled first',
        'You can ask for a break at any time',
        'Nobody is judged for how long it has been'
      ]
    },
    {
      type: 'cards',
      id: 'commitments',
      eyebrow: 'Our commitments',
      h2: 'What every TrueNorth clinician commits to',
      intro:
        'These are not slogans on a wall. They are the things we check ourselves against, and the things patients tell us they notice most in the chair.',
      columns: 3,
      items: [
        {
          icon: 'clock',
          title: 'An unhurried appointment',
          text: 'Your visit is scheduled with enough time to talk, examine and explain without watching the clock. If a case needs longer, we book longer rather than squeezing you into a slot that was never going to fit.'
        },
        {
          icon: 'headphones',
          title: 'Plain-English explanations',
          text: 'Every finding is shown to you on screen and described in words that make sense. You will never leave wondering what a diagnosis actually meant for you or what the next step is.'
        },
        {
          icon: 'shield-check',
          title: 'No upselling, ever',
          text: 'We recommend treatment when it is genuinely needed and say so plainly when it can wait. Nobody here works toward a monthly sales target, and you will never be pressured into a decision on the day.'
        },
        {
          icon: 'file-text',
          title: 'A written plan and price',
          text: 'You leave with your options and their costs in writing, urgent items first and cosmetic wants last. Nothing is scheduled until you understand the plan and agree to it.'
        },
        {
          icon: 'hand-heart',
          title: 'Judgement-free care',
          text: 'Whether it has been six months or sixteen years, we start where you are. There are no lectures about flossing, no sighs about the gap in your care and no reason to feel small about your teeth.'
        },
        {
          icon: 'graduation',
          title: 'Continuous training',
          text: 'Every clinician completes far more continuing education than the state requires, and the practice pays for all of it. You benefit from techniques that are genuinely current rather than a decade out of date.'
        }
      ]
    },
    {
      type: 'split',
      id: 'continuity',
      eyebrow: 'Continuity of care',
      h2: 'The same clinician sees you at every visit',
      body: [
        'There is a quiet advantage to seeing the same person each time, and it has nothing to do with convenience. When your clinician already knows that your back molar has been borderline for a year, that you grind at night, or that you had a bad experience with a previous dentist, the conversation starts in a completely different place. You are not re-explaining your mouth from scratch every six months.',
        'We keep that continuity deliberately. If Dr. Hart starts your restorative work, she finishes it. If Jordan measures your gum pockets, he measures them again next time and can tell you whether the numbers moved. Sofia and Nia keep the same notes on your file, so the person answering the phone already knows your plan. That is harder to run than a rotating roster, and it is the reason our schedule is built the way it is.',
        'It matters most on the days something needs adjusting. Because one clinician owns your case from start to finish, a crown that feels high or a filling that needs a tweak is handled by the person who made it, usually the same day. You are not passed to whoever happens to be free.'
      ],
      list: [
        'Your history is known before you sit down',
        'The clinician who starts your work finishes it',
        'Gum measurements tracked by the same hygienist',
        'One file, one plan, one team on the phone'
      ],
      image: '/img/about-dentist-patient.webp',
      imageAlt: 'Dentist and patient talking during a visit at TrueNorth Dental in the Kansas City northland',
      reverse: false,
      cta: { label: 'Book your first visit', path: '/contact' }
    },
    {
      type: 'prose',
      id: 'continuing-education',
      eyebrow: 'Staying current',
      h2: 'Continuing education, and who pays for it',
      body: [
        'Dentistry changes faster than most people realise. Materials improve, techniques are refined and the honest consensus on some treatments shifts over a decade. Missouri requires dentists to complete a set number of continuing education hours each cycle, but we treat that as a floor rather than a target. Every clinician here goes well beyond it, and the practice pays the full cost of courses, travel and materials.',
        'That money is not spent on the latest gadget for its own sake. Dr. Hart has completed more than 3,000 hours of continuing education and holds a Missouri sedation permit, which is what lets us offer sedation for anxious patients and longer surgical visits. Dr. Reed trained at the Dawson Academy and the Misch International Implant Institute and lectures regionally on digital implant planning. Dr. Nair is board-eligible with the American Board of Orthodontics and scans every aligner case digitally.',
        'Hygiene and the front office are included in that budget too. Jordan has advanced training in non-surgical periodontal therapy and is certified in local anaesthesia and nitrous oxide. Sofia keeps current on the insurance and billing rules that change every year, so your claim is not denied for a coding reason nobody caught. Nia trains on treatment presentation so the plan you hear is genuinely in plain language.',
        'You will rarely see this directly, but you feel it in small ways. It is why we can place and restore an implant in-house rather than referring you out, why a root canal is usually finished in a single calmer visit, and why a nervous patient has sedation as a real option rather than a hopeful suggestion. The practice funds it because standing still while the field moves costs patients far more.',
        'There is one more reason we fund it so heavily. Dentistry has a reputation for treatment recommended because it is available rather than because it is needed, and the best defence against that is genuine expertise. When a clinician understands the current evidence, they can tell you confidently when to wait, when to watch and when to act. That confidence is what lets us give you an honest answer rather than a cautious one designed to cover every possibility.'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'The team, in numbers',
      intro: 'A practice built on repeat visits, referrals and clinicians who stay.',
      items: [
        { value: 6, label: 'Clinicians and coordinators you can ask for by name' },
        { value: 22, label: 'People across the whole practice' },
        { value: 3000, suffix: '+', label: 'Continuing education hours logged by Dr. Hart' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
      ]
    },
    {
      type: 'steps',
      id: 'choosing',
      eyebrow: 'Choosing your clinician',
      h2: 'How to choose which doctor to book with',
      intro:
        'You are welcome to book with a specific clinician by name, or to let us match you to the right person. Here is how that decision usually works.',
      items: [
        {
          title: 'Start with what you need today',
          text: 'If you are in pain or have a broken tooth, the emergency line is the fastest route and you will see whoever is available that day. For routine care, think about whether your main concern is prevention, appearance, straightening or replacing a tooth.'
        },
        {
          title: 'Match the job to the right clinician',
          text: 'General check-ups, fillings and gum care sit with Dr. Hart and Jordan Ellis. Implants and cosmetic work sit with Dr. Reed. Braces and aligners sit with Dr. Nair. If you are unsure, our coordinators will point you to the right door in one call.'
        },
        {
          title: 'Tell us about comfort needs',
          text: 'If you are nervous, say so when you book. Dr. Hart leads our anxiety-free and sedation care, and the whole team is trained to move at your pace. A note on your file means the room is ready before you arrive.'
        },
        {
          title: 'Meet them before you commit',
          text: 'Your first visit includes time to talk with your clinician before any treatment is proposed. If you would rather meet a doctor before booking a larger plan, ask and we will arrange a consultation with no obligation.'
        },
        {
          title: 'Stay with the same clinician',
          text: 'Once you have found someone you trust, we keep you with them for the whole course of treatment. Continuity is easier on you and better for your care, so we protect it in the schedule rather than shuffling you around.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'every-visit',
      eyebrow: 'Every visit, every clinician',
      h2: 'What you can count on at any appointment',
      intro: 'Whichever clinician you see, these are the things that happen as standard, not as a special favour.',
      columns: 2,
      items: [
        'A conversation before any treatment',
        'Your images shown and explained on screen',
        'A written estimate before work begins',
        'A stop signal you can raise at any time',
        'Neck pillow and blanket if you want them',
        'Options presented with honest pros and cons',
        'Urgent work scheduled ahead of cosmetic work',
        'Time to ask every question you brought',
        'Notes on your file so nobody starts from scratch',
        'The same clinician for the whole course of care'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our doctors and team',
      intro: 'Straight answers to what patients ask most before they book with a clinician.',
      items: [
        {
          q: 'Can I choose which dentist I see?',
          a: 'Yes. You can ask for any clinician by name when you book, and if you are not sure who you need, our coordinators will match you in one call. Once you have found someone you trust, we keep you with them for the whole course of treatment rather than rotating you through the team.'
        },
        {
          q: 'Do I see the same dentist at every visit?',
          a: 'Wherever possible, yes. If Dr. Hart begins your restorative work, she finishes it, and if Jordan measures your gum pockets he tracks them again next time so the numbers are comparable. Continuity is built into our schedule on purpose, because it makes your care more consistent and the conversations shorter.'
        },
        {
          q: 'What if I am nervous about the dentist?',
          a: 'Tell us when you book and we will note it on your file. Dr. Hart leads our anxiety-free and sedation care, holds a Missouri sedation permit, and the whole team is trained to move at your pace. You get a stop signal you can raise at any moment, and nobody will rush you into a decision on the day.'
        },
        {
          q: 'Do you treat children as well as adults?',
          a: 'Yes. We care for whole families, from a child’s first check-up around age one through adult and senior dentistry. Dr. Nair also provides orthodontics for children, teens and adults, and runs our free school screening programme across the northland. We will happily book a parent and child back to back.'
        },
        {
          q: 'How is continuing education funded?',
          a: 'The practice pays the full cost of every clinician’s continuing education, including courses, travel and materials. Everyone here goes well beyond the hours Missouri requires. That is what allows us to offer sedation, place and restore implants in-house, and keep up with the insurance rules that change each year.'
        },
        {
          q: 'Can I meet a doctor before committing to a big treatment plan?',
          a: 'Absolutely. Your first visit includes time to talk with your clinician about your goals and concerns before any plan is proposed. If you would like to meet a specific doctor before booking a larger piece of work, ask when you call and we will arrange a consultation with no obligation.'
        },
        {
          q: 'What happens if my usual dentist is away?',
          a: 'You will never be left without care. Your notes are on a single shared record, so any of our clinicians can pick up your treatment and know exactly what has been done and what is planned. For anything urgent, the 24/7 line is answered around the clock regardless of who you normally see.'
        },
        {
          q: 'Do the doctors work together on complex cases?',
          a: 'Constantly. An implant case may involve Dr. Reed for the surgery, Dr. Hart for the restorative work and Jordan for gum health, all planned together on one record. Because everyone is under one roof, the person placing your implant and the person fitting your final crown already agree on the plan before you arrive.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Book with the clinician who fits your needs',
      text: 'Tell us what you need and we will match you to the right doctor, or book with someone by name. Either way, your first visit starts with a conversation.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Can I choose which dentist I see?',
      a: 'Yes. You can ask for any clinician by name when you book, and if you are not sure who you need, our coordinators will match you in one call. Once you have found someone you trust, we keep you with them for the whole course of treatment rather than rotating you through the team.'
    },
    {
      q: 'Do I see the same dentist at every visit?',
      a: 'Wherever possible, yes. If Dr. Hart begins your restorative work, she finishes it, and if Jordan measures your gum pockets he tracks them again next time so the numbers are comparable. Continuity is built into our schedule on purpose, because it makes your care more consistent and the conversations shorter.'
    },
    {
      q: 'What if I am nervous about the dentist?',
      a: 'Tell us when you book and we will note it on your file. Dr. Hart leads our anxiety-free and sedation care, holds a Missouri sedation permit, and the whole team is trained to move at your pace. You get a stop signal you can raise at any moment, and nobody will rush you into a decision on the day.'
    },
    {
      q: 'Do you treat children as well as adults?',
      a: 'Yes. We care for whole families, from a child’s first check-up around age one through adult and senior dentistry. Dr. Nair also provides orthodontics for children, teens and adults, and runs our free school screening programme across the northland. We will happily book a parent and child back to back.'
    },
    {
      q: 'How is continuing education funded?',
      a: 'The practice pays the full cost of every clinician’s continuing education, including courses, travel and materials. Everyone here goes well beyond the hours Missouri requires. That is what allows us to offer sedation, place and restore implants in-house, and keep up with the insurance rules that change each year.'
    },
    {
      q: 'Can I meet a doctor before committing to a big treatment plan?',
      a: 'Absolutely. Your first visit includes time to talk with your clinician about your goals and concerns before any plan is proposed. If you would like to meet a specific doctor before booking a larger piece of work, ask when you call and we will arrange a consultation with no obligation.'
    },
    {
      q: 'What happens if my usual dentist is away?',
      a: 'You will never be left without care. Your notes are on a single shared record, so any of our clinicians can pick up your treatment and know exactly what has been done and what is planned. For anything urgent, the 24/7 line is answered around the clock regardless of who you normally see.'
    },
    {
      q: 'Do the doctors work together on complex cases?',
      a: 'Constantly. An implant case may involve Dr. Reed for the surgery, Dr. Hart for the restorative work and Jordan for gum health, all planned together on one record. Because everyone is under one roof, the person placing your implant and the person fitting your final crown already agree on the plan before you arrive.'
    }
  ],
  cta: {
    h2: 'Meet the team in person',
    text: 'Book a first visit and spend the time with the clinician who will look after you. We are easy to reach from anywhere in the Kansas City northland.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
