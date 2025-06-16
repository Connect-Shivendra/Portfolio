/* eslint-disable react/no-unescaped-entities */
'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'; // Import Link for internal navigation
import { useRouter, usePathname } from 'next/navigation'; // Import router for programmatic navigation
import { useDarkMode } from '@/app/context/DarkModeContext';

// Accept setActiveSection prop to handle clicks directly
const Navbar = ({isOnBlogPage = false, setActiveSection}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const { isDarkMode, setIsDarkMode } = useDarkMode();
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

      if (sectionId === 'top') {
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          router.replace('/');
        } else {
          router.push('/');
        }
        return;
      }
      
      // Special case for services - update activeSection AND navigate to dedicated services page
      if (sectionId === 'services') {
        // Update activeSection state if we're on the homepage
        if (setActiveSection && pathname === '/') {
          setActiveSection('services');
        }
        // Navigate to dedicated services page
        router.push('/services');
        return;
      }
      
      // For all other sections, update activeSection if provided and navigate to /#sectionId
      if (setActiveSection && pathname === '/') {
        setActiveSection(sectionId);
      }
      router.push(`/#${sectionId}`);
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
        items-center justify-between z-50 ${isScroll ? "bg-[var(--card-bg)] bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[var(--background)] dark:shadow-[var(--accent-color)]/20" : ""}`}>
        
        {/* Logo Link - Use onClick to set state to 'top' */}
        <button onClick={() => handleNavClick('top')} className='cursor-pointer' aria-label="Go to Home"> 
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28' alt='Logo' priority />
        </button>

        {/* Desktop Menu - Use buttons with onClick */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-[var(--card-bg)] shadow-sm bg-opacity-50 dark:border dark:border-[var(--foreground)]/50 dark:bg-[var(--card-bg)]/70"} `}>
            <li><button aria-label="Go to Home" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('top')}>Home</button></li>
            <li><button aria-label="Go to Professional Highlights" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('about')}>Professional Highlights</button></li>
            <li><button aria-label="Go to Services" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('services')}>Services</button></li>
            <li><button aria-label="Go to Blogs" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('blogs')}>Blogs</button></li>
            <li><button aria-label="Go to My Work" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('work')}>My Work</button></li>
            <li><button aria-label="Go to Contact Me" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('contact')}>Contact Me</button></li>
        </ul>
        <div className='flex items-center gap-4'>
            {/* Dark Mode Toggle */}
            <button onClick={()=> setIsDarkMode(prev => !prev)} aria-label="Toggle dark mode" className='bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] transition-colors'>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>
            
            {/* Contact Button - Changed text to white in dark mode */}
            <button onClick={() => handleNavClick('contact')} aria-label="Go to Contact Me" className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-[var(--accent-color)]/70 rounded-full ml-4 font-Ovo bg-[var(--card-bg)]
            dark:border-[var(--accent-color)]/70 dark:text-[var(--foreground)] dark:bg-[var(--card-bg)] hover:bg-[var(--accent-color)]/10 dark:hover:bg-[var(--accent-color)]/20 transition-colors'>Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/>
            </button>

            {/* Mobile Menu Button */}
            <button className='block md:hidden ml-3 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] transition-colors' onClick={openMenu} aria-label="Open menu">
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile Menu - Use buttons with onClick */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-[var(--background)]/90 transition-transform duration-500 transform translate-x-64 
        dark:bg-[var(--card-bg)] dark:text-[var(--foreground)]'>
            {/* Close Button */}
            <div className='absolute right-6 top-6 bg-[var(--card-bg)] dark:bg-[var(--hover-bg)] p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--accent-color)]/20 transition-colors' onClick={closeMenu} aria-label="Close menu">
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>
            <li><button aria-label="Go to Home" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('top')}>Home</button></li>
            <li><button aria-label="Go to About Me" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('about')}>About Me</button></li>
            <li><button aria-label="Go to Services" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('services')}>Services</button></li>
            <li><button aria-label="Go to Blogs" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('blogs')}>Blogs</button></li>
            <li><button aria-label="Go to My Work" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('work')}>My Work</button></li>
            <li><button aria-label="Go to Contact Me" className={`font-Ovo ${isScroll ? "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]" : "text-[var(--foreground)] dark:text-[var(--foreground)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"}`} onClick={() => handleNavClick('contact')}>Contact Me</button></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
