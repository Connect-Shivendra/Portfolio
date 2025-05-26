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
          className='max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 auto-rows-fr'>
            {serviceData.map(({icon, title, description, link, bgImage}, index) => (
                <motion.div 
                  whileHover={{scale: 1.05}}
                  key={index} 
                  className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-x-1
                       duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white
                       dark:hover:bg-darkHover/50 dark:bg-darkHover h-full flex flex-col min-h-[300px]'>
                    {/* Image container with background image */}
                    <div 
                      className="w-full h-40 rounded-t-xl bg-cover bg-center"
                      style={{backgroundImage: `url(${bgImage})`}}
                    ></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Image src={icon} alt='' className='w-7 mt-3'/>
                      <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                      <p className='text-gray-600 text-sm dark:text-white/90 flex-grow'>
                          {description}
                      </p>
                      <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-white hover:underline'>
                          Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                      </a>
                    </div>
                </motion.div>
            ))}    
        </motion.div>
    </motion.div>
  )
}

export default Services
