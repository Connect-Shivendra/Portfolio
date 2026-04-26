/**
 * MDXContentServer.jsx
 * Server component — renders raw MDX content using next-mdx-remote/rsc.
 * 'next-mdx-remote/rsc' is the RSC (React Server Component) variant and
 * is separate from the vulnerable serialize() path. This is safe to use.
 */

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

// Custom components that apply gold/navy design tokens to MDX elements
const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold font-Sora text-[var(--text-primary)] mt-10 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-semibold font-Sora text-[var(--text-primary)] mt-10 mb-4 border-b border-[var(--border-color)] pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold font-Sora text-[var(--text-primary)] mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-medium font-Sora text-[var(--text-primary)] mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
      {children}
    </p>
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
    <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--text-secondary)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-[var(--text-secondary)]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
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
  hr: () => (
    <hr className="my-12 border-[var(--border-color)]" />
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
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

export default function MDXContentServer({ content }) {
  return (
    <div className="blog-prose">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </div>
  );
}
