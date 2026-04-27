# SKILL: shivendra.io — Project Context & Knowledge Base
> Read this at the start of every session. Saves reading 50+ files.
> Last updated: 2026-04-27 (End of Session 10 — luxurious motion animations on blog posts and work pages)

---

## 0. How to Use This File

**Claude.ai chat:** Upload this file and say:
> "I'm working on my personal site shivendra.io — read the SKILL.md for context. Today I want to [task]."

**Claude Code (VS Code):** Copy this file to:
`C:\Users\Shivendra\Desktop\Website\Portfolio-main\.claude\SKILL.md`
Claude Code auto-loads `.claude\` on project open — no manual add needed.

**Update this file:** At the end of each session ask Claude to update it. Download and replace.

---

## 1. Who & What

| Field | Value |
|---|---|
| Owner | Shivendra Singh |
| Role | Head of Data, Information & AI |
| Location | Sydney, Australia |
| Site | https://shivendra.io |
| Repo | https://github.com/Connect-Shivendra/Portfolio (public) |
| Local path | `C:\Users\Shivendra\Desktop\Website\Portfolio-main` |
| Shell | PowerShell (Windows 11) |
| Node | v20.19.2 |
| Aesthetic | Dark navy (#0D1117) / warm off-white (#F4F3F0) / gold (#C9A84C) |

---

## 2. Daily Dev Commands

```powershell
cd C:\Users\Shivendra\Desktop\Website\Portfolio-main

npm run dev                    # start dev server → localhost:3000
npm test                       # run jest tests
npm test -- --watch            # watch mode
npm test -- --coverage         # coverage report

# Git — ALWAYS branch, never commit direct to main
git checkout -b feature/name
git add .
git status                     # confirm .env.local NOT listed
git commit -m "feat: description"
git push origin feature/name   # creates Vercel preview URL

# When preview looks good
git checkout main
git merge feature/name
git push origin main           # shivendra.io updates in ~1 min

# Rollback
vercel rollback                # npm i -g vercel first
# OR: Vercel dashboard → Deployments → find last good → ... → Promote
```

---

## 3. Tech Stack

| Layer | Current |
|---|---|
| Framework | Next.js 15.5.15 App Router |
| Language | JavaScript JSX |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Fonts | Inter (body) + Sora (headings) via next/font. font-Ovo aliased → Sora in tailwind.config |
| Blog | gray-matter + @mdx-js/mdx evaluate() — next-mdx-remote FULLY REMOVED |
| Animation | motion v12 — import from `motion/react` NOT `framer-motion` |
| Forms | Web3Forms + react-google-recaptcha (keys in .env.local) |
| Analytics | @vercel/analytics |
| Testing | Jest + @testing-library/react |
| Deployment | Vercel → shivendra.io |
| PWA | manifest.json display:standalone — installs as desktop app from Chrome/Edge |

---

## 4. Complete File Map

```
Portfolio-main\
  .env.local                    NEVER committed — API keys
  .claude\SKILL.md              This file — auto-loads in Claude Code
  package.json                  @mdx-js/mdx, no next-mdx-remote
  next.config.mjs               @next/mdx, CSP header, turbopack root
  tailwind.config.mjs           darkHover/lightHover/darkTheme remapped. font-Ovo aliased
  mdx-components.jsx            Required by @next/mdx (project root)
  vercel.json                   installCommand: npm install --legacy-peer-deps
  manifest.json                 Updated: gold theme-color, correct name/description

  app\
    page.js                     HOME — async server component; fetches blogs via getAllBlogs(), renders HomeClient
    HomeClient.jsx              'use client' shell — receives blogs prop, activeSection state, hash routing, Suspense wrapper
    layout.js                   Shivendra Singh metadata, data-scroll-behavior
    globals.css                 Gold/navy token system + all component classes

    components\
      Header.jsx                ANIMATED HERO — particles, word reveal, rotating ring, counters, shimmer
      Navbar.jsx                Thought Leadership nav item. Gold underline hover. Animated mobile drawer
      About.jsx                 Gold photo glow, summary-card class, tools grid gold hover
      ThoughtLeadership.jsx     NEW — 6 POV cards replacing Services
      Blogs.jsx                 Gold category pills, gold pagination, card lift
      Work.jsx                  Gold arrow buttons on cards
      Contact.jsx               Env vars, gold theme. Phone validation fixed S7 (truly optional now)
      Footer.jsx                Column layout, gold bar, 2026 copyright
      BlogPostPage.jsx          Gold 404, button-primary, clean errors. Passes relatedPosts prop
      BlogPostClient.jsx        Progress bar (useScroll+useSpring), related posts section (3 cards)
      MDXContentServer.jsx      @mdx-js/mdx evaluate() — no next-mdx-remote
      Timeline.jsx              motion/react, all colors use CSS vars (no Tailwind dark: classes)
      ErrorBoundary.jsx         Unchanged
      ScrollToTopWrapper.jsx    Unchanged

    utils\
      mdx-utils.js              No next-mdx-remote. getBlogData/getAllBlogs/getCategories/getBlogSlugs

    api\
      blogs\route.js            Unchanged, working
      blogs\[slug]\route.js     Unchanged, working

    blog\
      page.js                   REBUILT S7 — proper listing page. Search (title/excerpt/category),
                                category filter chips (BlogsList), result count, empty state,
                                12-per-page pagination, AnimatePresence grid transitions
      [slug]\page.js            Fetches blog + relatedPosts (same category first, fills to 3)

    services\
      page.jsx                  Redirects → /#thought-leadership
      [8 sub-pages]             All redirect → /#thought-leadership (cleaned up S4)

    work\ [6 company pages]     motion/react, whileInView scroll reveal, gold back btn, gold-divider,
                                card-bg CTA, button-primary → /#contact. No framer-motion, no useEffect
    impact\page.jsx             NEW — "Results That Move the Needle". Counter bar + 6 company cards.
                                Gold left-border cards, stat rows, award badge, CTA → /#contact

  content\blogs\                42 .mdx posts (39 original + 3 new)
    agentic-ai-data-leaders.mdx         NEW 2026-04-20
    ai-governance-trust-paradox.mdx     NEW 2026-04-10
    data-contracts-ai-reliability.mdx   NEW 2026-03-28

  assets\assets.js              serviceData REMOVED (S4). workData links intact. Unused icons removed.
  __tests__\site.test.js        Jest test suite
```

---

## 5. Environment Variables

`.env.local` (project root, never committed):
```
NEXT_PUBLIC_WEB3FORMS_KEY=424597d8-12b9-49ee-ad7d-5917b112e1e0
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdZamlrAAAAAAJN_G91ZV6ecoVf8HTHJdFe3oXHk
```
Also set in Vercel → Portfolio → Settings → Environment Variables (Production + Preview + Development).

---

## 6. Theme Tokens (globals.css)

```css
:root {
  --background: #F4F3F0;    --foreground: #1A1A2E;
  --accent-color: #C9A84C;  --accent-dark: #A8873A;   --accent-light: #E0C070;
  --on-accent:    #1A1A2E;  /* text ON gold buttons — dark navy for WCAG AA contrast */
  --card-bg: #FFFFFF;       --section-bg: #F4F3F0;    --hover-bg: #ECEAE5;
  --text-primary: #1A1A2E;  --text-secondary: #5A5A7A;
  --border-color: rgba(201,168,76,0.2);
}
.dark {
  --background: #0D1117;    --foreground: #E8E8F0;
  --accent-color: #C9A84C;  --accent-dark: #A8873A;
  --on-accent:    #1A1A2E;  /* same in dark — dark text on gold always passes */
  --card-bg: #161B22;       --section-bg: #0A0F14;    --hover-bg: #1C2230;
  --text-primary: #E8E8F0;  --text-secondary: #8B8BA7;
  --border-color: rgba(201,168,76,0.15);
}
```

**Reusable component classes:**
`.heading-eyebrow` `.heading-primary` `.gold-divider` `.button-primary` `.button-secondary`
`.card-component` `.summary-card` `.blog-card` `.blog-prose`

---

## 7. Blog System

**Rendering chain:**
`mdx-utils.js` → `getBlogData()` → `MDXContentServer.jsx` → `@mdx-js/mdx evaluate()` → renders

**Frontmatter format:**
```yaml
---
title: "Post Title"
date: "2026-04-20"
category: "Data Governance"
excerpt: "One sentence summary."
coverImage: "/blog/image.jpg"
author: "Shivendra Singh"
readTime: "8 min read"
---
```

**42 posts — topics covered:** data strategy, governance, mesh, MDM, TOGAF, cloud architecture,
BI vs analytics, CISSP for leaders, ethical AI, predictive analytics, Snowflake, observability,
quality, sharing, monetisation, ROI, DAMA DMBOK, Australian govt frameworks,
agentic AI (new), AI governance trust paradox (new), data contracts (new).

**Topics to write next:**
- GenAI in data pipelines
- Vector databases and RAG for enterprise
- AI-ready data foundations
- Real-time data mesh in practice
- The CDO's guide to responsible AI

---

## 8. Navigation

```
Home | About | Thought Leadership | Blog | My Work | Impact | Contact
```

Section IDs (used in page.js SECTIONS array + hash routing):
```js
const SECTIONS = ['about', 'thought-leadership', 'blogs', 'work', 'contact'];
```

---

## 9. Animation Patterns

```jsx
// ALWAYS import from motion/react — never framer-motion
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react'

// Standard scroll reveal (use on every section)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
/>

// Word-by-word text reveal (used in Header)
words.map((word, i) => (
  <motion.span
    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    className="inline-block mr-[0.25em]"
  />
))

// Gold button shimmer
<motion.div
  animate={{ x: ['-100%', '200%'] }}
  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
/>

// Gold glow hover on cards
whileHover={{ y: -4, transition: { duration: 0.2 } }}
// + CSS: hover:border-[var(--accent-color)] hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]
```

---

## 10. Security Status

| Item | Status |
|---|---|
| API keys in env vars | ✅ Done |
| next-mdx-remote removed | ✅ Done — was Vercel vulnerability |
| Content Security Policy | ✅ In next.config.mjs |
| manifest.json updated | ✅ Gold theme-color |
| Preconnect hints | ✅ Added in layout.js (fonts.gstatic, wikimedia, gstatic, google) |
| Accessibility (WCAG AA) | ✅ 100/100 — all color contrast fixed via --on-accent token |
| npm audit | ⚠️ 7 vulns remain: 4 low (jest-jsdom chain, test-only) + 3 moderate (postcss inside Next.js bundle — unfixable without Next.js upstream fix; NOT fixable via npm audit fix --force which would downgrade Next to v9) |
| Google site verification | ⚠️ Placeholder in layout.js |
| Contact form rate limiting | ⚠️ Not implemented |

---

## 11. Remaining Work (priority order)

**Design:**
1. [x] Update work sub-pages (`app/work/*.jsx`) — gold/navy tokens ✅ S5
2. [x] Add reading progress bar on blog posts ✅ S5
3. [x] Add related posts at bottom of each blog post ✅ S5
4. [x] Build `/impact` — showcase measurable outcomes (Woolworths $200k→$80k, EVT $1.7M, etc.) ✅ S6

**Bug fixes:**
5. [x] Contact form phone field — was validated as required but labelled optional ✅ S7
6. [x] `/blog` listing page — had single-post code on non-dynamic route (broken) ✅ S7
   - Rebuilt with text search, category filter, result count, empty state, 12-per-page pagination

**Performance:**
7. [x] Refactor `app/page.js` — server component calls `getAllBlogs()` directly, passes blogs
       to new `app/HomeClient.jsx` ('use client' shell). Blog cards now SSR'd. ✅ S8

**Content:**
8. [ ] Write 5 more blog posts (see topics in §7)
9. [ ] Refresh 5 existing posts — update 2024 stats to 2026, more conversational
10. [ ] Add Google site verification to layout.js — need verification code from Google Search Console (add as `verification` field in metadata object)

**Security:**
11. [x] Add rate limiting to contact form API route ✅ S9 — created `/api/contact/route.js`, 5 req/hr per IP, Contact.jsx now POSTs to `/api/contact` instead of directly to Web3Forms
12. [ ] npm vulns: wait for Next.js to ship patched postcss bundle (DO NOT run npm audit fix --force)

---

## 12. Vercel

| Field | Value |
|---|---|
| Team slug | connect-shivendras-projects |
| Project | portfolio |
| Install command | npm install --legacy-peer-deps (set in dashboard) |
| MCP token | 403 — needs reconnect at vercel.com/account/tokens |
| Production | shivendra.io + www.shivendra.io |
| Auto-deploy | Push to main → live in ~1 min |

---

## 13. Session Log

| Date | What was done |
|---|---|
| 2026-04-26 S1 | Full audit. Security issues. SKILL.md v1. |
| 2026-04-26 S2 | Git from zip. npm install. Dev workflow. Security commits. |
| 2026-04-26 S3 | **Removed next-mdx-remote** (Vercel block). @mdx-js/mdx. Gold/navy live on shivendra.io. CSP. Hero animated (particles/word-reveal/counters/shimmer). Navbar modernised. Thought Leadership section built. Footer redesigned. All components gold/navy. 3 new blog posts. |
| 2026-04-27 S4 | **Cleanup + Lighthouse.** Deleted Services.jsx. All 8 /services/* sub-pages replaced with server redirects → /#thought-leadership. Removed serviceData + unused icon imports from assets.js. Ran Lighthouse (desktop + mobile). **Accessibility 96→100** via --on-accent token (#1A1A2E on gold, 7.5:1 ratio) applied to button-primary, blog-category-tag, Navbar, Header, Blogs, Footer. Fixed aria-label mismatch on "Get in Touch" button. Added preconnect hints for wikimedia/gstatic/google. npm audit: 7 vulns remain (unfixable without breaking changes). |
| 2026-04-27 S5 | **Work sub-pages + Blog UX.** All 6 `app/work/*.jsx`: framer-motion→motion/react, removed broken useEffect back-button hook, replaced staggerContainer variant system with per-section `whileInView`, gold back button, gold-divider under h1, card-bg CTA with border, "Contact Me Today" now a working Link→/#contact. Timeline.jsx: motion/react + all CSS vars (no dark: classes). **Reading progress bar**: fixed 4px gold bar via useScroll+useSpring in BlogPostClient. **Related posts**: server-side in blog/[slug]/page.js — same-category first, fills to 3 from recent; rendered as blog-card grid in BlogPostClient below article. |
| 2026-04-27 S6 | **Impact page.** Built `app/impact/page.jsx` — standalone "Results That Move the Needle" page. Hero + 3-stat animated counter bar (Counter component from Header pattern) + 6 company impact cards (grid, 2-col desktop/1-col mobile) with gold left-border accent, industry tag pills, stat/milestone metric rows, full-case-study links, award badge for EVT. Get in Touch CTA → /#contact. Added "Impact" to Navbar NAV_ITEMS with route-aware handleNavClick (sectionId.startsWith('/') → router.push directly). |
| 2026-04-27 S7 | **Bug fixes + blog UX.** Contact form: phone validation changed from `!fields.phone \|\|` to `fields.phone &&` — now truly optional. `/blog` listing page: old code had single-post logic (`params?.slug`) on a non-dynamic route, rendering a blank/error page. Rebuilt as a proper listing page: fetch from `/api/blogs`, useMemo filtering (text search on title/excerpt/category + category chips from BlogsList), result count label, empty state with clear-filters button, 12-per-page paginator, AnimatePresence grid fade between pages. Committed and pushed to main. |
| 2026-04-27 S8 | **Layout fix + SSR refactor.** About section: added `max-w-6xl mx-auto` to content flex div so photo+text block is properly centred under the centred heading (was visually left-anchored). page.js refactor: converted to async server component that calls `getAllBlogs()` directly and passes blogs to new `app/HomeClient.jsx` ('use client' shell with Suspense+useSearchParams). Blog cards are now in initial SSR HTML, not client-fetched. |
| 2026-04-27 S9 | **Rate limiting + Icons + Blog UX.** Contact form now proxies via `/api/contact/route.js` (IP rate limit: 5/hr). Installed lucide-react; replaced all PNG icon assets with Lucide components site-wide (Navbar, Header, About, Work, Blog, BlogPostClient, Impact). About info icons get `whileHover` rotate+scale. Comprehensive blog prose redesign in globals.css (gold bullets, pull-quote blockquotes, dark code blocks, styled tables, figure captions, mobile fixes). New `TableOfContents.jsx` sticky sidebar for blog posts (xl+, IntersectionObserver active tracking). BlogPostPage extracts headings server-side; BlogEnhancer auto-generates heading IDs. |
| 2026-04-27 S10 | **Luxurious motion animations — blog posts + work pages.** Created `WorkPageLayout.jsx` (shared layout for all 6 work pages): company photo hero with dark overlay + animated gold radial glow, word-by-word title blur-reveal, scaleX gold divider, slide-in back button, achievement cards stagger in from left with spring gold check bubbles + hover card glow, tech pills stagger fade with hover gold highlight, section headings with animated scaleY gold left border, CTA shimmer sweep + pulsing accent line + whileHover button glow. All 6 `app/work/*.jsx` refactored to pure data components. `BlogPostClient.jsx` rebuilt: word-by-word title reveal, category tag spring scale-in, cover image Ken Burns entrance (scale 1.04→1) + one-shot gold shimmer sweep, excerpt animated left border scaleY, meta row stagger, blog content fade-up, back button whileHover, related cards stagger + cover zoom on hover. |
| 2026-04-27 S11 | **Bug fixes — blog layout + hover.** (1) Blog post content rendering in wrong grid column: `BlogPostClient` returned Fragment `<>` so each child became a separate grid item in `BlogPostPage`'s `xl:grid-cols-[1fr_240px]` container — `<nav>` got col-1, `<article>` got the 240px TOC column. Fixed by wrapping BlogPostClient return in `<div>` so it's a single grid item. (2) ThoughtLeadership card hover flicker: `whileHover={{ y: -4 }}` moved card upward, pushing its bottom boundary above cursor → hover lost before link could be clicked. Fixed by replacing y-translation with `whileHover={{ boxShadow: '...' }}` (no movement). Also fixed body text reveal: was using `motion.p` with `height:0` initial + `whileHover` (unreachable when collapsed) → replaced with CSS `max-h-0 group-hover:max-h-48 transition-[max-height]` which expands downward (cursor stays within bounds). |
| 2026-04-27 S12 | **Bug fix — TOC anchor links not scrolling.** Two independent failures: (1) `MDXContentServer.jsx` custom `h2`/`h3` components destructured only `{ children }`, silently dropping the `id` prop that `rehype-slug` adds — headings rendered with no `id` attribute. Fixed by accepting `id` explicitly and applying it. (2) `BlogEnhancer.jsx` (fallback DOM-based ID injection + Prism syntax highlighting + copy buttons) was never mounted anywhere — it was exported but never imported. Fixed by importing and rendering it in `BlogPostClient.jsx`. Both fixes together ensure TOC `#anchor` links resolve to real DOM elements and the page scrolls correctly. |
| 2026-04-27 S13 | **CV data enrichment — site-wide content update.** Created 7 persistent memory files (user_identity, user_role_camden, user_role_evt, user_role_woolworths, user_roles_early, user_skills, user_achievements) from CV PDF + detailed user-provided context. Updated: `assets.js` infoList (specific tech stack, both AWS certs, hard metrics); `About.jsx` bio (current role, $1.7M/250 users/WooliesX metrics); `Header.jsx` subtitle (accurate current title and mandate); `Impact` page (Camden 18 use cases + first-in-AU open data, EVT dual-award badge, 13+ years copy); Camden Council work page (3 teams, all 8 projects with specifics, vendor procurement frameworks); EVT work page (both awards, Kimball methodology, negotiation wins — 10% Tableau/8% Snowflake/30% vendor, Telstra partnership, CoE training programs, CapEx memo process); Woolworths work page (Tequila PySpark detail, $120k/month Redshift saving, Proximity, Apple Wallet, KPMG remediation detail). |

---

## 14. Next Session Prompt

> Copy-paste this to start the next session:

```
I'm working on my personal site shivendra.io — read .claude/SKILL.md for full context.

Today I want to work on the next items in the remaining work list (§11).
```

---

## 15. Next Priority: Refactor app/page.js (Server Component)


**Why:** `app/page.js` is currently `'use client'` and fetches all 42 blog posts at runtime via
`fetch('/api/blogs')`. This means: (1) blank content on first paint until the fetch resolves,
(2) blog cards not SSR'd so they're invisible to search engines, (3) unnecessary client JS bundle.

**Goal:** Move blog fetching to the server. Keep only the hash-routing/section-switching
logic on the client.

**Approach — split into two files:**

```
app/page.js          → Server component (no 'use client')
                       - Calls getAllBlogs() directly (server-side, cached)
                       - Passes blogs[] as prop to HomeClient
                       - No hooks, no state

app/HomeClient.jsx   → 'use client' shell  (new file)
                       - Receives blogs prop
                       - Keeps activeSection state + hash-routing useEffect
                       - Renders Navbar, Header, About, ThoughtLeadership,
                         Blogs (with blogs prop), Work, Contact, Footer
                       - Keeps the Suspense wrapper for useSearchParams
```

**Key constraint:** `useSearchParams()` requires Suspense — keep the existing Suspense
fallback pattern, just move it into HomeClient.

**Files to touch:**
- `app/page.js` — rewrite as async server component, import HomeClient
- `app/HomeClient.jsx` — new file, paste current HomeContent logic, accept blogs prop
- No changes needed to any child component

**Validation:** After refactor, `curl http://localhost:3000 | grep "blog-card"` should return
matches (blog cards in the HTML, not just in JS). Before the refactor it returns nothing.
```

---

## 16. Improvement Backlog

### [Highest] Modernise Website Icons (with Animations) ✅ S9
**Done:** Installed `lucide-react@1.11.0`. Replaced all PNG icon assets with Lucide components:
- Navbar: Sun/Moon (dark toggle), Menu, X (close), ArrowRight (CTA)
- Header: ArrowRight (Say Hello), Download (CV)
- About: Code2/GraduationCap/Briefcase for info cards — with `whileHover={{ rotate: 8, scale: 1.1 }}` animation
- Work: ArrowUpRight (card arrow)
- Blog listing: Search, X (clear)
- BlogPostClient: ArrowLeft (back nav, both instances)
- Impact: Check (metrics), ChevronRight (case study link)
- BlogEnhancer copy button: kept as DOM-injected SVG strings (imperative, can't use React components)
- Logo images (logo/logo_dark) and tool logos kept as Image (brand assets)

### [High] Improve Blog Visual Formatting ✅ S9
**Done:**
- `globals.css`: comprehensive `.blog-prose` redesign — 17px body text, 1.85 line-height, gold bullet dots on ul, pull-quote blockquotes (gold left border + tinted background), always-dark terminal-style code blocks (`#0d1117`), styled tables (gold header, striped rows), figure/figcaption support, callout class, scroll-margin-top for sticky nav, mobile font/padding improvements
- `TableOfContents.jsx`: new sticky sidebar component (xl+ only), IntersectionObserver active heading tracking, hidden on mobile
- `BlogPostPage.jsx`: extracts h2/h3 headings server-side via regex, xl grid layout `[1fr_240px]` with TOC sidebar
- `BlogEnhancer.jsx`: auto-generates heading IDs from text content for TOC anchor links

### [Medium] Review & Update Blog Content
**Task:** Audit existing blog posts and refresh content to reflect current news and technology.
- Cross-reference posts against recent developments; flag deprecated APIs, outdated versions, superseded practices.
- Add "Last updated" timestamps and short "What changed" note at top of refreshed posts.
- Aim for at least one new or refreshed post per month.

---

### [High] Device Testing & Lighthouse Audit
**Task:** Test on real devices and run Lighthouse across all key pages.
- Run Lighthouse (Chrome DevTools) on `/`, `/blog`, `/blog/[slug]`, `/impact` — capture scores for Performance, Accessibility, Best Practices, SEO.
- Test on iPhone SE (375px), iPad (768px), and 1440px desktop.
- Fix any regressions from recent changes (TOC sidebar, icon swap, blog prose).
- Target: Perf ≥ 90, Accessibility = 100, SEO = 100 on desktop; Perf ≥ 75 mobile.

---

### [High] Performance Audit — Bundle & Loading
**Task:** Audit for file size and loading performance issues.
- Identify: unused CSS rules in globals.css, redundant JS imports, uncompressed assets in `/public` and `/assets`, synchronous loading patterns.
- Run `next build` output to identify large chunks; use `@next/bundle-analyzer` if needed.
- Top 5 wins to implement (in order of impact): image optimisation (WebP/AVIF via next/image), lazy-load below-fold sections, tree-shake unused lucide icons, defer Prism.js, purge unused Tailwind classes.
- Document what was changed and why for each fix.

---

### [Medium] Colour System — Semantic Tokens & WCAG AA
**Task:** Enforce semantic naming and verify all foreground/background pairings meet WCAG AA (4.5:1 text, 3:1 UI).
- Rename raw hex tokens to semantic names (e.g. `--color-surface`, `--color-on-surface`) alongside existing tokens.
- Audit every pairing: `--text-primary` on `--background`, `--text-secondary` on `--card-bg`, `--on-accent` on `--accent-color`, etc. — in both light and dark themes.
- Structure `:root` and `.dark` so a third theme (e.g. `.high-contrast`) can be added by declaring the same token set — no component changes needed.
- Document contrast ratios in a comment block at the top of `globals.css`.

---

### [Medium] CSS Audit — Unused Rules
**Task:** Identify and remove unused CSS from the main bundle.
- Option A: Run PurgeCSS or Tailwind's built-in purge against all JSX/JS files; review what gets removed before committing.
- Option B: Audit functionality section-by-section — check each component's class usage against `globals.css` component classes.
- Priority: check `.blog-prose` variants, old `.nav-pill`, `.heading-secondary`, any leftover service-page classes.
- Do NOT remove CSS that is conditionally applied via JS (e.g. `.dark`, `:hover` states).

---

### [Medium] Sitemap Audit & Regeneration
**Task:** Audit `sitemap.xml` against current site structure and regenerate with correct priorities.
- List all routes: `/`, `/blog`, `/blog/[42 slugs]`, `/impact`, `/work/[6 slugs]`, redirect-only pages.
- Remove any stale URLs (old `/services/*` pages now redirect).
- Priority schema: primary pages (`/`, `/blog`, `/impact`) → `1.0`; section hubs (`/work`, `/blog`) → `0.8`; individual posts/work pages → `0.6`.
- `changefreq`: blog posts → `monthly`; impact/work → `yearly`; home → `weekly`.
- Output updated `public/sitemap.xml`. Verify against Google Search Console after deploy.

---

### [Medium] Google Analytics 4 Event Tracking
**Task:** Add GA4 event tracking without modifying existing functionality.
- Events to implement: nav link clicks (label = item.label), CV download click, contact form submit (success/fail), blog search interactions, category filter changes, code block copy clicks, scroll depth (25/50/75/100%) on blog posts and `/impact`.
- Use GA4 naming conventions: `navigation_click`, `file_download`, `form_submit`, `search`, `filter_select`, `code_copy`, `scroll_depth`.
- Add `gtag.js` via `next/script` with `strategy="afterInteractive"` in `layout.js`.
- Create `app/utils/analytics.js` with typed helper functions for each event.
- Add a reference doc listing all event names, parameters, and which component fires them.

---

### [Low] UX Friction Audit
**Task:** Review interface and navigation patterns; identify and fix friction points.
- Check: unclear affordances on work cards (hover reveals CTA — not obvious on touch), no visual skip-to-content link for keyboard users, blog pagination has no "go to page N" input for 42 posts, contact form has no character count on message field, mobile nav has no active-page indicator.
- For each issue: describe problem → why it matters → specific fix.
- Prioritise by user impact, not implementation effort.
- Deliver as a prioritised list with proposed fixes before implementing.
