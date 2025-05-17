'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
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
          className='text-center mb-2 text-lg font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>My Portfolio</motion.h4>
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>My Latest Work</motion.h2>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>
            I work on....
        </motion.p>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='grid grid-cols-auto gap-5 my-10'>
            {workData.map((project,index)=>(
                <motion.div 
                  whileHover={{scale: 1.05}}
                  transition={{duration: 0.3}}
                  key={index} 
                  className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                  style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white dark:bg-darkHover w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold flex items-center dark:text-white'>{project.title}</h2>
                            <p className='text-sm text-gray-700 flex items-center dark:text-white/90'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-lime-500 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                    </div>
                </motion.div>
            ))}    
        </motion.div>
        
        <motion.a 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.1, delay: 0.5}}
          href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover/70'>
            Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow' className='w-4'/>
        </motion.a>

    </motion.div>
    )
}        

export default Work
