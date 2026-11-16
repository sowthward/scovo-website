// Validation and email text for the trial request form.
// Pure functions with no Cloudflare or Astro imports, so they can be tested with plain Node
// and reused when the form is replaced by the product's own sign-up flow.

export type TrialLocale = 'it' | 'en';

export interface TrialRequest {
  locale: TrialLocale;
  name: string;
  company: string;
  website: string;
  email: string;
  source: string;
  message: string;
}

export type Parsed =
  | { kind: 'ok'; data: TrialRequest }
  | { kind: 'spam' }
  | { kind: 'invalid'; fields: string[] };

const LIMITS = { name: 120, company: 160, website: 200, email: 200, source: 80, message: 2000 } as const;
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
// A domain with an optional scheme and path. People type "azienda.it", not a full address.
const WEBSITE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

const clean = (v: unknown): string => (typeof v === 'string' ? v.replace(/\r\n?/g, '\n').trim() : '');
/** One line only: stops header injection in subject and reply-to. */
const oneLine = (v: string): string => v.replace(/[\r\n\t]+/g, ' ').trim();

export function parseTrialRequest(input: Record<string, unknown>): Parsed {
  // Honeypot: people never see this field. Anything in it means a bot.
  if (clean(input.fax) !== '') return { kind: 'spam' };

  const data: TrialRequest = {
    locale: input.locale === 'en' ? 'en' : 'it',
    name: oneLine(clean(input.name)),
    company: oneLine(clean(input.company)),
    website: oneLine(clean(input.website)),
    email: oneLine(clean(input.email)),
    source: oneLine(clean(input.source)),
    message: clean(input.message),
  };

  const bad: string[] = [];
  (Object.keys(LIMITS) as (keyof typeof LIMITS)[]).forEach((k) => {
    if (data[k].length > LIMITS[k]) bad.push(k);
  });
  if (!data.name) bad.push('name');
  if (!data.company) bad.push('company');
  if (!WEBSITE.test(data.website)) bad.push('website');
  if (!EMAIL.test(data.email)) bad.push('email');
  if (!data.source) bad.push('source');
  if (clean(input.privacy) !== 'yes') bad.push('privacy');

  return bad.length ? { kind: 'invalid', fields: [...new Set(bad)] } : { kind: 'ok', data };
}

export interface OutgoingEmail {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
}

export function buildEmail(data: TrialRequest, to: string, from: string, receivedAt = new Date()): OutgoingEmail {
  const it = data.locale === 'it';
  const rows: [string, string][] = it
    ? [['Nome', data.name], ['Azienda', data.company], ['Sito web', data.website], ['Email', data.email], ['Come ci ha conosciuto', data.source], ['Messaggio', data.message || '(nessuno)']]
    : [['Name', data.name], ['Company', data.company], ['Website', data.website], ['Email', data.email], ['How they heard about us', data.source], ['Message', data.message || '(none)']];
  return {
    to,
    from,
    replyTo: data.email,
    subject: `${it ? 'Richiesta di prova SCOVO' : 'SCOVO trial request'}: ${data.company}`,
    text:
      rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
      `\n\n${it ? 'Privacy accettata' : 'Privacy notice accepted'}: ${it ? 'sì' : 'yes'}` +
      `\n${it ? 'Ricevuta' : 'Received'}: ${receivedAt.toISOString()}` +
      `\n${it ? 'Sito' : 'Site'}: ${it ? 'loscovo.it' : 'scovo.io'}\n`,
  };
}
