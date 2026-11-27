# scovo-website

Marketing website for **SCOVO**. One codebase, two sites:

- **loscovo.it** in Italian (primary)
- **scovo.io** in English

Built with Astro and Tailwind CSS as a static site. Hosted on Cloudflare Pages, one project per language. See `DEPLOY.md` for hosting, `STRUCTURE.md` for the section map, `TODO.md` for open items and `REVIEW.md` for the Italian strings that need a native-speaker check.

## Run locally

Needs Node 22.18 or later.

```bash
npm install
```

```bash
npm run dev
```

The Italian site opens at http://localhost:4321. For the English site:

```bash
npm run dev:en
```

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the site for the locale in `SITE_LOCALE` (Italian if unset) into `dist` |
| `npm run build:it` / `npm run build:en` | Builds one locale |
| `npm test` | Runs the tests: the TBC guard, the build checks and the form function |
| `SCOVO_PRODUCTION=1 npm run build` | Builds as Cloudflare does for `main`, with the production checks (see below) |
| `npm run check` | Type check |
| `npm run check:live -- https://loscovo.it dist` | After a deploy, checks the live `robots.txt` and AI crawler access |

The demo request form posts to `/api/prova`, a Cloudflare Pages Function (the address kept its first name; visitors never see it). `npm run dev` does not run it. To try the form locally:

```bash
npm run build && npx wrangler pages dev dist
```

## Where things are

```
src/content/it/        Italian copy            src/views/        One layout per page type
src/content/en/        English copy            src/components/   Shared parts (header, footer, form, mocks)
src/content/types.ts   Shape of the content    src/lib/          Page registry, TBC guard, form validation
functions/api/prova.ts Form function           public/           _headers, _redirects, favicon, og image
```

## Edit copy

All copy is in `src/content/<locale>/`. Components hold no text.

- `site.ts`: menu, footer, form labels, shared labels.
- `pages/<name>.ts`: one file per page.
- `sample.ts`: the invented example company behind every product view. Do not change the figures.
- `people.ts`: the contact card.
- `src/data/social.json`: LinkedIn and YouTube, shared by both sites. Add a channel there and draw its icon in `src/components/Icon.astro`.

Change the text between the quotes, save, and the page reloads. Keep the Italian and English files in step: same keys, separate wording. No em dashes.

## Descriptor, call to action and the trial

- **Descriptor**: `descriptor` in `src/content/<locale>/site.ts` ("Visibilità sull'AI per imprenditori di PMI B2B" / "AI Visibility for B2B SME Leaders"). It feeds the label above the homepage headline, the footer, the homepage title and description, the JSON-LD and `llms.txt`. Change it there only.
- **Call to action**: `ctaLabel` in `site.ts` ("Richiedi una demo" / "Book a demo"). Every orange button and the form heading read it. The form is at `#demo`; an empty `#prova` target just before it keeps older links working.
- **SEO data**: `seo` in `site.ts` holds the JSON-LD keywords and audience, and the first line of `llms.txt`. "GEO" appears only there and in the glossary on Come misuriamo, never as a headline or a button.
- **The 14-day trial** is an entry offer, not what SCOVO is. It appears only in the trial block of the pricing page (`trialOffer` in `plans.ts`). `tests/no-trial.test.mjs` fails if any published page or `llms.txt` mentions it ("prova", "trial", "14 giorni", "carta di credito" and their English forms).

## Edit plans and feature rows

Plans, prices, limits and feature rows are in **one** file per locale: `src/content/<locale>/plans.ts`. The pricing page and the features page both read it.

- **Change a price:** set `price` to a number, for example `price: 49`. Write the number only; the currency, "/mese" and "+ IVA" are added.
- **Add annual billing:** add `priceAnnual` to a plan. The monthly / annual switch appears once any plan has it.
- **Add, remove or rename a plan:** edit the `plans` list. Give a new plan a `key`. Cells you have not filled in show as "da confermare".
- **Fill in a cell:** in `includesTable.rows` or `featureGroups`, add the plan's key to `cells`. Use `true` for a tick, `false` for a dash (not included), or a short text.
- **Mark the most chosen plan:** `popular: true`.
- **The trial block:** `trialOffer` in `plans.ts`. Set `plan` to the name of the plan the trial activates.

Make the same change in both `it/plans.ts` and `en/plans.ts`.

### TBC

Any value can be the literal `'TBC'`. On a hidden page it shows as a grey "da confermare" chip. **The build fails if a published page contains a TBC**, so an unconfirmed price cannot go live. The error lists every TBC still open.

## Publish a hidden page

Every page file has a `published` flag. A page with `published: false` is still built and reachable by its address, carries `noindex`, and is left out of the menu, the footer, `sitemap.xml` and `llms.txt`.

Hidden at launch: Prezzi, Funzionalità and the three sector pages.

To publish one:

1. Replace every `TBC` it uses (for Prezzi and Funzionalità, that means `plans.ts`).
2. Set `published: true` in `src/content/it/pages/<name>.ts` and in the matching English file.
3. Run `npm run build`. If it fails with "TBC guard", the message lists what is still open.

The menu item, the footer link, the sitemap entry and the links from other pages appear by themselves. When the first sector page is published, the **Settori** menu and footer column appear.

When Prezzi is published and every price is a number, price data is added to the page's structured data automatically.

## Checks that fail the build

Every build fails if:

- a published page holds a `TBC` value in its content file (the TBC guard, above);
- any built file contains "ctrlpost", in any letter case. SCOVO stands alone on the site. Repository documents may still mention it.

A **production build** (Cloudflare building `main`, or `SCOVO_PRODUCTION=1` locally) also fails if a published page shows "TODO" or "TBC" anywhere in its text. Preview builds still show them, as grey chips and boxes, so work in progress can be reviewed. The error lists each page and the text around each marker.

The checks are in `integrations/dist-checks.mjs`.

## Footer

The footer is a dark band (`--footer-bg` in `src/styles/global.css`, charcoal; set it to `#000000` for black). On windows at least 768 px wide and 700 px tall it stays pinned at the bottom and the page slides up to uncover it. This is CSS only: see `.site-footer` and `.site-main` in `global.css`. On smaller windows, in print, and while a footer link has keyboard focus, the footer is in normal flow. Do not put `overflow: hidden` on `<main>` or any of its ancestors: it breaks the sticky header row on the features page.

The company details line appears only when `footer.company` in `site.ts` has the name, address and VAT number all filled in.

## Switch on the testimonial block

In `src/content/<locale>/site.ts`, find `testimonials.items`. It is empty, so the site shows one line: "Primi clienti: partecipa al pilota." on the homepage and "Primi clienti in questo settore: partecipa al pilota." on sector pages.

Add real quotes only:

```ts
items: [
  { quote: '...', name: 'Nome Cognome', role: 'Titolare', company: 'Azienda S.r.l.' },
],
```

With one or more items the line is replaced by quote cards on the homepage and the sector pages. Never add sample or placeholder quotes.

## Add the founder

In `src/content/<locale>/pages/about.ts`, fill in `team.founder` (name, role, text, photo). While `name` is empty, Chi siamo shows only Nicoletta's card.

## Add the contact photo

Put the photo in `public/` and write its path in `src/content/<locale>/people.ts`, for example `photo: '/nicoletta.jpg'`. Until then the card shows initials on a blue circle.

## Brand rules that the code enforces

- Only the ctrlpost palette exists in the build (`src/styles/global.css`). No other colour can be used by accident.
- Inter is self-hosted. There are no calls to Google Fonts and no third-party scripts.
- The orange button label is bold at 19px, because white on Claude Orange is 3.1:1 and must count as large text.
- Blue text at body size is used only on white. On sand it is 4.4:1, just under the 4.5:1 that WCAG AA asks for.
