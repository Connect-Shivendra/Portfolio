import { getBlogData } from '../app/utils/mdx-utils';

test('getBlogData loads and parses frontmatter', async () => {
  const blog = await getBlogData('data-governance');
  expect(blog).toBeDefined();
  expect(blog.frontmatter).toHaveProperty('title');
  expect(blog.frontmatter).toHaveProperty('date');
  expect(blog.content).toContain('# Data Governance Best Practices');
}); 