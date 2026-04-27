'use client';
import { useState, useEffect } from 'react';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!headings?.length) return;
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0% -70% 0%', threshold: 0 }
    );
    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length < 3) return null;

  return (
    <aside className="hidden xl:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: 'var(--accent-color)' }}
      >
        On this page
      </p>
      <nav aria-label="Table of contents">
        <ul className="space-y-1.5">
          {headings.map(h => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="block text-sm leading-snug transition-all duration-200 py-0.5 border-l-2"
                style={{
                  paddingLeft: h.level === 3 ? '14px' : '10px',
                  color: activeId === h.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                  borderLeftColor: activeId === h.id ? 'var(--accent-color)' : 'transparent',
                  fontWeight: activeId === h.id ? '500' : '400',
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
