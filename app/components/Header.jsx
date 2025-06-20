"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-[90vh] flex flex-col items-center justify-center gap-3 dark:bg-[var(--background)] pt-0 mt-0'>
      <motion.div 
         initial={{ scale:0 }}
         whileInView={{scale:1}}
         transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-40 border-2 border-[var(--accent-color)]/30'/>
      </motion.div>
      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xm md:text-2xl mb-2 font-Ovo text-[var(--text-secondary)]'>
            Hi! I'm Shivendra Singh <Image src={assets.hand_icon} alt='' 
            className='w-6'/></motion.h3>
        <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}} 
        className='text-3xl sm:text-6xl lg:text-[66px]
        font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>Executive Data & Technology Leader based in Sydney, Australia</motion.h1>
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}} 
        className='max-w-2xl mx-auto font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'>
        Transformational Leader with 14+ years of experience in  Data Strategy, Architecture, Data Engineering, Analytics, and Program Delivery.
        Passionate about transforming businesses through trusted, accessible, and actionable data.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact" className='px-10 py-3 items-center gap-2 rounded-full 
            border border-[var(--accent-color)] bg-[var(--accent-color)] text-white flex dark:bg-[var(--accent-color)] dark:text-white dark:border-[var(--accent-color)] hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-dark)] transition-colors'>Say Hello<Image src=
            {assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="Shivendra-Singh-HoData-CV.pdf" download 
            className='items-center gap-2 px-10 
            py-3 border border-[var(--accent-color)]/50 flex rounded-full bg-[var(--card-bg)] text-[var(--foreground)] dark:bg-[var(--card-bg)] dark:text-[var(--foreground)] dark:border-[var(--accent-color)]/50 hover:bg-[var(--accent-color)]/10 dark:hover:bg-[var(--accent-color)]/20 transition-colors'>Download CV<Image 
            src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}
export default Header
