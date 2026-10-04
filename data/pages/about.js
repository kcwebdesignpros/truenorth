'use strict';
/**
 * About page. Founding story, milestones, team, promises and questions —
 * rendered by views/page.ejs from blocks.
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
    'TrueNorth Dental opened in 2011 with one chair on North Oak Trafficway. Today our Kansas City northland practice runs eight operatories with a team of twenty-two.',
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
      h2: 'How a Northland Dentist Built Something Different',
      body: [
        'Dr. Amelia Hart opened TrueNorth Dental in 2011 with one treatment chair, one assistant and a promise she made to herself. She had spent four years in a high-volume group practice where fifteen-minute appointments turned dentistry into a transaction.',
        'The first office was small, tucked into a suite on North Oak Trafficway, and it grew the way good neighbourhood practices do, one family telling another. By 2014 there was a second doctor, a second chair and a waiting list.',
        'Fifteen years later the practice looks very different, but the founding rule has not changed at all. Every patient still gets an unhurried conversation before anyone reaches for a tool.'
      ]
    },
    {
      type: 'timeline',
      id: 'history',
      eyebrow: 'Our story',
      h2: 'Milestones Along the Way',
      intro: 'Fifteen years of steady growth in the Kansas City northland.',
      items: [
        {
          year: '2011',
          title: 'One chair on North Oak Trafficway',
          text: 'Dr. Hart opened TrueNorth Dental with a single chair and one assistant.'
        },
        {
          year: '2014',
          title: 'A second dentist joins',
          text: 'Two more operatories opened as word spread across Gladstone and Liberty.'
        },
        {
          year: '2017',
          title: 'Digital imaging replaces film',
          text: 'Digital sensors cut radiation and put X-rays on a screen beside the chair.'
        },
        {
          year: '2020',
          title: 'Eight operatories under one roof',
          text: 'Implants, orthodontics and sedation came together at one address.'
        },
        {
          year: '2026',
          title: 'Fifteen years, same rule',
          text: 'More than 14,800 patients later, every visit still starts with a conversation.'
        }
      ]
    },
    {
      type: 'cards',
      id: 'team',
      eyebrow: 'The people',
      h2: 'The Team Who Will Care for You',
      intro: 'Four clinicians and two full-time patient advocates, all under one roof.',
      columns: 4,
      items: [
        {
          icon: 'tooth',
          title: 'Dr. Amelia Hart, DDS',
          text: 'Founder and lead dentist, in the room with patients every day. She holds a Missouri sedation permit and has logged over 3,000 hours of continuing education.'
        },
        {
          icon: 'implant',
          title: 'Dr. Marcus Reed, DMD',
          text: 'Cosmetic and implant dentist who places and restores implants start to finish, planning every case in 3D software first.'
        },
        {
          icon: 'braces',
          title: 'Dr. Priya Nair, DDS, MS',
          text: 'Orthodontist for children, teens and adults who will tell you honestly when treatment can safely wait rather than sell you a plan you do not need.'
        },
        {
          icon: 'floss',
          title: 'Jordan Ellis, RDH',
          text: 'Lead hygienist who explains every instrument before it comes near you and never lectures. He grew up in North Kansas City.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'promises',
      eyebrow: 'What we believe',
      h2: 'Three Promises We Have Never Broken',
      intro: 'These rules decide how we run every single day.',
      columns: 2,
      items: [
        'Enough time for every question',
        'A written estimate before treatment',
        'Care without lectures or shame',
        'An honest answer, even when it is to wait',
        'Free parking and step-free access',
        'Insurance appeals handled for you'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Our Practice',
      intro: 'A few things patients ask before their first visit.',
      items: [
        {
          q: 'Where is TrueNorth Dental located?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, just off the North Oak exit with free parking in front.'
        },
        {
          q: 'How long has the practice been open?',
          a: 'Dr. Amelia Hart opened TrueNorth Dental in 2011. Fifteen years later we have eight operatories and a team of twenty-two.'
        },
        {
          q: 'Do you treat children as well as adults?',
          a: 'Yes. We care for the whole family, from a child’s first visit around age one through adult and senior dentistry.'
        },
        {
          q: 'Do you offer emergency appointments?',
          a: 'We hold same-day slots and answer a 24/7 emergency line at (816) 555-0199. Call before noon and we can usually see you that day.'
        },
        {
          q: 'Which areas do you serve?',
          a: 'Patients travel to us from Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside, Smithville and the wider Clay and Platte County northland.'
        },
        {
          q: 'Can I meet the doctor before treatment?',
          a: 'Yes. Your first visit includes time to talk with your dentist about your goals and concerns before any plan is proposed.'
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
      a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, just off the North Oak exit with free parking in front.'
    },
    {
      q: 'How long has the practice been open?',
      a: 'Dr. Amelia Hart opened TrueNorth Dental in 2011. Fifteen years later we have eight operatories and a team of twenty-two.'
    },
    {
      q: 'Do you treat children as well as adults?',
      a: 'Yes. We care for the whole family, from a child’s first visit around age one through adult and senior dentistry.'
    },
    {
      q: 'Do you offer emergency appointments?',
      a: 'We hold same-day slots and answer a 24/7 emergency line at (816) 555-0199. Call before noon and we can usually see you that day.'
    },
    {
      q: 'Which areas do you serve?',
      a: 'Patients travel to us from Kansas City, North Kansas City, Gladstone, Liberty, Parkville, Riverside, Smithville and the wider Clay and Platte County northland.'
    },
    {
      q: 'Can I meet the doctor before treatment?',
      a: 'Yes. Your first visit includes time to talk with your dentist about your goals and concerns before any plan is proposed.'
    }
  ],
  cta: {
    h2: 'Come See the Practice for Yourself',
    text: 'Book a visit and meet the team who will be caring for your family. We are easy to reach from anywhere in the Kansas City northland.',
    primary: { label: 'Book online', path: '/contact' }
  }
};
