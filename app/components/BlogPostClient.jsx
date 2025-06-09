'use client';
import MDXContentClient from './MDXContentClient';

export default function BlogPostClient({ blog }) {
  return (
    <div className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8">
      <MDXContentClient content={blog.content} />
    </div>
  );
} 