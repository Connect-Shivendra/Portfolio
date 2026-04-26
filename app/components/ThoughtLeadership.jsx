'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

const perspectives = [
  {
    number: '01',
    category: 'AI Governance',
    title: 'The Trust Paradox Holding AI Back',
    hook: "69% of organisations have adopted GenAI. 76% admit their governance hasn't kept up. That gap is not a technical problem — it's a leadership one.",
    body: "I've seen this pattern play out at scale. Teams race to deploy AI pilots, celebrate early wins, then quietly shelve projects when the data foundation cracks under production pressure. The issue isn't the technology. It's that governance is still treated as cleanup work rather than the first sprint. The organisations getting this right are the ones where the CDO and CISO are in the same room before the first model goes near production data.",
    tag: '2026 Priority',
    color: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.3)',
    link: '/blog/ethical-ai',
  },
  {
    number: '02',
    category: 'Agentic AI',
    title: 'Agentic AI Is Not Ready for Ungoverned Data',
    hook: "Half of data leaders cite data quality as their top challenge in deploying agentic AI. I'd argue it goes deeper than quality — it's about data contracts and trust chains.",
    body: "Agentic systems make decisions autonomously. That means when your data is wrong, the agent acts on it confidently and at scale. I pulled back an agentic workflow last year after it quietly over-weighted cost variables in a way that didn't match our risk appetite. We caught it in days. Without strong governance boundaries, you may not catch it at all. The fix isn't slowing down AI adoption — it's building the data foundation that makes autonomous decisions trustworthy.",
    tag: 'Hot Topic',
    color: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.2)',
    link: '/blog/data-governance',
  },
  {
    number: '03',
    category: 'Data Strategy',
    title: 'Data Strategy Without a Business Problem Is Theatre',
    hook: "Most data strategies I've reviewed are beautifully written documents that describe a desired future state. Almost none of them answer the question: what decision will this help us make differently?",
    body: "The best data strategies I've been involved in start with a business outcome and work backwards. What does the CFO need to see to approve next year's budget faster? What signal would allow the ops team to reduce waste by 10%? Those questions force specificity. They force you to pick the three things that actually matter rather than cataloguing every data asset you own. Data strategy is fundamentally a business strategy document that happens to involve data.",
    tag: 'My POV',
    color: 'rgba(201,168,76,0.06)',
    border: 'rgba(201,168,76,0.15)',
    link: '/blog/data-strategy',
  },
  {
    number: '04',
    category: 'Leadership',
    title: 'The CDO Role Is Evolving — Are You?',
    hook: "The CDO of 2024 was a guardian of data quality and compliance. The CDO of 2026 is a co-architect of AI strategy. The job has fundamentally changed in 18 months.",
    body: "When I started in this space, success was measured by data catalogue coverage and governance policy adoption rates. Today's board wants to know how data is accelerating AI initiatives, what the data literacy of the workforce looks like, and how exposed the organisation is to AI-related regulatory risk. CDOs who haven't shifted their narrative from data management to AI enablement are losing the strategic conversation — regardless of how good their data platform actually is.",
    tag: 'Career',
    color: 'rgba(201,168,76,0.05)',
    border: 'rgba(201,168,76,0.12)',
    link: '/blog/data-governance-framework',
  },
  {
    number: '05',
    category: 'Data Quality',
    title: "Data Quality Is a Product, Not a Project",
    hook: "Every organisation I've worked with has had a data quality initiative. Almost none have had a data quality product. The difference is everything.",
    body: "A project has a start and end date. It fixes the known issues, ships a report, and closes. Six months later the same problems resurface because the underlying incentives haven't changed. A product mindset means data quality has an owner, an SLA, a roadmap, and users who depend on it. It means treating a data pipeline the same way a software team treats an API — with versioning, contracts, and accountability. The organisations that have cracked this are the ones where data quality shows up in engineering OKRs, not just data team retrospectives.",
    tag: 'Practical',
    color: 'rgba(201,168,76,0.04)',
    border: 'rgba(201,168,76,0.1)',
    link: '/blog/data-quality-management',
  },
  {
    number: '06',
    category: 'AI & Data Literacy',
    title: 'You Cannot Govern What Your Teams Cannot Understand',
    hook: "75% of data leaders say employees need upskilling in data literacy. 74% say the same for AI literacy. This isn't a training problem — it's a culture problem.",
    body: "Data literacy programmes tend to fail when they're treated as compliance exercises. Mandatory e-learning modules checked off and forgotten. The organisations building genuine data literacy are doing it through osmosis — embedding data fluency into how decisions get made, how meetings are run, how managers are evaluated. When a senior leader asks 'what does the data say?' before approving a budget, that's not a training outcome. That's a cultural norm. That's what we should be building towards.",
    tag: 'Culture',
    color: 'rgba(201,168,76,0.03)',
    border: 'rgba(201,168,76,0.08)',
    link: '/blog/data-literacy',
  },
];

export default function ThoughtLeadership() {
  return (
    <section id="thought-leadership" className="w-full px-6 md:px-[8%] py-20" style={{ background: 'var(--background)' }}>

      {/* Section header */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="heading-eyebrow"
      >
        Perspectives
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="heading-primary"
      >
        Thought Leadership
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4"
      >
        Unfiltered views on data, AI governance, and what it actually takes to lead in this space.
        Based on 14+ years of doing the work, not just writing about it.
      </motion.p>

      <div className="gold-divider mb-16" />

      {/* Perspectives grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perspectives.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative rounded-xl p-6 flex flex-col group cursor-pointer"
            style={{
              background: p.color,
              border: `1px solid ${p.border}`,
            }}
          >
            {/* Number + tag row */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-4xl font-bold font-Sora opacity-20"
                style={{ color: 'var(--accent-color)' }}
              >
                {p.number}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(201,168,76,0.15)',
                  color: 'var(--accent-color)',
                }}
              >
                {p.tag}
              </span>
            </div>

            {/* Category */}
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--accent-color)' }}>
              {p.category}
            </p>

            {/* Title */}
            <h3 className="text-lg font-bold font-Sora text-[var(--text-primary)] mb-3 leading-snug">
              {p.title}
            </h3>

            {/* Hook — always visible */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 italic">
              &ldquo;{p.hook}&rdquo;
            </p>

            {/* Body — visible on hover on desktop, always on mobile */}
            <motion.p
              className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 hidden md:block"
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: 'auto' }}
            >
              {p.body}
            </motion.p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 md:hidden">
              {p.body}
            </p>

            {/* Read more link */}
            <div className="mt-auto">
              <Link
                href={p.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: 'var(--accent-color)' }}
              >
                Read related post
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Gold hover border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 0 20px rgba(201,168,76,0.1)' }}
            />
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-[var(--text-secondary)] mb-4">
          Want to go deeper? I write regularly on these topics.
        </p>
        <Link href="/blog" className="button-primary">
          Read all articles →
        </Link>
      </motion.div>
    </section>
  );
}
