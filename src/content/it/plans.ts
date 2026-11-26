import type { PlansContent } from '../types';
import { normalizePlans } from '../../lib/plans';

// ONE file for plan names, prices and limits. The pricing page and the features page both read it,
// so a value is typed once and can never differ between the two pages.
//
// Everything marked 'TBC' is unconfirmed. Plan names and the number of plans are placeholders too.
// To add, remove or rename a plan, edit the `plans` list. A cell you leave out is shown as "da confermare".
// A page that still contains a TBC cannot be published: the build fails.

const T = 'TBC';

const plans: PlansContent = {
  currency: '€',
  perMonth: '/mese',
  vat: '+ IVA',
  popularLabel: 'Il più scelto',
  billing: { label: 'Fatturazione', monthly: 'Mensile', annual: 'Annuale' },
  planLabel: 'Piano',
  featureLabel: 'Funzionalità',

  plans: [
    {
      key: 'prova',
      name: 'Prova',
      trial: true,
      priceText: 'Gratis, 14 giorni',
      forWhom: "Per vedere come ti vede l'AI",
      button: 'Richiedi la prova',
      includes: ['2 misurazioni', '4 motori AI', '12 domande', '8 parole chiave', '1 lingua', 'Nessuna carta di credito'],
    },
    { key: 'basic', name: 'Basic', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'professional', name: 'Professional', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'agency', name: 'Agency', price: T, forWhom: T, button: T, popular: false, includes: [T] },
  ],

  includesTable: {
    title: 'Cosa include ogni piano',
    lead: "Le quantità di ogni piano, una accanto all'altra.",
    rows: [
      { label: 'Motori AI', cells: { prova: '4' } },
      { label: 'Domande monitorate', cells: { prova: '12' } },
      { label: 'Parole chiave', cells: { prova: '8' } },
      { label: 'Frequenza delle misurazioni', cells: { prova: '2 misurazioni in 14 giorni' } },
      { label: 'Ripetizioni per domanda', cells: { prova: '3' } },
      { label: 'Lingue', cells: { prova: '1' } },
      { label: "Confronto con l'app ChatGPT", cells: { prova: 'campione' } },
    ],
  },

  // Do not add rows for anything that is not in the product. Engine names are plain text, no logos.
  featureGroups: [
    {
      title: 'Motori AI',
      description: 'I motori a cui facciamo le domande.',
      rows: [
        { label: 'ChatGPT', cells: { prova: true } },
        { label: 'Gemini', cells: { prova: true } },
        { label: 'Perplexity', cells: { prova: true } },
        { label: 'Claude', cells: { prova: true } },
        { label: 'Microsoft Copilot', cells: { prova: 'non ancora misurato' } },
      ],
    },
    {
      title: 'Misurazione',
      description: 'Quanto misuriamo e ogni quanto.',
      rows: [
        { label: 'Domande dei tuoi clienti', cells: { prova: '12' } },
        { label: 'Parole chiave', cells: { prova: '8' } },
        { label: 'Ripetizioni per domanda e motore', cells: { prova: '3' } },
        { label: 'Misurazioni', cells: { prova: '2 in 14 giorni' } },
        { label: 'Lingue', cells: { prova: '1' } },
        { label: 'Domande create in automatico dal tuo sito', cells: { prova: true } },
        { label: "Confronto con l'app ChatGPT", cells: { prova: 'campione' } },
      ],
    },
    {
      title: 'Dashboard',
      description: 'Le pagine in cui leggi i risultati.',
      rows: [
        { label: 'Sintesi con verdetto e Punteggio SCOVO', cells: { prova: true } },
        { label: 'Cosa fare: azioni in ordine di priorità', cells: { prova: true } },
        { label: 'Parole chiave e hashtag', cells: { prova: true } },
        { label: 'LinkedIn: chi viene citato e cosa scrivere', cells: { prova: true } },
        { label: 'Dettagli: fasi, concorrenti, fonti', cells: { prova: true } },
        { label: 'Come misuriamo', cells: { prova: true } },
      ],
    },
    {
      title: 'Azioni',
      description: 'Chi può occuparsi di ogni azione consigliata.',
      rows: [
        { label: 'Fallo tu', cells: { prova: true } },
        { label: 'Passa al tuo web developer', cells: { prova: true } },
        { label: 'Possiamo farlo noi', cells: { prova: T } },
      ],
    },
    {
      title: 'Report',
      description: 'Cosa ricevi dopo ogni misurazione.',
      rows: [
        { label: 'Email con verdetto e prima azione', cells: { prova: true } },
        { label: 'PDF di una pagina', cells: { prova: true } },
        { label: 'Prima e dopo tra due misurazioni', cells: { prova: true } },
      ],
    },
    {
      title: 'Assistenza',
      description: 'A chi puoi scrivere.',
      rows: [
        { label: 'Referente italiano', cells: { prova: T } },
        { label: 'Email', cells: { prova: T } },
      ],
    },
  ],
};

export default normalizePlans(plans);
