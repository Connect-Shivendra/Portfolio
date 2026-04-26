'use client'
import { useState, useEffect, Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Blogs from "./components/Blogs";
import { usePathname, useSearchParams } from "next/navigation";

// Create a separate component for the search params logic
function HomeContent() {
  const [blogs, setBlogs] = useState([]);
  const [activeSection, setActiveSection] = useState('top');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace('#', '');
    if (pathname === '/' && !hash) {
      setActiveSection('top');
    } else if (hash && ['about', 'services', 'blogs', 'work', 'contact'].includes(hash)) {
      setActiveSection(hash);
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);
  
  // Scroll to top whenever active section changes
  useEffect(() => {
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

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <Navbar isOnBlogPage={false} setActiveSection={setActiveSection} />
      
      <main className="pt-28 flex-grow">
        {activeSection === 'top' ? (
            <>
              <Header />
              <About />
              <Services />
              <Blogs blogs={blogs} />
              <Work />
              <Contact />
            </>
          ) : (
            <>
              {activeSection === 'about' && <About />} 
              {activeSection === 'services' && <Services />} 
              {activeSection === 'blogs' && <Blogs blogs={blogs} />} 
              {activeSection === 'work' && <Work />} 
              {activeSection === 'contact' && <Contact />} 
            </>
          )}
      </main>
      
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-[var(--background)]">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}

