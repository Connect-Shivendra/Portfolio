"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations'; // Adjusted path

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
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{serviceTitle}: Empowering Your Workforce for a Data-Driven Future</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In today's data-rich environment, the ability to understand, interpret, and communicate data-driven insights is no longer a niche skill but a fundamental requirement for success. Our Data Literacy & Upskilling Programs are designed to equip your workforce with the knowledge and tools necessary to thrive in this new era.
          </p>
        </motion.header>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Why Invest in Data Literacy?</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Data literacy is the ability to read, work with, analyze, and communicate data. It empowers individuals at all levels of an organization to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {whyInvestItems.map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Data Literacy & Upskilling Programs</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            We offer a variety of programs tailored to different needs and skill levels:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {programsItems.map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We believe in a hands-on, practical approach to learning. Our programs combine theoretical knowledge with real-world case studies and interactive exercises. We focus on building not just technical skills, but also critical thinking and problem-solving abilities. Our instructors are experienced professionals who are passionate about sharing their knowledge and empowering others.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Benefits of Partnering with Us</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {benefitsItems.map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg" variants={fadeIn}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Invest in Your Team's Data Future</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Investing in your team's data literacy is an investment in your organization's future. Let us help you build a data-savvy workforce that can confidently navigate the complexities of the digital age and drive sustainable growth.
          </p>
          <motion.button 
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Empower Your Team Today
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default DataLiteracyPage;

