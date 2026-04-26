"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'motion/react';
import { woolworthsEvents } from '@/app/utils/timelineData';

const WoolworthsGroupPage = () => {
  const workTitle = "Woolworths Group (ASX: WOW)";
  const workDescription = "Data Team Lead at WooliesX Everyday Rewards, developing big data solutions on AWS cloud platform";

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

        <Timeline events={woolworthsEvents} />

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Project Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            As Data Team Lead at WooliesX Everyday Rewards, I led architectural and technical development of big data solutions, working alongside business and marketing teams to improve customer engagement and drive data-driven decision making across multiple retail verticals including Woolworths retail, BWS, Dan Murphy, and Big-W.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            My role involved designing and implementing cloud-based data solutions on AWS, processing billions of transactions from both online and brick-and-mortar stores to enable sophisticated customer segmentation and targeted marketing initiatives.
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
            <li>Led development of Tequila Decision Engine, transforming marketing from campaign-focused to customer-focused targeting, achieving 18% higher email clicks and 3% higher conversion</li>
            <li>Implemented security remediation following KPMG audit, refactoring 6% of code across GitHub repositories to enhance data protection</li>
            <li>Reduced AWS Redshift cluster cost from $200k/month to $80k/month through optimization and data pipeline redesign</li>
            <li>Developed location-based intelligence system (Proximity) for competitive advantage in customer targeting</li>
            <li>Enabled Apple Wallet integration for Everyday Rewards program, improving customer convenience and engagement</li>
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
            Apache Spark on EMR, Informatica Cloud, Kinesis, ICRT, Python/PySpark, Jenkins, AWS services (Aurora, Redshift, DynamoDB, S3, Lambda, ECS), PostgreSQL, MySQL, Hive, Salesforce Marketing Cloud, GitHub, CI/CD pipelines.
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
            The implementation of advanced data solutions transformed WooliesX&apos;s marketing capabilities, enabling more personalized customer engagement and driving higher conversion rates. The optimization of AWS infrastructure significantly reduced operational costs while maintaining performance. Enhanced security measures protected sensitive customer data, while the development of location-based intelligence provided a competitive edge in the retail market. These initiatives collectively supported WooliesX&apos;s journey toward becoming a more data-driven organization with improved customer targeting capabilities.
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
            Looking to enhance your customer targeting and marketing effectiveness through data? I can help you implement cloud-based big data solutions that drive personalization, optimize costs, and improve conversion rates across your digital channels.
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

export default WoolworthsGroupPage;
