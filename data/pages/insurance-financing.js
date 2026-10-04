'use strict';
/**
 * Insurance & Financing page. How dental coverage works, accepted carriers,
 * benefits verification, the membership plan, financing and appeals.
 */

module.exports = {
  slug: 'insurance-financing',
  path: '/insurance-financing',
  name: 'Insurance & Financing',
  metaTitle: 'Insurance & Financing | TrueNorth Dental Kansas City',
  metaDescription:
    'Understand dental insurance, annual maximums and financing at our Kansas City northland practice, including a $29 membership plan and flexible payment options.',
  metaKeywords:
    'dental insurance kansas city, dental financing northland, dentist accepts delta dental kansas city, dental membership plan kansas city, carecredit dentist kansas city mo',
  eyebrow: 'Coverage and payment',
  h1: 'Dental Insurance and Financing, Explained Clearly',
  heroIntro:
    'Insurance paperwork should never stand between you and a healthy mouth. Here is how dental coverage really works, what we accept, and every option we offer when you are paying yourself.',
  heroImage: '/img/cta-smile.webp',
  heroImageAlt: 'Group of happy people laughing outdoors, patients of TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 12, label: 'Insurance carriers accepted' },
    { value: 29, prefix: '$', suffix: '/mo', label: 'In-house membership plan' },
    { value: 15, suffix: '%', label: 'Member discount on other treatment' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,401 reviews' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'how-insurance-works',
      eyebrow: 'The basics',
      h2: 'How Dental Insurance Actually Works',
      body: [
        'Most dental plans are not insurance in the way you might expect. Each year your plan sets an annual maximum, often somewhere between $1,000 and $2,000, and once that amount is used the plan pays nothing more until your benefits reset. It is a cap on what your insurer will contribute, not an open-ended promise to cover whatever your teeth need. Knowing that number tells you a lot about how much care your plan will realistically cover in a single year.',
        'You also have a deductible, the amount you pay out of pocket before benefits begin, usually between $50 and $150. Preventive care such as cleanings and exams is almost always exempt from the deductible, which is why a routine check-up frequently costs you nothing at all. It is one of the few genuinely good deals in healthcare. If you are unsure whether your plan waives the deductible for preventive care, ask us and we will check for you.',
        'Plans then group treatment into three tiers. Preventive care is typically covered at 100%, basic work such as fillings at around 80%, and major work such as crowns, bridges and implants at roughly 50%. That is why your cleaning may be free while half of a $1,200 crown comes straight out of your pocket, even though both are helping the same tooth.',
        'The logic behind it is simple once you see it. Insurers pay generously for the cheap care that prevents expensive problems and less for the costly repairs themselves. Understanding those three tiers is the single most useful thing you can do to predict what any treatment will cost before you agree to it.',
        'One practical takeaway worth remembering: if you have treatment that can wait, it often makes sense to plan it so your benefits are not split awkwardly across two calendar years. A crown started in December and finished in January can end up using two deductibles instead of one. We will help you time larger work around your plan year so you get the most from the maximum you have already paid for, without delaying anything that is genuinely urgent.'
      ]
    },
    {
      type: 'marquee',
      h2: 'Insurance Plans We Accept',
      items: [
        'Delta Dental',
        'Cigna',
        'Aetna',
        'MetLife',
        'Guardian',
        'UnitedHealthcare',
        'Blue Cross Blue Shield of Kansas City',
        'Humana',
        'Ameritas',
        'Principal',
        'Careington',
        'Assurant'
      ]
    },
    {
      type: 'split',
      id: 'verify',
      eyebrow: 'No surprises',
      h2: 'We Check Your Benefits Before Treatment Begins',
      body: [
        'Before your appointment, our front-office team contacts your insurer to confirm your annual maximum, your deductible and the exact percentage your plan pays for each type of treatment. We do this for every new patient and again at the start of each benefit year, because plans change quietly and a coverage detail that was true last January may not be true this January.',
        'After your exam you receive a written estimate showing the total cost, what your insurance is expected to cover and what you will owe. Nothing is scheduled until you have that number in hand and have had a chance to ask questions about it. If the estimate does not make sense to you, we will sit down and go through it line by line until it does.',
        'We also flag anything that looks like it may be denied before treatment begins, so you can decide whether to proceed now, wait for the next benefit year or explore financing instead. Knowing the answer in advance is almost always cheaper than discovering it after the work is finished and the claim comes back. You are never asked to sign anything before you understand what you are signing.'
      ],
      list: [
        'Annual maximum confirmed in advance',
        'Deductible and coverage percentages checked',
        'A written estimate before any treatment'
      ],
      image: '/img/about-dentist-patient.webp',
      imageAlt: 'Dentist reviewing a treatment plan with a smiling patient at TrueNorth Dental',
      reverse: false,
      cta: { label: 'Ask about your coverage', path: '/contact' }
    },
    {
      type: 'cards',
      id: 'financing',
      eyebrow: 'Payment options',
      h2: 'Financing Options for Larger Treatment',
      intro: 'When treatment is bigger than one paycheck, these partners spread the cost into manageable payments.',
      columns: 2,
      items: [
        {
          icon: 'credit-card',
          title: 'CareCredit',
          text: 'A healthcare credit card with 6, 12, 18 and 24-month interest-free promotional periods on approved credit. Applying takes a few minutes and it works well for treatment over $200. You will know your exact monthly payment before you commit to anything.'
        },
        {
          icon: 'zap',
          title: 'Cherry',
          text: 'Cherry gives you an instant approval decision and lets you see your options without a hard credit check. It is a fast way to break a larger plan into monthly payments you can plan around. Approval takes seconds and checking your options does not affect your credit score.'
        },
        {
          icon: 'wallet',
          title: 'Sunbit',
          text: 'Point-of-sale financing with 90-day no-interest promotional periods and approval decisions in seconds. No hard credit check is required simply to see what you qualify for. It works especially well for unexpected treatment, and you can be approved and paying within minutes.'
        },
        {
          icon: 'percent',
          title: 'In-House Membership',
          text: 'Our own $29-a-month plan for patients without insurance. It includes two cleanings, exams and X-rays a year plus 15% off everything else, with no yearly maximum to run out of. It renews annually, you can cancel at any time, and children can be added to a family plan at a lower rate.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'no-insurance',
      eyebrow: 'Paying yourself',
      h2: 'No Insurance? You Still Have Good Options',
      body: [
        'If you do not have dental insurance, our in-house membership plan is the simplest way to keep costs predictable. For $29 a month per adult you receive two cleanings, two exams and any needed X-rays each year, plus 15% off every other treatment we provide. It is designed for the patient who wants routine care without the paperwork of a traditional plan.',
        'There is no annual maximum, no deductible and no waiting period, and you can use the 15% discount the same day you join. Children can be added to a family plan at a lower rate, and there are no claim forms to file, because there is no insurer in the middle. You pay the practice directly and the practice takes care of you.',
        'If you have a health savings account or a flexible spending account through work, you can use those pre-tax dollars for dental care. Cleanings, fillings, crowns, implants and even some orthodontics usually qualify, and we will give you an itemised receipt so you can submit it for reimbursement without chasing down paperwork later.',
        'One tip worth remembering: FSA funds usually do not roll over at the end of the year. If you have money left late in December, a cleaning, a whitening or a treatment you had been putting off is a sensible way to use it before it disappears. Ask our front desk and we will help you plan it.',
        'Membership is not a subscription you forget about and cannot cancel. It renews annually, you can stop at any time, and every dollar you spend stays with this practice rather than a distant insurance company. There is no pre-authorisation process and no surprise exclusions buried in a policy document. Ask us for a one-page summary and we will show you exactly what is included before you join. If you are comparing it with a policy through work, bring both and we will help you see which one leaves you better off.'
      ]
    },
    {
      type: 'table',
      id: 'membership',
      eyebrow: 'Compare',
      h2: 'How the Membership Plan Compares',
      intro: 'A side-by-side look at our in-house plan and a typical dental insurance policy.',
      head: ['What you get', 'Membership plan', 'Typical insurance'],
      rows: [
        ['Monthly cost', '$29 per adult', 'Premium taken from pay'],
        ['Two cleanings a year', 'Included', 'Usually 100% covered'],
        ['Two exams and X-rays a year', 'Included', 'Usually 100% covered'],
        ['Annual maximum', 'None', 'Often $1,000–$2,000'],
        ['Deductible', 'None', 'Usually $50–$150'],
        ['Discount on other treatment', '15% off everything else', 'About 50% on major work'],
        ['Waiting periods', 'None', 'Sometimes 6–12 months'],
        ['Claim forms', 'None', 'Filed by our office']
      ],
      note: 'Membership pricing is per adult. Family plans and child memberships are available at a lower rate — ask our front desk for details.'
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Insurance, in Numbers',
      intro: 'A few figures that explain how we handle coverage and claims.',
      items: [
        { value: 12, label: 'Insurance carriers accepted' },
        { value: 96, suffix: '%', label: 'Of claims filed the same day as treatment' },
        { value: 3, suffix: ' days', label: 'Faster-than-benchmark average claim turnaround' },
        { value: 15, suffix: '%', label: 'Member discount on all other treatment' }
      ]
    },
    {
      type: 'prose',
      id: 'payment-claims',
      eyebrow: 'Billing and appeals',
      h2: 'Paying for Treatment, and What Happens If a Claim Is Denied',
      body: [
        'Payment for treatment is due on the day of your visit unless you have arranged financing in advance. We accept cash, all major cards and the financing partners listed above, and you will always have a written estimate in hand before anything begins. If you are setting up a payment plan, our front desk will help you apply before your appointment so there is no delay on the day.',
        'That written estimate is our best information, not an ironclad guarantee. Occasionally an insurer pays less than expected because of a plan exclusion, a missing waiting period or a benefit that has already been used that year. If that happens, we will contact you before adding anything to your balance, so nothing appears on a statement you did not expect.',
        'If a claim is denied outright, Sofia Delgado, our practice manager, handles the appeal for you at no charge. She reviews the explanation of benefits, gathers the clinical notes and X-rays your insurer asks for, and files a formal appeal on your behalf. You do not have to make a single phone call to the insurance company unless you want to.',
        'Denials are frequently reversed once the right documentation is submitted, which is why we treat the first denial as the beginning of a conversation rather than the end. Sofia has untangled claims with every major carrier doing business in Missouri, and she will keep you updated on where things stand instead of leaving you to chase it yourself.',
        'Our goal is simple: you should never open a statement from us and feel ambushed by a charge you did not agree to. If anything about your bill is unclear, call and ask for Sofia. She would rather spend ten minutes explaining a line item than have you wonder whether you were treated fairly, and she will always tell you the truth about what is covered. That conversation is free, and it is part of the care rather than an extra.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Insurance and Financing Questions',
      intro: 'What patients most often ask about coverage, cost and paying over time.',
      items: [
        {
          q: 'Do you accept my dental insurance?',
          a: 'We work with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. Call us with your plan details and we will confirm your specific coverage. If your plan is not on that list, call anyway, because we can often still file an out-of-network claim on your behalf.'
        },
        {
          q: 'Why does insurance pay 100% for a cleaning but only 50% for a crown?',
          a: 'Insurers group treatment into tiers: preventive care at 100%, basic work like fillings around 80%, and major work like crowns around 50%. They pay most for the care that prevents expensive problems and less for the costly repairs themselves. Once you know your plan’s tiers, you can estimate most treatment costs before you walk in the door.'
        },
        {
          q: 'What is an annual maximum?',
          a: 'It is the most your plan will pay for dental treatment in a calendar year, often between $1,000 and $2,000. Once it is used, the plan pays nothing more until your benefits reset the following January. That is why we help you time larger treatment so you do not waste benefits you have already paid for through your premiums.'
        },
        {
          q: 'What if I do not have dental insurance?',
          a: 'Our in-house membership plan costs $29 a month per adult and includes two cleanings, exams and X-rays a year plus 15% off everything else. It has no annual maximum, no deductible and no waiting period. You can join on the day of your first visit and start using the 15% discount immediately.'
        },
        {
          q: 'Can I spread the cost of treatment over time?',
          a: 'Yes. We work with CareCredit, Cherry and Sunbit, which offer interest-free promotional periods and fast approval decisions. Our front desk will help you compare the options and apply before your appointment. Applying takes only a few minutes and we will walk you through it step by step.'
        },
        {
          q: 'Can I use my HSA or FSA for dental work?',
          a: 'Usually, yes. Cleanings, fillings, crowns, implants and some orthodontics typically qualify for health savings and flexible spending accounts. We provide an itemised receipt so you can submit it for reimbursement. Remember that FSA funds usually expire at year end, so plan any treatment before December if you still have a balance.'
        },
        {
          q: 'Will I know the cost before treatment starts?',
          a: 'Always. After your exam you receive a written estimate showing the total, what your insurance is expected to cover and what you will owe. Nothing is scheduled until you have seen that number and had your questions answered. If the estimate ever changes, we contact you before adding anything to your balance.'
        },
        {
          q: 'What happens if my insurance denies a claim?',
          a: 'Sofia Delgado, our practice manager, appeals it for you at no charge. She reviews the denial, submits the clinical notes and X-rays your insurer needs, and keeps you updated until the claim is resolved. You do not need to call the insurance company yourself unless you would like to.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Let Us Handle the Paperwork',
      text: 'Call us with your insurance details and we will verify your benefits before your visit. If you are paying yourself, we will walk you through every option.',
      primary: { label: 'Book an appointment', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Do you accept my dental insurance?',
      a: 'We work with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. Call us with your plan details and we will confirm your specific coverage. If your plan is not on that list, call anyway, because we can often still file an out-of-network claim on your behalf.'
    },
    {
      q: 'Why does insurance pay 100% for a cleaning but only 50% for a crown?',
      a: 'Insurers group treatment into tiers: preventive care at 100%, basic work like fillings around 80%, and major work like crowns around 50%. They pay most for the care that prevents expensive problems and less for the costly repairs themselves. Once you know your plan’s tiers, you can estimate most treatment costs before you walk in the door.'
    },
    {
      q: 'What is an annual maximum?',
      a: 'It is the most your plan will pay for dental treatment in a calendar year, often between $1,000 and $2,000. Once it is used, the plan pays nothing more until your benefits reset the following January. That is why we help you time larger treatment so you do not waste benefits you have already paid for through your premiums.'
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'Our in-house membership plan costs $29 a month per adult and includes two cleanings, exams and X-rays a year plus 15% off everything else. It has no annual maximum, no deductible and no waiting period. You can join on the day of your first visit and start using the 15% discount immediately.'
    },
    {
      q: 'Can I spread the cost of treatment over time?',
      a: 'Yes. We work with CareCredit, Cherry and Sunbit, which offer interest-free promotional periods and fast approval decisions. Our front desk will help you compare the options and apply before your appointment. Applying takes only a few minutes and we will walk you through it step by step.'
    },
    {
      q: 'Can I use my HSA or FSA for dental work?',
      a: 'Usually, yes. Cleanings, fillings, crowns, implants and some orthodontics typically qualify for health savings and flexible spending accounts. We provide an itemised receipt so you can submit it for reimbursement. Remember that FSA funds usually expire at year end, so plan any treatment before December if you still have a balance.'
    },
    {
      q: 'Will I know the cost before treatment starts?',
      a: 'Always. After your exam you receive a written estimate showing the total, what your insurance is expected to cover and what you will owe. Nothing is scheduled until you have seen that number and had your questions answered. If the estimate ever changes, we contact you before adding anything to your balance.'
    },
    {
      q: 'What happens if my insurance denies a claim?',
      a: 'Sofia Delgado, our practice manager, appeals it for you at no charge. She reviews the denial, submits the clinical notes and X-rays your insurer needs, and keeps you updated until the claim is resolved. You do not need to call the insurance company yourself unless you would like to.'
    }
  ],
  cta: {
    h2: 'Let Us Handle the Paperwork',
    text: 'Call us with your insurance details and we will verify your benefits before your visit. If you are paying yourself, we will walk you through every option.',
    primary: { label: 'Book an appointment', path: '/contact' }
  }
};
