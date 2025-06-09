import { getAllBlogs } from '@/app/utils/mdx-utils';

export async function GET() {
  const baseUrl = 'https://your-domain.com';
  const posts = await getAllBlogs();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      ${posts
        .filter(post => {
          const d = post.frontmatter.date;
          return d && !isNaN(new Date(d));
        })
        .map((post) => {
          const d = new Date(post.frontmatter.date);
          return `
            <url>
              <loc>${baseUrl}/blog/${post.slug}</loc>
              <lastmod>${d.toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 