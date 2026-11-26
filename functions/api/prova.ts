// Cloudflare Pages Function for the trial request form: POST /api/prova
//
// It validates the fields, rejects the honeypot, and emails the request to FORM_DESTINATION
// (info@loscovo.it on scovo-it, info@scovo.io on scovo-en).
//
// To replace this with the product's own sign-up flow (email code), change `deliver` below.
// Parsing, validation and the responses stay as they are.
import { parseTrialRequest, buildEmail, type OutgoingEmail, type TrialRequest } from '../../src/lib/trial-request.ts';

interface Env {
  /** Where requests are sent. Set per Pages project. */
  FORM_DESTINATION?: string;
  /** Sender, on a domain verified with the email service, e.g. "SCOVO <prova@loscovo.it>". */
  FORM_FROM?: string;
  /** Secret for the email service. PROPOSED service: Resend. Not confirmed yet, see DEPLOY.md. */
  RESEND_API_KEY?: string;
}

interface Context { request: Request; env: Env }

/** The one place that knows about the email service. */
async function sendEmail(env: Env, mail: OutgoingEmail): Promise<void> {
  if (!env.RESEND_API_KEY) throw new Error('No email service is configured (RESEND_API_KEY is missing).');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: mail.from, to: [mail.to], reply_to: mail.replyTo, subject: mail.subject, text: mail.text }),
  });
  if (!res.ok) throw new Error(`Email service answered ${res.status}`);
}

/** What happens to a valid request. Today: one email. Later: the product's sign-up flow. */
async function deliver(env: Env, data: TrialRequest): Promise<void> {
  if (!env.FORM_DESTINATION || !env.FORM_FROM) throw new Error('FORM_DESTINATION or FORM_FROM is not set.');
  await sendEmail(env, buildEmail(data, env.FORM_DESTINATION, env.FORM_FROM));
}

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const type = request.headers.get('content-type') ?? '';
  if (type.includes('application/json')) return (await request.json()) as Record<string, unknown>;
  const form = await request.formData();
  return Object.fromEntries([...form.entries()].map(([k, v]) => [k, typeof v === 'string' ? v : '']));
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const url = new URL(request.url);
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

  // Without JavaScript the browser posts the form directly, so answer with a redirect back to the page.
  const respond = (ok: boolean, status: number, extra: Record<string, unknown> = {}): Response => {
    if (wantsJson) {
      return new Response(JSON.stringify({ ok, ...extra }), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
    }
    let back = '/';
    try {
      const ref = new URL(request.headers.get('referer') ?? '');
      if (ref.host === url.host) back = ref.pathname;
    } catch { /* no usable referer */ }
    return new Response(null, { status: 303, headers: { Location: `${back}?sent=${ok ? 1 : 0}#prova`, 'Cache-Control': 'no-store' } });
  };

  // Only accept posts from the site itself.
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== url.host) return respond(false, 403, { error: 'origin' });

  let body: Record<string, unknown>;
  try {
    body = await readBody(request);
  } catch {
    return respond(false, 400, { error: 'body' });
  }

  const parsed = parseTrialRequest(body);
  // A bot that fills the honeypot gets the same answer as a person, and nothing is sent.
  if (parsed.kind === 'spam') return respond(true, 200);
  if (parsed.kind === 'invalid') return respond(false, 422, { error: 'invalid', fields: parsed.fields });

  try {
    await deliver(env, parsed.data);
  } catch (err) {
    console.error('Trial request not delivered:', err instanceof Error ? err.message : err);
    return respond(false, 502, { error: 'delivery' });
  }
  return respond(true, 200);
}

export async function onRequest({ request }: Context): Promise<Response> {
  if (request.method === 'POST') throw new Error('unreachable');
  return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
}
