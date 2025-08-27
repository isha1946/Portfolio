// src/components/Projects.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

// Project data with proper image URLs
// src/components/Projects.tsx (update the projectsData array)
const projectsData = [
  {
    title: "AI-Enabled Chatbot for Event Registration",
    description: "Developed a multilingual AI chatbot using Java Spring Boot and React.js with OpenAI API integration for intelligent responses.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "OpenAI API"],
    githubUrl: "https://github.com/R0ahulkd/Ai-Enabled-Event",
    liveUrl: "https://drive.google.com/file/d/1Ih5IwIhjmUzGpQVaktBmgQvJOn6pX_3F/view?usp=drive_link",
    imageUrl: "/projects/ai-chatbot-placeholder.png" // You can add this later
  },
  {
    title: "Gemini Desktop Assistant",
    description: "A powerful AI desktop assistant that integrates Google's Generative AI with screen capture and OCR capabilities.",
    technologies: ["Python", "PyQt6", "OCR", "Google AI"],
    githubUrl: "https://github.com/R0ahulkd/Gemini-Desktop-Assistant",
    liveUrl: "https://drive.google.com/file/d/1ZPeBCvVm0K0_Ff0CeWr8eqzpXHwPpgYI/view?usp=drive_link",
    imageUrl: "/projects/gemini-assistant.png" // Your actual image
  },
  {
    title: "URL Shortener Web Application",
    description: "A full-stack URL shortening platform with analytics, QR code generation, and user authentication.",
    technologies: ["Django", "Python", "SQLite", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/R0ahulkd/URL_Shortner_Django-Web-Based-Application",
    liveUrl: "https://my-urlshortener-sqlite.onrender.com",
    imageUrl: "/projects/url-shortener-placeholder.png" // You can add this later
  },
  {
    title: "Emoji Sentiment Counter",
    description: "A data science project that analyzes and visualizes sentiment distribution from emojis in messages.",
    technologies: ["Python", "Pandas", "Data Visualization", "CSV Processing"],
    githubUrl: "https://github.com/R0ahulkd/Emoji-Sentiment-Counter",
    liveUrl: "https://github.com/R0ahulkd/Emoji-Sentiment-Counter",
    imageUrl: "/projects/emoji-counter-placeholder.png" // You can add this later
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center relative mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">Portfolio</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of projects that demonstrate my expertise in full-stack development, 
            AI integration, and data science.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}