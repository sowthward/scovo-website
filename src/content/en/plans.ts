import type { PlansContent } from '../types';
import { normalizePlans } from '../../lib/plans';

// ONE file for plan names, prices and limits. The pricing page and the features page both read it,
// so a value is typed once and can never differ between the two pages.
//
// SCOVO is sold in three stages at three price levels (decision of 27 Nov 2026). Names from the FAQ of 27 Nov:
// Starter, Professional, Enterprise. Prices and limits are TBC.
// To add, remove or rename a plan, edit the `plans` list. A cell you leave out is shown as "to be confirmed".
// A page that still contains a TBC cannot be published: the build fails.
// Keep this file in step with src/content/it/plans.ts.

const T = 'TBC';
const KEYS = ['starter', 'professional', 'enterprise'] as const;
/** The same value in every plan's column. */
const all = (v: boolean | string) => Object.fromEntries(KEYS.map((k) => [k, v]));

const plans: PlansContent = {
  currency: '€',
  perMonth: '/month',
  vat: '+ VAT',
  popularLabel: 'Most chosen',
  billing: { label: 'Billing', monthly: 'Monthly', annual: 'Annual' },
  planLabel: 'Plan',
  featureLabel: 'Feature',

  plans: [
    { key: 'starter', name: 'Starter', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'professional', name: 'Professional', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'enterprise', name: 'Enterprise', price: T, forWhom: T, button: T, popular: false, includes: [T] },
  ],

  // The trial is an entry offer, not a plan. It appears only on the pricing page.
  trialOffer: {
    id: 'trial',
    title: 'Try SCOVO for 14 days',
    items: ['2 measurements', '4 AI engines', '12 questions', '8 keywords', 'no credit card'],
    planLabel: 'Which plan the trial activates:',
    // From the pricing FAQ of 27 Nov: the trial runs on Starter.
    plan: 'Starter',
  },

  includesTable: {
    title: 'What each plan includes',
    lead: 'The quantities in each plan, side by side.',
    rows: [
      { label: 'AI engines', cells: all('4') },
      { label: 'Questions monitored', cells: {} },
      { label: 'Keywords', cells: {} },
      { label: 'How often we measure', cells: {} },
      { label: 'Repeats per question', cells: {} },
      { label: 'Languages', cells: {} },
      { label: 'Comparison with the ChatGPT app', cells: {} },
    ],
  },

  // Do not add rows for anything that is not in the product. Engine names are plain text, no logos.
  featureGroups: [
    {
      title: 'AI engines',
      description: 'The engines we put the questions to.',
      rows: [
        { label: 'ChatGPT', cells: all(true) },
        { label: 'Gemini', cells: all(true) },
        { label: 'Perplexity', cells: all(true) },
        { label: 'Claude', cells: all(true) },
        { label: 'Microsoft Copilot', cells: all('not measured yet') },
      ],
    },
    {
      title: 'Measurement',
      description: 'How much we measure and how often.',
      rows: [
        { label: "Your customers' questions", cells: {} },
        { label: 'Keywords', cells: {} },
        { label: 'Repeats per question and engine', cells: {} },
        { label: 'Measurements', cells: {} },
        { label: 'Languages', cells: {} },
        { label: 'Questions created automatically from your website', cells: {} },
        { label: 'Comparison with the ChatGPT app', cells: {} },
      ],
    },
    {
      title: 'Dashboard',
      description: 'The pages where you read the results.',
      rows: [
        { label: 'Summary with verdict and SCOVO score', cells: {} },
        { label: 'What to do: actions in order of priority', cells: {} },
        { label: 'Keywords and hashtags', cells: {} },
        { label: 'LinkedIn: who gets cited and what to write', cells: {} },
        { label: 'Details: stages, competitors, sources', cells: {} },
        { label: 'How we measure', cells: {} },
      ],
    },
    {
      title: 'Actions',
      description: 'Who can take care of each recommended action.',
      rows: [
        { label: 'Do it yourself', cells: {} },
        { label: 'Pass to your web developer', cells: {} },
        { label: 'We can do it for you', cells: {} },
      ],
    },
    {
      title: 'Report',
      description: 'What you receive after each measurement.',
      rows: [
        { label: 'Email with the verdict and the first action', cells: {} },
        { label: 'One-page PDF', cells: {} },
        { label: 'Before and after between two measurements', cells: {} },
      ],
    },
    {
      title: 'Support',
      description: 'Who you can write to.',
      rows: [
        { label: 'Account manager in Italy', cells: {} },
        { label: 'Email', cells: {} },
      ],
    },
  ],
};

export default normalizePlans(plans);
