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
            {/* Pass renderedContent to BlogPostClient for interactivity if needed */}
            <BlogPostClient renderedContent={renderedContent} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
} 