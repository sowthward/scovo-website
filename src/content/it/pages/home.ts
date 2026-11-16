import type { PageBase } from '../../types';

const page = {
  key: 'home',
  slug: '',
  view: 'Home',
  published: true,
  navLabel: 'Home',
  meta: {
    title: 'SCOVO: la tua azienda compare nelle risposte di ChatGPT?',
    description:
      'Scopri se ChatGPT, Gemini, Perplexity e Claude consigliano la tua azienda, e cosa fare se non lo fanno. Prova di 14 giorni, nessuna carta di credito.',
  },

  hero: {
    h1: 'Quando un cliente chiede a ChatGPT un fornitore, esce il tuo nome?',
    sub: 'Scopri se ChatGPT e le altre AI consigliano la tua azienda, e cosa fare se non lo fanno.',
    cta: 'Richiedi la prova di 14 giorni',
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
    lead: "Ogni azione ha un'etichetta. Ti dice se puoi farla tu, se serve il tuo web developer o se può occuparsene ctrlpost.",
    exampleLabel: 'Esempio',
    cards: [
      { tag: 'diy', title: 'Fallo tu', text: 'Azioni che non richiedono competenze tecniche. Bastano una telefonata, una email o un post.' },
      { tag: 'dev', title: 'Passa al tuo web developer', text: 'Modifiche al sito, scritte in modo che chi lo gestisce sappia cosa fare.' },
      {
        tag: 'ctrlpost',
        title: 'Può farlo ctrlpost',
        text: 'Azioni che ctrlpost potrà fare al posto tuo.',
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
          { icon: 'question', title: '12 domande dei tuoi clienti', text: "Le domande che un cliente farebbe a un'AI per trovare un fornitore come te." },
          { icon: 'tag', title: '8 parole chiave', text: 'I termini per cui vuoi essere trovato. Ognuno ha il suo punteggio.' },
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
          { icon: 'compare', title: 'Il prima e dopo con la seconda misurazione', text: 'Vedi cosa è cambiato tra le due misurazioni.' },
          { icon: 'hash', title: 'I tuoi hashtag pronti da usare', text: 'Un hashtag per ogni parola chiave, da usare nei tuoi post.' },
        ],
      },
    ],
  },

  sectors: {
    title: 'Per quali aziende è pensato SCOVO?',
    lead: 'Per le piccole e medie imprese che vendono ad altre aziende. Partiamo da tre settori.',
    questionLabel: 'Un cliente chiede:',
    link: 'Vai al settore',
    cards: [
      { page: 'sector-cnc', icon: 'factory', title: 'Meccanica di precisione e conto terzi', question: 'fornitore lavorazioni CNC conto terzi Brescia' },
      { page: 'sector-automotive', icon: 'car', title: 'Fornitura automotive', question: 'fornitore componenti automotive Torino IATF 16949' },
      { page: 'sector-b2b', icon: 'box', title: 'Distribuzione e servizi B2B', question: 'distributore materiale elettrico Verona per installatori' },
    ],
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
        'Con la seconda misurazione vedi il prima e il dopo.',
      ],
    },
  },

  // Key facts for /llms.txt, in plain sentences.
  llms: [
    'SCOVO misura quattro motori AI: ChatGPT, Gemini, Perplexity e Claude. Microsoft Copilot non è ancora misurato.',
    'Ogni misurazione fa 12 domande, ognuna ripetuta tre volte su ogni motore: 144 risposte lette.',
    'Il Punteggio SCOVO va da 0 a 100: Presenza 45, Posizione 20, Tono 15, Fonti 20.',
    'Ogni azione consigliata ha una etichetta: Fallo tu, Passa al tuo web developer, Può farlo ctrlpost.',
    'La prova dura 14 giorni, comprende 2 misurazioni ed è gratuita. Non serve la carta di credito.',
    'SCOVO è pensato per le piccole e medie imprese che vendono ad altre aziende.',
  ],

  // Facts about the method, not about customers.
  numbers: {
    title: 'Il metodo in quattro numeri',
    items: [
      { value: 4, label: 'motori AI', text: 'ChatGPT, Gemini, Perplexity e Claude.' },
      { value: 12, label: 'domande', text: 'Quelle che farebbero i tuoi clienti.' },
      { value: 144, label: 'risposte lette per misurazione', text: '12 domande, 4 motori, 3 ripetizioni.' },
      { value: 14, label: 'giorni, 2 misurazioni', text: 'La durata della prova.' },
    ],
  },
} satisfies PageBase;

export default page;
