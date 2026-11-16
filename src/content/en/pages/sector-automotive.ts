import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers.
// TODO: the English example questions were written for this site.
const page = {
  key: 'sector-automotive',
  slug: 'sectors/automotive-supply',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'Automotive supply',
  meta: {
    title: 'Automotive supply | SCOVO',
    description: 'Purchasing teams search for suppliers by capability and certification, and now ask an AI too. SCOVO shows whether it names you.',
  },
  h1: '“Automotive components supplier with IATF 16949”: does your company come up?',
  lead: "Purchasing teams search by capability and by certification. The LinkedIn presence of the company and of its owner signals credibility.",
  questions: {
    title: 'What does a buyer ask the AI?',
    lead: 'Example questions.',
    items: ['automotive components supplier with IATF 16949', 'automotive plastic injection moulding supplier'],
  },
  checks: {
    title: 'What does SCOVO check in this sector?',
    lead: 'The sources AI engines cite when they answer these questions.',
    items: [
      { icon: 'link', title: 'Supplier directories and sector portals', text: 'Whether your company is listed, and with which capabilities.' },
      { icon: 'file', title: 'Trade press', text: 'Whether and how you are named in the articles AI engines use as sources.' },
      { icon: 'dashboard', title: 'Your website', text: 'Whether certifications and processes are written on readable pages.' },
      { icon: 'post', title: 'LinkedIn', text: "Whether the company page and the owner's profile get cited." },
    ],
  },
  gaps: {
    title: 'What are the most common gaps?',
    lead: 'Typical examples, each with its action.',
    items: [
      { gap: 'The certification is mentioned only in the footer.', action: 'A page dedicated to the certification, with its scope and date.', tag: 'dev' },
      { gap: 'Production processes have no page of their own.', action: 'One page per process, with the answer at the top.', tag: 'dev' },
      { gap: "The owner's LinkedIn profile is empty.", action: 'Complete the profile with role, company and sector.', tag: 'diy' },
      { gap: 'The company LinkedIn page does not post.', action: 'A post that answers a typical question from a purchasing team.', tag: 'ctrlpost' },
    ],
  },
} satisfies PageBase;

export default page;
