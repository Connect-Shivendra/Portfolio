"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import Link from 'next/link';

const DataStrategyPage = () => {
  const serviceTitle = "Data Strategy & Roadmap Development";

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
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            [Placeholder: Brief introduction to Data Strategy & Roadmap Development. This section will be updated with detailed content soon. We help you define a clear vision and actionable plan to leverage your data assets effectively.]
          </p>
        </motion.header>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Data Strategy Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            We believe that a successful data strategy must align with your business objectives and deliver measurable value. Our approach combines technical expertise with business acumen to create practical, implementable solutions that drive real-world outcomes.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Whether you're just beginning your data journey or looking to optimize existing capabilities, our data strategy services are tailored to meet you where you are and help you achieve your goals.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Data Strategy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Data Strategy Development</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Create a comprehensive data strategy aligned with your business objectives and goals.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Data Governance</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Establish robust data governance frameworks to ensure data quality, security, and compliance.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Assessment</h3>
                <p className="text-[var(--text-secondary)]">
                  We evaluate your current data landscape and identify opportunities for improvement.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Strategy Development</h3>
                <p className="text-[var(--text-secondary)]">
                  We create a tailored data strategy that aligns with your business goals.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Implementation</h3>
                <p className="text-[var(--text-secondary)]">
                  We help you execute the strategy and provide ongoing support and guidance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="mb-16 text-center"
          variants={fadeIn}
        >
          <div className="bg-[var(--accent-color)]/10 p-8 rounded-lg text-[var(--text-primary)]">
            <h2 className="text-3xl font-bold text-[var(--accent-color)] mb-4">Ready to Transform Your Data Strategy?</h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Let's discuss how our data strategy services can help you unlock the full potential of your data assets and drive business growth.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent-color)] text-white font-medium rounded-full hover:bg-[var(--accent-color)]/80 transition-colors">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default DataStrategyPage;

