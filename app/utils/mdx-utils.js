// TODO: Consider migrating this file to TypeScript for better type safety and editor support.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { cache } from 'react';

// Path to our blogs directory
const blogsDirectory = path.join(process.cwd(), 'content/blogs');

/**
 * Serialize MDX content for rendering.
 * @param {string} content - The raw MDX string.
 * @returns {Promise<any>} Serialized MDX source.
 */
export const processMDX = cache(async (content) => {
  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrism, { ignoreMissing: true }]
        ],
      },
      parseFrontmatter: true,
    });
    return mdxSource;
  } catch (error) {
    throw new Error('Failed to process MDX content');
  }
});

/**
 * Get a single blog post's data by slug.
 * @param {string} slug
 * @returns {Promise<{slug: string, frontmatter: any, content: string}>}
 */
export const getBlogData = cache(async (slug) => {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      frontmatter: data,
      content, // raw MDX string
    };
  } catch (error) {
    throw new Error('Failed to read blog content');
  }
});

/**
 * Get all blog posts, sorted by date descending.
 * @returns {Promise<Array<{slug: string, frontmatter: any, content: string}>>}
 */
export const getAllBlogs = cache(async () => {
  try {
    const files = fs.readdirSync(blogsDirectory);
    const blogs = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, '');
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
 * @returns {Promise<string[]>}
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
 * Get all blog slugs (filenames without .mdx).
 * @returns {string[]}
 */
export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

/**
 * Get all blogs in a category (async, consistent with getAllBlogs).
 * @param {string} category
 * @returns {Promise<Array<{slug: string, frontmatter: any, content: string}>>}
 */
export async function getBlogsByCategory(category) {
  const allBlogs = await getAllBlogs();
  if (category === 'All') {
    return allBlogs;
  }
  return allBlogs.filter(blog => blog.frontmatter.category === category);
}
