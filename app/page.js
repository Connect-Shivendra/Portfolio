
'use client'
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Blogs from "./components/Blogs";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [blogs, setBlogs] = useState([]);
  // Default to 'top' to show all sections initially
  const [activeSection, setActiveSection] = useState('top'); 

  // Check URL hash on initial load and set active section accordingly
  useEffect(() => {
    // Get the hash from the URL (e.g., #work)
    const hash = window.location.hash.replace('#', '');
    
    // If hash exists and is a valid section, set it as active
    if (hash && ['about', 'services', 'blogs', 'work', 'contact'].includes(hash)) {
      setActiveSection(hash);
      
      // Scroll to top of the page when loading with a hash
      window.scrollTo(0, 0);
    }
  }, []);
  
  // Scroll to top whenever active section changes
  useEffect(() => {
    // Scroll to top of the page when active section changes
    window.scrollTo(0, 0);
  }, [activeSection]);

  // Load blogs
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };
    loadBlogs();
  }, []);

  // Dark mode initialization
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    // Wrap everything in a flex container, ensure min height, AND apply background color directly
    <div className="flex flex-col min-h-screen bg-[var(--background)]"> {/* Added bg-[var(--background)] here */}
      {/* Pass setActiveSection state setter to Navbar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        isOnBlogPage={false} 
        setActiveSection={setActiveSection} // Pass the setter function
      />
      
      {/* Add flex-grow to main container to make it fill available space */}
      <main className="pt-28 flex-grow"> {/* Added flex-grow */}
        {/* Conditionally render sections based on activeSection state */}
        {activeSection === 'top' ? (
            <> {/* Render all sections when 'top' is active */}
              <Header isDarkMode={isDarkMode} />
              <About isDarkMode={isDarkMode} />
              <Services isDarkMode={isDarkMode} />
              <Blogs isDarkMode={isDarkMode} blogs={blogs} />
              <Work isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
            </>
          ) : (
            <> {/* Render only the active section otherwise */}
              {activeSection === 'about' && <About isDarkMode={isDarkMode} />} 
              {activeSection === 'services' && <Services isDarkMode={isDarkMode} />} 
              {activeSection === 'blogs' && <Blogs isDarkMode={isDarkMode} blogs={blogs} />} 
              {activeSection === 'work' && <Work isDarkMode={isDarkMode} />} 
              {activeSection === 'contact' && <Contact isDarkMode={isDarkMode} />} 
            </>
          )}
      </main>
      
      {/* Footer is always rendered, pushed down by flex-grow on main */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

