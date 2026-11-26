import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers and a native speaker.
// Only name trade fairs or associations if they are supplied here.
const page = {
  key: 'sector-cnc',
  slug: 'settori/meccanica-di-precisione',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'Meccanica di precisione e conto terzi',
  meta: {
    title: 'Meccanica di precisione e conto terzi | SCOVO',
    description: "Chi cerca un'officina per lavorazioni CNC conto terzi oggi lo chiede a un'AI. SCOVO ti mostra se fa il tuo nome.",
  },
  h1: '«Fornitore lavorazioni CNC conto terzi a Brescia»: esce il nome della tua officina?',
  lead: "Chi compra lavorazioni meccaniche prepara la lista dei terzisti chiedendo a un'AI. Certificazioni e capacità delle macchine devono essere facili da trovare.",
  questions: {
    title: "Cosa chiede un cliente all'AI?",
    lead: 'Domande di esempio, con la provincia.',
    items: ['fornitore lavorazioni CNC conto terzi Brescia', 'officina meccanica di precisione Bergamo piccole serie'],
  },
  checks: {
    title: 'Cosa controlla SCOVO in questo settore?',
    lead: "Le fonti che i motori AI citano quando rispondono a queste domande.",
    items: [
      { icon: 'link', title: 'Elenchi e portali di subfornitura', text: 'Se la tua officina è presente e con quali lavorazioni.' },
      { icon: 'file', title: 'Stampa tecnica di settore', text: 'Se e come vieni nominato negli articoli che le AI usano come fonte.' },
      { icon: 'dashboard', title: 'Il tuo sito', text: "Se certificazioni, macchine e lavorazioni sono scritte in pagine che un'AI può leggere." },
      { icon: 'post', title: 'LinkedIn', text: "Se la pagina dell'azienda e il tuo profilo vengono citati." },
    ],
  },
  gaps: {
    title: 'Quali sono le lacune più comuni?',
    lead: 'Esempi tipici, ognuno con la sua azione.',
    items: [
      { gap: 'Le certificazioni sono solo in un PDF.', action: 'Una pagina del sito con ogni certificazione scritta per esteso.', tag: 'dev' },
      { gap: 'Il parco macchine non è descritto.', action: 'Una pagina con macchine, assi, dimensioni massime e materiali lavorati.', tag: 'dev' },
      { gap: "Non compari negli elenchi che l'AI cita.", action: 'Chiedi di essere inserito negli elenchi di fornitori citati nelle risposte.', tag: 'diy' },
      { gap: 'Nessuno risponde alle domande dei buyer su LinkedIn.', action: 'Un post che risponde a una domanda reale, per esempio come scegliere un terzista.', tag: 'us' },
    ],
  },
} satisfies PageBase;

export default page;
