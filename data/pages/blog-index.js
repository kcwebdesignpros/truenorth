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
        'Below you will find every piece we have written, newest first. Use the topic filter to narrow the list to the subject you care about, then read the two or three articles that match your situation rather than all of them.'
    },
    {
      type: 'prose',
      id: 'who-writes',
      eyebrow: 'Who writes this',
      h2: 'Written by the clinicians who treat you',
      body: [
        'The articles in this journal are written by the same people who sit beside you in the chair. Dr. Amelia Hart, Dr. Marcus Reed and Dr. Priya Nair each write about the part of dentistry they practise every day, and Jordan Ellis, our lead hygienist, writes most of the preventive and home-care material. Nobody here is a hired content writer working from a brief. When you read a piece about clear aligners, it was written by the orthodontist who fits them.',
        'That distinction matters more than it might sound. Dental advice written by a generalist for a general audience tends to stay vague, because the writer has to hedge every sentence. A working clinician can be specific. They can tell you what a root canal actually costs in Kansas City, which tooth movements aligners handle well and which they do not, and what they genuinely see in patients who waited six months too long. Specific advice is more useful, and it is also far easier to check.',
        'Every article is reviewed by a dentist before it goes live, even when a hygienist or a coordinator drafted the first version. A second clinician reads the whole thing with a critical eye, checks the clinical claims against current guidance, and corrects anything that overstates the evidence. If a sentence cannot be supported, it comes out. That review step is why nothing here reads like a sales page.',
        'We write for one reader: a family in the northland deciding whether a twinge is worth a phone call, whether to book an orthodontic consultation, or whether a quote they have been given is fair. If a piece does not help that person make a better decision about their teeth, it does not get published. That is a lower bar to clear than it sounds, and a useful one. It keeps us honest about length, tone and what actually belongs in the journal.'
      ]
    },
    {
      type: 'cards',
      id: 'topics',
      eyebrow: 'What we cover',
      h2: 'The topics the journal returns to',
      intro:
        'Six subjects come up again and again in our chairs, so they are the ones the journal returns to most. Each has its own articles, and each links back to the service page where you can read the clinical detail.',
      columns: 3,
      items: [
        {
          icon: 'shield-check',
          title: 'Preventive care',
          text: 'Cleanings, checkups, fluoride and home care. This is the topic that saves the most teeth and costs the least money, which is why it appears in the journal more than any other.'
        },
        {
          icon: 'braces',
          title: 'Orthodontics',
          text: 'Braces, clear aligners and the timing of treatment for children, teens and adults. We explain who does best with each option rather than steering every reader to one answer.'
        },
        {
          icon: 'first-aid',
          title: 'Emergency care',
          text: 'What to do in the first thirty minutes of a broken tooth, a knocked-out tooth or sudden severe pain, and when a problem belongs in a hospital instead of a dental chair.'
        },
        {
          icon: 'implant',
          title: 'Implant dentistry',
          text: 'What implants cost, how long healing really takes, and how to look after one for decades. Our implant articles answer the timeline questions patients ask before they commit.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Cosmetic dentistry',
          text: 'Whitening, veneers and bonding, explained without hype. We cover what each treatment can and cannot do, and which results are realistic for your own teeth.'
        },
        {
          icon: 'baby',
          title: 'Children’s dentistry',
          text: 'First visits, sealants, sports mouthguards and cavity prevention for growing teeth. A good share of our family appointments begin with a parent reading one article and booking a checkup.'
        }
      ]
    },
    {
      type: 'split',
      id: 'why-these-topics',
      eyebrow: 'Why these subjects',
      h2: 'Why these topics matter to northland families',
      body: [
        'The northland is full of young families, and the dental questions that come with that are practical rather than abstract. A parent wants to know whether a child’s first checkup should be at one or three, whether a mouthguard is worth the money for a rec-league season, and how much a surprise filling will cost before payday. Those are the questions the journal tries to answer with real numbers. A parent reading about sealants before a back-to-school checkup, or an adult comparing aligner costs before a consultation, is using the journal exactly as intended.',
        'Adult readers bring a different set. Many have moved to Kansas City for work and left a dentist they trusted back home, and they are looking for someone who will explain a treatment rather than simply schedule it. Others have put off care for years and want to understand what a first visit involves before they pick up the phone. Writing plainly about those situations is our way of lowering the barrier to walking through the door.'
      ],
      list: [
        'Practical answers, with real local costs',
        'No scare tactics and no upselling',
        'Written for families across Clay and Platte County'
      ],
      image: '/img/about-dentist-patient.webp',
      imageAlt: 'A dentist explaining treatment to a smiling patient at TrueNorth Dental in Kansas City',
      reverse: false,
      cta: { label: 'Meet the clinicians', path: '/doctors' }
    },
    {
      type: 'prose',
      id: 'editorial-standard',
      eyebrow: 'How we write',
      h2: 'The editorial standard behind every article',
      body: [
        'Four rules govern everything we publish. The first is that we do not use scare tactics. Fear sells dentistry, and it also drives people away from the chair for a decade. A cavity is a small, fixable problem, and we describe it as one. When something is genuinely urgent, we say so plainly, but we do not inflate routine care into an emergency in order to prompt a booking.',
        'The second rule is that we do not upsell. You will not find an article that quietly concludes you need the most expensive option. Where a simpler treatment works well, the journal says so. Our implant article explains when a bridge or a denture is the smarter choice, and our orthodontic article explains when waiting a year is better than starting treatment today.',
        'The third rule is plain English. We avoid jargon, and when a technical term is unavoidable, such as osseointegration or peri-implantitis, we explain it in the same sentence. The fourth rule is that we check our sources. Clinical claims are measured against guidance from the American Dental Association and the specialty academies, and cost ranges reflect what we actually charge in Kansas City rather than national averages pulled from a survey.',
        'Those rules mean the journal sometimes says less than a marketing page would. We would rather give you a shorter, more honest answer than a longer one built to move you toward a purchase.'
      ]
    },
    {
      type: 'steps',
      id: 'how-to-use',
      eyebrow: 'Getting the most from it',
      h2: 'How to use this journal',
      intro:
        'The journal is not meant to be read cover to cover. It works best when you come to it with a question, and there are four simple ways to get value from it.',
      items: [
        {
          title: 'Search by topic',
          text: 'Start with the topic filter on the article grid above. If you are weighing aligners against braces, or wondering whether a symptom needs attention, jump straight to that category and skip the rest.'
        },
        {
          title: 'Read only what fits your situation',
          text: 'You do not need to read every article. Find the two or three that match your circumstances, read those properly, and leave the others. A short, focused reading list is far easier to act on.'
        },
        {
          title: 'Bring your questions to your next visit',
          text: 'Write down what you want to ask and bring it in. Your dentist would much rather answer a question you found here than have you worry about it quietly for six months.'
        },
        {
          title: 'Check the date on anything older',
          text: 'Dental guidance changes over time. Each article shows when it was last updated, and if a piece is more than a couple of years old, treat the details as a starting point and ask us what still applies.'
        },
        {
          title: 'Use the articles to prepare, not to diagnose',
          text: 'The journal is best used to frame the right question before an appointment. Read enough to know what to ask, then let an exam and an X-ray give you the actual answer.'
        }
      ]
    },
    {
      type: 'checklist',
      id: 'online-info',
      eyebrow: 'Reading health advice online',
      h2: 'How to get the most from dental information online',
      intro:
        'The internet is a useful first stop and a poor final one. These habits will help you tell solid advice from the rest.',
      columns: 2,
      items: [
        'Check who wrote it, and whether they treat patients themselves',
        'Look for the date, because dental guidance does change',
        'Prefer general principles over promises of a guaranteed result',
        'Be wary of any page that ends by pushing one specific product',
        'Treat photographs of extreme cases as exceptions, not the norm',
        'Ignore anything that tells you to avoid the dentist altogether',
        'Use two or three sources rather than trusting a single page',
        'Remember that one symptom can have several possible causes',
        'Write down your questions instead of self-diagnosing from a search',
        'Call the practice when a symptom is painful, swollen or getting worse'
      ]
    },
    {
      type: 'stats',
      id: 'journal-numbers',
      h2: 'The journal in numbers',
      intro: 'A small library, written slowly and checked carefully.',
      items: [
        { value: 5, label: 'In-depth articles published so far' },
        { value: 4, label: 'Clinicians who write and review' },
        { value: 100, suffix: '%', label: 'Reviewed by a dentist before publishing' },
        { value: 15, suffix: ' yrs', label: 'Caring for the Kansas City northland' }
      ]
    },
    {
      type: 'prose',
      id: 'publishing',
      eyebrow: 'Staying current',
      h2: 'How often we publish, and where common questions are answered',
      body: [
        'We add a new article most months, and occasionally two, which keeps the journal current without flooding your reading list. Each piece takes longer to write than it looks, because a clinician drafts it, a second dentist reviews it, and the cost figures are checked against what we actually charge before it is published. That is why we would rather publish one useful article than five thin ones.',
        'If you would like new articles as they arrive, follow the practice on Facebook or Instagram, where we post each one, or simply check this page. We do not send marketing email, so there is no list to join and nothing to unsubscribe from later.',
        'Some questions come up so often in the chair that they deserve a permanent answer. Whether you really need a checkup every six months, what a first visit costs, whether insurance covers a crown, and how long an implant takes are all questions we hear weekly. The articles on this page answer them in full, and our general FAQ page at /faq collects the shorter ones in one place. If you want the long version of a specific question, our comparison of clear aligners and braces at /blog/clear-aligners-vs-braces and our guide to the first thirty minutes of a dental emergency at /blog/dental-emergency-what-to-do are good places to start. If you cannot find what you need, the practice phone line is always faster than another search.'
      ]
    },
    {
      type: 'text',
      id: 'limits',
      h2: 'What this journal cannot do',
      body: [
        'No article can examine your teeth, and that is the honest limit of any online health information, ours included. Reading about a symptom is a reasonable way to decide whether to book, but it is not a diagnosis. Two people with the same ache can need very different treatment, and only an exam and an X-ray can tell them apart.',
        'Please do not use the journal to self-treat. Do not start a course of leftover antibiotics, file down a rough edge, or wait out a swelling because a page made it sound manageable. If you are in pain, if your face or jaw is swelling, if you have trouble swallowing, or if a tooth has been knocked out, call us on (816) 555-0199. Our emergency line is answered 24 hours a day, and a two minute conversation will always beat guessing.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about the journal',
      intro: 'These are the questions readers send us most often about the journal itself.',
      items: [
        {
          q: 'Who writes the articles in this journal?',
          a: 'They are written by our own clinicians. Dr. Amelia Hart, Dr. Marcus Reed and Dr. Priya Nair each write about the area they practise daily, and Jordan Ellis, our lead hygienist, writes most of the preventive and home-care pieces. No article is outsourced to an outside content agency.'
        },
        {
          q: 'Is everything here reviewed before it is published?',
          a: 'Yes. Every article, whatever its author, is read by a dentist before it goes live. The reviewer checks the clinical claims, removes anything that overstates the evidence, and confirms the cost figures against what we actually charge in the northland. If a sentence cannot be supported, it does not stay.'
        },
        {
          q: 'How often do you publish new articles?',
          a: 'We add a new article most months, and sometimes two. We would rather publish one carefully reviewed piece than a handful of thin ones, so the pace is steady rather than constant. Older articles are updated when the guidance or our own pricing changes.'
        },
        {
          q: 'How can I be notified when a new article comes out?',
          a: 'Follow the practice on Facebook or Instagram, where each new piece is posted, or check this page from time to time. We do not run a marketing email list, so there is nothing to sign up for and no inbox to manage.'
        },
        {
          q: 'Can I trust the dental advice I find online?',
          a: 'Sometimes, and the source matters more than the search ranking. Check who wrote a page and whether they treat patients, look at the date, and be wary of anything that ends by pushing a single product. Use two or three sources, and treat what you read as a reason to book, not as a diagnosis.'
        },
        {
          q: 'Can I ask about an article at my next visit?',
          a: 'Please do. Bring the article, or just the question, and your dentist will walk through how it applies to your own teeth. We would far rather answer it in the chair than have you worry about it quietly for months, and it often makes the appointment more useful for both of us.'
        },
        {
          q: 'Does the journal ever try to sell me treatment?',
          a: 'No. There is no upselling in these pages. Where a cheaper option works well, the article says so, and our implant and orthodontic pieces both explain when waiting or choosing a simpler treatment is the better call. A written estimate at your visit is the only place cost is discussed.'
        },
        {
          q: 'When should I call the practice instead of reading more?',
          a: 'Call as soon as you have pain, swelling, a knocked-out tooth or a broken tooth, and do not wait to research it first. Our emergency line at (816) 555-0199 is answered 24 hours a day. For anything that is not urgent, the main line is (816) 555-0182.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Who writes the articles in this journal?',
      a: 'They are written by our own clinicians. Dr. Amelia Hart, Dr. Marcus Reed and Dr. Priya Nair each write about the area they practise daily, and Jordan Ellis, our lead hygienist, writes most of the preventive and home-care pieces. No article is outsourced to an outside content agency.'
    },
    {
      q: 'Is everything here reviewed before it is published?',
      a: 'Yes. Every article, whatever its author, is read by a dentist before it goes live. The reviewer checks the clinical claims, removes anything that overstates the evidence, and confirms the cost figures against what we actually charge in the northland. If a sentence cannot be supported, it does not stay.'
    },
    {
      q: 'How often do you publish new articles?',
      a: 'We add a new article most months, and sometimes two. We would rather publish one carefully reviewed piece than a handful of thin ones, so the pace is steady rather than constant. Older articles are updated when the guidance or our own pricing changes.'
    },
    {
      q: 'How can I be notified when a new article comes out?',
      a: 'Follow the practice on Facebook or Instagram, where each new piece is posted, or check this page from time to time. We do not run a marketing email list, so there is nothing to sign up for and no inbox to manage.'
    },
    {
      q: 'Can I trust the dental advice I find online?',
      a: 'Sometimes, and the source matters more than the search ranking. Check who wrote a page and whether they treat patients, look at the date, and be wary of anything that ends by pushing a single product. Use two or three sources, and treat what you read as a reason to book, not as a diagnosis.'
    },
    {
      q: 'Can I ask about an article at my next visit?',
      a: 'Please do. Bring the article, or just the question, and your dentist will walk through how it applies to your own teeth. We would far rather answer it in the chair than have you worry about it quietly for months, and it often makes the appointment more useful for both of us.'
    },
    {
      q: 'Does the journal ever try to sell me treatment?',
      a: 'No. There is no upselling in these pages. Where a cheaper option works well, the article says so, and our implant and orthodontic pieces both explain when waiting or choosing a simpler treatment is the better call. A written estimate at your visit is the only place cost is discussed.'
    },
    {
      q: 'When should I call the practice instead of reading more?',
      a: 'Call as soon as you have pain, swelling, a knocked-out tooth or a broken tooth, and do not wait to research it first. Our emergency line at (816) 555-0199 is answered 24 hours a day. For anything that is not urgent, the main line is (816) 555-0182.'
    }
  ],
  cta: {
    h2: 'Have a question the journal does not answer?',
    text: 'Call the northland practice or book online, and a real person will get back to you, usually the same day.',
    primary: { label: 'Book an appointment', path: '/contact#book' }
  }
};
