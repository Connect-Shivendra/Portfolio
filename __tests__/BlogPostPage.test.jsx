import { render, screen } from '@testing-library/react';
import BlogPostPage from '../app/components/BlogPostPage';

describe('BlogPostPage', () => {
  it('renders blog title', () => {
    render(<BlogPostPage blog={{
      frontmatter: { title: 'Test Title', date: '2024-01-01', author: 'Test', category: 'Cat' },
      content: 'Hello',
    }} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(<BlogPostPage blog={null} error={new Error('fail')} />);
    expect(screen.getByText(/lost in the multiverse/i)).toBeInTheDocument();
    expect(screen.getByText(/fail/)).toBeInTheDocument();
  });
}); 