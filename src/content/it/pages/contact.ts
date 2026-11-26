import type { PageBase } from '../../types';

const page = {
  key: 'contact',
  slug: 'contatti',
  view: 'Contact',
  published: true,
  navLabel: 'Contatti',
  meta: {
    title: 'Contatti | SCOVO',
    description: "Scrivi a info@loscovo.it, parla con la referente per l'Italia o richiedi la prova di 14 giorni.",
  },
  h1: 'Contatti',
  lead: 'Scrivici o richiedi la prova con il modulo qui sotto.',
  emailTitle: 'Email',
  personTitle: "Referente per l'Italia",
  followTitle: 'Seguici',
  formLink: 'Vai al modulo per la prova',
} satisfies PageBase;

export default page;
