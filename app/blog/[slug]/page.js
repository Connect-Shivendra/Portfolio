import { getBlogData } from '@/app/utils/mdx-utils';
import BlogPostPage from '@/app/components/BlogPostPage';

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
