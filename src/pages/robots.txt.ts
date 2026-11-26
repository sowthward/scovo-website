import type { APIRoute } from 'astro';
import { site } from '../lib/pages';

// SCOVO sells AI visibility, so AI crawlers are allowed by name.
// Cloudflare must not override this file: see DEPLOY.md, "AI crawlers".
const aiCrawlers = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bingbot',
];

export const GET: APIRoute = () => {
  const body = [
    '# SCOVO. This file is served from the repository.',
    'User-agent: *',
    'Allow: /',
    '',
    ...aiCrawlers.flatMap((ua) => [`User-agent: ${ua}`, 'Allow: /', '']),
    `Sitemap: ${site.domain}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
