'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BlogsList } from '@/assets/assets';

const BLOGS_PER_PAGE = 9;

const BlogCard = ({ blog, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="blog-card flex flex-col group"
    aria-label={`Blog post: ${blog.frontmatter.title}`}
  >
    <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-xl">
      {/* Cover image */}
      <div className="h-44 rounded-t-xl overflow-hidden relative" style={{ background: 'var(--hover-bg)' }}>
        {blog.frontmatter.coverImage ? (
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl opacity-20">✦</span>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute bottom-3 left-3 blog-category-tag">
          {blog.frontmatter.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-semibold font-Sora text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--accent-color)] transition-colors duration-300 line-clamp-2">
          {blog.frontmatter.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2 leading-relaxed flex-grow">
          {blog.frontmatter.excerpt}
        </p>
        <div className="flex justify-between items-center text-xs text-[var(--text-secondary)] mt-auto pt-3 border-t border-[var(--border-color)]">
          <time dateTime={blog.frontmatter.date}>
            {blog.frontmatter.date ? new Date(blog.frontmatter.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
          </time>
          <span className="font-medium" style={{ color: 'var(--accent-color)' }}>
            {blog.frontmatter.readTime || '5 min read'}
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const Blogs = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!blogs) return;
    const filtered = selectedCategory === 'All'
      ? blogs
      : blogs.filter(b => b.frontmatter.category === selectedCategory);
    setFilteredBlogs(filtered);
    setPage(1);
  }, [selectedCategory, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  return (
    <section
      id="blogs"
      className="w-full px-6 md:px-[8%] py-20"
      style={{ background: 'var(--section-bg)' }}
      aria-label="Blog section"
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="heading-eyebrow"
      >
        Writing
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="heading-primary"
      >
        Articles & Insights
      </motion.h2>
      <div className="gold-divider mb-10" />

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {BlogsList.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(item.name)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              background: selectedCategory === item.name ? 'var(--accent-color)' : 'var(--card-bg)',
              color: selectedCategory === item.name ? 'var(--on-accent)' : 'var(--text-secondary)',
              border: `1px solid ${selectedCategory === item.name ? 'var(--accent-color)' : 'var(--border-color)'}`,
            }}
            aria-label={`Filter by ${item.name}`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredBlogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog, i) => (
              <BlogCard key={blog.slug || i} blog={blog} index={i} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Blog pagination">
              <button
                onClick={() => setPage(p => p - 1)}
                disabled={page === 1}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-40 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
              >
                ← Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className="w-9 h-9 rounded-full text-sm font-medium border transition-all duration-300"
                  style={{
                    background: page === i + 1 ? 'var(--accent-color)' : 'transparent',
                    borderColor: page === i + 1 ? 'var(--accent-color)' : 'var(--border-color)',
                    color: page === i + 1 ? 'var(--on-accent)' : 'var(--text-secondary)',
                  }}
                  aria-label={`Page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-40 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
              >
                Next →
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="text-center py-16 text-[var(--text-secondary)]">
          No posts found in this category.
        </div>
      )}
    </section>
  );
};

export default Blogs;
