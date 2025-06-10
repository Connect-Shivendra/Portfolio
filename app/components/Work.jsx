'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "motion/react";

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='work' className='w-full px-[12%] py-10 dark:bg-[var(--background)]'> {/* Added dark:bg-[var(--background)] */}
        <motion.h4 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.3, delay: 0.5}}
          className='text-center mb-2 text-lg font-Ovo text-[var(--accent-color)] dark:text-[var(--accent-color)]'>Work Timeline</motion.h4>
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Previous Companies & Deliverables</motion.h2>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>
            I've worked with large multinational companies, local governments, and startups, delivering impactful solutions across various domains across the globe. Here are some of the key projects I've been involved in.
        </motion.p>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='grid grid-cols-3 gap-1 my-10 max-w-6xl mx-auto'>
            {workData.map((project,index)=>(
                <Link href={project.link} key={index}>
                  <motion.div 
                    whileHover={{scale: 1.02}}
                    transition={{duration: 0.3}}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                      <div className='bg-[var(--card-bg)] dark:bg-[var(--card-bg)] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
                          <div className="flex-1 min-w-0">
                              <h2 className='font-semibold text-xs truncate text-[var(--foreground)] dark:text-[var(--foreground)]'>{project.title}</h2>
                              <p className='text-[10px] text-[var(--foreground)]/80 truncate dark:text-[var(--foreground)]/80'>{project.description}</p>
                          </div>
                          <div className='border rounded-full border-[var(--foreground)] dark:border-[var(--foreground)] w-6 aspect-square flex-shrink-0 flex items-center justify-center shadow-[1px_1px_0_var(--foreground)] dark:shadow-[1px_1px_0_var(--foreground)] group-hover:bg-[var(--accent-color)] dark:group-hover:bg-[var(--accent-color)] transition ml-1'>
                              <Image src={assets.send_icon} alt='send icon' className='w-3' />
                          </div>
                      </div>
                  </motion.div>
                </Link>
            ))}    
        </motion.div>

    </motion.div>
    )
}        

export default Work
