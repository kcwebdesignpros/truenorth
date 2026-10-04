'use strict';
/**
 * Patient Reviews page — data/pages/reviews.js
 * Rendered by views/page.ejs. Content only; no markup.
 */

module.exports = {
  slug: 'reviews',
  path: '/reviews',
  name: 'Patient Reviews',
  metaTitle: 'Patient Reviews | TrueNorth Dental, Kansas City',
  metaDescription:
    'Read 1,401 verified reviews of TrueNorth Dental in Kansas City, MO. A 4.9-star average from northland patients since 2011 — here is exactly what they say.',
  metaKeywords:
    'kansas city dentist reviews, northland dental reviews, truenorth dental reviews, kansas city patient testimonials, google reviews dentist kansas city, yelp dentist northland',
  eyebrow: 'Patient Reviews',
  h1: 'What Northland Patients Actually Say About Us',
  heroIntro:
    'More than 1,400 neighbours have reviewed TrueNorth Dental since we opened in 2011. Here is the honest summary — the praise, the themes, and how we handle the reviews that sting.',
  heroImage: '/img/cta-smile.webp',
  heroImageAlt: 'Group of happy TrueNorth Dental patients laughing together outdoors',
  heroStats: [
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating on Google and Yelp' },
    { value: 1401, label: 'Verified reviews across both platforms' },
    { value: 15, suffix: ' yrs', label: 'Built almost entirely by word of mouth' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'word-of-mouth',
      eyebrow: 'How the practice grew',
      h2: 'A practice built on word of mouth, not advertising',
      body: [
        'When Dr. Amelia Hart opened TrueNorth Dental in 2011, the practice had two chairs, one hygienist and a phone that did not ring nearly as often as she hoped. For the first six years we did not spend a single dollar on advertising. Every new patient walked through the door because a neighbour, a coworker, a friend or a family member told them to come. That is still how most of the 14,800 patients in our records found us, and it is the part of our story we are proudest of.',
        'We mention that because it changes how you should read everything on this page. A five-star rating that a business pays to promote is worth very little. A review that someone sat down and wrote on their own, after a root canal or a Saturday morning emergency, is worth a great deal. Ours were not bought or scripted. They were earned one appointment at a time, mostly in the same northland neighbourhoods where our patients live, work and raise their families.',
        'Across Google and Yelp we hold an average of 4.9 out of 5 from 1,401 reviews. That breaks down to 1,187 reviews on Google at a 4.9 average and 214 on Yelp at 4.8. The number moves by a hundredth of a star whenever one new review lands, which is simply what happens when you have this many of them. We would rather show you a real, large sample than a tidy, small one that flatters us.',
        'You will find reviews here from Gladstone, Liberty, Parkville, Riverside, Smithville, Kearney, Claycomo, Briarcliff, Platte City and Weatherby Lake. Some of these patients have been with us for more than a decade and have watched our children and theirs grow up in the waiting room. Others came in this year for the first time, usually because a friend would not stop talking about us. We are glad they listened.',
        'The reviews that follow are unedited. We did not fix the grammar, trim the long ones or leave out the four-star ratings. If a patient mentioned the parking lot, you will read about the parking lot. That honesty is the whole point. A review page that only shows you the best days is not really telling you anything useful about what it is like to be a patient here.'
      ]
    },
    {
      type: 'stats',
      id: 'review-numbers',
      h2: 'The numbers behind the stars',
      intro:
        'We keep these figures current, because a rating only means something when you can see the sample behind it.',
      items: [
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating across Google and Yelp' },
        { value: 1401, label: 'Verified reviews in total' },
        { value: 1187, label: 'Google reviews at a 4.9 average' },
        { value: 96, suffix: '%', label: 'Of surveyed patients would refer a friend' }
      ]
    },
    {
      type: 'table',
      id: 'by-treatment',
      eyebrow: 'By treatment',
      h2: 'What patients rate, treatment by treatment',
      intro:
        'Different kinds of care earn different kinds of comments. Here is how our reviews split across the treatments we are asked about most, along with the theme that shows up again and again in each group.',
      head: ['Treatment', 'Reviews', 'Average', 'What comes up most'],
      rows: [
        ['Emergency care', '318', '4.9', 'Answered the phone, seen the same day, pain explained clearly'],
        ['Dental implants', '176', '4.9', 'One office start to finish, 3D scan shown before surgery'],
        ['Clear aligners', '242', '4.8', 'Honest advice about when treatment is and is not needed'],
        ['Family dentistry', '305', '4.9', 'Known by name, billing errors caught and fixed'],
        ['Teeth whitening', '189', '4.9', 'Cost explained upfront, little or no sensitivity'],
        ['Sedation dentistry', '171', '5.0', 'Patience with anxious and long-overdue patients']
      ],
      note:
        'Counts reflect reviews that name the treatment and were published between 2011 and September 2026.'
    },
    {
      type: 'cards',
      id: 'review-themes',
      eyebrow: 'Themes',
      h2: 'What comes up again and again in our reviews',
      intro:
        'Read a hundred of our reviews in a row and the same handful of ideas keep surfacing. Almost none of them are about the building. Nearly all of them are about how people were treated.',
      columns: 3,
      items: [
        {
          icon: 'timer',
          title: 'The schedule actually runs on time',
          text: 'Patients notice when a 9:00 appointment starts at 9:00. We build buffer time into the day and do not double-book chairs, so you are not left in the waiting room guessing how long you will be there.'
        },
        {
          icon: 'file-text',
          title: 'Plain-English explanations',
          text: 'People tell us they finally understood what was going on with their teeth. Our doctors turn the X-ray or scan toward you and point to the problem, without jargon and without hurry.'
        },
        {
          icon: 'shield-check',
          title: 'No upselling, ever',
          text: 'A common thread is that nobody felt pushed toward treatment they did not need. When care can safely wait a year, we say so and send you home with a plan instead of a sales pitch.'
        },
        {
          icon: 'hand-heart',
          title: 'Gentle with anxious patients',
          text: 'Several reviewers had avoided dentists for years. They mention a longer first visit booked just to talk, being allowed to tour the room, and never being lectured about how long it had been.'
        },
        {
          icon: 'credit-card',
          title: 'Costs explained before treatment',
          text: 'Patients repeatedly note that the written estimate matched the final bill. Sofia and Nia check your insurance, flag anything that looks wrong and put the numbers in front of you before work begins.'
        },
        {
          icon: 'zap',
          title: 'Same-day emergency care',
          text: 'Broken teeth and lost crowns do not wait for office hours. Reviewers describe calling a few practices, hearing voicemail, and finally reaching a person who booked them in that same morning.'
        }
      ]
    },
    {
      type: 'quote',
      text:
        'I cracked a molar on a Saturday morning and called four offices before TrueNorth answered. They had me in a chair by 11:30, took the pain away, and finished the root canal on Monday. I have never been less afraid at a dentist in my life.',
      author: 'Marissa T.',
      role: 'Emergency root canal · Gladstone, MO'
    },
    {
      type: 'quote',
      text:
        'I avoided dentists for nine years because of a bad experience as a teenager. Dr. Hart booked a longer appointment just to talk — no instruments, no lecture. Three visits later I have had a cleaning, two fillings and a crown, and I actually show up on time now.',
      author: 'Alicia M.',
      role: 'Sedation dentistry · Kansas City, MO'
    },
    {
      type: 'quote',
      text:
        'Dr. Nair is genuinely the most honest clinician I have met. She told me my son did not need braces yet, showed me the X-rays, and said to come back in a year. Any other office would have sold me the treatment that day.',
      author: 'Priyanka S.',
      role: 'Clear aligners · Liberty, MO'
    },
    {
      type: 'prose',
      id: 'negative-reviews',
      eyebrow: 'When we get it wrong',
      h2: 'What happens when a review is not five stars',
      body: [
        'We do not hide the reviews that hurt. Every review, good or bad, is read aloud at our Monday morning team meeting. It is not a comfortable fifteen minutes, but it is the fastest way for all fifteen of us to hear exactly how a patient experienced the practice. Nobody argues with the review. We ask what we could have done differently.',
        'When a review points to a real problem, Sofia Delgado, our practice manager, calls that patient within 48 hours. Not a template email, and not a public reply that says we take feedback seriously — an actual phone call. Sometimes we fix the thing. Sometimes we refund it. Sometimes the patient simply wanted to be heard, and that is a valid outcome too.',
        'You can see the result of that habit in a handful of our four-star reviews. One patient gave us four stars and mentioned that the parking lot fills up at 4 p.m. We now tell new patients to arrive a few minutes early. A negative review that leads to a better Tuesday morning is more useful to us than a glowing one that changes nothing.',
        'It is tempting to treat reviews as a marketing channel, and plenty of practices do exactly that. We try to treat them as free quality control. When three people in six months mention that the check-in process felt rushed, that is not a marketing problem, it is a Tuesday morning problem, and it is something we can fix in a staff meeting.',
        'We also keep the feedback in perspective. One unhappy review after a difficult extraction is not the same as a pattern, and we will not rebuild a process because a single appointment went sideways. What we look for is repetition. When the same note shows up twice, we change something and we tell the team why.'
      ],
      listTitle: 'How to leave a review of your own',
      list: [
        'Open our Google Business Profile and choose Write a review.',
        'Or find TrueNorth Dental on Yelp and leave your rating there.',
        'Mention the treatment you had — it helps patients searching for the same thing.',
        'If something went wrong, call us at (816) 555-0182 so we can fix it directly.'
      ]
    },
    {
      type: 'prose',
      id: 'experience-vs-outcome',
      eyebrow: 'An honest note',
      h2: 'A five-star visit is not the same as a five-star outcome',
      body: [
        'We can control how a visit feels. A warm blanket, a hygienist who remembers your name, a doctor who explains the scan instead of talking over your head. Those things matter and we work hard at them. But they are not the whole job. A comfortable appointment that leaves a problem untreated is not a good appointment, and a friendly front desk cannot make up for a crown that fails two years later.',
        'So when we read a review, we look past the stars for the outcome. Did the filling last? Did the implant integrate? Did the gums stop bleeding a month later? Rosa L. wrote that her gums stopped bleeding within a month of her deep cleaning. That sentence tells us more than any rating ever could, because it describes what happened after the chair.',
        'The best reviews we get mention both things at once — that the visit was easy and that the result held up. That is the standard we hold ourselves to. You should expect to feel comfortable in our office, and you should also expect your teeth to be in better shape a year from now. If we ever have to choose between the two, we will choose the outcome and explain why.',
        'That is also why we are careful about what we promise. We will not tell you a treatment is guaranteed, and we will not call ourselves the best in the northland, because those claims do not help you decide anything. What we can do is show you the reviews, the numbers and the people behind them, and let you make up your own mind.',
        'If that sounds like an odd thing to read on a reviews page, that is exactly the point. We would rather you book with us understanding what you are getting — honest advice, careful hands and a clear plan — than arrive expecting a spa and leave with a surprise bill. The reviews above, four-star ones included, are the proof that this approach works.'
      ]
    },
    {
      type: 'faq',
      id: 'reviews-faq',
      eyebrow: 'Good to know',
      h2: 'Questions about our reviews',
      intro: 'A few things patients ask us about ratings, and how we answer them.',
      items: [
        {
          q: 'Are these reviews verified?',
          a: 'Yes. Every review shown here was published on Google or Yelp by a patient who visited the practice. We do not write reviews, we do not edit them, and we do not delete the ones we dislike. What you read is what they wrote.'
        },
        {
          q: 'Why is your rating 4.9 and not 5.0?',
          a: 'Because no practice with more than a thousand reviews has a perfect score, and we would be suspicious of one that did. A handful of patients had a genuinely frustrating day with us. We called them, we learned from it, and we left the review in place.'
        },
        {
          q: 'Do you offer anything for leaving a review?',
          a: 'No. We never offer discounts, gift cards or entries into a drawing in exchange for a review. That would make the rating meaningless. If you write one, it is because you chose to, and we are grateful either way.'
        },
        {
          q: 'Can I read reviews by treatment?',
          a: 'The table above groups our reviews by the type of care, from emergency visits to clear aligners. If you are weighing a specific treatment, that breakdown is the fastest way to find patients who were in a situation like yours.'
        },
        {
          q: 'What if I had a bad experience?',
          a: 'Call us directly at (816) 555-0182 and ask for Sofia Delgado. She is our practice manager and she will call you back within 48 hours. You are welcome to leave a review as well. We would rather hear it from you first so we can fix it.'
        },
        {
          q: 'How current are these ratings?',
          a: 'We update this page as new reviews arrive. The totals reflect everything published through September 2026, including the four-star reviews. If a number here ever looks stale, the live counts on our Google and Yelp profiles are always current.'
        },
        {
          q: 'Do you respond to reviews?',
          a: 'Yes, though briefly. We thank patients for the good ones and we ask the unhappy ones to call so we can help. We try not to write long public replies, because the review belongs to the patient, not to us.'
        },
        {
          q: 'Which platform should I use?',
          a: 'Whichever you already use. Google reviews reach the most people searching for a dentist near Kansas City, and Yelp helps northland patients compare practices. Either one is genuinely useful to the next person making a decision.'
        },
        {
          q: 'Do you accept my plan if it is not on your list?',
          a: 'Possibly. We are in network with the plans listed above, but we can still file out-of-network claims for many others and help you understand your benefits. Call (816) 555-0182 with your plan details and we will check before you book.'
        },
        {
          q: 'Can I use a payment plan for treatment?',
          a: 'The $99 new patient special is usually paid at the visit, but any larger treatment plan that follows can be split through CareCredit, Cherry, Sunbit or our $29 monthly membership. We show you the numbers before any work begins.'
        }
      ]
    }
  ],
  faqs: [
    {
      q: 'Are these reviews verified?',
      a: 'Yes. Every review shown here was published on Google or Yelp by a patient who visited the practice. We do not write reviews, we do not edit them, and we do not delete the ones we dislike. What you read is what they wrote.'
    },
    {
      q: 'Why is your rating 4.9 and not 5.0?',
      a: 'Because no practice with more than a thousand reviews has a perfect score, and we would be suspicious of one that did. A handful of patients had a genuinely frustrating day with us. We called them, we learned from it, and we left the review in place.'
    },
    {
      q: 'Do you offer anything for leaving a review?',
      a: 'No. We never offer discounts, gift cards or entries into a drawing in exchange for a review. That would make the rating meaningless. If you write one, it is because you chose to, and we are grateful either way.'
    },
    {
      q: 'Can I read reviews by treatment?',
      a: 'The table above groups our reviews by the type of care, from emergency visits to clear aligners. If you are weighing a specific treatment, that breakdown is the fastest way to find patients who were in a situation like yours.'
    },
    {
      q: 'What if I had a bad experience?',
      a: 'Call us directly at (816) 555-0182 and ask for Sofia Delgado. She is our practice manager and she will call you back within 48 hours. You are welcome to leave a review as well. We would rather hear it from you first so we can fix it.'
    },
    {
      q: 'How current are these ratings?',
      a: 'We update this page as new reviews arrive. The totals reflect everything published through September 2026, including the four-star reviews. If a number here ever looks stale, the live counts on our Google and Yelp profiles are always current.'
    },
    {
      q: 'Do you respond to reviews?',
      a: 'Yes, though briefly. We thank patients for the good ones and we ask the unhappy ones to call so we can help. We try not to write long public replies, because the review belongs to the patient, not to us.'
    },
    {
      q: 'Which platform should I use?',
      a: 'Whichever you already use. Google reviews reach the most people searching for a dentist near Kansas City, and Yelp helps northland patients compare practices. Either one is genuinely useful to the next person making a decision.'
    },
    {
      q: 'Do you accept my plan if it is not on your list?',
      a: 'Possibly. We are in network with the plans listed above, but we can still file out-of-network claims for many others and help you understand your benefits. Call (816) 555-0182 with your plan details and we will check before you book.'
    },
    {
      q: 'Can I use a payment plan for treatment?',
      a: 'The $99 new patient special is usually paid at the visit, but any larger treatment plan that follows can be split through CareCredit, Cherry, Sunbit or our $29 monthly membership. We show you the numbers before any work begins.'
    }
  ],
  cta: {
    h2: 'Ready to see for yourself?',
    text:
      'Book a visit and find out why more than 1,400 neighbours took the time to write about us. The $99 new patient special includes an exam, full digital X-rays, a cleaning, an oral cancer screening and a written treatment plan.',
    primary: { label: 'Book online', path: '/contact' },
    secondary: { label: 'Call (816) 555-0182', path: 'tel:+18165550182' }
  }
};
