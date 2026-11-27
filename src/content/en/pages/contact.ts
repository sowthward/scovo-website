import type { PageBase } from '../../types';

const page = {
  key: 'contact',
  slug: 'contact',
  view: 'Contact',
  published: true,
  navLabel: 'Contact',
  meta: {
    title: 'Contact | SCOVO',
    description: 'Write to info@scovo.io or book a demo of SCOVO.',
  },
  h1: 'Contact',
  lead: 'Write to us, or book a demo with the form below.',
  emailTitle: 'Email',
  personTitle: 'Italian account lead',
  followTitle: 'Follow us',
  formLink: 'Go to the demo form',
} satisfies PageBase;

export default page;
