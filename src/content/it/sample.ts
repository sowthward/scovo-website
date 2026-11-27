import type { SampleContent } from '../types';

// Sample data for every dashboard mock. The company is invented.
// Do not change the figures: the drivers add up to 23, and the engines and the stages each average to 23.
const sample: SampleContent = {
  disclaimer: 'Esempio con dati inventati. Officina Esempio S.r.l. non è un cliente reale.',
  company: 'Officina Esempio S.r.l.',
  city: 'Brescia',
  score: 23,
  max: 100,
  band: 'Debole',
  drivers: [
    { label: 'Presenza', value: 11, max: 45 },
    { label: 'Posizione', value: 5, max: 20 },
    { label: 'Tono', value: 4, max: 15 },
    { label: 'Fonti', value: 3, max: 20 },
  ],
  engines: [
    { label: 'ChatGPT', value: 31 },
    { label: 'Gemini', value: 24 },
    { label: 'Perplexity', value: 19 },
    { label: 'Claude', value: 18 },
    { label: 'Copilot', value: null },
  ],
  stages: [
    { label: 'Scoperta', value: 8 },
    { label: 'Considerazione', value: 14 },
    { label: 'Valutazione', value: 22 },
    { label: 'Decisione', value: 48 },
  ],
  numbers: [
    { label: 'Visibilità', value: '24%' },
    { label: 'Copertura', value: '4 coperti, 1 instabile, 7 punti ciechi' },
    { label: 'Quota di voce', value: '4%' },
  ],
  keywords: [
    { keyword: 'lavorazione acciaio inox', hashtag: '#AcciaioInox', score: 0 },
    { keyword: 'prototipazione meccanica', hashtag: '#PrototipazioneMeccanica', score: 0 },
    { keyword: 'lavorazioni a 5 assi', hashtag: '#Lavorazioni5Assi', score: 0 },
    { keyword: 'lavorazioni CNC conto terzi', hashtag: '#LavorazioniCNC', score: 12 },
    { keyword: 'tornitura di precisione', hashtag: '#TornituraDiPrecisione', score: 21 },
    { keyword: 'fresatura piccole serie', hashtag: '#FresaturaPiccoleSerie', score: 33 },
    { keyword: 'officina meccanica Brescia', hashtag: '#OfficinaMeccanicaBrescia', score: 48 },
    { keyword: 'certificazione ISO 9001', hashtag: '#ISO9001', score: 48 },
  ],
  actions: [
    { tag: 'diy', text: "Chiedi di essere inserito nell'elenco fornitori di settore citato in 14 risposte su 36 nella fase Considerazione." },
    { tag: 'us', text: 'Pubblica su LinkedIn una risposta alla domanda "Come scegliere un\'officina per prototipi meccanici?".' },
    { tag: 'dev', text: 'La parola chiave "lavorazione acciaio inox" non compare sul tuo sito: una pagina dedicata, con la risposta in alto.' },
  ],
  rivals: ['Concorrente A', 'Concorrente B', 'Concorrente C'],
  tags: { diy: 'Fallo tu', dev: 'Passa al tuo web developer', us: 'Possiamo farlo noi' },
  bands: [
    { label: 'Assente', from: 0, to: 19 },
    { label: 'Debole', from: 20, to: 39 },
    { label: 'In gara', from: 40, to: 59 },
    { label: 'Forte', from: 60, to: 79 },
    { label: 'Consigliata', from: 80, to: 100 },
  ],
  share: {
    title: 'Quota di voce',
    centre: 'la tua quota',
    caption: "Su tutte le aziende nominate dall'AI nelle risposte, quante volte nomina te.",
    items: [
      { label: 'Tu (Officina Esempio)', value: 4, colour: 'orange' },
      { label: 'Concorrente A', value: 18, colour: 'blue' },
      { label: 'Concorrente B', value: 12, colour: 'purple' },
      { label: 'Concorrente C', value: 9, colour: 'green' },
      { label: 'Altri', value: 57, colour: 'grey' },
    ],
  },
  // The four stage scores average to 23, the sample score.
  funnel: [
    {
      name: 'Scoperta',
      buyer: 'Il cliente sta scoprendo chi fa cosa.',
      prompts: [
        "Chi lavora l'acciaio inox per conto terzi in provincia di Brescia?",
        'Aziende di prototipazione meccanica in Lombardia',
        'Officine con lavorazioni a 5 assi vicino a Brescia',
      ],
      score: 8,
      voice: 1,
      action: { tag: 'dev', text: 'Una pagina dedicata a "lavorazione acciaio inox", con la risposta in alto.' },
    },
    {
      name: 'Considerazione',
      buyer: 'Il cliente sta preparando una lista di fornitori.',
      prompts: [
        "Come scegliere un'officina per prototipi meccanici?",
        'Fornitori di lavorazioni CNC conto terzi a Brescia',
        'Tornitura di precisione per piccole serie: a chi rivolgersi?',
      ],
      score: 14,
      voice: 3,
      action: { tag: 'diy', text: "Chiedi di essere inserito nell'elenco fornitori citato in 14 risposte su 36." },
    },
    {
      name: 'Valutazione',
      buyer: 'Il cliente sta confrontando i fornitori.',
      prompts: [
        'Officine meccaniche certificate ISO 9001 a Brescia',
        'Fresatura piccole serie: confronto tra fornitori in Lombardia',
        'Quali officine di Brescia lavorano bene le piccole serie?',
      ],
      score: 22,
      voice: 4,
      // The change prompt tags this "Può farlo ctrlpost": "Possiamo farlo noi" since 26 Nov.
      action: { tag: 'us', text: 'Un post LinkedIn che risponde a «Quali officine di Brescia lavorano bene le piccole serie?».' },
    },
    {
      name: 'Decisione',
      buyer: 'Il cliente sta scegliendo e verificando.',
      prompts: [
        'Officina Esempio Brescia: opinioni',
        'Officina Esempio o Concorrente A per lavorazioni CNC?',
        'Miglior officina per lavorazioni conto terzi a Brescia',
      ],
      score: 48,
      voice: 9,
      action: { tag: 'diy', text: "Chiedi recensioni o una scheda di confronto sui siti che l'AI cita." },
    },
  ],
  labels: {
    scoreName: 'Punteggio SCOVO',
    outOf: 'su',
    summary: 'Sintesi',
    drivers: 'Da cosa dipende il punteggio',
    engines: 'Per motore',
    stages: 'Per fase di acquisto',
    firstAction: 'Prima azione',
    actions: 'Cosa fare',
    keywords: 'Parole chiave',
    keyword: 'Parola chiave',
    hashtag: 'Hashtag',
    score: 'Punteggio',
    rivals: 'Nominati al posto tuo',
    notMeasured: 'non ancora misurato',
    nextLevel: 'Livello successivo',
    band: 'Fascia',
    value: 'Valore',
    you: 'Tu',
    others: 'Altri',
    stageScore: 'Punteggio',
  },
};

export default sample;
