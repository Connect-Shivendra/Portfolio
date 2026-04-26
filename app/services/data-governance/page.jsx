"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import Link from 'next/link';

const DataGovernancePage = () => {
  const serviceTitle = "Data Governance & Compliance";

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
        <motion.header
          className="mb-12 text-center"
          variants={fadeIn}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">{serviceTitle}</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            [Placeholder: Brief introduction to Data Governance & Compliance. This section will be updated with detailed content soon. We help you establish robust frameworks to ensure data quality, security, and regulatory adherence.]
          </p>
        </motion.header>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            [Placeholder: Detailed explanation of the approach to data governance. This will cover aspects like policy development, data stewardship, compliance frameworks (e.g., GDPR, CCPA), and data quality management. Content to be added.]
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            [Placeholder: Further details on implementing governance tools and processes, and fostering a data-aware culture within the organization. Content to be added.]
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Key Deliverables</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
              >
                [Placeholder: Deliverable {item} - e.g., Data Governance Framework Document. To be detailed.]
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Why Choose Us?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            [Placeholder: Explanation of unique selling propositions for this service. Highlighting expertise in regulatory landscapes and building practical governance solutions. Content to be added.]
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-[var(--card-bg)] rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Ensure Your Data is an Asset, Not a Liability</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            [Placeholder: Call to action. Encourage users to get in touch for a consultation on their data governance and compliance needs. Content to be added.]
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent-color)] text-white font-medium rounded-full hover:bg-[var(--accent-color)]/80 transition-colors">
            Schedule a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default DataGovernancePage;

