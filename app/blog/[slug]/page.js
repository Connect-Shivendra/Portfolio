import { getBlogData, getAllBlogs } from '@/app/utils/mdx-utils';
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
        creator: '@shivendra_singh',
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
  if (!slug || !/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return <BlogPostPage blog={null} error={new Error('Not found')} relatedPosts={[]} />;
  }
  let blog = null;
  let error = null;
  let relatedPosts = [];
  try {
    blog = await getBlogData(slug);
    if (blog) {
      const allBlogs = await getAllBlogs();
      const sameCategory = allBlogs.filter(
        b => b.slug !== slug && b.frontmatter.category === blog.frontmatter.category
      );
      const others = allBlogs.filter(
        b => b.slug !== slug && b.frontmatter.category !== blog.frontmatter.category
      );
      relatedPosts = [...sameCategory, ...others].slice(0, 3);
    }
  } catch (err) {
    error = err;
  }
  return <BlogPostPage blog={blog} error={error} relatedPosts={relatedPosts} />;
}
