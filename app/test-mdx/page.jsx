import { MDXRemote } from 'next-mdx-remote/rsc';

export default function TestMDX() {
  const mdxString = '# Hello, MDX!';
  return <MDXRemote source={mdxString} />;
}
