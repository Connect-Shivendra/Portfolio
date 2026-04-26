"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';

const DataPlatformPage = () => {
  const serviceTitle = "Data Platform & Infrastructure Modernization";

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
            [Placeholder: Brief introduction to Data Platform & Infrastructure Modernization. This section will be updated with detailed content soon. We help you design, build, and modernize scalable and resilient data platforms.]
          </p>
        </motion.header>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            [Placeholder: Detailed explanation of the approach to data platform modernization. This will cover aspects like cloud migration, data warehousing, data lakes, ETL/ELT pipelines, and infrastructure optimization. Content to be added.]
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            [Placeholder: Further details on technology selection (e.g., AWS, Azure, GCP), security considerations, and ensuring high availability and performance. Content to be added.]
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
                [Placeholder: Deliverable {item} - e.g., Cloud Data Platform Architecture Design. To be detailed.]
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
            [Placeholder: Explanation of unique selling propositions for this service. Highlighting expertise in modern data technologies and successful platform implementations. Content to be added.]
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-[var(--card-bg)] rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Modernize Your Data Foundation</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            [Placeholder: Call to action. Encourage users to get in touch for a consultation on their data platform and infrastructure needs. Content to be added.]
          </p>
          <motion.button
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build Your Future Platform
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default DataPlatformPage;

