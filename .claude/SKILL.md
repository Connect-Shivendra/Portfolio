# SKILL: shivendra.io — Project Context & Knowledge Base
> Read this at the start of every session. Saves reading 50+ files.
> Last updated: 2026-04-27 (End of Session 7 — contact form fix, /blog listing page rebuilt with search & filter)

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
10. [ ] Add Google site verification to layout.js

**Security:**
11. [ ] Add rate limiting to contact form API route
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

### [Highest] Modernise Website Icons (with Animations)
**Task:** Replace current icons across the site with a modern icon set and add subtle animations.

**Recommended approach:**
- **Icon library:** Switch to [Lucide React](https://lucide.dev/) — lightweight, tree-shakable, consistent stroke-based design that feels modern in 2025/26. Alternative: [Phosphor Icons](https://phosphoricons.com/) for more expressive weight variants.
- **Swap out:** Any existing `react-icons` or inline SVGs → Lucide equivalents.
- **Animations:** Use motion/react for:
  - Hover micro-animations on nav/CTA icons (scale + rotate or color shift).
  - Entrance animations on section icons (fade-in + slide-up on scroll).
  - Skill/tech icons: staggered entrance in the Skills section.
- **Approach:** Keep animations subtle (120–200ms, ease-out). Avoid animating every icon simultaneously — use stagger groups by section.

### [High] Improve Blog Visual Formatting
**Task:** Redesign the blog post layout for better readability and visual hierarchy.

**Areas to address:**
- Typography scale: tighten heading sizes, improve line-height and `max-width` for body text (~65ch).
- Add a sticky table of contents for long posts.
- Syntax highlight code blocks (verify Prism/Shiki theme matches dark/light mode).
- Pull-quote / callout components for key insights.
- Reading time + progress bar at the top of each post.
- Improve mobile reading experience (padding, font size, tap targets).
- Better image captions and figure styling.

### [Medium] Review & Update Blog Content
**Task:** Audit existing blog posts and refresh content to reflect current news and technology.

**Approach:**
- Cross-reference each post against recent developments (check Medium, Dev.to, official docs changelogs).
- Flag posts that reference deprecated APIs, outdated versions, or superseded practices.
- Add "Last updated" timestamps and a short "What changed" note at the top of refreshed posts.
- Source new post ideas from trending Medium tags relevant to the site's focus areas.
- Aim for at least one new or refreshed post per month.
