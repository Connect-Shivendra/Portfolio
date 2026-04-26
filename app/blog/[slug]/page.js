import { getBlogData } from '@/app/utils/mdx-utils';
import BlogPostPage from '@/app/components/BlogPostPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const blog = await getBlogData(slug);
    if (!blog) return {};

    const title = blog.frontmatter.title;
    const description = blog.frontmatter.excerpt || '';
    const coverImage = blog.frontmatter.coverImage;
    const publishDate = blog.frontmatter.date;
    const author = blog.frontmatter.author;

    return {
      title,
      description,
      authors: [{ name: author }],
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: publishDate,
        authors: [author],
        images: coverImage ? [{ url: coverImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: coverImage ? [coverImage] : [],
        creator: '@your-twitter-handle',
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let blog = null;
  let error = null;
  try {
    blog = await getBlogData(slug);
  } catch (err) {
    error = err;
  }
  return <BlogPostPage blog={blog} error={error} />;
}
