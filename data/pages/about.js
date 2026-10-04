'use strict';
/**
 * About page. Founding story, milestones, philosophy, team, community and
 * the first-visit experience — rendered by views/page.ejs from blocks.
 */

module.exports = {
  slug: 'about',
  path: '/about',
  name: 'About Us',
  metaTitle: 'About TrueNorth Dental | Kansas City Northland Dentists',
  metaDescription:
    'Meet the Kansas City northland team behind TrueNorth Dental, founded in 2011 on North Oak Trafficway and now eight operatories and twenty-two caring people.',
  metaKeywords:
    'kansas city dentist, northland dental, about truenorth dental, dentist north oak trafficway, family dentist kansas city mo, gladstone dentist',
  eyebrow: 'Our story',
  h1: 'Fifteen Years of Dentistry That Points You True North',
  heroIntro:
    'TrueNorth Dental began in 2011 with one chair on North Oak Trafficway. Today we are eight operatories and twenty-two people who still believe a dental visit should never feel rushed.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Bright modern dental operatory at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
    { value: 8, label: 'Operatories under one roof' },
    { value: 22, label: 'Team members on staff' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'AboutPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'our-story',
      eyebrow: 'How it started',
      h2: 'How TrueNorth Dental Started',
      body: [
        'Dr. Amelia Hart opened TrueNorth Dental in 2011 with a single treatment chair, one assistant and a promise she had made to herself during four years in a high-volume group practice. She had watched fifteen-minute appointments turn dentistry into a transaction, where patients were told what to do rather than asked what they wanted. She wanted the opposite: a place where a person could sit down, ask questions and be heard before anyone picked up an instrument.',
        'The first office was small, tucked into a suite on North Oak Trafficway, and it grew the way good neighbourhood practices do — one family telling another. Patients who had come in nervous started bringing their parents, then their children, then their neighbours from Gladstone, Parkville and Liberty. By 2014 there was a second doctor, a second chair and a waiting list of people who had heard the visits here did not feel like a hurry.',
        'What people remembered was not the equipment or the decor. It was that Dr. Hart knew their names, their kids’ names and the fact that they hated the taste of mint polish. That kind of relationship is hard to scale, and we have been careful about how we grow because of it. Every time we add a clinician, we ask whether they will treat people the way the first patient was treated. That standard is the only real job description we hire against.',
        'Fifteen years later, the practice looks very different from that single room, but the founding rule has not changed. Every patient still gets an unhurried conversation before anyone reaches for a tool. That is the whole idea behind the name: care that points you toward what is actually right for your mouth, not toward a monthly sales target.',
        'That philosophy has been tested more than once. When a large dental group approached us about a buyout in 2019, we said no, because the offer came with production quotas that would have changed how treatment was recommended. We have stayed independent on purpose, and it is the reason our dentists can still tell you honestly when the right answer is to wait and watch rather than to drill.'
      ]
    },
    {
      type: 'timeline',
      id: 'history',
      eyebrow: 'Our story',
      h2: 'Milestones Along the Way',
      intro: 'Fifteen years of steady, deliberate growth in the Kansas City northland.',
      items: [
        {
          year: '2011',
          title: 'One chair on North Oak Trafficway',
          text: 'Dr. Amelia Hart opened TrueNorth Dental with a single treatment chair and one assistant. The first patient was a Gladstone teacher who is still with us today.'
        },
        {
          year: '2014',
          title: 'A second doctor joins',
          text: 'A second dentist came on board and two more operatories opened as word spread across the northland. Evening appointments were added so working parents did not have to take a day off.'
        },
        {
          year: '2017',
          title: 'Digital imaging replaces film',
          text: 'We retired film X-rays and installed digital sensors and an intraoral camera. Radiation exposure dropped sharply, and patients could finally see what we saw on a screen beside the chair.'
        },
        {
          year: '2020',
          title: 'Eight operatories, one roof',
          text: 'The practice expanded to eight operatories, which let us bring implants, orthodontics and sedation under the same roof. Patients stopped being referred across town for a single tooth.'
        },
        {
          year: '2023',
          title: 'A team of twenty-two',
          text: 'Our clinical and support team grew to twenty-two people, including a full-time treatment coordinator and a practice manager devoted to insurance. New-patient wait times fell to under a week.'
        },
        {
          year: '2026',
          title: 'Fifteen years, same rule',
          text: 'More than 14,800 patients later, the founding rule has not changed. Every visit still begins with an unhurried conversation before any treatment starts.'
        }
      ]
    },
    {
      type: 'split',
      id: 'philosophy',
      eyebrow: 'What we believe',
      h2: 'Three Rules We Have Never Broken',
      body: [
        'Our first rule is that appointments are unhurried. We schedule enough time to do the work properly and to answer whatever you want to ask, which is why a cleaning here may take a little longer than you are used to. Rushing a patient is exactly how small problems get missed, and we would rather run a few minutes behind than cut your visit short. If you have ever left a dental office feeling like a number, that is the feeling we are built to avoid.',
        'The second rule is written estimates, and the third is judgement-free care. Before any treatment is scheduled you receive a printed estimate showing what your insurance is expected to cover and what you will owe. And if it has been years since your last visit, nobody here will lecture you. Our job is to meet you where you are and build a plan from there, at a pace you are comfortable with.',
        'None of this is complicated, and none of it is expensive to offer. It simply requires a practice willing to run a slightly slower schedule and to be honest about money before treatment rather than after. That is a choice we make every single day, and it is the reason patients bring their parents, their children and their neighbours through our door.'
      ],
      list: [
        'Enough time for every question',
        'A written estimate before treatment',
        'Care without lectures or shame'
      ],
      image: '/img/clinic-interior.webp',
      imageAlt: 'Modern dental operatory at TrueNorth Dental in the Kansas City northland',
      reverse: false,
      cta: { label: 'Meet the team', path: '/doctors' }
    },
    {
      type: 'cards',
      id: 'team',
      eyebrow: 'The people',
      h2: 'The Team Who Will Take Care of You',
      intro: 'Four clinicians and two full-time patient advocates, all under one roof.',
      columns: 3,
      items: [
        {
          icon: 'tooth',
          title: 'Dr. Amelia Hart, DDS',
          text: 'Founder and lead dentist, and still in the room with patients every day. She holds a Missouri sedation permit and has completed more than 3,000 hours of continuing education. She lives in Parkville and coaches a youth soccer team in Gladstone.'
        },
        {
          icon: 'implant',
          title: 'Dr. Marcus Reed, DMD',
          text: 'Cosmetic and implant dentist who places and restores implants start to finish, so you are never bounced between three offices for one tooth. He has placed more than 2,400 implants and plans every case in 3D software before you sit in the chair.'
        },
        {
          icon: 'braces',
          title: 'Dr. Priya Nair, DDS, MS',
          text: 'Orthodontist for children, teens and adults using braces and clear aligners. She will tell you honestly when treatment can safely wait rather than sell you a plan you do not need. She also runs our free school screening programme across the northland.'
        },
        {
          icon: 'floss',
          title: 'Jordan Ellis, RDH',
          text: 'Lead hygienist and the reason many patients say they stopped dreading the dentist. He explains every instrument before it goes anywhere near you and never lectures. He grew up in North Kansas City and leads our whole hygiene team.'
        },
        {
          icon: 'clipboard-check',
          title: 'Sofia Delgado',
          text: 'Practice manager who runs scheduling, insurance verification and billing. If your claim is denied, Sofia is the one who appeals it on your behalf at no charge. She has eight years of dental administration experience and knows every carrier doing business in Missouri.'
        },
        {
          icon: 'file-text',
          title: 'Nia Brooks',
          text: 'Treatment coordinator who turns your plan into plain English and hands you a written estimate before anything is scheduled. She also organises our annual free dental day. As a certified dental assistant, she understands every procedure she explains.'
        }
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'TrueNorth by the Numbers',
      intro: 'A practice built on relationships, measured in the things that matter to patients.',
      items: [
        { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
        { value: 8, label: 'Operatories under one roof' },
        { value: 22, label: 'Team members on staff' },
        { value: 600, suffix: '+', label: 'Children treated at our free dental days' }
      ]
    },
    {
      type: 'split',
      id: 'community',
      eyebrow: 'In the community',
      h2: 'Giving Back Across Clay and Platte County',
      body: [
        'Every year we close the practice for a day and open it free of charge to children who need care. Our annual free dental day has treated more than 600 kids so far, with cleanings, sealants, fillings and a generous supply of stickers. Nia Brooks organises the whole thing, and half the team volunteers their Saturday to make it happen. It is the loudest, happiest day on our calendar.',
        'Dr. Priya Nair also runs our school screening programme, which has checked more than 4,000 local children at no cost. We visit schools across the northland, flag anything that needs a dentist’s eye and send a note home in plain language. For a lot of families, that note is the first time anyone has told them their child needs care, and it is one of the most useful things we do all year.',
        'We do not do any of this for marketing, and we do not put it on a billboard. We do it because a practice that has been trusted by a community for fifteen years owes something back to that community, and because a child who has never been to a dentist is exactly the person we most want to see first.'
      ],
      list: [
        'Annual free dental day for children',
        'School screenings across the northland',
        'Support for local foster families'
      ],
      image: '/img/cta-smile.webp',
      imageAlt: 'Group of happy people laughing outdoors at a TrueNorth Dental community event',
      reverse: true,
      cta: { label: 'Ask about our outreach', path: '/contact' }
    },
    {
      type: 'quote',
      text: 'I put off the dentist for nine years because I was embarrassed about my teeth. Nobody at TrueNorth made me feel bad about it for a single second. They just made a plan and got to work.',
      author: 'Marissa T.',
      role: 'Patient since 2019'
    },
    {
      type: 'prose',
      id: 'technology-first-visit',
      eyebrow: 'Technology and comfort',
      h2: 'Technology, and What Your First Visit Feels Like',
      body: [
        'We invest in technology for one reason: it makes treatment more comfortable and more predictable. Digital sensors mean X-rays appear on a screen beside your chair within seconds, using a fraction of the radiation of the old film packets. An intraoral camera lets you see exactly what your dentist sees instead of taking it on faith, which makes it much easier to understand why a treatment is being recommended.',
        'For bigger cases we plan in 3D software before anyone touches a tooth, which is how implants and orthodontics get mapped out in advance. A digital scanner replaces the gooey impression trays that make people gag. And when a procedure calls for it, we offer nitrous oxide and oral sedation so anxious patients can finally get the care they have been putting off for years. Patients tell us the scanner alone is worth the visit.',
        'Your first visit is deliberately straightforward. You check in, meet your hygienist and take a short tour so nothing about the office feels unfamiliar. We take a full set of digital X-rays, complete a comprehensive exam and an oral cancer screening, and finish with a professional cleaning. Nothing happens without someone explaining it first.',
        'Then you sit down with Nia Brooks, our treatment coordinator, to talk through anything we found. She explains the options in plain language and hands you a written estimate before you leave the building. Most first visits take about an hour, and nothing is ever scheduled without your say-so.',
        'If you have been putting off a visit because of cost, anxiety or simply time, that is precisely the situation this practice was built for. Book a first appointment, bring your questions and let us show you what an unhurried dental visit actually feels like from the inside.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Our Practice',
      intro: 'A few things patients ask before they come in for the first time.',
      items: [
        {
          q: 'Where is TrueNorth Dental located?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, in Kansas City, Missouri 64118. The building sits just off the North Oak exit with free surface parking in front, and an elevator takes you up to our second-floor suite.'
        },
        {
          q: 'How long has the practice been open?',
          a: 'Dr. Amelia Hart opened TrueNorth Dental in 2011. Fifteen years later we have grown to eight operatories and a team of twenty-two while keeping the same founding promise of unhurried, judgement-free care. We are proud to be one of the longest-standing independent practices on North Oak Trafficway.'
        },
        {
          q: 'Do you treat children as well as adults?',
          a: 'Yes. We care for the whole family, from a child’s first visit around age one through adult and senior dentistry. Dr. Priya Nair also provides orthodontics for children, teens and adults.'
        },
        {
          q: 'What makes TrueNorth different from a corporate dental chain?',
          a: 'We are privately owned and locally run, so treatment decisions are made in the room by the dentist who knows you. Nobody here works toward a monthly sales target, and you always receive a written estimate before treatment begins.'
        },
        {
          q: 'Do you offer emergency appointments?',
          a: 'We hold same-day slots for dental emergencies and answer a 24/7 emergency line at (816) 555-0199. Call before noon and we can usually see you the same day for pain, a broken tooth or a lost filling. If you are in pain right now, call and we will find a way to get you seen.'
        },
        {
          q: 'Which areas do you serve?',
          a: 'Patients travel to us from Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside, Smithville, Platte City, Kearney and the wider Clay and Platte County northland.'
        },
        {
          q: 'Can I meet the doctor before committing to treatment?',
          a: 'Absolutely. Your first visit includes time to talk with your dentist about your goals and concerns before any plan is proposed. If you would like to meet a specific clinician, let our team know when you book.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come See the Practice for Yourself',
      text: 'Book a visit and meet the team who will be caring for your family. We are easy to reach from anywhere in the Kansas City northland.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Where is TrueNorth Dental located?',
      a: 'We are at 4820 N Oak Trafficway, Suite 210, in Kansas City, Missouri 64118. The building sits just off the North Oak exit with free surface parking in front, and an elevator takes you up to our second-floor suite.'
    },
    {
      q: 'How long has the practice been open?',
      a: 'Dr. Amelia Hart opened TrueNorth Dental in 2011. Fifteen years later we have grown to eight operatories and a team of twenty-two while keeping the same founding promise of unhurried, judgement-free care. We are proud to be one of the longest-standing independent practices on North Oak Trafficway.'
    },
    {
      q: 'Do you treat children as well as adults?',
      a: 'Yes. We care for the whole family, from a child’s first visit around age one through adult and senior dentistry. Dr. Priya Nair also provides orthodontics for children, teens and adults.'
    },
    {
      q: 'What makes TrueNorth different from a corporate dental chain?',
      a: 'We are privately owned and locally run, so treatment decisions are made in the room by the dentist who knows you. Nobody here works toward a monthly sales target, and you always receive a written estimate before treatment begins.'
    },
    {
      q: 'Do you offer emergency appointments?',
      a: 'We hold same-day slots for dental emergencies and answer a 24/7 emergency line at (816) 555-0199. Call before noon and we can usually see you the same day for pain, a broken tooth or a lost filling. If you are in pain right now, call and we will find a way to get you seen.'
    },
    {
      q: 'Which areas do you serve?',
      a: 'Patients travel to us from Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside, Smithville, Platte City, Kearney and the wider Clay and Platte County northland.'
    },
    {
      q: 'Can I meet the doctor before committing to treatment?',
      a: 'Absolutely. Your first visit includes time to talk with your dentist about your goals and concerns before any plan is proposed. If you would like to meet a specific clinician, let our team know when you book.'
    }
  ],
  cta: {
    h2: 'Come See the Practice for Yourself',
    text: 'Book a visit and meet the team who will be caring for your family. We are easy to reach from anywhere in the Kansas City northland.',
    primary: { label: 'Book online', path: '/contact' }
  }
};
