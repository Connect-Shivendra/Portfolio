import { getBlogData } from '@/app/utils/mdx-utils';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { fadeIn } from '@/app/utils/animations';
import { motion } from 'framer-motion';
import BlogPostClient from '@/app/components/BlogPostClient';

export default async function BlogPost(props) {
  const { slug } = props.params;
  let blog = null;
  let error = null;
  try {
    blog = await getBlogData(slug);
  } catch (err) {
    error = err;
    console.error('[BLOG PAGE DEBUG] Error loading blog:', err);
  }

  if (!blog) {
    return (
      <>
        <Navbar isOnBlogPage={true} />
        <div className="container mx-auto px-[12%] py-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 font-Sora">Oops! This blog post is lost in the multiverse 🌀</h1>
            <p className="mb-6">Either it never existed, or it's hiding with your missing socks.<br/>Try another blog or head back to safety!</p>
            <a href="/" className="inline-block px-6 py-2 bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white rounded-full font-bold hover:opacity-80 transition">Back to Home</a>
            <pre className="mt-8 text-xs text-left bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto">{error ? error.toString() : 'No additional error info.'}</pre>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar isOnBlogPage={true} />
      <motion.div
        {...fadeIn}
        className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-16"
      >
        <div className="mb-6">
          <a href="/#blogs" className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-4 py-2 rounded-md inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blogs
          </a>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-Sora">{blog.frontmatter.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
          <span>Published on {blog.frontmatter.date}</span>
          <span>By {blog.frontmatter.author}</span>
          <span className="bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white px-2 py-1 rounded-full text-xs">
            {blog.frontmatter.category}
          </span>
        </div>
        <BlogPostClient blog={blog} />
      </motion.div>
      <Footer />
    </>
  );
}
