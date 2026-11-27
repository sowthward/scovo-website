import type { PlansContent } from '../types';
import { normalizePlans } from '../../lib/plans';

// ONE file for plan names, prices and limits. The pricing page and the features page both read it,
// so a value is typed once and can never differ between the two pages.
//
// SCOVO is sold in three stages at three price levels (decision of 27 Nov 2026). Names and prices are drafts: TBC.
// To add, remove or rename a plan, edit the `plans` list. A cell you leave out is shown as "da confermare".
// A page that still contains a TBC cannot be published: the build fails.
// Keep this file in step with src/content/en/plans.ts.

const T = 'TBC';
const KEYS = ['basic', 'professional', 'agency'] as const;
/** The same value in every plan's column. */
const all = (v: boolean | string) => Object.fromEntries(KEYS.map((k) => [k, v]));

const plans: PlansContent = {
  currency: '€',
  perMonth: '/mese',
  vat: '+ IVA',
  popularLabel: 'Il più scelto',
  billing: { label: 'Fatturazione', monthly: 'Mensile', annual: 'Annuale' },
  planLabel: 'Piano',
  featureLabel: 'Funzionalità',

  plans: [
    { key: 'basic', name: 'Basic', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'professional', name: 'Professional', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'agency', name: 'Agency', price: T, forWhom: T, button: T, popular: false, includes: [T] },
  ],

  // The trial is an entry offer, not a plan. It appears only on the pricing page.
  trialOffer: {
    id: 'prova-14-giorni',
    title: 'Prova SCOVO per 14 giorni',
    items: ['2 misurazioni', '4 motori AI', '12 domande', '8 parole chiave', 'nessuna carta di credito'],
    planLabel: 'Su quale piano si attiva la prova:',
    plan: T,
  },

  includesTable: {
    title: 'Cosa include ogni piano',
    lead: "Le quantità di ogni piano, una accanto all'altra.",
    rows: [
      { label: 'Motori AI', cells: all('4') },
      { label: 'Domande monitorate', cells: {} },
      { label: 'Parole chiave', cells: {} },
      { label: 'Frequenza delle misurazioni', cells: {} },
      { label: 'Ripetizioni per domanda', cells: {} },
      { label: 'Lingue', cells: {} },
      { label: "Confronto con l'app ChatGPT", cells: {} },
    ],
  },

  // Do not add rows for anything that is not in the product. Engine names are plain text, no logos.
  featureGroups: [
    {
      title: 'Motori AI',
      description: 'I motori a cui facciamo le domande.',
      rows: [
        { label: 'ChatGPT', cells: all(true) },
        { label: 'Gemini', cells: all(true) },
        { label: 'Perplexity', cells: all(true) },
        { label: 'Claude', cells: all(true) },
        { label: 'Microsoft Copilot', cells: all('non ancora misurato') },
      ],
    },
    {
      title: 'Misurazione',
      description: 'Quanto misuriamo e ogni quanto.',
      rows: [
        { label: 'Domande dei tuoi clienti', cells: {} },
        { label: 'Parole chiave', cells: {} },
        { label: 'Ripetizioni per domanda e motore', cells: {} },
        { label: 'Misurazioni', cells: {} },
        { label: 'Lingue', cells: {} },
        { label: 'Domande create in automatico dal tuo sito', cells: {} },
        { label: "Confronto con l'app ChatGPT", cells: {} },
      ],
    },
    {
      title: 'Dashboard',
      description: 'Le pagine in cui leggi i risultati.',
      rows: [
        { label: 'Sintesi con verdetto e Punteggio SCOVO', cells: {} },
        { label: 'Cosa fare: azioni in ordine di priorità', cells: {} },
        { label: 'Parole chiave e hashtag', cells: {} },
        { label: 'LinkedIn: chi viene citato e cosa scrivere', cells: {} },
        { label: 'Dettagli: fasi, concorrenti, fonti', cells: {} },
        { label: 'Come misuriamo', cells: {} },
      ],
    },
    {
      title: 'Azioni',
      description: 'Chi può occuparsi di ogni azione consigliata.',
      rows: [
        { label: 'Fallo tu', cells: {} },
        { label: 'Passa al tuo web developer', cells: {} },
        { label: 'Possiamo farlo noi', cells: {} },
      ],
    },
    {
      title: 'Report',
      description: 'Cosa ricevi dopo ogni misurazione.',
      rows: [
        { label: 'Email con verdetto e prima azione', cells: {} },
        { label: 'PDF di una pagina', cells: {} },
        { label: 'Prima e dopo tra due misurazioni', cells: {} },
      ],
    },
    {
      title: 'Assistenza',
      description: 'A chi puoi scrivere.',
      rows: [
        { label: 'Referente italiano', cells: {} },
        { label: 'Email', cells: {} },
      ],
    },
  ],
};

export default normalizePlans(plans);
