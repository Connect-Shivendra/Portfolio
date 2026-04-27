import { getAllBlogs } from './utils/mdx-utils';
import HomeClient from './HomeClient';

export default async function Home() {
  const blogs = await getAllBlogs();
  return <HomeClient blogs={blogs} />;
}
