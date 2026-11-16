import type { PageBase } from '../../types';

// The trust page. Plain statements a reader can check.
const page = {
  key: 'measure',
  slug: 'come-misuriamo',
  view: 'Measure',
  published: true,
  navLabel: 'Come misuriamo',
  meta: {
    title: 'Come misuriamo: motori AI, domande e Punteggio SCOVO',
    description:
      'Quali motori AI misuriamo, quante domande facciamo, come si calcola il Punteggio SCOVO e cosa SCOVO non fa. Affermazioni che puoi verificare.',
  },
  h1: 'Come misuriamo',
  lead: 'Ogni numero che vedi in SCOVO nasce da risposte che puoi leggere. Qui trovi come le raccogliamo e come calcoliamo il punteggio.',

  // Each block is a question with its answer in the first lines. Also published as FAQPage data.
  blocks: [
    {
      id: 'motori',
      q: 'Quali motori AI misuriamo?',
      a: ['Quattro: ChatGPT, Gemini, Perplexity e Claude.', 'Microsoft Copilot non è ancora misurato.'],
    },
    {
      id: 'domande',
      q: 'Quante domande facciamo, e quando?',
      a: [
        'Facciamo 12 domande. Ogni domanda viene ripetuta tre volte su ogni motore.',
        'In tutto sono 144 risposte lette per ogni misurazione. Le date in cui le abbiamo raccolte sono scritte nel report.',
      ],
    },
    {
      id: 'punteggio',
      q: 'Come si calcola il Punteggio SCOVO?',
      a: ['Il punteggio va da 0 a 100. È la somma di quattro parti, ognuna con un massimo.'],
      // TODO: the four one-line descriptions were written for this site. Confirm against the report format.
      score: {
        caption: 'Le quattro parti del Punteggio SCOVO',
        cols: ['Parte', 'Cosa guarda', 'Punti massimi'],
        rows: [
          ['Presenza', "Quanto spesso l'AI fa il tuo nome", '45'],
          ['Posizione', 'In che posizione vieni nominato', '20'],
          ['Tono', 'Con che tono si parla di te', '15'],
          ['Fonti', 'Da quali fonti arrivano le informazioni', '20'],
        ],
        total: ['Totale', '', '100'],
        exampleTitle: 'Un esempio',
      },
    },
    {
      id: 'stabile',
      q: 'Quando diciamo che qualcosa è cambiato?',
      a: ['Solo quando il punteggio si muove di almeno 5 punti.', 'Sotto i 5 punti scriviamo «stabile», non «migliorato» o «peggiorato».'],
    },
    {
      id: 'limiti',
      q: 'Cosa non fa SCOVO?',
      a: ['In questa fase SCOVO non modifica il tuo sito.', 'Ti dice cosa fare e chi può farlo. La decisione resta a te.'],
    },
    {
      id: 'fonti-dati',
      q: 'Da dove arrivano le risposte?',
      // TODO: wording to be confirmed (open item 6, build plan decision 2).
      todo: true,
      a: [
        'I punteggi provengono dalle API ufficiali.',
        "Un piccolo campione di risposte dell'app ChatGPT è raccolto tramite Apify per confronto.",
      ],
    },
  ],

  keywordsTitle: 'Come appare una parola chiave nella dashboard?',
  keywordsLead: 'Ogni parola chiave ha il suo hashtag e il suo punteggio, da 0 a 100.',

  glossary: {
    title: 'Glossario',
    lead: 'Le parole che trovi nei report, spiegate in una riga.',
    // TODO: definitions written for this site. Confirm against the report format.
    items: [
      ['Prompt', "La domanda che una persona scrive a un'AI."],
      ['Parola chiave', 'Un termine per cui vuoi che la tua azienda venga trovata.'],
      ['Hashtag', 'La parola chiave scritta con il cancelletto, pronta per i tuoi post.'],
      ['Citazione', "Quando l'AI fa il nome della tua azienda in una risposta."],
      ['Fonte', "Il sito o la pagina da cui l'AI prende un'informazione."],
      ['Quota di voce', 'La parte delle citazioni che va a te, sul totale delle aziende nominate.'],
      ['Punto cieco', "Una domanda a cui l'AI risponde senza mai fare il tuo nome."],
    ],
  },
} satisfies PageBase;

export default page;
