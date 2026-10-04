'use strict';
/**
 * Services index page. Explains the range of care, why it all lives under one
 * roof, how treatment is planned and sequenced, what is urgent versus what can
 * wait, and the role of the hygienist. The six service cards are rendered from
 * data/services/index.js by the services-grid block.
 */

module.exports = {
  slug: 'services-index',
  path: '/services',
  name: 'Services',
  metaTitle: 'Dental Services in Kansas City Northland | TrueNorth',
  metaDescription:
    'From cleanings and whitening to implants, orthodontics and emergency care, TrueNorth Dental offers all six services under one Kansas City northland roof.',
  metaKeywords:
    'dental services kansas city, northland dentist services, general dentistry kansas city mo, dental implants gladstone, orthodontist liberty mo, emergency dentist northland, teeth whitening parkville',
  eyebrow: 'Treatments & services',
  h1: 'Complete dental care under one roof',
  heroIntro:
    'Six kinds of dentistry in one Kansas City northland practice — prevention, cosmetics, whitening, implants, orthodontics and same-day emergency care, all on a single record.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Bright modern dental operatory at TrueNorth Dental in the Kansas City northland',
  heroStats: [
    { value: 6, label: 'Service areas under one roof' },
    { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
    { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'services-grid',
      eyebrow: 'Treatments & services',
      h2: 'Six services, one team, one record',
      intro:
        'From a routine cleaning to a full-arch implant, everything is planned, delivered and followed up in the same practice. You are not sent across the metro for a specialist only to be sent back again for the next stage.',
      cta: { label: 'See all six services', path: '/services' }
    },
    {
      type: 'prose',
      id: 'one-roof',
      eyebrow: 'One practice, one record',
      h2: 'Why keeping everything under one roof matters',
      body: [
        'Most people do not need six kinds of dentistry at once. They need one or two, chosen well and delivered in the right order. The reason we keep prevention, cosmetic work, whitening, implants, orthodontics and emergency care in a single practice is that those treatments rarely stand alone. Straightening teeth changes how a bite wears. An implant needs a healthy gum line around it. Whitening a smile that already has old crowns in it needs planning, not guesswork.',
        'When all of that lives in one place, you keep one clinical record instead of four. Every X-ray, scan, note and photograph sits in the same file, so the person treating you today can see exactly what happened last year. Nothing gets lost in a referral letter, and nothing gets repeated because two offices never spoke to each other.',
        'It also means one team rather than a relay of strangers. The dentist who places your implant is the one who fits the final crown. The hygienist who treats your gums knows what is being planned around them. Our coordinators can hand you a single written estimate for a whole plan, instead of three separate quotes from three separate buildings.',
        'The practical benefit is time and peace of mind. You are not chasing records, re-explaining your history or driving across Kansas City for a ten-minute specialist visit. You park once, take the elevator up to Suite 210, and the right clinician is already in the building. That is what keeping care under one roof actually buys you.',
        'It also changes what happens when something needs adjusting. If a crown feels high after an implant, the person who planned the position fixes it, usually the same day. There is no gap between the surgeon and the restoring dentist where nobody quite owns the result. One team keeps one plan, and someone always knows your case.'
      ],
      listTitle: 'What staying in one practice saves you',
      list: [
        'One clinical record instead of several',
        'One written estimate for the whole plan',
        'No referral ping-pong between offices',
        'A clinician who already knows your history',
        'Follow-up that happens in the same building'
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'At a glance',
      h2: 'The six services compared',
      intro:
        'Every service starts with the same thorough exam, so you only pay once to find out what you need. Here is how the six compare on the things patients ask about first.',
      head: ['Service', 'Best for', 'Typical visit length', 'Starting cost'],
      rows: [
        [
          'General & Family Dentistry',
          'Exams, cleanings, fillings, root canals and gum care for the whole household',
          '45–60 minutes',
          'From $99'
        ],
        [
          'Cosmetic Dentistry & Smile Design',
          'Veneers, bonding and crowns planned around your face rather than a catalogue',
          '60–90 minutes per visit',
          'From $450'
        ],
        [
          'Professional Teeth Whitening',
          'Coffee, tea and tobacco staining on otherwise healthy teeth',
          '60–75 minutes',
          'From $249'
        ],
        [
          'Dental Implants & Oral Surgery',
          'Replacing one tooth or a full arch, plus extractions and bone grafting',
          '3–6 months, start to finish',
          'From $1,850'
        ],
        [
          'Braces & Clear Aligners',
          'Crowded or uneven teeth in children, teens and adults',
          '6–24 months',
          'From $3,200'
        ],
        [
          'Emergency Dental Care',
          'Toothache, breakage and dental injuries that cannot wait',
          '30–60 minutes',
          'From $99'
        ]
      ],
      note: 'Starting costs reflect our published fees. You always receive a written estimate before treatment begins, and the $99 new patient visit can be applied toward your plan.'
    },
    {
      type: 'steps',
      id: 'planning',
      eyebrow: 'How treatment is planned',
      h2: 'How we plan and sequence your treatment',
      intro:
        'A good plan is mostly about order. We decide what has to happen first, what can wait, and how to spread the cost so nothing arrives as a shock.',
      items: [
        {
          title: 'One thorough exam first',
          text: 'Every plan starts with the same new patient visit: an exam, digital X-rays, an oral cancer screening and a full set of photographs. That single appointment tells us what is healthy, what is urgent and what can simply be watched.'
        },
        {
          title: 'Health before appearance',
          text: 'Anything active, from decay and infection to gum disease, is treated before cosmetic work begins. A beautiful veneer on an unhealthy tooth does not last, so the foundation is always the first stage of any plan we build.'
        },
        {
          title: 'Urgent, soon and later',
          text: 'We sort every finding into three groups and show you which is which. Urgent means it needs treating now. Soon means within a few months. Later means it can be monitored at your routine visits without risk.'
        },
        {
          title: 'Sequence around your life',
          text: 'We map the stages against your budget, your work and any travel, so treatment fits around you rather than the other way round. Larger plans are usually split into stages so no single month is stretched.'
        },
        {
          title: 'One written plan and price',
          text: 'You leave with the options, the order and the costs in writing, urgent work first and cosmetic work last. Nothing is scheduled until you understand the plan and agree to it.'
        }
      ]
    },
    {
      type: 'cards',
      id: 'urgent',
      eyebrow: 'Urgent or can it wait?',
      h2: 'How we decide what cannot wait',
      intro:
        'One of the most useful things we do is tell you the difference between a problem that needs attention today and one that can safely sit for a few months. Here is roughly how we sort it.',
      columns: 3,
      items: [
        {
          icon: 'alert-triangle',
          title: 'Needs care today',
          text: 'Constant or throbbing pain, facial swelling, a knocked-out tooth, bleeding that will not stop, or a fever alongside dental pain. Call the 24/7 line and we will get you seen, usually the same day.'
        },
        {
          icon: 'first-aid',
          title: 'Needs care this week',
          text: 'A chipped or cracked tooth, a lost filling, a loose crown or a broken denture. These are not life-threatening, but they get worse and more expensive the longer they sit, so we fit them in fast.'
        },
        {
          icon: 'clock',
          title: 'Can wait a few weeks',
          text: 'A small cavity that is not yet painful, a worn filling or mild gum inflammation. We will schedule these soon and tell you exactly why they are not emergencies, so you are not rushed into treatment.'
        },
        {
          icon: 'heart-pulse',
          title: 'Can be monitored',
          text: 'Early enamel wear, a borderline gum pocket or a hairline crack with no symptoms. We watch these at your routine visits and only treat them if they change. Honest watching is often the best care.'
        },
        {
          icon: 'sparkles',
          title: 'Elective and cosmetic',
          text: 'Whitening, veneers and smile design are planned last, once health is settled. There is no rush here, and we would rather sequence cosmetic work properly than squeeze it in ahead of the important things.'
        },
        {
          icon: 'calendar-check',
          title: 'When in doubt, call',
          text: 'If you are unsure which group you fall into, ring us. A two-minute conversation with a real person will tell you whether to come in today or book normally. Phone advice is always free.'
        }
      ]
    },
    {
      type: 'split',
      id: 'comprehensive',
      eyebrow: 'What it looks like',
      h2: 'What comprehensive care means, visit by visit',
      body: [
        'Comprehensive care sounds like a marketing phrase until you see what it means on the calendar. Visit one is the full picture: an exam, X-rays, photographs and a written plan. From there, each appointment has one clear job, and you always know what the next one is for before you leave the chair.',
        'Your routine hygiene visits keep prevention on track, with a cleaning, gum measurements and a check of anything we are watching. Treatment visits handle the specific work, whether that is a filling, a crown, a whitening session or a stage of orthodontics. Emergency visits deal with the unexpected and then hand you back to the routine plan.',
        'What ties it together is the record. Every visit adds to the same file, so the hygienist can see what the dentist found and the dentist can see whether your gum numbers improved. Over a year, that adds up to care that responds to what is actually happening in your mouth rather than starting over each time.',
        'You can see the sequence in your own plan as well. A patient with a cracked molar, early gum disease and a wish for whiter teeth does not get all three addressed at once. The gum health is settled, the molar is restored, and only then does whitening make sense, because the final shade has to be matched to work that is already sound. Getting that order right is most of what a good plan actually is.'
      ],
      list: [
        'Visit one: exam, imaging and a written plan',
        'Hygiene visits: cleaning and gum tracking',
        'Treatment visits: one clear job each',
        'Emergency visits: seen fast, then back on plan',
        'Every visit: notes added to one shared record'
      ],
      image: '/img/svc-general-dentistry.webp',
      imageAlt: 'Dentist in gloves carrying out a routine dental exam at TrueNorth Dental in Kansas City',
      reverse: true,
      cta: { label: 'See what your first visit includes', path: '/new-patients' }
    },
    {
      type: 'prose',
      id: 'hygienist',
      eyebrow: 'The centre of your care',
      h2: 'The hygienist, and how to know which service you need',
      body: [
        'If there is one appointment that quietly does the most for your teeth, it is the hygiene visit. Jordan Ellis leads our hygiene team, and his job is not just a polish. He cleans with ultrasonic and hand instruments, measures your gum pockets to the millimetre, and records the numbers so you can watch them improve. He is certified in local anaesthesia and nitrous oxide and trained in non-surgical periodontal therapy, which means early gum disease is usually treated here rather than referred out.',
        'That preventive work is what keeps the other five services from being needed sooner. A small cavity caught at a check-up is a twenty-minute filling. Left two years, it becomes a root canal and a crown. A gum pocket that is measured and managed early rarely becomes the kind of disease that costs teeth. The hygienist is the person who spots both, and often the first to notice a change in your general health reflected in your mouth.',
        'As for which service you need, you almost never have to work that out alone. Start with one thorough exam and the answer is usually obvious. If your main concern is keeping teeth healthy, that is general and family dentistry. If it is appearance, that is cosmetic work or whitening. A missing tooth points to implants. Crowded or uneven teeth point to orthodontics. And pain points straight to the emergency line.',
        'If you would rather skip the guessing, book the $99 new patient visit. It includes the exam, X-rays, a cleaning, an oral cancer screening and a written plan, and it tells you exactly what you need and what you do not. Many patients arrive expecting the worst and leave with a short, manageable list and one clear next step.',
        'The hygiene chair is also where prevention pays off most clearly. Two visits a year, a few minutes of flossing and the fluoride or sealant a child needs can keep someone out of the treatment room entirely. That is not a sales pitch for more appointments. It is the simple arithmetic of dental care: the earlier a problem is measured, the smaller and cheaper it stays, and your hygienist is the person who keeps that arithmetic on your side.'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Comprehensive care, in numbers',
      intro: 'Fifteen years of keeping prevention, cosmetics, implants, orthodontics and emergencies in one place.',
      items: [
        { value: 6, label: 'Service areas under one roof' },
        { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
        { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
      ]
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'The new patient visit',
      h2: 'What every plan starts with',
      intro:
        'Whichever service you end up needing, the first step is the same thorough visit. The regular fee is $389; new patients pay $99.',
      columns: 2,
      items: [
        'Comprehensive oral exam',
        'Full set of digital X-rays',
        'Intraoral photographs',
        'Oral cancer screening',
        'Gum pocket measurements',
        'Professional cleaning',
        'Discussion of your goals and concerns',
        'A written treatment plan',
        'An itemised cost estimate',
        'One clear recommendation on what to do next'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our services',
      intro: 'The things patients ask most when they are deciding where to start.',
      items: [
        {
          q: 'Do I need a referral to see a specialist here?',
          a: 'No. Because our implant dentist, orthodontist, hygienist and general dentists all work in the same building, you move between them on one record without referral letters or a second set of notes. If you arrive with records from another practice, bring them along and we will fold them into your file.'
        },
        {
          q: 'How do you decide which service I need?',
          a: 'One thorough exam answers it in almost every case. We look at your teeth, gums and X-rays, then sort what we find into urgent, soon and can be watched. Your main concern usually points to the service, whether that is prevention, appearance, a missing tooth or a bite that needs straightening, and we will say plainly if you need nothing at all.'
        },
        {
          q: 'What is the difference between urgent and something that can wait?',
          a: 'Urgent means constant pain, swelling, a knocked-out tooth or bleeding that will not stop, and it should be seen today. A chipped tooth, a lost filling or a loose crown should be seen within a week. A small painless cavity or mild gum inflammation can usually wait a few weeks. We tell you which group you are in, and why.'
        },
        {
          q: 'Can you do everything in one place, or will I be referred out?',
          a: 'Almost everything is handled here, including implants, bone grafting, wisdom teeth, orthodontics and sedation. That is deliberate, because it keeps one record and one team on your case. On the rare occasion something needs a specialist we do not have, we will refer you to someone we trust and stay involved in the plan.'
        },
        {
          q: 'What does comprehensive care actually mean?',
          a: 'It means your whole mouth is assessed and planned together rather than one tooth at a time. Visit one is the full picture and a written plan. Hygiene visits keep prevention on track. Treatment visits each have one clear job. And every visit adds to the same record, so your care responds to what is actually happening over time.'
        },
        {
          q: 'Do I need a cleaning before other treatment?',
          a: 'Usually yes, and it is often the first stage. Healthy gums are the foundation for fillings, crowns, implants and cosmetic work, so we settle any gum inflammation first. If your gums are already healthy, a routine clean may simply run alongside the start of your plan.'
        },
        {
          q: 'How much will my treatment cost?',
          a: 'You receive a written estimate before any treatment begins, itemised so you can see exactly what each stage costs. We are in-network with most major insurers, and financing through CareCredit, Cherry and Sunbit can spread larger plans across monthly payments. The $99 new patient visit can be applied toward your plan.'
        },
        {
          q: 'Can I spread treatment over several months?',
          a: 'Yes, and many patients do. Larger plans are sequenced so the urgent work happens first and the cosmetic work follows when it suits you. We map the stages against your budget and your calendar up front, so treatment fits around your life rather than stretching a single month.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Not sure which service you need?',
      text: 'Book the $99 new patient visit and leave with a full exam, X-rays, a cleaning and a written plan that tells you exactly what comes next.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Do I need a referral to see a specialist here?',
      a: 'No. Because our implant dentist, orthodontist, hygienist and general dentists all work in the same building, you move between them on one record without referral letters or a second set of notes. If you arrive with records from another practice, bring them along and we will fold them into your file.'
    },
    {
      q: 'How do you decide which service I need?',
      a: 'One thorough exam answers it in almost every case. We look at your teeth, gums and X-rays, then sort what we find into urgent, soon and can be watched. Your main concern usually points to the service, whether that is prevention, appearance, a missing tooth or a bite that needs straightening, and we will say plainly if you need nothing at all.'
    },
    {
      q: 'What is the difference between urgent and something that can wait?',
      a: 'Urgent means constant pain, swelling, a knocked-out tooth or bleeding that will not stop, and it should be seen today. A chipped tooth, a lost filling or a loose crown should be seen within a week. A small painless cavity or mild gum inflammation can usually wait a few weeks. We tell you which group you are in, and why.'
    },
    {
      q: 'Can you do everything in one place, or will I be referred out?',
      a: 'Almost everything is handled here, including implants, bone grafting, wisdom teeth, orthodontics and sedation. That is deliberate, because it keeps one record and one team on your case. On the rare occasion something needs a specialist we do not have, we will refer you to someone we trust and stay involved in the plan.'
    },
    {
      q: 'What does comprehensive care actually mean?',
      a: 'It means your whole mouth is assessed and planned together rather than one tooth at a time. Visit one is the full picture and a written plan. Hygiene visits keep prevention on track. Treatment visits each have one clear job. And every visit adds to the same record, so your care responds to what is actually happening over time.'
    },
    {
      q: 'Do I need a cleaning before other treatment?',
      a: 'Usually yes, and it is often the first stage. Healthy gums are the foundation for fillings, crowns, implants and cosmetic work, so we settle any gum inflammation first. If your gums are already healthy, a routine clean may simply run alongside the start of your plan.'
    },
    {
      q: 'How much will my treatment cost?',
      a: 'You receive a written estimate before any treatment begins, itemised so you can see exactly what each stage costs. We are in-network with most major insurers, and financing through CareCredit, Cherry and Sunbit can spread larger plans across monthly payments. The $99 new patient visit can be applied toward your plan.'
    },
    {
      q: 'Can I spread treatment over several months?',
      a: 'Yes, and many patients do. Larger plans are sequenced so the urgent work happens first and the cosmetic work follows when it suits you. We map the stages against your budget and your calendar up front, so treatment fits around your life rather than stretching a single month.'
    }
  ],
  cta: {
    h2: 'Start with one visit that answers everything',
    text: 'One exam, one written plan and a team that can deliver every stage in-house. Book online or call and we will find a time that fits.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
