// Types for the content files. Copy lives in src/content/<locale>/, never in components.

export type Locale = 'it' | 'en';

/** A value that may still be unconfirmed. The literal string 'TBC' renders as a grey chip on hidden pages. */
export type Tbc<T> = T | 'TBC';

export interface Meta {
  title: string;
  description: string;
}

/** Every page file exports one of these. Extra fields are page-specific. */
export interface PageBase {
  /** Stable key shared by both locales, e.g. 'pricing'. */
  key: string;
  /** Address without leading slash. '' is the homepage. */
  slug: string;
  /** Name of the file in src/views (without .astro). */
  view: string;
  /**
   * false = hidden: still built and reachable by address, carries noindex,
   * left out of the menu, footer, sitemap and llms.txt.
   */
  published: boolean;
  /** Optional group, used for the Settori dropdown. */
  group?: 'sectors';
  /** Short label for menus and breadcrumbs. */
  navLabel: string;
  meta: Meta;
  [extra: string]: unknown;
}

export interface NavItem {
  label: string;
  /** Page key. The item is shown only when that page is published. */
  page?: string;
  /** Anchor on the homepage, e.g. '#cosa-fa'. */
  anchor?: string;
  /** Dropdown listing every published page of this group. */
  group?: 'sectors';
  /** External or mailto link. */
  href?: string;
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}

export interface FormContent {
  title: string;
  lead: string;
  fields: {
    name: string;
    company: string;
    website: string;
    websiteHint: string;
    email: string;
    source: string;
    sourcePlaceholder: string;
    sourceOptions: string[];
    message: string;
    optional: string;
  };
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
  submit: string;
  sending: string;
  reassurance: string;
  success: string;
  error: string;
  invalid: string;
}

export interface SiteContent {
  locale: Locale;
  domain: string;
  otherDomain: string;
  otherLocale: Locale;
  name: string;
  /** "SCOVO, un prodotto ctrlpost" */
  parentLine: string;
  /** "un prodotto ctrlpost" (shown under the wordmark) */
  parentTag: string;
  description: string;
  email: string;
  linkedin: string;
  cta: string;
  nav: NavItem[];
  footer: {
    columns: FooterColumn[];
    legal: NavItem[];
    contactLabel: string;
    /** TODO until the registered name, address and P.IVA are supplied. */
    companyDetails: string;
    copyright: string;
  };
  labels: {
    skip: string;
    menu: string;
    close: string;
    language: string;
    languageNames: Record<Locale, string>;
    tbc: string;
    todo: string;
    included: string;
    notIncluded: string;
    breadcrumb: string;
    home: string;
    hiddenNotice: string;
  };
  testimonials: {
    /** Empty at launch. Add real quotes only. See README. */
    items: { quote: string; name: string; role: string; company: string }[];
    title: string;
    emptyLine: string;
  };
  form: FormContent;
  notFound: { title: string; text: string; back: string };
}

export type ActionTag = 'diy' | 'dev' | 'ctrlpost';

/** Invented sample company used by every product view on the site. Do not change the figures. */
export interface SampleContent {
  disclaimer: string;
  company: string;
  city: string;
  score: number;
  max: number;
  band: string;
  drivers: { label: string; value: number; max: number }[];
  engines: { label: string; value: number | null }[];
  stages: { label: string; value: number }[];
  numbers: { label: string; value: string }[];
  keywords: { keyword: string; hashtag: string; score: number }[];
  actions: { tag: ActionTag; text: string }[];
  rivals: string[];
  tags: Record<ActionTag, string>;
  labels: {
    scoreName: string;
    outOf: string;
    summary: string;
    drivers: string;
    engines: string;
    stages: string;
    firstAction: string;
    actions: string;
    keywords: string;
    keyword: string;
    hashtag: string;
    score: string;
    rivals: string;
    notMeasured: string;
  };
}

/** A table cell: true = tick, false = dash (not included), a short value, or 'TBC'. */
export type Cell = boolean | string | number;

export interface Plan {
  /** Stable key, used for the cells in the tables below. */
  key: string;
  name: string;
  /** The trial card: shown first, on Scientific Blue. */
  trial?: boolean;
  /** Shown as written, for plans without a monthly price (the trial). */
  priceText?: string;
  /** Monthly price, a number without currency. 'TBC' until confirmed. */
  price?: Tbc<number>;
  /** Annual price per month. Leave out if there is no annual billing. The billing switch appears only if at least one plan has it. */
  priceAnnual?: Tbc<number>;
  forWhom: string;
  /** Button label. */
  button: string;
  /** Shows the small "most chosen" label. Off by default. */
  popular?: boolean;
  /** Short list on the plan card. */
  includes: string[];
}

export interface PlanRow {
  label: string;
  /** One cell per plan key. A missing cell is treated as 'TBC'. */
  cells: Record<string, Cell>;
}

export interface PlansContent {
  currency: string;
  perMonth: string;
  vat: string;
  popularLabel: string;
  billing: { label: string; monthly: string; annual: string };
  planLabel: string;
  featureLabel: string;
  plans: Plan[];
  /** "Cosa include ogni piano", under the cards on the pricing page. */
  includesTable: { title: string; lead: string; rows: PlanRow[] };
  /** The full comparison on the features page. */
  featureGroups: { title: string; description: string; rows: PlanRow[] }[];
}
