'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="work"
      className="w-full px-6 md:px-[8%] lg:px-[12%] py-20"
      style={{ background: 'var(--section-bg)' }}
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="heading-eyebrow"
      >
        Work Timeline
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="heading-primary"
      >
        Previous Companies &amp; Deliverables
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-4 text-[var(--text-secondary)]"
      >
        I&apos;ve worked with large multinational companies, local governments, and startups,
        delivering impactful solutions across various domains across the globe.
      </motion.p>

      <div className="gold-divider mb-12" />

      {/* Work grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto"
      >
        {workData.map((project, index) => (
          <Link href={project.link} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="aspect-square bg-no-repeat bg-contain bg-center rounded-xl relative cursor-pointer group overflow-hidden border border-[var(--border-color)]"
              style={{ backgroundImage: `url(${project.bgImage})`, backgroundColor: 'var(--section-bg)' }}
            >
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />

              {/* Info card */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10/12 rounded-lg py-2.5 px-3 flex items-center justify-between duration-500 group-hover:bottom-6 border border-[var(--border-color)]"
                style={{ background: 'var(--card-bg)' }}
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-xs truncate text-[var(--text-primary)] font-Sora">
                    {project.title}
                  </h2>
                  <p className="text-[10px] text-[var(--text-secondary)] truncate mt-0.5">
                    {project.description}
                  </p>
                </div>
                {/* Gold arrow button */}
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ml-2 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-color)' }}
                >
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" style={{ color: 'var(--on-accent)' }} />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Work;
