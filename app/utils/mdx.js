import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Path to our blogs directory
const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    frontmatter: data,
    content
  };
}

export function getAllBlogs() {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .sort((blog1, blog2) => (blog1.frontmatter.date > blog2.frontmatter.date ? -1 : 1));
  return blogs;
}

export function getBlogsByCategory(category) {
  const allBlogs = getAllBlogs();
  
  if (category === 'All') {
    return allBlogs;
  }
  
  return allBlogs.filter(blog => blog.frontmatter.category === category);
}
