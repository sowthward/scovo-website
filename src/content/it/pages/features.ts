import type { PageBase } from '../../types';
import plans from '../plans';

// Hidden until every TBC in ../plans.ts is replaced. Then set published: true.
const page = {
  key: 'features',
  slug: 'funzionalita',
  view: 'Features',
  published: false,
  navLabel: 'Funzionalità',
  meta: { title: 'Funzionalità | SCOVO', description: 'Cosa include ogni piano SCOVO, voce per voce: motori AI, misurazione, dashboard, azioni, report e assistenza.' },
  h1: 'Funzionalità',
  lead: 'Cosa include ogni piano, voce per voce.',
  tableCaption: 'Confronto delle funzionalità per piano',
  choosePlan: 'Scegli il piano da vedere',
  trialLine: { before: 'La prova di 14 giorni è descritta nella pagina ', link: 'Prezzi', after: '.' },
  // Plan names, prices and limits: one shared file.
  plans,
} satisfies PageBase;

export default page;
