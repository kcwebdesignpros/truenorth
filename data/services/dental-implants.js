'use strict';
/**
 * Service detail page — Dental Implants & Oral Surgery.
 * Data only. No markup, no CSS classes. Rendered by generic block templates.
 */

module.exports = {
  slug: 'dental-implants',
  order: 4,
  name: 'Dental Implants & Oral Surgery',
  shortName: 'Dental Implants',
  icon: 'implant',
  image: '/img/svc-dental-implants.webp',
  imageAlt: 'Dr. Marcus Reed placing a dental implant at TrueNorth Dental in Kansas City',
  tagline: 'Permanent tooth replacement planned, placed and restored under one roof.',
  metaTitle: 'Dental Implants in Kansas City, MO | TrueNorth',
  metaDescription:
    'Dental implants planned, placed and restored in-house by Dr. Marcus Reed at our Kansas City northland office. Single teeth, bridges and full arches. Call today.',
  metaKeywords:
    'dental implants kansas city, implant dentist northland, all-on-4 kansas city, bone grafting, sinus lift, wisdom teeth removal, tooth replacement gladstone mo',
  eyebrow: 'Replace what you lost',
  heroIntro:
    'A dental implant replaces a missing tooth from the root up, so it looks, feels and works like the one you lost. We plan, place and restore yours in-house.',
  priceFrom: 'From $1,850',
  priceValue: 1850,
  duration: '3–6 months, start to finish',
  highlights: [
    'Single-Tooth Implants',
    'Implant-Supported Bridges',
    'Full-Arch Restoration',
    'Bone Grafting & Sinus Lifts',
    'Extractions & Wisdom Teeth'
  ],
  blocks: [
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we place',
      h2: 'Implant and oral surgery treatments',
      intro:
        'Whether you are missing one tooth or most of an arch, your surgical care happens here with sedation options.',
      columns: 3,
      items: [
        {
          icon: 'implant',
          title: 'Single-Tooth Implants',
          text: 'One post, one crown, and no work on the teeth either side. A single implant takes about three to four months across two short visits.'
        },
        {
          icon: 'shield-plus',
          title: 'Implant-Supported Bridges',
          text: 'Two implants hold a bridge that replaces three or four teeth in a row. It stays fixed, cleans easily and leaves the neighbouring teeth untouched.'
        },
        {
          icon: 'activity',
          title: 'Full-Arch Restoration',
          text: 'Four to six implants support a full upper or lower arch. Most patients leave with temporary teeth the same day.'
        },
        {
          icon: 'bone',
          title: 'Bone Grafting & Sinus Lifts',
          text: 'When the jaw has thinned, we rebuild it with donor or synthetic bone before placing anything. A sinus lift gives upper back implants solid bone to sit in.'
        },
        {
          icon: 'first-aid',
          title: 'Extractions & Wisdom Teeth',
          text: 'Simple and surgical extractions, including impacted wisdom teeth, are done in-house with sedation available.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'From first scan to final crown',
      intro: 'Every implant follows the same arc, whether it is one tooth or a full arch.',
      items: [
        {
          title: 'Consultation and 3D scan',
          text: 'We take a 3D scan, review your health history and talk through your options. You leave with a written estimate and a realistic timeline.'
        },
        {
          title: 'Planning and prep work',
          text: 'Dr. Reed maps the exact implant position and decides whether you need a graft or sinus lift first. That grafting heals for three to six months.'
        },
        {
          title: 'Placement day',
          text: 'The implant is placed under local anaesthetic, with sedation if you prefer. A single implant takes 30 to 45 minutes.'
        },
        {
          title: 'Healing and integration',
          text: 'Over eight to sixteen weeks your bone grows into the implant. You wear a temporary and keep to softer foods for the first week or two.'
        },
        {
          title: 'Abutment and final crown',
          text: 'Once the implant is solid, we scan, attach the abutment and fit your final crown. You leave able to chew normally on that side again.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Compare your options',
      h2: 'Implant, bridge or denture?',
      intro: 'There is no single right answer for every mouth, so here is how the three common options compare.',
      head: ['', 'Dental implant', 'Fixed bridge', 'Partial denture'],
      rows: [
        ['Replaces the root', 'Yes', 'No', 'No'],
        ['Touches nearby teeth', 'No', 'Reshaped', 'Clasps on'],
        ['Typical lifespan', '20+ years', '7–15 years', '5–8 years'],
        ['Preserves jaw bone', 'Yes', 'No', 'No'],
        ['Typical KC cost', '$1,850–$3,200', '$1,200–$2,000', '$900–$1,800'],
        ['Time to finish', '3–6 months', '2–3 weeks', '3–5 weeks']
      ],
      note: 'Ranges reflect the Kansas City market in 2026 and vary with grafting, sedation and the crown you choose.'
    },
    {
      type: 'checklist',
      id: 'aftercare',
      eyebrow: 'After placement',
      h2: 'What the first week looks like',
      intro: 'Placement is the easy part. The first week is about leaving the site alone so it can clot and settle.',
      columns: 2,
      items: [
        'Take pain relief before the anaesthetic wears off',
        'Use an ice pack for 20 minutes on, 20 off',
        'Eat cool, soft foods for the first 48 hours',
        'Skip straws, smoking and vigorous rinsing for a week',
        'Brush around the implant, avoiding the surgical site',
        'Start the prescribed mouthwash on day two',
        'Expect some swelling for three to four days',
        'Call the office if pain or swelling gets worse'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Dental implant questions',
      intro: 'The questions we hear most, answered the way we would in the chair.',
      items: [
        {
          q: 'Does getting an implant hurt?',
          a: 'Placement is done under local anaesthetic, with sedation if you prefer. The first two days feel like a deep bruise that ordinary pain relief covers.'
        },
        {
          q: 'How long does the whole process take?',
          a: 'A single implant takes about three to four months from placement to final crown. Add three to six months if you need a bone graft first.'
        },
        {
          q: 'Am I a candidate after years without a tooth?',
          a: 'Usually yes. A 3D scan shows whether you have enough bone, or whether grafting can rebuild it before we place the implant.'
        },
        {
          q: 'Does insurance cover implants?',
          a: 'Some plans cover part of the crown but not the implant itself. We are in-network with Delta Dental, Cigna, Aetna and MetLife.'
        },
        {
          q: 'Can you replace a full arch in one day?',
          a: 'Often yes. We place four to six implants and fit a temporary arch the same day, then the final teeth about four months later.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Does getting an implant hurt?',
      a: 'Placement is done under local anaesthetic, with sedation if you prefer. The first two days feel like a deep bruise that ordinary pain relief covers.'
    },
    {
      q: 'How long does the whole process take?',
      a: 'A single implant takes about three to four months from placement to final crown. Add three to six months if you need a bone graft first.'
    },
    {
      q: 'Am I a candidate after years without a tooth?',
      a: 'Usually yes. A 3D scan shows whether you have enough bone, or whether grafting can rebuild it before we place the implant.'
    },
    {
      q: 'Does insurance cover implants?',
      a: 'Some plans cover part of the crown but not the implant itself. We are in-network with Delta Dental, Cigna, Aetna and MetLife.'
    },
    {
      q: 'Can you replace a full arch in one day?',
      a: 'Often yes. We place four to six implants and fit a temporary arch the same day, then the final teeth about four months later.'
    }
  ],
  related: ['general-dentistry', 'cosmetic-dentistry', 'emergency-dentistry'],
  cta: {
    h2: 'Find out what is possible for your smile',
    text: 'Book a consultation with Dr. Reed and leave with a 3D plan, a realistic timeline and an exact cost.',
    primary: { label: 'Book an implant consult', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
