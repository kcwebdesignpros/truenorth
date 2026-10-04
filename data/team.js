'use strict';
/**
 * Clinical + support team. `image: null` renders an initials avatar card.
 */

module.exports = [
  {
    slug: 'amelia-hart',
    name: 'Dr. Amelia Hart',
    credentials: 'DDS',
    role: 'Founder & Lead Dentist',
    image: '/img/team-amelia-hart.webp',
    imageAlt: 'Dr. Amelia Hart, DDS, founder and lead dentist at TrueNorth Dental in Kansas City',
    initials: 'AH',
    specialties: ['General Dentistry', 'Sedation Dentistry', 'Restorative Dentistry'],
    education: 'University of Missouri–Kansas City School of Dentistry',
    years: 18,
    order: 1,
    short:
      'Dr. Hart opened TrueNorth Dental in 2011 with one chair and a promise that no patient would ever be rushed or lectured.',
    bio: [
      'Dr. Amelia Hart grew up in Gladstone and earned her DDS at the University of Missouri–Kansas City. She opened TrueNorth Dental in 2011 with one treatment room and a deliberately slower schedule.',
      'Eighteen years on, she leads anxiety-free and restorative care, holds a Missouri sedation permit, and has logged more than 3,000 hours of continuing education. Outside the practice she coaches youth soccer in Gladstone.'
    ],
    focus: [
      'Anxiety-free and sedation dentistry',
      'Full-mouth restorative treatment',
      'Adult preventive care',
      'Senior dental health'
    ],
    memberships: ['American Dental Association', 'Missouri Dental Association', 'Academy of General Dentistry'],
    funFact: 'Has personally restored more than 9,000 teeth — and still keeps the first patient chart she ever wrote.'
  },
  {
    slug: 'marcus-reed',
    name: 'Dr. Marcus Reed',
    credentials: 'DMD',
    role: 'Cosmetic & Implant Dentist',
    image: '/img/team-marcus-reed.webp',
    imageAlt: 'Dr. Marcus Reed, DMD, cosmetic and implant dentist at TrueNorth Dental',
    initials: 'MR',
    specialties: ['Dental Implants', 'Cosmetic Dentistry', 'Oral Surgery'],
    education: 'Southern Illinois University School of Dental Medicine',
    years: 12,
    order: 2,
    short:
      'Dr. Reed places and restores implants start to finish, so patients never get bounced between offices for one tooth.',
    bio: [
      'Dr. Marcus Reed completed a residency in oral surgery before joining TrueNorth in 2016, which is why implants, bone grafts and wisdom teeth can all be done in the same building as your cleanings.',
      'He has placed more than 2,400 implants and trained at the Dawson Academy and the Misch International Implant Institute. His cosmetic work follows one belief: the best veneer is the one nobody notices.'
    ],
    focus: [
      'Single and full-arch dental implants',
      'Bone grafting and extractions',
      'Porcelain veneers and smile design',
      'Digital implant planning'
    ],
    memberships: ['American Dental Association', 'American Academy of Cosmetic Dentistry', 'Academy of Osseointegration'],
    funFact: 'Plans every implant in 3D software before the patient ever sits in the chair.'
  },
  {
    slug: 'priya-nair',
    name: 'Dr. Priya Nair',
    credentials: 'DDS, MS',
    role: 'Orthodontist',
    image: '/img/team-priya-nair.webp',
    imageAlt: 'Dr. Priya Nair, DDS, MS, orthodontist at TrueNorth Dental',
    initials: 'PN',
    specialties: ['Orthodontics', 'Clear Aligners', 'Paediatric Dentistry'],
    education: 'University of Iowa College of Dentistry (MS, Orthodontics)',
    years: 11,
    order: 3,
    short:
      'Dr. Nair treats children, teens and adults with braces and clear aligners, and tells every parent honestly whether treatment can wait.',
    bio: [
      'Dr. Priya Nair holds a Master of Science in Orthodontics from the University of Iowa and has treated more than 1,800 cases across every age group, from young children to adults.',
      'She is an Invisalign-certified provider who scans every aligner case digitally, so there are no impression trays and patients can preview the result before they commit. She also runs our free school screening programme.'
    ],
    focus: [
      'Clear aligner therapy',
      'Ceramic and metal braces',
      'Early interceptive orthodontics',
      'Retainer and retention programmes'
    ],
    memberships: ['American Association of Orthodontists', 'American Dental Association', 'Missouri Dental Association'],
    funFact: 'Has scanned more than 4,000 local schoolchildren for free through our screening programme.'
  },
  {
    slug: 'jordan-ellis',
    name: 'Jordan Ellis',
    credentials: 'RDH',
    role: 'Lead Dental Hygienist',
    image: '/img/team-jordan-ellis.webp',
    imageAlt: 'Jordan Ellis, RDH, lead dental hygienist at TrueNorth Dental',
    initials: 'JE',
    specialties: ['Preventive Hygiene', 'Periodontal Therapy', 'Patient Education'],
    education: 'Johnson County Community College — Dental Hygiene Program',
    years: 9,
    order: 4,
    short:
      'Jordan is the reason most patients say they stopped dreading the dentist. He explains everything before he does it, and he never lectures.',
    bio: [
      'Jordan Ellis has been a registered dental hygienist for nine years and leads the TrueNorth hygiene team. He grew up in North Kansas City and is certified in local anaesthesia and nitrous oxide.',
      'He has advanced training in non-surgical periodontal therapy, so early gum disease is usually treated here rather than referred out. Patients mention his chair-side manner most often in reviews.'
    ],
    focus: [
      'Adult and paediatric cleanings',
      'Deep cleaning and gum therapy',
      'Sealants and fluoride treatment',
      'Oral health coaching'
    ],
    memberships: ['American Dental Hygienists\u2019 Association', 'Missouri Dental Hygienists\u2019 Association'],
    funFact: 'Keeps a laminated list of every patient\u2019s favourite podcast so there is always something to talk about.'
  },
  {
    slug: 'sofia-delgado',
    name: 'Sofia Delgado',
    credentials: '',
    role: 'Practice Manager',
    image: null,
    imageAlt: 'Sofia Delgado, practice manager at TrueNorth Dental',
    initials: 'SD',
    specialties: ['Insurance & Billing', 'Scheduling', 'Patient Advocacy'],
    education: 'Park University — Bachelor of Science, Healthcare Administration',
    years: 8,
    order: 5,
    short:
      'Sofia is the person who calls your insurer so you do not have to, and who finds the appointment slot that fits your life.',
    bio: [
      'Sofia Delgado runs scheduling, insurance verification and billing at TrueNorth Dental. She has eight years of dental administration experience and has untangled claims with every major Missouri carrier.',
      'If a claim is denied, Sofia appeals it. If an estimate does not make sense, she walks through it line by line, and patients mention her by name in reviews. She is a lifelong Kansas City resident.'
    ],
    focus: ['Insurance coordination', 'Payment plan setup', 'Appointment scheduling', 'New patient onboarding'],
    memberships: ['American Association of Dental Office Managers'],
    funFact: 'Has an average insurance claim turnaround three days faster than the regional benchmark.'
  },
  {
    slug: 'nia-brooks',
    name: 'Nia Brooks',
    credentials: '',
    role: 'Treatment Coordinator',
    image: null,
    imageAlt: 'Nia Brooks, treatment coordinator at TrueNorth Dental',
    initials: 'NB',
    specialties: ['Treatment Planning', 'Financial Coordination', 'Patient Comfort'],
    education: 'Metropolitan Community College — Dental Assisting',
    years: 6,
    order: 6,
    short:
      'Nia turns the treatment plan into plain English, then makes sure the cost and the timeline actually work for your family.',
    bio: [
      'Nia Brooks sits with every patient after their exam and walks through what the doctor found, what the options are and what each one costs, with a written estimate in hand.',
      'A certified dental assistant by training, she understands the procedures she explains. She also coordinates TrueNorth\u2019s annual free dental day for children in Clay County and volunteers locally.'
    ],
    focus: ['Treatment plan presentation', 'Cost estimates and financing', 'Patient follow-up', 'Community outreach'],
    memberships: ['American Association of Dental Office Managers'],
    funFact: 'Organises our annual free dental day — more than 600 children treated so far.'
  }
];
