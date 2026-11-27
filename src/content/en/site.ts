import type { SiteContent } from '../types';

const site: SiteContent = {
  locale: 'en',
  domain: 'https://scovo.io',
  otherDomain: 'https://loscovo.it',
  otherLocale: 'it',
  name: 'SCOVO',
  descriptor: 'AI Visibility for B2B SME Leaders',
  description:
    'SCOVO measures how your company appears in answers from ChatGPT, Gemini, Perplexity and Claude, and tells you what to do about it.',
  email: 'info@scovo.io',
  ctaLabel: 'Book a demo',
  seo: {
    keywords: 'AI visibility, GEO, Generative Engine Optimization, AI search, ChatGPT, B2B SME',
    audienceType: 'B2B SME leaders',
    // The build prompt adds "A ctrlpost product." here. Left out: ctrlpost was removed from the site on 26 Nov 2026.
    llmsIntro: 'SCOVO: AI visibility for B2B SME leaders. Monitoring of visibility in AI answers (GEO).',
  },

  // A menu item whose page is hidden is not shown.
  nav: [
    { label: 'What it does', anchor: '#cosa-fa' },
    { label: 'How it works', anchor: '#come-funziona' },
    { label: "Who it's for", anchor: '#who-its-for' },
    { label: 'Features', page: 'features' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Sectors', group: 'sectors' },
    { label: 'How we measure', page: 'measure' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ],

  footer: {
    // Features and Pricing appear in Product only once their pages are published.
    columns: [
      {
        title: 'Product',
        items: [
          { label: 'What it does', anchor: '#cosa-fa' },
          { label: 'How it works', anchor: '#come-funziona' },
          { label: 'How we measure', page: 'measure' },
          { label: 'Features', page: 'features' },
          { label: 'Pricing', page: 'pricing' },
        ],
      },
      {
        // Each sector links to the homepage section until its page is published.
        title: "Who it's for",
        items: [
          { label: 'Precision engineering and subcontract machining', page: 'sector-cnc', fallback: '#who-its-for' },
          { label: 'Automotive supply', page: 'sector-automotive', fallback: '#who-its-for' },
          { label: 'B2B distribution and services', page: 'sector-b2b', fallback: '#who-its-for' },
        ],
      },
      {
        title: 'Information',
        items: [
          { label: 'About', page: 'about' },
          { label: 'Contact', page: 'contact' },
        ],
      },
    ],
    startTitle: 'Get started',
    legal: [
      { label: 'Privacy', page: 'privacy' },
      { label: 'Cookies', page: 'cookie' },
    ],
    // TODO (open item 7): registered name and VAT number. The full line stays hidden until then.
    company: {
      name: '',
      vat: '',
      // Registered address once the VAT number is filed. Shown only when showStreet is true.
      address: { street: 'Viale San Michele del Carso 11', postcode: '20144', city: 'Milano', country: 'Italy' },
      cityLabel: 'Milan',
      showStreet: false, // set to true together with the VAT number
    },
    vatLabel: 'VAT no.',
    copyright: '© 2026 SCOVO',
    socialLabel: 'Follow us',
  },

  labels: {
    skip: 'Skip to content',
    homeLink: 'SCOVO, home',
    channels: 'Channels',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    languageNames: { it: 'Italiano', en: 'English' },
    tbc: 'to be confirmed',
    todo: 'To be completed',
    included: 'Included',
    notIncluded: 'Not included',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    hiddenNotice: 'This page is not published. Only people with the link can see it.',
    quotes: ['“', '”'],
  },

  testimonials: {
    // Leave empty until there are real quotes. See README, "Switch on the testimonial block".
    items: [],
    title: 'What customers say',
    emptyLineHome: 'First customers: join the pilot.',
    emptyLineSector: 'First customers in this sector: join the pilot.',
  },

  form: {
    intro: "We'll show you how SCOVO works and how AI talks about companies like yours.",
    fields: {
      name: 'Name',
      company: 'Company',
      website: 'Website',
      websiteHint: 'For example: yourcompany.com',
      email: 'Email',
      source: 'How did you hear about us?',
      sourcePlaceholder: 'Choose',
      sourceOptions: ['Online search', 'LinkedIn', 'Word of mouth', 'An AI suggested it', 'Event or trade fair', 'Other'],
      message: 'Message',
      optional: 'optional',
    },
    privacyBefore: 'I have read the ',
    privacyLink: 'privacy notice',
    privacyAfter: ' and agree to be contacted about my request.',
    sending: 'Sending',
    note: 'No commitment.',
    success: 'Request received. We will write to the address you gave.',
    error: 'We could not send your request. Please try again, or write to info@scovo.io.',
    invalid: 'Please check the highlighted fields.',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address you opened does not exist or has moved.',
    back: 'Back to the homepage',
  },
};

export default site;
