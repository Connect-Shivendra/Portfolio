"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/app/utils/animations';
import { optusEvents } from '@/app/utils/timelineData';

const OptusPage = () => {
  const router = useRouter();
  const workTitle = "Optus Pty Ltd (Singtel Group)";
  const workDescription = "Solution Designer for Data Migration, focusing on large-scale telecommunications data migration projects";

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
        <Timeline events={optusEvents} />

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            At Optus, I served as a Solution Designer for Data Migration, focusing on Project Spring - a large-scale initiative to consolidate 12 legacy systems into a single integrated platform provided by Amdocs. This ambitious project targeted the migration of 10 million subscribers across mobile (prepaid and post-paid), fixed line telephony, and enterprise customers.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            My role involved designing and developing comprehensive data migration solutions, from requirement gathering and analysis to implementation and quality assurance, ensuring seamless transition with minimal disruption to business operations.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
            <motion.li variants={fadeIn}>
              Successfully migrated 10 million subscribers from legacy systems to the Amdocs billing platform
            </motion.li>
            <motion.li variants={fadeIn}>
              Designed and implemented staging environments and error handling procedures for legacy data extraction
            </motion.li>
            <motion.li variants={fadeIn}>
              Developed Informatica flows to integrate multiple systems using PowerCentre 9.5.1 HF 2
            </motion.li>
            <motion.li variants={fadeIn}>
              Created data masking flows to distribute data to off-shore teams without privacy risks
            </motion.li>
            <motion.li variants={fadeIn}>
              Improved data quality and consistency across systems through comprehensive profiling and assessment
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Technologies Used</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Informatica PowerCenter, Data profiling and quality assessment tools, Data masking and privacy protection solutions, Amdocs Billing and Customer Care (BCC) platform, Net-cracker OSS platform, Staging environment design and management tools.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Results & Impact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The successful migration of customer data from legacy systems to the Amdocs billing platform streamlined Optus's billing operations by consolidating multiple legacy systems. This transformation improved data quality and consistency across systems, enhanced data security through proper masking and privacy controls, and provided a more integrated view of customer information. The project laid the foundation for improved customer service and more efficient billing operations, supporting Optus's strategic objectives for digital transformation.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-[var(--card-bg)] rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Interested in Similar Solutions?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Need help with large-scale data migration or system consolidation? I can design and implement solutions that ensure seamless transitions while maintaining data integrity, security, and compliance with privacy regulations.
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

export default OptusPage;
