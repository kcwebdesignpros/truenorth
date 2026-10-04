'use strict';
/**
 * Service detail page — Braces & Clear Aligners.
 * Data only. No markup, no CSS classes. Rendered by generic block templates.
 */

module.exports = {
  slug: 'orthodontics',
  order: 5,
  name: 'Braces & Clear Aligners',
  shortName: 'Orthodontics',
  icon: 'braces',
  image: '/img/svc-orthodontics.webp',
  imageAlt: 'Teen holding a clear aligner at TrueNorth Dental in Kansas City',
  tagline: 'Straight teeth for kids, teens and adults, without the guesswork.',
  metaTitle: 'Braces & Clear Aligners in Kansas City | TrueNorth',
  metaDescription:
    'Clear aligners, ceramic and metal braces for kids, teens and adults in the Kansas City northland, led by Dr. Priya Nair. Free school screenings. Book today.',
  metaKeywords:
    'braces kansas city, clear aligners northland, invisalign kansas city, orthodontist gladstone mo, adult orthodontics, early treatment children, retainers',
  eyebrow: 'Straighten with confidence',
  heroIntro:
    'Braces and clear aligners for every age, from a child’s first check at seven to adults who never had the chance. Dr. Priya Nair leads our orthodontic care.',
  priceFrom: 'From $3,200',
  priceValue: 3200,
  duration: '6–24 months',
  highlights: [
    'Clear Aligners',
    'Ceramic Braces',
    'Metal Braces',
    'Early Treatment (Ages 7–10)',
    'Adult Orthodontics',
    'Retainers & Retention'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-straighten',
      eyebrow: 'Why it matters',
      h2: 'Straight teeth are easier to keep healthy',
      body: [
        'Most people think of orthodontics as a cosmetic choice, and the confidence part is real. But straight teeth are also simpler to clean. When teeth overlap, the brush and floss cannot reach the tight spots, and that is where decay and gum disease quietly begin. Aligning the teeth removes those hiding places and makes a normal two-minute routine actually work.',
        'A good bite also protects your teeth from wear. When the upper and lower teeth meet unevenly, a few of them take more force than they should, which leads to chips, cracks and jaw strain over the years. Correcting the bite spreads that force evenly. Many adult patients come to us for headaches or a sore jaw and find that the underlying cause is a bite that has never quite lined up.',
        'Timing matters, especially for children. The jaw is still growing between ages seven and ten, which is the one window when a small, simple intervention can guide development and prevent a much larger problem later. We often see a crossbite or severe crowding at seven that could have been eased in months, but by fourteen needs two years of full treatment.',
        'For adults, the old objection no longer applies. Modern aligners are nearly invisible, and ceramic brackets blend in from a normal talking distance. Roughly one in four of our orthodontic patients is an adult, many of them straightening their teeth for the first time. You are never too old for a bite that works properly.',
        'Plenty of adults arrive apologising for their teeth, usually because someone once told them they should have had braces as a teenager. We do not work that way. A crooked smile is not a character flaw, and nobody here will make you feel small about it. What we will do is show you, on a screen, what is achievable now and how long it would take. Then you decide, in your own time, whether it is worth doing.'
      ],
      listTitle: 'Signs it may be time for a check',
      list: [
        'Crowded or overlapping front teeth',
        'A bite that feels uneven or wears teeth down',
        'A child who lost baby teeth early or late',
        'Jaw clicking, soreness or frequent headaches',
        'Teeth that have shifted back after old braces'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'Your options',
      h2: 'Braces and aligner treatments',
      intro:
        'There is more than one way to straighten teeth, and the right choice depends on your bite, your age and how visible you are happy for treatment to be.',
      columns: 3,
      items: [
        {
          icon: 'aligner',
          title: 'Clear Aligners',
          text: 'A series of custom, nearly invisible trays that move your teeth in small steps. You wear each set for one to two weeks and take them out to eat and clean. They work best for mild to moderate crowding and spacing, and only when you wear them 20 to 22 hours a day.'
        },
        {
          icon: 'braces',
          title: 'Ceramic Braces',
          text: 'Fixed brackets made from tooth-coloured ceramic, so they blend in far more than metal. They handle the same complex movements as metal braces, which makes them a strong middle ground for teens and adults who want reliability without the shine. Treatment usually runs 18 to 24 months.'
        },
        {
          icon: 'tooth',
          title: 'Metal Braces',
          text: 'The traditional stainless steel brackets and wire, and still the most durable option we offer. They are the best choice for complex bites, rotated teeth and younger patients who may not keep up with aligners. Modern wires are lighter than the braces many parents remember.'
        },
        {
          icon: 'baby',
          title: 'Early Treatment (7–10)',
          text: 'A first orthodontic check around age seven catches problems while the jaw is still growing. Treatment at this age is often short and simple, such as guiding a narrow arch or correcting a crossbite. It can prevent the need for extractions or jaw surgery later on.'
        },
        {
          icon: 'user',
          title: 'Adult Orthodontics',
          text: 'Adults make up roughly a quarter of our orthodontic patients. Aligners let you straighten your teeth without anyone at work noticing, and braces are still an option when the bite is complex. We plan around existing crowns, bridges and gum health so nothing is compromised.'
        },
        {
          icon: 'shield-check',
          title: 'Retainers & Retention',
          text: 'Teeth drift back for life, so retention is part of the treatment, not an extra. Most patients finish with a fixed wire behind the front teeth plus a removable night retainer. We check both at your follow-up visits and replace them if they wear out.'
        },
        {
          icon: 'shield',
          title: 'Habit Appliances',
          text: 'Thumb sucking, tongue thrusting and mouth breathing can undo the best braces. For younger children we sometimes fit a simple habit appliance alongside early treatment to break the pattern before it shapes the jaw. It is gentle, removable and usually needed for only a few months.'
        }
      ]
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'From first scan to your last retainer check',
      intro:
        'Orthodontics is a series of small appointments rather than one big event. Here is the whole path, so you know what you are committing to before you start.',
      items: [
        {
          title: 'Consultation and digital scan',
          text: 'We take an intraoral scan, photos and X-rays, then examine how your teeth and jaw actually meet. There are no impression trays, which matters most for children with a strong gag reflex. This visit is free and there is no pressure to book treatment the same day.'
        },
        {
          title: 'Your treatment plan',
          text: 'Dr. Nair shows you a digital simulation of the finished result and explains how long it will take and what it will cost. You see the end point before you commit, not a vague promise. If treatment can safely wait a year, she will tell you that too.'
        },
        {
          title: 'Fitting or first trays',
          text: 'Braces are bonded in a single visit of about an hour, and you leave with instructions on eating and cleaning. Aligner patients receive their first few sets and a schedule for changing them. Either way, you know exactly what to expect in the first week.'
        },
        {
          title: 'Adjustments along the way',
          text: 'Braces are checked every six to eight weeks so the wire can be changed and progress confirmed. Aligner patients are seen less often, around every eight to ten weeks, and can send photos in between. Each visit is short, usually fifteen to twenty minutes.'
        },
        {
          title: 'Finishing and polishing',
          text: 'When the teeth are aligned, we remove the braces, polish away any leftover adhesive and check the bite from every angle. Small refinements at this stage are common and usually take one extra visit. We do not call it finished until the fit and the look are both where we want them.'
        },
        {
          title: 'Retention for life',
          text: 'When the teeth are where we want them, the braces come off and a retainer is fitted. We give you a fixed wire and a removable night guard, then check them at a follow-up. Wear your retainer as instructed and the result holds for decades.'
        }
      ]
    },
    {
      type: 'split',
      id: 'scanning',
      eyebrow: 'No goopy trays',
      h2: 'A digital scan you can see on screen',
      body: [
        'Older orthodontics started with a tray of soft, foul-tasting putty pressed into your mouth and held there for several minutes. It made people gag, it was uncomfortable for children, and if it set badly the whole thing had to be redone. We replaced it with an intraoral scanner that takes a few minutes and never touches the back of your throat.',
        'The scanner builds a detailed 3D model of your teeth that appears on the screen beside you. That model drives the aligner manufacturing and lets Dr. Nair plan movements to a fraction of a millimetre. You can watch your own teeth move across the simulation before treatment begins, which turns a vague process into something you can actually picture and agree to.'
      ],
      list: [
        'A few minutes instead of ten',
        'No putty, no gagging, no retakes',
        'A 3D model you can see immediately',
        'A simulation of your finished smile',
        'A digital record we can compare over time'
      ],
      image: '/img/team-priya-nair.webp',
      imageAlt: 'Dr. Priya Nair, orthodontist at TrueNorth Dental in Kansas City',
      reverse: true,
      cta: { label: 'Meet Dr. Nair', path: '/doctors' }
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Compare your options',
      h2: 'Aligners or braces?',
      intro:
        'Both straighten teeth well when they are used properly. The honest difference comes down to your bite, your lifestyle and how disciplined you are about wear time.',
      head: ['', 'Clear aligners', 'Ceramic braces', 'Metal braces'],
      rows: [
        ['How visible', 'Nearly invisible', 'Tooth-coloured brackets', 'Visible metal'],
        ['Removable', 'Yes, to eat and clean', 'No', 'No'],
        ['Typical treatment', '6–18 months', '18–24 months', '18–24 months'],
        ['Best for', 'Mild to moderate crowding', 'Moderate to complex bites', 'Complex bites, all ages'],
        ['Daily commitment', '20–22 hours of wear', 'Hygiene only', 'Hygiene only'],
        ['Typical KC cost', '$3,200–$6,500', '$3,800–$6,000', '$3,000–$5,200']
      ],
      note: 'Costs reflect the Kansas City market in 2026 and depend on case complexity and treatment length. You receive a full written quote after your free consultation.'
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Orthodontics by the numbers',
      intro: 'Eleven years of orthodontic care, and a lot of northland school gymnasiums along the way.',
      items: [
        { value: 1800, suffix: '+', label: 'Orthodontic cases treated by Dr. Nair' },
        { value: 4000, suffix: '+', label: 'Children screened at school, free of charge' },
        { value: 25, suffix: '%', label: 'Of our patients are adults' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Rating from 1,400+ reviews' }
      ]
    },
    {
      type: 'checklist',
      id: 'first-weeks',
      eyebrow: 'Getting started',
      h2: 'What to expect in the first weeks',
      intro:
        'The first week is the adjustment period. Knowing what is normal helps you settle in faster and stops small worries from turning into big ones.',
      columns: 2,
      items: [
        'Expect mild soreness for two to three days after braces go on',
        'Stick to soft foods until chewing feels comfortable again',
        'Use the wax we give you on any bracket that rubs',
        'Brush after every meal with braces on',
        'Change aligners at night so the tightness passes while you sleep',
        'Clean aligners with cool water, never hot',
        'Keep your aligners in their case when they are out',
        'Call us if a bracket comes loose or a wire pokes'
      ]
    },
    {
      type: 'prose',
      id: 'timelines',
      eyebrow: 'What to expect',
      h2: 'Timelines, comfort and the school programme',
      body: [
        'Treatment length depends on how far the teeth need to move, not on the system you choose. Mild crowding might finish in six to twelve months, while a complex bite can take two years. Aligner cases are often on the shorter end because small movements are planned in fine steps. After your scan we give you a realistic estimate, and if the number is long we will explain exactly why.',
        'Discomfort is mild and front-loaded. Braces feel tight for two or three days after each adjustment, and aligners feel firm for the first day of every new set. That pressure is the teeth moving, and it fades on its own. We give you wax for rubbing brackets and simple advice on soft foods, and we would rather you called us than quietly endured a wire that pokes.',
        'Dr. Nair also runs our free school screening programme, which has checked more than 4,000 children across the northland at no charge. If something needs a closer look, we send a note home and offer a free orthodontic consultation. Schools in Clay and Platte County can call the office to arrange a visit, and we bring everything we need to the gymnasium.',
        'Children handle orthodontics better than most parents expect. Braces come with a few weeks of adjustment, then they simply become part of the routine. We give young patients clear rules about what to avoid, from hard sweets to chewing on pen lids, and we see them often enough to catch a loose bracket before it becomes a problem. If your child plays sport or a musical instrument, tell us and we will shape the plan around it.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Orthodontic questions',
      intro: 'The things parents and adult patients ask us most, answered plainly.',
      items: [
        {
          q: 'At what age should my child first see an orthodontist?',
          a: 'The American Association of Orthodontists recommends a first check around age seven, while the jaw is still growing. Most seven-year-olds need nothing more than monitoring, and we will say so honestly. If early treatment would help, the window between seven and ten is when a small intervention can prevent a much bigger problem later. That first visit is free, and you are under no obligation to begin treatment afterwards.'
        },
        {
          q: 'Are clear aligners as effective as braces?',
          a: 'For mild to moderate crowding and spacing, aligners work just as well as braces when they are worn properly. The catch is wear time, because aligners only work about 20 to 22 hours a day. Complex bites, rotated teeth and large movements still respond better to braces, and we will tell you which camp you fall into. If you would struggle to keep them in that long, we will say so rather than selling you the system you asked about.'
        },
        {
          q: 'How long will treatment take?',
          a: 'Most cases run between 12 and 24 months. Aligner cases are often on the shorter end, around 6 to 18 months, while complex bites take longer. We give you a realistic estimate after your scan, not a number designed to win your business, and we update it as treatment progresses. If progress ever stalls, we will tell you why rather than quietly stretching the estimate.'
        },
        {
          q: 'Do you still use impression trays?',
          a: 'No. We use an intraoral scanner, which takes a few minutes and produces a digital model of your teeth on screen. It is far more comfortable than the old putty trays, especially for children with a strong gag reflex. You also see a simulation of your finished smile before you decide on treatment. The digital model is also more precise than putty ever was, which means better fitting aligners and fewer remakes.'
        },
        {
          q: 'Can adults get braces without it being obvious?',
          a: 'Yes, and roughly one in four of our orthodontic patients is an adult. Clear aligners are nearly invisible, and ceramic braces use tooth-coloured brackets that blend in from a normal talking distance. Many adults choose aligners for the front teeth and accept braces only where the bite needs more force. In most cases nobody has to know you are in treatment at all.'
        },
        {
          q: 'What happens after treatment ends?',
          a: 'Retention is not optional, because teeth drift back for life. Most patients get a fixed wire behind the front teeth plus a removable retainer to wear at night. Wear it as instructed and your result holds for decades; skip it and the teeth will move again, which is the one part we cannot do for you. We replace retainers as they wear out and will remind you when a new one is due.'
        },
        {
          q: 'Do you offer free school screenings?',
          a: 'Yes. Dr. Nair runs our school screening programme and has checked more than 4,000 local children across the northland at no charge. If something needs a closer look, we send a note home and offer a free orthodontic consultation. Schools in Clay and Platte County can contact the office to arrange a visit, and we leave the classrooms exactly as we found them.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'At what age should my child first see an orthodontist?',
      a: 'The American Association of Orthodontists recommends a first check around age seven, while the jaw is still growing. Most seven-year-olds need nothing more than monitoring, and we will say so honestly. If early treatment would help, the window between seven and ten is when a small intervention can prevent a much bigger problem later. That first visit is free, and you are under no obligation to begin treatment afterwards.'
    },
    {
      q: 'Are clear aligners as effective as braces?',
      a: 'For mild to moderate crowding and spacing, aligners work just as well as braces when they are worn properly. The catch is wear time, because aligners only work about 20 to 22 hours a day. Complex bites, rotated teeth and large movements still respond better to braces, and we will tell you which camp you fall into. If you would struggle to keep them in that long, we will say so rather than selling you the system you asked about.'
    },
    {
      q: 'How long will treatment take?',
      a: 'Most cases run between 12 and 24 months. Aligner cases are often on the shorter end, around 6 to 18 months, while complex bites take longer. We give you a realistic estimate after your scan, not a number designed to win your business, and we update it as treatment progresses. If progress ever stalls, we will tell you why rather than quietly stretching the estimate.'
    },
    {
      q: 'Do you still use impression trays?',
      a: 'No. We use an intraoral scanner, which takes a few minutes and produces a digital model of your teeth on screen. It is far more comfortable than the old putty trays, especially for children with a strong gag reflex. You also see a simulation of your finished smile before you decide on treatment. The digital model is also more precise than putty ever was, which means better fitting aligners and fewer remakes.'
    },
    {
      q: 'Can adults get braces without it being obvious?',
      a: 'Yes, and roughly one in four of our orthodontic patients is an adult. Clear aligners are nearly invisible, and ceramic braces use tooth-coloured brackets that blend in from a normal talking distance. Many adults choose aligners for the front teeth and accept braces only where the bite needs more force. In most cases nobody has to know you are in treatment at all.'
    },
    {
      q: 'What happens after treatment ends?',
      a: 'Retention is not optional, because teeth drift back for life. Most patients get a fixed wire behind the front teeth plus a removable retainer to wear at night. Wear it as instructed and your result holds for decades; skip it and the teeth will move again, which is the one part we cannot do for you. We replace retainers as they wear out and will remind you when a new one is due.'
    },
    {
      q: 'Do you offer free school screenings?',
      a: 'Yes. Dr. Nair runs our school screening programme and has checked more than 4,000 local children across the northland at no charge. If something needs a closer look, we send a note home and offer a free orthodontic consultation. Schools in Clay and Platte County can contact the office to arrange a visit, and we leave the classrooms exactly as we found them.'
    }
  ],
  related: ['general-dentistry', 'dental-implants', 'teeth-whitening'],
  cta: {
    h2: 'See your future smile before you commit',
    text: 'Book a free orthodontic consultation and leave with a digital simulation of your finished result, plus a clear price.',
    primary: { label: 'Book a free consult', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
