"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import Link from 'next/link';
import { serviceData } from '@/assets/assets';

const ServicesPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Dark mode initialization
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <motion.div
        className="container mx-auto px-4 py-8 pt-24 lg:pt-32 bg-[var(--background)] text-[var(--foreground)] flex-grow"
        variants={staggerContainer(0.1, 0.1)}
        initial="initial"
        animate="whileInView"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.header
          className="text-center mb-10"
          variants={fadeIn}
        >
          <motion.h4
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.3, delay: 0.5}}
            className='text-lg font-Ovo text-[var(--accent-color)] tracking-wide uppercase mb-1'
          >
            Giving Back to the Data Community
          </motion.h4>
          <motion.h2
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-4xl md:text-5xl font-bold font-Ovo text-[var(--foreground)] mb-2'
          >
            Data Advisory & Voluntary Services
          </motion.h2>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className='max-w-2xl mx-auto mt-2 mb-2 font-Ovo text-base text-[var(--foreground)] opacity-80'
          >
            I offer free voluntary data advisory and solutions—mentorship, training, and advisory—focused on data strategy, architecture, and engineering to help you unlock data potential, enable informed decisions, and drive business growth.
          </motion.p>
        </motion.header>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Service Philosophy</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            We believe that effective data strategies must align with business objectives and deliver measurable value. Our approach combines technical expertise with business acumen to create practical, implementable solutions that drive real-world outcomes.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether you're just beginning your data journey or looking to optimize existing capabilities, our services are tailored to meet you where you are and help you achieve your goals.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Services</h2>
          
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 my-6 auto-rows-fr'
          >
            {serviceData.map((service, index) => (
              <Link href={service.link} key={index} className="group" tabIndex={0} role="link">
                <motion.div
                  whileHover={{scale: 1.01}}
                  className='relative border border-[var(--accent-color)] rounded-none cursor-pointer bg-white/60 dark:bg-darkHover/60 transition-all duration-300 h-full flex flex-col aspect-square overflow-hidden group focus:ring-2 focus:ring-[var(--accent-color)] outline-none min-h-[220px] max-h-[320px] p-0 m-0 shadow-none'
                >
                  {/* Gradient overlay on image */}
                  <div className="w-full h-1/2 rounded-none bg-cover bg-center relative flex items-center justify-center p-0 m-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/60 to-transparent z-10 rounded-none"></div>
                    <img src={service.bgImage} alt="" className="w-full h-full object-cover rounded-none" />
                  </div>
                  <div className="flex flex-col flex-grow z-20 justify-center items-center p-2 text-center">
                    <h3 className='text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-color)] transition-colors mb-1'>{service.title}</h3>
                    <p className='text-gray-700 dark:text-white/90 font-Ovo opacity-90 text-xs'>{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Discover</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We begin by understanding your business objectives, current data landscape, and challenges to identify opportunities.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We create tailored solutions and strategies that align with your business goals and technical requirements.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Deliver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                We implement solutions with a focus on knowledge transfer, ensuring your team can maintain and evolve the capabilities.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Industry Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep experience across multiple industries including finance, retail, healthcare, and government sectors.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Collaborative Approach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We work closely with your team, ensuring knowledge transfer and building internal capabilities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Results-Focused</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize measurable outcomes and ROI, ensuring your data initiatives deliver tangible business value.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Technology Agnostic</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We recommend the best tools for your specific needs, not tied to any vendor or platform.
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
          <div className="bg-[var(--accent-color)]/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-[var(--accent-color)] mb-4">Ready to Transform Your Data Strategy?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our data advisory services can help you unlock the full potential of your data assets and drive business growth.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent-color)] text-white font-medium rounded-full hover:bg-[var(--accent-color)]/80 transition-colors">
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
