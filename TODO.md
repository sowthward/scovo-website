# TODO.md

Every placeholder and TBC still open. Nothing here has been invented: where a fact was missing, the site shows a marker, leaves the element out, or keeps the page hidden.

**Production builds enforce this list.** Since 26 Nov 2026 a build of the production branch (`main` on Cloudflare) fails if a published page shows "TODO" or "TBC" anywhere in its text. Preview builds still show them, so work in progress can be reviewed. To try a production build locally: `SCOVO_PRODUCTION=1 npm run build`. Today it fails on two pages only: Privacy and Cookie.

## Must be done before the first production deploy

| # | Item | Where | What the site shows now |
|---|---|---|---|
| 1 | **Legal text for Privacy and Cookie.** The privacy page must name Cloudflare (hosting) and the email sending service as processors. **The production build fails until this is done** | `src/content/<locale>/pages/privacy.ts`, `cookie.ts` | Headings with visible "TODO" boxes |
| 2 | **Registered name and P.IVA** (open item 7). The registered address (Viale San Michele del Carso 11, 20144 Milano) is stored. When the P.IVA is filed: fill `name` and `vat`, then set `showStreet: true` | `footer.company` in `src/content/<locale>/site.ts`, and the "Titolare del trattamento" section of the privacy page | "Milano, Italia" in the footer and on Contatti. The full line (name, street, P.IVA) and the JSON-LD street and postcode appear only after the switch |
| 3 | **Email sending service for the form** (open item 9). Proposed: Resend. Not confirmed | `functions/api/prova.ts`, `DEPLOY.md` section 2 | Until a key is set, sending the form shows the error message with the contact email |
| 4 | **English Pages project** (`scovo-en`, `SITE_LOCALE=en`). Only `scovo-it` reports builds to GitHub so far | Cloudflare dashboard, `DEPLOY.md` section 1 | English previews are not built |
| 5 | **AI crawler check on the live domains** | `DEPLOY.md` section 4, `npm run check:live` | Cannot run until the first production deploy |
| 6 | **Native-speaker check of the Italian copy** | `REVIEW.md` | About 280 strings listed |
| 7 | **Repository visibility.** The build prompt asks for a private repository; `sowthward/scovo-website` is public | GitHub, repository settings | Public |

## Content to confirm

| # | Item | Where | What the site shows now |
|---|---|---|---|
| 8 | Method line on the trust page: wording to be confirmed (open item 6) | `blocks` entry `fonti-dati` in `pages/measure.ts`, marked `todo: true` | The suggested wording, live |
| 9 | One-line descriptions of the four score parts (Presenza, Posizione, Tono, Fonti) | `pages/measure.ts`, `score.rows` | My wording, to check against the report format |
| 10 | Glossary definitions (the seven terms were supplied, the definitions were not) | `pages/measure.ts`, `glossary.items` | My wording |
| 11 | Team: done 27 Nov. David Wadsworth (founder) and Nicoletta Fava (Account Manager per l'Italia), with photos in `public/team/`. If a photo file is ever missing, the card shows initials | `src/content/<locale>/team.ts` | Both people on Chi siamo, Contatti and the homepage strip |
| 12 | Team photos: 400 × 400, WebP and JPG, cropped to a circle by CSS. Replace the files in `public/team/` to update them | `public/team/` | Photos supplied 27 Nov |
| 13 | Options in "Come ci hai conosciuto?" | `form.fields.sourceOptions` in `site.ts` | Six options I chose |
| 14 | Which section the menu items "Cosa fa" and "Come funziona" point to | `src/views/Home.astro` (`#cosa-fa`, `#come-funziona`) | "Cosa fa" goes to the two product cards, "Come funziona" to the three kinds of action |
| 15 | Favicon: the letter S from the wordmark, blue, no box. The guidelines say there is no icon mark, so this needs brand sign-off | `public/favicon.png`, `public/apple-touch-icon.png` | Letter S |
| 16 | "Possiamo farlo noi" / "We can do it for you": with ctrlpost removed, "we" is SCOVO. Confirm this is who will offer the service. The 27 Nov prompt still says "Può farlo ctrlpost" in the number band; the site uses "Possiamo farlo noi" there too | `sample.ts`, `plans.ts`, `pages/home.ts` | The new label, with the line saying the service comes later and is not on sale |
| 17 | Footer colour: charcoal #3A3A3A. To switch to black, change `--footer-bg` | `src/styles/global.css` | Charcoal |

## Hidden pages: Prezzi and Funzionalità

Both are built, hidden, and cannot be published while a TBC remains (the build fails).

| # | Item | Where |
|---|---|---|
| 18 | Plans: three paid plans, sold in three stages. Names from the FAQ of 27 Nov: Starter, Professional, Enterprise (renamed from the draft Basic, Professional, Agency). Monthly prices, annual billing or not (open item 1) | `plans` in `src/content/<locale>/plans.ts` |
| 19 | For each paid plan: who it is for, button label, list of what is included | same |
| 20 | "Cosa include ogni piano": every cell except "Motori AI" (4 in every plan) (open item 2) | `includesTable.rows` |
| 21 | Features table: every cell except the engine rows (ChatGPT, Gemini, Perplexity, Claude ticked; Copilot "non ancora misurato" in all three plans) | `featureGroups` |
| 21a | Which plan the trial activates: **Starter**, from the pricing FAQ of 27 Nov. Confirm | `trialOffer.plan` in `plans.ts` |
| 21b | One line under "Prezzi" on the pricing page | `lead` in `pages/pricing.ts` |
| 22 | Feature rows: the draft list from the build prompt (open item 3) | `featureGroups` |
| 23 | Pricing FAQ: the trial question (supplied wording, 27 Nov) replaces the two trial questions; "Cos'è una misurazione?" and "Quali motori AI misurate?" stay | `faq.pricing` in `faq.ts`, `faq.items` in `pages/pricing.ts` |
| 24 | One-line group descriptions on the features page | `featureGroups[].description`, my wording |
| 25 | Whether the two pages go live at launch (open item 4) | `published` in `pages/pricing.ts` and `pages/features.ts` |

## Hidden pages: the three sector pages

| # | Item | Where |
|---|---|---|
| 26 | Check all sector content with test customers and a native speaker | `pages/sector-*.ts` |
| 27 | "Typical gaps" and their actions are draft examples I wrote from the angle given for each sector | `gaps.items` |
| 28 | "What SCOVO checks" names kinds of source only. Add trade fairs, associations or portals by name only if they are supplied | `checks.items` |
| 29 | **Menu when a sector page is published.** The menu has "Per chi è" (to the homepage section) and a "Settori" dropdown that appears with the first published sector page. Decide whether to keep both or fold the sector pages under "Per chi è" | `nav` in `site.ts` |

## English site (scovo.io)

| # | Item | Where |
|---|---|---|
| 30 | The product views reuse the Italian example company (Officina Esempio S.r.l., Brescia) with English keywords. Confirm, or supply an English-language example | `src/content/en/sample.ts` |
| 31 | English example buyer questions on the "Who it's for" cards and sector pages are my wording, with no place names | `pages/home.ts` (`whoFor.cards`), `pages/sector-*.ts` |
| 32 | "Passaparola Digitale" is rendered as "Digital word of mouth" | `pages/home.ts`, `pages/about.ts` |
| 33 | Section anchors `#cosa-fa`, `#come-funziona`, `#prova` and the form address `/api/prova` keep Italian names on the English site. "Who it's for" has its own English anchor, `#who-its-for` | `src/views/`, `functions/api/prova.ts` |

## Decisions of 27 Nov 2026

- **Descriptor:** "Visibilità sull'AI per imprenditori di PMI B2B" / "AI Visibility for B2B SME Leaders", in `site.ts`.
- **The trial is off the general pages.** It lives only in the trial block on the hidden pricing page. `tests/no-trial.test.mjs` keeps it that way.
- **Call to action:** "Richiedi una demo" / "Book a demo", in `ctaLabel`.
- **Conflict with 26 Nov, resolved by leaving ctrlpost out.** The 27 Nov prompt asks for "Un prodotto ctrlpost" in the footer, the homepage meta description and `llms.txt`, and for "Può farlo ctrlpost" in the number band. ctrlpost was removed from the site on 26 Nov and the build fails on it, so the descriptor sits under the wordmark in the footer, the other two texts end without the ctrlpost sentence, and the number band says "Possiamo farlo noi". If ctrlpost should come back, the build check in `integrations/dist-checks.mjs` has to go first.
- **Email subject:** "Richiesta demo SCOVO: <azienda>" ("SCOVO demo request: <company>"). The company name is kept after the supplied subject so requests can be told apart in the inbox.

## Decisions of 27 Nov 2026 (b): team, address, graphics, FAQ

- **Team:** `src/content/<locale>/team.ts`. Shown on Chi siamo, Contatti and the homepage strip; `Person` items and `Organization.founder` in the JSON-LD.
- **Address:** "Milano, Italia" shows now. Street and postcode wait for `showStreet` (see item 2).
- **Graphics:** score gauge and share-of-voice donut in every score product view; purchase funnel (`#funnel`); four steps on a charcoal band (`#percorso`) with "Passi completati" and no projected score or percentage (checked by `tests/team-graphics-faq.test.mjs`). All data is the invented example.
- **FAQ:** `src/content/<locale>/faq.ts`, 8 questions on the homepage with `FAQPage` JSON-LD; the trial question on the hidden pricing page only.
- **English stage names:** Awareness, Consideration, Evaluation, Decision.
- **ctrlpost, again.** The prompt asks to keep a ctrlpost paragraph on Chi siamo (there is none since 26 Nov) and tags two actions "Può farlo ctrlpost". Both use "Possiamo farlo noi" instead.
- **Plan names follow the FAQ:** the FAQ names Starter, Professional and Enterprise, so the draft plans were renamed to match.

### Open items from this prompt

| # | Item | Assumed |
|---|---|---|
| 36 | Scan frequency per plan | The FAQ says "depends on the plan"; numbers come with pricing |
| 37 | Custom model selection on Enterprise | Left out of the FAQ until decided |
| 38 | Five languages on Professional and Enterprise (FAQ answer 4) | Stated as supplied. It must hold at launch, because it is on a published page |

## Switched off until there is real content

| # | Item | Where |
|---|---|---|
| 34 | Testimonials: empty. The homepage shows "Primi clienti: partecipa al pilota."; sector pages show "Primi clienti in questo settore: partecipa al pilota." | `testimonials` in `site.ts` |
| 35 | "Possiamo farlo noi": the homepage says this service comes later and is not on sale | `pages/home.ts`, `actions.cards` |

## Social channels

LinkedIn and YouTube, in `src/data/social.json`. To add a channel, add an entry there and draw its icon in `src/components/Icon.astro`. The links are plain links: nothing is loaded from LinkedIn or YouTube. If a video is ever embedded, use YouTube's privacy-enhanced mode and look at the cookie question first.

## To update elsewhere

- Brand guidelines §2A and §8: the contact emails and the linking of the two sites are decided.
- Brand guidelines and the build prompt: the parent line "SCOVO, un prodotto ctrlpost" is withdrawn (decision of 26 Nov 2026). SCOVO stands alone on the site, and the build fails if "ctrlpost" appears in any built file.

## Checks run on this build

See the pull request for the latest results. The checks are listed in `README.md`.
