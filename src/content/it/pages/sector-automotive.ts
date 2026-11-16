import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers and a native speaker.
const page = {
  key: 'sector-automotive',
  slug: 'settori/fornitura-automotive',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'Fornitura automotive',
  meta: {
    title: 'Fornitura automotive | SCOVO',
    description: "Gli uffici acquisti cercano fornitori per capacità e certificazione, anche chiedendo a un'AI. SCOVO ti mostra se fa il tuo nome.",
  },
  h1: '«Fornitore componenti automotive a Torino, IATF 16949»: esce il nome della tua azienda?',
  lead: "Gli uffici acquisti cercano per capacità e per certificazione. La presenza su LinkedIn dell'azienda e del titolare è un segnale di credibilità.",
  questions: {
    title: "Cosa chiede un cliente all'AI?",
    lead: 'Domande di esempio, con la provincia o la regione.',
    items: ['fornitore componenti automotive Torino IATF 16949', 'stampaggio plastica automotive Piemonte'],
  },
  checks: {
    title: 'Cosa controlla SCOVO in questo settore?',
    lead: 'Le fonti che i motori AI citano quando rispondono a queste domande.',
    items: [
      { icon: 'link', title: 'Elenchi di fornitori e portali di settore', text: 'Se la tua azienda è presente e con quali capacità.' },
      { icon: 'file', title: 'Stampa tecnica di settore', text: 'Se e come vieni nominato negli articoli che le AI usano come fonte.' },
      { icon: 'dashboard', title: 'Il tuo sito', text: 'Se certificazioni e processi sono scritti in pagine leggibili.' },
      { icon: 'post', title: 'LinkedIn', text: "Se la pagina dell'azienda e il profilo del titolare vengono citati." },
    ],
  },
  gaps: {
    title: 'Quali sono le lacune più comuni?',
    lead: 'Esempi tipici, ognuno con la sua azione.',
    items: [
      { gap: 'La certificazione è citata solo nel piè di pagina.', action: 'Una pagina dedicata alla certificazione, con ambito e data.', tag: 'dev' },
      { gap: 'I processi produttivi non hanno una pagina propria.', action: 'Una pagina per ogni processo, con la risposta in alto.', tag: 'dev' },
      { gap: "Il profilo LinkedIn del titolare è vuoto.", action: 'Completa il profilo con ruolo, azienda e settore.', tag: 'diy' },
      { gap: "La pagina LinkedIn dell'azienda non pubblica.", action: 'Un post che risponde a una domanda tipica di un ufficio acquisti.', tag: 'ctrlpost' },
    ],
  },
} satisfies PageBase;

export default page;
