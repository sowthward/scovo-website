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
    { label: 'Discovery', value: 8 },
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
    { tag: 'ctrlpost', text: 'Publish a LinkedIn post that answers the question "How do you choose a machine shop for mechanical prototypes?".' },
    { tag: 'dev', text: 'The keyword "stainless steel machining" does not appear on your website: add a dedicated page, with the answer at the top.' },
  ],
  rivals: ['Competitor A', 'Competitor B', 'Competitor C'],
  tags: { diy: 'Do it yourself', dev: 'Pass to your web developer', ctrlpost: 'ctrlpost can do it' },
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
  },
};

export default sample;
