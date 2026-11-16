import type { APIRoute } from 'astro';
import { site, publishedPages, getPage } from '../lib/pages';

// A plain summary for AI engines. Hidden pages are left out.
export const GET: APIRoute = () => {
  const home = getPage('home') as any;
  const legal = ['privacy', 'cookie'];
  const main = publishedPages().filter((p) => !legal.includes(p.key));
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.parentLine}. ${site.description}`,
    '',
    ...(home?.llms ?? []),
    '',
    '## Pages',
    '',
    ...main.map((p) => `- [${p.navLabel}](${site.domain}/${p.slug}): ${p.meta.description}`),
    '',
    '## Contact',
    '',
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.linkedin}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
