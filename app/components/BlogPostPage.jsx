import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
// import { fadeIn } from '@/app/utils/animations';
// import { motion } from 'framer-motion';
import BlogPostClient from '@/app/components/BlogPostClient';
import MDXContentServer from '@/app/components/MDXContentServer';

export default function BlogPostPage({ blog, error }) {
  if (!blog) {
    return (
      <>
        <Navbar isOnBlogPage={true} />
        <main className="container mx-auto px-[12%] py-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 font-Sora">Oops! This blog post is lost in the multiverse 🌀</h1>
            <p className="mb-6">Either it never existed, or it's hiding with your missing socks.<br/>Try another blog or head back to safety!</p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-lightHover dark:bg-darkHover text-darkTheme dark:text-white rounded-full font-bold hover:opacity-80 transition"
              aria-label="Return to home page"
            >
              Back to Home
            </a>
            {error && (
              <pre 
                className="mt-8 text-xs text-left bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto"
                role="alert"
                aria-label="Error details"
              >
                {error.toString()}
              </pre>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Render MDX content on the server
  const renderedContent = <MDXContentServer content={blog.content} />;

  return (
    <>
      <Navbar isOnBlogPage={true} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-16">
        <div>
          <BlogPostClient 
            blog={blog} 
            renderedContent={renderedContent} 
          />
        </div>
      </main>
      <Footer />
    </>
  );
} 