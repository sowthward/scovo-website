import type { FaqContent } from '../types';

// Wording supplied by David (27 Nov 2026, from Scovo_FAQ.md, reviewed). Do not add claims.
// `home` appears on the homepage with FAQPage JSON-LD. It must not mention the trial (tests/no-trial.test.mjs).
const faq: FaqContent = {
  title: 'Frequently asked questions',
  home: [
    {
      q: 'What is SCOVO?',
      a: 'SCOVO is an AI visibility platform for leaders of B2B small and medium-sized businesses in Europe. It shows whether ChatGPT, Gemini, Perplexity and Claude name your company when your customers ask about products and services like yours, who they name instead, and what you can do to improve.',
    },
    {
      q: 'Which AI platforms does SCOVO monitor?',
      a: 'ChatGPT, Gemini, Perplexity and Claude: the AI assistants your customers use most to look for suppliers. Microsoft Copilot is not measured yet.',
    },
    {
      q: 'How does the SCOVO Score work?',
      a: 'The SCOVO Score runs from 0 to 100 and adds up four parts: Presence, how often AI names you (up to 45 points), Position (20), Tone (15) and Sources, whether AI cites your own site or content (20). Next to the score you see your share of voice against your competitors. Measurement after measurement, you see whether your actions are working.',
    },
    {
      q: 'Does SCOVO measure visibility in more than one language?',
      a: 'Yes. SCOVO is built for European businesses. The Professional and Enterprise plans measure your visibility in five languages: Italian, English, French, Spanish and German.',
    },
    {
      q: 'How often does SCOVO check the AI platforms?',
      a: 'At regular intervals, depending on your plan. In B2B a purchase decision takes weeks or months, so SCOVO follows the trend at each stage of the purchase and shows whether your visibility is rising or falling.',
    },
    {
      q: 'How does SCOVO choose which questions to track?',
      a: 'SCOVO reads your website and suggests the questions your customers are likely to ask an AI, grouped by stage of the purchase. You can edit them or add your own, then approve the ones to track.',
    },
    {
      q: 'What does tracking AI visibility let me do?',
      a: 'It shows where AI finds information about you: your website, your LinkedIn page and other social media, business directories and comparison sites. Knowing how visible you are, and where, compared with your competitors, lets you choose what to improve and check the result at the next measurement.',
    },
    {
      q: 'How does SCOVO identify my competitors?',
      a: 'SCOVO suggests them from your website and from the companies AI names in its answers to your questions. You choose and edit the list, so it reflects your real competitors.',
    },
  ],
  pricing: [
    {
      q: 'Is there a free trial, and do I need a credit card?',
      a: 'Yes, on the Starter plan: 14 days and two measurements, with the full dashboard. No credit card is needed. At the end of the trial you can continue on Starter or choose another plan.',
    },
  ],
};

export default faq;
