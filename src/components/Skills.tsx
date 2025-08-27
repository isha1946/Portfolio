// src/components/Skills.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillsData = [
  { 
    name: 'Java', 
    category: 'Backend',
    icon: '☕',
    description: 'Building robust enterprise applications and backend systems'
  },
  { 
    name: 'Python', 
    category: 'Data Science',
    icon: '🐍',
    description: 'Data analysis, machine learning, and automation scripts'
  },
  { 
    name: 'Spring Boot', 
    category: 'Backend',
    icon: '🌱',
    description: 'Creating scalable microservices and REST APIs'
  },
  { 
    name: 'React', 
    category: 'Frontend',
    icon: '⚛️',
    description: 'Building interactive and responsive user interfaces'
  },
  { 
    name: 'Next.js', 
    category: 'Full Stack',
    icon: '▲',
    description: 'Server-rendered React applications with optimal performance'
  },
  { 
    name: 'MySQL', 
    category: 'Database',
    icon: '🐬',
    description: 'Designing and optimizing relational database systems'
  },
  { 
    name: 'Django', 
    category: 'Backend',
    icon: '🎸',
    description: 'Rapid development of secure web applications'
  },
  { 
    name: 'OpenAI API', 
    category: 'AI',
    icon: '🧠',
    description: 'Integrating AI capabilities into practical applications'
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gray-50 px-4 relative overflow-hidden">
      {/* Animated background elements */}
  {/* Animated background elements */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        {[...Array(15)].map((_, i) => {
          // Use index-based positioning for consistent SSR/client rendering
          const positions = [
            { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 60, top: 80 },
            { left: 25, top: 60 }, { left: 75, top: 40 }, { left: 40, top: 25 },
            { left: 90, top: 70 }, { left: 15, top: 85 }, { left: 70, top: 10 },
            { left: 45, top: 75 }, { left: 20, top: 45 }, { left: 80, top: 85 },
            { left: 55, top: 30 }, { left: 30, top: 90 }, { left: 65, top: 55 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              className="absolute text-4xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + (i * 2),
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                opacity: 0.1 + (i % 3) * 0.05,
              }}
            >
              {['</>', '{ }', '[]', '()', '=>'][i % 5]}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center relative mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">Technologies</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical <span className="text-blue-600">Stack</span></h2>
          
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Technologies and tools I use to bring ideas to life and solve complex problems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, _index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 30,
                  rotateX: -90
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                {/* Skill Icon with animation */}
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {skill.icon}
                </motion.div>
                
                {/* Skill Name */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {skill.name}
                </h3>
                
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mb-3">
                  {skill.category}
                </span>
                
                {/* Description appears on hover */}
                <motion.p 
                  className="text-sm text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ 
                    height: 'auto',
                    opacity: 1
                  }}
                >
                  {skill.description}
                </motion.p>
              </div>

              {/* Subtle border animation on hover */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Always exploring new technologies and frameworks to expand my toolkit
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium"
          >
            <span>Currently learning: TensorFlow & Node.js</span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🔄
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}