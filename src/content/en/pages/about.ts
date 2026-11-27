import type { PageBase } from '../../types';

const page = {
  key: 'about',
  slug: 'about',
  view: 'About',
  published: true,
  navLabel: 'About',
  meta: {
    title: 'About | SCOVO',
    description: 'Who is behind SCOVO: founder David Wadsworth and Nicoletta Fava, Account Manager, Italy. SCOVO is built in Milan.',
  },
  h1: 'About',
  lead: 'SCOVO helps the people who run small and medium-sized companies understand how their company appears in AI answers.',

  // The line and the two people come from ../team.ts.
  team: { title: 'Who is behind SCOVO?' },

  why: {
    title: 'Why does SCOVO exist?',
    text: [
      'Buyers now ask an AI for a supplier the way they used to ask a colleague. We call it digital word of mouth.',
      'Most owners do not know what the AI answers when a buyer asks that question. SCOVO measures it and explains it in plain words.',
    ],
  },

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
} satisfies PageBase;

export default page;
