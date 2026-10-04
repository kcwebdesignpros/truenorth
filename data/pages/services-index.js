'use strict';
/**
 * Services index page. The six service cards are rendered from
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
        'From a routine cleaning to a full-arch implant, everything is planned and delivered in the same practice. You are never sent across the metro for one stage and back for the next.',
      cta: { label: 'See all six services', path: '/services' }
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'At a glance',
      h2: 'The six services compared',
      intro:
        'Every service starts with the same thorough exam, so you only pay once to find out what you need.',
      head: ['Service', 'Best for', 'Typical visit length', 'Starting cost'],
      rows: [
        ['General & Family Dentistry', 'Exams, cleanings, fillings and gum care for the household', '45–60 minutes', 'From $99'],
        ['Cosmetic Dentistry & Smile Design', 'Veneers, bonding and crowns planned around your face', '60–90 minutes per visit', 'From $450'],
        ['Professional Teeth Whitening', 'Coffee, tea and tobacco staining on healthy teeth', '60–75 minutes', 'From $249'],
        ['Dental Implants & Oral Surgery', 'Replacing one tooth or a full arch, plus extractions', '3–6 months, start to finish', 'From $1,850'],
        ['Braces & Clear Aligners', 'Crowded or uneven teeth in children, teens and adults', '6–24 months', 'From $3,200'],
        ['Emergency Dental Care', 'Toothache, breakage and injuries that cannot wait', '30–60 minutes', 'From $99']
      ],
      note: 'Starting costs reflect our published fees, and you always receive a written estimate before treatment begins.'
    },
    {
      type: 'prose',
      id: 'one-roof',
      eyebrow: 'One practice, one record',
      h2: 'Why keeping everything under one roof matters',
      body: [
        'Most people need one or two kinds of dentistry, chosen well and delivered in the right order. We keep all six in one practice because treatments rarely stand alone. Straightening teeth changes how a bite wears, and an implant needs a healthy gum line around it.',
        'When everything lives in one place, you keep one clinical record instead of four. The dentist who places your implant is the one who fits the final crown, and our coordinators can hand you a single written estimate for the whole plan.'
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
          a: 'No. Our implant dentist, orthodontist, hygienist and general dentists all work in the same building, so you move between them on one record.'
        },
        {
          q: 'How do you decide which service I need?',
          a: 'One thorough exam answers it in almost every case. We sort findings into urgent, soon and can be watched, and we will say if you need nothing at all.'
        },
        {
          q: 'What is the difference between urgent and something that can wait?',
          a: 'Urgent means constant pain, swelling or bleeding that will not stop, and it should be seen today. A small painless cavity can usually wait a few weeks.'
        },
        {
          q: 'Can you do everything in one place?',
          a: 'Almost everything, including implants, bone grafting, wisdom teeth, orthodontics and sedation. That keeps one record and one team on your case.'
        },
        {
          q: 'What does comprehensive care actually mean?',
          a: 'It means your whole mouth is assessed and planned together rather than one tooth at a time. Visit one is the full picture and a written plan.'
        },
        {
          q: 'How much will my treatment cost?',
          a: 'You receive a written estimate before any treatment begins, itemised so you can see what each stage costs. We are in-network with most major insurers, and financing can spread larger plans across monthly payments.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Do I need a referral to see a specialist here?',
      a: 'No. Our implant dentist, orthodontist, hygienist and general dentists all work in the same building, so you move between them on one record.'
    },
    {
      q: 'How do you decide which service I need?',
      a: 'One thorough exam answers it in almost every case. We sort findings into urgent, soon and can be watched, and we will say if you need nothing at all.'
    },
    {
      q: 'What is the difference between urgent and something that can wait?',
      a: 'Urgent means constant pain, swelling or bleeding that will not stop, and it should be seen today. A small painless cavity can usually wait a few weeks.'
    },
    {
      q: 'Can you do everything in one place?',
      a: 'Almost everything, including implants, bone grafting, wisdom teeth, orthodontics and sedation. That keeps one record and one team on your case.'
    },
    {
      q: 'What does comprehensive care actually mean?',
      a: 'It means your whole mouth is assessed and planned together rather than one tooth at a time. Visit one is the full picture and a written plan.'
    },
    {
      q: 'How much will my treatment cost?',
      a: 'You receive a written estimate before any treatment begins, itemised so you can see what each stage costs. We are in-network with most major insurers, and financing can spread larger plans across monthly payments.'
    }
  ],
  cta: {
    h2: 'Start with one visit that answers everything',
    text: 'One exam, one written plan and a team that can deliver every stage in-house. Book online or call and we will find a time that fits.',
    primary: { label: 'Book your visit', path: '/contact' }
  }
};
