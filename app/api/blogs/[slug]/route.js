import { NextResponse } from 'next/server';
import { getBlogBySlug } from '@/app/utils/mdx-utils';
import { remark } from 'remark';
import html from 'remark-html';

export async function GET(request, context) {
  const slug = context.params.slug;
  
  try {
    const blog = getBlogBySlug(slug);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(blog.content);
    
    const contentHtml = processedContent.toString();
    
    // Add the HTML content to the blog object
    const blogWithHtml = {
      ...blog,
      contentHtml
    };
    
    return NextResponse.json({ blog: blogWithHtml });
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' }, 
      { status: 404 }
    );
  }
}
