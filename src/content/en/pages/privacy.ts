import type { PageBase } from '../../types';

// Layout and headings only. The legal text must be written by whoever is responsible for it.
const page = {
  key: 'privacy',
  slug: 'privacy',
  view: 'Legal',
  published: true,
  navLabel: 'Privacy',
  meta: { title: 'Privacy notice | SCOVO', description: 'How SCOVO handles the personal data of people who visit the website and request the trial.' },
  h1: 'Privacy notice',
  todoNote: 'TODO: legal text to be added',
  sections: [
    { title: 'Data controller', todo: 'TODO: registered name, address, VAT number and contact of the controller' },
    { title: 'What data we collect', todo: 'TODO: legal text. The trial form collects name, company, website, email, how you heard about us and an optional message.' },
    { title: 'Why we process data, and on what basis', todo: 'TODO: legal text' },
    { title: 'Who processes data on our behalf', todo: 'TODO: name Cloudflare as the hosting provider and the email sending service as processors' },
    { title: 'How long we keep data', todo: 'TODO: legal text' },
    { title: 'Your rights', todo: 'TODO: legal text' },
    { title: 'How to contact us', todo: 'TODO: legal text' },
  ],
} satisfies PageBase;

export default page;
