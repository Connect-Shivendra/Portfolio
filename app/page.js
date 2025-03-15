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
// Remove direct import of getAllBlogs

// Below creates the contents of the Page  //29/01/24
// Call Navbar.jsx for Page
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Load blogs from API instead of direct file system access
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

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
  <>
  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
  {/* Header */}
  <Header isDarkMode={isDarkMode} />
  <About isDarkMode={isDarkMode} />
  <Services isDarkMode={isDarkMode} />
  <Blogs isDarkMode={isDarkMode} blogs={blogs} />
  <Work isDarkMode={isDarkMode} />
  <Contact isDarkMode={isDarkMode} />
  <Footer isDarkMode={isDarkMode} />
  </>
  );
}
