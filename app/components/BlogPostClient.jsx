"use client";
import React from "react";

export default function BlogPostClient({ blog, renderedContent }) {
  return (
    <>
      <nav className="mb-6" aria-label="Blog navigation">
        <button 
          onClick={() => window.history.back()}
          className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm"
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
      <article>
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-Sora">{blog.frontmatter.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
            <time dateTime={blog.frontmatter.date}>Published on {blog.frontmatter.date}</time>
            <span>By {blog.frontmatter.author}</span>
            <span 
              className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs"
              aria-label={`Category: ${blog.frontmatter.category}`}
            >
              {blog.frontmatter.category}
            </span>
          </div>
        </header>
        <div className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8">
          {renderedContent}
        </div>
      </article>
    </>
  );
} 