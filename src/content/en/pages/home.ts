import type { PageBase } from '../../types';

// English copy is written from the outcome, not translated word for word.
const page = {
  key: 'home',
  slug: '',
  view: 'Home',
  published: true,
  navLabel: 'Home',
  meta: {
    title: 'SCOVO: does your company come up in ChatGPT answers?',
    description:
      'Find out whether ChatGPT, Gemini, Perplexity and Claude recommend your company, and what to do if they do not. 14-day trial, no credit card.',
  },

  hero: {
    h1: 'When a buyer asks ChatGPT for a supplier, does your name come up?',
    sub: 'Find out whether ChatGPT and other AI assistants recommend your company, and what to do if they do not.',
    cta: 'Request the 14-day trial',
    exampleLink: 'See an example',
  },

  intro: {
    title: 'Digital word of mouth',
    text: 'Buyers now ask an AI for a supplier the way they used to ask a colleague. The AI names a few companies. SCOVO shows whether yours is one of them, and what to do if it is not.',
  },

  product: {
    title: 'What does SCOVO do?',
    lead: 'It measures how your company appears in answers from ChatGPT, Gemini, Perplexity and Claude. Then it tells you what to do, most important first.',
    cards: [
      {
        mock: 'score',
        title: 'How AI sees you',
        text: 'The SCOVO score runs from 0 to 100. Next to the number you get the reasons: how often you appear, in what position, in what tone and from which sources.',
        link: 'How the score is built',
        to: { page: 'measure' },
      },
      {
        mock: 'actions',
        title: 'What to do now',
        text: 'A short list of actions, most important first. Each one says who can take care of it.',
        link: 'See the three kinds of action',
        to: { anchor: '#come-funziona' },
      },
    ],
  },

  actions: {
    title: 'How it works: who does what?',
    lead: 'Every action carries a label. It tells you whether you can do it yourself, whether it needs your web developer, or whether we can take it on for you.',
    exampleLabel: 'Example',
    cards: [
      { tag: 'diy', title: 'Do it yourself', text: 'Actions that need no technical skill. A phone call, an email or a post is enough.' },
      { tag: 'dev', title: 'Pass to your web developer', text: 'Changes to your website, written so that whoever runs it knows what to do.' },
      {
        tag: 'us',
        title: 'We can do it for you',
        text: 'Actions we will be able to carry out for you.',
        note: 'This service comes later. It is not on sale yet.',
      },
    ],
  },

  features: {
    title: 'What does SCOVO measure, and what do you receive?',
    lead: "Each measurement reads the answers four AI engines give to your customers' questions. You receive the result and the evidence.",
    featuresLink: 'Compare all features',
    tabs: [
      {
        label: 'What we measure',
        items: [
          { icon: 'engines', title: '4 AI engines', text: 'ChatGPT, Gemini, Perplexity and Claude.' },
          { icon: 'question', title: "12 of your customers' questions", text: 'The questions a buyer would put to an AI to find a supplier like you.' },
          { icon: 'tag', title: '8 keywords', text: 'The terms you want to be found for. Each has its own score.' },
          { icon: 'steps', title: '4 buying stages', text: 'Discovery, Consideration, Evaluation and Decision.' },
          { icon: 'people', title: 'Who is named instead of you', text: 'The names the AI gives when it does not give yours.' },
          { icon: 'link', title: 'Where the AI gets its information', text: 'The websites, directories and pages the AI cites as sources.' },
          { icon: 'post', title: 'How much LinkedIn counts', text: 'Who gets cited from LinkedIn and what is worth writing.' },
          { icon: 'bot', title: 'Whether AI bots can read your website', text: 'We check that your website does not block them.' },
        ],
      },
      {
        label: 'What you receive',
        items: [
          { icon: 'mail', title: 'The email with the verdict', text: 'The result in a few lines and the first action to take.' },
          { icon: 'file', title: 'The one-page PDF', text: 'To print, or to pass to the people you work with.' },
          { icon: 'dashboard', title: 'The dashboard with the evidence', text: 'Behind every number you find the answers we read.' },
          { icon: 'compare', title: 'Before and after, with the second measurement', text: 'See what changed between the two measurements.' },
          { icon: 'hash', title: 'Your hashtags, ready to use', text: 'One hashtag per keyword, for your posts.' },
        ],
      },
    ],
  },

  // "Who it's for": replaces the earlier sector section. The anchor is used by the menu and the footer.
  whoFor: {
    id: 'who-its-for',
    title: 'Who is SCOVO for?',
    intro: 'For people who run a small or medium-sized company that sells to other companies, and want to know whether AI recommends them to buyers.',
    fitTitle: "It's for you if",
    fit: [
      { icon: 'compare', text: 'You sell to other companies.' },
      { icon: 'pin', text: 'Your customers choose suppliers on capability, certifications and location.' },
      { icon: 'people', text: 'You have no marketing team, or a small one.' },
      { icon: 'steps', text: 'You want to know what to do, not just get a number.' },
    ],
    sectorsTitle: 'Sectors',
    questionLabel: 'A buyer asks:',
    link: 'Go to the sector',
    // A card links to its sector page only when that page is published.
    // TODO: English example questions were written for this site. Check with test customers.
    cards: [
      {
        page: 'sector-cnc', icon: 'factory', title: 'Precision engineering and subcontract machining',
        question: 'CNC subcontract machining supplier for small batches',
        angle: 'Buyers draw up their subcontractor shortlist by asking an AI.',
      },
      {
        page: 'sector-automotive', icon: 'car', title: 'Automotive supply',
        question: 'automotive components supplier with IATF 16949',
        angle: 'Purchasing teams search by capability and certification.',
      },
      {
        page: 'sector-b2b', icon: 'box', title: 'B2B distribution and services',
        question: 'electrical wholesaler for installers near me',
        angle: 'Here, word of mouth is the business. SCOVO tells you whether AI repeats it.',
      },
    ],
    other: {
      title: "Your sector isn't here?",
      text: 'The trial questions are created from your own website. We start with these three sectors so the examples can be more precise.',
      link: 'Request the trial',
    },
  },

  compare: {
    title: 'What changes with SCOVO?',
    lead: 'You stop guessing. You know what AI says about you and where the work is worth doing.',
    without: {
      title: 'Without SCOVO',
      items: [
        'You do not know whether AI names you.',
        'You do not know who it names instead.',
        'You guess what to publish.',
        'Website and LinkedIn work is done blind.',
        'You cannot tell whether anything changed.',
      ],
    },
    with: {
      title: 'With SCOVO',
      items: [
        'You know whether AI names you, engine by engine.',
        'You see the names it gives instead of yours.',
        'You know what to publish, in order of priority.',
        'You know which website pages and LinkedIn posts to work on.',
        'With the second measurement you see the before and the after.',
      ],
    },
  },

  // Key facts for /llms.txt, in plain sentences.
  llms: [
    'SCOVO measures four AI engines: ChatGPT, Gemini, Perplexity and Claude. Microsoft Copilot is not measured yet.',
    'Each measurement asks 12 questions, each repeated three times on every engine: 144 answers read.',
    'The SCOVO score runs from 0 to 100: Presence 45, Position 20, Tone 15, Sources 20.',
    'Every recommended action carries a label: Do it yourself, Pass to your web developer, We can do it for you. The last service comes later and is not on sale yet.',
    'The trial lasts 14 days, includes 2 measurements and is free. No credit card is needed.',
    'SCOVO is built for small and medium-sized companies that sell to other companies.',
  ],

  // Facts about the method, not about customers.
  numbers: {
    title: 'The method in four numbers',
    items: [
      { value: 4, label: 'AI engines', text: 'ChatGPT, Gemini, Perplexity and Claude.' },
      { value: 12, label: 'questions', text: 'The ones your customers would ask.' },
      { value: 144, label: 'answers read per measurement', text: '12 questions, 4 engines, 3 repeats.' },
      { value: 14, label: 'days, 2 measurements', text: 'The length of the trial.' },
    ],
  },
} satisfies PageBase;

export default page;
