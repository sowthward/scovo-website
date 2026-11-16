import type { PageBase } from '../../types';

const page = {
  key: 'about',
  slug: 'about',
  view: 'About',
  published: true,
  navLabel: 'About',
  meta: {
    title: 'About: SCOVO, a ctrlpost product',
    description: 'Who is behind SCOVO, how it relates to ctrlpost and who to talk to.',
  },
  h1: 'About',
  lead: 'SCOVO is a ctrlpost product. It helps the people who run small and medium-sized companies understand how their company appears in AI answers.',

  blocks: [
    {
      title: 'Who is behind SCOVO?',
      text: ['SCOVO is developed by ctrlpost.'],
      // TODO: one or two factual sentences about ctrlpost (who, where, since when). Not supplied yet.
      todo: 'TODO: short description of ctrlpost',
      link: { label: 'ctrlpost.io', href: 'https://ctrlpost.io' },
    },
    {
      title: 'Why does SCOVO exist?',
      text: [
        'Buyers now ask an AI for a supplier the way they used to ask a colleague. We call it digital word of mouth.',
        'Most owners do not know what the AI answers when a buyer asks that question. SCOVO measures it and explains it in plain words.',
      ],
    },
  ],

  principles: {
    title: 'How do we work?',
    lead: 'Three rules that hold for every report.',
    items: [
      { icon: 'dashboard', title: 'Numbers you can check', text: 'Behind every number are the answers we read. You find them in the dashboard.' },
      { icon: 'question', title: 'Plain words', text: 'Reports are written for the person who runs the company, not for a marketer.' },
      { icon: 'compare', title: 'No promise of a result', text: 'We measure, we tell you what to do, and we show you the before and the after.' },
    ],
    link: 'Read how we measure',
  },

  contact: {
    title: 'Who do you talk to?',
    lead: 'Nicoletta is the account lead for Italy.',
  },
} satisfies PageBase;

export default page;
