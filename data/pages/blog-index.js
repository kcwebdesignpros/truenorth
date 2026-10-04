'use strict';
/**
 * Blog index — the practice editorial hub. Renders every published article
 * with a topic filter, plus the standards behind the journal.
 */

module.exports = {
  slug: 'blog-index',
  path: '/blog',
  name: 'Blog',
  metaTitle: 'Dental Health Blog | Kansas City Northland | TrueNorth',
  metaDescription:
    'Practical dental advice for Kansas City northland families, written by TrueNorth Dental clinicians who treat them and reviewed by a dentist before publishing.',
  metaKeywords:
    'dental blog kansas city, northland dentist advice, oral health articles, preventive dental care kansas city, dentist northland blog',
  eyebrow: 'Oral health journal',
  h1: 'Practical dental advice for Kansas City families',
  heroIntro:
    'Every article in this journal is written by a TrueNorth clinician, reviewed by a dentist before it goes live, and written for families across the Kansas City northland.',
  heroImage: '/img/svc-general-dentistry.webp',
  heroImageAlt: 'Gloved hands performing a routine dental exam at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 5, label: 'In-depth articles in the journal' },
    { value: 4, label: 'Clinicians who write them' },
    { value: 2, label: 'New articles added most months' },
    { value: 1401, suffix: '+', label: 'Patient reviews behind our advice' }
  ],
  schemaType: 'Blog',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'blog-grid',
      id: 'all-articles',
      eyebrow: 'Read the journal',
      h2: 'Every article we have published',
      intro:
        'Below is every piece we have written, newest first. Use the topic filter to find the two or three articles that match your situation.'
    },
    {
      type: 'cards',
      id: 'topics',
      eyebrow: 'What we cover',
      h2: 'The topics the journal returns to',
      intro:
        'Six subjects come up again and again in our chairs, so they are the ones the journal returns to most.',
      columns: 3,
      items: [
        {
          icon: 'shield-check',
          title: 'Preventive care',
          text: 'Cleanings, checkups, fluoride and home care. This topic saves the most teeth and costs the least money.'
        },
        {
          icon: 'braces',
          title: 'Orthodontics',
          text: 'Braces, clear aligners and the right timing for children, teens and adults.'
        },
        {
          icon: 'first-aid',
          title: 'Emergency care',
          text: 'What to do in the first thirty minutes of a broken or knocked-out tooth.'
        },
        {
          icon: 'implant',
          title: 'Implant dentistry',
          text: 'What implants cost, how long healing takes and how to care for one for decades.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Cosmetic dentistry',
          text: 'Whitening, veneers and bonding, explained without hype and with honest limits.'
        },
        {
          icon: 'baby',
          title: 'Children’s dentistry',
          text: 'First visits, sealants, mouthguards and cavity prevention for growing teeth.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'who-writes',
      eyebrow: 'Who writes this',
      h2: 'Written by the clinicians who treat you',
      body: [
        'Every article is written by the clinicians who sit beside you in the chair. Dr. Amelia Hart, Dr. Marcus Reed, Dr. Priya Nair and lead hygienist Jordan Ellis each write about what they practise daily.',
        'A dentist reviews each piece before it goes live, checking the clinical claims and our local cost figures. If a sentence cannot be supported, it comes out.'
      ]
    },
    {
      type: 'prose',
      id: 'editorial-standard',
      eyebrow: 'How we write',
      h2: 'The standard behind every article',
      body: [
        'We do not use scare tactics, and we do not upsell. Where a simpler treatment works well, the journal says so rather than steering you to the most expensive option.',
        'We write in plain English and check our sources against guidance from the American Dental Association, with costs that reflect what we charge in Kansas City.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about the journal',
      intro: 'What readers ask us most about the journal itself.',
      items: [
        {
          q: 'Who writes the articles in this journal?',
          a: 'Our own clinicians do, from Dr. Hart to our lead hygienist. No article is outsourced to an outside agency.'
        },
        {
          q: 'Is everything reviewed before it is published?',
          a: 'Yes. A dentist reads every article, checks the clinical claims and confirms the cost figures before it goes live.'
        },
        {
          q: 'How often do you publish new articles?',
          a: 'Most months, and sometimes two. We would rather publish one careful piece than five thin ones.'
        },
        {
          q: 'Can I trust the dental advice I find online?',
          a: 'Check who wrote it, look at the date and be wary of any page that pushes a single product.'
        },
        {
          q: 'Does the journal ever try to sell me treatment?',
          a: 'No. Where a cheaper option works well, the article says so, and cost is only discussed in a written estimate.'
        },
        {
          q: 'Can I ask about an article at my next visit?',
          a: 'Please do. Bring the article or just the question and your dentist will explain how it applies to you.'
        },
        {
          q: 'When should I call the practice instead of reading more?',
          a: 'Call as soon as you have pain, swelling or a broken tooth. Our emergency line at (816) 555-0199 is answered 24 hours a day.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Who writes the articles in this journal?',
      a: 'Our own clinicians do, from Dr. Hart to our lead hygienist. No article is outsourced to an outside agency.'
    },
    {
      q: 'Is everything reviewed before it is published?',
      a: 'Yes. A dentist reads every article, checks the clinical claims and confirms the cost figures before it goes live.'
    },
    {
      q: 'How often do you publish new articles?',
      a: 'Most months, and sometimes two. We would rather publish one careful piece than five thin ones.'
    },
    {
      q: 'Can I trust the dental advice I find online?',
      a: 'Check who wrote it, look at the date and be wary of any page that pushes a single product.'
    },
    {
      q: 'Does the journal ever try to sell me treatment?',
      a: 'No. Where a cheaper option works well, the article says so, and cost is only discussed in a written estimate.'
    },
    {
      q: 'Can I ask about an article at my next visit?',
      a: 'Please do. Bring the article or just the question and your dentist will explain how it applies to you.'
    },
    {
      q: 'When should I call the practice instead of reading more?',
      a: 'Call as soon as you have pain, swelling or a broken tooth. Our emergency line at (816) 555-0199 is answered 24 hours a day.'
    }
  ],
  cta: {
    h2: 'Have a question the journal does not answer?',
    text: 'Call the northland practice or book online, and a real person will get back to you, usually the same day.',
    primary: { label: 'Book an appointment', path: '/contact#book' }
  }
};
