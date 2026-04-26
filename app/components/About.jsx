'use client';

import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.6}}
      id='about' className='w-full px-[12%] py-10 dark:bg-[var(--background)]'> {/* Added dark:bg-[var(--background)] */}
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.3}}      
        className='text-center mb-2 text-lg font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Introduction</motion.h4>
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.5}} 
        className='text-center mb-2 text-5xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Professional Highlights</motion.h2>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col items-center gap-20 my-20'>
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}} 
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}} 
          className='flex-1'>
            <p className='max-w-2xl mb-10 font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>
            Data leader with 14+ years of experience in Data Strategy, Architecture, Engineering, Analytics
             and Program Delivery. Proven track record of transforming data ecosystems, driving innovation
              and enabling business growth through strategic leadership. Skilled in managing large, 
              cross-functional teams across continents, with a focus on building trustable, accessible
               and actionable data solutions.</p>

            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 1}}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},
                    index)=>( 
                    <motion.li 
                      whileHover={{scale: 1.05}}
                      className ='summary-card border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-x-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 dark:bg-darkHover'
                      key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/90'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
              initial={{y:20, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration: 1.3, duration: 0.5}}
              className='mt-12 mb-6 text-xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Tools of the Trade</motion.h4>
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 1.5, duration: 0.6}}
              className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-2xl'>
              {toolsData.map((tool,index)=>( 
                <motion.li 
                  whileHover={{scale: 1.05}}
                  className='flex items-center justify-center w-full aspect-square border
                  border-gray-400 rounded-lg cursor-pointer hover:-translate-x-1 p-4
                       duration-500 bg-[var(--card-bg)] hover:bg-lightHover dark:border-white dark:bg-darkTheme dark:shadow-[0_0_5px_rgba(255,255,255,0.5)]' 
                  key={index}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                      <Image 
                        src={tool.logo} 
                        alt={tool.name} 
                        width={56} 
                        height={56} 
                        className='w-12 sm:w-16 md:w-20 bg-[var(--card-bg)] dark:bg-darkTheme dark:p-2 dark:rounded-md' 
                      />
                    </a>
                </motion.li>
              ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
