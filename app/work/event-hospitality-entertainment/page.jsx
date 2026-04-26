"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'motion/react';
import { eventHospitalityEvents } from '@/app/utils/timelineData';

const EventHospitalityPage = () => {
  const workTitle = "Event Hospitality & Entertainment (ASX: EVT)";
  const workDescription = "Head of Data Platforms & Engineering, leading enterprise data strategy and transformation initiatives";

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

        <Timeline events={eventHospitalityEvents} />

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            After winning the &apos;HQ Rising Star&apos; award from the CEO, I was promoted to Head of Data Platforms and Engineering at Event Hospitality &amp; Entertainment, responsible for implementing the enterprise data strategy and leading data transformation initiatives across 75+ hotels, 74+ cinemas, and Thredbo Ski Resort in Australia and New Zealand.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            My role involved evaluating Deloitte&apos;s five-year IT Roadmap and developing an Enterprise Data Strategy aligned with business goals, focusing on risk reduction, enablement, and customer growth. I led the migration from a 12-year-old on-premise EDW to a modern cloud-based platform, while also transforming the organization&apos;s business intelligence capabilities.
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
            <li>Developed and executed Enterprise Data Strategy that transformed EVT into a data-driven organization with 250+ daily active self-service business users</li>
            <li>Led migration of 18+ data sources to a unified Snowflake platform, reducing data ingestion and processing times by 80%</li>
            <li>Deployed Enterprise BI platform with 36+ dashboards, driving a 29% reduction in lost sales opportunities through transparent KPI tracking</li>
            <li>Achieved $1.7M in cost savings through outsourcing and end-to-end automation</li>
            <li>Received Business Transformation of the Year Runner-Up award for the Hotels Dashboard Project (2022)</li>
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
            Snowflake, AWS (S3, Lambda, SFTP, Glue), Tableau, Matillion, Azure AD, SAML, OpenID, RBAC, Business Objects, Crystal Reports, InforPM, ITSM, Agile methodologies, data quality tools, data governance frameworks.
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
            The successful execution of the data strategy through multiple projects transformed EVT into a data-driven organization. The implementation of a trusted single source of truth with integrated views on Finance, Sales, Marketing, Customer, and Operational data enabled better decision-making across the business. The Enterprise BI platform provided near real-time data visualization, fostering productivity and competition within sales teams, while enhanced security measures ensured data compliance and risk management.
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
            Looking to transform your organization&apos;s data landscape? I can help you develop and implement comprehensive data strategies, build robust data platforms, and create insightful visualizations that drive better decision-making and business growth.
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

export default EventHospitalityPage;
