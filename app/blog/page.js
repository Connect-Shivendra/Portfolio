'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function BlogListPage({ params }) {
  const slug = params?.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) throw new Error('Blog post not found');
        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: 'var(--background)' }}
        >
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full border-2 border-t-transparent mx-auto animate-spin mb-4"
              style={{ borderColor: 'var(--accent-color)', borderTopColor: 'transparent' }}
            />
            <p className="text-sm text-[var(--text-secondary)]">Loading article…</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <>
        <Navbar />
        <div
          className="min-h-screen flex items-center justify-center px-6"
          style={{ background: 'var(--background)' }}
        >
          <div className="text-center max-w-md">
            <div
              className="text-5xl mb-4 font-bold font-Sora"
              style={{ color: 'var(--accent-color)' }}
            >
              404
            </div>
            <h1 className="text-2xl font-bold mb-4 font-Sora text-[var(--text-primary)]">
              {error ? 'Error loading post' : 'Blog post not found'}
            </h1>
            <Link
              href="/"
              className="button-primary inline-flex"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Blog post content
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-6 lg:px-12 xl:px-20 py-24"
        style={{ background: 'var(--background)' }}
      >
        {/* Back button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-[var(--border-color)]">
            {blog.frontmatter.category && (
              <span
                className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                style={{ background: 'var(--accent-color)' }}
              >
                {blog.frontmatter.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-Sora text-[var(--text-primary)] leading-tight">
              {blog.frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-[var(--text-secondary)] gap-x-4 gap-y-1">
              <time dateTime={blog.frontmatter.date}>
                {blog.frontmatter.date ? new Date(blog.frontmatter.date).toLocaleDateString('en-AU', {
                  year: 'numeric', month: 'long', day: 'numeric'
                }) : ''}
              </time>
              <span>·</span>
              <span>By {blog.frontmatter.author || 'Shivendra Singh'}</span>
            </div>
            {blog.frontmatter.coverImage && (
              <div
                className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-xl mt-8 border border-[var(--border-color)]"
                style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
              />
            )}
          </div>

          {/* Content */}
          <div
            className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />
        </motion.article>
      </motion.div>
      <Footer />
    </>
  );
}
