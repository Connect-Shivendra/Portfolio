"use client";

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations'; // Adjusted path
import Link from 'next/link';

const AiMlSolutionsPage = () => {
  const serviceTitle = "AI & Machine Learning Solutions";

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
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{serviceTitle}: Transform Your Business with Intelligent Automation</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            In an era of unprecedented data growth, Artificial Intelligence (AI) and Machine Learning (ML) offer transformative potential for businesses. Our AI & ML Solutions are designed to help you harness this power, turning complex data into actionable insights, automating processes, and creating innovative products and services.
          </p>
        </motion.header>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Expertise</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We offer end-to-end AI and ML services, from strategy and development to deployment and management. Our key areas of expertise include:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-3 pl-4">
            {[{
              title: "Custom AI/ML Model Development:",
              text: "We design and build bespoke AI/ML models tailored to your specific business needs and data. Whether it's predictive maintenance, fraud detection, natural language processing, or computer vision, we create solutions that deliver measurable results."
            }, {
              title: "Machine Learning Operations (MLOps):",
              text: "We help you implement robust MLOps practices to streamline the deployment, monitoring, and management of your machine learning models. This ensures your models remain accurate, reliable, and scalable over time."
            }, {
              title: "Data Annotation and Preparation:",
              text: "High-quality data is the foundation of any successful AI/ML initiative. We provide data annotation and preparation services to ensure your data is clean, labeled, and ready for model training."
            }, {
              title: "AI-Powered Automation:",
              text: "We identify opportunities to automate manual processes using AI and ML, freeing up your team to focus on strategic initiatives. This can range from customer service chatbots to automated quality control in manufacturing."
            }, {
              title: "Generative AI Solutions:",
              text: "Explore the possibilities of generative AI with our expertise in building and fine-tuning large language models (LLMs) and diffusion models. We can help you create applications for content generation, code development, and creative design."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We believe in a collaborative and iterative approach to AI and ML development. We work closely with your team to understand your business challenges, identify potential use cases, and develop solutions that deliver tangible value. Our process typically involves:
          </p>
          <ol className="list-decimal list-inside text-[var(--text-secondary)] leading-relaxed space-y-3 pl-4">
            {[{
              text: "Discovery and Use Case Definition: We start by understanding your business objectives and identifying areas where AI/ML can make a significant impact."
            }, {
              text: "Data Collection and Preparation: We assist in gathering, cleaning, and preparing your data for model training."
            }, {
              text: "Model Development and Training: Our data scientists and ML engineers develop and train custom models using the latest techniques and frameworks."
            }, {
              text: "Evaluation and Validation: We rigorously test and validate the models to ensure accuracy, fairness, and robustness."
            }, {
              text: "Deployment and Integration: We help you deploy the models into your existing systems and workflows."
            }, {
              text: "Monitoring and Optimization: We provide ongoing support to monitor model performance and make necessary adjustments to ensure continued effectiveness."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                {item.text}
              </motion.li>
            ))}
          </ol>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-3 pl-4">
            {[{
              text: "Deep Technical Expertise: Our team comprises experienced data scientists, machine learning engineers, and AI specialists with a proven track record of delivering successful AI/ML solutions."
            }, {
              text: "Focus on Business Value: We prioritize projects that deliver measurable business outcomes, such as increased efficiency, reduced costs, improved customer satisfaction, and new revenue streams."
            }, {
              text: "Ethical and Responsible AI: We are committed to developing and deploying AI solutions that are fair, transparent, and accountable."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our AI/ML Approach</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            We believe in a practical, business-focused approach to AI and machine learning. Our solutions are designed to deliver real value, not just technical complexity. We combine cutting-edge technology with deep business understanding to create solutions that drive measurable results.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Whether you're looking to automate processes, gain deeper insights from your data, or create new AI-powered products, we have the expertise to help you succeed.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">Our AI/ML Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Predictive Analytics</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Leverage machine learning to forecast trends, identify patterns, and make data-driven predictions.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-[var(--card-bg)] p-6 rounded-lg shadow-sm text-[var(--text-primary)]"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">Natural Language Processing</h3>
              <p className="text-[var(--text-secondary)] text-center">
                Extract insights from text data and build intelligent text processing systems.
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
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Problem Definition</h3>
                <p className="text-[var(--text-secondary)]">
                  We work with you to clearly define the business problem and success metrics.
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
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Solution Development</h3>
                <p className="text-[var(--text-secondary)]">
                  We develop and test AI/ML solutions using best practices and modern tools.
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
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Deployment & Monitoring</h3>
                <p className="text-[var(--text-secondary)]">
                  We deploy solutions to production and provide ongoing monitoring and support.
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
            <h2 className="text-3xl font-bold text-[var(--accent-color)] mb-4">Ready to Harness the Power of AI/ML?</h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI/ML solutions can help you transform your business and stay ahead of the competition.
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

export default AiMlSolutionsPage;

