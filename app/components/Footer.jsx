import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    // Added w-full and background color using CSS variable
    <div className='mt-20 w-full bg-[var(--background)]'>
      <div className='text-center pt-10'> {/* Added top padding */} 
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto
        mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon : assets.mail_icon} alt='' className='w-6' />  {/* Chnaged email icon to be same in both dark and day modes */} 
        <span className="text-center mb-2 text-lg font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]">connect.shivendra@gmail.com</span>   
        </div>
      </div>

      {/* Removed mx-[10%] and added px-[10%] for padding */}
      <div className='text-center sm:flex items-center justify-between 
      border-t border-gray-400 px-[10%] mt-12 py-6'>
        <p>© 2025 Shivendra Singh is licensed under CC BY-NC-ND 4.0</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.linkedin.com/in/connectshivendra/">LinkedIn</a></li>
            <li><a target='_blank' href="https://github.com/Connect-Shivendra">GitHub</a></li> {/* Added GitHub link */} 
        </ul>
      </div>
    </div>
  )
}

export default Footer

