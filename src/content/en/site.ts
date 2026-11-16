import type { SiteContent } from '../types';

const site: SiteContent = {
  locale: 'en',
  domain: 'https://scovo.io',
  otherDomain: 'https://loscovo.it',
  otherLocale: 'it',
  name: 'SCOVO',
  parentLine: 'SCOVO, a ctrlpost product',
  parentTag: 'a ctrlpost product',
  description:
    'SCOVO measures how your company appears in answers from ChatGPT, Gemini, Perplexity and Claude, and tells you what to do about it.',
  email: 'info@scovo.io',
  linkedin: 'https://www.linkedin.com/company/loscovo',
  cta: 'Request the trial',

  // A menu item whose page is hidden is not shown.
  nav: [
    { label: 'What it does', anchor: '#cosa-fa' },
    { label: 'How it works', anchor: '#come-funziona' },
    { label: 'Features', page: 'features' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Sectors', group: 'sectors' },
    { label: 'How we measure', page: 'measure' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ],

  footer: {
    columns: [
      {
        title: 'Product',
        items: [
          { label: 'What it does', anchor: '#cosa-fa' },
          { label: 'How it works', anchor: '#come-funziona' },
          { label: 'Features', page: 'features' },
          { label: 'Pricing', page: 'pricing' },
          { label: 'How we measure', page: 'measure' },
        ],
      },
      { title: 'Sectors', items: [{ label: 'Sectors', group: 'sectors' }] },
      {
        title: 'Information',
        items: [
          { label: 'About', page: 'about' },
          { label: 'Contact', page: 'contact' },
          { label: 'ctrlpost.io', href: 'https://ctrlpost.io' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/loscovo' },
        ],
      },
      {
        title: 'Get started',
        items: [
          { label: 'Request the trial', anchor: '#prova' },
          { label: 'info@scovo.io', href: 'mailto:info@scovo.io' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy', page: 'privacy' },
      { label: 'Cookies', page: 'cookie' },
    ],
    contactLabel: 'Write to us',
    // TODO: registered name, address and VAT number (open item 7).
    companyDetails: 'TODO: registered name, address and VAT number',
    copyright: '© 2026 ctrlpost.io',
  },

  labels: {
    skip: 'Skip to content',
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
    emptyLine: 'First customers in this sector: join the pilot.',
  },

  form: {
    title: 'Request the trial',
    lead: 'The trial is free. Paid plans will open later.',
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
    privacyAfter: ' and agree to be contacted about the trial.',
    submit: 'Request the trial',
    sending: 'Sending',
    reassurance: '14 days, 2 measurements, no credit card.',
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
