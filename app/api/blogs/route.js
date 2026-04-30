import { NextResponse } from 'next/server';
import { getAllBlogs } from '@/app/utils/mdx-utils';

export const revalidate = 300;

export async function GET() {
  try {
    const blogs = await getAllBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
