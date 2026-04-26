"use client";
import React from "react";
import Link from "next/link";

export default function BlogPostClient({ blog, renderedContent }) {
  return (
    <>
      {/* Back navigation */}
      <nav className="mb-8" aria-label="Blog navigation">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)]
            hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
          aria-label="Go back to previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All articles
          </Link>
        </footer>
      </article>
    </>
  );
}
