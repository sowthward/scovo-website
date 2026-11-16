// Proves the TBC guard: a published page that still holds a TBC value fails the build.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { findTbc, assertNoTbc } from '../src/lib/tbc.ts';

const build = (env) => {
  const out = mkdtempSync(join(tmpdir(), 'scovo-build-'));
  const res = spawnSync('npx', ['astro', 'build', '--outDir', out], {
    env: { ...process.env, SITE_LOCALE: 'it', ASTRO_TELEMETRY_DISABLED: '1', ...env },
    encoding: 'utf8',
  });
  const built = existsSync(join(out, 'index.html'));
  rmSync(out, { recursive: true, force: true });
  return { status: res.status, output: res.stdout + res.stderr, built };
};

test('findTbc lists every TBC value with its path', () => {
  const found = findTbc({ a: 'ok', b: 'TBC', c: [{ d: 'TBC' }, 'TBC contains but is not the literal'], e: { f: true } });
  assert.deepEqual(found, ['b', 'c[0].d']);
});

test('a hidden page may hold TBC values', () => {
  assert.doesNotThrow(() => assertNoTbc({ key: 'x', published: false, price: 'TBC' }));
});

test('a published page with a TBC value throws', () => {
  assert.throws(() => assertNoTbc({ key: 'x', published: true, price: 'TBC' }), /TBC guard: page "x"/);
});

test('the normal build passes while the pricing and features pages are hidden', () => {
  const res = build({});
  assert.equal(res.status, 0, res.output);
  assert.ok(res.built);
});

for (const key of ['pricing', 'features']) {
  test(`the build fails when the ${key} page is published with TBC values`, () => {
    const res = build({ FORCE_PUBLISH: key });
    assert.notEqual(res.status, 0, 'the build should have failed');
    assert.match(res.output, new RegExp(`TBC guard: page "${key}" is published`));
    assert.equal(res.built, false);
  });
}
