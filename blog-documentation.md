# Blog Functionality Documentation

## Changes Made

### 1. Dependencies Added
- `next-mdx-remote`: For rendering MDX content in Next.js
- `gray-matter`: For parsing frontmatter in MDX files

### 2. Directory Structure Created
- `/content/blogs/`: Directory for storing MDX blog posts
- `/app/blog/`: Directory for blog-related pages
- `/app/blog/[slug]/`: Dynamic route for individual blog posts
- `/public/blog/`: Directory for blog-related images

### 3. Files Created/Modified
- **New Files:**
  - `/app/utils/mdx.js`: Utility functions for handling MDX content
  - `/app/blog/page.js`: Blog listing page
  - `/app/blog/[slug]/page.js`: Individual blog post page
  - `/content/blogs/*.mdx`: Sample blog posts

- **Modified Files:**
  - `/app/components/Blogs.jsx`: Updated to display blog posts with filtering
  - `/app/page.js`: Uncommented Blogs component and added blog loading

### 4. Sample Blog Posts
Created three sample blog posts:
- "Building an Effective Enterprise Data Strategy"
- "Modern Data Warehousing with Snowflake"
- "Data Governance Best Practices"

## How to Maintain the Blog

### Adding New Blog Posts

1. Create a new MDX file in the `/content/blogs/` directory with a descriptive filename (e.g., `new-post.mdx`)
2. Include frontmatter at the top of the file with the following format:

```mdx
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
category: "Category Name"
excerpt: "A brief description of your blog post"
coverImage: "/blog/your-image.jpg"
author: "Your Name"
---

# Your Blog Post Content

Write your content here using Markdown syntax.
```

3. Place any images referenced in your blog post in the `/public/blog/` directory

### Modifying Blog Categories

To add or modify blog categories:
1. Open `/assets/assets.js`
2. Find the `BlogsList` array
3. Add or modify categories as needed:

```javascript
export const BlogsList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'All'},
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Your New Category' },
    // Other categories...
];
```

### Customizing Blog Appearance

#### Blog Listing Page
To modify the appearance of the blog listing:
1. Edit `/app/components/Blogs.jsx`
2. Customize the `BlogCard` component for individual card styling
3. Modify the grid layout in the main component

#### Individual Blog Posts
To customize individual blog post pages:
1. Edit `/app/blog/[slug]/page.js`
2. Modify the article layout and styling

## Advanced Customizations

### Adding Code Syntax Highlighting
To add syntax highlighting for code blocks:

1. Install required packages:
```bash
npm install rehype-highlight highlight.js
```

2. Modify the MDX rendering in `/app/blog/[slug]/page.js` to include the syntax highlighting plugin

### Adding Table of Contents
To add an automatic table of contents:

1. Install required packages:
```bash
npm install remark-toc
```

2. Modify the MDX rendering to include the TOC plugin

### Adding Comments
To add a commenting system:

1. Integrate a third-party commenting system like Disqus or Utterances
2. Add the commenting component to the blog post template

## Troubleshooting

### Common Issues

1. **Images not displaying:**
   - Ensure images are in the correct directory (`/public/blog/`)
   - Check that image paths in MDX files are correct

2. **MDX content not rendering:**
   - Verify MDX syntax is correct
   - Check for errors in the frontmatter format

3. **Categories not filtering correctly:**
   - Ensure category names in blog posts exactly match those in the BlogsList array

### Getting Help

For more information on:
- MDX: https://mdxjs.com/
- Next.js: https://nextjs.org/docs
- next-mdx-remote: https://github.com/hashicorp/next-mdx-remote
