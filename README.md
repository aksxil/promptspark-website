# PromptSpark website

Official website for **PromptSpark**, the Android AI prompt library app (`in.aksxil.promptspark`), developed by
Aksxil Studios. It's a fully static Next.js site (no server, no database, no secrets) intended for
`https://promptspark.pages.dev` on Cloudflare Pages.

Pages: Home, Features, Categories, About, Support (FAQ + contact), Privacy Policy, Terms and Conditions, Data
deletion, plus `sitemap.xml`, `robots.txt`, a web manifest, share images and (optionally) `app-ads.txt`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000 with hot reload
```

Preview the production build exactly as it will be deployed:

```bash
npm run build        # writes the static site to out/
npm start            # serves out/ at http://localhost:3000
```

## Quality checks

```bash
npm run qa           # typecheck + lint + build + link/SEO check of every page
npm run check:facts  # compares counts and sample prompts with ../AiPhoto (skipped if not present)
```

`check:links` verifies every internal link and asset, page titles, descriptions, canonical URLs, Open Graph images,
one `<h1>` per page, and unique ids.

## Keeping content accurate

- App facts (categories, counts, Pro collections) live in `content/site-facts.ts`; Free sample prompts in
  `content/sample-prompts.ts`. They're copied from the app's library. Run `npm run check:facts` after the app's library
  changes; it also fails if a sample is a Pro prompt.
- Never publish Pro prompt text, ratings, reviews or download numbers.
- Pro is **not available to buy**. Update Home, Features, Support, Terms, Privacy and Data deletion before that changes.
- Legal pages show `SITE.legalUpdated` (`lib/site.ts`). Change it whenever a legal page changes. Have the Terms
  reviewed by a qualified person before relying on them.
- Real app screenshots can be added later (e.g. in `public/screenshots/`) and shown on Home and Features.

## app-ads.txt (AdMob)

`npm run build` runs `scripts/generate-app-ads.mjs` first. It writes `public/app-ads.txt` only when the
`ADMOB_PUBLISHER_ID` environment variable is set to your AdMob publisher ID (`pub-` + 16 digits; AdMob ›
Settings › Account information). Without it, no `app-ads.txt` is published. Google's sample ID is rejected. The
generated file is git-ignored. Set `REQUIRE_APP_ADS=true` to make a missing value fail the build.

## Deploy to Cloudflare Pages (free)

The site must not be deployed without the owner's approval. Two options:

**A. Connect a Git repository (recommended).** Push this folder to its own GitHub/GitLab repository, then in the
Cloudflare dashboard › Workers & Pages › Create › Pages › Connect to Git:

| Setting | Value |
| --- | --- |
| Project name | `promptspark` (gives `promptspark.pages.dev` if the name is free) |
| Production branch | `main` |
| Framework preset | None (or "Next.js (Static HTML Export)") |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variables | `NODE_VERSION` = `22`; `ADMOB_PUBLISHER_ID` = your `pub-…` ID (optional, for app-ads.txt) |

Node 22 is also pinned by `.node-version`. Create a **Pages** project, not a Worker: the Workers "Import a
repository" flow runs `npx wrangler deploy`, which detects Next.js, tries to set up OpenNext, and fails with
`.next/standalone/.next/server/pages-manifest.json not found`. This site needs no `wrangler.jsonc`,
`open-next.config.ts`, or `@opennextjs/cloudflare`; leave the Pages "Deploy command" empty.

**B. Direct upload from your computer.**

```bash
npm run build
npx wrangler@3 login
npx wrangler@3 pages deploy out --project-name promptspark
```

Security and cache headers come from `public/_headers` (CSP, HSTS, no framing, PNG type for share images, long
caching for hashed assets).

## After the first deployment

1. Open `https://promptspark.pages.dev/` and every page; check `/sitemap.xml`, `/robots.txt` and, if configured,
   `/app-ads.txt`.
2. Google Play Console › App content › **Privacy policy**: `https://promptspark.pages.dev/privacy/`.
3. Play Console › Store settings › **Website**: `https://promptspark.pages.dev/`, **Email**: `aksx3u@gmail.com`.
4. AdMob: once the app is published and linked, AdMob verifies `https://promptspark.pages.dev/app-ads.txt`
   (it must be on the developer website listed in Play Console).
5. Optional: add the site to Google Search Console and submit the sitemap.
6. When the app is live on Google Play, replace "Coming soon to Google Play" with the real store link and Google
   Play badge (follow Google's badge guidelines).
