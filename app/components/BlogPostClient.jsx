'use client';

export default function BlogPostClient({ renderedContent }) {
  return (
    <article className="prose dark:prose-invert lg:prose-xl max-w-none blog-content mt-8">
      {renderedContent}
    </article>
  );
} 