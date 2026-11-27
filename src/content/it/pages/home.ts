import type { PageBase } from '../../types';
import site from '../site';

const page = {
  key: 'home',
  slug: '',
  view: 'Home',
  published: true,
  navLabel: 'Home',
  meta: {
    title: `SCOVO · ${site.descriptor}`,
    // Starts with the descriptor. Under 160 characters (checked by tests/no-trial.test.mjs).
    // The change prompt ends it with "Un prodotto ctrlpost.": left out, ctrlpost was removed from the site on 26 Nov 2026.
    description: `${site.descriptor}: scopri se ChatGPT e le altre AI consigliano la tua azienda e cosa fare se non lo fanno.`,
  },

  hero: {
    h1: 'Quando un cliente chiede a ChatGPT un fornitore, esce il tuo nome?',
    sub: 'Scopri se ChatGPT e le altre AI consigliano la tua azienda, e cosa fare se non lo fanno.',
    exampleLink: 'Guarda un esempio',
  },

  intro: {
    title: 'Passaparola Digitale',
    text: "Chi cerca un fornitore oggi lo chiede a un'AI, come una volta lo chiedeva a un collega. L'AI risponde con pochi nomi. SCOVO ti mostra se tra quei nomi c'è la tua azienda, e cosa fare se non c'è.",
  },

  product: {
    title: 'Cosa fa SCOVO?',
    lead: 'Misura come la tua azienda compare nelle risposte di ChatGPT, Gemini, Perplexity e Claude. Poi ti dice cosa fare, in ordine di priorità.',
    cards: [
      {
        mock: 'score',
        title: "Come ti vede l'AI",
        text: 'Il Punteggio SCOVO va da 0 a 100. Accanto al numero trovi i motivi: quanto compari, in che posizione, con che tono e da quali fonti.',
        link: 'Come si calcola il punteggio',
        to: { page: 'measure' },
      },
      {
        mock: 'actions',
        title: 'Cosa fare adesso',
        text: 'Una lista corta di azioni, dalla più importante. Ogni azione dice chi può occuparsene.',
        link: 'Vedi i tre tipi di azione',
        to: { anchor: '#come-funziona' },
      },
    ],
  },

  actions: {
    title: 'Come funziona: chi fa che cosa?',
    lead: "Ogni azione ha un'etichetta. Ti dice se puoi farla tu, se serve il tuo web developer o se possiamo occuparcene noi.",
    exampleLabel: 'Esempio',
    cards: [
      { tag: 'diy', title: 'Fallo tu', text: 'Azioni che non richiedono competenze tecniche. Bastano una telefonata, una email o un post.' },
      { tag: 'dev', title: 'Passa al tuo web developer', text: 'Modifiche al sito, scritte in modo che chi lo gestisce sappia cosa fare.' },
      {
        tag: 'us',
        title: 'Possiamo farlo noi',
        text: 'Azioni che potremo fare noi al posto tuo.',
        note: 'Questo servizio arriverà più avanti. Oggi non è in vendita.',
      },
    ],
  },

  features: {
    title: 'Cosa misura SCOVO e cosa ricevi?',
    lead: 'Ogni misurazione legge le risposte di quattro motori AI alle domande dei tuoi clienti. Tu ricevi il risultato e le prove.',
    featuresLink: 'Confronta tutte le funzionalità',
    tabs: [
      {
        label: 'Cosa misuriamo',
        items: [
          { icon: 'engines', title: '4 motori AI', text: 'ChatGPT, Gemini, Perplexity e Claude.' },
          { icon: 'question', title: 'Le domande dei tuoi clienti', text: "Le domande che un cliente farebbe a un'AI per trovare un fornitore come te." },
          { icon: 'tag', title: 'Le tue parole chiave', text: 'I termini per cui vuoi essere trovato. Ognuno ha il suo punteggio.' },
          { icon: 'steps', title: '4 fasi di acquisto', text: 'Scoperta, Considerazione, Valutazione e Decisione.' },
          { icon: 'people', title: 'Chi viene nominato al posto tuo', text: "I nomi che l'AI fa quando non fa il tuo." },
          { icon: 'link', title: "Da dove l'AI prende le informazioni", text: "I siti, gli elenchi e le pagine che l'AI cita come fonte." },
          { icon: 'post', title: 'Quanto conta LinkedIn', text: 'Chi viene citato da LinkedIn e cosa conviene scrivere.' },
          { icon: 'bot', title: "Se i bot dell'AI possono leggere il tuo sito", text: 'Controlliamo che il tuo sito non li blocchi.' },
        ],
      },
      {
        label: 'Cosa ricevi',
        items: [
          { icon: 'mail', title: "L'email con il verdetto", text: 'Il risultato in poche righe e la prima azione da fare.' },
          { icon: 'file', title: 'Il PDF di una pagina', text: 'Da stampare o da girare a chi lavora con te.' },
          { icon: 'dashboard', title: 'La dashboard con le prove', text: 'Dietro ogni numero trovi le risposte lette.' },
          { icon: 'compare', title: "Il prima e il dopo tra una misurazione e l'altra", text: "Vedi cosa è cambiato da una misurazione all'altra." },
          { icon: 'hash', title: 'I tuoi hashtag pronti da usare', text: 'Un hashtag per ogni parola chiave, da usare nei tuoi post.' },
        ],
      },
    ],
  },

  // "Per chi è": replaces the earlier sector section. The anchor is used by the menu and the footer.
  whoFor: {
    id: 'per-chi-e',
    title: 'Per chi è SCOVO?',
    intro: "Per chi guida una piccola o media impresa che vende ad altre aziende e vuole sapere se l'AI la consiglia ai clienti.",
    fitTitle: 'È per te se',
    fit: [
      { icon: 'compare', text: 'Vendi ad altre aziende.' },
      { icon: 'pin', text: 'I tuoi clienti scelgono i fornitori per capacità, certificazioni e zona.' },
      { icon: 'people', text: 'Non hai un reparto marketing, o è piccolo.' },
      { icon: 'steps', text: 'Vuoi sapere cosa fare, non solo un numero.' },
    ],
    sectorsTitle: 'Settori',
    questionLabel: 'Un cliente chiede:',
    link: 'Vai al settore',
    // A card links to its sector page only when that page is published.
    cards: [
      {
        page: 'sector-cnc', icon: 'factory', title: 'Meccanica di precisione e conto terzi',
        question: 'fornitore lavorazioni CNC conto terzi Brescia',
        angle: "Chi compra prepara la lista dei terzisti chiedendo a un'AI.",
      },
      {
        page: 'sector-automotive', icon: 'car', title: 'Fornitura automotive',
        question: 'fornitore componenti automotive Torino IATF 16949',
        angle: 'Gli acquisti cercano per capacità e certificazione.',
      },
      {
        page: 'sector-b2b', icon: 'box', title: 'Distribuzione e servizi B2B',
        question: 'distributore materiale elettrico Verona per installatori',
        angle: "Qui conta il passaparola. SCOVO ti dice se l'AI lo ripete.",
      },
    ],
    other: {
      title: "Il tuo settore non c'è?",
      // The 26 Nov prompt said "Le domande della prova". "della prova" removed on 27 Nov: no trial on general pages.
      text: 'Le domande vengono create a partire dal tuo sito. Partiamo da questi tre settori per avere esempi più precisi.',
    },
  },

  compare: {
    title: 'Cosa cambia con SCOVO?',
    lead: "Smetti di andare a intuito. Sai cosa dice di te l'AI e dove conviene lavorare.",
    without: {
      title: 'Senza SCOVO',
      items: [
        "Non sai se l'AI fa il tuo nome.",
        'Non sai chi nomina al posto tuo.',
        'Decidi a intuito cosa pubblicare.',
        'Lavori su sito e LinkedIn alla cieca.',
        'Non sai se qualcosa è cambiato.',
      ],
    },
    with: {
      title: 'Con SCOVO',
      items: [
        "Sai se l'AI fa il tuo nome, motore per motore.",
        'Vedi i nomi che fa al posto del tuo.',
        'Sai cosa pubblicare, in ordine di priorità.',
        'Sai su quali pagine del sito e su quali post LinkedIn lavorare.',
        'Misurazione dopo misurazione, vedi cosa è cambiato.',
      ],
    },
  },

  // Key facts for /llms.txt, in plain sentences.
  llms: [
    'SCOVO misura quattro motori AI: ChatGPT, Gemini, Perplexity e Claude. Microsoft Copilot non è ancora misurato.',
    'Ogni domanda viene posta tre volte a ogni motore. Quante domande e quante misurazioni dipende dal piano.',
    'Il Punteggio SCOVO va da 0 a 100: Presenza 45, Posizione 20, Tono 15, Fonti 20.',
    "Ogni azione consigliata ha un'etichetta: Fallo tu, Passa al tuo web developer, Possiamo farlo noi. L'ultimo servizio arriverà più avanti e oggi non è in vendita.",
    'SCOVO è pensato per le piccole e medie imprese che vendono ad altre aziende.',
  ],

  // Facts about the method, not about customers.
  numbers: {
    title: 'Il metodo in quattro numeri',
    // Numbers that hold for every plan. The 27 Nov prompt's fourth caption says "Può farlo ctrlpost": "Possiamo farlo noi" since 26 Nov.
    items: [
      { value: 4, label: 'motori AI', text: 'ChatGPT, Gemini, Perplexity e Claude.' },
      { value: 4, label: 'fasi di acquisto', text: 'Scoperta, Considerazione, Valutazione e Decisione.' },
      { value: 3, label: 'ripetizioni per domanda', text: 'Ogni domanda viene posta tre volte a ogni motore.' },
      { value: 3, label: 'tipi di azione', text: 'Fallo tu, Passa al tuo web developer, Possiamo farlo noi.' },
    ],
  },
} satisfies PageBase;

export default page;
