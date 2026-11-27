import type { PageBase } from '../../types';

const page = {
  key: 'contact',
  slug: 'contatti',
  view: 'Contact',
  published: true,
  navLabel: 'Contatti',
  meta: {
    title: 'Contatti | SCOVO',
    description: "Scrivi a info@loscovo.it, parla con la referente per l'Italia o richiedi una demo di SCOVO.",
  },
  h1: 'Contatti',
  lead: 'Scrivici o richiedi una demo con il modulo qui sotto.',
  emailTitle: 'Email',
  personTitle: "Referente per l'Italia",
  followTitle: 'Seguici',
  formLink: 'Vai al modulo per la demo',
} satisfies PageBase;

export default page;
