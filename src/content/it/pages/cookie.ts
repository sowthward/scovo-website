import type { PageBase } from '../../types';

// Layout and headings only. The legal text must be written by whoever is responsible for it.
const page = {
  key: 'cookie',
  slug: 'cookie',
  view: 'Legal',
  published: true,
  navLabel: 'Cookie',
  meta: { title: 'Cookie | SCOVO', description: 'Quali cookie usa il sito SCOVO.' },
  h1: 'Cookie',
  todoNote: 'TODO: testo legale da inserire',
  sections: [
    { title: 'Cosa sono i cookie', todo: 'TODO: testo legale' },
    { title: 'Quali cookie usa questo sito', todo: "TODO: testo legale. Il sito usa solo Cloudflare Web Analytics, che non imposta cookie. Per questo non c'è un banner." },
    { title: 'Come gestire i cookie', todo: 'TODO: testo legale' },
    { title: 'Aggiornamenti di questa pagina', todo: 'TODO: testo legale' },
  ],
} satisfies PageBase;

export default page;
