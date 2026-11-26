import type { Locale, PageBase, SiteContent, NavItem } from '../content/types';
import { assertNoTbc } from './tbc';

export const locale: Locale = __LOCALE__;

const pageModules = import.meta.glob<{ default: PageBase }>('../content/*/pages/*.ts', { eager: true });
const siteModules = import.meta.glob<{ default: SiteContent }>('../content/*/site.ts', { eager: true });

const forced = __FORCE_PUBLISH__.split(',').map((s) => s.trim()).filter(Boolean);

function load(loc: Locale): PageBase[] {
  return Object.entries(pageModules)
    .filter(([path]) => path.includes(`/content/${loc}/pages/`))
    .map(([, mod]) => (forced.includes(mod.default.key) ? { ...mod.default, published: true } : mod.default));
}

const siteModule = siteModules[`../content/${locale}/site.ts`];
if (!siteModule) throw new Error(`No content found for locale "${locale}" (src/content/${locale}/site.ts).`);

export const site: SiteContent = siteModule.default;
export const pages: PageBase[] = load(locale);
const otherPages: PageBase[] = load(site.otherLocale);

// The TBC guard runs for every build, on every page.
pages.forEach(assertNoTbc);

export const getPage = <T extends PageBase = PageBase>(key: string): T | undefined =>
  pages.find((p) => p.key === key) as T | undefined;

export const isPublished = (key: string): boolean => getPage(key)?.published === true;

export const href = (key: string): string => {
  const p = getPage(key);
  return p ? `/${p.slug}` : '/';
};

export const publishedPages = (): PageBase[] =>
  pages.filter((p) => p.published).sort((a, b) => (a.key === 'home' ? -1 : b.key === 'home' ? 1 : a.slug.localeCompare(b.slug)));

export const groupPages = (group: string): PageBase[] => pages.filter((p) => p.group === group && p.published);

export const absolute = (path: string): string => site.domain + (path === '/' ? '/' : path);

/** Address of the same page on the other domain. Falls back to that domain's homepage. */
export function otherLocaleUrl(key?: string): { url: string; exact: boolean } {
  // `exact` (used for hreflang and the sitemap) is true only when the other page is published too.
  const match = key ? otherPages.find((p) => p.key === key) : undefined;
  if (match) return { url: `${site.otherDomain}/${match.slug}`, exact: match.published };
  return { url: `${site.otherDomain}/`, exact: key === 'home' && otherPages.some((p) => p.key === 'home') };
}

export interface ResolvedNav {
  label: string;
  href?: string;
  external?: boolean;
  children?: { label: string; href: string }[];
}

/** Turns content nav items into links. Items whose page is hidden are dropped. */
export function resolveNav(items: NavItem[]): ResolvedNav[] {
  const out: ResolvedNav[] = [];
  for (const item of items) {
    if (item.group) {
      const children = groupPages(item.group).map((p) => ({ label: p.navLabel, href: `/${p.slug}` }));
      if (children.length) out.push({ label: item.label, children });
    } else if (item.page) {
      if (isPublished(item.page)) out.push({ label: item.label, href: href(item.page) + (item.anchor ?? '') });
      else if (item.fallback) out.push({ label: item.label, href: `/${item.fallback}` });
    } else if (item.anchor) {
      out.push({ label: item.label, href: `/${item.anchor}` });
    } else if (item.href) {
      out.push({ label: item.label, href: item.href, external: /^https?:/.test(item.href) });
    }
  }
  return out;
}

// Sample data for the product views (one file per locale).
import type { SampleContent } from '../content/types';
const sampleModules = import.meta.glob<{ default: SampleContent }>('../content/*/sample.ts', { eager: true });
export const sample: SampleContent = sampleModules[`../content/${locale}/sample.ts`]?.default as SampleContent;

// The Italian contact card (shared by both locales, with a locale-specific role).
const peopleModules = import.meta.glob<{ default: { name: string; initials: string; role: string; email: string; photo: string } }>('../content/*/people.ts', { eager: true });
export const person = peopleModules[`../content/${locale}/people.ts`]?.default;

// Social channels: one file for both sites (src/data/social.json). Add a channel there, not in components.
import socialData from '../data/social.json';
export interface Social { id: string; name: string; icon: string; url: string; label: string }
export const socials: Social[] = socialData.map((s) => ({ ...s, label: s.label[locale] }));
