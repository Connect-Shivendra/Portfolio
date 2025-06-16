"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, description, isLeft = true, index }) => {
  // Simplified animation variants with minimal delay
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.1,  // Reduced from 0.15
        delay: index * 0.02  // Reduced from 0.05
      }
    }
  };

  return (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} mb-8 relative md:mb-16`}>
      {/* Timeline line - hidden on mobile, visible on tablet and up */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--accent-color)] opacity-20"></div>
      
      {/* Timeline dot - simplified animation */}
      <motion.div 
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent-color)] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Content card - with simplified animation */}
      <motion.div 
        className={`w-full pl-8 md:w-5/12 ${isLeft ? 'md:pr-8 md:pl-0' : 'md:pl-8'}`}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={`p-4 rounded-lg shadow-md bg-[var(--card-bg)] dark:bg-gray-800 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg`}>
          <span className="text-sm font-semibold text-[var(--accent-color)]">{date}</span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = ({ events }) => {
  if (!events || events.length === 0) return null;
  
  // Simplified container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02  // Reduced from 0.05
      }
    }
  };

  return (
    <motion.div
      className="w-full py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        Project Timeline
      </motion.h2>
      
      <div className="relative">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            isLeft={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
