'use strict';

module.exports = {
  slug: 'careers',
  path: '/careers',
  name: 'Careers',
  metaTitle: 'Dental Careers in Kansas City | TrueNorth Dental',
  metaDescription:
    'Join a Kansas City northland dental team of twenty-two with four-day clinical weeks, paid continuing education and a no-burnout schedule. See our open roles.',
  metaKeywords:
    'dental jobs kansas city, dental hygienist jobs northland, dental assistant careers, associate dentist kansas city, dental careers missouri',
  eyebrow: 'Careers',
  h1: 'Build Your Career at TrueNorth',
  heroIntro:
    'We are a team of twenty-two in the Kansas City northland who believe you can do excellent dentistry without burning out. If that sounds like the career you want, keep reading.',
  heroImage: '/img/about-dentist-patient.webp',
  heroImageAlt: 'Dentist and dental assistant working together with a smiling patient at TrueNorth Dental',
  heroStats: [
    { value: 22, label: 'Team members across eight operatories' },
    { value: 4, suffix: '-day', label: 'Clinical week for most roles' },
    { value: 100, suffix: '%', label: 'Of continuing education paid' },
    { value: 15, suffix: ' yrs', label: 'Serving the northland since 2011' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'working-here',
      eyebrow: 'Life here',
      h2: 'What it is actually like to work here',
      body: [
        'We schedule deliberately. Most clinical roles work a four-day week, and we keep enough time in every appointment that you are not sprinting between rooms or cutting conversations short. That is not a perk we added later. It is the founding decision that made everything else possible, and it is the reason people who join us tend to stay.',
        'Continuing education is paid, not tolerated. We cover the cost of courses, the day out of the practice to attend them, and your licensure and association dues. Our hygienists and assistants are encouraged to add certifications such as local anaesthesia, nitrous oxide and expanded functions, and we build the schedule around the training rather than asking you to do it on your own time.',
        'The pace is busy without being frantic. Eight operatories, a full hygiene team and a treatment coordinator who handles the financial conversations mean clinicians stay focused on care rather than paperwork. You get the variety of a growing practice and the stability of one that has been on North Oak Trafficway since 2011.',
        'We also invest in the tools you work with. Digital scanning, 3D imaging, electric handpieces and a Class B sterilisation room are the standard here, not upgrades we are saving up for. Working with good equipment is not a luxury. It shortens appointments, protects your hands and back, and lets you do the kind of dentistry you trained for.',
        'We are honest about what this job asks. It asks for genuine care, clear communication and a willingness to keep learning. In return it offers a schedule that lets you have a life, colleagues who help without being asked, and a practice that treats staff the way it treats patients.'
      ]
    },
    {
      type: 'cards',
      id: 'benefits',
      eyebrow: 'Benefits',
      h2: 'What we offer',
      intro:
        'Full-time team members receive the following. Part-time roles are prorated where it makes sense, and we are glad to talk through the details.',
      columns: 3,
      items: [
        {
          icon: 'heart-pulse',
          title: 'Health insurance',
          text: 'Medical coverage with a choice of two plans, and the practice covers a meaningful share of the premium for you and your family. Coverage starts on the first of the month after sixty days.'
        },
        {
          icon: 'smile',
          title: 'Dental and vision',
          text: 'Free preventive dental care for you, plus generous discounts for immediate family, and a vision plan with an annual frame and lens allowance. Your teeth are our business, so we look after them.'
        },
        {
          icon: 'wallet',
          title: '401k with match',
          text: 'We match your contributions dollar for dollar up to four percent of pay, with immediate vesting. A retirement plan you do not have to stay a decade to keep is one of the simplest ways to show respect for your future.'
        },
        {
          icon: 'calendar-check',
          title: 'Paid time off',
          text: 'Three weeks of PTO in your first year, growing with tenure, plus paid holidays and a paid birthday off. We plan coverage carefully so time off is genuinely restful rather than a scramble.'
        },
        {
          icon: 'gift',
          title: 'Uniform allowance',
          text: 'An annual allowance toward scrubs, shoes and outerwear, plus embroidered jackets for the whole team. You will never be asked to buy your own clinical wear out of pocket.'
        },
        {
          icon: 'graduation',
          title: 'CE stipend',
          text: 'A yearly stipend for courses, conferences and certifications on top of the days we already give you to attend them. Bring us a course you want and we will almost always find a way to say yes.'
        },
        {
          icon: 'certificate',
          title: 'Licensure reimbursement',
          text: 'We pay your state licence renewal, CPR certification and professional association dues. Keeping your credentials current is a cost of doing business, and it should not fall on you.'
        },
        {
          icon: 'users',
          title: 'Mentorship programme',
          text: 'Every new hygienist and assistant is paired with a senior team member for their first six months, with scheduled check-ins and a standing invitation to ask anything. Nobody is expected to figure it out alone.'
        }
      ]
    },
    {
      type: 'split',
      id: 'culture',
      eyebrow: 'Our culture',
      h2: 'Judgement-free applies to the team too',
      body: [
        'We say we are judgement-free with patients, and the same rule covers staff. Nobody here is embarrassed for asking a question, admitting a mistake or saying they are having a hard day. A practice where people feel safe to speak up is a safer practice for patients, full stop.',
        'Once a month the whole team sits down together. We read our negative reviews out loud, one by one, and work out what we could have done differently. It is uncomfortable for about ten minutes and useful for the other fifty. Every process change we have made in the last three years came out of that meeting.',
        'That habit shapes how we treat each other, too. When a schedule runs over or a case turns complicated, the question is what the system got wrong, not who is to blame. New team members notice it within a week, and it is usually the first thing they mention when we ask what surprised them about working here.'
      ],
      list: [
        'Monthly all-team meeting, no exceptions',
        'Negative reviews read aloud and solved together',
        'Six-month mentorship for new hygienists and assistants',
        'Open-door access to Sofia and Dr. Hart',
        'Mistakes treated as problems to fix, not people to blame',
        'Birthdays and milestones genuinely celebrated'
      ],
      image: '/img/clinic-interior.webp',
      imageAlt: 'Dental team meeting in a bright modern practice',
      reverse: false,
      cta: { label: 'See our open roles', path: '/careers#open-roles' }
    },
    {
      type: 'quote',
      text: 'I came from a practice where lunch was a rumour. Here I get a real break, I finish on time, and nobody makes me feel guilty for having a life outside work. That is the whole reason I am still here four years later.',
      author: 'Megan R.',
      role: 'Registered Dental Hygienist, with TrueNorth since 2022'
    },
    {
      type: 'prose',
      id: 'roles-detail',
      eyebrow: 'The roles',
      h2: 'A closer look at each opening',
      body: [
        'Associate Dentist. This role suits a dentist who wants a full schedule of general and restorative work without the pressure to upsell. You will have a dedicated assistant, thirty-minute hygiene checks, and a mentor in Dr. Hart who has built a practice around unhurried care. It is ideal for someone three to ten years out of school who wants to settle into a community rather than chase volume. Implant and cosmetic cases are available if you want them, and never pushed on you if you do not.',
        'Registered Dental Hygienist. Our hygienists run sixty-minute appointments, use intraoral scanning daily and are certified to provide local anaesthesia and nitrous oxide. The role suits someone who wants to actually teach patients rather than rush through a prophy before the doctor arrives. New graduates are welcome, and the six-month mentorship is built into your first year rather than bolted on afterward. You will have a say in how the hygiene department runs.',
        'Dental Assistant, EFDA preferred. You will work chair-side across general, cosmetic and implant cases, with a mix of four-handed dentistry and expanded functions for the right candidate. It suits an assistant who likes variety, wants to see implant surgery up close, and would rather work in a calm practice than a conveyor belt. We will support you through EFDA certification if you do not have it yet, including the course fee and the time off.',
        'Patient Coordinator. This is the voice of the practice, handling scheduling, insurance verification and the first conversation a nervous caller has with us. It suits someone patient, organised and genuinely warm, who can explain a benefit breakdown without jargon and keep a busy front desk calm. Dental front-office experience helps, but we have trained excellent coordinators from hospitality and retail backgrounds, and we would happily do it again.',
        'Sterilisation Technician. You will own the infection-control workflow, from ultrasonic cleaning and autoclave cycles to logging, inventory and ordering. The role suits someone meticulous and dependable who takes pride in getting the invisible details right, because the whole practice depends on them. It is a genuine entry point, with a clear path toward dental assisting for anyone who wants to grow into clinical work.'
      ]
    },
    {
      type: 'table',
      id: 'open-roles',
      eyebrow: 'Open roles',
      h2: 'Current openings',
      intro:
        'These are the roles we are hiring for now. If you do not see your position, send us your details anyway. We keep good applications on file.',
      head: ['Role', 'Type', 'Schedule'],
      rows: [
        ['Associate Dentist', 'Full-time', 'Four clinical days, Mon–Thu'],
        ['Registered Dental Hygienist', 'Full-time', 'Four days, Mon–Thu, 7:45 a.m.–5 p.m.'],
        ['Dental Assistant (EFDA preferred)', 'Full-time', 'Four days, rotating Friday mornings'],
        ['Patient Coordinator', 'Full-time', 'Mon–Fri, 8 a.m.–5 p.m., one Saturday a month'],
        ['Sterilisation Technician', 'Part-time', 'Mon–Fri mornings, 20–25 hours']
      ],
      note:
        'Clinical schedules include a paid morning huddle and a protected lunch break. We do not schedule patients through lunch.'
    },
    {
      type: 'checklist',
      id: 'great-applicant',
      eyebrow: 'What we look for',
      h2: 'Signs you would thrive here',
      intro: 'Experience matters, but these traits matter more.',
      columns: 2,
      items: [
        'You explain things in plain language, not dental jargon',
        'You treat nervous patients with patience, not sighs',
        'You ask questions when you are unsure',
        'You finish what you start, including the paperwork',
        'You are kind to the whole team, not just the doctors',
        'You want feedback and act on it',
        'You can stay calm when the schedule gets tight',
        'You take pride in details nobody else notices',
        'You are curious about new techniques and tools',
        'You show up on time because your teammates depend on you'
      ]
    },
    {
      type: 'steps',
      id: 'hiring-process',
      eyebrow: 'How it works',
      h2: 'Our hiring process in four steps',
      intro:
        'No endless interviews and no ghosting. From application to offer usually takes about two weeks.',
      items: [
        {
          title: 'Apply with a résumé and a short note',
          text: 'Send your résumé to careers@truenorthdental.com or use the contact form. A two or three line note about why this role interests you is more useful to us than a formal cover letter, and it tells us you read the posting rather than sent the same application everywhere.'
        },
        {
          title: 'A friendly phone conversation',
          text: 'Sofia or the hiring lead calls you for fifteen minutes to talk about your experience, your availability and what you are looking for next. It is a two-way conversation, and you are welcome to ask us anything about the practice, the schedule or the pay range. We would rather answer your questions now than have you guess.'
        },
        {
          title: 'A working interview in the practice',
          text: 'You spend a few paid hours with the team, seeing how we actually work. For clinical roles that means time chair-side with an assistant or hygienist. For front-office roles it means shadowing the desk and listening to how we answer the phone. You get to decide whether this feels like your kind of place, and so do we.'
        },
        {
          title: 'An offer and a real start date',
          text: 'We make a decision within a few days and put the offer in writing, including pay, benefits, schedule and your start date. If it is a no, we tell you, because you deserve a straight answer after giving us your time. Most new hires are on the floor within two to three weeks of that offer.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about working here',
      intro: 'The things candidates ask us most often.',
      items: [
        {
          q: 'Do you really offer four-day clinical weeks?',
          a: 'Yes, for most clinical roles. Our doctors and hygienists typically work Monday through Thursday, with assistants on a rotating schedule that covers Friday mornings. We build the schedule around sustainable hours because tired clinicians make mistakes, and we would rather run a little leaner than run people into the ground.'
        },
        {
          q: 'Are you hiring new graduates?',
          a: 'Absolutely. We have hired new hygienists and assistants every year since 2019, and each one gets a six-month mentorship with a senior team member. What we look for is attitude and a willingness to learn. The clinical skills we can teach, and we enjoy doing it.'
        },
        {
          q: 'What is the pay range for open roles?',
          a: 'We pay at or above the Kansas City market rate for every position and review pay annually. Exact ranges depend on experience and certifications, and we share the range early in the conversation so nobody wastes a working interview on a number that does not work.'
        },
        {
          q: 'Do you pay for continuing education?',
          a: 'Yes. We cover course fees, the day out of the practice to attend, and your licence, CPR and association dues. Team members have recently taken courses in implant restoration, laser therapy, clear aligners and expanded functions. Bring us something you want to learn.'
        },
        {
          q: 'What is the team culture actually like?',
          a: 'Warm, direct and low on drama. We read our negative reviews aloud once a month and fix what we can, which tends to keep everyone honest. Staff are treated with the same judgement-free rule we apply to patients, and questions are always welcome, especially from new team members.'
        },
        {
          q: 'How long does hiring usually take?',
          a: 'About two weeks from application to offer. The phone call comes first, then a paid working interview of a few hours, then a decision within a few days. We do not leave people waiting, and we tell every candidate the outcome either way.'
        },
        {
          q: 'Can I apply if there is no role that matches my title?',
          a: 'Yes. Send your résumé and a note about the kind of role you want, and we will keep it on file. We have created positions for the right person more than once, and we would rather hear from you early than discover you after we have hired.'
        }
      ]
    },
    {
      type: 'text',
      h2: 'A note on how we hire',
      body: [
        'We read every application ourselves, and we do not use automated screening that rejects people for the wrong keyword. If your experience does not line up exactly with a posting but you think you would be good here, apply anyway and tell us why. Half our team came to us that way.',
        'TrueNorth Dental is an equal opportunity employer. We hire on ability, attitude and fit, and we do not discriminate on the basis of race, colour, religion, sex, national origin, age, disability, veteran status or any other characteristic protected by Missouri or federal law. If you need an accommodation at any stage of the hiring process, tell us and we will arrange it.',
        'We keep applications on file for twelve months with your permission. If a role opens that matches what you are looking for, we may reach out before we post it publicly. You are always free to ask us to delete your details at any time.'
      ]
    }
  ],
  faqs: [
    {
      q: 'Do you really offer four-day clinical weeks?',
      a: 'Yes, for most clinical roles. Our doctors and hygienists typically work Monday through Thursday, with assistants on a rotating schedule that covers Friday mornings. We build the schedule around sustainable hours because tired clinicians make mistakes, and we would rather run a little leaner than run people into the ground.'
    },
    {
      q: 'Are you hiring new graduates?',
      a: 'Absolutely. We have hired new hygienists and assistants every year since 2019, and each one gets a six-month mentorship with a senior team member. What we look for is attitude and a willingness to learn. The clinical skills we can teach, and we enjoy doing it.'
    },
    {
      q: 'What is the pay range for open roles?',
      a: 'We pay at or above the Kansas City market rate for every position and review pay annually. Exact ranges depend on experience and certifications, and we share the range early in the conversation so nobody wastes a working interview on a number that does not work.'
    },
    {
      q: 'Do you pay for continuing education?',
      a: 'Yes. We cover course fees, the day out of the practice to attend, and your licence, CPR and association dues. Team members have recently taken courses in implant restoration, laser therapy, clear aligners and expanded functions. Bring us something you want to learn.'
    },
    {
      q: 'What is the team culture actually like?',
      a: 'Warm, direct and low on drama. We read our negative reviews aloud once a month and fix what we can, which tends to keep everyone honest. Staff are treated with the same judgement-free rule we apply to patients, and questions are always welcome, especially from new team members.'
    },
    {
      q: 'How long does hiring usually take?',
      a: 'About two weeks from application to offer. The phone call comes first, then a paid working interview of a few hours, then a decision within a few days. We do not leave people waiting, and we tell every candidate the outcome either way.'
    },
    {
      q: 'Can I apply if there is no role that matches my title?',
      a: 'Yes. Send your résumé and a note about the kind of role you want, and we will keep it on file. We have created positions for the right person more than once, and we would rather hear from you early than discover you after we have hired.'
    }
  ],
  cta: {
    h2: 'Come and see how we work',
    text: 'Send your résumé and a short note to careers@truenorthdental.com, or call the practice to arrange a paid working interview.',
    primary: { label: 'Contact the practice', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
