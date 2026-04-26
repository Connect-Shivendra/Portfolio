'use client'
import { useState, useEffect, Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ThoughtLeadership from "./components/ThoughtLeadership";
import Work from "./components/Work";
import Blogs from "./components/Blogs";
import { usePathname, useSearchParams } from "next/navigation";

const SECTIONS = ['about', 'thought-leadership', 'blogs', 'work', 'contact'];

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
    } else if (hash && SECTIONS.includes(hash)) {
      setActiveSection(hash);
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

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
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar isOnBlogPage={false} setActiveSection={setActiveSection} />
      <main className="pt-24 flex-grow">
        {activeSection === 'top' ? (
          <>
            <Header />
            <About />
            <ThoughtLeadership />
            <Blogs blogs={blogs} />
            <Work />
            <Contact />
          </>
        ) : (
          <>
            {activeSection === 'about' && <About />}
            {activeSection === 'thought-leadership' && <ThoughtLeadership />}
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
      <div className="flex flex-col min-h-screen" style={{ background: 'var(--background)' }}>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full border-2 border-t-transparent mx-auto animate-spin"
              style={{ borderColor: 'var(--accent-color)', borderTopColor: 'transparent' }}
            />
            <p className="mt-4 text-sm text-[var(--text-secondary)]">Loading…</p>
          </div>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
