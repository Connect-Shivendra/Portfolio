# Portfolio Site — Task Tracker

## Completed

- [x] Clone and analyse repository
- [x] Review website structure and technologies
- [x] Implement blog functionality (listing, individual posts, MDX rendering)
- [x] Gold/navy theme across all components
- [x] Animated hero (particles, word reveal, rotating ring, counters, shimmer)
- [x] Navbar modernised — Thought Leadership item, gold underline, animated mobile drawer
- [x] ThoughtLeadership section (replaces Services)
- [x] Footer redesigned — column layout, gold bar
- [x] All 8 /services/* sub-pages replaced with server redirects → /#thought-leadership
- [x] Accessibility 100/100 — --on-accent token, aria-label fixes, preconnect hints
- [x] Work sub-pages — framer-motion→motion/react, whileInView, gold back btn, related links
- [x] Reading progress bar on blog posts (useScroll + useSpring, fixed 4px gold bar)
- [x] Related posts at bottom of each blog post (same-category first, fills to 3)
- [x] /impact page — "Results That Move the Needle", counter bar, 6 company cards
- [x] Contact form — phone field now truly optional (validation skips empty value)
- [x] /blog listing page — rebuilt from broken single-post code into proper listing page
      with text search, category filter, result count, empty state, 12-per-page pagination

## Up Next (priority order)

- [ ] Refactor app/page.js — make server component, move blog fetch server-side
      Extract 'use client' logic into app/HomeClient.jsx. Blog cards will be SSR'd.
      See SKILL.md §15 for the full plan.

- [ ] Write 5 new blog posts (topics in SKILL.md §7)
- [ ] Refresh 5 existing posts — 2024 stats → 2026, more conversational tone
- [ ] Add Google site verification to layout.js
- [ ] Add rate limiting to contact form API route
- [ ] npm vulns — wait for Next.js upstream postcss patch (DO NOT run npm audit fix --force)
