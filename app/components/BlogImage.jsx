'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const BlogImage = ({ src, alt, className = '', priority = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
        />
      )}
      
      {error ? (
        <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Failed to load image</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={400}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setError(true)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
        />
      )}
    </div>
  );
}; 