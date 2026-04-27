'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { BlogsList } from '@/assets/assets';
import { Search, X } from 'lucide-react';

const BLOGS_PER_PAGE = 12;

const CATEGORIES = BlogsList.map(b => b.name);

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (index % BLOGS_PER_PAGE) * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="blog-card flex flex-col group"
      aria-label={`Blog post: ${blog.frontmatter.title}`}
    >
      <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-xl">
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
          <div className="absolute bottom-3 left-3 blog-category-tag">
            {blog.frontmatter.category}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h2 className="text-base font-semibold font-Sora text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--accent-color)] transition-colors duration-300 line-clamp-2">
            {blog.frontmatter.title}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2 leading-relaxed flex-grow">
            {blog.frontmatter.excerpt}
          </p>
          <div className="flex justify-between items-center text-xs text-[var(--text-secondary)] mt-auto pt-3 border-t border-[var(--border-color)]">
            <time dateTime={blog.frontmatter.date}>
              {blog.frontmatter.date
                ? new Date(blog.frontmatter.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })
                : ''}
            </time>
            <span className="font-medium" style={{ color: 'var(--accent-color)' }}>
              {blog.frontmatter.readTime || '5 min read'}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => setBlogs(data.blogs || []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter(b => {
      const matchesCategory = selectedCategory === 'All' || b.frontmatter.category === selectedCategory;
      const matchesQuery = !q
        || b.frontmatter.title?.toLowerCase().includes(q)
        || b.frontmatter.excerpt?.toLowerCase().includes(q)
        || b.frontmatter.category?.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [blogs, query, selectedCategory]);

  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-[8%] pt-28 pb-20">

          {/* Header */}
          <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="heading-eyebrow">Writing</p>
            <h1 className="heading-primary mt-2">Articles &amp; Insights</h1>
            <div className="gold-divider mx-auto mt-4 mb-6" />
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              {blogs.length > 0 ? `${blogs.length} articles` : ''} on data strategy, AI governance, and what it actually takes to lead in this space.
            </p>
          </motion.header>

          {/* Search */}
          <motion.div
            className="max-w-xl mx-auto mb-8 relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </span>
            <input
              type="search"
              value={query}
              onChange={handleQuery}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full pl-10 pr-10 py-3 rounded-full text-sm outline-none transition-all duration-300 border"
              style={{
                background: 'var(--card-bg)',
                borderColor: query ? 'var(--accent-color)' : 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            />
            {query && (
              <button
                onClick={() => { setQuery(''); setPage(1); }}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </motion.div>

          {/* Category filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: selectedCategory === cat ? 'var(--accent-color)' : 'var(--card-bg)',
                  color: selectedCategory === cat ? 'var(--on-accent)' : 'var(--text-secondary)',
                  border: `1px solid ${selectedCategory === cat ? 'var(--accent-color)' : 'var(--border-color)'}`,
                }}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results count when filtering */}
          {(query || selectedCategory !== 'All') && !loading && (
            <p className="text-center text-sm text-[var(--text-secondary)] mb-6">
              {filtered.length === 0 ? 'No articles found' : `${filtered.length} article${filtered.length === 1 ? '' : 's'} found`}
              {query && <> for &ldquo;<span style={{ color: 'var(--accent-color)' }}>{query}</span>&rdquo;</>}
            </p>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-24">
              <div
                className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: 'var(--accent-color)', borderTopColor: 'transparent' }}
              />
            </div>
          )}

          {/* Grid */}
          {!loading && paginated.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${query}-${page}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginated.map((blog, i) => (
                  <BlogCard key={blog.slug} blog={blog} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Empty state */}
          {!loading && paginated.length === 0 && (
            <div className="text-center py-24">
              <p className="text-4xl mb-4 opacity-30">✦</p>
              <p className="text-[var(--text-secondary)]">No articles match your search.</p>
              <button
                onClick={() => { setQuery(''); setSelectedCategory('All'); setPage(1); }}
                className="mt-4 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent-color)' }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Blog pagination">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
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
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-color)] text-[var(--text-secondary)] disabled:opacity-40 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
              >
                Next →
              </button>
            </nav>
          )}

          {/* Back home */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              ← Back to home
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
