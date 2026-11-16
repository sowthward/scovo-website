import type { PageBase } from '../../types';
import plans from '../plans';

// Hidden until every TBC in ../plans.ts and below is replaced. Then set published: true.
const page = {
  key: 'pricing',
  slug: 'pricing',
  view: 'Pricing',
  published: false,
  navLabel: 'Pricing',
  meta: { title: 'Pricing | SCOVO', description: 'SCOVO plans. Every plan starts with the 14-day trial, with no credit card.' },
  h1: 'Pricing',
  lead: 'Every plan starts with the 14-day trial.',
  cardsTitle: 'Plans',
  includesLabel: 'Includes',
  featuresLink: 'Compare all features',
  // Plan names, prices and limits: one shared file.
  plans,
  faq: {
    title: 'Common questions',
    items: [
      // TODO: what happens after the trial has not been decided yet.
      { q: 'What happens after the 14 days?', a: 'TBC' },
      { q: 'Do I need a credit card?', a: 'No. The trial does not need a credit card.' },
      { q: 'What is a measurement?', a: 'In one measurement we put 12 questions to 4 AI engines, three times each. We read 144 answers in all.' },
      { q: 'Which AI engines do you measure?', a: 'ChatGPT, Gemini, Perplexity and Claude. Microsoft Copilot is not measured yet.' },
    ],
  },
} satisfies PageBase;

export default page;
