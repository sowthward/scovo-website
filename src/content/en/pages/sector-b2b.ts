import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers.
// TODO: the English example questions were written for this site.
const page = {
  key: 'sector-b2b',
  slug: 'sectors/b2b-distribution-services',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'B2B distribution and services',
  meta: {
    title: 'B2B distribution and services | SCOVO',
    description: 'For distributors and service companies, local recommendation is the business. SCOVO shows whether AI repeats it.',
  },
  h1: '“Electrical wholesaler for installers near me”: does your name come up?',
  lead: 'In your line of work, local recommendation is the business. SCOVO shows whether AI repeats it.',
  questions: {
    title: 'What does a buyer ask the AI?',
    lead: 'Example questions.',
    items: ['electrical wholesaler for installers near me', 'industrial plant maintenance company in my area'],
  },
  checks: {
    title: 'What does SCOVO check in this sector?',
    lead: 'The sources AI engines cite when they answer these questions.',
    items: [
      { icon: 'link', title: 'Local directories and portals', text: 'Whether your company is listed, with its area and services.' },
      { icon: 'file', title: 'Local and trade press', text: 'Whether and how you are named in the articles AI engines use as sources.' },
      { icon: 'dashboard', title: 'Your website', text: 'Whether areas served, brands and services are written on readable pages.' },
      { icon: 'post', title: 'LinkedIn', text: 'Whether the company page gets cited.' },
    ],
  },
  gaps: {
    title: 'What are the most common gaps?',
    lead: 'Typical examples, each with its action.',
    items: [
      { gap: 'The areas you serve are not written down.', action: 'A page listing the areas and towns you work in.', tag: 'dev' },
      { gap: 'The brands you stock are only in a PDF catalogue.', action: 'A list of brands on a website page.', tag: 'dev' },
      { gap: 'You are missing from the local directories the AI cites.', action: 'Ask to be added to the directories cited in the answers.', tag: 'diy' },
    ],
  },
} satisfies PageBase;

export default page;
