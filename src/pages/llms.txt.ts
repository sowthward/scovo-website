import type { APIRoute } from 'astro';
import { site, publishedPages, getPage, socials, isPublished, href } from '../lib/pages';

// A plain summary for AI engines. Hidden pages are left out.
export const GET: APIRoute = () => {
  const home = getPage('home') as any;
  const legal = ['privacy', 'cookie'];
  const main = publishedPages().filter((p) => !legal.includes(p.key));
  const who = home?.whoFor;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    ...(home?.llms ?? []),
    '',
    ...(who
      ? [
          `## ${who.title}`,
          '',
          who.intro,
          '',
          `${who.fitTitle}:`,
          ...who.fit.map((f: any) => `- ${f.text}`),
          '',
          `${who.sectorsTitle}:`,
          ...who.cards.map((c: any) => {
            const url = isPublished(c.page) ? `${site.domain}${href(c.page)}` : `${site.domain}/#${who.id}`;
            return `- [${c.title}](${url}): ${c.angle} ${who.questionLabel} "${c.question}"`;
          }),
          '',
        ]
      : []),
    '## Pages',
    '',
    ...main.map((p) => `- [${p.navLabel}](${site.domain}/${p.slug}): ${p.meta.description}`),
    '',
    '## Contact',
    '',
    `- Email: ${site.email}`,
    '',
    `## ${site.labels.channels}`,
    '',
    ...socials.map((s) => `- ${s.name}: ${s.url}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
