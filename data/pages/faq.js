'use strict';
/**
 * Frequently Asked Questions page — data/pages/faq.js
 * Rendered by views/page.ejs. Content only; no markup.
 * The page-level `faqs` array mirrors every question in the faq blocks below.
 */

module.exports = {
  slug: 'faq',
  path: '/faq',
  name: 'Frequently Asked Questions',
  metaTitle: 'Dental FAQ | TrueNorth Dental, Kansas City Northland',
  metaDescription:
    'Answers to the questions northland patients ask most — appointments, cost, insurance, comfort, kids, emergencies and your first visit to TrueNorth Dental.',
  metaKeywords:
    'kansas city dental faq, northland dentist questions, truenorth dental faq, dentist cost kansas city, dental insurance northland, emergency dentist faq kansas city',
  eyebrow: 'Good to know',
  h1: 'Frequently Asked Questions',
  heroIntro:
    'Everything patients ask us about appointments, cost, comfort, treatment and bringing the whole family — answered plainly, in one place, by the northland team that sees you.',
  heroImage: '/img/clinic-interior.webp',
  heroImageAlt: 'Bright modern dental operatory at TrueNorth Dental in Kansas City',
  heroStats: [
    { value: 42, label: 'Questions answered on this page' },
    { value: 48, suffix: ' hrs', label: 'Typical wait for a new patient visit' },
    { value: 2011, label: 'Answering northland questions since' }
  ],
  schemaType: 'FAQPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'faq-intro',
      eyebrow: 'Start here',
      h2: 'Straight answers, without the runaround',
      body: [
        'Most people arrive at a dentist with the same handful of questions. Will it hurt. What will it cost. Can I get in this week. Do you take my insurance. We hear these every single day, and we would much rather answer them clearly on this page than make you sit on hold to ask someone at a front desk.',
        'This page gathers the questions our front desk, our hygienists and our doctors are asked most often. They are grouped by topic so you can jump straight to the part that matters to you. If your question is not here, call us at (816) 555-0182 or email hello@truenorthdental.com and a real person will answer you, not a bot.',
        'A little context before you dive in. We are a family, cosmetic and implant practice in the Kansas City northland, open since 2011 and caring for more than 14,800 patients. We see emergencies the same day, we treat anxious patients with patience, and we put the cost in writing before we begin. The answers below explain how all of that works in practice.'
      ]
    },
    {
      type: 'cards',
      id: 'faq-services',
      eyebrow: 'Where to go next',
      h2: 'Explore the care you came here for',
      intro:
        'If you already know what you need, these service pages go deeper than a short answer can.',
      columns: 3,
      items: [
        {
          icon: 'tooth',
          title: 'General & Family Dentistry',
          text: 'Cleanings, exams, fillings and preventive care for every age. This page explains what happens at a routine visit and how we keep small problems small.',
          path: '/services/general-dentistry'
        },
        {
          icon: 'sparkles',
          title: 'Cosmetic Dentistry',
          text: 'Veneers, bonding and smile design with a digital mock-up you approve first. See how we plan cosmetic work so the result still looks like you.',
          path: '/services/cosmetic-dentistry'
        },
        {
          icon: 'tooth-sparkle',
          title: 'Teeth Whitening',
          text: 'In-office and take-home whitening, with a shade check and a sensitivity screen before we start. Find out how bright you can realistically go.',
          path: '/services/teeth-whitening'
        },
        {
          icon: 'implant',
          title: 'Dental Implants',
          text: 'Single teeth to full-arch restorations, planned with a 3D scan and placed in our office. Read how the process works from consult to final crown.',
          path: '/services/dental-implants'
        },
        {
          icon: 'aligner',
          title: 'Orthodontics',
          text: 'Clear aligners and braces for teens and adults, led by our orthodontist Dr. Priya Nair. See which option suits your case, and when waiting is wiser.',
          path: '/services/orthodontics'
        },
        {
          icon: 'first-aid',
          title: 'Emergency Dentistry',
          text: 'Same-day care for pain, breaks and knocked-out teeth, with a 24/7 line at (816) 555-0199. Find out what to do before you reach the chair.',
          path: '/services/emergency-dentistry'
        }
      ]
    },
    {
      type: 'faq',
      id: 'appointments',
      eyebrow: 'Group one',
      h2: 'Appointments and scheduling',
      intro: 'Booking, hours and getting in quickly.',
      items: [
        {
          q: 'How do I book an appointment?',
          a: 'Book online through our contact page any time of day, or call (816) 555-0182 during office hours. You will get a confirmation by text or email, usually within one business day. New patients are booked within 48 hours in most cases.'
        },
        {
          q: 'What are your office hours?',
          a: 'We are open Monday to Thursday from 8:00 AM to 6:00 PM, Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 2:00 PM by appointment. We are closed on Sunday, though our emergency line stays open around the clock.'
        },
        {
          q: 'Do you offer Saturday appointments?',
          a: 'Yes, we see patients on Saturdays from 9:00 AM to 2:00 PM by appointment. Saturday fills quickly, so book a week or two ahead if you need a weekend slot. It is a popular choice for families and for patients who cannot take weekday time off.'
        },
        {
          q: 'How long does a first visit take?',
          a: 'Plan for about 60 to 90 minutes for a new patient exam. That includes your comprehensive exam, full digital X-rays, a cleaning, an oral cancer screening and a written treatment plan. We do not rush it, because we want to understand your whole mouth.'
        },
        {
          q: 'Can I get a same-day appointment?',
          a: 'Often, yes. We hold time in the schedule for urgent needs every day. Call before noon and we can usually see you the same afternoon. If we are full, we will find the earliest opening and tell you honestly how long the wait will be.'
        },
        {
          q: 'How do I reschedule or cancel?',
          a: 'Call or text us at (816) 555-0182 at least 24 hours before your visit and we will move it without a fee. Life happens, and we would rather rebook you than have you miss care. Repeated no-shows without notice may carry a fee, which we explain upfront.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'cost-insurance',
      eyebrow: 'Group two',
      h2: 'Cost, insurance and payment',
      intro: 'What things cost and how to pay for them.',
      items: [
        {
          q: 'What does the new patient special include?',
          a: 'For $99, regularly $389, you get a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan. There are no hidden add-ons. It is the same complete first visit every new patient receives.'
        },
        {
          q: 'Which insurance plans do you accept?',
          a: 'We are in network with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. If your plan is not listed, call us and we will check your specific benefits for you.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes. We work with CareCredit, Cherry and Sunbit for monthly payment options, including interest-free periods on approved credit. We also offer a $29 per month in-house membership plan that covers two cleanings, exams, X-rays and 15% off other treatment.'
        },
        {
          q: 'Will I know the cost before treatment starts?',
          a: 'Always. We give you a written estimate before any treatment begins, and we file your insurance so you can see your portion clearly. Our reviews often mention that the estimate matched the final bill, which is exactly how we want it to work.'
        },
        {
          q: 'What if I do not have insurance?',
          a: 'You are still very welcome here. The $29 monthly membership plan is built for patients without insurance, and it covers the preventive care most people need. For larger treatment we will walk you through financing so the cost fits a monthly budget.'
        },
        {
          q: 'Do you charge for X-rays or exams separately?',
          a: 'At a routine visit, exams and needed X-rays are part of the appointment and are typically covered by insurance or the membership plan. We only take X-rays when they are clinically useful, never as a routine add-on to pad a bill.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'comfort',
      eyebrow: 'Group three',
      h2: 'Comfort and anxiety',
      intro: 'What we do to make visits easier for nervous patients.',
      items: [
        {
          q: 'I am nervous about the dentist. Can you help?',
          a: 'Yes, and you are far from alone. We book longer first visits for anxious patients so there is time to talk before any instruments come out. You can tour the room, ask questions and stop at any point. Several of our reviews come from patients who avoided dentists for years.'
        },
        {
          q: 'What sedation options do you offer?',
          a: 'We offer nitrous oxide for mild relaxation and oral sedation for patients who need more. Our team holds a Missouri sedation permit, and we review your health history first to choose the safest option. You will need a ride home after oral sedation.'
        },
        {
          q: 'Does treatment hurt?',
          a: 'Modern numbing means most treatment is comfortable, and we check in constantly to make sure you are not feeling anything you should not. If you feel discomfort, raise your hand and we stop immediately. Being honest with us keeps the appointment easy.'
        },
        {
          q: 'Can I bring someone with me?',
          a: 'Of course. A partner, parent or friend is welcome to sit with you during the consultation, and a companion can stay for treatment if it helps you relax. For sedation appointments we ask that your driver stay nearby so they can take you home safely.'
        },
        {
          q: 'What if I have a strong gag reflex?',
          a: 'Tell us at the start and we will adjust. We use smaller instruments, extra suction and a slower pace, and we can numb the back of the throat when needed. Many patients with a strong reflex find our approach far easier than they expected.'
        },
        {
          q: 'Do you treat patients who have not been in years?',
          a: 'Every week, and we never lecture. Long gaps between visits are common, and shame is not a treatment plan. We start by finding out where things stand, then build a realistic path forward, often spreading the work across a few comfortable appointments.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'treatments',
      eyebrow: 'Group four',
      h2: 'Treatments and procedures',
      intro: 'What we treat and what each procedure involves.',
      items: [
        {
          q: 'What treatments do you offer?',
          a: 'We cover general and family dentistry, cosmetic dentistry, teeth whitening, dental implants, orthodontics with clear aligners and braces, and emergency care. Because we offer all of it under one roof, you are rarely referred across town for a specialist.'
        },
        {
          q: 'Do you place dental implants?',
          a: 'Yes. Dr. Marcus Reed places and restores implants in our office, from a single tooth to full-arch cases. We use a 3D scan to plan the placement and show you exactly where the implant will sit before surgery. Most patients return to work within a day or two.'
        },
        {
          q: 'What are clear aligners, and am I a candidate?',
          a: 'Clear aligners are removable trays that straighten teeth without metal brackets. Dr. Priya Nair, our orthodontist, will tell you honestly whether aligners or braces suit your case better. If treatment can wait, she will say so and see you again in a year.'
        },
        {
          q: 'How long does teeth whitening take?',
          a: 'In-office whitening takes about an hour and you leave with a noticeably brighter shade. We also send you home with custom trays for touch-ups. Most patients report little to no sensitivity, and we screen first to make sure whitening is right for your teeth.'
        },
        {
          q: 'Do you do root canals?',
          a: 'Yes, we perform root canals in the office, usually in one visit for straightforward cases. The procedure removes the infected pulp, relieves the pain and saves the tooth. Our reviews often describe being surprised at how comfortable a root canal turned out to be.'
        },
        {
          q: 'What about cosmetic work like veneers?',
          a: 'Dr. Reed designs porcelain veneers and other cosmetic treatment with a digital mock-up you approve before anything is made. We match the shade to your natural teeth rather than an artificial bright white, so the result looks like you, only a little better.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'children',
      eyebrow: 'Group five',
      h2: 'Children and families',
      intro: 'Care for children, teenagers and whole families.',
      items: [
        {
          q: 'At what age should my child first see a dentist?',
          a: 'Around their first birthday, or within six months of the first tooth appearing. Early visits are short, friendly and mostly about getting comfortable. They also let us catch problems early and coach you on brushing and feeding habits at home.'
        },
        {
          q: 'Do you see children and adults in the same visit?',
          a: 'Yes, and families love it. We can book back-to-back appointments so you and your children are seen in one trip. Call us and we will block the time together, which saves you a second drive to our northland office.'
        },
        {
          q: 'My child is autistic. Can you accommodate that?',
          a: 'We can, and we take it seriously. Nia Brooks, our treatment coordinator, will arrange a quiet morning slot and let your child tour the room first with no pressure to sit in the chair. One patient family needed three visits before a cleaning happened, and that was fine.'
        },
        {
          q: 'Do you offer braces for teenagers?',
          a: 'Yes. Dr. Nair offers both traditional braces and clear aligners for teens, and she will recommend the option that fits the case rather than the most expensive one. We explain the timeline and the cost upfront so there are no surprises later.'
        },
        {
          q: 'Are dental sealants worth it for kids?',
          a: 'For most children, yes. Sealants are a thin protective coating on the chewing surfaces of the back teeth, where cavities start most often. They are quick, painless and covered by many insurance plans, and they can prevent years of fillings.'
        },
        {
          q: 'Can you help with my child’s fear of the dentist?',
          a: 'Start with a meet-and-greet visit where nothing is done beyond a look and a chat. We let children hold the mirror and see the tools first. Patience now builds a patient who is not afraid for life, which is worth far more than rushing one cleaning.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'emergencies',
      eyebrow: 'Group six',
      h2: 'Emergencies',
      intro: 'What to do when something goes wrong, day or night.',
      items: [
        {
          q: 'What counts as a dental emergency?',
          a: 'Severe tooth pain, a broken or knocked-out tooth, swelling in the face or gums, a lost filling or crown, and uncontrolled bleeding all qualify. If you are unsure, call our emergency line at (816) 555-0199 and we will help you decide what to do next.'
        },
        {
          q: 'Do you have a 24/7 emergency line?',
          a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock for both existing and new patients. Even outside office hours, you can reach a real person who can advise you and arrange the earliest possible appointment.'
        },
        {
          q: 'How quickly can I be seen for an emergency?',
          a: 'We hold same-day slots for emergencies and aim to see urgent patients within a few hours. Call before noon and we can usually treat you that afternoon. Pain today, seen today, is the standard we set for ourselves.'
        },
        {
          q: 'What should I do if I knock out a tooth?',
          a: 'Hold the tooth by the crown, not the root, and keep it moist in milk or saliva. Call us immediately. If you reach us within about an hour, there is a real chance the tooth can be saved. Do not scrub it clean.'
        },
        {
          q: 'Can I be seen if I am not an existing patient?',
          a: 'Yes. We keep room in the schedule for new patients with emergencies, and our emergency line is open to anyone in the Kansas City northland. You do not need to have visited us before to get help today.'
        },
        {
          q: 'What if I have severe tooth pain at night?',
          a: 'Call the emergency line at (816) 555-0199. While you wait, take an over-the-counter pain reliever as directed, rinse with warm salt water and avoid very hot or cold food. Do not place aspirin directly on the gum, as it can burn the tissue.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'new-patients',
      eyebrow: 'Group seven',
      h2: 'New patients',
      intro: 'Everything to know before your very first appointment.',
      items: [
        {
          q: 'What happens at my first visit?',
          a: 'We start with a conversation about your health, your concerns and your goals. Then come the exam, digital X-rays, a cleaning and an oral cancer screening, followed by a written treatment plan. You leave knowing exactly where things stand.'
        },
        {
          q: 'What should I bring to my first appointment?',
          a: 'Bring a photo ID, your insurance card if you have one, and a list of any medications you take. If you have records from a previous dentist, we can request them for you. Completing your forms online ahead of time saves about 15 minutes.'
        },
        {
          q: 'How much is the first visit?',
          a: 'New patients pay $99 instead of the regular $389. That single fee covers the exam, full digital X-rays, a cleaning, an oral cancer screening and a personalised treatment plan. It is the complete visit, not a limited screening.'
        },
        {
          q: 'Do I need a referral to become a patient?',
          a: 'No referral needed. You can book directly online or by phone, and we will take it from there. Many of our patients first heard about us from a friend or neighbour, but plenty simply found us and called.'
        },
        {
          q: 'How do you handle my medical history?',
          a: 'We review your full health history, including medications, allergies, heart conditions and past dental work, before any treatment. This is not paperwork for its own sake. It shapes the numbing we use and the plan we recommend.'
        },
        {
          q: 'Where are you located, and is parking easy?',
          a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, serving the wider Clay and Platte County northland. There is free surface parking right in front, with step-free access to our second-floor suite by elevator.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Still have a question?',
      text:
        'Call (816) 555-0182 and a real person at our northland office will answer, or book online and we will follow up within one business day. The $99 new patient special is the easiest way to start.',
      primary: { label: 'Book online', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'How do I book an appointment?',
      a: 'Book online through our contact page any time of day, or call (816) 555-0182 during office hours. You will get a confirmation by text or email, usually within one business day. New patients are booked within 48 hours in most cases.'
    },
    {
      q: 'What are your office hours?',
      a: 'We are open Monday to Thursday from 8:00 AM to 6:00 PM, Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 2:00 PM by appointment. We are closed on Sunday, though our emergency line stays open around the clock.'
    },
    {
      q: 'Do you offer Saturday appointments?',
      a: 'Yes, we see patients on Saturdays from 9:00 AM to 2:00 PM by appointment. Saturday fills quickly, so book a week or two ahead if you need a weekend slot. It is a popular choice for families and for patients who cannot take weekday time off.'
    },
    {
      q: 'How long does a first visit take?',
      a: 'Plan for about 60 to 90 minutes for a new patient exam. That includes your comprehensive exam, full digital X-rays, a cleaning, an oral cancer screening and a written treatment plan. We do not rush it, because we want to understand your whole mouth.'
    },
    {
      q: 'Can I get a same-day appointment?',
      a: 'Often, yes. We hold time in the schedule for urgent needs every day. Call before noon and we can usually see you the same afternoon. If we are full, we will find the earliest opening and tell you honestly how long the wait will be.'
    },
    {
      q: 'How do I reschedule or cancel?',
      a: 'Call or text us at (816) 555-0182 at least 24 hours before your visit and we will move it without a fee. Life happens, and we would rather rebook you than have you miss care. Repeated no-shows without notice may carry a fee, which we explain upfront.'
    },
    {
      q: 'What does the new patient special include?',
      a: 'For $99, regularly $389, you get a comprehensive exam, a full set of digital X-rays, a professional cleaning, an oral cancer screening and a personalised treatment plan. There are no hidden add-ons. It is the same complete first visit every new patient receives.'
    },
    {
      q: 'Which insurance plans do you accept?',
      a: 'We are in network with Delta Dental, Cigna, Aetna, MetLife, Guardian, UnitedHealthcare, Blue Cross Blue Shield of Kansas City, Humana, Ameritas, Principal, Careington and Assurant. If your plan is not listed, call us and we will check your specific benefits for you.'
    },
    {
      q: 'Do you offer payment plans?',
      a: 'Yes. We work with CareCredit, Cherry and Sunbit for monthly payment options, including interest-free periods on approved credit. We also offer a $29 per month in-house membership plan that covers two cleanings, exams, X-rays and 15% off other treatment.'
    },
    {
      q: 'Will I know the cost before treatment starts?',
      a: 'Always. We give you a written estimate before any treatment begins, and we file your insurance so you can see your portion clearly. Our reviews often mention that the estimate matched the final bill, which is exactly how we want it to work.'
    },
    {
      q: 'What if I do not have insurance?',
      a: 'You are still very welcome here. The $29 monthly membership plan is built for patients without insurance, and it covers the preventive care most people need. For larger treatment we will walk you through financing so the cost fits a monthly budget.'
    },
    {
      q: 'Do you charge for X-rays or exams separately?',
      a: 'At a routine visit, exams and needed X-rays are part of the appointment and are typically covered by insurance or the membership plan. We only take X-rays when they are clinically useful, never as a routine add-on to pad a bill.'
    },
    {
      q: 'I am nervous about the dentist. Can you help?',
      a: 'Yes, and you are far from alone. We book longer first visits for anxious patients so there is time to talk before any instruments come out. You can tour the room, ask questions and stop at any point. Several of our reviews come from patients who avoided dentists for years.'
    },
    {
      q: 'What sedation options do you offer?',
      a: 'We offer nitrous oxide for mild relaxation and oral sedation for patients who need more. Our team holds a Missouri sedation permit, and we review your health history first to choose the safest option. You will need a ride home after oral sedation.'
    },
    {
      q: 'Does treatment hurt?',
      a: 'Modern numbing means most treatment is comfortable, and we check in constantly to make sure you are not feeling anything you should not. If you feel discomfort, raise your hand and we stop immediately. Being honest with us keeps the appointment easy.'
    },
    {
      q: 'Can I bring someone with me?',
      a: 'Of course. A partner, parent or friend is welcome to sit with you during the consultation, and a companion can stay for treatment if it helps you relax. For sedation appointments we ask that your driver stay nearby so they can take you home safely.'
    },
    {
      q: 'What if I have a strong gag reflex?',
      a: 'Tell us at the start and we will adjust. We use smaller instruments, extra suction and a slower pace, and we can numb the back of the throat when needed. Many patients with a strong reflex find our approach far easier than they expected.'
    },
    {
      q: 'Do you treat patients who have not been in years?',
      a: 'Every week, and we never lecture. Long gaps between visits are common, and shame is not a treatment plan. We start by finding out where things stand, then build a realistic path forward, often spreading the work across a few comfortable appointments.'
    },
    {
      q: 'What treatments do you offer?',
      a: 'We cover general and family dentistry, cosmetic dentistry, teeth whitening, dental implants, orthodontics with clear aligners and braces, and emergency care. Because we offer all of it under one roof, you are rarely referred across town for a specialist.'
    },
    {
      q: 'Do you place dental implants?',
      a: 'Yes. Dr. Marcus Reed places and restores implants in our office, from a single tooth to full-arch cases. We use a 3D scan to plan the placement and show you exactly where the implant will sit before surgery. Most patients return to work within a day or two.'
    },
    {
      q: 'What are clear aligners, and am I a candidate?',
      a: 'Clear aligners are removable trays that straighten teeth without metal brackets. Dr. Priya Nair, our orthodontist, will tell you honestly whether aligners or braces suit your case better. If treatment can wait, she will say so and see you again in a year.'
    },
    {
      q: 'How long does teeth whitening take?',
      a: 'In-office whitening takes about an hour and you leave with a noticeably brighter shade. We also send you home with custom trays for touch-ups. Most patients report little to no sensitivity, and we screen first to make sure whitening is right for your teeth.'
    },
    {
      q: 'Do you do root canals?',
      a: 'Yes, we perform root canals in the office, usually in one visit for straightforward cases. The procedure removes the infected pulp, relieves the pain and saves the tooth. Our reviews often describe being surprised at how comfortable a root canal turned out to be.'
    },
    {
      q: 'What about cosmetic work like veneers?',
      a: 'Dr. Reed designs porcelain veneers and other cosmetic treatment with a digital mock-up you approve before anything is made. We match the shade to your natural teeth rather than an artificial bright white, so the result looks like you, only a little better.'
    },
    {
      q: 'At what age should my child first see a dentist?',
      a: 'Around their first birthday, or within six months of the first tooth appearing. Early visits are short, friendly and mostly about getting comfortable. They also let us catch problems early and coach you on brushing and feeding habits at home.'
    },
    {
      q: 'Do you see children and adults in the same visit?',
      a: 'Yes, and families love it. We can book back-to-back appointments so you and your children are seen in one trip. Call us and we will block the time together, which saves you a second drive to our northland office.'
    },
    {
      q: 'My child is autistic. Can you accommodate that?',
      a: 'We can, and we take it seriously. Nia Brooks, our treatment coordinator, will arrange a quiet morning slot and let your child tour the room first with no pressure to sit in the chair. One patient family needed three visits before a cleaning happened, and that was fine.'
    },
    {
      q: 'Do you offer braces for teenagers?',
      a: 'Yes. Dr. Nair offers both traditional braces and clear aligners for teens, and she will recommend the option that fits the case rather than the most expensive one. We explain the timeline and the cost upfront so there are no surprises later.'
    },
    {
      q: 'Are dental sealants worth it for kids?',
      a: 'For most children, yes. Sealants are a thin protective coating on the chewing surfaces of the back teeth, where cavities start most often. They are quick, painless and covered by many insurance plans, and they can prevent years of fillings.'
    },
    {
      q: 'Can you help with my child’s fear of the dentist?',
      a: 'Start with a meet-and-greet visit where nothing is done beyond a look and a chat. We let children hold the mirror and see the tools first. Patience now builds a patient who is not afraid for life, which is worth far more than rushing one cleaning.'
    },
    {
      q: 'What counts as a dental emergency?',
      a: 'Severe tooth pain, a broken or knocked-out tooth, swelling in the face or gums, a lost filling or crown, and uncontrolled bleeding all qualify. If you are unsure, call our emergency line at (816) 555-0199 and we will help you decide what to do next.'
    },
    {
      q: 'Do you have a 24/7 emergency line?',
      a: 'Yes. Our emergency line at (816) 555-0199 is answered around the clock for both existing and new patients. Even outside office hours, you can reach a real person who can advise you and arrange the earliest possible appointment.'
    },
    {
      q: 'How quickly can I be seen for an emergency?',
      a: 'We hold same-day slots for emergencies and aim to see urgent patients within a few hours. Call before noon and we can usually treat you that afternoon. Pain today, seen today, is the standard we set for ourselves.'
    },
    {
      q: 'What should I do if I knock out a tooth?',
      a: 'Hold the tooth by the crown, not the root, and keep it moist in milk or saliva. Call us immediately. If you reach us within about an hour, there is a real chance the tooth can be saved. Do not scrub it clean.'
    },
    {
      q: 'Can I be seen if I am not an existing patient?',
      a: 'Yes. We keep room in the schedule for new patients with emergencies, and our emergency line is open to anyone in the Kansas City northland. You do not need to have visited us before to get help today.'
    },
    {
      q: 'What if I have severe tooth pain at night?',
      a: 'Call the emergency line at (816) 555-0199. While you wait, take an over-the-counter pain reliever as directed, rinse with warm salt water and avoid very hot or cold food. Do not place aspirin directly on the gum, as it can burn the tissue.'
    },
    {
      q: 'What happens at my first visit?',
      a: 'We start with a conversation about your health, your concerns and your goals. Then come the exam, digital X-rays, a cleaning and an oral cancer screening, followed by a written treatment plan. You leave knowing exactly where things stand.'
    },
    {
      q: 'What should I bring to my first appointment?',
      a: 'Bring a photo ID, your insurance card if you have one, and a list of any medications you take. If you have records from a previous dentist, we can request them for you. Completing your forms online ahead of time saves about 15 minutes.'
    },
    {
      q: 'How much is the first visit?',
      a: 'New patients pay $99 instead of the regular $389. That single fee covers the exam, full digital X-rays, a cleaning, an oral cancer screening and a personalised treatment plan. It is the complete visit, not a limited screening.'
    },
    {
      q: 'Do I need a referral to become a patient?',
      a: 'No referral needed. You can book directly online or by phone, and we will take it from there. Many of our patients first heard about us from a friend or neighbour, but plenty simply found us and called.'
    },
    {
      q: 'How do you handle my medical history?',
      a: 'We review your full health history, including medications, allergies, heart conditions and past dental work, before any treatment. This is not paperwork for its own sake. It shapes the numbing we use and the plan we recommend.'
    },
    {
      q: 'Where are you located, and is parking easy?',
      a: 'We are at 4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118, serving the wider Clay and Platte County northland. There is free surface parking right in front, with step-free access to our second-floor suite by elevator.'
    }
  ],
  cta: {
    h2: 'Ready to book your first visit?',
    text:
      'Start with the $99 new patient special and get answers to your questions in person, chair-side. Book online or call (816) 555-0182 and we will take it from there.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
