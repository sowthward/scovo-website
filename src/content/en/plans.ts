import type { PlansContent } from '../types';
import { normalizePlans } from '../../lib/plans';

// ONE file for plan names, prices and limits. The pricing page and the features page both read it,
// so a value is typed once and can never differ between the two pages.
//
// Everything marked 'TBC' is unconfirmed. Plan names and the number of plans are placeholders too.
// To add, remove or rename a plan, edit the `plans` list. A cell you leave out is shown as "to be confirmed".
// A page that still contains a TBC cannot be published: the build fails.
// Keep this file in step with src/content/it/plans.ts.

const T = 'TBC';

const plans: PlansContent = {
  currency: '€',
  perMonth: '/month',
  vat: '+ VAT',
  popularLabel: 'Most chosen',
  billing: { label: 'Billing', monthly: 'Monthly', annual: 'Annual' },
  planLabel: 'Plan',
  featureLabel: 'Feature',

  plans: [
    {
      key: 'prova',
      name: 'Trial',
      trial: true,
      priceText: 'Free, 14 days',
      forWhom: 'To see how AI sees you',
      button: 'Request the trial',
      includes: ['2 measurements', '4 AI engines', '12 questions', '8 keywords', '1 language', 'No credit card'],
    },
    { key: 'basic', name: 'Basic', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'professional', name: 'Professional', price: T, forWhom: T, button: T, popular: false, includes: [T] },
    { key: 'agency', name: 'Agency', price: T, forWhom: T, button: T, popular: false, includes: [T] },
  ],

  includesTable: {
    title: 'What each plan includes',
    lead: 'The quantities in each plan, side by side.',
    rows: [
      { label: 'AI engines', cells: { prova: '4' } },
      { label: 'Questions monitored', cells: { prova: '12' } },
      { label: 'Keywords', cells: { prova: '8' } },
      { label: 'How often we measure', cells: { prova: '2 measurements in 14 days' } },
      { label: 'Repeats per question', cells: { prova: '3' } },
      { label: 'Languages', cells: { prova: '1' } },
      { label: 'Comparison with the ChatGPT app', cells: { prova: 'sample' } },
    ],
  },

  // Do not add rows for anything that is not in the product. Engine names are plain text, no logos.
  featureGroups: [
    {
      title: 'AI engines',
      description: 'The engines we put the questions to.',
      rows: [
        { label: 'ChatGPT', cells: { prova: true } },
        { label: 'Gemini', cells: { prova: true } },
        { label: 'Perplexity', cells: { prova: true } },
        { label: 'Claude', cells: { prova: true } },
        { label: 'Microsoft Copilot', cells: { prova: 'not measured yet' } },
      ],
    },
    {
      title: 'Measurement',
      description: 'How much we measure and how often.',
      rows: [
        { label: "Your customers' questions", cells: { prova: '12' } },
        { label: 'Keywords', cells: { prova: '8' } },
        { label: 'Repeats per question and engine', cells: { prova: '3' } },
        { label: 'Measurements', cells: { prova: '2 in 14 days' } },
        { label: 'Languages', cells: { prova: '1' } },
        { label: 'Questions created automatically from your website', cells: { prova: true } },
        { label: 'Comparison with the ChatGPT app', cells: { prova: 'sample' } },
      ],
    },
    {
      title: 'Dashboard',
      description: 'The pages where you read the results.',
      rows: [
        { label: 'Summary with verdict and SCOVO score', cells: { prova: true } },
        { label: 'What to do: actions in order of priority', cells: { prova: true } },
        { label: 'Keywords and hashtags', cells: { prova: true } },
        { label: 'LinkedIn: who gets cited and what to write', cells: { prova: true } },
        { label: 'Details: stages, competitors, sources', cells: { prova: true } },
        { label: 'How we measure', cells: { prova: true } },
      ],
    },
    {
      title: 'Actions',
      description: 'Who can take care of each recommended action.',
      rows: [
        { label: 'Do it yourself', cells: { prova: true } },
        { label: 'Pass to your web developer', cells: { prova: true } },
        { label: 'ctrlpost can do it', cells: { prova: T } },
      ],
    },
    {
      title: 'Report',
      description: 'What you receive after each measurement.',
      rows: [
        { label: 'Email with the verdict and the first action', cells: { prova: true } },
        { label: 'One-page PDF', cells: { prova: true } },
        { label: 'Before and after between two measurements', cells: { prova: true } },
      ],
    },
    {
      title: 'Support',
      description: 'Who you can write to.',
      rows: [
        { label: 'Italian account lead', cells: { prova: T } },
        { label: 'Email', cells: { prova: T } },
      ],
    },
  ],
};

export default normalizePlans(plans);
