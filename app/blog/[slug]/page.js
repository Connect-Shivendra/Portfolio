import { getBlogData } from '@/app/utils/mdx-utils';
import BlogPostPage from '@/app/components/BlogPostPage';

export async function generateMetadata({ params }) {
  try {
    const blog = await getBlogData(params.slug);
    if (!blog) return {};
    return {
      title: blog.frontmatter.title,
      description: blog.frontmatter.excerpt || '',
      openGraph: {
        title: blog.frontmatter.title,
        description: blog.frontmatter.excerpt || '',
        type: 'article',
        images: blog.frontmatter.coverImage
          ? [{ url: blog.frontmatter.coverImage }]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.frontmatter.title,
        description: blog.frontmatter.excerpt || '',
        images: blog.frontmatter.coverImage ? [blog.frontmatter.coverImage] : [],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }) {
  let blog = null;
  let error = null;
  try {
    blog = await getBlogData(params.slug);
  } catch (err) {
    error = err;
  }
  return <BlogPostPage blog={blog} error={error} />;
}
