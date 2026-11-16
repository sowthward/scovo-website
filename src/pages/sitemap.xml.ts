import type { APIRoute } from 'astro';
import { site, publishedPages, otherLocaleUrl, locale } from '../lib/pages';

// One sitemap per locale. Hidden pages are left out.
export const GET: APIRoute = () => {
  const urls = publishedPages()
    .filter((p) => p.key !== 'styleguide')
    .map((p) => {
      const loc = `${site.domain}/${p.slug}`;
      const other = otherLocaleUrl(p.key);
      const alternates = other.exact
        ? `\n    <xhtml:link rel="alternate" hreflang="${locale}" href="${loc}"/>\n    <xhtml:link rel="alternate" hreflang="${site.otherLocale}" href="${other.url}"/>`
        : '';
      return `  <url>\n    <loc>${loc}</loc>${alternates}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
