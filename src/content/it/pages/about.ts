import type { PageBase } from '../../types';

const page = {
  key: 'about',
  slug: 'chi-siamo',
  view: 'About',
  published: true,
  navLabel: 'Chi siamo',
  meta: {
    title: 'Chi siamo | SCOVO',
    description: "Chi c'è dietro SCOVO, perché esiste e chi è la referente per l'Italia.",
  },
  h1: 'Chi siamo',
  lead: 'SCOVO aiuta chi guida una piccola o media impresa a capire come la sua azienda compare nelle risposte delle AI.',

  team: {
    title: "Chi c'è dietro SCOVO?",
    lead: "In Italia il tuo riferimento è Nicoletta.",
    // Empty until supplied. While `name` is empty, only Nicoletta's card is shown.
    founder: { name: '', role: '', text: '', photo: '' },
  },

  why: {
    title: 'Perché esiste SCOVO?',
    text: [
      "Chi cerca un fornitore oggi lo chiede a un'AI, come una volta lo chiedeva a un collega. È il Passaparola Digitale.",
      "Chi guida un'azienda di solito non sa cosa risponde l'AI quando un cliente fa quella domanda. SCOVO lo misura e lo spiega in parole semplici.",
    ],
  },

  principles: {
    title: 'Come lavoriamo?',
    lead: 'Tre regole che valgono per ogni report.',
    items: [
      { icon: 'dashboard', title: 'Numeri che puoi verificare', text: 'Dietro ogni numero ci sono le risposte lette. Le trovi nella dashboard.' },
      { icon: 'question', title: 'Parole semplici', text: "I report sono scritti per chi guida un'azienda, non per chi fa marketing." },
      { icon: 'compare', title: 'Nessuna promessa di risultato', text: 'Misuriamo, ti diciamo cosa fare e ti mostriamo il prima e il dopo.' },
    ],
    link: 'Leggi come misuriamo',
  },
} satisfies PageBase;

export default page;
