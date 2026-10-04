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
        'We schedule deliberately. Most clinical roles work a four-day week, and we keep enough time in every appointment that you are not sprinting between rooms. That is not a perk we added later, and it is the reason people who join us tend to stay.',
        'Continuing education is paid, not tolerated. We cover course fees, the day out to attend, and your licence and association dues. The pace is busy without being frantic, and clinicians stay focused on care rather than paperwork.'
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
          text: 'Medical coverage with a choice of two plans, and the practice covers a meaningful share of the premium for you and your family.'
        },
        {
          icon: 'smile',
          title: 'Dental and vision',
          text: 'Free preventive dental care for you, generous discounts for immediate family, and a vision plan with an annual frame allowance.'
        },
        {
          icon: 'wallet',
          title: '401k with match',
          text: 'We match your contributions dollar for dollar up to four percent of pay, with immediate vesting. You do not have to stay a decade to keep it.'
        },
        {
          icon: 'calendar-check',
          title: 'Paid time off',
          text: 'Three weeks of PTO in your first year, growing with tenure, plus paid holidays and a paid birthday off. We plan coverage so time off is restful.'
        },
        {
          icon: 'graduation',
          title: 'CE stipend',
          text: 'A yearly stipend for courses, conferences and certifications, on top of the days we already give you to attend them. Bring us a course you want.'
        },
        {
          icon: 'certificate',
          title: 'Licensure reimbursement',
          text: 'We pay your state licence renewal, CPR certification and professional association dues. Keeping your credentials current should not fall on you.'
        }
      ]
    },
    {
      type: 'table',
      id: 'open-roles',
      eyebrow: 'Open roles',
      h2: 'Current openings',
      intro:
        'These are the roles we are hiring for now. If you do not see your position, send us your details anyway.',
      head: ['Role', 'Type', 'Schedule'],
      rows: [
        ['Associate Dentist', 'Full-time', 'Four clinical days, Mon–Thu'],
        ['Registered Dental Hygienist', 'Full-time', 'Four days, Mon–Thu, 7:45 a.m.–5 p.m.'],
        ['Dental Assistant (EFDA preferred)', 'Full-time', 'Four days, rotating Friday mornings'],
        ['Patient Coordinator', 'Full-time', 'Mon–Fri, 8 a.m.–5 p.m., one Saturday a month'],
        ['Sterilisation Technician', 'Part-time', 'Mon–Fri mornings, 20–25 hours']
      ],
      note: 'Clinical schedules include a paid morning huddle and a protected lunch break. We do not schedule patients through lunch.'
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
          a: 'Yes, for most clinical roles. Our doctors and hygienists work Monday through Thursday, with assistants covering Friday mornings on a rota. We build the schedule around sustainable hours.'
        },
        {
          q: 'Are you hiring new graduates?',
          a: 'Absolutely. We have hired new hygienists and assistants every year since 2019, and each one gets a six-month mentorship with a senior team member. Skills we can teach.'
        },
        {
          q: 'Do you pay for continuing education?',
          a: 'Yes. We cover course fees, the day out to attend, and your licence, CPR and association dues. Team members have recently trained in implant restoration and clear aligners.'
        },
        {
          q: 'What is the team culture actually like?',
          a: 'Warm, direct and low on drama. We read our negative reviews aloud once a month and fix what we can, and questions are always welcome, especially from new team members.'
        },
        {
          q: 'How long does hiring usually take?',
          a: 'About two weeks from application to offer. A phone call comes first, then a paid working interview of a few hours, then a decision within a few days.'
        },
        {
          q: 'Can I apply if there is no role matching my title?',
          a: 'Yes. Send your résumé and a note about the role you want and we will keep it on file. We have created positions for the right person before.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Do you really offer four-day clinical weeks?',
      a: 'Yes, for most clinical roles. Our doctors and hygienists work Monday through Thursday, with assistants covering Friday mornings on a rota. We build the schedule around sustainable hours.'
    },
    {
      q: 'Are you hiring new graduates?',
      a: 'Absolutely. We have hired new hygienists and assistants every year since 2019, and each one gets a six-month mentorship with a senior team member. Skills we can teach.'
    },
    {
      q: 'Do you pay for continuing education?',
      a: 'Yes. We cover course fees, the day out to attend, and your licence, CPR and association dues. Team members have recently trained in implant restoration and clear aligners.'
    },
    {
      q: 'What is the team culture actually like?',
      a: 'Warm, direct and low on drama. We read our negative reviews aloud once a month and fix what we can, and questions are always welcome, especially from new team members.'
    },
    {
      q: 'How long does hiring usually take?',
      a: 'About two weeks from application to offer. A phone call comes first, then a paid working interview of a few hours, then a decision within a few days.'
    },
    {
      q: 'Can I apply if there is no role matching my title?',
      a: 'Yes. Send your résumé and a note about the role you want and we will keep it on file. We have created positions for the right person before.'
    }
  ],
  cta: {
    h2: 'Come and see how we work',
    text: 'Send your résumé and a short note to careers@truenorthdental.com, or call the practice to arrange a paid working interview.',
    primary: { label: 'Contact the practice', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
