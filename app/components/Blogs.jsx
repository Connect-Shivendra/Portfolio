'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogsList } from '@/assets/assets';
import Image from 'next/image';

const BLOGS_PER_PAGE = 9;

const BlogCard = ({ blog, index }) => {
  return (
    <article className="blog-card bg-[var(--card-bg)] dark:bg-darkHover shadow-lg rounded-lg overflow-hidden h-full transition-colors duration-300 hover:shadow-xl flex flex-col" aria-label={`Blog post: ${blog.frontmatter.title}`}> 
      <Link href={`/blog/${blog.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-lg">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
          {blog.frontmatter.coverImage ? (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
            ></div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-white">
              No image available
            </div>
          )}
          <div className="absolute bottom-0 left-0 bg-darkTheme dark:bg-darkHover text-white text-xs px-2 py-1">
            {blog.frontmatter.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white font-Ovo">{blog.frontmatter.title}</h3>
          <p className="text-sm text-gray-600 dark:text-white/90 mb-3">{blog.frontmatter.excerpt}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-white/80">
            <time dateTime={blog.frontmatter.date}>{blog.frontmatter.date}</time>
            <span>By {blog.frontmatter.author}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

const Blogs = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!blogs) return;
    let filtered = blogs;
    if (selectedCategory !== 'All') {
      filtered = blogs.filter(blog => blog.frontmatter.category === selectedCategory);
    }
    setFilteredBlogs(filtered);
    setPage(1); // Reset to first page on filter change
  }, [selectedCategory, blogs]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  return (
    <section 
      id='blogs' 
      className='w-full px-[12%] py-10 bg-[var(--background)] text-[var(--foreground)] dark:bg-[var(--background)]'
      aria-label="Blog section"
    >
      <h2 
        className='text-center mb-6 text-2xl font-Ovo text-[var(--foreground)] dark:text-[var(--foreground)]'
      >
        My Blogs
      </h2>
      
      <div 
        className='flex flex-wrap items-center gap-3 md:gap-6 rounded-full px-4 md:px-12 py-3 justify-center mb-8 overflow-x-auto whitespace-nowrap'
      >
        {BlogsList.map((item, index) => (
          <button 
            key={index}
            onClick={() => setSelectedCategory(item.name)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
              selectedCategory === item.name 
                ? 'bg-darkTheme dark:bg-darkHover text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-lightHover dark:hover:bg-darkHover/70'
            }`}
            aria-label={`Filter blogs by ${item.name}`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {filteredBlogs && filteredBlogs.length > 0 ? (
        <>
          <div 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {paginatedBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} index={index} />
            ))}
          </div>
          {totalPages > 1 && (
            <nav className="flex justify-center mt-8 gap-2" aria-label="Blog pagination">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                aria-label="Previous page"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-darkTheme dark:bg-darkHover text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
                  aria-label={`Go to page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                aria-label="Next page"
              >
                Next
              </button>
            </nav>
          )}
        </>
      ) : (
        <div 
          className='text-center py-10 text-gray-500 dark:text-white'
        >
          No blog posts found in this category.
        </div>
      )}
    </section>
  );
};

export default Blogs;
