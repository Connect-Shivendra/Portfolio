/**
 * mdx-utils.js
 * Blog utility — reads MDX files, parses frontmatter, compiles MDX content.
 * Uses @mdx-js/mdx (compileMDX) — no next-mdx-remote dependency at all.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { cache } from 'react';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

/**
 * Get a single blog post's frontmatter + raw content by slug.
 * Raw content string is used by MDXContentServer for rendering.
 */
export const getBlogData = cache(async (slug) => {
  try {
    let fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(blogsDirectory, `${slug}.md`);
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: data.title || slug,
        date: data.date || null,
        description: data.description || data.excerpt || '',
        excerpt: data.excerpt || data.description || '',
        category: data.category || 'General',
        coverImage: data.coverImage || null,
        author: data.author || 'Shivendra Singh',
        ...data,
      },
      content, // raw MDX string for MDXContentServer
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
        .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
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
  const blogs = await getAllBlogs();
  const categories = new Set(blogs.map(b => b.frontmatter.category));
  return Array.from(categories);
});

/**
 * Get all blog slugs.
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
  return allBlogs.filter(b => b.frontmatter.category === category);
}
