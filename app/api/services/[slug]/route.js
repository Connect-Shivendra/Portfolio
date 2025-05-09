import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

// Helper function to get service data by slug
function getServiceBySlug(slug) {
  const servicesDirectory = path.join(process.cwd(), 'app', 'services');
  const serviceFilePath = path.join(servicesDirectory, slug, 'page.md');

  try {
    const fileContents = fs.readFileSync(serviceFilePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Add a default title if not present in frontmatter
    if (!data.title) {
      // Generate a title from the slug: e.g., 'data-strategy' -> 'Data Strategy'
      data.title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    if (!data.coverImage) {
        // Add a placeholder or default cover image if needed
        // data.coverImage = '/images/default-service-cover.jpg';
    }
    if (!data.date) {
        data.date = new Date().toISOString().split('T')[0]; // Default to today's date
    }
    if (!data.author) {
        data.author = 'Shivendra Connect'; // Default author
    }
    if (!data.category) {
        data.category = 'Consulting Services'; // Default category
    }

    return {
      slug,
      frontmatter: data,
      contentHtml: content, // For now, sending raw markdown. Will be processed on client or with a lib.
    };
  } catch (error) {
    console.error(`Error reading service file for slug ${slug}:`, error);
    return null;
  }
}

export async function GET(request, { params }) {
  const slug = params.slug;
  const service = getServiceBySlug(slug);

  if (service) {
    return NextResponse.json({ service });
  } else {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }
}

