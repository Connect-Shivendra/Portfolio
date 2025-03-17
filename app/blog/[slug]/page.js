'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as React from 'react';
import { motion } from "motion/react";
import { fadeIn, slideDown, slideUp } from '@/app/utils/animations';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function BlogPost({ params }) {
  // Use React.use() to handle the async params
  const { slug } = React.use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Access slug inside the useEffect
    const fetchBlog = async () => {
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
    
    fetchBlog();
  }, [slug]); // Use slug directly in the dependency array

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-[12%] py-16"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-2xl font-bold mb-4 font-Ovo"
          >
            Loading...
          </motion.h1>
        </div>
      </motion.div>
    );
  }
  
  if (error || !blog) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-[12%] py-16"
      >
        <div className="text-center">
          <motion.h1 
            {...slideDown}
            className="text-2xl font-bold mb-4 font-Ovo"
          >
            Blog post not found
          </motion.h1>
          <motion.div
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-darkTheme dark:text-darkHover hover:underline flex items-center justify-center gap-2">
              <Image src={assets.arrow_icon_dark} alt="Back arrow" className="w-4 h-4 rotate-180" />
              Back to home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      {...fadeIn}
      className="container mx-auto px-[12%] py-8 max-w-4xl"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Link href="/" className="text-darkTheme dark:text-darkHover hover:underline inline-flex items-center gap-2">
          <Image src={assets.arrow_icon_dark} alt="Back arrow" className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
      </motion.div>
      
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="prose dark:prose-invert lg:prose-xl max-w-none"
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-Ovo">{blog.frontmatter.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="mr-4">Published on {blog.frontmatter.date}</span>
            <span className="mr-4">By {blog.frontmatter.author}</span>
            <span className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs">
              {blog.frontmatter.category}
            </span>
          </div>
          
          {blog.frontmatter.coverImage && (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg mb-8 shadow-black dark:shadow-white" 
              style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
            >
            </motion.div>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </motion.article>
    </motion.div>
  );
}
