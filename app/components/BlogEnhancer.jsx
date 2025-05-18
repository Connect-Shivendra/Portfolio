'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

// Import base Prism CSS
import 'prismjs/themes/prism-tomorrow.css';
// Import additional languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-sql';

export default function BlogEnhancer() {
  useEffect(() => {
    // Add language classes to code blocks if not present
    const codeBlocks = document.querySelectorAll('.blog-content pre code');
    codeBlocks.forEach(block => {
      if (!block.className.includes('language-')) {
        block.className = 'language-javascript'; // Default language
      }
    });
    
    // Initialize Prism for syntax highlighting
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
    
    // Add copy buttons to code blocks
    const preBlocks = document.querySelectorAll('.blog-content pre');
    preBlocks.forEach(block => {
      // Only add button if it doesn't already exist
      if (!block.querySelector('.copy-button')) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `;
        
        button.addEventListener('click', ( ) => {
          const code = block.querySelector('code').innerText;
          navigator.clipboard.writeText(code);
          
          // Visual feedback
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `;
          
          setTimeout(( ) => {
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `;
          }, 2000 );
        });
        
        block.style.position = 'relative';
        block.appendChild(button);
      }
    });
    
    // Add lazy loading to images
    const images = document.querySelectorAll('.blog-content img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
    
    // Wrap images in figure elements with captions if they have alt text
    images.forEach(img => {
      const altText = img.getAttribute('alt');
      if (altText && !img.parentElement.matches('figure')) {
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = altText;
        
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);
        figure.appendChild(figcaption);
      }
    });
    
    // Make tables responsive
    const tables = document.querySelectorAll('.blog-content table');
    tables.forEach(table => {
      if (!table.parentElement.classList.contains('table-container')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-container';
        wrapper.style.overflowX = 'auto';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
    
  }, []);
  
  return null; // This is a utility component with no UI
}
