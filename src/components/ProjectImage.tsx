// src/components/ProjectImage.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  index: number;
  isLocal?: boolean;
}

export default function ProjectImage({ src, alt, index }: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if the image exists, otherwise show placeholder
  if (hasError || !src) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center"
      >
        <div className="text-4xl text-gray-300">
          {index % 4 === 0 ? "🤖" : index % 4 === 1 ? "🌐" : index % 4 === 2 ? "🔗" : "📊"}
        </div>
        
        {/* Overlay effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          whileHover={{ opacity: 0.1 }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative h-48 w-full overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
      )}
      
      {/* Overlay effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        whileHover={{ opacity: 0.1 }}
      />
    </motion.div>
  );
}