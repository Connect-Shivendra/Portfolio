/* eslint-disable react/no-unescaped-entities */
'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'; // Import Link for internal navigation
import { useRouter, usePathname } from 'next/navigation'; // Import router for programmatic navigation

// Accept setActiveSection prop to handle clicks directly
const Navbar = ({isDarkMode, setIsDarkMode, isOnBlogPage = false, setActiveSection}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    } 

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    } 

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    // Handle navigation clicks to update state and scroll
    const handleNavClick = (sectionId) => {
      closeMenu(); // Close mobile menu if open, do this first

      // For all section navigation, ensure consistent behavior across all pages
      if (sectionId === 'top') {
        // Special case for home/top - just go to homepage
        window.location.href = '/';
        return;
      }
      
      // For all other sections (including 'work'), always use the hash navigation
      // This ensures consistent behavior regardless of current page
      
      if (pathname === '/') {
        // If already on homepage, update active section and scroll
        if (typeof setActiveSection === 'function') {
          setActiveSection(sectionId);
        }
        // Ensure the URL has the correct anchor
        window.history.pushState({}, '', `/#${sectionId}`);
        // Manually scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to homepage with the section anchor
        window.location.href = `/#${sectionId}`;
      }
    };

  return (
    <>
    {/* Background Image */}
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden'>
        {assets.header_bg_color && 
          <Image src={assets.header_bg_color} alt='' className='w-screen h-screen object-cover' priority />
        }
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
        items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        
        {/* Logo Link - Use onClick to set state to 'top' */}
        <button onClick={() => handleNavClick('top')} className='cursor-pointer mr-14'> 
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28' alt='Logo' priority />
        </button>

        {/* Desktop Menu - Use buttons with onClick */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-darkHover/70"} `}>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('top')}>Home</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('about')}>Professional Highlights</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('services')}>Services</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('blogs')}>Blogs</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('work')}>My Work</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('contact')}>Contact Me</button></li>
        </ul>
        <div className='flex items-center gap-4'>
            {/* Dark Mode Toggle */}
            <button onClick={()=> setIsDarkMode(prev => !prev)} aria-label="Toggle dark mode" className='bg-white dark:bg-darkHover p-2 rounded-full'>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>
            
            {/* Contact Button - Changed text to white in dark mode */}
            <button onClick={() => handleNavClick('contact')} className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo bg-white
            dark:border-white dark:text-white dark:bg-darkHover hover:bg-gray-100 dark:hover:bg-darkHover/70 transition-colors'>Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/>
            </button>

            {/* Mobile Menu Button */}
            <button className='block md:hidden ml-3 bg-white dark:bg-darkHover p-2 rounded-full' onClick={openMenu} aria-label="Open menu">
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile Menu - Use buttons with onClick */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-64 
        dark:bg-darkHover dark:text-[var(--foreground)]'>
            {/* Close Button */}
            <div className='absolute right-6 top-6 bg-white dark:bg-darkHover/90 p-2 rounded-full' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('top')}>Home</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('about')}>About Me</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('services')}>Services</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('blogs')}>Blogs</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('work')}>My Work</button></li>
            <li><button className='font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]' onClick={() => handleNavClick('contact')}>Contact Me</button></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
