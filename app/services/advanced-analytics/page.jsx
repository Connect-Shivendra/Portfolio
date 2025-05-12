"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';

const AdvancedAnalyticsPage = () => {
  const serviceTitle = "Advanced Analytics & Insights";

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
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{serviceTitle}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            [Placeholder: Brief introduction to Advanced Analytics & Insights. This section will be updated with detailed content soon. We help you uncover deep insights from your data using cutting-edge analytical techniques.]
          </p>
        </motion.header>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            [Placeholder: Detailed explanation of the approach to advanced analytics. This will cover aspects like predictive modeling, machine learning, statistical analysis, and data visualization to extract actionable insights. Content to be added.]
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            [Placeholder: Further details on the methodologies used, such as exploratory data analysis, feature engineering, model selection, and validation. Content to be added.]
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Key Deliverables</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
              >
                [Placeholder: Deliverable {item} - e.g., Predictive Model & Documentation. To be detailed.]
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            [Placeholder: Explanation of unique selling propositions for this service. Highlighting expertise in various analytical techniques and industry applications. Content to be added.]
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Unlock Deeper Insights from Your Data</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            [Placeholder: Call to action. Encourage users to get in touch for a consultation on their advanced analytics needs. Content to be added.]
          </p>
          <motion.button
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Advanced Analytics
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default AdvancedAnalyticsPage;

