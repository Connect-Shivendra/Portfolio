import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import BlogPostClient from '@/app/components/BlogPostClient';
import MDXContentServer from '@/app/components/MDXContentServer';
import TableOfContents from '@/app/components/TableOfContents';
import Link from 'next/link';

function extractHeadings(content) {
  if (!content) return [];
  const matches = [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)];
  return matches.map(m => ({
    level: m[1].length,
    text: m[2].trim().replace(/[*_`[\]]/g, ''),
    id: m[2].trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
  }));
}

export default function BlogPostPage({ blog, error, relatedPosts = [] }) {
  if (!blog) {
    return (
      <>
        <Navbar isOnBlogPage={true} />
        <main
          className="min-h-screen flex items-center justify-center px-6"
          style={{ background: 'var(--background)' }}
        >
          <div className="text-center max-w-md">
            <div
              className="text-5xl mb-6 font-Sora font-bold"
              style={{ color: 'var(--accent-color)' }}
            >
              404
            </div>
            <h1 className="text-2xl font-bold mb-4 font-Sora text-[var(--text-primary)]">
              This post doesn&apos;t exist (yet)
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              It may have been moved, deleted, or the URL is incorrect.
            </p>
            <Link
              href="/"
              className="button-primary inline-flex"
            >
              ← Back to Home
            </Link>
            {error && (
              <pre className="mt-8 text-xs text-left p-4 rounded-xl overflow-x-auto border border-[var(--border-color)]"
                style={{ background: 'var(--card-bg)', color: 'var(--text-secondary)' }}
                role="alert"
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

  const renderedContent = <MDXContentServer content={blog.content} />;
  const headings = extractHeadings(blog.content);

  return (
    <>
      <Navbar isOnBlogPage={true} />
      <main
        className="px-4 sm:px-6 lg:px-12 xl:px-16 pt-32 pb-16"
        style={{ background: 'var(--background)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_240px] xl:gap-14">
            <BlogPostClient
              blog={blog}
              renderedContent={renderedContent}
              relatedPosts={relatedPosts}
            />
            <TableOfContents headings={headings} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
