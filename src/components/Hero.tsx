// Update your existing src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1WRQ_k5OPyTdRbx39jgsq-xEBN0-_QI_4/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
        >
          Hi, I&apos;m <span className="text-blue-600">Isha Singh</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          Data Science Enthusiast & AI Learner
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          MCA Candidate at LPU | Passionate about extracting insights from data, building predictive models,
          and creating intelligent AI-driven solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button 
            onClick={scrollToProjects}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            View My Work
          </button>
          <a 
            href="#contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            onClick={downloadResume}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -10px rgba(99, 102, 241, 0.5)"
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all duration-300 hover:gap-3"
          >
            <Download size={18} />
            Download Resume
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
