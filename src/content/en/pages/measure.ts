import type { PageBase } from '../../types';

// The trust page. Plain statements a reader can check.
const page = {
  key: 'measure',
  slug: 'how-we-measure',
  view: 'Measure',
  published: true,
  navLabel: 'How we measure',
  meta: {
    title: 'How we measure: AI engines, questions and the SCOVO score',
    description:
      'Which AI engines we measure, how many questions we ask, how the SCOVO score is built and what SCOVO does not do. Statements you can check.',
  },
  h1: 'How we measure',
  lead: 'Every number you see in SCOVO comes from answers you can read. This page explains how we collect them and how we work out the score.',

  blocks: [
    {
      id: 'motori',
      q: 'Which AI engines do we measure?',
      a: ['Four: ChatGPT, Gemini, Perplexity and Claude.', 'Microsoft Copilot is not measured yet.'],
    },
    {
      id: 'domande',
      q: 'How many questions do we ask, and when?',
      a: [
        'We ask 12 questions. Each one is repeated three times on every engine.',
        'That makes 144 answers read per measurement. The dates we collected them on are shown in the report.',
      ],
    },
    {
      id: 'punteggio',
      q: 'How is the SCOVO score built?',
      a: ['The score runs from 0 to 100. It is the sum of four parts, each with a maximum.'],
      // TODO: the four one-line descriptions were written for this site. Confirm against the report format.
      score: {
        caption: 'The four parts of the SCOVO score',
        cols: ['Part', 'What it looks at', 'Maximum points'],
        rows: [
          ['Presence', 'How often the AI names you', '45'],
          ['Position', 'Where in the answer you are named', '20'],
          ['Tone', 'The tone in which you are described', '15'],
          ['Sources', 'Which sources the information comes from', '20'],
        ],
        total: ['Total', '', '100'],
        exampleTitle: 'An example',
      },
    },
    {
      id: 'stabile',
      q: 'When do we say something has changed?',
      a: ['Only when the score moves by 5 points or more.', 'Under 5 points we write "stable", not "better" or "worse".'],
    },
    {
      id: 'limiti',
      q: 'What does SCOVO not do?',
      a: ['In this phase SCOVO does not change your website.', 'It tells you what to do and who can do it. The decision stays with you.'],
    },
    {
      id: 'fonti-dati',
      q: 'Where do the answers come from?',
      // TODO: wording to be confirmed (open item 6, build plan decision 2).
      todo: true,
      a: ['The scores come from the official APIs.', 'A small sample of answers from the ChatGPT app is collected through Apify for comparison.'],
    },
  ],

  keywordsTitle: 'What does a keyword look like in the dashboard?',
  keywordsLead: 'Each keyword has its hashtag and its own score, from 0 to 100.',

  glossary: {
    title: 'Glossary',
    lead: 'The words you will find in the reports, each explained in one line.',
    // TODO: definitions written for this site. Confirm against the report format.
    items: [
      ['Prompt', 'The question a person types into an AI.'],
      ['Keyword', 'A term you want your company to be found for.'],
      ['Hashtag', 'The keyword written with a hash sign, ready for your posts.'],
      ['Citation', 'When the AI names your company in an answer.'],
      ['Source', 'The website or page the AI takes a piece of information from.'],
      ['Share of voice', 'The part of all citations that goes to you, out of every company named.'],
      ['Blind spot', 'A question the AI answers without ever naming you.'],
    ],
  },
} satisfies PageBase;

export default page;
