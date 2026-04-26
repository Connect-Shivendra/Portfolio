"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/app/utils/animations';
import { eventHospitalityEvents } from '@/app/utils/timelineData';

const EventHospitalityPage = () => {
  const router = useRouter();
  const workTitle = "Event Hospitality & Entertainment (ASX: EVT)";
  const workDescription = "Head of Data Platforms & Engineering, leading enterprise data strategy and transformation initiatives";

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
        <Timeline events={eventHospitalityEvents} />

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            After winning the 'HQ Rising Star' award from the CEO, I was promoted to Head of Data Platforms and Engineering at Event Hospitality & Entertainment, responsible for implementing the enterprise data strategy and leading data transformation initiatives across 75+ hotels, 74+ cinemas, and Thredbo Ski Resort in Australia and New Zealand.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            My role involved evaluating Deloitte's five-year IT Roadmap and developing an Enterprise Data Strategy aligned with business goals, focusing on risk reduction, enablement, and customer growth. I led the migration from a 12-year-old on-premise EDW to a modern cloud-based platform, while also transforming the organization's business intelligence capabilities.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
            <motion.li variants={fadeIn}>
              Developed and executed Enterprise Data Strategy that transformed EVT into a data-driven organization with 250+ daily active self-service business users
            </motion.li>
            <motion.li variants={fadeIn}>
              Led migration of 18+ data sources to a unified Snowflake platform, reducing data ingestion and processing times by 80%
            </motion.li>
            <motion.li variants={fadeIn}>
              Deployed Enterprise BI platform with 36+ dashboards, driving a 29% reduction in lost sales opportunities through transparent KPI tracking
            </motion.li>
            <motion.li variants={fadeIn}>
              Achieved $1.7M in cost savings through outsourcing and end-to-end automation
            </motion.li>
            <motion.li variants={fadeIn}>
              Received Business Transformation of the Year Runner-Up award for the Hotels Dashboard Project (2022)
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Technologies Used</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Snowflake, AWS (S3, Lambda, SFTP, Glue), Tableau, Matillion, Azure AD, SAML, OpenID, RBAC, Business Objects, Crystal Reports, InforPM, ITSM, Agile methodologies, data quality tools, data governance frameworks.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Results & Impact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The successful execution of the data strategy through multiple projects transformed EVT into a data-driven organization. The implementation of a trusted single source of truth with integrated views on Finance, Sales, Marketing, Customer, and Operational data enabled better decision-making across the business. The Enterprise BI platform provided near real-time data visualization, fostering productivity and competition within sales teams, while enhanced security measures ensured data compliance and risk management.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-[var(--card-bg)] rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Interested in Similar Solutions?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Looking to transform your organization's data landscape? I can help you develop and implement comprehensive data strategies, build robust data platforms, and create insightful visualizations that drive better decision-making and business growth.
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

export default EventHospitalityPage;
