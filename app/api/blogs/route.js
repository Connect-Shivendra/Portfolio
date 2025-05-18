import { NextResponse } from 'next/server';
import { getAllBlogs } from '@/app/utils/mdx-utils';

export async function GET() {
  try {
    console.log('API: Fetching all blogs');
    const blogs = getAllBlogs();
    console.log(`API: Found ${blogs.length} blogs`);
    console.log('API: Blog categories:', blogs.map(blog => blog.frontmatter.category));
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
