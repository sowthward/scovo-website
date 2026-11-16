import type { PageBase } from '../../types';

// Layout and headings only. The legal text must be written by whoever is responsible for it.
const page = {
  key: 'privacy',
  slug: 'privacy',
  view: 'Legal',
  published: true,
  navLabel: 'Privacy',
  meta: { title: 'Informativa sulla privacy | SCOVO', description: 'Come SCOVO tratta i dati personali di chi visita il sito e richiede la prova.' },
  h1: 'Informativa sulla privacy',
  todoNote: 'TODO: testo legale da inserire',
  sections: [
    { title: 'Titolare del trattamento', todo: 'TODO: ragione sociale, sede legale, P.IVA e contatto del titolare' },
    { title: 'Quali dati raccogliamo', todo: 'TODO: testo legale. Il modulo di prova raccoglie nome, azienda, sito web, email, come ci hai conosciuto e un messaggio facoltativo.' },
    { title: 'Perché trattiamo i dati e su quale base', todo: 'TODO: testo legale' },
    { title: 'Chi tratta i dati per nostro conto', todo: 'TODO: indicare Cloudflare come fornitore di hosting e il servizio di invio email come responsabili del trattamento' },
    { title: 'Per quanto tempo conserviamo i dati', todo: 'TODO: testo legale' },
    { title: 'I tuoi diritti', todo: 'TODO: testo legale' },
    { title: 'Come contattarci', todo: 'TODO: testo legale' },
  ],
} satisfies PageBase;

export default page;
