"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/app/utils/animations';
import { amdocsEvents } from '@/app/utils/timelineData';

const AmdocsLimitedPage = () => {
  const router = useRouter();
  const workTitle = "Amdocs Limited (NASDAQ: DOX)";
  const workDescription = "Senior Subject Matter Expert for Data Services, focusing on large-scale telecom data migration projects";

  useEffect(() => {
    // Handle back button press
    const handleBackButton = (e) => {
      e.preventDefault();
      router.push('/#work');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);

  return (
    <>
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-8 pt-24 lg:pt-32 bg-[var(--background)] text-[var(--foreground)]"
        variants={staggerContainer(0.1, 0.1)}
        initial="initial"
        animate="whileInView"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Back to Work button */}
        <motion.div 
          className="mb-8"
          variants={fadeIn}
        >
          <Link href="/#work">
            <button className="flex items-center text-[var(--text-primary)] font-bold hover:underline transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Work
            </button>
          </Link>
        </motion.div>

        <motion.header
          className="mb-12 text-center"
          variants={fadeIn}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{workTitle}</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            {workDescription}
          </p>
        </motion.header>

        {/* Timeline Section */}
        <Timeline events={amdocsEvents} />

        <motion.section
          className="mb-12"
          variants={slideUp}
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
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
            <motion.li variants={fadeIn}>
              Successfully migrated and transformed data for Telkomsel, one of Indonesia's largest telecom providers with 250 million subscribers
            </motion.li>
            <motion.li variants={fadeIn}>
              Led migration of over 40 million prepaid subscribers for Globe Telecommunications to the Amdocs BSS platform
            </motion.li>
            <motion.li variants={fadeIn}>
              Designed transformation logic and coded business logic into optimally tuned and defect-free code
            </motion.li>
            <motion.li variants={fadeIn}>
              Developed UNIX shell scripts to load data into target systems with high efficiency
            </motion.li>
            <motion.li variants={fadeIn}>
              Managed end-to-end SDLC of designing, coding, testing, and supporting systems for telecom clients
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Technologies Used</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Informatica PowerCenter, UNIX shell scripting, Oracle database management, Amdocs BSS products (CRM, OMS, SRM), data mapping and transformation tools, system integration frameworks, waterfall methodology implementation, end-to-end SDLC management.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Results & Impact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The successful migration of telecom data for both Telkomsel and Globe Telecommunications streamlined their operations by consolidating legacy systems into modern Amdocs platforms. These transformations ensured data consistency and integrity throughout the migration process, optimized ETL processes for large-scale data volumes, and delivered high-quality data transformation with strict adherence to project timelines. The projects laid the foundation for improved customer service and more efficient billing operations for these major telecom providers.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Interested in Similar Solutions?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Need expertise in large-scale data migration or telecom system integration? I can help design and implement solutions that ensure seamless transitions while maintaining data integrity and system performance.
          </p>
          <motion.button
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me Today
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default AmdocsLimitedPage;
