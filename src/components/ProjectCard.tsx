// src/components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative h-full flex flex-col"
    >
      {/* Gradient background effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Project image */}
        <ProjectImage 
          src={imageUrl || ""} 
          alt={title} 
          index={index} 
          isLocal={true}
        />
        
        <div className="p-6 flex-1 flex flex-col">
          <motion.h3 
            className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300"
            variants={{
              hover: { x: 2 }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-5 leading-relaxed flex-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#2563eb",
                  color: "#fff"
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex space-x-3 pt-4 border-t border-gray-100 mt-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={githubUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium group/github flex-1 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              Code
              <motion.span
                initial={{ x: 0 }}
                animate={isHovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={12} />
              </motion.span>
            </motion.a>
            
            {liveUrl && liveUrl !== "#" && (
              <motion.a
                href={liveUrl}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium group/demo flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                Live Demo
                <motion.span
                  initial={{ x: 0 }}
                  animate={isHovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={12} />
                </motion.span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Subtle border animation on hover */}
      <motion.div 
        className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"
        initial={false}
      />
    </motion.div>
  );
}
