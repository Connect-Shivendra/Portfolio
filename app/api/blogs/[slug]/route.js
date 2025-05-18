// app/api/blogs/[slug]/route.js
import { NextResponse } from 'next/server';
import { getBlogBySlug } from '@/app/utils/mdx-utils';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export async function GET(request, context) {
  const params = await context.params;
  const slug = params?.slug;

  try {
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const blog = getBlogBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Enhanced markdown processing pipeline with remarkGfm
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, {
        sanitize: false // Allow HTML in markdown for advanced formatting
      })
      .process(blog.content);

    const contentHtml = processedContent.toString();

    const blogWithHtml = {
      ...blog,
      contentHtml
    };

    return NextResponse.json({ blog: blogWithHtml });
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' }, 
      { status: 500 }
    );
  }
}
