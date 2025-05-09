

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as React from 'react'; // Keep React import for React.use
import { motion } from "framer-motion";
import { fadeIn, slideDown, slideUp } from '@/app/utils/animations'; // Assuming animations are in this path
import Image from 'next/image';
import { assets } from '@/assets/assets'; // Assuming assets are in this path
import Navbar from '@/app/components/Navbar'; // Assuming Navbar is in this path
import Footer from '@/app/components/Footer'; // Assuming Footer is in this path
import { remark } from 'remark';
import html from 'remark-html';

// Helper function to convert markdown to HTML
async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default function ServiceDetailPage({ params }) {
  const { slug } = React.use(params); // Use React.use for potentially async params
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default or manage as in blog
  const [contentHtml, setContentHtml] = useState('');

  // Dark mode effect (copied from blog page for consistency)
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Fetch service data
  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/services/${slug}`);
        if (!response.ok) {
          throw new Error('Service not found');
        }
        const data = await response.json();
        setService(data.service);
        if (data.service && data.service.contentHtml) {
          const processedHtml = await markdownToHtml(data.service.contentHtml);
          setContentHtml(processedHtml);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchService();
    }
  }, [slug]);

  const renderStatusPage = (content) => (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOnBlogPage={false} /> {/* Assuming not a blog page specific Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-[12%] py-16 min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          {content}
        </div>
      </motion.div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );

  if (loading) {
    return renderStatusPage(
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-2xl font-bold mb-4 font-Ovo"
      >
        Loading Service Details...
      </motion.h1>
    );
  }

  if (error || !service) {
    return renderStatusPage(
      <>
        <motion.h1
          {...slideDown}
          className="text-2xl font-bold mb-4 font-Ovo"
        >
          {error ? 'Error loading service' : 'Service details not found'}
        </motion.h1>
        <motion.div
          {...slideUp}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </motion.div>
      </>
    );
  }

  // Service detail content
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOnBlogPage={false} />
      <motion.div
        {...fadeIn}
        className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-16"
      >
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-none"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-Ovo">{service.frontmatter.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
              {/* You can add more frontmatter details here if needed, like category or author, similar to blog */}
              <span className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs">
                {service.frontmatter.category || 'Service'}
              </span>
            </div>

            {/* Optional: Add a cover image if you plan to have them for services */}
            {service.frontmatter.coverImage && (
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg mt-6 shadow-md dark:shadow-gray-700"
                style={{ backgroundImage: `url(${service.frontmatter.coverImage})` }}
              >
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose dark:prose-invert lg:prose-xl max-w-none service-content mt-8" // Added 'service-content' class for potential specific styling
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </motion.article>
      </motion.div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}


