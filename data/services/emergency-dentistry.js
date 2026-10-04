'use strict';
/**
 * Service detail page — Emergency Dental Care.
 * Data only. No markup, no CSS classes. Rendered by generic block templates.
 */

module.exports = {
  slug: 'emergency-dentistry',
  order: 6,
  name: 'Emergency Dental Care',
  shortName: 'Emergency Dentistry',
  icon: 'first-aid',
  image: '/img/svc-emergency-dentistry.webp',
  imageAlt: 'Dentist comforting a patient with jaw pain at TrueNorth Dental in Kansas City',
  tagline: 'Same-day relief for pain, breakage and dental injuries.',
  metaTitle: 'Emergency Dentist Kansas City | TrueNorth 24/7',
  metaDescription:
    'Same-day emergency dental care in the Kansas City northland for toothache, knocked-out teeth and swelling. Our 24/7 line is (816) 555-0199. Call us now.',
  metaKeywords:
    'emergency dentist kansas city, 24 hour dentist northland, toothache relief, knocked out tooth, abscess treatment, same day dental appointment gladstone mo',
  eyebrow: 'Care when it cannot wait',
  heroIntro:
    'Tooth pain, a broken crown or a knocked-out tooth cannot wait until Monday. Call our 24/7 line and we will get you seen, usually the same day.',
  priceFrom: 'From $99',
  priceValue: 99,
  duration: '30–60 minutes',
  highlights: [
    'Same-Day Appointments',
    'Severe Toothache',
    'Knocked-Out Tooth',
    'Chipped & Cracked Teeth',
    'Abscess & Swelling',
    '24/7 Emergency Line'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'when-to-call',
      eyebrow: 'When to call',
      h2: 'The dental problems that should not wait',
      body: [
        'Some dental problems announce themselves loudly. A throbbing toothache that wakes you at two in the morning, a tooth knocked out on the soccer field, a cheek that swells up over an afternoon. Others are quieter but still urgent, like a filling that falls out on a Friday or a crown that comes loose while you eat. In all of these cases, hours matter, and getting seen early is usually simpler and cheaper than waiting.',
        'The most common call we take is a severe toothache. Pain that is constant, that wakes you from sleep or that lingers after something hot or cold is often a sign the nerve is inflamed or infected. An infection inside a tooth will not clear up on its own, no matter how many painkillers you take. It may settle for a day or two, but it comes back worse, and it can spread into the jaw and face.',
        'Dental injuries need a different kind of speed. A tooth that is knocked out completely can sometimes be saved if it is handled correctly and re-implanted within about an hour. A badly chipped or cracked tooth exposes the nerve to air and bacteria, which gets more painful by the hour. A tooth that has been pushed out of line after a fall needs repositioning quickly so it does not set in the wrong place.',
        'Bleeding that will not stop after an extraction, a broken denture that makes eating impossible, and swelling around an infected tooth all deserve a call rather than a wait. Our emergency line at (816) 555-0199 is answered around the clock, including nights, weekends and holidays. You do not have to be an existing patient, and we will not lecture you about how long it has been.',
        'If you are reading this at midnight with a hand on your jaw, the most useful thing you can do is call rather than wait. Dental pain rarely improves on its own, and the infection behind it can spread while you sleep. Our line is answered by a real person at any hour, and they will tell you honestly whether it can wait until morning or should be seen sooner. That conversation costs nothing and often saves a night of misery.'
      ],
      listTitle: 'Call us right away if you have',
      list: [
        'Constant or throbbing tooth pain',
        'A tooth that has been knocked out or loosened',
        'Swelling in your face, jaw or under your eye',
        'A fever alongside dental pain',
        'Bleeding that will not stop after an extraction'
      ]
    },
    {
      type: 'cards',
      id: 'emergencies',
      eyebrow: 'What we treat',
      h2: 'Dental emergencies we see every week',
      intro:
        'Most emergencies fall into a handful of categories, and we keep same-day slots open for exactly these. Here is what each one involves and what we can usually do about it.',
      columns: 3,
      items: [
        {
          icon: 'zap',
          title: 'Severe Toothache',
          text: 'Constant pain usually means an inflamed or infected nerve. We find the source with an X-ray and either start a root canal or remove the tooth the same visit. You leave with the pain controlled and a clear plan, not another prescription and a wait-and-see.'
        },
        {
          icon: 'tooth',
          title: 'Knocked-Out Tooth',
          text: 'A permanent tooth that is handled correctly and re-implanted within about an hour often survives. Call us the moment it happens, keep the tooth moist in milk, and come straight in. We splint it in place and monitor it over the following weeks.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Chipped or Cracked Tooth',
          text: 'A small chip can often be smoothed or bonded in one visit. A crack that reaches the nerve needs a crown or root canal, and sometimes both. The sooner we see it, the more likely the tooth can be saved without more involved treatment.'
        },
        {
          icon: 'shield-plus',
          title: 'Lost Filling or Crown',
          text: 'A lost filling leaves the tooth sensitive and open to decay. We can usually place a temporary or permanent restoration the same day. If your crown came off cleanly, bring it with you and we will often be able to re-cement it.'
        },
        {
          icon: 'alert-triangle',
          title: 'Abscess & Swelling',
          text: 'An abscess is a pocket of infection that can spread into the jaw and neck if it is ignored. We drain it, start antibiotics where needed, and treat the tooth itself. Facial swelling with trouble swallowing or breathing is a medical emergency, so call us and seek urgent care.'
        },
        {
          icon: 'first-aid',
          title: 'Broken Dentures',
          text: 'A cracked or snapped denture can usually be repaired, and a broken clasp or tooth replaced. Bring the pieces with you, even the small ones. If you cannot eat or speak comfortably, we will get you seen the same day and talk through a temporary fix.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'first-30',
      eyebrow: 'Before you arrive',
      h2: 'What to do in the first 30 minutes',
      intro:
        'What you do at home in the first half hour often decides how well we can fix things. These steps are simple, and they buy your tooth the best possible chance.',
      items: [
        {
          title: 'Stay calm and take stock',
          text: 'Check whether the problem is pain, bleeding, a broken tooth or swelling, and how long it has been going on. That tells us how urgent it is when you call. If there is heavy bleeding, swelling around the throat, or trouble breathing, treat it as a medical emergency first.'
        },
        {
          title: 'Control any bleeding',
          text: 'Bite firmly on clean gauze or a folded clean cloth for a full 20 minutes without checking. Do not rinse, spit or use a straw, because suction pulls the clot away. Sit upright rather than lying flat, and stay calm while the pressure does its work.'
        },
        {
          title: 'Save the tooth or fragments',
          text: 'For a knocked-out tooth, pick it up by the crown, not the root, and rinse it gently with milk or saline. Keep it in milk or inside your cheek if you can do so safely. For a chipped tooth, save any fragments in a little milk and bring them with you.'
        },
        {
          title: 'Manage pain and swelling',
          text: 'Take an anti-inflammatory such as ibuprofen if you can tolerate it and have no reason not to. Apply a cold pack to the outside of your face for 20 minutes at a time to limit swelling. Never place aspirin directly on the gum, because it burns the tissue.'
        },
        {
          title: 'Keep the area clean',
          text: 'Rinse gently with warm salt water if the mouth is not actively bleeding, and keep food away from the damaged tooth. Cover a sharp edge with dental wax or sugar-free gum so it cannot cut your tongue or cheek. Do not poke at the tooth with anything, including your tongue.'
        },
        {
          title: 'Call the 24/7 line',
          text: 'Ring (816) 555-0199 and describe what happened. We will tell you what to do next and, in most cases, book you into a same-day slot. If you call before noon on a weekday, you can usually be seen that afternoon.'
        }
      ]
    },
    {
      type: 'split',
      id: 'same-day',
      eyebrow: 'Getting you in fast',
      h2: 'We hold slots open every day for emergencies',
      body: [
        'A practice that is fully booked is no use to you when a tooth breaks on a Saturday morning. We deliberately keep same-day emergency slots open on every weekday and offer Saturday morning appointments by arrangement. That means when you call before noon, there is almost always room to be seen that day rather than being told to try again next week.',
        'When you arrive, the first job is to get you out of pain and stop the problem getting worse. We take a focused X-ray, make a diagnosis and give you a written estimate before any treatment begins. If the fix can be completed that visit, we do it. If it needs a follow-up, you leave with the pain managed and an appointment already booked. Sofia can also check your insurance while you are still in the chair.'
      ],
      list: [
        'Same-day slots held every weekday',
        'Saturday morning appointments by arrangement',
        'New patients welcome, no check-up required first',
        'A written estimate before treatment starts',
        'Insurance verified while you wait',
        'A clear follow-up plan before you leave'
      ],
      image: '/img/svc-emergency-dentistry.webp',
      imageAlt: 'Dentist helping a patient with an urgent toothache at TrueNorth Dental',
      reverse: false,
      cta: { label: 'Call (816) 555-0199', path: 'tel:+18165550199' }
    },
    {
      type: 'table',
      id: 'do-dont',
      eyebrow: 'Quick reference',
      h2: 'What to do, and what to avoid',
      intro:
        'Small decisions at home make a real difference. This is the advice we give over the phone, laid out so you can check it in a hurry.',
      head: ['Situation', 'Do this', 'Avoid this'],
      rows: [
        ['Knocked-out tooth', 'Hold it by the crown, keep it in milk, and get here within the hour', 'Scrubbing the root or letting it dry out'],
        ['Severe toothache', 'Rinse with warm salt water and take an anti-inflammatory', 'Putting aspirin directly on the gum'],
        ['Chipped or cracked tooth', 'Save the fragments and cover a sharp edge with dental wax', 'Chewing on that side'],
        ['Lost filling or crown', 'Keep the crown and use dental cement or clove oil on the tooth', 'Using super glue or household adhesives'],
        ['Abscess or facial swelling', 'Call us at once and apply a cold compress outside the face', 'Waiting it out, because swelling can spread quickly'],
        ['Bleeding after extraction', 'Bite firmly on clean gauze for 20 minutes and sit upright', 'Rinsing, spitting or using a straw']
      ],
      note: 'If you have facial swelling that is spreading, trouble swallowing or breathing, or a fever with a dental infection, treat it as urgent and call us or seek emergency medical care.'
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Emergency care by the numbers',
      intro: 'When something goes wrong, the details are what matter most.',
      items: [
        { value: 24, suffix: '/7', label: 'Emergency line answered by a real person' },
        { value: 96, suffix: '%', label: 'Of emergency patients seen the same day' },
        { value: 99, prefix: '$', label: 'Focused emergency exam and X-rays' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Rating from 1,400+ reviews' }
      ]
    },
    {
      type: 'checklist',
      id: 'bring',
      eyebrow: 'Before you come in',
      h2: 'How to make the visit easier',
      intro:
        'A few small things help us diagnose faster and treat more comfortably. None of them are essential, so do not delay getting here for any of them.',
      columns: 2,
      items: [
        'Bring any piece of tooth, crown or denture you have saved',
        'Note when the pain started and what makes it worse',
        'List any medications you take, especially blood thinners',
        'Bring your insurance card and photo ID',
        'Eat something light unless you are told not to',
        'Arrange a lift if you think you may want sedation',
        'Have someone to call if you need help getting home',
        'Write down your questions so you do not forget them'
      ]
    },
    {
      type: 'prose',
      id: 'after',
      eyebrow: 'After the emergency',
      h2: 'Getting you out of pain, then getting you well',
      body: [
        'An emergency visit has one job first: stop the pain and stop the problem spreading. That might mean a temporary filling, a drainage of infection, a re-cemented crown or the first stage of a root canal. It is not always the complete fix, and we will be honest about that. What you should always leave with is comfort, a diagnosis and a clear idea of what comes next.',
        'Once the urgent part is handled, we plan the real repair at a calmer appointment. A cracked tooth may need a crown. An infected tooth may need a root canal finished or an extraction. A knocked-out tooth needs monitoring for weeks to check the nerve. None of this is decided in a panic while you are in pain, and you will have a written estimate before anything goes ahead.',
        'Cost is often the worry that keeps people from calling at all, and that is understandable. A focused emergency exam starts at $99, and we give you an estimate before treatment begins rather than after. We are in-network with most major insurers in the metro, and financing through CareCredit, Cherry and Sunbit can spread a larger repair across monthly payments. Please do not put off a call over cost, because waiting usually makes the bill bigger.',
        'Emergencies do not only happen to adults. Children chip teeth on playgrounds, take a football to the mouth, or lose a baby tooth early and need it checked. We are used to treating anxious children at short notice and we keep the visit calm, quick and explained in advance. If your child is in pain, call the same line and we will fit them in, usually the same day, and talk you through what to do until you arrive.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Emergency dental questions',
      intro: 'What patients ask us most when something goes wrong, answered without the runaround.',
      items: [
        {
          q: 'Do you really answer the phone 24/7?',
          a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock, including nights, weekends and holidays. A member of the clinical team will talk you through what to do at home and, if needed, arrange to meet you at the office. You do not have to be an existing patient to call it. The line is staffed by our own team, not an answering service.'
        },
        {
          q: 'How quickly can I be seen?',
          a: 'We hold same-day emergency slots every weekday and offer Saturday morning appointments by arrangement. Most patients who call before noon are seen that day. If you call after hours, we will usually schedule you for the first opening the next morning and tell you how to stay comfortable overnight. We will also explain what to avoid in the meantime so nothing gets worse before we see you.'
        },
        {
          q: 'What does an emergency visit cost?',
          a: 'A focused emergency exam starts at $99 and covers the assessment and X-rays. If you need a filling, extraction or root canal, we give you a written estimate before starting, and we can often begin treatment the same visit. Insurance and financing through CareCredit, Cherry and Sunbit apply as normal. Phone advice is free, whether or not you end up coming in.'
        },
        {
          q: 'What should I do if a tooth is knocked out?',
          a: 'Act within the hour. Pick the tooth up by the crown, not the root, rinse it gently with milk or saline, and either place it back in the socket or keep it in milk or inside your cheek. Do not scrub it or let it dry out. Call us immediately and come straight in, because the first 60 minutes matter most. If you cannot get milk, keeping the tooth inside your cheek is the next best option.'
        },
        {
          q: 'Can a chipped tooth wait until my normal appointment?',
          a: 'If there is no pain, no bleeding and no exposed nerve, it can usually wait a day or two. Cover any sharp edge with dental wax or sugar-free gum so it does not cut your tongue. If it hurts, bleeds or feels sensitive to air, call us and come in sooner rather than later. A tooth that reacts to hot and cold is usually telling you the nerve is involved.'
        },
        {
          q: 'I have swelling in my face. Is that an emergency?',
          a: 'Yes, treat facial swelling as urgent. A dental infection can spread quickly through the face and neck, and that becomes a medical emergency. Call us right away, and if you have trouble swallowing or breathing, or a high fever, go to the nearest emergency room. Do not wait to see whether it settles. Swelling that reaches your eye or throat can move faster than most people expect.'
        },
        {
          q: 'Do you treat emergencies for new patients?',
          a: 'Absolutely. You do not need to be an existing patient, and we will not turn you away because you have not had a check-up in years. We deal with the immediate problem first, get you out of pain, and then talk about the rest at a calmer visit when you are ready. Many of our long-term patients first came to us as an emergency, and simply stayed.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Do you really answer the phone 24/7?',
      a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock, including nights, weekends and holidays. A member of the clinical team will talk you through what to do at home and, if needed, arrange to meet you at the office. You do not have to be an existing patient to call it. The line is staffed by our own team, not an answering service.'
    },
    {
      q: 'How quickly can I be seen?',
      a: 'We hold same-day emergency slots every weekday and offer Saturday morning appointments by arrangement. Most patients who call before noon are seen that day. If you call after hours, we will usually schedule you for the first opening the next morning and tell you how to stay comfortable overnight. We will also explain what to avoid in the meantime so nothing gets worse before we see you.'
    },
    {
      q: 'What does an emergency visit cost?',
      a: 'A focused emergency exam starts at $99 and covers the assessment and X-rays. If you need a filling, extraction or root canal, we give you a written estimate before starting, and we can often begin treatment the same visit. Insurance and financing through CareCredit, Cherry and Sunbit apply as normal. Phone advice is free, whether or not you end up coming in.'
    },
    {
      q: 'What should I do if a tooth is knocked out?',
      a: 'Act within the hour. Pick the tooth up by the crown, not the root, rinse it gently with milk or saline, and either place it back in the socket or keep it in milk or inside your cheek. Do not scrub it or let it dry out. Call us immediately and come straight in, because the first 60 minutes matter most. If you cannot get milk, keeping the tooth inside your cheek is the next best option.'
    },
    {
      q: 'Can a chipped tooth wait until my normal appointment?',
      a: 'If there is no pain, no bleeding and no exposed nerve, it can usually wait a day or two. Cover any sharp edge with dental wax or sugar-free gum so it does not cut your tongue. If it hurts, bleeds or feels sensitive to air, call us and come in sooner rather than later. A tooth that reacts to hot and cold is usually telling you the nerve is involved.'
    },
    {
      q: 'I have swelling in my face. Is that an emergency?',
      a: 'Yes, treat facial swelling as urgent. A dental infection can spread quickly through the face and neck, and that becomes a medical emergency. Call us right away, and if you have trouble swallowing or breathing, or a high fever, go to the nearest emergency room. Do not wait to see whether it settles. Swelling that reaches your eye or throat can move faster than most people expect.'
    },
    {
      q: 'Do you treat emergencies for new patients?',
      a: 'Absolutely. You do not need to be an existing patient, and we will not turn you away because you have not had a check-up in years. We deal with the immediate problem first, get you out of pain, and then talk about the rest at a calmer visit when you are ready. Many of our long-term patients first came to us as an emergency, and simply stayed.'
    }
  ],
  related: ['general-dentistry', 'dental-implants', 'cosmetic-dentistry'],
  cta: {
    h2: 'In pain right now? Call us.',
    text: 'Our emergency line is answered around the clock. If you can call before noon on a weekday, you can usually be seen the same day.',
    primary: { label: 'Call (816) 555-0199', path: 'tel:+18165550199' },
    secondary: { label: 'Book online', path: '/contact' }
  }
};
