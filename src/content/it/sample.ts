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
    { tag: 'ctrlpost', text: 'Pubblica su LinkedIn una risposta alla domanda "Come scegliere un\'officina per prototipi meccanici?".' },
    { tag: 'dev', text: 'La parola chiave "lavorazione acciaio inox" non compare sul tuo sito: una pagina dedicata, con la risposta in alto.' },
  ],
  rivals: ['Concorrente A', 'Concorrente B', 'Concorrente C'],
  tags: { diy: 'Fallo tu', dev: 'Passa al tuo web developer', ctrlpost: 'Può farlo ctrlpost' },
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
  },
};

export default sample;
