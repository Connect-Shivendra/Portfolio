'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useDarkMode } from '@/app/context/DarkModeContext'
import { motion, AnimatePresence } from 'motion/react'

const NAV_ITEMS = [
  { label: 'Home',                  id: 'top' },
  { label: 'About',                 id: 'about' },
  { label: 'Thought Leadership',    id: 'thought-leadership' },
  { label: 'Blog',                  id: 'blogs' },
  { label: 'My Work',               id: 'work' },
  { label: 'Contact',               id: 'contact' },
];

const Navbar = ({ isOnBlogPage = false, setActiveSection }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('top');
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    setActiveItem(sectionId);

    if (sectionId === 'top') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        router.replace('/');
      } else {
        router.push('/');
      }
      return;
    }

    if (setActiveSection && pathname === '/') {
      setActiveSection(sectionId);
    }
    router.push(`/#${sectionId}`);
  };

  const navLinkClass = `relative font-Sora text-sm font-medium transition-colors duration-300 text-[var(--text-secondary)] hover:text-[var(--accent-color)] group`;

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
          isScroll
            ? 'bg-[var(--card-bg)]/80 backdrop-blur-xl shadow-sm border-b border-[var(--border-color)]'
            : ''
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('top')}
          className="cursor-pointer flex-shrink-0"
          aria-label="Go to Home"
        >
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28"
            alt="Shivendra Singh logo"
            priority
          />
        </button>

        {/* Desktop nav */}
        <ul
          className={`hidden md:flex items-center gap-1 rounded-full px-6 py-2.5 transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-[var(--card-bg)]/70 backdrop-blur-sm border border-[var(--border-color)]'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                aria-label={`Navigate to ${item.label}`}
                className={navLinkClass}
              >
                <span className="px-3 py-1.5 block">
                  {item.label}
                </span>
                {/* Gold underline on hover/active */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px rounded-full transition-all duration-300 origin-left ${
                    activeItem === item.id
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                  style={{ background: 'var(--accent-color)' }}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/10"
          >
            <motion.div
              key={isDarkMode ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-5"
              />
            </motion.div>
          </button>

          {/* Contact CTA — desktop */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full font-Sora font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:-translate-y-px"
            style={{ background: 'var(--accent-color)', color: 'var(--on-accent)' }}
          >
            Get in Touch
            <Image src={assets.arrow_icon_dark} alt="" className="w-3" />
          </button>

          {/* Hamburger — mobile */}
          <button
            className="block md:hidden p-2 rounded-full border border-[var(--border-color)]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-5"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 flex flex-col py-8 px-6"
              style={{ background: 'var(--card-bg)', borderLeft: '1px solid var(--border-color)' }}
            >
              {/* Close */}
              <button
                className="absolute right-5 top-5 p-2 rounded-full hover:bg-[var(--hover-bg)] transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt=""
                  className="w-5"
                />
              </button>

              {/* Gold accent bar */}
              <div className="w-8 h-0.5 mb-8 mt-8" style={{ background: 'var(--accent-color)' }} />

              <nav>
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left py-3 font-Sora font-medium text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors border-b border-[var(--border-color)] last:border-0"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-full font-Sora font-semibold text-sm"
                  style={{ background: 'var(--accent-color)', color: 'var(--on-accent)' }}
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
