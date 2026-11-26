# DEPLOY.md

How to put the two SCOVO sites on Cloudflare Pages. One repository, two Pages projects.

| Project | Language | `SITE_LOCALE` | Domain | Form goes to |
|---|---|---|---|---|
| `scovo-it` | Italian | `it` | loscovo.it | info@loscovo.it |
| `scovo-en` | English | `en` | scovo.io | info@scovo.io |

Dashboard labels change from time to time. If a name below does not match what you see, look for the nearest equivalent.

## 0. Before the stage pull requests are merged

`main` holds only the first commit (`STRUCTURE.md`, a README and `.gitignore`). The site itself is on the stage branches, stacked one on another, and `stage-6-form-deploy` contains all of it. Until the pull requests are merged:

- **The production build on `main` fails**, because `main` has no `package.json`. That is expected and harmless: nothing is published to the custom domain.
- **Review on the preview of `stage-6-form-deploy`.** Cloudflare builds a preview for every push to a non-production branch and gives it its own address. In the Pages project, open **Deployments** and pick the latest deployment of that branch. The branch address has the form `https://stage-6-form-deploy.<project>.pages.dev`.
- **The preview uses the Preview variables.** If `SITE_LOCALE` is not set for Preview, the build is Italian.
- **The form does not send on a preview** until `FORM_DESTINATION`, `FORM_FROM` and `RESEND_API_KEY` are set for Preview. It shows the error message instead.
- **Preview addresses carry `noindex`** (see `public/_headers`), so search engines leave them alone.
- **Production builds are stricter than previews.** On `main` the build fails if a published page shows "TODO" or "TBC". Today that means the Privacy and Cookie pages need their legal text before the first production deploy. Try it locally with `SCOVO_PRODUCTION=1 npm run build`.

## 1. Create the two Pages projects

Do this twice, once per row of the table above.

1. Cloudflare dashboard, **Workers & Pages**, **Create**, **Pages**, **Connect to Git**.
2. Choose the GitHub account **sowthward** and the repository **scovo-website**.
3. Project name: `scovo-it` (then `scovo-en`).
4. Production branch: `main`.
5. Framework preset: **Astro**. Build command: `npm run build`. Build output directory: `dist`.
6. Add the environment variables from section 2, then **Save and Deploy**.

Production deploys on every push to `main`. Every pull request gets a preview link, posted on the pull request by Cloudflare.

## 2. Environment variables

Set these in each project under **Settings**, **Variables and Secrets**, for both **Production** and **Preview**.

| Name | Type | `scovo-it` | `scovo-en` | Used by |
|---|---|---|---|---|
| `SITE_LOCALE` | Text | `it` | `en` | The build |
| `NODE_VERSION` | Text | `22` | `22` | The build |
| `FORM_DESTINATION` | Text | `info@loscovo.it` | `info@scovo.io` | The form function |
| `FORM_FROM` | Text | `SCOVO <prova@loscovo.it>` | `SCOVO <trial@scovo.io>` | The form function |
| `RESEND_API_KEY` | **Secret** | key for loscovo.it | key for scovo.io | The form function |

Nothing secret is stored in the repository. `.env.example` lists the variables.

### The email service is not confirmed yet

A Pages Function cannot send email by itself. The function at `/api/prova` is written for **Resend**, which is a proposal, not a decision (open item 9). Until `RESEND_API_KEY` is set, a visitor who sends the form sees the error message with the contact email. No request is lost silently.

If Resend is confirmed:

1. Create a Resend account and add the domains loscovo.it and scovo.io.
2. Add the DNS records Resend shows (SPF and DKIM) in Cloudflare DNS for each domain.
3. Create one API key per domain and store it as the `RESEND_API_KEY` secret in the matching project.
4. Name Resend as a processor on the privacy page.

To use a different service, change the `sendEmail` function in `functions/api/prova.ts`. Nothing else needs to change.

## 3. Custom domains and DNS

In each project: **Custom domains**, **Set up a custom domain**.

- `scovo-it`: add `loscovo.it`, then `www.loscovo.it`.
- `scovo-en`: add `scovo.io`, then `www.scovo.io`.

If the domain's DNS is on Cloudflare, the records are created for you. If it is elsewhere, Cloudflare shows the CNAME records to add.

### www redirect

`_redirects` matches paths, not hostnames, so the `www` redirect is set in the dashboard, once per domain:

1. **Bulk Redirects** (under **Rules**), create a list with one entry:
   - Source: `www.loscovo.it`. Target: `https://loscovo.it`. Status: 301.
   - Tick: preserve query string, subpath matching, preserve path suffix.
2. Create a Bulk Redirect rule that uses the list.
3. Repeat for `www.scovo.io` to `https://scovo.io`.

Check: `curl -I https://www.loscovo.it/chi-siamo` must answer `301` with `location: https://loscovo.it/chi-siamo`.

## 4. AI crawlers must be allowed

SCOVO sells AI visibility. Its own site must be readable by AI engines. Cloudflare has settings that block AI bots or replace `robots.txt`. They must be **off** on both domains (loscovo.it and scovo.io).

In the dashboard, for each domain:

1. **Security**, **Bots** (or **Security**, **Settings**, filter by "Bot traffic"): **Block AI bots** must be **off** (or "Do not block").
2. **AI Crawl Control** (formerly AI Audit): no crawler set to **Block**.
3. **Managed robots.txt** / "Instruct AI bot traffic with robots.txt": **off**. When it is on, Cloudflare puts its own rules in front of the file from the repository.
4. **AI Labyrinth**: **off**.
5. **Bot Fight Mode**: off is safest. If it stays on, run the check below after every change.

Then run the check. It compares the live `robots.txt` with the one from the build and requests the site as each main AI crawler:

```bash
npm run build:it && npm run check:live -- https://loscovo.it dist
```

```bash
npm run build:en && npm run check:live -- https://scovo.io dist
```

Every line must start with `ok`. A `FAIL` line says which setting to look at. Run it after the first deploy and again after any change to Cloudflare security settings.

## 5. Analytics

Cloudflare Web Analytics only. It sets no cookies, so the site has no cookie banner.

In each Pages project: **Metrics**, **Web Analytics**, **Enable**. Cloudflare adds its script to the pages. The Content-Security-Policy in `public/_headers` already allows it.

Do not add any other third-party script. If a script that sets cookies is ever added, a cookie banner is required, with "Rifiuta" as easy to reach as "Accetta".

## 6. Headers and redirects

- `public/_headers`: security headers on every page, a one-year cache on hashed assets in `/_astro/`, and `noindex` on the `*.pages.dev` addresses so only the custom domains are indexed.
- `public/_redirects`: for moved pages. Empty at launch.

## 7. Before the first production deploy

- [ ] Privacy and Cookie pages have their legal text. The production build fails until they do.
- [ ] The company details line in the footer is filled in.
- [ ] The email service is confirmed and its secret is set in both projects. Send a test request from each site.
- [ ] The AI crawler check in section 4 passes on both domains.
- [ ] `TODO.md` has been read.

## 8. Roll back

**Fastest, no code change:** in the Pages project, **Deployments**, find the last good production deployment, open its menu and choose **Rollback to this deployment**. The site switches back within seconds. Do it in both projects if both are affected.

**In the repository:** revert the commit on `main` and push. Both projects rebuild.

```bash
git revert <commit>
```

```bash
git push origin main
```

A rollback in the dashboard holds only until the next push to `main`, so follow it with the revert.
