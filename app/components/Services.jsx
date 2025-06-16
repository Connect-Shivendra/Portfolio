'use client';

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

// Premium, concise card content
const conciseServiceData = [
  {
    ...serviceData[0],
    title: 'Data Strategy & Roadmap',
    description: 'Shape your data vision and build a clear path to business value.'
  },
  {
    ...serviceData[1],
    title: 'Data Governance & Compliance',
    description: 'Ensure data quality, security, and regulatory compliance.'
  },
  {
    ...serviceData[2],
    title: 'Advanced Analytics & Insights',
    description: 'Unlock actionable insights and predict trends with advanced analytics.'
  },
  {
    ...serviceData[3],
    title: 'Data Platform Modernization',
    description: 'Modernize your data infrastructure for scalability and reliability.'
  },
  {
    ...serviceData[4],
    title: 'Business Intelligence',
    description: 'Empower teams with interactive dashboards and self-service analytics.'
  },
  {
    ...serviceData[5],
    title: 'Data-Driven Product Development',
    description: 'Infuse analytics into products for customer-centric innovation.'
  },
  {
    ...serviceData[6],
    title: 'AI & Machine Learning',
    description: 'Deploy custom AI solutions for smarter business outcomes.'
  },
  {
    ...serviceData[7],
    title: 'Data Literacy & Upskilling',
    description: 'Build a data-driven culture with tailored training and workshops.'
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="services" className='w-full px-[8%] py-12 bg-gradient-to-br from-[var(--background)] to-[var(--background)] dark:from-[var(--background)] dark:to-[var(--background)]'>
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h4
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.3, delay: 0.5}}
            className='text-lg font-Ovo text-[var(--accent-color)] tracking-wide uppercase mb-1'>Giving Back to the Data Community</motion.h4>
          <motion.h2
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-4xl md:text-5xl font-bold font-Ovo text-[var(--foreground)] mb-2'>Data Advisory & Voluntary Services</motion.h2>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className='max-w-2xl mx-auto mt-2 mb-2 font-Ovo text-base text-[var(--foreground)] opacity-80'>
            I offer free voluntary data advisory and solutions—mentorship, training, and advisory—focused on data strategy, architecture, and engineering to help you unlock data potential, enable informed decisions, and drive business growth.
          </motion.p>
        </div>

        {/* Card Grid */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 my-6 auto-rows-fr'>
            {conciseServiceData.map(({title, description, link, bgImage}, index) => (
              <Link href={link} key={index} className="group" tabIndex={0} role="link">
                <motion.div
                  whileHover={{scale: 1.02}}
                  className='relative border border-[var(--border-color)] rounded-lg cursor-pointer bg-[var(--card-bg)] dark:bg-[var(--card-bg)] backdrop-blur-lg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-[var(--transition-duration)] h-full flex flex-col aspect-square overflow-hidden group focus:ring-2 focus:ring-[var(--accent-color)] outline-none min-h-[220px] max-h-[320px]'>
                    {/* Gradient overlay on image */}
                    <div className="w-full h-1/2 rounded-t-lg bg-cover bg-center relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/60 to-transparent z-10 rounded-t-lg"></div>
                      <img src={bgImage} alt="" className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                    <div className="flex flex-col flex-grow z-20 justify-center items-center p-6 text-center">
                      <h3 className='text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors mb-2'>{title}</h3>
                      <p className='text-[var(--text-secondary)] font-Ovo opacity-90 text-sm leading-relaxed'>{description}</p>
                    </div>
                    {/* Card hover effect */}
                    <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[var(--accent-color)] transition-all pointer-events-none"></span>
                </motion.div>
              </Link>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services
