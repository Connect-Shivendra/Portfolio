"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'motion/react';

const CamdenCouncilPage = () => {
  const workTitle = "Local Government: Camden Council";
  const workDescription = "Data Strategy, Azure-Databricks-PowerBI Data Platform, Information management, etc.";

  const timelineEvents = [
    {
      date: "June 2024",
      title: "Role Commencement",
      description: "Started as Head of Information & BI Services, overseeing Data & Insights, Enterprise Information Management, and Spatial Information Services."
    },
    {
      date: "July 2024",
      title: "Enterprise Data Strategy",
      description: "Developed and received ELG approval for comprehensive data strategy focusing on data foundations, capabilities, and governance."
    },
    {
      date: "August 2024",
      title: "Enterprise BI Implementation",
      description: "Launched operational dashboards for Sustainability, Customer Planning & Performance, Employee Surveys, and Risk Management."
    },
    {
      date: "September 2024",
      title: "Data Lakehouse Planning",
      description: "Interviewed local government data leaders across Australia to finalize Azure Databricks architecture for the Enterprise Data Lakehouse."
    },
    {
      date: "October 2024",
      title: "Open Data Initiatives",
      description: "Launched innovative open data projects including Mowing Schedule visualization and Hook, Line & Capture for community engagement."
    },
    {
      date: "November 2024",
      title: "EDMS Upgrade Planning",
      description: "Initiated planning for Opentext Content Manager upgrade and evaluation of cloud-based alternatives."
    }
  ];

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

        <Timeline events={timelineEvents} />

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            As Head of Information &amp; BI Services at Camden Council, I spearhead Data &amp; Insights (D&amp;I), Enterprise Information Management (EIM - EDMS), and Spatial Information Services (SIS - QGIS) functions within the DTI (IT) branch. My role focuses on implementing data-driven strategies and solutions to enhance decision-making across the organization.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            A key achievement has been the development and approval of the Enterprise Data Strategy, which outlines a comprehensive approach to improving data maturity, delivering high-value use cases, and implementing robust governance frameworks.
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
            <li>Developed and received approval for comprehensive Enterprise Data Strategy aligned with organizational goals</li>
            <li>Designed and implemented operational dashboards in PowerBI covering Sustainability, Performance, Employee Satisfaction, and Risk Management</li>
            <li>Led the planning and architecture selection for a greenfield Azure Databricks-based Enterprise Data Lakehouse</li>
            <li>Launched innovative open data initiatives to foster transparency and community engagement</li>
            <li>Implemented NSW Information Classification and Labelling using MS Purview on M365 products</li>
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
            Azure Databricks, PowerBI, Microsoft Purview, Opentext Content Manager, QGIS, Azure Cloud Services, IoT sensors, M365 products, DAMA framework for data governance.
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
            The implementation of the Enterprise Data Strategy and associated initiatives has positioned Camden Council to make more informed, data-driven decisions. The planned Enterprise Data Lakehouse will create a single source of truth, eliminating siloed information and enabling cross-functional insights. Open data initiatives have enhanced community engagement and transparency, while improved governance frameworks have strengthened data security and compliance.
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
            Looking to transform your organization&apos;s data landscape? I can help you develop and implement comprehensive data strategies, build robust data platforms, and create insightful visualizations that drive better decision-making.
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

export default CamdenCouncilPage;
