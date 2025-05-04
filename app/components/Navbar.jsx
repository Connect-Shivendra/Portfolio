/* eslint-disable react/no-unescaped-entities */
'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'; // Import Link for internal navigation

// Accept isOnBlogPage prop to adjust link behavior
const Navbar = ({isDarkMode, setIsDarkMode, isOnBlogPage = false}) => {

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

    // Helper function to generate link URLs
    const getLinkUrl = (hash) => {
      // If on a blog page, prepend / to hash links, except for #top which should go to root
      if (isOnBlogPage) {
        return hash === "#top" ? "/" : `/${hash}`;
      }
      // If on the home page, just use the hash
      return hash;
    };

  return (
    <>
    {/* Background Image - Ensure assets.header_bg_color is valid */}
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden'>
        {assets.header_bg_color && 
          <Image src={assets.header_bg_color} alt='' className='w-screen h-screen object-cover' priority />
        }
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
        items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        
        {/* Use Link for home navigation - Always points to root */}
        <Link href="/"> 
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='Logo' priority />
        </Link>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
            {/* Use Link for home, adjust others based on page */}
            <li><Link className='font-Ovo' href={getLinkUrl("#top")}>Home</Link></li>
            <li><Link className='font-Ovo' href={getLinkUrl("#about")}>Professional Highlights</Link></li>
            <li><Link className='font-Ovo' href={getLinkUrl("#services")}>Services</Link></li>
            <li><Link className='font-Ovo' href={getLinkUrl("#blogs")}>Blogs</Link></li>
            <li><Link className='font-Ovo' href={getLinkUrl("#work")}>My Work</Link></li>
            <li><Link className='font-Ovo' href={getLinkUrl("#contact")}>Contact Me</Link></li>
        </ul>
        <div className='flex items-center gap-4'>
            {/* Dark Mode Toggle */}
            <button onClick={()=> setIsDarkMode(prev => !prev)} aria-label="Toggle dark mode">
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>
            
            {/* Contact Link */}
            <Link href={getLinkUrl("#contact")} className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
            dark:border-white/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/>
            </Link>

            {/* Mobile Menu Button */}
            <button className='block md:hidden ml-3' onClick={openMenu} aria-label="Open menu">
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-64 
        dark:bg-darkHover dark:text-white'>
            {/* Close Button */}
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>
            {/* Use Link for navigation, close menu on click */}
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#top")}>Home</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#about")}>About Me</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#services")}>Services</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#blogs")}>Blogs</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#work")}>My Work</Link></li>
            <li><Link className='font-Ovo' onClick={closeMenu} href={getLinkUrl("#contact")}>Contact Me</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar

