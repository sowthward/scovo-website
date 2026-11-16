import type { SiteContent } from '../types';

const site: SiteContent = {
  locale: 'it',
  domain: 'https://loscovo.it',
  otherDomain: 'https://scovo.io',
  otherLocale: 'en',
  name: 'SCOVO',
  parentLine: 'SCOVO, un prodotto ctrlpost',
  parentTag: 'un prodotto ctrlpost',
  description:
    'SCOVO misura come la tua azienda compare nelle risposte di ChatGPT, Gemini, Perplexity e Claude, e ti dice cosa fare.',
  email: 'info@loscovo.it',
  linkedin: 'https://www.linkedin.com/company/loscovo',
  cta: 'Richiedi la prova',

  // A menu item whose page is hidden is not shown.
  nav: [
    { label: 'Cosa fa', anchor: '#cosa-fa' },
    { label: 'Come funziona', anchor: '#come-funziona' },
    { label: 'Funzionalità', page: 'features' },
    { label: 'Prezzi', page: 'pricing' },
    { label: 'Settori', group: 'sectors' },
    { label: 'Come misuriamo', page: 'measure' },
    { label: 'Chi siamo', page: 'about' },
    { label: 'Contatti', page: 'contact' },
  ],

  footer: {
    columns: [
      {
        title: 'Prodotto',
        items: [
          { label: 'Cosa fa', anchor: '#cosa-fa' },
          { label: 'Come funziona', anchor: '#come-funziona' },
          { label: 'Funzionalità', page: 'features' },
          { label: 'Prezzi', page: 'pricing' },
          { label: 'Come misuriamo', page: 'measure' },
        ],
      },
      { title: 'Settori', items: [{ label: 'Settori', group: 'sectors' }] },
      {
        title: 'Informazioni',
        items: [
          { label: 'Chi siamo', page: 'about' },
          { label: 'Contatti', page: 'contact' },
          { label: 'ctrlpost.io', href: 'https://ctrlpost.io' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/loscovo' },
        ],
      },
      {
        title: 'Inizia',
        items: [
          { label: 'Richiedi la prova', anchor: '#prova' },
          { label: 'info@loscovo.it', href: 'mailto:info@loscovo.it' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy', page: 'privacy' },
      { label: 'Cookie', page: 'cookie' },
    ],
    contactLabel: 'Scrivici',
    // TODO: registered name, address and P.IVA (open item 7).
    companyDetails: 'TODO: ragione sociale, sede legale e P.IVA',
    copyright: '© 2026 ctrlpost.io',
  },

  labels: {
    skip: 'Vai al contenuto',
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
  },

  testimonials: {
    // Leave empty until there are real quotes. See README, "Switch on the testimonial block".
    items: [],
    title: 'Cosa dicono i clienti',
    emptyLine: 'Primi clienti in questo settore: partecipa al pilota.',
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
    privacyBefore: 'Ho letto la ',
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
