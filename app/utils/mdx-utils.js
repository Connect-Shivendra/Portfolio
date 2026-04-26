/**
 * mdx-utils.js
 * Blog utility functions — reads MDX files, parses frontmatter, returns content.
 * MDX rendering happens in MDXContentServer.jsx via next-mdx-remote/rsc (server component).
 * This file intentionally does NOT import serialize — it is not needed here.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

/**
 * Get a single blog post's frontmatter + raw MDX content by slug.
 * Raw content is passed to MDXContentServer for server-side rendering.
 */
export const getBlogData = cache(async (slug) => {
  try {
    // Support both .mdx and .md extensions
    let fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(blogsDirectory, `${slug}.md`);
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      frontmatter: data,
      content, // raw MDX string — rendered by MDXContentServer via next-mdx-remote/rsc
    };
  } catch (error) {
    throw new Error(`Failed to read blog: ${slug} — ${error.message}`);
  }
});

/**
 * Get all blog posts sorted by date descending.
 */
export const getAllBlogs = cache(async () => {
  try {
    const files = fs.readdirSync(blogsDirectory);
    const blogs = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
        .map(async (file) => {
          const slug = file.replace(/\.(mdx|md)$/, '');
          return getBlogData(slug);
        })
    );
    return blogs.sort((a, b) =>
      new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } catch (error) {
    throw new Error('Failed to read blog list');
  }
});

/**
 * Get all unique blog categories.
 */
export const getCategories = cache(async () => {
  try {
    const blogs = await getAllBlogs();
    const categories = new Set(blogs.map(blog => blog.frontmatter.category));
    return Array.from(categories);
  } catch (error) {
    throw new Error('Failed to get categories');
  }
});

/**
 * Get all blog slugs (filenames without extension).
 */
export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => f.replace(/\.(mdx|md)$/, ''));
}

/**
 * Get blogs filtered by category.
 */
export async function getBlogsByCategory(category) {
  const allBlogs = await getAllBlogs();
  if (category === 'All') return allBlogs;
  return allBlogs.filter(blog => blog.frontmatter.category === category);
}
