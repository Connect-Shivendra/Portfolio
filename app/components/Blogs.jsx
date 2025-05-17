"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '@/app/utils/animations';
import { BlogsList } from '@/assets/assets'; // Import BlogsList

// Simple inline variant for card fade-in
const cardFadeInVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
};

const Blogs = () => {
  const posts = BlogsList || []; // Use BlogsList or default to empty array

  if (!posts || posts.length === 0) {
    return (
      <motion.div
        id="blogs"
        variants={staggerContainer(0.1, 0.1)}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className="py-12 md:py-16 lg:py-20 bg-lightTheme dark:bg-darkTheme transition-colors duration-300"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100 font-Ovo"
          >
            My Thoughts & Insights
          </motion.h2>
          <motion.p
            variants={textVariant(0.3)}
            className="text-gray-600 dark:text-gray-400 font-Karla"
          >
            No blog posts available at the moment. Please check back later!
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      id="blogs"
      variants={staggerContainer(0.2, 0.3)}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.05 }}
      className="py-12 md:py-16 lg:py-20 bg-lightTheme dark:bg-darkTheme transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={textVariant(0.1)}
          className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100 font-Ovo"
        >
          My Thoughts & Insights
        </motion.h2>
        <motion.p
          variants={textVariant(0.2)}
          className="text-center text-gray-600 dark:text-gray-400 mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto font-Karla"
        >
          Exploring the latest in technology, data strategy, and digital transformation. Dive into articles that offer practical advice and forward-thinking perspectives.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {posts.map((blog, index) => {
            // Safety checks for frontmatter and its properties
            const fm = blog.frontmatter || {};
            const title = fm.title || 'Untitled Post';
            const coverImage = fm.coverImage;
            const excerpt = fm.excerpt || 'No excerpt available.';
            const date = fm.date ? new Date(fm.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date';
            const category = fm.category;
            const author = fm.author;
            const slug = blog.slug || `untitled-post-${index}`;

            return (
              <motion.div
                key={slug} // Use slug or a generated unique key
                variants={cardFadeInVariant} 
                className="h-full"
              >
                <Link href={`/blog/${slug}`} className="block group h-full">
                  <div
                    className="blog-card bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden h-full transition-colors duration-300 hover:shadow-xl flex flex-col"
                  >
                    <div className={`h-48 ${coverImage ? '' : 'bg-gray-200 dark:bg-gray-700'} relative overflow-hidden`}>
                      {coverImage ? (
                        <Image
                          src={coverImage}
                          alt={title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                          <span>No Image Available</span>
                        </div>
                      )}
                      {category && (
                        <div className="absolute bottom-0 left-0 bg-opacity-70 bg-darkTheme dark:bg-opacity-70 dark:bg-darkHover text-white text-xs px-2 py-1 rounded-tr-md">
                          {category}
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 font-Ovo group-hover:text-primary dark:group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-Karla line-clamp-3 flex-grow">
                        {excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 font-Karla mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span>{date}</span>
                        {author && <span>By {author}</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Blogs;

