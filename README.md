# godchaserpodcast.com

The hub for **The Godchaser** — content site, discipleship platform, and front door to Bible Study Pro.

Built on Next.js 16 (App Router, TypeScript strict), Tailwind v4, and MDX. Deploys to Vercel.

> Scripture interprets Scripture.

---

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 (`globals.css` carries the design tokens)
- **Fonts:** Fraunces (display) + Inter (body), via `next/font/google`
- **Content:** MDX in `content/posts/*.mdx`, rendered with `next-mdx-remote/rsc`
- **Email capture:** Brevo (newsletter + contact, via REST API)
- **Analytics:** Vercel Analytics
- **Deployment target:** Vercel (aioniqs team if available)

---

## Local development

```bash
# Install
npm install

# Copy env template
cp .env.example .env.local
# Fill in the empty values (see "Environment variables" below)

# Run dev server (Turbopack)
npm run dev

# Production build
npm run build
npm run start
```

---

## Project structure

```
src/
  app/                       App Router pages & routes
    page.tsx                 Hub homepage (7 sections)
    library/                 The Library (blog) — index, category, post
    book/                    The Book + sample chapter
    believe/                 Statement of Faith
    believe/begin/           Gospel walkthrough for new believers
    about/                   About Ev + the ministry
    contact/                 Contact form
    api/
      subscribe/             Brevo newsletter endpoint
      contact/               Brevo contact form endpoint
    opengraph-image.tsx      OG card for /
    library/[slug]/
      opengraph-image.tsx    Per-post OG card
    sitemap.ts               Sitemap (auto-built from posts)
    robots.ts                Robots
  components/
    site-header.tsx          Sticky nav
    site-footer.tsx          Footer (4 columns)
    newsletter-signup.tsx    Reused on homepage + inside posts
    contact-form.tsx
    home/                    Homepage section components
    library/                 Library-specific components
    mdx/                     MDX render components (Scripture, Callout, CTAs)
  lib/
    site.ts                  Single source of truth: nav, platforms, beliefs
    posts.ts                 MDX frontmatter loader (file-based)
    book.ts                  Loader for the sample chapter
    brevo.ts                 Brevo REST client
    split-mdx.ts             Splits a post body for inline-CTA injection
content/
  posts/                     12 starter posts (.mdx) — 1,400–1,700 words each
  book/chapter-1.mdx         Sample chapter rendered on /book
```

---

## Authoring a new blog post

1. Create `content/posts/<slug>.mdx`.
2. Add frontmatter:

   ```yaml
   ---
   title: "Post title"
   slug: "post-slug"
   category: "Foundations"          # or Doctrine | The Chase | Tools
   tags: ["bible", "study"]
   excerpt: "One-sentence summary."
   publishedAt: "2026-05-15"
   featured: false
   cta: "bsp"                       # or "book" | "newsletter" | null
   ---
   ```

3. Write the body in MDX. Available custom components:
   - `<Scripture verse="John 3:16">...</Scripture>` — gold-bordered pull quote
   - `<Callout>...</Callout>` — emphasized aside
   - Optional inline marker: `{/* inline-cta */}` to choose where the
     mid-post CTA appears. If omitted, the page auto-injects one around
     the 60% mark.

4. The post lands automatically at `/library/<slug>`, on its category page,
   and in the sitemap.

---

## Environment variables

Copy `.env.example` → `.env.local` for local dev, and configure the same
variables in Vercel for production.

| Variable                       | Purpose                                                                  |
| ------------------------------ | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`         | Public canonical URL. e.g. `https://godchaserpodcast.com`                |
| `NEXT_PUBLIC_BSP_URL`          | URL to Bible Study Pro. Default: `https://bible.godchaserpodcast.com`    |
| `BREVO_API_KEY`                | Brevo API v3 key (from Brevo → SMTP & API)                               |
| `BREVO_NEWSLETTER_LIST_ID`     | Numeric ID of the newsletter list                                        |
| `BREVO_CONTACT_LIST_ID`        | Numeric ID of the contact list                                           |
| `CONTACT_INBOX_EMAIL`          | Where contact-form messages are emailed                                  |
| `CONTACT_FROM_EMAIL`           | Verified Brevo sender (e.g. `noreply@godchaserpodcast.com`)              |

### Brevo setup checklist

1. Sign in at app.brevo.com → **SMTP & API** → **API Keys** → create one.
2. Go to **Contacts** → **Lists** → create two lists:
   - "Godchaser — Newsletter"
   - "Godchaser — Contact"
   - Note each list's numeric ID and paste into env vars.
3. **Senders** → add and verify `noreply@godchaserpodcast.com` once DNS
   has been migrated (Brevo will walk you through SPF + DKIM TXT records).
4. **Test:** subscribe with your own email at `/` → confirm it shows up in
   the Newsletter list. Submit the contact form → confirm both the list
   entry and the inbound email to `CONTACT_INBOX_EMAIL`.

---

## Deploying to Vercel

1. Push to the GitHub repo (`EvanEEvans/godchaserpodcast`):
   ```bash
   git remote add origin https://github.com/EvanEEvans/godchaserpodcast.git
   git push -u origin main
   ```

2. Go to vercel.com → **Add New… → Project** → import the repo.
   Choose the **aioniqs** team if you have access; otherwise your personal
   scope is fine.

3. Vercel detects Next.js automatically. No build overrides needed.

4. **Environment variables** — add every value from `.env.example` under
   Settings → Environment Variables (Production + Preview).

5. Deploy. You'll get a `*.vercel.app` preview URL — smoke test before DNS.

### Smoke test on the preview URL

- Homepage renders with all 7 sections
- Library lists all 12 posts; clicking opens each one
- Newsletter signup at the bottom of the homepage returns a success message
  (confirm Brevo received it)
- Contact form returns success and `CONTACT_INBOX_EMAIL` gets the email
- `/believe/begin` reads well end-to-end
- OG cards: paste a post URL in Twitter/X compose or use
  [opengraph.xyz](https://www.opengraph.xyz/) — both card and home should
  render the gold-on-dark generated image

---

## DNS migration — godchaserpodcast.com

The current `godchaserpodcast.com` lives on Namecheap shared hosting (cPanel,
`premium55`). When you flip DNS to Vercel, the cPanel site stops serving.

### Plain-English steps

1. **Back up the current site FIRST.** Open Namecheap → Hosting → cPanel →
   File Manager (or SFTP) and download everything under
   `/home/evanzs/godchaserpodcast.com/`. Keep that zip somewhere safe.
2. In Vercel, open the project → **Settings → Domains** → **Add domain**
   → `godchaserpodcast.com`. Vercel will tell you which DNS records to add.
3. In Namecheap → **Domain List → godchaserpodcast.com → Manage → Advanced
   DNS**:
   - Remove the current A records that point to Namecheap shared hosting
     (those with `premium55.web-hosting.com` or similar).
   - Add the records Vercel showed you. Typically:
     - `A` `@` → `76.76.21.21` (verify in the Vercel UI)
     - `CNAME` `www` → `cname.vercel-dns.com`
4. Wait 5–30 minutes for DNS propagation. Vercel's status will flip
   from "Invalid Configuration" to a green check.
5. **SSL** is automatic. Vercel provisions a free certificate within
   minutes once DNS resolves.
6. Add `www.godchaserpodcast.com` as a separate domain in Vercel and set
   it to redirect to the apex (or vice versa — Vercel UI handles this).
7. Final check: open `https://godchaserpodcast.com` in an incognito
   window. If it loads the new site, you're done.

### If something breaks during DNS migration

- Vercel keeps your previous deployment serving on its `*.vercel.app`
  domain; only the custom domain resolution changes. You can repoint DNS
  back to cPanel if you need to roll back.
- The cPanel backup gives you a paper trail of everything that was there.

---

## What needs Ev's input before launch

1. **Brevo:** create the two lists, paste IDs into Vercel env vars, verify
   the `noreply@godchaserpodcast.com` sender.
2. **Book purchase links:** update the "Buy the book" button on `/book`
   with the real Amazon (and any other) URLs. Right now it points to
   `godchaser.faith` as a placeholder.
3. **About photo (optional):** if you want a portrait on `/about`, drop a
   square JPG/PNG at `public/about-ev.jpg` and ping me to wire it in.
4. **Tour video (optional):** the homepage has a "Watch the 90-second
   tour" button that currently links to `/about`. If you record one,
   send the YouTube URL and I'll swap it for a modal embed.
5. **Statement of Faith verbatim text:** if you want the existing
   `faith.html` body preserved word-for-word instead of the versions in
   `src/lib/site.ts > BELIEFS`, send the file and I'll replace.
6. **Sample chapter:** I drafted a placeholder Chapter 1 at
   `content/book/chapter-1.mdx` in Ev's voice. Replace with the actual
   first chapter from the book when ready.
7. **DNS cutover window:** pick a low-traffic moment for the Namecheap
   DNS swap so the current cPanel site goes dark cleanly.

---

## Doctrinal / editorial guardrails

- Every claim should be checkable in Scripture.
- No song lyrics, no full poems, no quotes longer than ~14 words from
  copyrighted books.
- No fabricated testimonials.
- No denominational labels.
- No emojis in headlines or body prose.
- No stock photos of "diverse people praying" — abstract SVGs only.
- Privacy is a feature: no tracking beyond Vercel Analytics.

---

© The Godchaser Ministry. *Soso lobi.*
