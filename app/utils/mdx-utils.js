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

// Cache the MDX processing
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

// Cache the blog data
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

// Cache the blog list
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

// Cache the category list
export const getCategories = cache(async () => {
  try {
    const blogs = await getAllBlogs();
    const categories = new Set(blogs.map(blog => blog.frontmatter.category));
    return Array.from(categories);
  } catch (error) {
    throw new Error('Failed to get categories');
  }
});

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogsByCategory(category) {
  const allBlogs = getAllBlogs();
  
  if (category === 'All') {
    return allBlogs;
  }
  
  return allBlogs.filter(blog => blog.frontmatter.category === category);
}
