# scovo-website

Marketing website for **SCOVO, a ctrlpost product**. One codebase, two sites:

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
| `npm test` | Runs the tests: the TBC guard and the form function |
| `npm run check` | Type check |
| `npm run check:live -- https://loscovo.it dist` | After a deploy, checks the live `robots.txt` and AI crawler access |

The form posts to `/api/prova`, a Cloudflare Pages Function. `npm run dev` does not run it. To try the form locally:

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

Change the text between the quotes, save, and the page reloads. Keep the Italian and English files in step: same keys, separate wording. No em dashes.

## Edit plans and feature rows

Plans, prices, limits and feature rows are in **one** file per locale: `src/content/<locale>/plans.ts`. The pricing page and the features page both read it.

- **Change a price:** set `price` to a number, for example `price: 49`. Write the number only; the currency, "/mese" and "+ IVA" are added.
- **Add annual billing:** add `priceAnnual` to a plan. The monthly / annual switch appears once any plan has it.
- **Add, remove or rename a plan:** edit the `plans` list. Give a new plan a `key`. Cells you have not filled in show as "da confermare".
- **Fill in a cell:** in `includesTable.rows` or `featureGroups`, add the plan's key to `cells`. Use `true` for a tick, `false` for a dash (not included), or a short text.
- **Mark the most chosen plan:** `popular: true`.

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

## Switch on the testimonial block

In `src/content/<locale>/site.ts`, find `testimonials.items`. It is empty, so the site shows one line: "Primi clienti in questo settore: partecipa al pilota."

Add real quotes only:

```ts
items: [
  { quote: '...', name: 'Nome Cognome', role: 'Titolare', company: 'Azienda S.r.l.' },
],
```

With one or more items the line is replaced by quote cards on the homepage and the sector pages. Never add sample or placeholder quotes.

## Add the contact photo

Put the photo in `public/` and write its path in `src/content/<locale>/people.ts`, for example `photo: '/nicoletta.jpg'`. Until then the card shows initials on a blue circle.

## Brand rules that the code enforces

- Only the ctrlpost palette exists in the build (`src/styles/global.css`). No other colour can be used by accident.
- Inter is self-hosted. There are no calls to Google Fonts and no third-party scripts.
- The orange button label is bold at 19px, because white on Claude Orange is 3.1:1 and must count as large text.
- Blue text at body size is used only on white. On sand it is 4.4:1, just under the 4.5:1 that WCAG AA asks for.
