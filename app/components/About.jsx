'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
      className="w-full px-6 md:px-[8%] lg:px-[12%] py-20"
      style={{ background: 'var(--background)' }}
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="heading-eyebrow"
      >
        Introduction
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="heading-primary"
      >
        Professional Highlights
      </motion.h2>

      <div className="gold-divider mb-16" />

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-72 flex-shrink-0 flex justify-center"
        >
          <div className="relative">
            {/* Gold glow ring */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-2 rounded-3xl"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)' }}
            />
            <Image
              src={assets.user_image}
              alt="Shivendra Singh — Head of Data, Information & AI"
              className="w-64 lg:w-72 rounded-3xl relative z-10 border border-[var(--border-color)]"
            />
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="max-w-2xl mb-10 text-[var(--text-secondary)] leading-relaxed text-base">
            Data leader with 14+ years of experience in Data Strategy, Architecture, Engineering,
            Analytics and Program Delivery. Proven track record of transforming data ecosystems,
            driving innovation and enabling business growth through strategic leadership. Skilled in
            managing large, cross-functional teams across continents, with a focus on building
            trustable, accessible and actionable data solutions.
          </p>

          {/* Info cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-14"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="summary-card"
              >
                <Image src={icon} alt={title} className="w-7 mt-2 mb-3" />
                <h3 className="mb-2 font-semibold font-Sora text-[var(--text-primary)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 text-lg font-semibold font-Sora text-[var(--text-primary)]"
          >
            Tools of the Trade
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-w-2xl"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="aspect-square flex items-center justify-center rounded-xl p-3 border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(201,168,76,0.15)]"
                style={{ background: 'var(--card-bg)' }}
              >
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  aria-label={tool.name}
                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="w-10 md:w-12 object-contain"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
