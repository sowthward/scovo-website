import type { PageBase } from '../../types';
import plans from '../plans';
import faq from '../faq';

// Hidden until every TBC in ../plans.ts and below is replaced. Then set published: true.
const page = {
  key: 'pricing',
  slug: 'prezzi',
  view: 'Pricing',
  published: false,
  navLabel: 'Prezzi',
  meta: { title: 'Prezzi | SCOVO', description: 'I piani SCOVO e la prova di 14 giorni.' },
  h1: 'Prezzi',
  // TODO: one line for the pricing page, once the three stages and their names are decided.
  lead: 'TBC',
  cardsTitle: 'I piani',
  includesLabel: 'Cosa include',
  featuresLink: 'Confronta tutte le funzionalità',
  // Plan names, prices and limits: one shared file.
  plans,
  faq: {
    title: 'Domande frequenti',
    items: [
      // The trial question lives here only (27 Nov).
      ...faq.pricing,
      { q: "Cos'è una misurazione?", a: 'In una misurazione facciamo 12 domande a 4 motori AI, tre volte ciascuna. In tutto leggiamo 144 risposte.' },
      { q: 'Quali motori AI misurate?', a: 'ChatGPT, Gemini, Perplexity e Claude. Microsoft Copilot non è ancora misurato.' },
    ],
  },
} satisfies PageBase;

export default page;
