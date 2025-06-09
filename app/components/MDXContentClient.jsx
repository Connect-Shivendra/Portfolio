'use client';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function MDXContentClient({ content }) {
  console.log('[MDX DEBUG] Rendering content:', content);
  return <MDXRemote source={content} />;
} 