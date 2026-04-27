"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'motion/react';
import { Check, ChevronRight } from 'lucide-react';

function Counter({ target, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const CAREER_STATS = [
  { prefix: '$', target: 2, suffix: 'M+', label: 'in documented cost savings' },
  { prefix: '', target: 300, suffix: 'M+', label: 'subscriber records migrated' },
  { prefix: '', target: 6, suffix: '', label: 'organisations transformed' },
];

const IMPACT_CARDS = [
  {
    company: 'Woolworths / WooliesX',
    role: 'Lead Data Engineer · Data Platform Lead',
    industry: 'Retail & eCommerce',
    href: '/work/woolworths-group',
    metrics: [
      { stat: '60%', label: 'AWS Redshift cost reduction — $200k to $80k per month' },
      { stat: '18%', label: 'increase in email click-through rate' },
      { stat: '3%', label: 'lift in conversion rate' },
      { stat: '1st', label: 'Apple Wallet integration in Australian retail' },
    ],
  },
  {
    company: 'Event Hospitality & Entertainment',
    role: 'Head of Data Platforms & Engineering',
    industry: 'Hospitality & Entertainment',
    href: '/work/event-hospitality-entertainment',
    award: 'CEO Rising Star 2020 · Business Transformation Runner-Up 2022',
    metrics: [
      { stat: '$1.7M', label: 'documented cost savings via outsourcing and end-to-end automation' },
      { stat: '80%', label: 'reduction in data ingestion and processing times' },
      { stat: '29%', label: 'reduction in lost sales opportunities via transparent KPI dashboards' },
      { stat: '250+', label: 'daily self-service business users across 36+ Tableau dashboards' },
    ],
  },
  {
    company: 'Optus',
    role: 'Senior Data Engineer · Data Architect',
    industry: 'Telecommunications',
    href: '/work/optus-pty-ltd',
    metrics: [
      { stat: '10M', label: 'subscribers migrated to a new unified platform' },
      { stat: '12', label: 'legacy systems consolidated into one' },
    ],
  },
  {
    company: 'Amdocs',
    role: 'Data Architect · Senior Data Engineer',
    industry: 'Telecom Software · Asia-Pacific',
    href: '/work/amdocs-limited',
    metrics: [
      { stat: '250M', label: 'subscriber telecom migration — first Asia-Pacific engagement' },
      { stat: '40M', label: 'subscriber telecom migration — second Asia-Pacific engagement' },
    ],
  },
  {
    company: 'Fidelity International',
    role: 'Data Engineer · BI Developer',
    industry: 'Financial Services',
    href: '/work/fidelity-international',
    metrics: [
      { label: 'FATCA compliance framework delivered on schedule' },
      { label: 'Kimball EDW built for UK & Ireland insurance division' },
      { label: 'Cross-border regulatory reporting standardised' },
    ],
  },
  {
    company: 'Camden Council',
    role: 'Head of Information & BI Services',
    industry: 'Local Government',
    href: '/work/local-government-camden-council',
    metrics: [
      { stat: '18', label: 'priority PowerBI use cases approved (+ 54 identified across 6 directorates)' },
      { label: 'Enterprise Data Strategy approved — greenfield Azure Databricks lakehouse as Single Source of Truth' },
      { label: "Australia's first council mowing schedule published as open data on a public portal" },
      { label: 'NSW Information Classification & Labelling implemented via MS Purview across M365' },
    ],
  },
];

function CheckIcon() {
  return (
    <Check
      size={16}
      strokeWidth={2.5}
      className="shrink-0 mt-0.5"
      aria-hidden="true"
      style={{ color: 'var(--accent-color)' }}
    />
  );
}

function ImpactCard({ card, index }) {
  return (
    <motion.article
      className="card-component flex flex-col gap-4 relative overflow-hidden"
      style={{ borderLeft: '4px solid var(--accent-color)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: 'rgba(201,168,76,0.12)',
            color: 'var(--accent-color)',
            border: '1px solid rgba(201,168,76,0.25)',
          }}
        >
          {card.industry}
        </span>
        {card.award && (
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: 'rgba(201,168,76,0.08)',
              color: 'var(--accent-color)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            🏆 {card.award}
          </span>
        )}
      </div>

      <div>
        <h3
          className="text-xl font-bold mb-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {card.company}
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {card.role}
        </p>
      </div>

      <div className="gold-divider" />

      <ul className="flex flex-col gap-3 flex-1">
        {card.metrics.map((m, i) => (
          <li key={i} className="flex items-start gap-3">
            {m.stat ? (
              <span
                className="text-2xl font-bold leading-none shrink-0 min-w-[3rem]"
                style={{ color: 'var(--accent-color)' }}
              >
                {m.stat}
              </span>
            ) : (
              <CheckIcon />
            )}
            <span
              className="text-sm leading-snug"
              style={{ color: 'var(--text-secondary)' }}
            >
              {m.label}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={card.href}
        className="flex items-center gap-1 text-sm font-semibold mt-auto pt-2 transition-opacity hover:opacity-70"
        style={{ color: 'var(--accent-color)' }}
        aria-label={`View full case study for ${card.company}`}
      >
        Full case study
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen"
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        <div className="container mx-auto px-6 py-8 pt-24 lg:pt-32 max-w-6xl">

          {/* Hero */}
          <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="heading-eyebrow">Career Impact</p>
            <h1 className="heading-primary mt-2">Results That Move the Needle</h1>
            <div className="gold-divider mx-auto mt-4 mb-6" />
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Six organisations. 14+ years. Measurable outcomes across local government,
              retail, hospitality, telco, and financial services.
            </p>
          </motion.header>

          {/* Career-wide stats */}
          <motion.section
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
            aria-label="Career statistics"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {CAREER_STATS.map((s) => (
              <div
                key={s.label}
                className="card-component text-center"
                style={{ borderTop: '3px solid var(--accent-color)' }}
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'var(--accent-color)' }}
                >
                  <Counter prefix={s.prefix} target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.section>

          {/* Impact cards grid */}
          <section aria-label="Impact by organisation">
            <motion.h2
              className="text-2xl font-semibold mb-8"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Impact by Organisation
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {IMPACT_CARDS.map((card, index) => (
                <ImpactCard key={card.company} card={card} index={index} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            className="text-center py-10 px-6 rounded-lg mb-12"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Want to Know More?
            </h2>
            <p
              className="mb-6 max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Happy to walk through the approach, challenges, and outcomes behind any of these
              results in more detail — always keen to connect with people working on interesting
              data problems.
            </p>
            <Link href="/#contact">
              <button className="button-primary">Get in Touch</button>
            </Link>
          </motion.section>

        </div>
      </div>
      <Footer />
    </>
  );
}
