'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import * as React from 'react';
import { motion } from "framer-motion";
import { fadeIn, slideIn, slideUp } from '@/app/utils/animations';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import BlogEnhancer from '@/app/components/BlogEnhancer';
import { useRouter } from 'next/navigation';

export default function BlogPost({ params }) {
  const router = useRouter();
  const { slug } = React.use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const topRef = useRef(null);

  // Store the previous page in session storage when component mounts
  useEffect(() => {
    // Set a flag in sessionStorage to indicate we came from a blog post
    sessionStorage.setItem('fromBlogPost', 'true');
  }, []);

  // Handle back navigation to blogs section
  const handleBackToBlogsClick = () => {
    // Navigate to home page with blogs section hash
    window.location.href = '/#blogs';
  };

  // Handle scroll to top
  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dark mode effect
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
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOnBlogPage={true} />
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

  // Loading state
  if (loading) {
    return renderStatusPage(
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-2xl font-bold mb-4 font-Sora"
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
          className="text-2xl font-bold mb-4 font-Sora"
        >
          {error ? 'Error loading post' : 'Blog post not found'}
        </motion.h1>
        <motion.div
          {...slideUp}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={handleBackToBlogsClick}
            className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blogs
          </button>
        </motion.div>
      </>
     );
  }

  // Blog post content
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOnBlogPage={true} />
      <BlogEnhancer />
      <div ref={topRef}></div>
      <motion.div
        {...fadeIn}
        className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-16"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <button 
            onClick={handleBackToBlogsClick}
            className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blogs
          </button>
        </motion.div>
        
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-Sora">{blog.frontmatter.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
              <span>Published on {blog.frontmatter.date}</span>
              <span>By {blog.frontmatter.author}</span>
              <span className="bg-[var(--accent-color )] text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs">
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

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />
          
          {/* Back to top button at the bottom */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={handleScrollToTop}
              className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to top
            </button>
          </motion.div>
        </motion.article>
      </motion.div>
      <Footer isDarkMode={isDarkMode} />
    </>
   );
}
