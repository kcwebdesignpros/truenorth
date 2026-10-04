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
    'Extractions & Wisdom Teeth',
    '3D CBCT Planning'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-implants',
      eyebrow: 'The case for implants',
      h2: 'Why a dental implant beats the alternatives',
      body: [
        'A bridge replaces the visible part of a missing tooth by anchoring a false tooth to its neighbours. A denture rests on your gums and comes out at night. An implant works differently, because it replaces the root as well as the crown. A small titanium post is placed into the jawbone, your bone grows into it over the following months, and a custom crown is attached on top. That post then does the job a natural root used to do, which is why nothing nearby has to be drilled, capped or clipped onto.',
        'That difference shows up over years, not weeks. A traditional bridge asks the two healthy teeth beside the gap to carry the chewing load meant for three, and it usually needs replacing every seven to fifteen years. Implants leave those teeth alone. They also keep bone in the jaw from shrinking, which is what causes the sunken, older look people notice after a long time without a tooth. Most of our patients tell us that within a month they stop thinking about the implant at all.',
        'Not everyone is a candidate on the first visit, and that is worth saying plainly. If a tooth has been missing for years, the bone beneath it may have thinned. If you clench, grind, smoke or take medications that affect healing, we plan around it rather than pretending it does not matter. Dr. Reed reviews a 3D scan of your jaw before recommending anything, and he will tell you honestly when a bridge, a partial or even no treatment is the smarter choice for your situation.',
        'We also handle the parts that normally mean a referral elsewhere. Extractions, wisdom teeth, bone grafting and sinus lifts all happen in this building, in the same rooms where you get your cleanings. You are not sent across the metro to a surgeon you have never met, only to be sent back for the crown. One team keeps one record, so the person placing your implant and the person fitting your final tooth already agree on the plan.',
        'Cost is the question patients are most hesitant to raise, so we raise it first. A single implant in the Kansas City area runs roughly $1,850 to $3,200, and a bridge is often cheaper up front. But a bridge usually needs replacing once or twice over the same span an implant lasts, so the lifetime cost tends to even out or tip toward the implant. We put both numbers in writing side by side, and you decide without pressure.'
      ],
      listTitle: 'What an implant can replace',
      list: [
        'A single missing tooth',
        'Several teeth in a row, held by an implant bridge',
        'A full upper or lower arch, with All-on-4 style treatment',
        'A failing tooth that needs to come out first'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we place',
      h2: 'Implant and oral surgery treatments',
      intro:
        'Whether you are missing one tooth or most of an arch, the surgical side of your care happens here, with sedation options when you want them.',
      columns: 3,
      items: [
        {
          icon: 'implant',
          title: 'Single-Tooth Implants',
          text: 'One post, one crown, and no work at all on the teeth either side. A straightforward single implant takes about three to four months from placement to final crown, across two short appointments. Most people say the placement visit itself was easier than a filling.'
        },
        {
          icon: 'shield-plus',
          title: 'Implant-Supported Bridges',
          text: 'Two implants hold a bridge that replaces three or four teeth in a row. It stays firmly in place, cleans easily with a floss threader, and leaves the healthy teeth next to it completely untouched. This is often the best value when several teeth are missing together.'
        },
        {
          icon: 'activity',
          title: 'Full-Arch Restoration',
          text: 'Four to six implants support a complete upper or lower arch, often in a single long visit. In most cases you leave with a temporary set of teeth the same day, then return about four months later for the final, stronger arch. You are never without teeth in between.'
        },
        {
          icon: 'bone',
          title: 'Bone Grafting & Sinus Lifts',
          text: 'When the jaw has thinned, we rebuild it before placing anything, using donor or synthetic bone. A sinus lift raises the floor of the sinus so upper back implants have solid bone to sit in. Both are routine here and add three to six months of healing to your timeline.'
        },
        {
          icon: 'first-aid',
          title: 'Extractions & Wisdom Teeth',
          text: 'Simple and surgical extractions, including impacted wisdom teeth, are done in-house with sedation available. Dr. Reed plans every removal in 3D first, which keeps the surgical time short and the recovery predictable. Most patients are back to normal within a few days.'
        },
        {
          icon: 'scan',
          title: '3D CBCT Planning',
          text: 'A cone-beam scan shows the exact bone height, width and nerve position in your jaw. We plan each implant in that scan before you ever sit in the chair, which is how we avoid surprises on placement day. It also lets us show you the finished result ahead of time.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'From first scan to final crown',
      intro:
        'Every implant follows the same arc, whether it is one tooth or a full arch. Here is what actually happens, visit by visit, and how long each stage usually takes.',
      items: [
        {
          title: 'Consultation and 3D scan',
          text: 'We take a cone-beam scan and go through your medical history, then talk about whether an implant, a bridge or another option fits best. You leave with a written estimate and a realistic timeline, not a vague range. If you need a graft, we tell you now rather than later.'
        },
        {
          title: 'Planning and any prep work',
          text: 'Dr. Reed maps the exact implant position in planning software and decides whether you need a bone graft or sinus lift first. If so, that grafting heals for three to six months before placement. Doing this step properly is what makes the surgery itself quick and uneventful.'
        },
        {
          title: 'Placement day',
          text: 'The implant is placed under local anaesthetic, with sedation if you would prefer it. A single implant usually takes 30 to 45 minutes, and you go home the same day with simple written aftercare. Most patients take it easy for a day and are back at work the next.'
        },
        {
          title: 'Healing and osseointegration',
          text: 'Over the next eight to sixteen weeks your bone grows into the implant surface, a process called osseointegration. You wear a temporary in the meantime and keep to softer foods for the first week or two. This quiet stretch is what gives the implant its strength.'
        },
        {
          title: 'Abutment and final crown',
          text: 'Once the implant is solid, we take a digital scan, attach the abutment and fit your final crown. Because everything has healed and settled, this visit tends to feel easier than placement did. You leave able to chew normally on that side again.'
        }
      ]
    },
    {
      type: 'split',
      id: 'in-house',
      eyebrow: 'One team, start to finish',
      h2: 'Placed and restored in-house by Dr. Reed',
      body: [
        'Many practices only do half the job. A surgeon places the implant and a different dentist makes the crown months later, which means two sets of records, two schedules and a gap where nobody quite owns the result. At TrueNorth, Dr. Marcus Reed does both. He has placed more than 2,400 implants and completed advanced training at the Misch International Implant Institute and the Dawson Academy, and he plans every case digitally before touching a patient.',
        'That matters most on the day something needs adjusting. If a fit is not perfect, the person who planned the position is the one who fixes it, usually the same day and without a second trip across town. You get a single treatment plan, one point of contact and a team that already knows your history before you walk in. It is also why our treatment coordinator can hand you one written cost instead of three separate quotes from three separate offices.'
      ],
      list: [
        '3D planning and placement by Dr. Reed',
        'Final crown designed and fitted on site',
        'Bone grafting and sinus lifts handled here',
        'Sedation options for surgical visits',
        'A written estimate before we start'
      ],
      image: '/img/team-marcus-reed.webp',
      imageAlt: 'Dr. Marcus Reed, implant and oral surgery dentist at TrueNorth Dental',
      reverse: false,
      cta: { label: 'Meet Dr. Reed', path: '/doctors' }
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Compare your options',
      h2: 'Implant, bridge or denture?',
      intro:
        'There is no single right answer for every mouth, and cost is only part of the decision. Here is how the three common ways to replace a tooth compare, so you can ask sharper questions at your consultation.',
      head: ['', 'Dental implant', 'Fixed bridge', 'Partial denture'],
      rows: [
        ['Replaces the root', 'Yes', 'No', 'No'],
        ['Touches neighbouring teeth', 'No', 'Yes, they are reshaped', 'Clasps onto them'],
        ['Typical lifespan', '20+ years with care', '7–15 years', '5–8 years, needs relining'],
        ['Preserves jaw bone', 'Yes', 'No', 'No'],
        ['Typical KC cost', '$1,850–$3,200 per tooth', '$1,200–$2,000', '$900–$1,800 per arch'],
        ['Time to finish', '3–6 months', '2–3 weeks', '3–5 weeks']
      ],
      note: 'Ranges reflect the Kansas City market in 2026 and vary with bone grafting, sedation and the crown you choose. Your written estimate will be exact.'
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Implant care by the numbers',
      intro: 'Fifteen years of implant and surgical care, mostly for neighbours here in the northland.',
      items: [
        { value: 2400, suffix: '+', label: 'Implants placed by Dr. Reed' },
        { value: 98, suffix: '%', label: 'Long-term implant success rate' },
        { value: 15, suffix: ' yrs', label: 'Serving the Kansas City northland' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Rating from 1,400+ reviews' }
      ]
    },
    {
      type: 'checklist',
      id: 'aftercare',
      eyebrow: 'After placement',
      h2: 'What the first week looks like',
      intro:
        'Placement is the easy part. The first week is mostly about leaving the site alone so it can clot and settle, and knowing which symptoms are normal.',
      columns: 2,
      items: [
        'Take your pain relief before the anaesthetic wears off',
        'Use an ice pack for 20 minutes on, 20 minutes off, for the first day',
        'Eat cool, soft foods for the first 48 hours',
        'Skip straws, smoking and vigorous rinsing for a full week',
        'Brush around the implant gently, avoiding the surgical site',
        'Start the prescribed mouthwash on day two',
        'Expect some swelling for three to four days, which is normal',
        'Call the office line if bleeding, pain or swelling gets worse'
      ]
    },
    {
      type: 'prose',
      id: 'timeline',
      eyebrow: 'The honest timeline',
      h2: 'Healing, timelines and what to expect',
      body: [
        'The part patients ask about most is time. A single implant with good bone underneath is usually finished in three to four months. Add a bone graft and you are looking at six to nine months. A full-arch case can have you in a fixed temporary within a day, but the final teeth still take about four months. We build the whole schedule up front so you can plan around work, travel and family without guessing.',
        'The healing itself is quiet. For the first two days you will notice some swelling and a bruise, and cold packs plus ordinary pain relief handle most of it. By day three the worst has passed. We ask you to skip straws, smoking and hard foods for a week, because suction and pressure are what disturb a fresh clot. After that, life returns to normal while the implant quietly fuses with bone.',
        'Long term, an implant is the closest thing we have to a real tooth. With good hygiene and regular visits it can last twenty years or more, which is why we compare it to a bridge that often needs replacing in seven to fifteen. It still needs cleaning, and it still needs you to show up for check-ups. The implant does not decay, but the bone and gums around it still deserve attention.',
        'Implants are not only for people who lost a tooth last month. Some of our most rewarding cases are patients who have lived with a gap for a decade or more. If the bone has shrunk, grafting rebuilds it. If the tooth was lost to gum disease, we settle the gums first so the implant has a healthy foundation. The plan changes from person to person, but the goal never does: a tooth you can chew on, clean and then forget about.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Dental implant questions',
      intro: 'The questions we hear most often, answered the way we would answer them in the chair.',
      items: [
        {
          q: 'Does getting an implant hurt?',
          a: 'Most patients are genuinely surprised by how little they feel. Placement is done under local anaesthetic, and we can add sedation if you would rather sleep through it. The first two days feel like a deep bruise, and ordinary pain relief covers it. By day three most people are eating normally again, and many tell us the whole thing was easier than the extraction that started it.'
        },
        {
          q: 'How long does the whole process take?',
          a: 'A straightforward single implant takes about three to four months from placement to final crown. If you need a bone graft or sinus lift first, add three to six months for that to heal. We give you the full timeline in writing before we begin, so nothing arrives as a surprise halfway through treatment. If your schedule is tight, tell us and we will map the appointments around it.'
        },
        {
          q: 'Am I a candidate if I have been missing teeth for years?',
          a: 'Usually yes, but it depends on how much bone is left. A 3D scan tells us in a single visit whether you have enough, or whether grafting can rebuild it first. Very few patients are told no outright, and even then there is often a bridge or a partial that will serve you well. One scan is usually all it takes to answer the question for good.'
        },
        {
          q: 'Does insurance cover implants?',
          a: 'Some plans cover part of the crown or the extraction but not the implant itself. We are in-network with Delta Dental, Cigna, Aetna, MetLife and others, and Sofia checks your specific plan before you commit to anything. Financing through CareCredit, Cherry and Sunbit spreads the rest across manageable monthly payments.'
        },
        {
          q: 'Can I replace a full arch of teeth in one day?',
          a: 'Often, yes. With All-on-4 style treatment we place four to six implants and fit a temporary arch the same day, so you are never without teeth. The final, stronger set goes in about four months later once the implants have healed. You eat soft foods during that stretch and then return to a normal diet. You will also avoid chewing directly on the temporary arch at first, which is easier than it sounds.'
        },
        {
          q: 'What if I grind my teeth?',
          a: 'Grinding puts extra load on implants, so we plan for it rather than hoping it goes away. That might mean a night guard, adjusting the shape of the final crown, or timing your treatment around other work. Dr. Reed will flag it during planning, because an implant that is loaded badly can fail. It is a short conversation that can save a great deal of trouble later.'
        },
        {
          q: 'Do you offer sedation for implant surgery?',
          a: 'Yes. We offer nitrous oxide and oral sedation, and Dr. Hart holds a Missouri sedation permit. If you are nervous about surgery, tell us at the consultation and we will build the appointment around your comfort. You should never feel rushed into a surgical chair before you are ready.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Does getting an implant hurt?',
      a: 'Most patients are genuinely surprised by how little they feel. Placement is done under local anaesthetic, and we can add sedation if you would rather sleep through it. The first two days feel like a deep bruise, and ordinary pain relief covers it. By day three most people are eating normally again, and many tell us the whole thing was easier than the extraction that started it.'
    },
    {
      q: 'How long does the whole process take?',
      a: 'A straightforward single implant takes about three to four months from placement to final crown. If you need a bone graft or sinus lift first, add three to six months for that to heal. We give you the full timeline in writing before we begin, so nothing arrives as a surprise halfway through treatment. If your schedule is tight, tell us and we will map the appointments around it.'
    },
    {
      q: 'Am I a candidate if I have been missing teeth for years?',
      a: 'Usually yes, but it depends on how much bone is left. A 3D scan tells us in a single visit whether you have enough, or whether grafting can rebuild it first. Very few patients are told no outright, and even then there is often a bridge or a partial that will serve you well. One scan is usually all it takes to answer the question for good.'
    },
    {
      q: 'Does insurance cover implants?',
      a: 'Some plans cover part of the crown or the extraction but not the implant itself. We are in-network with Delta Dental, Cigna, Aetna, MetLife and others, and Sofia checks your specific plan before you commit to anything. Financing through CareCredit, Cherry and Sunbit spreads the rest across manageable monthly payments.'
    },
    {
      q: 'Can I replace a full arch of teeth in one day?',
      a: 'Often, yes. With All-on-4 style treatment we place four to six implants and fit a temporary arch the same day, so you are never without teeth. The final, stronger set goes in about four months later once the implants have healed. You eat soft foods during that stretch and then return to a normal diet. You will also avoid chewing directly on the temporary arch at first, which is easier than it sounds.'
    },
    {
      q: 'What if I grind my teeth?',
      a: 'Grinding puts extra load on implants, so we plan for it rather than hoping it goes away. That might mean a night guard, adjusting the shape of the final crown, or timing your treatment around other work. Dr. Reed will flag it during planning, because an implant that is loaded badly can fail. It is a short conversation that can save a great deal of trouble later.'
    },
    {
      q: 'Do you offer sedation for implant surgery?',
      a: 'Yes. We offer nitrous oxide and oral sedation, and Dr. Hart holds a Missouri sedation permit. If you are nervous about surgery, tell us at the consultation and we will build the appointment around your comfort. You should never feel rushed into a surgical chair before you are ready.'
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
