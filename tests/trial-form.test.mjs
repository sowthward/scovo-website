// Tests for the demo request form function at /api/prova: validation, honeypot, email content and responses.
import { test, mock } from 'node:test';
import assert from 'node:assert/strict';
import { parseTrialRequest, buildEmail } from '../src/lib/trial-request.ts';
import { onRequestPost, onRequest } from '../functions/api/prova.ts';

const valid = { locale: 'it', name: 'Mario Rossi', company: 'Officina Esempio S.r.l.', website: 'officinaesempio.it', email: 'mario@officinaesempio.it', source: 'LinkedIn', message: '', privacy: 'yes', fax: '' };
const env = { FORM_DESTINATION: 'info@loscovo.it', FORM_FROM: 'SCOVO <prova@loscovo.it>', RESEND_API_KEY: 'test-key' };
const post = (fields, headers = {}) =>
  new Request('https://loscovo.it/api/prova', { method: 'POST', headers: { Accept: 'application/json', Origin: 'https://loscovo.it', ...headers }, body: new URLSearchParams(fields) });

test('a complete request is valid', () => {
  assert.equal(parseTrialRequest(valid).kind, 'ok');
});

test('the honeypot marks the request as spam', () => {
  assert.equal(parseTrialRequest({ ...valid, fax: '123' }).kind, 'spam');
});

test('missing fields, a bad email and an unticked privacy box are rejected', () => {
  const res = parseTrialRequest({ ...valid, name: ' ', email: 'not-an-email', privacy: '' });
  assert.equal(res.kind, 'invalid');
  assert.deepEqual(res.fields.sort(), ['email', 'name', 'privacy']);
});

test('line breaks cannot be injected into the subject or reply-to', () => {
  const res = parseTrialRequest({ ...valid, company: 'Acme\r\nBcc: someone@example.com' });
  assert.equal(res.kind, 'ok');
  const mail = buildEmail(res.data, env.FORM_DESTINATION, env.FORM_FROM);
  assert.ok(!/[\r\n]/.test(mail.subject));
});

test('a valid post sends one email to FORM_DESTINATION with reply-to set to the sender', async () => {
  const fetchMock = mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 200 }));
  const res = await onRequestPost({ request: post(valid), env });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
  assert.equal(fetchMock.mock.callCount(), 1);
  const sent = JSON.parse(fetchMock.mock.calls[0].arguments[1].body);
  assert.deepEqual(sent.to, ['info@loscovo.it']);
  assert.equal(sent.reply_to, 'mario@officinaesempio.it');
  assert.match(sent.subject, /^Richiesta demo SCOVO: Officina Esempio/);
  fetchMock.mock.restore();
});

test('a honeypot post looks successful and sends nothing', async () => {
  const fetchMock = mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 200 }));
  const res = await onRequestPost({ request: post({ ...valid, fax: 'x' }), env });
  assert.equal(res.status, 200);
  assert.equal(fetchMock.mock.callCount(), 0);
  fetchMock.mock.restore();
});

test('an invalid post answers 422 with the field names', async () => {
  const res = await onRequestPost({ request: post({ ...valid, email: '' }), env });
  assert.equal(res.status, 422);
  assert.deepEqual((await res.json()).fields, ['email']);
});

test('a post from another site is refused', async () => {
  const res = await onRequestPost({ request: post(valid, { Origin: 'https://example.com' }), env });
  assert.equal(res.status, 403);
});

test('with no email service configured the visitor gets the error state, not a false success', async () => {
  const res = await onRequestPost({ request: post(valid), env: { FORM_DESTINATION: 'info@loscovo.it', FORM_FROM: 'x@loscovo.it' } });
  assert.equal(res.status, 502);
});

test('without JavaScript the function redirects back to the form', async () => {
  const fetchMock = mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 200 }));
  const res = await onRequestPost({ request: post(valid, { Accept: 'text/html', Referer: 'https://loscovo.it/contatti' }), env });
  assert.equal(res.status, 303);
  assert.equal(res.headers.get('location'), '/contatti?sent=1#demo');
  fetchMock.mock.restore();
});

test('other methods answer 405', async () => {
  const res = await onRequest({ request: new Request('https://loscovo.it/api/prova') });
  assert.equal(res.status, 405);
});
