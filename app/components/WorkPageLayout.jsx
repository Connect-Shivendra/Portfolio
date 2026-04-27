'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { ArrowLeft, Check } from 'lucide-react';

function AnimatedWords({ text }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <motion.div
        className="w-1 self-stretch rounded-full shrink-0 mt-1 origin-top"
        style={{ background: 'var(--accent-color)', minHeight: '2rem' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.h2
        className="text-2xl md:text-3xl font-bold font-Sora"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
    </div>
  );
}

function splitTechnologies(str) {
  const result = [];
  let depth = 0;
  let current = '';
  for (const ch of str.replace(/\.$/, '')) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      if (current.trim()) result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

export default function WorkPageLayout({
  title,
  role,
  companyImage,
  timeline,
  overview = [],
  achievements = [],
  technologies = '',
  results = '',
  ctaTitle,
  ctaDescription,
}) {
  const techList = technologies ? splitTechnologies(technologies) : [];

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        className="relative min-h-[420px] md:min-h-[480px] flex flex-col justify-end overflow-hidden"
        style={companyImage ? { backgroundImage: `url(${companyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,17,23,0.72) 0%, rgba(13,17,23,0.92) 100%)' }} />
        <motion.div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(201,168,76,0.18) 0%, transparent 65%)' }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-[8%] max-w-6xl pt-28 pb-14">
          {/* Back button */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/#work">
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)' }}
                whileHover={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.7)', x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />
                Back to Work
              </motion.span>
            </Link>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent-color)' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Case Study
          </motion.p>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-Sora leading-tight mb-6 text-white"
            aria-label={title}
          >
            <AnimatedWords text={title} />
          </h1>

          {/* Animated divider */}
          <motion.div
            className="h-px mb-5 origin-left"
            style={{ background: 'linear-gradient(90deg, var(--accent-color), transparent)' }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Role */}
          <motion.p
            className="text-lg"
            style={{ color: 'rgba(255,255,255,0.65)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {role}
          </motion.p>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────── */}
      <div style={{ background: 'var(--background)' }}>
        <div className="container mx-auto px-6 md:px-[8%] max-w-5xl py-20">

          {/* Timeline */}
          {timeline && (
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {timeline}
            </motion.div>
          )}

          {/* Project Overview */}
          {overview.length > 0 && (
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <SectionHeading>Project Overview</SectionHeading>
              <div className="space-y-4 pl-5">
                {overview.map((para, i) => (
                  <motion.p
                    key={i}
                    className="leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          )}

          {/* Key Achievements */}
          {achievements.length > 0 && (
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <SectionHeading>Key Achievements</SectionHeading>
              <ul className="space-y-3 pl-5">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl border"
                    style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    whileHover={{ borderColor: 'var(--accent-color)', boxShadow: '0 0 20px rgba(201,168,76,0.1)' }}
                  >
                    <motion.span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 + i * 0.07, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <Check size={13} strokeWidth={2.5} style={{ color: 'var(--accent-color)' }} aria-hidden="true" />
                    </motion.span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Technologies Used */}
          {techList.length > 0 && (
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <SectionHeading>Technologies Used</SectionHeading>
              <div className="flex flex-wrap gap-2 pl-5">
                {techList.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm border"
                    style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.035 }}
                    viewport={{ once: true }}
                    whileHover={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Results & Impact */}
          {results && (
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <SectionHeading>Results &amp; Impact</SectionHeading>
              <motion.p
                className="leading-relaxed pl-5"
                style={{ color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                {results}
              </motion.p>
            </motion.section>
          )}

          {/* CTA */}
          <motion.section
            className="relative overflow-hidden text-center py-14 px-8 rounded-2xl border"
            style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(201,168,76,0.07) 50%, transparent 65%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            />
            {/* Pulsing top accent */}
            <motion.div
              className="absolute top-0 left-1/4 right-1/4 h-px rounded-full"
              style={{ background: 'var(--accent-color)' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <h2 className="text-2xl md:text-3xl font-bold font-Sora mb-3 relative z-10" style={{ color: 'var(--text-primary)' }}>
              {ctaTitle}
            </h2>
            <p className="mb-8 max-w-xl mx-auto relative z-10" style={{ color: 'var(--text-secondary)' }}>
              {ctaDescription}
            </p>
            <Link href="/#contact" className="relative z-10">
              <motion.button
                className="button-primary"
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(201,168,76,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
}
