// Checks on the finished build. They run at the end of every `astro build`, so a failing check fails the build.
//
// 1. No built file may contain "ctrlpost" (case-insensitive). SCOVO stands alone on the site (decision of 26 Nov 2026).
//    Repository documents (README, TODO, REVIEW, DEPLOY) are not part of the build and may still mention it.
// 2. Production builds only: a published page may not show "TODO" or "TBC" anywhere in its text.
//    Preview builds keep showing them (as grey chips and boxes) so work in progress can be reviewed.
//
// A build is a production build when Cloudflare builds the production branch (CF_PAGES_BRANCH=main),
// or when SCOVO_PRODUCTION=1 is set, which is how to try it locally.
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PRODUCTION_BRANCH = 'main';
const BINARY = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.ico', '.woff', '.woff2', '.ttf', '.otf', '.pdf', '.mp4']);
const MARKER = /\b(TODO|TBC)\b/g;

export const isProductionBuild = (env = process.env) =>
  env.CF_PAGES_BRANCH === PRODUCTION_BRANCH || env.SCOVO_PRODUCTION === '1';

export function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)],
  );
}

const decode = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");

/** The text a visitor or a search engine sees: title, meta descriptions and the body text. */
export function visibleText(html) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) ?? [, ''])[1];
  const metas = [...html.matchAll(/<meta[^>]+(?:name|property)="(?:description|og:description|og:title)"[^>]*content="([^"]*)"/gi)].map((m) => m[1]);
  const body = (html.match(/<body[\s\S]*<\/body>/i) ?? [''])[0]
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  return decode([title, ...metas, body].join(' ')).replace(/\s+/g, ' ');
}

export const isHiddenPage = (html) => /<meta name="robots" content="[^"]*noindex/i.test(html);

/** Every built text file that mentions ctrlpost. */
export function findCtrlpost(dir) {
  return walk(dir)
    .filter((f) => !BINARY.has(extname(f).toLowerCase()))
    .filter((f) => /ctrlpost/i.test(readFileSync(f, 'utf8')))
    .map((f) => relative(dir, f));
}

/** Published pages (and llms.txt) that still show TODO or TBC, with a short excerpt of each. */
export function findMarkersOnPublished(dir) {
  const out = [];
  for (const f of walk(dir)) {
    const ext = extname(f).toLowerCase();
    let text;
    if (ext === '.html') {
      const html = readFileSync(f, 'utf8');
      if (isHiddenPage(html)) continue;
      text = visibleText(html);
    } else if (f.endsWith('llms.txt')) {
      text = readFileSync(f, 'utf8');
    } else continue;
    const hits = [...text.matchAll(MARKER)].map((m) => text.slice(Math.max(0, m.index - 30), m.index + 60).trim());
    if (hits.length) out.push({ file: relative(dir, f), hits });
  }
  return out;
}

export function runChecks(dir, env = process.env) {
  const errors = [];
  const ctrl = findCtrlpost(dir);
  if (ctrl.length) {
    errors.push(`"ctrlpost" found in the built site. SCOVO stands alone on the site. Files:\n  - ${ctrl.join('\n  - ')}`);
  }
  if (isProductionBuild(env)) {
    const marked = findMarkersOnPublished(dir);
    if (marked.length) {
      errors.push(
        `Production build: published pages still show TODO or TBC. Fill in the content, or hide the page (published: false).\n` +
          marked.map((m) => `  - ${m.file}\n      ${m.hits.slice(0, 3).map((h) => `"…${h}…"`).join('\n      ')}`).join('\n'),
      );
    }
  }
  return errors;
}

export default function distChecks() {
  return {
    name: 'scovo-dist-checks',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const errors = runChecks(root);
        if (errors.length) throw new Error(`\n${errors.join('\n\n')}\n`);
        logger.info(isProductionBuild() ? 'Production checks passed: no ctrlpost, no TODO or TBC on published pages.' : 'Checks passed: no ctrlpost. (TODO and TBC are checked on production builds only.)');
      },
    },
  };
}
