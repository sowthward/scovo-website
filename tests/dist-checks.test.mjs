// Tests for the checks that run at the end of every build (integrations/dist-checks.mjs).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runChecks, isProductionBuild, visibleText, findCtrlpost, walk } from '../integrations/dist-checks.mjs';

const page = (body, { hidden = false, title = 'SCOVO' } = {}) =>
  `<!doctype html><html><head><title>${title}</title>${hidden ? '<meta name="robots" content="noindex, nofollow">' : ''}</head><body>${body}</body></html>`;

const fakeDist = (files) => {
  const dir = mkdtempSync(join(tmpdir(), 'scovo-dist-'));
  for (const [name, content] of Object.entries(files)) {
    mkdirSync(join(dir, name, '..'), { recursive: true });
    writeFileSync(join(dir, name), content);
  }
  return dir;
};

const build = (env, locale = 'it') => {
  const out = mkdtempSync(join(tmpdir(), 'scovo-build-'));
  const res = spawnSync('npx', ['astro', 'build', '--outDir', out], {
    env: { ...process.env, SITE_LOCALE: locale, ASTRO_TELEMETRY_DISABLED: '1', CF_PAGES_BRANCH: '', SCOVO_PRODUCTION: '', ...env },
    encoding: 'utf8',
  });
  return { status: res.status, output: res.stdout + res.stderr, out };
};

test('a production build is the Cloudflare main branch, or SCOVO_PRODUCTION=1', () => {
  assert.equal(isProductionBuild({ CF_PAGES_BRANCH: 'main' }), true);
  assert.equal(isProductionBuild({ CF_PAGES_BRANCH: 'site-updates-2026-11-26' }), false);
  assert.equal(isProductionBuild({ SCOVO_PRODUCTION: '1' }), true);
  assert.equal(isProductionBuild({}), false);
});

test('visible text leaves out scripts and tags but keeps the title and meta description', () => {
  const text = visibleText('<html><head><title>T TODO</title><meta name="description" content="D"></head><body><p>A</p><script>var TODO=1</script></body></html>');
  assert.match(text, /T TODO/);
  assert.match(text, /\bD\b/);
  assert.match(text, /\bA\b/);
  assert.doesNotMatch(text, /var TODO/);
});

test('a TODO on a published page fails a production build only', () => {
  const dir = fakeDist({ 'privacy.html': page('<p>TODO: testo legale</p>') });
  assert.equal(runChecks(dir, {}).length, 0, 'preview builds keep showing TODO');
  const errors = runChecks(dir, { CF_PAGES_BRANCH: 'main' });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /privacy\.html/);
  rmSync(dir, { recursive: true, force: true });
});

test('a TBC in the text of a published page fails a production build', () => {
  const dir = fakeDist({ 'index.html': page('<span>Prezzo TBC</span>') });
  assert.equal(runChecks(dir, { CF_PAGES_BRANCH: 'main' }).length, 1);
  rmSync(dir, { recursive: true, force: true });
});

test('hidden pages may keep TODO and TBC in a production build', () => {
  const dir = fakeDist({ 'prezzi.html': page('<span>TBC</span> TODO', { hidden: true }) });
  assert.equal(runChecks(dir, { CF_PAGES_BRANCH: 'main' }).length, 0);
  rmSync(dir, { recursive: true, force: true });
});

test('words that only contain the letters are not flagged', () => {
  const dir = fakeDist({ 'index.html': page('<p>Tutto pronto. TODOS, TBCs and data-todo attributes are fine.</p><span data-todo="photo">N</span>') });
  assert.equal(runChecks(dir, { CF_PAGES_BRANCH: 'main' }).length, 0);
  rmSync(dir, { recursive: true, force: true });
});

test('"ctrlpost" in any built text file fails every build, in any letter case', () => {
  const dir = fakeDist({ 'index.html': page('<p>SCOVO</p>'), 'llms.txt': '# SCOVO\nA CtrlPost product', '_astro/a.js': 'x', 'og.png': 'ctrlpost' });
  assert.deepEqual(findCtrlpost(dir), ['llms.txt']);
  assert.equal(runChecks(dir, {}).length, 1, 'fails preview builds too');
  rmSync(dir, { recursive: true, force: true });
});

for (const locale of ['it', 'en']) {
  test(`the ${locale} preview build passes and no built file mentions ctrlpost`, () => {
    const res = build({}, locale);
    assert.equal(res.status, 0, res.output);
    const hits = walk(res.out).filter((f) => !/\.(png|woff2?)$/.test(f) && /ctrlpost/i.test(readFileSync(f, 'utf8')));
    assert.deepEqual(hits, []);
    rmSync(res.out, { recursive: true, force: true });
  });
}

test('the production build fails today, naming the Privacy and Cookie pages and nothing else', () => {
  const res = build({ CF_PAGES_BRANCH: 'main' });
  assert.notEqual(res.status, 0);
  assert.match(res.output, /published pages still show TODO or TBC/);
  const files = [...res.output.matchAll(/^\s+- (\S+\.html)$/gm)].map((m) => m[1]).sort();
  assert.deepEqual(files, ['cookie.html', 'privacy.html']);
  rmSync(res.out, { recursive: true, force: true });
});
