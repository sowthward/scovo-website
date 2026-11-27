import type { SampleContent } from '../types';

// Sample data for every dashboard mock. The company is invented.
// Do not change the figures: the drivers add up to 23, and the engines and the stages each average to 23.
// TODO: the English site reuses the Italian example company. Confirm, or supply an English-language example.
const sample: SampleContent = {
  disclaimer: 'Example with invented data. Officina Esempio S.r.l. is not a real customer.',
  company: 'Officina Esempio S.r.l.',
  city: 'Brescia',
  score: 23,
  max: 100,
  band: 'Weak',
  drivers: [
    { label: 'Presence', value: 11, max: 45 },
    { label: 'Position', value: 5, max: 20 },
    { label: 'Tone', value: 4, max: 15 },
    { label: 'Sources', value: 3, max: 20 },
  ],
  engines: [
    { label: 'ChatGPT', value: 31 },
    { label: 'Gemini', value: 24 },
    { label: 'Perplexity', value: 19 },
    { label: 'Claude', value: 18 },
    { label: 'Copilot', value: null },
  ],
  stages: [
    { label: 'Awareness', value: 8 },
    { label: 'Consideration', value: 14 },
    { label: 'Evaluation', value: 22 },
    { label: 'Decision', value: 48 },
  ],
  numbers: [
    { label: 'Visibility', value: '24%' },
    { label: 'Coverage', value: '4 covered, 1 unstable, 7 blind spots' },
    { label: 'Share of voice', value: '4%' },
  ],
  keywords: [
    { keyword: 'stainless steel machining', hashtag: '#StainlessSteel', score: 0 },
    { keyword: 'mechanical prototyping', hashtag: '#MechanicalPrototyping', score: 0 },
    { keyword: '5-axis machining', hashtag: '#5AxisMachining', score: 0 },
    { keyword: 'CNC subcontract machining', hashtag: '#CNCMachining', score: 12 },
    { keyword: 'precision turning', hashtag: '#PrecisionTurning', score: 21 },
    { keyword: 'small-batch milling', hashtag: '#SmallBatchMilling', score: 33 },
    { keyword: 'machine shop Brescia', hashtag: '#MachineShopBrescia', score: 48 },
    { keyword: 'ISO 9001 certification', hashtag: '#ISO9001', score: 48 },
  ],
  actions: [
    { tag: 'diy', text: 'Ask to be added to the sector supplier directory cited in 14 of 36 answers at the Consideration stage.' },
    { tag: 'us', text: 'Publish a LinkedIn post that answers the question "How do you choose a machine shop for mechanical prototypes?".' },
    { tag: 'dev', text: 'The keyword "stainless steel machining" does not appear on your website: add a dedicated page, with the answer at the top.' },
  ],
  rivals: ['Competitor A', 'Competitor B', 'Competitor C'],
  tags: { diy: 'Do it yourself', dev: 'Pass to your web developer', us: 'We can do it for you' },
  bands: [
    { label: 'Absent', from: 0, to: 19 },
    { label: 'Weak', from: 20, to: 39 },
    { label: 'In the running', from: 40, to: 59 },
    { label: 'Strong', from: 60, to: 79 },
    { label: 'Recommended', from: 80, to: 100 },
  ],
  share: {
    title: 'Share of voice',
    centre: 'your share',
    caption: 'Of all the companies AI names in its answers, how often it names you.',
    items: [
      { label: 'You (Officina Esempio)', value: 4, colour: 'orange' },
      { label: 'Competitor A', value: 18, colour: 'blue' },
      { label: 'Competitor B', value: 12, colour: 'purple' },
      { label: 'Competitor C', value: 9, colour: 'green' },
      { label: 'Others', value: 57, colour: 'grey' },
    ],
  },
  // The four stage scores average to 23, the sample score. Prompts for a generic precision-engineering supplier, no Italian place names.
  funnel: [
    {
      name: 'Awareness',
      buyer: 'The buyer is finding out who does what.',
      prompts: [
        'Who does subcontract stainless steel machining near me?',
        'Mechanical prototyping companies in my region',
        'Machine shops with 5-axis machining nearby',
      ],
      score: 8,
      voice: 1,
      action: { tag: 'dev', text: 'A dedicated page for "stainless steel machining", with the answer at the top.' },
    },
    {
      name: 'Consideration',
      buyer: 'The buyer is drawing up a supplier shortlist.',
      prompts: [
        'How do I choose a machine shop for mechanical prototypes?',
        'CNC subcontract machining suppliers for small batches',
        'Precision turning for small series: who should I ask?',
      ],
      score: 14,
      voice: 3,
      action: { tag: 'diy', text: 'Ask to be added to the supplier directory cited in 14 of 36 answers.' },
    },
    {
      name: 'Evaluation',
      buyer: 'The buyer is comparing suppliers.',
      prompts: [
        'ISO 9001 certified machine shops near me',
        'Small-batch milling: comparing suppliers',
        'Which machine shops handle small batches well?',
      ],
      score: 22,
      voice: 4,
      action: { tag: 'us', text: 'A LinkedIn post that answers "Which machine shops handle small batches well?".' },
    },
    {
      name: 'Decision',
      buyer: 'The buyer is choosing and checking.',
      prompts: [
        'Officina Esempio: reviews',
        'Officina Esempio or Competitor A for CNC machining?',
        'Best subcontract machine shop in my area',
      ],
      score: 48,
      voice: 9,
      action: { tag: 'diy', text: 'Ask for reviews or a comparison listing on the sites AI cites.' },
    },
  ],
  labels: {
    scoreName: 'SCOVO score',
    outOf: 'out of',
    summary: 'Summary',
    drivers: 'What the score depends on',
    engines: 'By engine',
    stages: 'By buying stage',
    firstAction: 'First action',
    actions: 'What to do',
    keywords: 'Keywords',
    keyword: 'Keyword',
    hashtag: 'Hashtag',
    score: 'Score',
    rivals: 'Named instead of you',
    notMeasured: 'not measured yet',
    nextLevel: 'Next level',
    band: 'Band',
    value: 'Value',
    you: 'You',
    others: 'Others',
    stageScore: 'Score',
  },
};

export default sample;
