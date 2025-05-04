
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as React from 'react';
import { motion } from "framer-motion";
import { fadeIn, slideDown, slideUp } from '@/app/utils/animations';
import Image from 'next/image';
// import { assets } from '@/assets/assets'; // Commented out as arrow is replaced
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function BlogPost({ params }) {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dark mode effect
  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  // Fetch blog post data
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
        fetchBlog();
    }

  }, [slug]);

  // Common wrapper for Loading and Error states
  const renderStatusPage = (content) => (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-[12%] py-16 min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          {content}
        </div>
      </motion.div>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );

  // Loading state
  if (loading) {
    return renderStatusPage(
      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-2xl font-bold mb-4 font-Ovo"
      >
        Loading...
      </motion.h1>
    );
  }
  
  // Error or not found state
  if (error || !blog) {
    return renderStatusPage(
      <>
        <motion.h1 
          {...slideDown}
          className="text-2xl font-bold mb-4 font-Ovo"
        >
          {error ? 'Error loading post' : 'Blog post not found'}
        </motion.h1>
        <motion.div
          {...slideUp}
          transition={{ delay: 0.2 }}
        >
          {/* Updated Back Button Style for Error Page */}
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

  // Blog post content
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* Removed max-w-4xl from container, adjusted padding */}
      <motion.div 
        {...fadeIn}
        className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-24" 
      >
        {/* Updated Back Button Style */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8" // Increased margin bottom
        >
          <Link href="/" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             Back to home
          </Link>
        </motion.div>
        
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-none" // Keep max-w-none here
        >
          {/* Blog Header Section */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6" // Added bottom border
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-Ovo">{blog.frontmatter.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
              <span>Published on {blog.frontmatter.date}</span>
              <span>By {blog.frontmatter.author}</span>
              <span className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs">
                {blog.frontmatter.category}
              </span>
            </div>
            
            {blog.frontmatter.coverImage && (
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg mt-6 shadow-md dark:shadow-gray-700" 
                style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
              >
              </motion.div>
            )}
          </motion.div>
          
          {/* Blog Content Section - relies on prose for styling */} 
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            // Added prose classes back for typography styling, max-w-none allows it to expand
            className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8" 
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />
        </motion.article>
      </motion.div>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}

