'use strict';
/**
 * Single source of truth for NAP, hours, navigation, socials and trust data.
 * Nothing about the business should be hard-coded in the templates.
 */

const SITE_URL = (process.env.SITE_URL || 'https://www.truenorthdental.com').replace(/\/+$/, '');

const team = require('./team');
const testimonials = require('./testimonials');
const services = require('./services');

const SITE = {
  /* ------------------------------------------------------------ identity */
  name: 'TrueNorth Dental',
  legalName: 'TrueNorth Dental LLC',
  shortName: 'TrueNorth',
  tagline: 'Dentistry That Points You True North',
  description:
    'TrueNorth Dental is a modern family, cosmetic and implant dental practice in the Kansas City northland. Gentle preventive care, same-day emergency appointments, digital scanning, sedation options and transparent pricing — all under one roof.',
  url: SITE_URL,
  logo: '/img/logo.webp',
  logoWidth: 500,
  logoHeight: 176,
  ogImage: '/img/og-image.jpg',
  founded: 2011,
  priceRange: '$$',
  language: 'en-US',
  locale: 'en_US',

  /* ----------------------------------------------------------------- NAP */
  phone: '(816) 555-0182',
  phoneHref: '+18165550182',
  emergencyPhone: '(816) 555-0199',
  emergencyPhoneHref: '+18165550199',
  fax: '(816) 555-0183',
  email: 'hello@truenorthdental.com',
  newPatientEmail: 'newpatients@truenorthdental.com',
  address: {
    street: '4820 N Oak Trafficway, Suite 210',
    city: 'Kansas City',
    region: 'MO',
    regionLong: 'Missouri',
    postal: '64118',
    country: 'US'
  },
  addressOneLine: '4820 N Oak Trafficway, Suite 210, Kansas City, MO 64118',
  geo: { lat: 39.2103, lng: -94.5744 },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=4820+N+Oak+Trafficway+Suite+210+Kansas+City+MO+64118',
  directionsNote:
    'Free surface parking directly in front of the building, with step-free access from the lot to our second-floor suite via elevator.',

  /* --------------------------------------------------------------- hours */
  hours: [
    { day: 'Monday', time: '8:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 2:00 PM', note: 'By appointment' },
    { day: 'Sunday', time: 'Closed' }
  ],
  hoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' },
    { days: ['Friday'], opens: '08:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' }
  ],
  hoursSummary: 'Mon–Thu 8a–6p · Fri 8a–5p · Sat 9a–2p',
  emergencyNote: '24/7 emergency line for existing and new patients',

  /* ------------------------------------------------------- service areas */
  serviceAreas: [
    'Kansas City',
    'North Kansas City',
    'Gladstone',
    'Liberty',
    'Parkville',
    'Riverside',
    'Smithville',
    'Platte City',
    'Claycomo',
    'Briarcliff',
    'Weatherby Lake',
    'Kearney',
    'Excelsior Springs',
    'Avondale',
    'Northmoor',
    'Oakview',
    'Houston Lake',
    'Lake Waukomis',
    'Randolph',
    'Pleasant Valley'
  ],
  primaryCounty: 'Clay County',
  secondaryCounty: 'Platte County',

  /* --------------------------------------------------------------- socials */
  socials: [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/truenorthdental' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/truenorthdental' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/truenorthdental' },
    { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@truenorthdental' },
    { name: 'X', icon: 'x-twitter', url: 'https://x.com/truenorthdental' }
  ],
  reviewProfiles: [
    { name: 'Google', icon: 'google', rating: '4.9', count: 1187, url: 'https://www.google.com/maps' },
    { name: 'Yelp', icon: 'yelp', rating: '4.8', count: 214, url: 'https://www.yelp.com' }
  ],

  /* ----------------------------------------------------------- credentials */
  licenses: [
    'Missouri Dental Board — Practice License #MO-2011-44817',
    'Missouri Dental Board — Sedation Permit #MO-SED-2265',
    'Kansas Dental Board — Reciprocal License #KS-2014-90233'
  ],
  memberships: [
    'American Dental Association',
    'Missouri Dental Association',
    'Greater Kansas City Dental Society',
    'Academy of General Dentistry',
    'American Academy of Cosmetic Dentistry',
    'American Association of Orthodontists'
  ],
  knowsAbout: [
    'Preventive dentistry',
    'Cosmetic dentistry',
    'Dental implants',
    'Teeth whitening',
    'Clear aligner therapy',
    'Emergency dental care',
    'Sedation dentistry',
    'Digital dental imaging',
    'Pediatric dentistry'
  ],

  /* --------------------------------------------------------------- pricing */
  newPatientOffer: {
    title: 'New Patient Special',
    price: '$99',
    strike: '$389',
    includes: [
      'Comprehensive oral exam',
      'Full set of digital X-rays',
      'Professional cleaning',
      'Oral cancer screening',
      'Personalised treatment plan'
    ]
  },

  /* ------------------------------------------------------------ trust data */
  stats: [
    { value: 14800, suffix: '+', label: 'Patients cared for since 2011' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 1,400+ reviews' },
    { value: 15, suffix: ' yrs', label: 'Serving the Kansas City northland' },
    { value: 96, suffix: '%', label: 'Of new patients booked within 48 hours' }
  ],
  trustBadges: [
    { icon: 'shield-check', title: 'Board Certified', text: 'Missouri-licensed doctors and sedation-certified clinicians.' },
    { icon: 'credit-card', title: 'Transparent Pricing', text: 'Written estimates before any treatment begins. No surprises.' },
    { icon: 'timer', title: 'Same-Day Emergencies', text: 'Pain today, seen today — call before noon for a same-day slot.' },
    { icon: 'hand-heart', title: 'Judgement-Free Care', text: 'We treat anxious and long-overdue patients with patience.' }
  ],

  /* -------------------------------------------------------------- insurance */
  insurance: [
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
  ],
  financing: [
    { name: 'CareCredit', text: '6, 12, 18 and 24-month interest-free plans on approved credit.' },
    { name: 'Cherry', text: 'Instant approval decision with no hard credit check to see your options.' },
    { name: 'In-House Membership', text: '$29/month per adult — two cleanings, exams, X-rays and 15% off everything else.' },
    { name: 'Sunbit', text: 'Point-of-sale financing with 90-day no-interest promotional periods.' }
  ],

  /* ------------------------------------------------------------------ nav */
  nav: [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      mega: 'about',
      children: [
        { label: 'Our Story', path: '/about', desc: 'Fifteen years in the Kansas City northland', icon: 'building' },
        { label: 'Meet the Doctors', path: '/doctors', desc: 'Four clinicians, one standard of care', icon: 'users' },
        { label: 'Our Technology', path: '/technology', desc: '3D imaging, lasers and digital scans', icon: 'scan' },
        { label: 'Patient Reviews', path: '/reviews', desc: '4.9 stars from more than 1,400 neighbours', icon: 'star' },
        { label: 'Careers', path: '/careers', desc: 'Build your career with TrueNorth', icon: 'graduation' }
      ]
    },
    { label: 'Services', path: '/services', mega: 'services' },
    {
      label: 'New Patients',
      path: '/new-patients',
      mega: 'patients',
      children: [
        { label: 'What to Expect', path: '/new-patients', desc: 'Your first visit, step by step', icon: 'clipboard-check' },
        { label: 'Insurance & Financing', path: '/insurance-financing', desc: 'Coverage, plans and payment options', icon: 'credit-card' },
        { label: 'Patient Forms', path: '/new-patients#forms', desc: 'Save 15 minutes — complete online', icon: 'file-text' },
        { label: 'Frequently Asked Questions', path: '/faq', desc: 'Costs, comfort, scheduling and more', icon: 'headphones' }
      ]
    },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ],

  /* --------------------------------------------------------------- footer */
  footerColumns: [
    {
      title: 'Practice',
      links: [
        { label: 'About TrueNorth', path: '/about' },
        { label: 'Meet the Doctors', path: '/doctors' },
        { label: 'Our Technology', path: '/technology' },
        { label: 'Patient Reviews', path: '/reviews' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'New Patients',
      links: [
        { label: 'What to Expect', path: '/new-patients' },
        { label: 'Insurance & Financing', path: '/insurance-financing' },
        { label: 'Patient Forms', path: '/new-patients#forms' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Book an Appointment', path: '/contact#book' }
      ]
    }
  ],
  legalLinks: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Accessibility Statement', path: '/accessibility' },
    { label: 'Sitemap', path: '/sitemap' }
  ],
  credit: {
    prefix: 'Web and Marketing By ',
    label: 'KC Web Design Pros',
    url: 'https://kansascitywebdesignpros.com/'
  },

  /* ------------------------------------------------------------- aggregate */
  team,
  reviews: testimonials.slice(0, 8),
  testimonialList: testimonials,
  services,
  serviceNames: services.map((s) => s.name),
  rating: { value: '4.9', count: 1401 }
};

module.exports = SITE;
