import type { PageBase } from '../../types';

const page = {
  key: 'contact',
  slug: 'contact',
  view: 'Contact',
  published: true,
  navLabel: 'Contact',
  meta: {
    title: 'Contact | SCOVO',
    description: 'Write to info@scovo.io or request the 14-day trial.',
  },
  h1: 'Contact',
  lead: 'Write to us, or request the trial with the form below.',
  emailTitle: 'Email',
  personTitle: 'Italian account lead',
  followTitle: 'Follow us',
  formLink: 'Go to the trial form',
} satisfies PageBase;

export default page;
