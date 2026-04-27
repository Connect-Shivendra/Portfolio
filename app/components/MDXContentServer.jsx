/**
 * MDXContentServer.jsx — Server Component
 * Renders raw MDX content using @mdx-js/mdx evaluate().
 * No next-mdx-remote dependency — completely Vercel-safe.
 */

import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

// Gold/navy styled components for MDX elements
const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold font-Sora text-[var(--text-primary)] mt-10 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="text-2xl md:text-3xl font-semibold font-Sora text-[var(--text-primary)] mt-10 mb-4 pb-2 border-b border-[var(--border-color)]">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-xl font-semibold font-Sora text-[var(--text-primary)] mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-medium font-Sora text-[var(--text-primary)] mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-[var(--accent-color)] underline underline-offset-2 hover:text-[var(--accent-dark)] transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--text-secondary)]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-[var(--text-secondary)]">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[var(--accent-color)] pl-6 my-8 italic text-[var(--text-secondary)]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 overflow-x-auto my-8 text-sm font-mono leading-relaxed">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-12 border-[var(--border-color)]" />,
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src, alt }) => (
    <img src={src} alt={alt || ''} className="rounded-xl my-8 w-full" loading="lazy" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left p-3 border-b border-[var(--border-color)] font-semibold text-[var(--text-primary)] bg-[var(--card-bg)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[var(--text-secondary)]">{children}</em>
  ),
};

export default async function MDXContentServer({ content }) {
  try {
    const { default: MDXContent } = await evaluate(content, {
      ...runtime,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    });

    return (
      <div className="blog-prose">
        <MDXContent components={components} />
      </div>
    );
  } catch (error) {
    console.error('MDX render error:', error);
    // Fallback: render as plain text if MDX evaluation fails
    return (
      <div className="blog-prose">
        <p className="text-[var(--text-secondary)] whitespace-pre-wrap">{content}</p>
      </div>
    );
  }
}
