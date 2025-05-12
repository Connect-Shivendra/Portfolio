'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogsList } from '@/assets/assets';
import { motion } from "framer-motion";
import { fadeIn, slideIn, slideUp, staggerContainer } from '@/app/utils/animations';

const BlogCard = ({ blog, index }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }} // Ensure viewport is set for whileInView
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          scale: 1.05,
          // backgroundColor: 'var(--hover-bg)', // Removed to allow CSS class to control hover
          transition: { duration: 0.3 }
        }}
        className="blog-card"
      >
        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
          {blog.frontmatter.coverImage ? (
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
            ></motion.div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              No image available
            </div>
          )}
          <div className="absolute bottom-0 left-0 bg-darkTheme dark:bg-darkHover text-white text-xs px-2 py-1">
            {blog.frontmatter.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-900 font-Ovo">{blog.frontmatter.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-700 mb-3">{blog.frontmatter.excerpt}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{blog.frontmatter.date}</span>
            <span>By {blog.frontmatter.author}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Blogs = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  
  useEffect(() => {
    if (!blogs) return;
    
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.frontmatter.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  return (
    <motion.div 
      variants={fadeIn} 
      initial="initial"
      animate="whileInView" 
      viewport={{ once: true, amount: 0.1 }}
      id='blogs' 
      className='w-full px-[12%] py-10 bg-[var(--background)] text-[var(--foreground)]'>
      <motion.h2 
        variants={slideIn('down', 'tween', 0.2, 0.5)} // CORRECTED: Use slideIn variant
        initial="initial"
        animate="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className='text-center mb-6 text-2xl font-Ovo'
      >
        My Blogs
      </motion.h2>
      
      <motion.div 
        variants={slideUp}
        initial="initial"
        animate="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className='flex flex-wrap items-center gap-3 md:gap-6 rounded-full px-4 md:px-12 py-3 justify-center mb-8 overflow-x-auto whitespace-nowrap'
      >
        {BlogsList.map((item, index) => (
          <motion.button 
            key={index}
            onClick={() => setSelectedCategory(item.name)}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
              selectedCategory === item.name 
                ? 'bg-darkTheme dark:bg-darkHover text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-lightHover dark:hover:bg-darkHover'
            }`}
          >
            {item.name}
          </motion.button>
        ))}
      </motion.div>

      {filteredBlogs && filteredBlogs.length > 0 ? (
        <motion.div 
          variants={staggerContainer(0.1, 0.3)}
          initial="initial"
          animate="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center py-10 text-gray-500 dark:text-gray-400'
        >
          No blog posts found in this category.
        </motion.div>
      )}
    </motion.div>
  );
};

export default Blogs;

