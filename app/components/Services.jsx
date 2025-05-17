'use client';

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}     
      id="services" className='w-full px-[12%] py-10 dark:bg-[var(--background)]'>
        <motion.h4 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.3, delay: 0.5}}
          className='text-center mb-2 text-lg font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Giving Back to the Data Community</motion.h4>
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.5}}        
          className='text-center text-5xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Data Advisory & Voluntary Services</motion.h2>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>
            I offer free voluntary data advisory and solutions — mentorship, training, and advisory—focused on data strategy, architecture, and engineering to help you unlock data potential, enable informed decisions, and drive business growth.
        </motion.p>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon,title,description, link},index)=>(
                <motion.div 
                  whileHover={{scale: 1.05}}
                  key={index} 
                  className='bg-white dark:bg-[#404040] shadow-lg rounded-lg overflow-hidden h-full transition-colors duration-300 hover:shadow-black dark:hover:shadow-white border border-gray-200 dark:border-white hover:bg-lightHover dark:hover:bg-[#404040]/70 hover:-translate-y-1 duration-500 px-8 py-12'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-200 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-700 leading-5 dark:text-white/90'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5 dark:text-white hover:underline'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                    </a>
                </motion.div>
            ))}    
        </motion.div>
    </motion.div>
  )
}

export default Services
