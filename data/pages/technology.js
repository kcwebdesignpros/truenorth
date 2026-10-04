'use strict';

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
    'Every piece of equipment in our Kansas City northland practice earns its place by making your treatment safer, faster or more comfortable. Here is what we use, and why each one matters to you.',
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
      h2: 'Better tools mean gentler, more predictable care',
      body: [
        'Dentistry has changed more in the last fifteen years than in the fifty before them, and most of that change is invisible from the patient chair. A practice can look identical to one that opened in 1995 and still be running on 1995 thinking. We chose a different path: every upgrade has to answer one question first. Does this measurably improve the experience or the outcome for the person in the chair?',
        'That test is why we invested in 3D imaging rather than a bigger waiting room, and why our hygienists scan instead of reaching for impression trays. None of it is technology for its own sake. A digital scanner does not make us feel modern. It means you do not have to sit through a tray of pink goop that makes you gag. That is the whole point.',
        'We also believe you should be able to see what we see. When a camera shows you a cracked molar on a large screen, the conversation about fixing it stops being a lecture and becomes a shared decision. Patients who understand their own mouths make better choices, keep more of their natural teeth, and show up for the appointments that keep them healthy.',
        'Equipment is only half the story. Every clinician on our team is trained on each device before it is used on a patient, and we re-certify annually on imaging safety, laser protocols and sedation monitoring. A scanner in an untrained hand is just an expensive wand. Dr. Hart reviews our imaging dose audit every quarter, and we track which scans actually changed a treatment decision, because technology that never alters care is a cost with no benefit to you.',
        'Everything described on this page is equipment we own and use daily on North Oak Trafficway, not a wish list. If a tool is missing, it is usually because we tested it and decided it did not yet earn its place in your treatment. We would rather explain the things that help you than list twenty that impress a brochure.'
      ]
    },
    {
      type: 'cards',
      id: 'equipment',
      eyebrow: 'The equipment list',
      h2: 'What we use, and what it does for you',
      intro:
        'A dozen pieces of diagnostic and treatment technology sit behind every appointment. These are the ones patients notice most.',
      columns: 3,
      items: [
        {
          icon: 'scan',
          title: '3D CBCT cone-beam imaging',
          text: 'A cone-beam scan builds a three-dimensional model of your jaw, teeth and nerves in about twenty seconds. For implants, it lets Dr. Reed plan the exact angle and depth before we make an incision, which lowers the risk of touching a nerve or missing bone. It also shows sinus cavities and bone density that a flat X-ray cannot.'
        },
        {
          icon: 'camera',
          title: 'Intraoral digital scanning',
          text: 'A handheld wand photographs thousands of points across your teeth and stitches them into a 3D model. No impression trays, no messy material, no gagging. We use it for crowns, aligners, night guards and retainers, and you can watch the model appear on screen in real time.'
        },
        {
          icon: 'image',
          title: 'Digital X-rays',
          text: 'Digital sensors capture an image in seconds and use roughly 80 to 90 percent less radiation than traditional film. The picture appears instantly, so we can zoom in, adjust contrast and show you exactly what we are seeing. Fewer retakes, less waiting and a fraction of the dose.'
        },
        {
          icon: 'microscope',
          title: 'Intraoral cameras',
          text: 'A pen-sized camera puts a live picture of your tooth on the monitor beside you. You see the fracture, the worn filling or the early cavity yourself instead of taking our word for it. It turns a treatment recommendation into a conversation you can actually follow.'
        },
        {
          icon: 'zap',
          title: 'Diode and soft-tissue lasers',
          text: 'Our diode laser treats gum pockets and removes inflamed tissue without a scalpel and often without stitches. The same wavelength handles cold-sore therapy, easing the tingle at the first sign of an outbreak. Healing is typically faster and bleeding is minimal.'
        },
        {
          icon: 'tooth-sparkle',
          title: 'CAD/CAM same-day crowns',
          text: 'We design the crown on screen, then our chair-side milling unit carves it from a solid ceramic block while you wait. Most single crowns are scanned, milled, fitted and bonded in one visit of about two hours. No temporary crown, no second appointment, no soft-food week.'
        },
        {
          icon: 'activity',
          title: 'Electric handpieces',
          text: 'Electric handpieces spin at a constant speed with far less vibration and noise than the air-driven drills most people remember. The result is a quieter room, a smoother cut and less of the high-pitched whine that makes patients tense up. It sounds like a small thing. It is not.'
        },
        {
          icon: 'droplet',
          title: 'Air-abrasion and fluoride delivery',
          text: 'Air abrasion uses a fine stream of particles to prepare small cavities without a drill in many cases. Our fluoride varnish system seals exposed enamel and root surfaces after cleaning. Together they let us treat early decay conservatively, keeping more of your natural tooth. For children and anxious adults, both mean a shorter appointment and far less of the noise that makes a filling feel frightening.'
        },
        {
          icon: 'heart-pulse',
          title: 'Nitrous oxide and sedation monitoring',
          text: 'Nitrous oxide takes the edge off within minutes and wears off just as quickly, so you can drive yourself home. For oral sedation we monitor oxygen saturation, pulse and blood pressure throughout. Every sedation patient is watched continuously and never left alone in a room.'
        }
      ]
    },
    {
      type: 'table',
      id: 'xray-comparison',
      eyebrow: 'X-rays, honestly compared',
      h2: 'Digital X-rays versus traditional film',
      intro:
        'Both capture the same diagnostic information. The difference is the dose, the speed and what you can actually see.',
      head: ['Feature', 'Digital X-rays', 'Traditional film'],
      rows: [
        ['Radiation dose', 'About 80–90% lower than film', 'Baseline reference dose'],
        ['Time to image', '2–5 seconds on screen', '4–5 minutes to develop'],
        ['Retakes', 'Rare, because the image can be enhanced', 'Common when exposure is off'],
        ['Storage', 'Encrypted digital record', 'Physical film jacket'],
        ['Sharing with specialists', 'Instant secure transfer', 'Copied or mailed'],
        ['Patient viewing', 'On screen, side by side with you', 'Held up to a light box']
      ],
      note:
        'Digital X-rays still use a small amount of radiation. We take only the images your care requires and can use films from a previous dentist to avoid repeating anything.'
    },
    {
      type: 'split',
      id: 'comfort',
      eyebrow: 'Comfort in the chair',
      h2: 'No trays, no goop, no gagging',
      body: [
        'If you have ever had a mould taken, you remember it. A metal tray loaded with pink alginate, held in place for two minutes while you try not to swallow. We retired that experience. An intraoral scanner captures the same detail with a small wand and a beam of light, and you can breathe normally the entire time.',
        'The scan is also more accurate. Alginate shrinks slightly as it sets, so a moulded crown can rock or feel tight. A digital scan is dimensionally stable, which means crowns, aligners and night guards fit the first time far more often. Fewer remakes means fewer appointments for you.'
      ],
      list: [
        'No impression material in your mouth',
        'No tray, no setting time, no gag reflex',
        'Models appear on screen in about two minutes',
        'Digital files sent to the lab in seconds',
        'Reusable for aligners, guards and retainers'
      ],
      image: '/img/clinic-interior.webp',
      imageAlt: 'Intraoral scanner being used in a bright dental operatory',
      reverse: true,
      cta: { label: 'See it at your first visit', path: '/contact' }
    },
    {
      type: 'prose',
      id: 'planning',
      eyebrow: 'Planning and precision',
      h2: 'Seeing the finished result before we begin',
      body: [
        'Our treatment-planning software turns scans and X-rays into a model we can rotate, measure and mark up on screen. For an implant, that means choosing the size and position in software and printing a surgical guide so placement matches the plan to the millimetre. For a smile makeover, it means designing the shape and shade of your new teeth and showing you a simulation before any enamel is touched.',
        'Smile simulation is not a gimmick. It lets you say make that tooth a little shorter while it is still a picture, not a permanent change. We would rather spend twenty minutes adjusting a digital design than have you live with a result you did not expect. You approve the plan before we begin, every time.',
        'Consent and cost are part of the plan too. Once you approve the design, Nia walks you through a written estimate before we schedule anything, so there is no surprise invoice later. The same software tracks what your insurance is likely to cover, which keeps the conversation about money honest and early.',
        'Digital records change how we work with other providers too. If you see a specialist, need a referral or move across the country, your images and notes travel in a secure format that any dentist can open. Nothing is lost in a paper envelope, and nothing is re-radiated because a file could not be found. Your history stays complete, which makes every future diagnosis a little more certain and a little faster.',
        'Technology should make dentistry quieter, not more intimidating. Every screen and sensor in this office exists to shorten your appointment, lower your dose, or help you understand a decision. If any of it makes you more nervous, we will turn it off, slow down and use the older, simpler method. Your comfort always outranks the gadget.'
      ]
    },
    {
      type: 'steps',
      id: 'sterilisation',
      eyebrow: 'Behind the scenes',
      h2: 'How your instruments are cleaned, every time',
      intro:
        'This is the same sequence after every single patient, whether you can see it or not. Here it is in plain language.',
      items: [
        {
          title: 'Transport and pre-clean',
          text: 'Used instruments leave the room in a sealed, colour-coded tray and are never carried loose through the practice. At the sterilisation station they are rinsed and placed in an ultrasonic bath, which uses sound waves to lift debris out of hinges, serrations and threads that a brush cannot reach.'
        },
        {
          title: 'Inspection and packaging',
          text: 'Each instrument is dried, inspected under magnification for chips or corrosion, and anything that fails is retired. Clean instruments are sealed in individual medical-grade pouches with a chemical indicator strip that changes colour only when the right temperature is reached.'
        },
        {
          title: 'Class B autoclave cycle',
          text: 'Pouches go into a Class B vacuum autoclave, the same standard used in hospital operating theatres. The vacuum phase removes air so steam reaches every surface, including the inside of hollow instruments. The full cycle runs at 134 degrees Celsius for the time Missouri infection-control guidance requires.'
        },
        {
          title: 'Logging and traceability',
          text: 'Every cycle prints a record of temperature, pressure and duration, and each pouch is stamped with the date and cycle number. If an indicator ever failed, we would know exactly which instruments were affected and could recall them before they reached a patient. The log is reviewed weekly and kept as long as the state requires.'
        },
        {
          title: 'Chair-side and single-use items',
          text: 'Handpieces are sterilised between every patient. Needles, suction tips, bib clips, saliva ejectors and gloves are single-use and opened from sealed packaging in front of you. Surfaces, light handles and chair controls are wiped with a hospital-grade disinfectant before you sit down.'
        }
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Technology, measured',
      intro: 'A few numbers that show what the equipment actually changes.',
      items: [
        { value: 90, suffix: '%', label: 'Less radiation than film X-rays' },
        { value: 20, suffix: ' sec', label: 'Typical 3D CBCT scan time' },
        { value: 2, suffix: ' hrs', label: 'Average same-day crown visit' },
        { value: 134, suffix: '°C', label: 'Autoclave sterilisation temperature' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our technology',
      intro: 'The things patients ask most about the equipment in our operatories.',
      items: [
        {
          q: 'Is a 3D CBCT scan safe?',
          a: 'Yes. A cone-beam scan uses a focused beam and a fraction of the radiation of a medical CT. We order one only when it will change your treatment, usually for implant planning, wisdom teeth or complex root work, and we can share it with your other providers so you are never scanned twice.'
        },
        {
          q: 'Do digital X-rays cost more than film?',
          a: 'No. Digital X-rays are included in your exam and are not billed differently. Our new patient special includes a full set of digital X-rays along with your exam and cleaning for $99. In many cases they cost the practice less than film, which is part of why we switched.'
        },
        {
          q: 'Will the intraoral scanner make me gag?',
          a: 'Almost never. The wand is small, nothing sets in your mouth, and you can swallow and breathe normally. Patients who dreaded impressions consistently tell us the scan was the easiest part of their visit. If you are still anxious, we can pause at any point.'
        },
        {
          q: 'Are same-day crowns as strong as lab-made ones?',
          a: 'They are made from the same solid ceramic blocks a lab would use, milled to a digital scan rather than a mould. Long-term studies show comparable strength and fit. The main difference is convenience, because you leave with a finished crown instead of a temporary one.'
        },
        {
          q: 'Is laser gum treatment painful?',
          a: 'Most patients describe it as pressure rather than pain, and we numb the area first. Because the laser seals tissue as it works, there is usually less bleeding and faster healing than traditional gum surgery. Many patients return to normal eating the same day.'
        },
        {
          q: 'Can I see the sterilisation area?',
          a: 'Absolutely, and we would rather you did. Ask at the front desk and one of our team will walk you through the ultrasonic bath, the autoclave and the cycle logs. Transparency about sterilisation should be normal, not a special request.'
        },
        {
          q: 'Do you use nitrous oxide for nervous patients?',
          a: 'Yes. Nitrous oxide is available for most appointments and wears off within minutes, so you can drive yourself home. For longer or more involved treatment we also offer oral sedation with continuous monitoring of your oxygen, pulse and blood pressure.'
        },
        {
          q: 'Will technology ever replace the human part of dentistry?',
          a: 'No, and we would not want it to. A scanner cannot notice that you are nervous, and software cannot ask how your week has been. The equipment is here to give our team more time to look after you, not less.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Is a 3D CBCT scan safe?',
      a: 'Yes. A cone-beam scan uses a focused beam and a fraction of the radiation of a medical CT. We order one only when it will change your treatment, usually for implant planning, wisdom teeth or complex root work, and we can share it with your other providers so you are never scanned twice.'
    },
    {
      q: 'Do digital X-rays cost more than film?',
      a: 'No. Digital X-rays are included in your exam and are not billed differently. Our new patient special includes a full set of digital X-rays along with your exam and cleaning for $99. In many cases they cost the practice less than film, which is part of why we switched.'
    },
    {
      q: 'Will the intraoral scanner make me gag?',
      a: 'Almost never. The wand is small, nothing sets in your mouth, and you can swallow and breathe normally. Patients who dreaded impressions consistently tell us the scan was the easiest part of their visit. If you are still anxious, we can pause at any point.'
    },
    {
      q: 'Are same-day crowns as strong as lab-made ones?',
      a: 'They are made from the same solid ceramic blocks a lab would use, milled to a digital scan rather than a mould. Long-term studies show comparable strength and fit. The main difference is convenience, because you leave with a finished crown instead of a temporary one.'
    },
    {
      q: 'Is laser gum treatment painful?',
      a: 'Most patients describe it as pressure rather than pain, and we numb the area first. Because the laser seals tissue as it works, there is usually less bleeding and faster healing than traditional gum surgery. Many patients return to normal eating the same day.'
    },
    {
      q: 'Can I see the sterilisation area?',
      a: 'Absolutely, and we would rather you did. Ask at the front desk and one of our team will walk you through the ultrasonic bath, the autoclave and the cycle logs. Transparency about sterilisation should be normal, not a special request.'
    },
    {
      q: 'Do you use nitrous oxide for nervous patients?',
      a: 'Yes. Nitrous oxide is available for most appointments and wears off within minutes, so you can drive yourself home. For longer or more involved treatment we also offer oral sedation with continuous monitoring of your oxygen, pulse and blood pressure.'
    },
    {
      q: 'Will technology ever replace the human part of dentistry?',
      a: 'No, and we would not want it to. A scanner cannot notice that you are nervous, and software cannot ask how your week has been. The equipment is here to give our team more time to look after you, not less.'
    }
  ],
  cta: {
    h2: 'Come see the difference for yourself',
    text: 'Book a visit and we will show you the scanner, the 3D imaging and the sterilisation room, then explain exactly what your treatment plan involves.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
