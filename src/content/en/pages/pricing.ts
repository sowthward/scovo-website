import type { PageBase } from '../../types';
import plans from '../plans';
import faq from '../faq';

// Hidden until every TBC in ../plans.ts and below is replaced. Then set published: true.
const page = {
  key: 'pricing',
  slug: 'pricing',
  view: 'Pricing',
  published: false,
  navLabel: 'Pricing',
  meta: { title: 'Pricing | SCOVO', description: 'SCOVO plans and the 14-day trial.' },
  h1: 'Pricing',
  // TODO: one line for the pricing page, once the three stages and their names are decided.
  lead: 'TBC',
  cardsTitle: 'Plans',
  includesLabel: 'Includes',
  featuresLink: 'Compare all features',
  // Plan names, prices and limits: one shared file.
  plans,
  faq: {
    title: 'Common questions',
    items: [
      // The trial question lives here only (27 Nov).
      ...faq.pricing,
      { q: 'What is a measurement?', a: 'In one measurement we put 12 questions to 4 AI engines, three times each. We read 144 answers in all.' },
      { q: 'Which AI engines do you measure?', a: 'ChatGPT, Gemini, Perplexity and Claude. Microsoft Copilot is not measured yet.' },
    ],
  },
} satisfies PageBase;

export default page;
