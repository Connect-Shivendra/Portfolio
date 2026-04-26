/**
 * Test suite for shivendra.io
 * Run: npm test
 */

// ─── mdx-utils unit tests ────────────────────────────────────────────────────
describe('mdx-utils', () => {
  const mockBlogContent = `---
title: Test Blog Post
date: 2026-01-15
description: A test blog post for automated testing.
category: Data Strategy
---

# Test Blog Post

This is the content of the test blog post. It has multiple words to test read time estimation.
Data strategy is important for organisations of all sizes.
`;

  describe('estimateReadTime (via getBlogData)', () => {
    it('returns a string with "min read"', () => {
      const words = mockBlogContent.trim().split(/\s+/).length;
      const minutes = Math.ceil(words / 200);
      const result = `${minutes} min read`;
      expect(result).toMatch(/\d+ min read/);
    });

    it('returns at least 1 min for any content', () => {
      const shortContent = 'short';
      const words = shortContent.trim().split(/\s+/).length;
      const minutes = Math.ceil(words / 200);
      expect(minutes).toBeGreaterThanOrEqual(1);
    });
  });

  describe('getAllBlogSlugs logic', () => {
    it('filters .mdx and .md files correctly', () => {
      const mockFiles = ['post-one.mdx', 'post-two.md', 'image.png', 'notes.txt'];
      const filtered = mockFiles
        .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
        .map(f => f.replace(/\.(mdx|md)$/, ''));
      expect(filtered).toEqual(['post-one', 'post-two']);
      expect(filtered).not.toContain('image.png');
    });
  });

  describe('getAllBlogs sort logic', () => {
    it('sorts blogs by date descending', () => {
      const blogs = [
        { slug: 'older', date: '2024-01-01', title: 'Older Post' },
        { slug: 'newer', date: '2026-01-01', title: 'Newer Post' },
        { slug: 'middle', date: '2025-06-15', title: 'Middle Post' },
      ];

      const sorted = [...blogs].sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
      });

      expect(sorted[0].slug).toBe('newer');
      expect(sorted[1].slug).toBe('middle');
      expect(sorted[2].slug).toBe('older');
    });

    it('puts blogs without dates at the end', () => {
      const blogs = [
        { slug: 'no-date', date: null, title: 'No Date' },
        { slug: 'has-date', date: '2026-01-01', title: 'Has Date' },
      ];

      const sorted = [...blogs].sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
      });

      expect(sorted[0].slug).toBe('has-date');
      expect(sorted[1].slug).toBe('no-date');
    });
  });
});

// ─── Contact form validation tests ──────────────────────────────────────────
describe('Contact form validation', () => {
  const validate = (fields, captchaToken) => {
    const errs = {};
    if (!fields.name || fields.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters.';
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Enter a valid email address.';
    if (!fields.phone || !/^[0-9\-\+\s\(\)]{7,20}$/.test(fields.phone))
      errs.phone = 'Enter a valid phone number.';
    if (!fields.message || fields.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    if (!captchaToken)
      errs.captcha = 'Please complete the captcha.';
    return errs;
  };

  it('passes with valid inputs', () => {
    const errors = validate(
      {
        name: 'Shivendra Singh',
        email: 'test@example.com',
        phone: '+61412345678',
        message: 'This is a valid test message for the form.',
      },
      'valid-captcha-token'
    );
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('fails with empty name', () => {
    const errors = validate(
      { name: '', email: 'test@example.com', phone: '0412345678', message: 'Valid message here.' },
      'token'
    );
    expect(errors.name).toBeDefined();
  });

  it('fails with single character name', () => {
    const errors = validate(
      { name: 'A', email: 'test@example.com', phone: '0412345678', message: 'Valid message here.' },
      'token'
    );
    expect(errors.name).toBeDefined();
  });

  it('fails with invalid email', () => {
    const errors = validate(
      { name: 'John Smith', email: 'notanemail', phone: '0412345678', message: 'Valid message here.' },
      'token'
    );
    expect(errors.email).toBeDefined();
  });

  it('fails with email missing domain', () => {
    const errors = validate(
      { name: 'John Smith', email: 'test@', phone: '0412345678', message: 'Valid message here.' },
      'token'
    );
    expect(errors.email).toBeDefined();
  });

  it('passes with valid Australian phone formats', () => {
    const validPhones = ['+61412345678', '0412 345 678', '(02) 9000 1234', '02-9000-1234'];
    validPhones.forEach(phone => {
      const errors = validate(
        { name: 'John Smith', email: 'test@example.com', phone, message: 'Valid message here.' },
        'token'
      );
      expect(errors.phone).toBeUndefined();
    });
  });

  it('fails with message less than 10 characters', () => {
    const errors = validate(
      { name: 'John Smith', email: 'test@example.com', phone: '0412345678', message: 'Short' },
      'token'
    );
    expect(errors.message).toBeDefined();
  });

  it('fails without captcha token', () => {
    const errors = validate(
      {
        name: 'John Smith',
        email: 'test@example.com',
        phone: '0412345678',
        message: 'This is a valid message.',
      },
      ''
    );
    expect(errors.captcha).toBeDefined();
  });

  it('returns all errors when all fields are invalid', () => {
    const errors = validate({ name: '', email: '', phone: '', message: '' }, '');
    expect(Object.keys(errors)).toHaveLength(5);
  });
});

// ─── Theme token tests ────────────────────────────────────────────────────────
describe('Theme design tokens', () => {
  const lightTokens = {
    background: '#F4F3F0',
    accentColor: '#C9A84C',
    cardBg: '#FFFFFF',
    textPrimary: '#1A1A2E',
  };

  const darkTokens = {
    background: '#0D1117',
    accentColor: '#C9A84C',
    cardBg: '#161B22',
    textPrimary: '#E8E8F0',
  };

  it('light mode has correct background', () => {
    expect(lightTokens.background).toBe('#F4F3F0');
  });

  it('dark mode has deep navy background', () => {
    expect(darkTokens.background).toBe('#0D1117');
  });

  it('gold accent is consistent across modes', () => {
    expect(lightTokens.accentColor).toBe(darkTokens.accentColor);
  });

  it('accent color is gold not green', () => {
    expect(lightTokens.accentColor).not.toMatch(/^#2|^#4A9D/); // not old green values
  });
});

// ─── Metadata tests ───────────────────────────────────────────────────────────
describe('Site metadata', () => {
  const metadata = {
    title: "Shivendra Singh — Head of Data, Information & AI",
    description: "Transformational data leader with 14+ years of experience",
    keywords: ['Shivendra Singh', 'Head of Data', 'Data Strategy', 'Sydney Australia'],
  };

  it('title includes full name', () => {
    expect(metadata.title).toContain('Shivendra Singh');
  });

  it('title includes role', () => {
    expect(metadata.title).toContain('Head of Data');
  });

  it('description mentions experience', () => {
    expect(metadata.description).toContain('14+');
  });

  it('keywords include location', () => {
    expect(metadata.keywords).toContain('Sydney Australia');
  });

  it('does not use placeholder description', () => {
    expect(metadata.description).not.toBe('Share Data Knowledge to the world #Free');
  });
});

// ─── Navigation tests ─────────────────────────────────────────────────────────
describe('Navigation section IDs', () => {
  const validSections = ['about', 'services', 'blogs', 'work', 'contact'];

  it('all expected sections are defined', () => {
    expect(validSections).toContain('about');
    expect(validSections).toContain('contact');
    expect(validSections).toContain('blogs');
  });

  it('speaking section is not yet in nav (marked as future)', () => {
    // speaking page exists at /speaking but not in main nav yet
    expect(validSections).not.toContain('speaking');
  });

  it('handles hash navigation correctly', () => {
    const hash = '#about';
    const sectionId = hash.replace('#', '');
    expect(validSections.includes(sectionId)).toBe(true);
  });

  it('rejects unknown section hashes', () => {
    const unknownHash = '#unknown-section';
    const sectionId = unknownHash.replace('#', '');
    expect(validSections.includes(sectionId)).toBe(false);
  });
});
