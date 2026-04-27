"use client";
import React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostClient({ blog, renderedContent, relatedPosts = [] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
        style={{ scaleX, background: 'var(--accent-color)' }}
        aria-hidden="true"
      />

      {/* Back navigation */}
      <nav className="mb-8" aria-label="Blog navigation">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)]
            hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Post header */}
        <header className="mb-10 pb-8 border-b border-[var(--border-color)]">
          {/* Category tag */}
          {blog.frontmatter.category && (
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'var(--accent-color)', color: '#fff' }}>
              {blog.frontmatter.category}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-Sora leading-tight text-[var(--text-primary)]">
            {blog.frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-[var(--text-secondary)] gap-x-4 gap-y-2">
            <time dateTime={blog.frontmatter.date}>
              {new Date(blog.frontmatter.date).toLocaleDateString('en-AU', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </time>
            <span>·</span>
            <span>By {blog.frontmatter.author || 'Shivendra Singh'}</span>
            {blog.frontmatter.readTime && (
              <>
                <span>·</span>
                <span>{blog.frontmatter.readTime}</span>
              </>
            )}
          </div>

          {/* Cover image */}
          {blog.frontmatter.coverImage && (
            <div
              className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-xl mt-8 border border-[var(--border-color)]"
              style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
              role="img"
              aria-label={`Cover image for ${blog.frontmatter.title}`}
            />
          )}

          {/* Excerpt */}
          {blog.frontmatter.excerpt && (
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--accent-color)] pl-4">
              {blog.frontmatter.excerpt}
            </p>
          )}
        </header>

        {/* MDX content */}
        <div className="blog-content">
          {renderedContent}
        </div>

        {/* Footer nav */}
        <footer className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-dark)] transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>
        </footer>
      </article>

      {relatedPosts.length > 0 && (
        <motion.section
          className="max-w-3xl mx-auto mt-16 pt-12 border-t border-[var(--border-color)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          aria-label="Related articles"
        >
          <h2 className="text-2xl font-bold font-Sora text-[var(--text-primary)] mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`} className="blog-card group flex flex-col">
                  {post.frontmatter.coverImage && (
                    <div
                      className="h-36 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.frontmatter.coverImage})` }}
                      role="img"
                      aria-label={`Cover image for ${post.frontmatter.title}`}
                    />
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="blog-category-tag self-start mb-3">{post.frontmatter.category}</span>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 line-clamp-2 group-hover:text-[var(--accent-color)] transition-colors leading-snug">
                      {post.frontmatter.title}
                    </h3>
                    {post.frontmatter.excerpt && (
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2 flex-1 mb-3">
                        {post.frontmatter.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mt-auto">
                      <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('en-AU', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </time>
                      {post.frontmatter.readTime && (
                        <><span>·</span><span>{post.frontmatter.readTime}</span></>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
}
