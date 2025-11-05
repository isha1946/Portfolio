// src/components/Projects.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // ✅ ONLY THIS PART CHANGED — now only 2 project objects
  const projects = [
    {
      title: "Emoji Sentiment Counter",
      description:
        "Machine learning based project that analyzes emoji usage to detect overall user sentiment and emotion patterns.",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Pandas"],
      githubUrl: "https://github.com/",  // add real link if you want
      liveUrl: "#",
      imageUrl: "/projects/emoji.png",
    },
    {
      title: "AI Enabled Chatbot",
      description:
        "AI-powered chatbot that helps users get information and register for events with intelligent conversational responses.",
      technologies: ["Python", "Flask", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/",  // add real link if you want
      liveUrl: "#",
      imageUrl: "/projects/chatbot.png",
    },
  ];
  // ✅ No other modifications

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-50 px-4 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #000000 1px, transparent 1px),
                             linear-gradient(-45deg, #000000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center relative mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">Projects</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Work</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Showcasing practical projects that highlight learning, creativity, and problem-solving abilities.
          </p>
        </motion.div>

        {/* ✅ Project Cards Grid - unchanged */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
