import { getAllBlogs } from '../utils/mdx';

export default function BlogPage() {
  // This is a server component that fetches all blogs
  const blogs = getAllBlogs();
  
  return { blogs };
}
