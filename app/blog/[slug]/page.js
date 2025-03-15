'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogPost({ params }) {
  // Don't destructure params.slug directly
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Access params.slug inside the useEffect
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.slug}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [params.slug]); // Use params.slug directly in the dependency array

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }
  
  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to home
      </Link>
      
      <article className="prose dark:prose-invert lg:prose-xl max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.frontmatter.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="mr-4">Published on {blog.frontmatter.date}</span>
            <span className="mr-4">By {blog.frontmatter.author}</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
              {blog.frontmatter.category}
            </span>
          </div>
          
          {blog.frontmatter.coverImage && (
            <div className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg mb-8" 
                 style={{ backgroundImage: `url(${blog.frontmatter.coverImage})` }}>
            </div>
          )}
        </div>
        
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.contentHtml }}></div>
      </article>
    </div>
  );
}
