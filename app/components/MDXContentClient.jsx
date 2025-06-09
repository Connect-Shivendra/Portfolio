'use client';
import { MDXRemote } from 'next-mdx-remote/rsc';

// You can define custom MDX components here if needed
const components = {
  // Example: h1: (props) => <h1 {...props} className="text-4xl font-bold" />,
};

export default function MDXContentClient({ content }) {
  return <MDXRemote source={content} components={components} />;
} 