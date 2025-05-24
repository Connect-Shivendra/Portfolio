"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/app/utils/animations';
import { fidelityEvents } from '@/app/utils/timelineData';

const FidelityInternationalPage = () => {
  const router = useRouter();
  const workTitle = "Fidelity Investments";
  const workDescription = "Data Analyst for Enterprise Data Warehouse, focusing on financial data modeling and compliance reporting";

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
            <button className="flex items-center text-[var(--accent-color)] hover:underline transition-all">
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {workDescription}
          </p>
        </motion.header>

        {/* Timeline Section */}
        <Timeline events={fidelityEvents} />

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            At Fidelity Investments, I served as a Data Analyst for the Enterprise Data Warehouse team, responsible for development and operations on the EDW and Financial datamart of Fidelity UK (mutual funds) and implementation of FATCA (US) compliance requirements.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My primary focus was on the FIL LIFE project, a standalone module developed to cater to the auditing needs of Fidelity Insurance for UK and Ireland. This involved generating comprehensive reports from relational databases and flat files, containing rolled-up and aggregated client assets and holdings data, and tracking the net inflow and outflow of capital for FIL customers.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
            <motion.li variants={fadeIn}>
              Successfully designed and implemented ETL processes for the Enterprise Data Warehouse using Informatica PowerCenter
            </motion.li>
            <motion.li variants={fadeIn}>
              Designed efficient architecture for staging environments to process transactional data from various sources
            </motion.li>
            <motion.li variants={fadeIn}>
              Implemented the Kimball methodology for data warehouse design, optimizing for financial reporting needs
            </motion.li>
            <motion.li variants={fadeIn}>
              Completed implementation of FATCA (US) compliance requirements for the financial datamart
            </motion.li>
            <motion.li variants={fadeIn}>
              Delivered auditing reports for Fidelity Insurance UK and Ireland with improved data aggregation capabilities
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Technologies Used</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Informatica PowerCenter, SQL, Kimball methodology for data warehouse design, financial data modeling tools, compliance reporting frameworks, ETL process optimization techniques, database optimization tools.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Results & Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The implementation of the FIL LIFE project significantly enhanced Fidelity Insurance's auditing capabilities for UK and Ireland operations. The improved data aggregation and reporting system provided better tracking of capital flows for compliance purposes, while the implementation of FATCA requirements ensured regulatory compliance. The optimized data warehouse design using the Kimball methodology improved query performance and reporting efficiency, supporting Fidelity's financial operations and compliance requirements.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Interested in Similar Solutions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Need help with financial data warehousing or compliance reporting? I can design and implement solutions that ensure data accuracy, regulatory compliance, and efficient reporting for your financial operations.
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

export default FidelityInternationalPage;
