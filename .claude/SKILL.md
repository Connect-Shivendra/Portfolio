# SKILL: shivendra.io — Project Context & Knowledge Base
> Read this file at the start of every session. It replaces reading the whole codebase.
> Last updated: 2026-04-26 (Session 2)

---

## 0. Claude Code — How to Auto-Reference This File

**Best approach — copy to .claude folder (auto-loads every session):**
1. In VS Code terminal: `mkdir .claude` (in project root)
2. Copy this file there: save as `.claude\SKILL.md`
3. Claude Code reads `.claude\` automatically on project open — no manual add needed

**Manual approach per session:**
- In Claude Code panel, click `+` (add context) → select this SKILL.md file

**For claude.ai chat:** Upload this file at the start of each conversation.

---

## 1. Who & What

**Owner:** Shivendra Singh — Head of Data / Information / AI, Sydney, Australia
**Site:** https://shivendra.io
**Repo:** https://github.com/Connect-Shivendra/Portfolio (public)
**Vercel:** Connected via MCP (read access; env vars set via Vercel dashboard)
**Goal:** Modernise to premium personal brand site — portfolio + blog + speaking + CV
**Aesthetic:** Dark navy / charcoal background, gold accents, clean typography (NOT current green)

---

## 2. Local Dev Environment

**OS:** Windows 11
**Project path:** `C:\Users\Shivendra\Desktop\Website\Portfolio-main`
**Shell:** PowerShell in VS Code terminal
**Node/npm:** Installed and working
**npm install:** Completed (147 packages audited — 4 vulnerabilities: 3 moderate, 1 high)
**Dev server:** `npm run dev` → http://localhost:3000

### Daily commands (PowerShell)
```powershell
cd C:\Users\Shivendra\Desktop\Website\Portfolio-main
npm run dev                         # start dev server — keep running while working
git add .
git commit -m "description"
git push origin main                # triggers Vercel auto-deploy (~30 seconds)
npm audit fix                       # run once to clear vulnerabilities
```

### .env.local — CREATE THIS FILE NOW (security fix)
Path: `C:\Users\Shivendra\Desktop\Website\Portfolio-main\.env.local`
Easiest: in VS Code, right-click project root in Explorer → New File → `.env.local`
Paste:
```
NEXT_PUBLIC_WEB3FORMS_KEY=424597d8-12b9-49ee-ad7d-5917b112e1e0
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdZamlrAAAAAAJN_G91ZV6ecoVf8HTHJdFe3oXHk
```
Already in `.gitignore` — will never be committed to GitHub.

---

## 3. Tech Stack

| Layer | Current |
|---|---|
| Framework | Next.js 15.1.6 (App Router) |
| Language | JavaScript JSX (tsconfig present but unused) |
| Styling | Tailwind CSS 3.4 + CSS custom properties in globals.css |
| Fonts | Inter (body) + Sora (headings) in layout.js. `font-Ovo` in 40+ files but NOT imported — silent bug |
| Blog | MDX via next-mdx-remote + gray-matter. 39 posts in /content/blogs/ |
| Animation | motion (Framer Motion v12) |
| Forms | Web3Forms + react-google-recaptcha |
| Analytics | @vercel/analytics wired in layout.js |
| Deployment | Vercel → shivendra.io |
| Dev tools | Qwen3 local (Ollama) + Claude Pro + Claude Code VS Code extension |

---

## 4. File Structure

```
C:\Users\Shivendra\Desktop\Website\Portfolio-main\
  .env.local              ← CREATE — never committed (in .gitignore)
  .claude\SKILL.md        ← CREATE — auto-loads in Claude Code
  next.config.mjs         ← security headers (missing CSP — needs adding)
  tailwind.config.mjs
  package.json
  app\
    page.js               ← HOME — 'use client' at top (kills SSR/SEO — fix)
    layout.js             ← root layout, fonts, metadata
    globals.css           ← ALL CSS tokens (currently green — replace)
    context\DarkModeContext.jsx
    components\
      Header.jsx          ← Hero section
      About.jsx           ← About / professional highlights
      Services.jsx        ← 8 service cards
      Blogs.jsx           ← Blog listing (fetches /api/blogs)
      Work.jsx            ← Work history cards
      Contact.jsx         ← Contact form ← SECURITY ISSUE (hardcoded keys)
      Navbar.jsx          ← Nav + dark mode + mobile menu
      Footer.jsx
      Timeline.jsx        ← used in work sub-pages
      BlogPostPage.jsx / BlogPostClient.jsx / MDXContentServer.jsx
    api\
      blogs\route.js      ← GET /api/blogs
      blogs\[slug]\route.js
      sitemap\route.js
    blog\page.js + [slug]\page.js
    work\                 ← 6 company sub-pages
    services\             ← 8 service sub-pages + index
  assets\assets.js        ← all image imports + infoList, toolsData, serviceData arrays
  content\blogs\          ← 39 .mdx files
  public\
    Shivendra-Singh-HoData-CV.pdf
```

---

## 5. Security Issues (NOT YET FIXED)

### Fix 1 — app\components\Contact.jsx line 33
```jsx
// FROM:
formData.append('access_key', '424597d8-12b9-49ee-ad7d-5917b112e1e0');
// TO:
formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
```

### Fix 2 — app\components\Contact.jsx line 118
```jsx
// FROM:
sitekey='6LdZamlrAAAAAAJN_G91ZV6ecoVf8HTHJdFe3oXHk'
// TO:
sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
```

### Also: Vercel dashboard → Portfolio → Settings → Environment Variables
Add both keys so production deployments work after the code change.

---

## 6. Target Theme (replace globals.css tokens)

```css
/* Light mode */
:root {
  --background: #F4F3F0;
  --foreground: #1A1A2E;
  --accent-color: #C9A84C;      /* gold */
  --accent-dark: #A8873A;
  --card-bg: #FFFFFF;
  --text-primary: #1A1A2E;
  --text-secondary: #5A5A7A;
  --border-color: rgba(201,168,76,0.15);
}
/* Dark mode */
.dark {
  --background: #0D1117;        /* deep navy */
  --foreground: #E8E8F0;
  --accent-color: #C9A84C;      /* same gold */
  --accent-dark: #A8873A;
  --card-bg: #161B22;
  --section-bg: #0A0F14;
  --text-primary: #E8E8F0;
  --text-secondary: #8B8BA7;
  --border-color: rgba(201,168,76,0.2);
}
```

---

## 7. Architecture Issues

| Priority | Issue | File | Fix |
|---|---|---|---|
| HIGH | Whole home page is 'use client' — kills SSR/SEO | app\page.js | Server component fetches blogs; pass as props |
| HIGH | Sections toggled by state, no direct URLs | app\page.js | Hash-scroll anchor links |
| HIGH | No Content-Security-Policy header | next.config.mjs | Add CSP |
| MED | Generic metadata | app\layout.js | Personalise title, OG, description |
| MED | font-Ovo in 40+ files, not imported | Multiple | Replace with font-Sora |
| MED | Empty alt on profile photo | Header.jsx | Add alt text |
| LOW | overflow-x-hidden band-aid | layout.js | Fix root cause |
| LOW | 4 npm vulnerabilities | package.json | npm audit fix |

---

## 8. Pages Status

- [x] Hero — Header.jsx
- [x] About — About.jsx
- [x] Portfolio/Projects — Work.jsx + /work/* (6 companies)
- [x] Blog — 39 MDX posts at /blog
- [x] CV — PDF download in Hero
- [x] Contact — Contact.jsx
- [x] Services — 8 sub-pages
- [ ] **Speaking / Talks — MISSING** → build /speaking route

---

## 9. Work History

| Company | Role |
|---|---|
| Woolworths Group | Head of Data (most recent) |
| Optus Pty Ltd | Senior data role |
| Amdocs Limited | Data/analytics |
| Local Govt / Camden Council | Data role |
| Fidelity International | Data Analyst, Enterprise Data Warehouse |
| Event Hospitality & Entertainment | Enterprise Data Architect — AWS, Snowflake, Matillion (Nov 2019) |

---

## 10. Blog (39 MDX posts)

Topics: data strategy, governance, mesh, MDM, TOGAF, architecture patterns, cloud architecture, BI vs analytics, CISSP for leaders, ethical AI, predictive analytics, Snowflake, observability, quality, sharing, monetisation, ROI, DAMA DMBOK, Australian govt frameworks.

---

## 11. Services (8 pages)

data-strategy · data-governance · advanced-analytics · data-platform
ai-ml-solutions · business-intelligence · data-driven-product-dev · data-literacy

---

## 12. Rebuild Order

1. [ ] Create `.env.local` + fix Contact.jsx (security — do first)
2. [ ] `npm audit fix`
3. [ ] Rebuild `globals.css` tokens → navy/charcoal/gold
4. [ ] Update `layout.js` metadata
5. [ ] Add CSP to `next.config.mjs`
6. [ ] Fix `font-Ovo` references
7. [ ] Refactor `page.js` → server component
8. [ ] Redesign `Header.jsx`
9. [ ] Redesign `About.jsx`
10. [ ] Redesign `Navbar.jsx`
11. [ ] Build `/speaking` page
12. [ ] Redesign `Services.jsx`
13. [ ] Redesign Blog listing + post template
14. [ ] Redesign `Work.jsx` + sub-pages
15. [ ] Redesign `Contact.jsx`
16. [ ] Redesign `Footer.jsx`

---

## 13. Session Log

| Date | What was done |
|---|---|
| 2026-04-26 Session 1 | Full codebase audit. Security issues identified. Architecture reviewed. SKILL.md created. |
| 2026-04-26 Session 2 | Windows path confirmed. npm install completed. Dev workflow established. SKILL.md updated with Windows commands and .claude auto-load setup. |

