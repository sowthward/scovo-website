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
  /** Anchor on the homepage used while `page` is hidden, e.g. '#per-chi-e'. */
  fallback?: string;
  /** External or mailto link. */
  href?: string;
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}

export interface FormContent {
  /** One line next to the form heading. The heading and the button use `ctaLabel`. */
  intro: string;
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
  sending: string;
  /** Short line under the button. */
  note: string;
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
  /** What SCOVO is, in one line. Used in the hero label, the footer, the homepage title, JSON-LD and llms.txt. */
  descriptor: string;
  description: string;
  email: string;
  /** Label of every call to action (header, hero, footer, form). Change it here only. */
  ctaLabel: string;
  /** Data for search engines and AI readers. */
  seo: {
    /** Comma-separated keywords for the SoftwareApplication JSON-LD. "GEO" appears only here and in the glossary. */
    keywords: string;
    audienceType: string;
    /** First line of llms.txt after the title. */
    llmsIntro: string;
  };
  nav: NavItem[];
  footer: {
    columns: FooterColumn[];
    /** Title of the last column, which holds the trial button and the email. */
    startTitle: string;
    legal: NavItem[];
    /**
     * Registered company. The location ("Milano, Italia") always shows.
     * The full line (name, street, VAT number) shows only when `showStreet` is true and name and vat are filled in.
     */
    company: {
      name: string;
      vat: string;
      address: { street: string; postcode: string; city: string; country: string };
      /** City as shown to visitors ("Milano" / "Milan"). JSON-LD always uses `address.city`. */
      cityLabel: string;
      /** Set to true together with the VAT number (P.IVA). */
      showStreet: boolean;
    };
    vatLabel: string;
    copyright: string;
    /** Accessible name of the list of social links. */
    socialLabel: string;
  };
  labels: {
    skip: string;
    /** Accessible name of the wordmark link in the header. */
    homeLink: string;
    /** Heading of the social channels list in llms.txt. */
    channels: string;
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
    /** Opening and closing quotation marks for buyer questions. */
    quotes: [string, string];
  };
  testimonials: {
    /** Empty at launch. Add real quotes only. See README. */
    items: { quote: string; name: string; role: string; company: string }[];
    title: string;
    /** Shown on the homepage while there are no quotes. */
    emptyLineHome: string;
    /** Shown on sector pages while there are no quotes. */
    emptyLineSector: string;
  };
  form: FormContent;
  notFound: { title: string; text: string; back: string };
}

export type ActionTag = 'diy' | 'dev' | 'us';

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
  /** Score bands of the gauge, 0 to 100. */
  bands: { label: string; from: number; to: number }[];
  /** Share of voice donut. Values add up to 100. The first item is "you" and is highlighted. */
  share: {
    title: string;
    centre: string;
    caption: string;
    items: { label: string; value: number; colour: 'orange' | 'blue' | 'purple' | 'green' | 'grey' }[];
  };
  /** Purchase funnel: one entry per stage. The four scores average to the sample score. */
  funnel: {
    name: string;
    buyer: string;
    prompts: string[];
    score: number;
    voice: number;
    action: { tag: ActionTag; text: string };
  }[];
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
    /** "Livello successivo" */
    nextLevel: string;
    /** Header of the band column in the hidden table */
    band: string;
    /** "Valore" */
    value: string;
    /** "Tu" / "Altri" in the stage donuts */
    you: string;
    others: string;
    /** Short label under the stage score donut */
    stageScore: string;
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
  /**
   * The 14-day trial: an entry offer, not a plan. Shown as one block under the plan cards on the pricing page only.
   * General pages do not mention it (tests/no-trial.test.mjs).
   */
  trialOffer: {
    /** Anchor of the block, linked from the features page. */
    id: string;
    title: string;
    items: string[];
    planLabel: string;
    /** Which plan the trial activates. 'TBC' until decided. */
    plan: Tbc<string>;
  };
  /** "Cosa include ogni piano", under the cards on the pricing page. */
  includesTable: { title: string; lead: string; rows: PlanRow[] };
  /** The full comparison on the features page. */
  featureGroups: { title: string; description: string; rows: PlanRow[] }[];
}

/** One person in src/content/<locale>/team.ts. */
export interface Person {
  /** Also the JSON-LD @id fragment and the photo file name in public/team/. */
  id: string;
  name: string;
  initials: string;
  role: string;
  email: string;
  linkedin: string;
  /** Path without extension: /team/<id>.webp and .jpg must both exist. Empty = initials. */
  photo: string;
  alt: string;
}

export interface TeamContent {
  /** id of the founder, used for Organization.founder in JSON-LD. */
  founder: string;
  /** "SCOVO nasce a Milano…" */
  line: string;
  /** Accessible name of each LinkedIn link; {name} is replaced. */
  linkedinLabel: string;
  people: Person[];
}

export interface FaqItem { q: string; a: string }
export interface FaqContent {
  title: string;
  /** Homepage FAQ. Also the FAQPage JSON-LD of the homepage. No trial here: see tests/no-trial.test.mjs. */
  home: FaqItem[];
  /** Questions that belong on the (hidden) pricing page only, such as the trial. */
  pricing: FaqItem[];
}
