# SKILL: shivendra.io — Project Context & Knowledge Base
> Last updated: 2026-04-26 (Session 3 — Full modernisation complete)

---

## 0. How to Use This File
Upload at the start of each Claude session: "I'm working on shivendra.io — here's my SKILL.md. Today I want to [task]."
Copy to `.claude\SKILL.md` in project root for Claude Code auto-loading.

---

## 1. Project
- **Owner:** Shivendra Singh — Head of Data / Information / AI, Sydney Australia
- **Site:** https://shivendra.io | **Repo:** https://github.com/Connect-Shivendra/Portfolio
- **Local path:** `C:\Users\Shivendra\Desktop\Website\Portfolio-main`
- **Shell:** PowerShell | **Node:** v20.19.2
- **Vercel:** Connected but MCP token has 403 (needs reconnect for API access)
- **Aesthetic:** Dark navy (#0D1117) / warm off-white (#F4F3F0) / gold (#C9A84C) ✅ LIVE

---

## 2. Daily Dev Commands
```powershell
cd C:\Users\Shivendra\Desktop\Website\Portfolio-main
npm run dev                          # localhost:3000
npm test                             # run jest test suite
git checkout -b feature/name         # always branch, never commit to main directly
git add . && git commit -m "msg"
git push origin feature/name         # creates Vercel preview URL
# when preview looks good:
git checkout main && git merge feature/name && git push origin main
```

---

## 3. Tech Stack (modernised ✅)
| Layer | Current |
|---|---|
| Framework | Next.js 15.5.15 App Router |
| Language | JavaScript JSX |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Fonts | Inter (body) + Sora (headings) — loaded via next/font. font-Ovo aliased to Sora in tailwind.config.mjs |
| Blog | gray-matter + @mdx-js/mdx evaluate() — no next-mdx-remote |
| Animation | motion (Framer Motion v12) |
| Forms | Web3Forms + react-google-recaptcha (keys in env vars) |
| Analytics | @vercel/analytics |
| Testing | Jest + @testing-library/react |
| Deployment | Vercel → shivendra.io |
| PWA | manifest.json with display:standalone — installs as desktop app from Chrome/Edge |

---

## 4. Key File Locations
```
Portfolio-main\
  package.json                          ✅ next-mdx-remote removed
  next.config.mjs                       ✅ @next/mdx, CSP header, turbopack root
  tailwind.config.mjs                   ✅ darkHover/lightHover/darkTheme remapped to navy/gold
  mdx-components.jsx                    ✅ NEW — required by @next/mdx App Router
  .env.local                            ✅ API keys (never committed)
  .claude\SKILL.md                      ✅ auto-loads in Claude Code

  app\
    globals.css                         ✅ gold/navy token system
    layout.js                           ✅ updated metadata (Shivendra Singh branding)
    page.js                             ← still needs server component refactor
    components\
      Header.jsx                        ← needs redesign (alt="" on photo, font-Ovo)
      About.jsx                         ← needs redesign
      Navbar.jsx                        ← needs redesign
      Services.jsx                      ← needs redesign
      Blogs.jsx                         ← working, uses old class names (now remapped)
      Work.jsx                          ← needs redesign
      Contact.jsx                       ✅ env vars, gold theme
      Footer.jsx                        ← needs redesign
      BlogPostPage.jsx                  ✅ working
      BlogPostClient.jsx                ✅ gold/navy theme
      MDXContentServer.jsx              ✅ uses @mdx-js/mdx evaluate()
    utils\
      mdx-utils.js                      ✅ no next-mdx-remote
    api\
      blogs\route.js                    ✅ unchanged, working
      blogs\[slug]\route.js             ✅ unchanged, working
  __tests__\
    site.test.js                        ✅ jest test suite
```

---

## 5. Environment Variables
`.env.local` (never committed):
```
NEXT_PUBLIC_WEB3FORMS_KEY=424597d8-12b9-49ee-ad7d-5917b112e1e0
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdZamlrAAAAAAJN_G91ZV6ecoVf8HTHJdFe3oXHk
```
Also set in Vercel dashboard → Portfolio → Settings → Environment Variables.

---

## 6. Theme Tokens (globals.css) ✅
```css
:root {
  --background: #F4F3F0;   --foreground: #1A1A2E;
  --accent-color: #C9A84C; --accent-dark: #A8873A;
  --card-bg: #FFFFFF;      --text-primary: #1A1A2E;
  --text-secondary: #5A5A7A;
}
.dark {
  --background: #0D1117;   --foreground: #E8E8F0;
  --accent-color: #C9A84C; --accent-dark: #A8873A;
  --card-bg: #161B22;      --text-primary: #E8E8F0;
  --text-secondary: #8B8BA7;
}
```
Tailwind remaps (tailwind.config.mjs):
- `darkTheme` → #0D1117 (deep navy)
- `darkHover` → #1C2230 (navy card hover)
- `lightHover` → #ECEAE5 (warm off-white hover)
- `font-Ovo` → Sora (aliased)

---

## 7. Blog System ✅
- 39 MDX posts in `content/blogs/`
- `mdx-utils.js` → reads files, parses frontmatter with gray-matter
- `MDXContentServer.jsx` → renders MDX with @mdx-js/mdx evaluate()
- `BlogPostClient.jsx` → client wrapper with gold/navy styling
- API routes `/api/blogs` and `/api/blogs/[slug]` unchanged and working
- Topics: data strategy, governance, mesh, MDM, TOGAF, cloud, AI, Snowflake, etc.

---

## 8. Work History
| Company | Role |
|---|---|
| Woolworths Group | Head of Data (most recent) |
| Optus Pty Ltd | Senior data role |
| Amdocs Limited | Data/analytics |
| Camden Council | Data role |
| Fidelity International | Data Analyst, Enterprise Data Warehouse |
| Event Hospitality & Entertainment | Enterprise Data Architect — AWS, Snowflake, Matillion |

---

## 9. Services (8 pages)
data-strategy · data-governance · advanced-analytics · data-platform
ai-ml-solutions · business-intelligence · data-driven-product-dev · data-literacy

---

## 10. Remaining Work (priority order)
1. [ ] Redesign `Header.jsx` — premium hero, fix empty alt on profile photo
2. [ ] Redesign `About.jsx` — real photo, clean layout
3. [ ] Redesign `Navbar.jsx` — mobile nav improvements
4. [ ] Redesign `Work.jsx` — portfolio cards
5. [ ] Redesign `Footer.jsx`
6. [ ] Redesign `Services.jsx`
7. [ ] Build `/speaking` page (missing — important for personal brand)
8. [ ] Refactor `page.js` → server component (SEO improvement)
9. [ ] Fix metadata — Google verification placeholder
10. [ ] `npm audit fix` — 4 vulnerabilities remaining

---

## 11. Git Branch Strategy
- **Never commit directly to main**
- Feature branches → Vercel preview URL → review → merge to main → shivendra.io updates
- Rollback: `vercel rollback` (CLI) or Vercel dashboard → Deployments → ⋯ → Promote

---

## 12. Session Log
| Date | What was done |
|---|---|
| 2026-04-26 S1 | Full audit. Security issues found. SKILL.md created. |
| 2026-04-26 S2 | Git setup. npm install. Dev workflow established. |
| 2026-04-26 S3 | Removed next-mdx-remote (Vercel vulnerability block). Replaced with @mdx-js/mdx. Gold/navy theme live on shivendra.io. CSP header. Env vars. Test suite. Tailwind remapped. |
