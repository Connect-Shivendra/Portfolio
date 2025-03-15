'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogsList } from '@/assets/assets';

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 h-full">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
          {/* If we have a cover image, use it */}
          {blog.frontmatter.coverImage ? (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
            ></div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              No image available
            </div>
          )}
          <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs px-2 py-1">
            {blog.frontmatter.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{blog.frontmatter.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{blog.frontmatter.excerpt}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{blog.frontmatter.date}</span>
            <span>By {blog.frontmatter.author}</span>
          </div>
        </div>
      </div>
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
    <div id='blogs' className='w-full px-[5%] md:px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center mb-6 text-2xl font-Ovo'>My Blogs</h2>
      
      <div className='flex flex-wrap items-center gap-3 md:gap-6 rounded-full px-4 md:px-12 py-3 justify-center mb-8 overflow-x-auto whitespace-nowrap'>
        {BlogsList.map((item, index) => (
          <button 
            key={index}
            onClick={() => setSelectedCategory(item.name)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
              selectedCategory === item.name 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {filteredBlogs && filteredBlogs.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      ) : (
        <div className='text-center py-10 text-gray-500 dark:text-gray-400'>
          No blog posts found in this category.
        </div>
      )}
    </div>
  );
};

export default Blogs;
