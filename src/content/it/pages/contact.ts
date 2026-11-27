import type { PageBase } from '../../types';

const page = {
  key: 'contact',
  slug: 'contatti',
  view: 'Contact',
  published: true,
  navLabel: 'Contatti',
  meta: {
    title: 'Contatti | SCOVO',
    description: "Scrivi a info@loscovo.it, parla con il fondatore o con l'Account Manager per l'Italia, o richiedi una demo di SCOVO.",
  },
  h1: 'Contatti',
  lead: 'Scrivici o richiedi una demo con il modulo qui sotto.',
  emailTitle: 'Email',
  followTitle: 'Seguici',
  whereTitle: 'Dove siamo',
  teamTitle: 'Con chi parli',
  formLink: 'Vai al modulo per la demo',
} satisfies PageBase;

export default page;
