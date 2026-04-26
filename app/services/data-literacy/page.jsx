"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations'; // Adjusted path
import Link from 'next/link';

const DataLiteracyPage = () => {
  const serviceTitle = "Data Literacy & Upskilling Programs";

  const whyInvestItems = [
    {
      title: "Make Informed Decisions:",
      text: "Move beyond gut feelings and base decisions on evidence and insights derived from data."
    },
    {
      title: "Identify New Opportunities:",
      text: "Recognize patterns and trends in data that can lead to new products, services, or process improvements."
    },
    {
      title: "Improve Collaboration:",
      text: "Create a common language and understanding around data, fostering better communication and teamwork across departments."
    },
    {
      title: "Drive Innovation:",
      text: "Equip employees with the skills to experiment with data and develop novel solutions to business challenges."
    },
    {
      title: "Enhance Customer Understanding:",
      text: "Better interpret customer data to personalize experiences and improve satisfaction."
    }
  ];

  const programsItems = [
    {
      title: "Data Literacy Fundamentals:",
      text: "An introductory program covering basic data concepts, data visualization, and ethical data handling. This program is ideal for all employees, regardless of their role."
    },
    {
      title: "Data-Driven Decision Making for Managers:",
      text: "This program focuses on equipping managers with the skills to interpret data, ask the right questions, and lead data-informed teams."
    },
    {
      title: "Advanced Analytics & Data Science:",
      text: "For technical teams, we offer in-depth training on statistical modeling, machine learning, data visualization tools, and programming languages like Python and R."
    },
    {
      title: "Customized Workshops:",
      text: "We can develop bespoke training programs tailored to your specific industry, business challenges, and data sources."
    }
  ];

  const benefitsItems = [
    { text: "Tailored Curriculum: We customize our training programs to align with your specific business goals and the skill levels of your employees." },
    { text: "Expert Instructors: Learn from experienced data scientists and educators who are passionate about sharing their knowledge." },
    { text: "Practical Learning: Gain hands-on experience with real-world data sets and industry-standard tools." },
    { text: "Measurable Impact: Equip your workforce with the skills to drive data-informed decisions and achieve tangible business results." },
    { text: "Flexible Delivery: We offer a variety of delivery formats, including in-person workshops, online courses, and blended learning programs." }
  ];

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
        <motion.header className="mb-12 text-center" variants={fadeIn}>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">{serviceTitle}: Empowering Your Workforce for a Data-Driven Future</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            In today's data-rich environment, the ability to understand, interpret, and communicate data-driven insights is no longer a niche skill but a fundamental requirement for success. Our Data Literacy & Upskilling Programs are designed to equip your workforce with the knowledge and tools necessary to thrive in this new era.
          </p>
        </motion.header>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Why Invest in Data Literacy?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Data literacy is the ability to read, work with, analyze, and communicate data. It empowers individuals at all levels of an organization to:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-3 pl-4">
            {whyInvestItems.map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Data Literacy & Upskilling Programs</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We offer a variety of programs tailored to different needs and skill levels:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-3 pl-4">
            {programsItems.map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-16" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Data Literacy Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            We believe that data literacy is not just about understanding data - it's about creating a culture where data-driven decision making becomes second nature. Our approach combines practical training with real-world applications to ensure lasting impact.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Whether you're looking to upskill your entire organization or focus on specific teams, our data literacy programs are tailored to meet your unique needs and objectives.
          </p>
        </motion.section>

        <motion.section className="mb-16" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Data Literacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Data Literacy Training</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Comprehensive training programs covering data fundamentals, analysis techniques, and data-driven decision making.
              </p>
            </motion.div>
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Data Champions Program</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Develop internal data champions who can drive data literacy initiatives and support their teams.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="mb-16" variants={slideUp}>
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
                  We evaluate your organization's current data literacy levels and identify key areas for improvement.
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
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Customization</h3>
                <p className="text-[var(--text-secondary)]">
                  We develop tailored training programs that address your specific needs and use cases.
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
                  We deliver training and support to ensure successful adoption and lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="mb-16 text-center" variants={fadeIn}>
          <div className="bg-[var(--accent-color)]/10 p-8 rounded-lg text-[var(--text-primary)]">
            <h2 className="text-3xl font-bold text-[var(--accent-color)] mb-4">Ready to Build a Data-Literate Organization?</h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Let's discuss how our data literacy programs can help your organization make better decisions with data.
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

export default DataLiteracyPage;

