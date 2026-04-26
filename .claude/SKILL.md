# SKILL: shivendra.io — Project Context & Knowledge Base
> Last updated: 2026-04-26 (Session 3 — Full modernisation)

## 0. How to Use This File
Upload at the start of each Claude session. Say: "I'm working on shivendra.io — here's my SKILL.md. Today I want to [task]."
Copy to `.claude\SKILL.md` in project root for Claude Code auto-loading.

## 1. Project
- Owner: Shivendra Singh — Head of Data / Information / AI, Sydney Australia
- Site: https://shivendra.io | Repo: https://github.com/Connect-Shivendra/Portfolio
- Path: C:\Users\Shivendra\Desktop\Website\Portfolio-main
- Shell: PowerShell | Node: v20.19.2 | npm: installed
- Vercel: connected but MCP token needs reconnect (403 on API calls)
- Aesthetic: Dark navy (#0D1117) / charcoal / gold (#C9A84C)

## 2. Daily Dev Commands
```powershell
cd C:\Users\Shivendra\Desktop\Website\Portfolio-main
npm run dev        # localhost:3000
npm test           # run test suite
git add .
git commit -m "message"
git push origin main   # triggers Vercel deploy
```

## 3. Tech Stack (modernised)
| Layer | Current |
|---|---|
| Framework | Next.js 15.1.6 App Router |
| Language | JavaScript JSX |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Fonts | Inter (body) + Sora (headings) — both loaded via next/font |
| Blog | gray-matter frontmatter + @next/mdx (native) |
| Animation | motion (Framer Motion v12) |
| Forms | Web3Forms + react-google-recaptcha |
| Analytics | @vercel/analytics |
| Testing | Jest + @testing-library/react |
| Deployment | Vercel → shivendra.io |

## 4. Key Files
```
app/page.js                    ← home (needs server component refactor)
app/layout.js                  ← root layout + metadata ✅ UPDATED
app/globals.css                ← ALL theme tokens ✅ UPDATED (gold/navy)
app/components/Header.jsx      ← hero section
app/components/About.jsx       ← professional highlights
app/components/Services.jsx    ← 8 service cards
app/components/Blogs.jsx       ← blog listing
app/components/Work.jsx        ← work history
app/components/Contact.jsx     ← contact form ✅ UPDATED (env vars + gold)
app/components/Navbar.jsx      ← navigation
app/components/Footer.jsx      ← footer
app/utils/mdx-utils.js         ← blog utility ✅ UPDATED (no next-mdx-remote)
next.config.mjs                ← ✅ UPDATED (@next/mdx + CSP)
package.json                   ← ✅ UPDATED (removed next-mdx-remote)
__tests__/site.test.js         ← ✅ NEW test suite
```

## 5. Environment Variables
Create `.env.local` in project root:
```
NEXT_PUBLIC_WEB3FORMS_KEY=424597d8-12b9-49ee-ad7d-5917b112e1e0
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdZamlrAAAAAAJN_G91ZV6ecoVf8HTHJdFe3oXHk
```
Also add these to Vercel → Portfolio → Settings → Environment Variables.

## 6. Theme Tokens (globals.css)
```css
:root {
  --background: #F4F3F0; --foreground: #1A1A2E;
  --accent-color: #C9A84C; --accent-dark: #A8873A;
  --card-bg: #FFFFFF; --text-primary: #1A1A2E; --text-secondary: #5A5A7A;
}
.dark {
  --background: #0D1117; --foreground: #E8E8F0;
  --accent-color: #C9A84C; --accent-dark: #A8873A;
  --card-bg: #161B22; --text-primary: #E8E8F0; --text-secondary: #8B8BA7;
}
```

## 7. Security
- Contact.jsx: keys now use process.env.NEXT_PUBLIC_* ✅
- CSP header added to next.config.mjs ✅
- next-mdx-remote removed (was the Vercel build blocker) ✅

## 8. Remaining Redesign Work
1. [ ] Redesign Header.jsx — premium hero, fix alt="" on profile image
2. [ ] Redesign About.jsx — fix font-Ovo → font-Sora, real photo
3. [ ] Redesign Navbar.jsx — fix font-Ovo → font-Sora
4. [ ] Redesign Work.jsx — fix font-Ovo → font-Sora
5. [ ] Redesign Footer.jsx — fix font-Ovo, dark mode logo
6. [ ] Build /speaking page
7. [ ] Refactor page.js → server component
8. [ ] Update manifest.json (title + theme-color)
9. [ ] Verify blog rendering with @next/mdx

## 9. Pages
- Hero, About, Portfolio/Work (6 companies), Blog (39 MDX posts), CV, Contact, Services (8 pages)
- /speaking — MISSING (build next)

## 10. Session Log
| Date | What was done |
|---|---|
| 2026-04-26 S1 | Full audit. Security issues. SKILL.md created. |
| 2026-04-26 S2 | Git setup. npm install. Dev workflow. |
| 2026-04-26 S3 | Full modernisation: removed next-mdx-remote, added @next/mdx, gold/navy theme, CSP, env vars, test suite. |
