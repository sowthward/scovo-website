import type { PageBase } from '../../types';
import plans from '../plans';

// Hidden until every TBC in ../plans.ts is replaced. Then set published: true.
const page = {
  key: 'features',
  slug: 'features',
  view: 'Features',
  published: false,
  navLabel: 'Features',
  meta: { title: 'Features | SCOVO', description: 'What each SCOVO plan includes, line by line: AI engines, measurement, dashboard, actions, report and support.' },
  h1: 'Features',
  lead: 'What each plan includes, line by line.',
  tableCaption: 'Feature comparison by plan',
  choosePlan: 'Choose the plan to view',
  // Plan names, prices and limits: one shared file.
  plans,
} satisfies PageBase;

export default page;
