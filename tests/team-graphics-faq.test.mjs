// 27 Nov 2026 (b): team, address, score gauge and share-of-voice donut, funnel, four steps, FAQ.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { walk, visibleText, isHiddenPage } from '../integrations/dist-checks.mjs';

const L = {
  it: { domain: 'https://loscovo.it', location: 'Milano, Italia', about: 'chi-siamo', contact: 'contatti', measure: 'come-misuriamo', stages: ['Scoperta', 'Considerazione', 'Valutazione', 'Decisione'], marks: '1 di 4', next: 'Livello successivo', share: 'Quota di voce', faqTitle: 'Domande frequenti', pricing: 'prezzi', trialQ: "C'è una prova gratuita?", roleN: "Account Manager per l'Italia" },
  en: { domain: 'https://scovo.io', location: 'Milan, Italy', about: 'about', contact: 'contact', measure: 'how-we-measure', stages: ['Awareness', 'Consideration', 'Evaluation', 'Decision'], marks: '1 of 4', next: 'Next level', share: 'Share of voice', faqTitle: 'Frequently asked questions', pricing: 'pricing', trialQ: 'Is there a free trial', roleN: 'Account Manager, Italy' },
};
const out = {};
before(() => {
  for (const loc of Object.keys(L)) {
    out[loc] = mkdtempSync(join(tmpdir(), `scovo-b-${loc}-`));
    const res = spawnSync('npx', ['astro', 'build', '--outDir', out[loc]], { env: { ...process.env, SITE_LOCALE: loc, ASTRO_TELEMETRY_DISABLED: '1', CF_PAGES_BRANCH: '', SCOVO_PRODUCTION: '' }, encoding: 'utf8' });
    assert.equal(res.status, 0, res.stdout + res.stderr);
  }
});
after(() => Object.values(out).forEach((d) => rmSync(d, { recursive: true, force: true })));

const read = (loc, f) => readFileSync(join(out[loc], f), 'utf8').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const ld = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const section = (html, id) => { const i = html.indexOf(`id="${id}"`); assert.ok(i > 0, `section #${id}`); return html.slice(i, html.indexOf('</section>', i)); };

for (const [loc, w] of Object.entries(L)) {
  test(`${loc}: JSON-LD has both people, the founder and the city, but not the street yet`, () => {
    const g = ld(read(loc, 'index.html'));
    const org = g.find((n) => n['@type'] === 'Organization');
    assert.equal(org.founder['@id'], `${w.domain}/#david-wadsworth`);
    assert.deepEqual(org.address, { '@type': 'PostalAddress', addressLocality: 'Milano', addressCountry: 'IT' });
    const people = g.filter((n) => n['@type'] === 'Person');
    assert.deepEqual(people.map((p) => p['@id']), [`${w.domain}/#david-wadsworth`, `${w.domain}/#nicoletta-fava`]);
    const [d, n] = people;
    assert.equal(d.email, 'david@scovo.io');
    assert.equal(d.image, `${w.domain}/team/david-wadsworth.jpg`);
    assert.deepEqual(d.sameAs, ['https://www.linkedin.com/in/david-wadsworth-8102801a']);
    assert.deepEqual(d.worksFor, { '@id': org['@id'] });
    assert.equal(n.jobTitle, w.roleN);
    assert.deepEqual(n.sameAs, ['https://www.linkedin.com/in/nicoletta-maria-fava/']);
  });

  test(`${loc}: "${w.location}" shows in the footer and on the contact page; the street does not show anywhere`, () => {
    const home = read(loc, 'index.html');
    assert.ok(home.slice(home.indexOf('<footer')).includes(w.location));
    assert.ok(visibleText(read(loc, `${w.contact}.html`)).includes(w.location));
    for (const f of walk(out[loc]).filter((f) => f.endsWith('.html'))) assert.doesNotMatch(readFileSync(f, 'utf8'), /San Michele del Carso|20144/, f);
  });

  test(`${loc}: Chi siamo and Contatti show both people with photo, role, email and LinkedIn`, () => {
    for (const page of [w.about, w.contact]) {
      const html = read(loc, `${page}.html`);
      for (const [id, email, li] of [['david-wadsworth', 'david@scovo.io', 'david-wadsworth-8102801a'], ['nicoletta-fava', 'nicoletta@loscovo.it', 'nicoletta-maria-fava']]) {
        assert.match(html, new RegExp(`<picture[^>]*><source srcset="/team/${id}.webp" type="image/webp"[^>]*><img src="/team/${id}.jpg" alt="[^"]+" width="96" height="96" loading="lazy"`), `${page}: photo ${id}`);
        assert.ok(html.includes(`mailto:${email}`), `${page}: ${email}`);
        assert.match(html, new RegExp(`href="https://www.linkedin.com/in/${li}/?" target="_blank" rel="noopener" aria-label="[^"]+"`), `${page}: LinkedIn ${id}`);
      }
      assert.ok(html.includes(w.roleN), `${page}: role`);
    }
    assert.match(read(loc, 'index.html'), /<img src="\/team\/david-wadsworth.jpg"[^>]*width="56" height="56" loading="lazy"/, 'homepage strip');
  });

  test(`${loc}: the gauge and the share-of-voice donut appear wherever the score is a product view`, () => {
    const home = read(loc, 'index.html');
    const hero = home.slice(home.indexOf('<main'), home.indexOf('</section>', home.indexOf('<main')));
    const cosaFa = section(home, 'cosa-fa');
    const measure = section(read(loc, `${w.measure}.html`), 'punteggio');
    for (const [name, html] of [['hero', hero], ['cosa-fa', cosaFa], ['measure', measure]]) {
      assert.ok(html.includes(w.next), `${name}: gauge`);
      assert.ok(html.includes(`<caption>${w.share}</caption>`), `${name}: donut table`);
    }
  });

  test(`${loc}: the funnel has four stages with the right names, two donuts each and an invented-data label`, () => {
    const f = section(read(loc, 'index.html'), 'funnel');
    const names = [...f.matchAll(/<div class="funnel-band[^"]*"[^>]*><h3[^>]*>([^<]+)<\/h3>/g)].map((m) => m[1]);
    assert.deepEqual(names, w.stages);
    assert.equal((f.match(/<figure/g) ?? []).length, 8, 'two donuts per stage');
    assert.equal((f.match(/<span class="sr-only">/g) ?? []).length, 8, 'a text alternative per donut');
  });

  test(`${loc}: the four-steps band shows no percentage, score or gain`, () => {
    const p = section(read(loc, 'index.html'), 'percorso');
    const text = visibleText(`<body>${p.replace(/<style[\s\S]*?<\/style>/g, '')}</body>`);
    assert.ok(text.includes(w.marks));
    assert.doesNotMatch(text, /%|\+\s?\d|\bpunti\b|\bpoints\b/);
  });

  test(`${loc}: the homepage FAQ has 8 questions with matching FAQPage JSON-LD, and no trial`, () => {
    const home = read(loc, 'index.html');
    const f = section(home, 'faq');
    const qs = [...f.matchAll(/<details[^>]*>\s*<summary[^>]*>\s*<h3[^>]*>([^<]+)<\/h3>/g)].map((m) => m[1]);
    assert.equal(qs.length, 8);
    const faqLd = ld(home).find((n) => n['@type'] === 'FAQPage');
    assert.deepEqual(faqLd.mainEntity.map((q) => q.name), qs);
    assert.ok(!home.includes(w.trialQ), 'trial question not on the homepage');
    const pricing = read(loc, `${w.pricing}.html`);
    assert.ok(isHiddenPage(pricing) && pricing.includes(w.trialQ), 'trial question on the hidden pricing page');
  });
}

test('en: no "Discovery" stage left on the English site', () => {
  for (const f of walk(out.en).filter((f) => f.endsWith('.html') || f.endsWith('.txt'))) assert.doesNotMatch(readFileSync(f, 'utf8'), /Discovery/, f);
});
