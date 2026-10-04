'use strict';
/**
 * Technology page. Why the equipment matters, the tool list and a digital
 * versus film X-ray comparison — rendered by views/page.ejs.
 */

module.exports = {
  slug: 'technology',
  path: '/technology',
  name: 'Our Technology',
  metaTitle: 'Dental Technology in Kansas City | TrueNorth Dental',
  metaDescription:
    'Explore the 3D CBCT imaging, digital X-rays, soft-tissue lasers and same-day crowns we use at our Kansas City northland dental office, and why they matter.',
  metaKeywords:
    'kansas city dental technology, northland dentist, 3d cbct imaging, digital x-rays kansas city, same day crowns, intraoral scanner',
  eyebrow: 'Our Technology',
  h1: 'Dental Technology That Earns Its Place',
  heroIntro:
    'Every piece of equipment in our Kansas City northland practice earns its place by making treatment safer, faster or more comfortable. Here is what we use, and why each tool matters to you.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt:
    'Modern dental operatory with digital imaging equipment at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 90, suffix: '%', label: 'Less radiation than film X-rays' },
    { value: 20, suffix: ' sec', label: 'Typical 3D CBCT scan time' },
    { value: 2, suffix: ' hrs', label: 'Average same-day crown visit' }
  ],
  schemaType: 'MedicalWebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'why-it-matters',
      eyebrow: 'Why it matters',
      h2: 'Better Tools Mean Gentler, More Predictable Care',
      body: [
        'Dentistry has changed more in fifteen years than in the fifty before, and most of that change is invisible from the patient chair. Every upgrade we make has to answer one question: does this improve the experience or the outcome for the person in the chair?',
        'That test is why we invested in 3D imaging rather than a bigger waiting room, and why our hygienists scan instead of reaching for impression trays. You should be able to see what we see.'
      ]
    },
    {
      type: 'cards',
      id: 'equipment',
      eyebrow: 'The equipment list',
      h2: 'The Dental Technology We Use, and What It Does for You',
      intro: 'These are the tools patients notice most during a visit.',
      columns: 3,
      items: [
        {
          icon: 'scan',
          title: '3D CBCT imaging',
          text: 'A cone-beam scan builds a 3D model of your jaw in about twenty seconds, letting us plan implants before any incision.'
        },
        {
          icon: 'camera',
          title: 'Intraoral digital scanning',
          text: 'A handheld wand replaces impression trays, so there is no goop and no gagging. You watch the model appear on screen.'
        },
        {
          icon: 'image',
          title: 'Digital X-rays',
          text: 'Sensors capture an image in seconds using about 80 to 90 percent less radiation than traditional film.'
        },
        {
          icon: 'microscope',
          title: 'Intraoral cameras',
          text: 'A pen-sized camera puts a live picture of your tooth on the monitor so you see the problem yourself.'
        },
        {
          icon: 'zap',
          title: 'Soft-tissue lasers',
          text: 'A diode laser treats gum pockets without a scalpel and often without stitches, so healing is faster.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Same-day crowns',
          text: 'We design the crown on screen and mill it from ceramic while you wait, usually in one two-hour visit.'
        },
        {
          icon: 'activity',
          title: 'Electric handpieces',
          text: 'They run quieter and with far less vibration than the air-driven drills most people remember.'
        }
      ]
    },
    {
      type: 'table',
      id: 'xray-comparison',
      eyebrow: 'X-rays, honestly compared',
      h2: 'Digital X-rays Versus Traditional Film',
      intro: 'Both capture the same information. The difference is the dose, the speed and what you can see.',
      head: ['Feature', 'Digital X-rays', 'Traditional film'],
      rows: [
        ['Radiation dose', 'About 80–90% lower', 'Baseline reference'],
        ['Time to image', '2–5 seconds on screen', '4–5 minutes to develop'],
        ['Retakes', 'Rare, because images can be enhanced', 'Common when exposure is off'],
        ['Storage', 'Encrypted digital record', 'Physical film jacket'],
        ['Patient viewing', 'On screen, side by side with you', 'Held up to a light box']
      ],
      note: 'Digital X-rays still use a small amount of radiation. We take only the images your care requires.'
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Our Technology',
      intro: 'The things patients ask most about the equipment in our operatories.',
      items: [
        {
          q: 'Is a 3D CBCT scan safe?',
          a: 'Yes. A cone-beam scan uses a fraction of the radiation of a medical CT, and we order one only when it will change your treatment.'
        },
        {
          q: 'Do digital X-rays cost more than film?',
          a: 'No. They are included in your exam and are not billed differently, and the new patient special includes a full set for $99.'
        },
        {
          q: 'Will the intraoral scanner make me gag?',
          a: 'Almost never. The wand is small, nothing sets in your mouth, and you can breathe normally throughout.'
        },
        {
          q: 'Are same-day crowns as strong as lab-made ones?',
          a: 'Yes. They are milled from the same solid ceramic blocks a lab would use, so strength and fit are comparable.'
        },
        {
          q: 'Is laser gum treatment painful?',
          a: 'Most patients describe pressure rather than pain, and we numb the area first. Healing is usually faster than traditional surgery.'
        },
        {
          q: 'Do you use nitrous oxide for nervous patients?',
          a: 'Yes. It is available for most appointments and wears off within minutes, so you can drive yourself home.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come see the difference for yourself',
      text: 'Book a visit and we will show you the scanner, the 3D imaging and the sterilisation room, then explain exactly what your treatment plan involves.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Is a 3D CBCT scan safe?',
      a: 'Yes. A cone-beam scan uses a fraction of the radiation of a medical CT, and we order one only when it will change your treatment.'
    },
    {
      q: 'Do digital X-rays cost more than film?',
      a: 'No. They are included in your exam and are not billed differently, and the new patient special includes a full set for $99.'
    },
    {
      q: 'Will the intraoral scanner make me gag?',
      a: 'Almost never. The wand is small, nothing sets in your mouth, and you can breathe normally throughout.'
    },
    {
      q: 'Are same-day crowns as strong as lab-made ones?',
      a: 'Yes. They are milled from the same solid ceramic blocks a lab would use, so strength and fit are comparable.'
    },
    {
      q: 'Is laser gum treatment painful?',
      a: 'Most patients describe pressure rather than pain, and we numb the area first. Healing is usually faster than traditional surgery.'
    },
    {
      q: 'Do you use nitrous oxide for nervous patients?',
      a: 'Yes. It is available for most appointments and wears off within minutes, so you can drive yourself home.'
    }
  ],
  cta: {
    h2: 'Come see the difference for yourself',
    text: 'Book a visit and we will show you the scanner, the 3D imaging and the sterilisation room, then explain exactly what your treatment plan involves.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
