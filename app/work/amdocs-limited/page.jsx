"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'motion/react';
import { amdocsEvents } from '@/app/utils/timelineData';

const AmdocsLimitedPage = () => {
  const workTitle = "Amdocs Limited (NASDAQ: DOX)";
  const workDescription = "Senior Subject Matter Expert for Data Services, focusing on large-scale telecom data migration projects";

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-24 lg:pt-32 bg-[var(--background)] text-[var(--foreground)]">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/#work">
            <button className="flex items-center gap-2 text-[var(--accent-color)] font-semibold hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Work
            </button>
          </Link>
        </motion.div>

        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{workTitle}</h1>
          <div className="gold-divider mx-auto mt-2 mb-6" />
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            {workDescription}
          </p>
        </motion.header>

        <Timeline events={amdocsEvents} />

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            At Amdocs Limited, I served as a Senior Subject Matter Expert for Data Services, focusing on data migration and ETL processes for major telecommunications clients. My role involved managing large-scale data transformation projects and system integrations for telecom providers across Asia.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            I led two major projects: TKS CRM PHASE-2 for Telkomsel, an Indonesian telecom with 250 million active subscribers, and GLOBE SWEDEN PHASE-2 for Globe Telecommunications, a Singtel group company with over 40 million prepaid subscribers. Both projects involved migrating legacy systems to Amdocs platforms, requiring extensive data transformation and integration work.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
            <li>Successfully migrated and transformed data for Telkomsel, one of Indonesia&apos;s largest telecom providers with 250 million subscribers</li>
            <li>Led migration of over 40 million prepaid subscribers for Globe Telecommunications to the Amdocs BSS platform</li>
            <li>Designed transformation logic and coded business logic into optimally tuned and defect-free code</li>
            <li>Developed UNIX shell scripts to load data into target systems with high efficiency</li>
            <li>Managed end-to-end SDLC of designing, coding, testing, and supporting systems for telecom clients</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Technologies Used</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Informatica PowerCenter, UNIX shell scripting, Oracle database management, Amdocs BSS products (CRM, OMS, SRM), data mapping and transformation tools, system integration frameworks, waterfall methodology implementation, end-to-end SDLC management.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Results &amp; Impact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The successful migration of telecom data for both Telkomsel and Globe Telecommunications streamlined their operations by consolidating legacy systems into modern Amdocs platforms. These transformations ensured data consistency and integrity throughout the migration process, optimized ETL processes for large-scale data volumes, and delivered high-quality data transformation with strict adherence to project timelines. The projects laid the foundation for improved customer service and more efficient billing operations for these major telecom providers.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Interested in Similar Solutions?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Need expertise in large-scale data migration or telecom system integration? I can help design and implement solutions that ensure seamless transitions while maintaining data integrity and system performance.
          </p>
          <Link href="/#contact">
            <button className="button-primary">Contact Me Today</button>
          </Link>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default AmdocsLimitedPage;
