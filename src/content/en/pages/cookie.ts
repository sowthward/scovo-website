import type { PageBase } from '../../types';

// Layout and headings only. The legal text must be written by whoever is responsible for it.
const page = {
  key: 'cookie',
  slug: 'cookies',
  view: 'Legal',
  published: true,
  navLabel: 'Cookies',
  meta: { title: 'Cookies | SCOVO', description: 'Which cookies the SCOVO website uses.' },
  h1: 'Cookies',
  todoNote: 'TODO: legal text to be added',
  sections: [
    { title: 'What cookies are', todo: 'TODO: legal text' },
    { title: 'Which cookies this website uses', todo: 'TODO: legal text. The website uses only Cloudflare Web Analytics, which sets no cookies. That is why there is no banner.' },
    { title: 'How to manage cookies', todo: 'TODO: legal text' },
    { title: 'Changes to this page', todo: 'TODO: legal text' },
  ],
} satisfies PageBase;

export default page;
