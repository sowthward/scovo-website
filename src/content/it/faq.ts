import type { FaqContent } from '../types';

// Wording supplied by David (27 Nov 2026, from Scovo_FAQ.md, reviewed). Do not add claims.
// `home` appears on the homepage with FAQPage JSON-LD. It must not mention the trial (tests/no-trial.test.mjs).
const faq: FaqContent = {
  title: 'Domande frequenti',
  home: [
    {
      q: "Che cos'è SCOVO?",
      a: "SCOVO è una piattaforma di visibilità nell'AI per imprenditori di PMI B2B in Europa. Ti mostra se ChatGPT, Gemini, Perplexity e Claude nominano la tua azienda quando i tuoi clienti chiedono prodotti e servizi come i tuoi, chi nominano al posto tuo e cosa puoi fare per migliorare.",
    },
    {
      q: 'Quali piattaforme AI monitora SCOVO?',
      a: 'ChatGPT, Gemini, Perplexity e Claude: le AI che i tuoi clienti usano di più per cercare fornitori. Microsoft Copilot non è ancora misurato.',
    },
    {
      q: 'Come funziona il Punteggio SCOVO?',
      a: "Il Punteggio SCOVO va da 0 a 100 ed è la somma di quattro parti: Presenza, cioè quanto spesso l'AI fa il tuo nome (fino a 45 punti), Posizione (20), Tono (15) e Fonti, cioè se l'AI cita il tuo sito o i tuoi contenuti (20). Accanto al punteggio trovi la tua quota di voce rispetto ai concorrenti. Misurazione dopo misurazione vedi se le tue azioni funzionano.",
    },
    {
      q: 'SCOVO misura la visibilità in più lingue?',
      a: 'Sì. SCOVO è pensato per le aziende europee. I piani Professional ed Enterprise misurano la tua visibilità in cinque lingue: italiano, inglese, francese, spagnolo e tedesco.',
    },
    {
      q: 'Ogni quanto SCOVO interroga le AI?',
      a: "A intervalli regolari, che dipendono dal piano. Nel B2B una decisione d'acquisto richiede settimane o mesi: per questo SCOVO segue l'andamento in ogni fase dell'acquisto e ti mostra se la tua visibilità cresce o cala.",
    },
    {
      q: 'Come sceglie SCOVO le domande da monitorare?',
      a: "SCOVO legge il tuo sito e ti propone le domande che i tuoi clienti farebbero a un'AI, divise per fase d'acquisto. Puoi modificarle o aggiungerne altre, poi approvi quelle da monitorare.",
    },
    {
      q: "Che cosa mi permette di fare il monitoraggio della visibilità nell'AI?",
      a: "Ti mostra dove l'AI trova informazioni su di te: il tuo sito, la tua pagina LinkedIn e altri social, gli elenchi di aziende e i siti di confronto. Sapere quanto e dove sei visibile rispetto ai concorrenti ti permette di scegliere cosa migliorare e di verificarne il risultato alla misurazione successiva.",
    },
    {
      q: 'Come individua SCOVO i miei concorrenti?',
      a: "SCOVO te li propone partendo dal tuo sito e dalle aziende che l'AI nomina nelle risposte alle tue domande. Tu scegli e modifichi la lista, perché rispecchi i tuoi veri concorrenti.",
    },
  ],
  pricing: [
    {
      q: "C'è una prova gratuita? Serve la carta di credito?",
      a: 'Sì, sul piano Starter: 14 giorni, due misurazioni, con la dashboard completa. Non serve la carta di credito. Alla fine della prova puoi continuare con Starter o scegliere un altro piano.',
    },
  ],
};

export default faq;
