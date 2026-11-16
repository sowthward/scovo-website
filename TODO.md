# TODO.md

Every placeholder and TBC still open. Nothing here has been invented: where a fact was missing, the site shows a marker or the page is hidden.

## Must be done before launch

| # | Item | Where | What the site shows now |
|---|---|---|---|
| 1 | **Legal text for Privacy and Cookie.** The privacy page must name Cloudflare (hosting) and the email sending service as processors | `src/content/<locale>/pages/privacy.ts`, `cookie.ts` | Headings with visible "TODO" boxes. Both pages are published, because the form and the footer link to them |
| 2 | **Registered name, address and P.IVA** (open item 7) | `footer.companyDetails` in `src/content/<locale>/site.ts`, and the "Titolare del trattamento" section of the privacy page | A grey "TODO" chip in the footer of every page |
| 3 | **Email sending service for the form** (open item 9). Proposed: Resend. Not confirmed | `functions/api/prova.ts`, `DEPLOY.md` section 2 | Until a key is set, sending the form shows the error message with the contact email |
| 4 | **Create the two Cloudflare Pages projects** and set their variables | `DEPLOY.md` sections 1 to 3 | Not done. No pull request has a Cloudflare preview link yet |
| 5 | **AI crawler check on the live domains** | `DEPLOY.md` section 4, `npm run check:live` | Cannot be run until the first deploy |
| 6 | **Native-speaker check of the Italian copy** | `REVIEW.md` | About 270 strings listed |
| 7 | **Repository visibility.** The prompt asks for a private repository; `sowthward/scovo-website` is public | GitHub, repository settings | Public |

## Content to confirm

| # | Item | Where | What the site shows now |
|---|---|---|---|
| 8 | Method line on the trust page: wording to be confirmed (open item 6) | `blocks` entry `fonti-dati` in `pages/measure.ts`, marked `todo: true` | The suggested wording, live |
| 9 | One-line descriptions of the four score parts (Presenza, Posizione, Tono, Fonti) | `pages/measure.ts`, `score.rows` | My wording, to check against the report format |
| 10 | Glossary definitions (the seven terms were supplied, the definitions were not) | `pages/measure.ts`, `glossary.items` | My wording |
| 11 | Short description of ctrlpost: who, where, since when | `pages/about.ts`, first block | A visible "TODO" box on Chi siamo |
| 12 | Nicoletta's surname and photo (open item 8) | `src/content/<locale>/people.ts` | First name, initial "N" on a blue circle |
| 13 | Options in "Come ci hai conosciuto?" | `form.fields.sourceOptions` in `site.ts` | Six options I chose |
| 14 | Which section the menu items "Cosa fa" and "Come funziona" point to | `src/views/Home.astro` (`#cosa-fa`, `#come-funziona`) | "Cosa fa" goes to the two product cards, "Come funziona" to the three kinds of action |
| 15 | Favicon: the letter S from the wordmark, blue, no box. The guidelines say there is no icon mark, so this needs brand sign-off | `public/favicon.png`, `public/apple-touch-icon.png` | Letter S |

## Hidden pages: Prezzi and Funzionalità

Both are built, hidden, and cannot be published while a TBC remains (the build fails).

| # | Item | Where |
|---|---|---|
| 16 | Plans: how many, their names, monthly prices, annual billing or not (open item 1). Draft names: Prova, Basic, Professional, Agency | `plans` in `src/content/<locale>/plans.ts` |
| 17 | For each paid plan: who it is for, button label, list of what is included | same |
| 18 | "Cosa include ogni piano": every cell for the paid plans (open item 2) | `includesTable.rows` |
| 19 | Features table: every cell for the paid plans, and three cells in the Prova column (Può farlo ctrlpost, Referente italiano, Email) | `featureGroups` |
| 20 | Feature rows: the draft list from the prompt (open item 3) | `featureGroups` |
| 21 | FAQ answer to "Cosa succede dopo i 14 giorni?" | `faq.items` in `pages/pricing.ts` |
| 22 | One-line group descriptions on the features page | `featureGroups[].description`, my wording |
| 23 | Whether the two pages go live at launch (open item 4) | `published` in `pages/pricing.ts` and `pages/features.ts` |

## Hidden pages: the three sector pages

| # | Item | Where |
|---|---|---|
| 24 | Check all sector content with test customers and a native speaker | `pages/sector-*.ts` |
| 25 | "Typical gaps" and their actions are draft examples I wrote from the angle given for each sector | `gaps.items` |
| 26 | "What SCOVO checks" names kinds of source only. Add trade fairs, associations or portals by name only if they are supplied | `checks.items` |

## English site (scovo.io)

| # | Item | Where |
|---|---|---|
| 27 | The product views reuse the Italian example company (Officina Esempio S.r.l., Brescia) with English keywords. Confirm, or supply an English-language example | `src/content/en/sample.ts` |
| 28 | English example buyer questions on the sector cards and sector pages are my wording, with no place names | `pages/home.ts` (`sectors.cards`), `pages/sector-*.ts` |
| 29 | "Passaparola Digitale" is rendered as "Digital word of mouth" | `pages/home.ts`, `pages/about.ts` |
| 30 | Section anchors (`#cosa-fa`, `#come-funziona`, `#prova`) and the form address `/api/prova` keep Italian names on the English site | `src/views/`, `functions/api/prova.ts` |

## Switched off until there is real content

| # | Item | Where |
|---|---|---|
| 31 | Testimonials: empty. The site shows "Primi clienti in questo settore: partecipa al pilota." | `testimonials.items` in `site.ts` |
| 32 | "Può farlo ctrlpost": the homepage says this service comes later and is not on sale | `pages/home.ts`, `actions.cards` |

## To update elsewhere

Brand guidelines §2A and §8: the contact emails and the linking of the two sites are now decided.

## Checks run on this build

Run locally on the production build, served by Cloudflare's local runtime (wrangler). They must be repeated on the Cloudflare preview links once the Pages projects exist.

- Lighthouse, mobile: 100 for performance, accessibility, best practices and SEO on `/`, `/come-misuriamo`, `/chi-siamo`, `/contatti`, `/privacy` (Italian) and `/`, `/how-we-measure` (English).
- axe (WCAG 2.2 AA rules) at 390px and 1440px: no violations on every page type, hidden pages included.
- `npm test`: 17 tests pass (TBC guard and form function).
