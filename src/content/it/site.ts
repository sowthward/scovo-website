import type { SiteContent } from '../types';

const site: SiteContent = {
  locale: 'it',
  domain: 'https://loscovo.it',
  otherDomain: 'https://scovo.io',
  otherLocale: 'en',
  name: 'SCOVO',
  description:
    'SCOVO misura come la tua azienda compare nelle risposte di ChatGPT, Gemini, Perplexity e Claude, e ti dice cosa fare.',
  email: 'info@loscovo.it',
  cta: 'Richiedi la prova',

  // A menu item whose page is hidden is not shown.
  nav: [
    { label: 'Cosa fa', anchor: '#cosa-fa' },
    { label: 'Come funziona', anchor: '#come-funziona' },
    { label: 'Per chi è', anchor: '#per-chi-e' },
    { label: 'Funzionalità', page: 'features' },
    { label: 'Prezzi', page: 'pricing' },
    { label: 'Settori', group: 'sectors' },
    { label: 'Come misuriamo', page: 'measure' },
    { label: 'Chi siamo', page: 'about' },
    { label: 'Contatti', page: 'contact' },
  ],

  footer: {
    // Funzionalità and Prezzi appear in Prodotto only once their pages are published.
    columns: [
      {
        title: 'Prodotto',
        items: [
          { label: 'Cosa fa', anchor: '#cosa-fa' },
          { label: 'Come funziona', anchor: '#come-funziona' },
          { label: 'Come misuriamo', page: 'measure' },
          { label: 'Funzionalità', page: 'features' },
          { label: 'Prezzi', page: 'pricing' },
        ],
      },
      {
        // Each sector links to the homepage section until its page is published.
        title: 'Per chi è',
        items: [
          { label: 'Meccanica di precisione e conto terzi', page: 'sector-cnc', fallback: '#per-chi-e' },
          { label: 'Fornitura automotive', page: 'sector-automotive', fallback: '#per-chi-e' },
          { label: 'Distribuzione e servizi B2B', page: 'sector-b2b', fallback: '#per-chi-e' },
        ],
      },
      {
        title: 'Informazioni',
        items: [
          { label: 'Chi siamo', page: 'about' },
          { label: 'Contatti', page: 'contact' },
        ],
      },
    ],
    startTitle: 'Inizia',
    legal: [
      { label: 'Privacy', page: 'privacy' },
      { label: 'Cookie', page: 'cookie' },
    ],
    // TODO (open item 7): fill in all three. The line stays hidden until then.
    company: { name: '', address: '', vat: '' },
    vatLabel: 'P.IVA',
    copyright: '© 2026 SCOVO',
    socialLabel: 'Seguici',
  },

  labels: {
    skip: 'Vai al contenuto',
    homeLink: 'SCOVO, home',
    channels: 'Canali',
    menu: 'Menu',
    close: 'Chiudi',
    language: 'Lingua',
    languageNames: { it: 'Italiano', en: 'English' },
    tbc: 'da confermare',
    todo: 'Da completare',
    included: 'Incluso',
    notIncluded: 'Non incluso',
    breadcrumb: 'Percorso',
    home: 'Home',
    hiddenNotice: 'Pagina non pubblicata. Visibile solo a chi ha il link.',
    quotes: ['«', '»'],
  },

  testimonials: {
    // Leave empty until there are real quotes. See README, "Switch on the testimonial block".
    items: [],
    title: 'Cosa dicono i clienti',
    emptyLineHome: 'Primi clienti: partecipa al pilota.',
    emptyLineSector: 'Primi clienti in questo settore: partecipa al pilota.',
  },

  form: {
    title: 'Richiedi la prova',
    lead: 'La prova è gratuita. I piani a pagamento apriranno più avanti.',
    fields: {
      name: 'Nome',
      company: 'Azienda',
      website: 'Sito web',
      websiteHint: 'Per esempio: tuaazienda.it',
      email: 'Email',
      source: 'Come ci hai conosciuto?',
      sourcePlaceholder: 'Scegli',
      sourceOptions: ['Ricerca online', 'LinkedIn', 'Passaparola', "Me l'ha suggerito un'AI", 'Evento o fiera', 'Altro'],
      message: 'Messaggio',
      optional: 'facoltativo',
    },
    privacyBefore: "Ho letto l'",
    privacyLink: 'informativa sulla privacy',
    privacyAfter: ' e accetto di essere contattato per la prova.',
    submit: 'Richiedi la prova',
    sending: 'Invio in corso',
    reassurance: '14 giorni, 2 misurazioni, nessuna carta di credito.',
    success: "Richiesta ricevuta. Ti scriviamo all'indirizzo che hai indicato.",
    error: 'Non siamo riusciti a inviare la richiesta. Riprova, oppure scrivi a info@loscovo.it.',
    invalid: 'Controlla i campi evidenziati.',
  },

  notFound: {
    title: 'Pagina non trovata',
    text: "L'indirizzo che hai aperto non esiste o è stato spostato.",
    back: 'Torna alla home',
  },
};

export default site;
