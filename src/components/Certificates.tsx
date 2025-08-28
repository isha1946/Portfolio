// src/components/Certificates.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Award, Calendar, Building, ChevronRight, Eye } from 'lucide-react';

// Certificate data - replace with your actual certificates
const certificatesData = [
  {
    title: "The Complete 2024 web development bootcamp",
    issuer: "Udemy",
    date: "2024",
    description: "Comprehensive course covering React, Node.js, Express, and MongoDB",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    credentialId: "UC-f762bb81-212c-4b8a-9565-c3567f3b8b98",
    verificationUrl: "https://www.udemy.com/certificate/UC-f762bb81-212c-4b8a-9565-c3567f3b8b98/",
    category: "Web Development",
    imageUrl: "/certificates/fullstack-cert.jpg"
  },
  {
    title: "Data Analysis with Python",
    issuer: "Cognitive Class",
    date: "2025",
    description: "Advanced Python programming for data analysis and machine learning",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    credentialId: "45ffeebd393a4bc19a97400d9b1d17ae",
    verificationUrl: "https://courses.cognitiveclass.ai/certificates/45ffeebd393a4bc19a97400d9b1d17ae",
    category: "Python",
    imageUrl: "/certificates/python-cert.jpg"
  },
  {
    title: "Object Oriented Programming using C++",
    issuer: "Lovely Professional University",
    date: "2024",
    description: "Gained foundational to intermediate knowledge of C++ including OOP, memory management, and problem-solving.",
    skills: ["OOP", "Data Structures & Algorithms", "Memory Management & Pointers"],
    credentialId: "28al4Bm1028d770N8",
    verificationUrl: "https://drive.google.com/file/d/1AW5O5KG-N0fp3KMJy9Bhs84FWGUVjM6q/view?usp=sharing",
    category: "Software Development",
    imageUrl: "/certificates/springboot-cert.jpg"
  },
  {
    title: "Introduction to Data Science",
    issuer: "IBM",
    date: "2025",
    description: "Learned the fundamentals of data science, including data handling, analysis, and visualization.",
    skills: ["Data Analysis & Exploration", "Python for Data Science", "Data Visualization (Matplotlib, Seaborn, etc.)", "Statistical Concepts & Applications"],
    credentialId: "WL1QRQQSWAIW",
    verificationUrl: "https://coursera.org/verify/specialization/WL1QRQQSWAIW",
    category: "Data Science",
    imageUrl: "/certificates/ai-cert.jpg"
  },
  {
    title: "ESG Virtual Experience Program",
    issuer: "Forage",
    date: "2023",
    description: "Gained practical exposure to environmental, social, and governance (ESG) concepts in business decision-making.",
    skills: ["ESG Analysis & Reporting", "Sustainable Business Practices", "Stakeholder & Risk Assessment", "Corporate Social Responsibility (CSR)"],
    credentialId: "y3jB33D39gtijAZhw",
    verificationUrl: "https://drive.google.com/file/d/1EazHi-9DWDt-zHi93Vc0GbBerlr5U-TV/view?usp=sharing",
    category: "Virtual Experience",
    imageUrl: "/certificates/aws-cert.jpg"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "2025",
    description: "Learned how to manage, query, and analyze data using SQL and Python for data-driven decision-making.",
    skills: ["SQL Queries & Joins", "Database Design & Management", "Data Extraction & Analysis", "Python Integration with Databases"],
    credentialId: "FF58Z8PR2U4Q",
    verificationUrl: "https://coursera.org/verify/FF58Z8PR2U4Q",
    category: "Database Management",
    imageUrl: "/certificates/nextjs-cert.jpg"
  }
];

export default function Certificates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = ['All', ...new Set(certificatesData.map(cert => cert.category))];
  const filteredCertificates = selectedCategory === 'All' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" ref={sectionRef} className="py-24 bg-white px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        {[...Array(12)].map((_, i) => {
          const positions = [
            { left: 15, top: 25 }, { left: 85, top: 80 }, { left: 70, top: 20 },
            { left: 30, top: 70 }, { left: 60, top: 90 }, { left: 20, top: 50 },
            { left: 90, top: 35 }, { left: 45, top: 15 }, { left: 75, top: 65 },
            { left: 25, top: 85 }, { left: 55, top: 40 }, { left: 80, top: 15 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              className="absolute text-4xl"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
            >
              {['🎓', '📜', '🏆', '⭐'][i % 4]}
            </motion.div>
          );
        })}
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
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">Certifications</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Achievements</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Continuous learning through industry-recognized certifications and specialized training programs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
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
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.credentialId}
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 60,
                  rotateX: -15
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              whileHover={{
                y: -12,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  opacity: hoveredCard === index ? 1 : 0
                }}
              />
              
              {/* Certificate Image/Icon */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-6xl"
                  animate={{
                    scale: hoveredCard === index ? 1.2 : 1,
                    rotate: hoveredCard === index ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  🎓
                </motion.div>
                
                {/* Category badge */}
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700"
                >
                  {certificate.category}
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
                  animate={{
                    y: hoveredCard === index ? [-2, 2, -2] : [0],
                    rotate: hoveredCard === index ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0
                  }}
                >
                  <Award size={16} />
                </motion.div>
              </div>

              <div className="p-6 relative z-10">
                {/* Certificate Title */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300"
                  animate={{
                    x: hoveredCard === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {certificate.title}
                </motion.h3>

                {/* Issuer and Date */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 3 }}
                  >
                    <Building size={14} className="mr-2" />
                    <span className="text-sm font-medium">{certificate.issuer}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center text-gray-500"
                    whileHover={{ x: -3 }}
                  >
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm">{certificate.date}</span>
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {certificate.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.5 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                        color: "#ffffff"
                      }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors group/btn"
                    onClick={() => window.open(certificate.verificationUrl, '_blank')}
                  >
                    <Eye size={16} />
                    View Certificate
                    <motion.span
                      animate={{ x: hoveredCard === index ? 3 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={14} />
                    </motion.span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => window.open(certificate.verificationUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>

                {/* Credential ID */}
                <motion.div 
                  className="mt-4 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  <span className="text-xs text-gray-500">
                    Credential ID: <span className="font-mono">{certificate.credentialId}</span>
                  </span>
                </motion.div>
              </div>

              {/* Subtle border animation */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Committed to continuous learning and professional development
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🎯
            </motion.span>
            <span>Currently pursuing: The Complete Python Pro Bootcamp</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
