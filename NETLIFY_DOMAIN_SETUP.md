# Netlify + GoDaddy Domain Setup

This document covers what was configured automatically, and the exact
manual steps left to connect this repo to Netlify and point
`truepathcabindia.autos` at it.

## Build configuration (already in `netlify.toml`)

| Setting | Value |
|---|---|
| Build command | `echo 'No build step required — static HTML/CSS/JS site'` |
| Publish directory | `.` (repo root) |
| Framework | None — plain HTML/CSS/JS, no bundler |

There's no compile step: `index.html`, `style.css`, and `config.js` are
served as-is. The "build command" is a harmless no-op so Netlify's build
log has something to show; you can leave it as-is.

No `[build.environment]` variables are declared. Nothing in this project
currently reads a build-time environment variable — contact info, prices,
and the EmailJS IDs all live in `config.js` and are read in the browser.
If real secrets (e.g. a production EmailJS key) are ever moved out of
`config.js`, that will require introducing an actual build step to inject
them — there isn't one today, so nothing is set up for it yet.

## Step 1 — Connect the GitHub repo to a new Netlify site

1. Log in to [app.netlify.com](https://app.netlify.com).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** as the provider and authorize Netlify if prompted.
4. Select the repository: `ambersahai/truepath-website`.
5. Netlify should auto-detect the settings from `netlify.toml`:
   - Build command: `echo 'No build step required — static HTML/CSS/JS site'`
   - Publish directory: `.`
6. Click **Deploy site**. Netlify will give you a temporary URL like
   `https://random-name-123abc.netlify.app` — the site should be live
   there within a minute or two.
7. Optional: in **Site settings → General → Site details**, click
   **Change site name** to pick a nicer subdomain (e.g.
   `truepathcab.netlify.app`). This makes Step 2 below easier to read,
   but isn't required.

From this point on, every push to `main` on GitHub will automatically
redeploy the site (that's the continuous deployment part).

## Step 2 — Add the custom domain in Netlify

1. In the Netlify site, go to **Site settings → Domain management →
   Add a domain**.
2. Enter `truepathcabindia.autos` and follow the prompts to add it as a
   **custom domain** (not "register a new domain" — you already own it).
3. Netlify will show it as "Awaiting external DNS configuration" until
   the GoDaddy records below are added and propagate.

## Step 3 — DNS records to add at GoDaddy

In GoDaddy: **My Products → truepathcabindia.autos → DNS → Manage DNS**.

First, **check for and remove** any existing default `A` record on `@`
and default forwarding GoDaddy may have set up when the domain was
purchased (these are common defaults and will conflict with the records
below).

Then add:

| Type | Host | Points to / Value | TTL |
|---|---|---|---|
| A | `@` | `75.2.60.5` | 1 hour (default) |
| CNAME | `www` | `<your-site-name>.netlify.app` | 1 hour (default) |

- The `A` record on `@` is what makes `truepathcabindia.autos` (the bare
  domain) resolve to Netlify. `75.2.60.5` is Netlify's standard load
  balancer IP for apex/root domains.
- The `CNAME` on `www` makes `www.truepathcabindia.autos` work too and
  redirect appropriately. Replace `<your-site-name>` with whatever your
  Netlify site is actually called (see Step 1.7) — e.g.
  `truepathcab.netlify.app`.
- GoDaddy may show the `A` record host as a blank field or `@` depending
  on the UI version — both mean "the root domain."

**Alternative (not used here, but worth knowing):** instead of the two
records above, you can delegate the domain's nameservers to Netlify DNS
entirely (**Site settings → Domain management → DNS panel** in Netlify
gives you 4 nameservers to set at GoDaddy under **Nameservers → Change**).
This is Netlify's recommended approach for apex domains — it lets Netlify
manage HTTPS and any future subdomains automatically. It means GoDaddy is
no longer the DNS host, only the registrar. The A/CNAME approach above
keeps DNS management at GoDaddy, which is why it's documented as the
default here.

## Step 4 — Verify and wait for HTTPS

1. Back in Netlify, click **Verify DNS configuration** (or just wait —
   Netlify polls automatically).
2. DNS propagation is usually fast (minutes) but can take up to 24–48
   hours depending on GoDaddy's TTL and ISP caching.
3. Once DNS resolves, Netlify automatically provisions a free Let's
   Encrypt SSL certificate for `truepathcabindia.autos` and
   `www.truepathcabindia.autos`. This can take a few extra minutes after
   DNS verifies — no action needed, just refresh the Domain management
   page.
4. Once the certificate shows "active," the site is live at
   `https://truepathcabindia.autos`.
