// 27 Nov 2026: the 14-day trial is an entry offer, not what SCOVO is.
// - No published page (or llms.txt) may mention the trial. Hidden pages are excluded: the pricing page carries the trial block.
// - Every call to action reads the `ctaLabel` content value ("Richiedi una demo" / "Book a demo").
// - The descriptor is on the homepage (hero label, title, og:title, meta description, JSON-LD), in the footer and in llms.txt.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { walk, visibleText, isHiddenPage } from '../integrations/dist-checks.mjs';

const TRIAL = /14 giorni|14 days|14-day|\bprova\b|\btrial\b|carta di credito|credit card/gi;
const LOCALES = {
  it: { descriptor: "Visibilità sull'AI per imprenditori di PMI B2B", cta: 'Richiedi una demo', audience: 'Imprenditori di PMI B2B', subject: 'Richiesta demo SCOVO' },
  en: { descriptor: 'AI Visibility for B2B SME Leaders', cta: 'Book a demo', audience: 'B2B SME leaders', subject: 'SCOVO demo request' },
};
const builds = {};

before(() => {
  for (const loc of Object.keys(LOCALES)) {
    const out = mkdtempSync(join(tmpdir(), `scovo-${loc}-`));
    const res = spawnSync('npx', ['astro', 'build', '--outDir', out], {
      env: { ...process.env, SITE_LOCALE: loc, ASTRO_TELEMETRY_DISABLED: '1', CF_PAGES_BRANCH: '', SCOVO_PRODUCTION: '' },
      encoding: 'utf8',
    });
    assert.equal(res.status, 0, res.stdout + res.stderr);
    builds[loc] = out;
  }
});
after(() => Object.values(builds).forEach((d) => rmSync(d, { recursive: true, force: true })));

const decode = (s) => s.replace(/&#39;|&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
const published = (dir) =>
  walk(dir)
    .filter((f) => f.endsWith('.html'))
    .map((f) => ({ file: relative(dir, f), html: readFileSync(f, 'utf8') }))
    .filter((p) => !isHiddenPage(p.html));

for (const [loc, want] of Object.entries(LOCALES)) {
  test(`${loc}: no published page or llms.txt mentions the trial`, () => {
    const dir = builds[loc];
    const hits = [];
    for (const p of published(dir)) {
      for (const m of visibleText(p.html).matchAll(TRIAL)) hits.push(`${p.file}: "${m[0]}"`);
    }
    for (const m of readFileSync(join(dir, 'llms.txt'), 'utf8').matchAll(TRIAL)) hits.push(`llms.txt: "${m[0]}"`);
    assert.deepEqual(hits, [], 'pages that still mention the trial');
  });

  test(`${loc}: every call to action reads "${want.cta}" and points to the form`, () => {
    for (const p of published(builds[loc])) {
      const orange = [...p.html.matchAll(/<(a|button)[^>]*class="[^"]*bg-orange[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)];
      for (const [, , inner] of orange) assert.equal(decode(inner.replace(/<[^>]+>/g, '').trim()), want.cta, p.file);
      assert.doesNotMatch(p.html, /href="\/?#prova"/, `${p.file} still links to #prova`);
    }
    const home = readFileSync(join(builds[loc], 'index.html'), 'utf8');
    assert.match(home, /<span id="prova" aria-hidden="true"[^>]*><\/span>\s*<section id="demo"/, 'an empty #prova target sits just before the form');
  });

  test(`${loc}: the descriptor is in the hero, title, meta, JSON-LD, footer and llms.txt`, () => {
    const home = decode(readFileSync(join(builds[loc], 'index.html'), 'utf8'));
    const d = want.descriptor;
    assert.ok(home.includes(`<title>SCOVO · ${d}</title>`), 'title');
    assert.ok(home.includes(`<meta property="og:title" content="SCOVO · ${d}">`), 'og:title');
    const desc = home.match(/<meta name="description" content="([^"]*)"/)[1];
    assert.ok(desc.toLowerCase().startsWith(d.toLowerCase()), `meta description starts with the descriptor: ${desc}`);
    assert.ok(desc.length < 160, `meta description is ${desc.length} characters`);
    assert.equal(home.match(/<meta property="og:description" content="([^"]*)"/)[1], desc);
    // Hero label sits just above the H1.
    assert.match(home, new RegExp(`uppercase[^>]*>${d}</p>\\s*<h1`), 'hero label above the H1');
    // Footer
    const footer = home.slice(home.indexOf('<footer'));
    assert.ok(footer.includes(`>${d}</p>`), 'footer line');
    // JSON-LD
    const ld = JSON.parse(home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const app = ld['@graph'].find((n) => n['@type'] === 'SoftwareApplication');
    assert.ok(app.description.startsWith(d), 'SoftwareApplication description');
    assert.equal(app.applicationSubCategory, 'AI visibility tracking');
    assert.match(app.keywords, /GEO, Generative Engine Optimization/);
    assert.deepEqual(app.audience, { '@type': 'BusinessAudience', audienceType: want.audience });
    // llms.txt: first line after the title
    const llms = readFileSync(join(builds[loc], 'llms.txt'), 'utf8').split('\n');
    assert.equal(llms[0], '# SCOVO');
    assert.ok(llms[2].toLowerCase().startsWith(`scovo: ${d.toLowerCase()}`), llms[2]);
  });

  test(`${loc}: "GEO" is never a headline or a button`, () => {
    for (const p of published(builds[loc])) {
      for (const [, , inner] of p.html.matchAll(/<(h[1-6]|button)[^>]*>([\s\S]*?)<\/\1>/g)) {
        assert.doesNotMatch(inner.replace(/<[^>]+>/g, ''), /\bGEO\b/, p.file);
      }
    }
    const measure = decode(readFileSync(join(builds[loc], loc === 'it' ? 'come-misuriamo.html' : 'how-we-measure.html'), 'utf8'));
    assert.match(measure, /<dt[^>]*>GEO \(Generative Engine Optimization\)<\/dt>/, 'glossary entry');
  });
}

test('the hidden pricing page shows three plans and the trial as its own block', () => {
  const html = readFileSync(join(builds.it, 'prezzi.html'), 'utf8');
  assert.ok(isHiddenPage(html));
  const cards = html.slice(html.indexOf('data-pricing'), html.indexOf('id="prova-14-giorni"'));
  assert.equal((cards.match(/<h3 class="h3">/g) ?? []).length, 3, 'three plan cards');
  assert.doesNotMatch(cards, />Prova</, 'no Prova plan card');
  assert.match(html, /id="prova-14-giorni"[\s\S]*Prova SCOVO per 14 giorni[\s\S]*Su quale piano si attiva la prova:/);
  const features = readFileSync(join(builds.it, 'funzionalita.html'), 'utf8');
  assert.equal((features.match(/<th scope="col" data-col=/g) ?? []).length, 3, 'three plan columns');
  assert.match(features, /href="\/prezzi#prova-14-giorni"/, 'link to the trial block');
});
