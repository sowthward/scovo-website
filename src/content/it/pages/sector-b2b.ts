import type { PageBase } from '../../types';

// Hidden until the content has been checked with test customers and a native speaker.
const page = {
  key: 'sector-b2b',
  slug: 'settori/distribuzione-servizi-b2b',
  view: 'Sector',
  group: 'sectors',
  published: false,
  navLabel: 'Distribuzione e servizi B2B',
  meta: {
    title: 'Distribuzione e servizi B2B | SCOVO',
    description: "Per chi distribuisce o fa manutenzione, il consiglio di zona è il lavoro. SCOVO ti mostra se l'AI lo ripete.",
  },
  h1: '«Distributore materiale elettrico a Verona per installatori»: esce il tuo nome?',
  lead: "Nel tuo lavoro conta il consiglio di chi è in zona. SCOVO ti mostra se l'AI lo ripete.",
  questions: {
    title: "Cosa chiede un cliente all'AI?",
    lead: 'Domande di esempio, con la provincia.',
    items: ['distributore materiale elettrico Verona per installatori', 'manutenzione impianti industriali Vicenza'],
  },
  checks: {
    title: 'Cosa controlla SCOVO in questo settore?',
    lead: 'Le fonti che i motori AI citano quando rispondono a queste domande.',
    items: [
      { icon: 'link', title: 'Elenchi e portali locali', text: 'Se la tua azienda è presente, con zona e servizi.' },
      { icon: 'file', title: 'Stampa locale e di settore', text: 'Se e come vieni nominato negli articoli che le AI usano come fonte.' },
      { icon: 'dashboard', title: 'Il tuo sito', text: 'Se zone servite, marchi e servizi sono scritti in pagine leggibili.' },
      { icon: 'post', title: 'LinkedIn', text: "Se la pagina dell'azienda viene citata." },
    ],
  },
  gaps: {
    title: 'Quali sono le lacune più comuni?',
    lead: 'Esempi tipici, ognuno con la sua azione.',
    items: [
      { gap: 'Le zone servite non sono scritte.', action: 'Una pagina con province e comuni in cui lavori.', tag: 'dev' },
      { gap: 'I marchi trattati sono solo in un catalogo PDF.', action: 'Un elenco dei marchi in una pagina del sito.', tag: 'dev' },
      { gap: "Non compari negli elenchi locali che l'AI cita.", action: 'Chiedi di essere inserito negli elenchi citati nelle risposte.', tag: 'diy' },
    ],
  },
} satisfies PageBase;

export default page;
