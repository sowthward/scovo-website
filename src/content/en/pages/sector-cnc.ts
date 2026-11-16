import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers.
// TODO: the English example questions were written for this site. Only name trade fairs or associations if they are supplied here.
const page = {
  key: 'sector-cnc',
  slug: 'sectors/precision-engineering',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'Precision engineering and subcontract machining',
  meta: {
    title: 'Precision engineering and subcontract machining | SCOVO',
    description: 'Buyers looking for a CNC subcontractor now ask an AI. SCOVO shows whether it names your shop.',
  },
  h1: '“CNC subcontract machining supplier for small batches”: does your shop come up?',
  lead: 'Buyers draw up their shortlist of subcontractors by asking an AI. Your certifications and machine capability have to be easy to find.',
  questions: {
    title: 'What does a buyer ask the AI?',
    lead: 'Example questions.',
    items: ['CNC subcontract machining supplier for small batches', 'precision machine shop for small series and prototypes'],
  },
  checks: {
    title: 'What does SCOVO check in this sector?',
    lead: 'The sources AI engines cite when they answer these questions.',
    items: [
      { icon: 'link', title: 'Subcontracting directories and portals', text: 'Whether your shop is listed, and with which processes.' },
      { icon: 'file', title: 'Trade press', text: 'Whether and how you are named in the articles AI engines use as sources.' },
      { icon: 'dashboard', title: 'Your website', text: 'Whether certifications, machines and processes are written on pages an AI can read.' },
      { icon: 'post', title: 'LinkedIn', text: 'Whether the company page and your own profile get cited.' },
    ],
  },
  gaps: {
    title: 'What are the most common gaps?',
    lead: 'Typical examples, each with its action.',
    items: [
      { gap: 'Certifications exist only as a PDF.', action: 'A website page with each certification written out in full.', tag: 'dev' },
      { gap: 'The machine list is not described.', action: 'A page with machines, axes, maximum sizes and materials.', tag: 'dev' },
      { gap: 'You are missing from the directories the AI cites.', action: 'Ask to be added to the supplier directories cited in the answers.', tag: 'diy' },
      { gap: "Nobody answers buyers' questions on LinkedIn.", action: 'A post that answers a real question, for example how to choose a subcontractor.', tag: 'ctrlpost' },
    ],
  },
} satisfies PageBase;

export default page;
