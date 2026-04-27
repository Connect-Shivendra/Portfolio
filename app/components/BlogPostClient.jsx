"use client";
import React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import BlogEnhancer from '@/app/components/BlogEnhancer';

function AnimatedWords({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.22em]"
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function BlogPostClient({ blog, renderedContent, relatedPosts = [] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div>
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
        style={{ scaleX, background: 'var(--accent-color)' }}
        aria-hidden="true"
      />

      {/* Back navigation */}
      <nav className="mb-10" aria-label="Blog navigation">
        <motion.button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)', x: -3 }}
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </motion.button>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Post header */}
        <header className="mb-10 pb-8 border-b border-[var(--border-color)]">

          {/* Category tag */}
          {blog.frontmatter.category && (
            <motion.span
              className="inline-block mb-5 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'var(--accent-color)', color: '#fff' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              {blog.frontmatter.category}
            </motion.span>
          )}

          {/* Title — word by word */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-Sora leading-tight text-[var(--text-primary)]">
            <AnimatedWords text={blog.frontmatter.title} />
          </h1>

          {/* Meta row — staggered */}
          <motion.div
            className="flex flex-wrap items-center text-sm gap-x-4 gap-y-2"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <time dateTime={blog.frontmatter.date}>
              {new Date(blog.frontmatter.date).toLocaleDateString('en-AU', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>By {blog.frontmatter.author || 'Shivendra Singh'}</span>
            {blog.frontmatter.readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{blog.frontmatter.readTime}</span>
              </>
            )}
          </motion.div>

          {/* Cover image — Ken Burns entrance */}
          {blog.frontmatter.coverImage && (
            <motion.div
              className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl mt-8 overflow-hidden border border-[var(--border-color)]"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}
                role="img"
                aria-label={`Cover image for ${blog.frontmatter.title}`}
              />
              {/* Gold shimmer sweep on load */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(201,168,76,0.15) 50%, transparent 70%)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
              />
            </motion.div>
          )}

          {/* Excerpt with animated left border */}
          {blog.frontmatter.excerpt && (
            <div className="mt-8 flex gap-4">
              <motion.div
                className="w-0.5 rounded-full shrink-0 origin-top"
                style={{ background: 'var(--accent-color)' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              <motion.p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {blog.frontmatter.excerpt}
              </motion.p>
            </div>
          )}
        </header>

        {/* BlogEnhancer: Prism syntax highlighting + copy buttons */}
        <BlogEnhancer />

        {/* MDX content */}
        <motion.div
          className="blog-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {renderedContent}
        </motion.div>

        {/* Footer nav */}
        <footer className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium transition-colors"
              style={{ color: 'var(--accent-color)' }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All articles
            </Link>
          </motion.div>
        </footer>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          className="max-w-3xl mx-auto mt-20 pt-12 border-t border-[var(--border-color)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          aria-label="Related articles"
        >
          <motion.h2
            className="text-2xl font-bold font-Sora mb-8"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Related Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link href={`/blog/${post.slug}`} className="blog-card group flex flex-col h-full">
                  {post.frontmatter.coverImage && (
                    <div
                      className="h-36 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.frontmatter.coverImage})` }}
                      role="img"
                      aria-label={`Cover image for ${post.frontmatter.title}`}
                    />
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="blog-category-tag self-start mb-3">{post.frontmatter.category}</span>
                    <h3 className="text-sm font-bold mb-2 line-clamp-2 group-hover:text-[var(--accent-color)] transition-colors leading-snug"
                      style={{ color: 'var(--text-primary)' }}>
                      {post.frontmatter.title}
                    </h3>
                    {post.frontmatter.excerpt && (
                      <p className="text-xs line-clamp-2 flex-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {post.frontmatter.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs mt-auto" style={{ color: 'var(--text-secondary)' }}>
                      <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('en-AU', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </time>
                      {post.frontmatter.readTime && (
                        <><span aria-hidden="true">·</span><span>{post.frontmatter.readTime}</span></>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
