'use strict';

/**
 * Service detail page: Cosmetic Dentistry & Smile Design.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'cosmetic-dentistry',
  order: 2,
  name: 'Cosmetic Dentistry & Smile Design',
  shortName: 'Cosmetic Dentistry',
  icon: 'sparkles',
  image: '/img/svc-cosmetic-dentistry.webp',
  imageAlt: 'Veneer shade guide held beside a patient’s smile at TrueNorth Dental in Kansas City',
  tagline: 'A smile that looks like yours, only more finished.',
  metaTitle: 'Cosmetic Dentistry & Smile Design | Kansas City Northland',
  metaDescription:
    'Porcelain veneers, bonding, tooth-coloured crowns and digital smile design from a Kansas City northland cosmetic dentist. Preview your smile before we begin.',
  metaKeywords:
    'cosmetic dentist kansas city, porcelain veneers northland, smile makeover kansas city mo, composite bonding gladstone, tooth coloured crowns liberty mo, digital smile design parkville',
  eyebrow: 'Cosmetic & smile design',
  heroIntro:
    'Veneers, bonding and crowns planned around your face rather than a catalogue, so the result looks like a better version of you, not someone else’s teeth.',
  priceFrom: 'From $450',
  priceValue: 450,
  duration: '60–90 minutes per visit',
  highlights: [
    'Porcelain veneers',
    'Composite bonding',
    'Smile makeovers',
    'Tooth-coloured crowns',
    'Gum contouring',
    'Digital smile design'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-cosmetic',
      eyebrow: 'Why it is not vanity',
      h2: 'Cosmetic dentistry is really about proportion and confidence',
      body: [
        'A good cosmetic result is not about making teeth as white and as big as possible. It is about proportion: how the width of a tooth relates to its height, how the smile line follows the curve of your lower lip, and how the shade sits against your skin tone. Get those relationships right and nobody can tell you had anything done. They just notice you look well, and they cannot quite say why.',
        'That is why we start every cosmetic case with your face, not your teeth. Dr. Marcus Reed photographs your smile from several angles, measures the proportions, and talks through what you actually dislike before suggesting any treatment. Sometimes the answer is a simple whitening and a bit of bonding. Sometimes it is a handful of veneers. We will tell you honestly which one your case calls for, even when the smaller option earns us less.',
        'The materials have improved enormously in the last decade. Modern porcelain is thin enough to bond onto the front of a tooth with minimal preparation, and it holds its gloss for years without staining the way older ceramics did. Composite resin can be layered and sculpted freehand, which makes it ideal for closing small gaps or repairing a chipped edge in a single visit. Both can be matched so closely to your neighbours that the repair simply disappears.',
        'We also build in a try-on stage before anything permanent happens. Using digital design software and a temporary mock-up, you can see the proposed shape on your own teeth and wear it for a few days. If the canine feels a touch long or the shade reads too bright in daylight, we change it before a single tooth is touched permanently. That one step prevents most of the regrets people bring to us from other offices.',
        'None of this has to happen all at once. Many patients spread a smile makeover across several months to suit their budget, starting with the teeth that bother them most and adding more later. We map the sequence, the costs and the healing time up front so there are no surprises halfway through, and we will happily pause treatment if life gets in the way.'
      ]
    },
    {
      type: 'cards',
      id: 'treatments',
      eyebrow: 'What we offer',
      h2: 'Eight ways to change a smile',
      intro:
        'Cosmetic dentistry is a toolkit rather than a single treatment. Most makeovers combine two or three of these, chosen to suit your teeth and your budget.',
      columns: 4,
      items: [
        {
          icon: 'sparkles',
          title: 'Porcelain veneers',
          text: 'Thin custom shells bonded to the front of your teeth to change shape, shade and alignment. We usually prepare less than half a millimetre of enamel, and a set of six to ten teeth takes two or three visits with a try-on in between.'
        },
        {
          icon: 'tooth',
          title: 'Composite bonding',
          text: 'Tooth-coloured resin sculpted directly onto the tooth by hand, then shaped and polished under natural light. It is ideal for chips, small gaps and worn edges, and most cases finish in one appointment with no lab work or temporary.'
        },
        {
          icon: 'smile-plus',
          title: 'Smile makeovers',
          text: 'A planned combination of treatments across the whole smile, sequenced so each stage supports the next. We design it around your face and your budget, and you approve the full plan before we begin any work.'
        },
        {
          icon: 'certificate',
          title: 'Tooth-coloured crowns',
          text: 'All-ceramic crowns that cover a heavily worn or root-treated tooth while matching the shade of its neighbours. Zirconia and lithium disilicate both give a natural translucency that older metal crowns simply cannot match.'
        },
        {
          icon: 'activity',
          title: 'Gum contouring',
          text: 'Reshaping the gumline with a soft-tissue laser to even out a gummy smile or a lopsided edge. It is quick, comfortable and often heals within a week, and it can transform how an entire smile reads from across a room.'
        },
        {
          icon: 'scan',
          title: 'Digital smile design',
          text: 'Photos, a 3D scan and design software let us plan and preview your result before treatment. You see the proposed smile on your own face and can adjust the shape and shade before we commit to anything permanent.'
        },
        {
          icon: 'aligner',
          title: 'Diastema closure',
          text: 'Closing the gap between your front teeth with bonding or veneers, or with clear aligners if the spacing is wider. The right choice depends on the gap size and whether your bite needs adjusting at the same time.'
        },
        {
          icon: 'brush',
          title: 'Enamel reshaping',
          text: 'Subtle contouring of the edges and surfaces of teeth to smooth chips and soften a pointed shape. It is a small change that makes a surprising difference to the overall line and balance of a smile.'
        }
      ]
    },
    {
      type: 'split',
      id: 'design',
      eyebrow: 'See it first',
      h2: 'You preview the smile before we build it',
      body: [
        'Cosmetic dentistry is the one part of dentistry where you get to test-drive the result. We begin with a set of photographs and a digital scan of your teeth, then design the proposed changes on a screen in front of you. You can watch the shape and shade change in real time and say exactly what you like and what you do not.',
        'From there we make a temporary mock-up you actually wear. It sits over your teeth in tooth-coloured material so you can smile in the mirror, talk to a friend and see how it looks in daylight and in the office. If something feels off, we adjust the design and reprint it. This stage costs you nothing but a little time.',
        'Only once you are happy do we move to the permanent work. That sequence removes the guesswork from a smile makeover, and it means you never sit through a set of veneers wondering whether you will like them when they are bonded. You already know.'
      ],
      list: [
        'Photographs and a 3D digital scan',
        'Design reviewed with you on screen',
        'A try-on mock-up you can wear home',
        'Adjustments before any permanent work begins'
      ],
      image: '/img/svc-cosmetic-dentistry.webp',
      imageAlt: 'Shade guide and digital smile design images used to plan cosmetic dentistry',
      reverse: true,
      cta: { label: 'Book a smile consultation', path: '/contact' }
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      h2: 'The smile makeover, stage by stage',
      intro:
        'Every case is different, but most cosmetic plans follow the same five stages from first conversation to final polish.',
      items: [
        {
          title: 'Consultation and photos',
          text: 'A relaxed appointment where you tell us what you dislike and we photograph and scan your teeth. There is no pressure to book treatment on the day, and no charge for the conversation.'
        },
        {
          title: 'Design and preview',
          text: 'We build a digital design of your new smile and show you a mock-up you can wear. You approve the shape and shade before we plan the actual appointments and costs.'
        },
        {
          title: 'Health first',
          text: 'Any decay, gum disease or failing old filling is treated before cosmetic work begins. A beautiful veneer on an unhealthy tooth does not last, so we fix the foundation first.'
        },
        {
          title: 'The cosmetic work',
          text: 'Bonding is usually done in one visit, veneers and crowns across two or three. We shade-match in natural light and let you see each stage as it is placed.'
        },
        {
          title: 'Finishing and aftercare',
          text: 'We polish, check your bite and show you how to care for the new work. You get a written maintenance plan, and we review the result at your next hygiene visit.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'Choosing a treatment',
      h2: 'Veneers, bonding or crowns?',
      intro:
        'These three treatments can all change how a tooth looks, but they suit different problems and last for different lengths of time. Here is the honest comparison we walk through in the chair.',
      head: ['Treatment', 'Best for', 'Typical lifespan'],
      rows: [
        ['Porcelain veneers', 'Shape, shade and alignment across several front teeth', '10–15 years'],
        ['Composite bonding', 'Chips, small gaps and single-tooth repairs', '5–8 years'],
        ['Tooth-coloured crowns', 'Heavily worn, cracked or root-treated teeth', '10–15 years'],
        ['Gum contouring', 'A gummy or uneven gumline', 'Long-lasting, may need touch-ups'],
        ['Whitening', 'Yellowing with otherwise healthy, well-shaped teeth', '1–3 years with upkeep']
      ],
      note: 'Bonding costs less and is quicker, but it stains and chips sooner than porcelain. Veneers cost more and last longer. We will tell you which one your teeth actually need.'
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Cosmetic work with a plan behind it',
      intro: 'A few numbers that shape how we approach smile design.',
      items: [
        { value: 1400, suffix: '+', label: 'Cosmetic and restorative cases completed' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,400+ reviews' },
        { value: 15, suffix: ' yrs', label: 'Designing smiles in the Kansas City northland' },
        { value: 2, suffix: '–3 visits', label: 'Typical timeline for a veneer set' }
      ]
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'Your consultation',
      h2: 'What a smile consultation includes',
      intro:
        'A cosmetic consultation runs about forty-five minutes and is designed to give you a clear picture before you commit to anything.',
      columns: 2,
      items: [
        'Full smile and facial photographs',
        '3D digital scan of your teeth',
        'Discussion of what you want to change',
        'Shade and proportion assessment',
        'Digital smile design preview',
        'A wear-it-home mock-up',
        'Written treatment options and costs',
        'Sequencing and timeline explained',
        'Honest advice on what you do not need',
        'No pressure to book on the day'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Cosmetic dentistry questions, answered',
      intro: 'The things patients most often want to know before they begin.',
      items: [
        {
          q: 'Will veneers look obviously fake?',
          a: 'Not when they are designed properly. We match the shade and translucency to your other teeth and choose a shape that suits your face, rather than the uniform white blocks people picture. Most patients say the result looks like their own teeth on a very good day, and friends usually notice the person rather than the dentistry.'
        },
        {
          q: 'How much tooth do you remove for veneers?',
          a: 'Usually less than half a millimetre of enamel from the front surface, and often none at all for a minimal-prep case. That is thinner than a fingernail. We will tell you before treatment exactly how much preparation your teeth need, and we always choose the most conservative option that still gives you the result you want.'
        },
        {
          q: 'Is bonding as good as veneers?',
          a: 'For a single chip or small gap, bonding is excellent and far less expensive. For changes across several teeth, porcelain holds its colour and shape longer. Bonding lasts five to eight years, while veneers typically last ten to fifteen with good care. We will recommend the one that fits your problem rather than the one that costs the most.'
        },
        {
          q: 'How long does a smile makeover take?',
          a: 'A single bonding visit can finish in an hour. A set of six to ten veneers usually takes two to three appointments spread over three to five weeks, including the try-on stage. We give you the full timeline in writing before you start, so you can plan around work and family commitments.'
        },
        {
          q: 'Will cosmetic work damage my natural teeth?',
          a: 'When it is done well, no. We remove as little enamel as possible and always treat underlying decay or gum disease first. The aim is to preserve healthy tooth structure, not to grind teeth down for the sake of appearance. A conservative approach also means less sensitivity afterwards and easier repairs down the road.'
        },
        {
          q: 'Can I whiten my teeth instead of getting veneers?',
          a: 'Often yes, and we will suggest it if your teeth are healthy and simply yellow. Whitening cannot change the shape or alignment of a tooth, so chips, gaps and crowding still need bonding or veneers. We will tell you honestly which problem you actually have and whether whitening alone will get you there.'
        },
        {
          q: 'Do you offer financing for cosmetic treatment?',
          a: 'Yes. We work with CareCredit, Cherry and Sunbit, and many plans offer interest-free periods on approved credit. We can also stage treatment across several months so the cost is spread rather than paid all at once, and we will give you a written estimate before anything begins.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'See your new smile before you commit',
      text: 'Book a cosmetic consultation and preview a digital design on your own face. No pressure, no obligation, and a clear plan with costs in writing.',
      primary: { label: 'Book a consultation', path: '/contact' },
      secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
    }
  ],
  faqs: [
    {
      q: 'Will veneers look obviously fake?',
      a: 'Not when they are designed properly. We match the shade and translucency to your other teeth and choose a shape that suits your face, rather than the uniform white blocks people picture. Most patients say the result looks like their own teeth on a very good day, and friends usually notice the person rather than the dentistry.'
    },
    {
      q: 'How much tooth do you remove for veneers?',
      a: 'Usually less than half a millimetre of enamel from the front surface, and often none at all for a minimal-prep case. That is thinner than a fingernail. We will tell you before treatment exactly how much preparation your teeth need, and we always choose the most conservative option that still gives you the result you want.'
    },
    {
      q: 'Is bonding as good as veneers?',
      a: 'For a single chip or small gap, bonding is excellent and far less expensive. For changes across several teeth, porcelain holds its colour and shape longer. Bonding lasts five to eight years, while veneers typically last ten to fifteen with good care. We will recommend the one that fits your problem rather than the one that costs the most.'
    },
    {
      q: 'How long does a smile makeover take?',
      a: 'A single bonding visit can finish in an hour. A set of six to ten veneers usually takes two to three appointments spread over three to five weeks, including the try-on stage. We give you the full timeline in writing before you start, so you can plan around work and family commitments.'
    },
    {
      q: 'Will cosmetic work damage my natural teeth?',
      a: 'When it is done well, no. We remove as little enamel as possible and always treat underlying decay or gum disease first. The aim is to preserve healthy tooth structure, not to grind teeth down for the sake of appearance. A conservative approach also means less sensitivity afterwards and easier repairs down the road.'
    },
    {
      q: 'Can I whiten my teeth instead of getting veneers?',
      a: 'Often yes, and we will suggest it if your teeth are healthy and simply yellow. Whitening cannot change the shape or alignment of a tooth, so chips, gaps and crowding still need bonding or veneers. We will tell you honestly which problem you actually have and whether whitening alone will get you there.'
    },
    {
      q: 'Do you offer financing for cosmetic treatment?',
      a: 'Yes. We work with CareCredit, Cherry and Sunbit, and many plans offer interest-free periods on approved credit. We can also stage treatment across several months so the cost is spread rather than paid all at once, and we will give you a written estimate before anything begins.'
    }
  ],
  related: ['teeth-whitening', 'general-dentistry'],
  cta: {
    h2: 'Design the smile you actually want',
    text: 'Start with a cosmetic consultation, preview the result digitally and decide in your own time. We will give you the options, the costs and the honest advice.',
    primary: { label: 'Book your consultation', path: '/contact' }
  }
};
