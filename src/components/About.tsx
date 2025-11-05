// src/components/About.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image'; // ✅ Added

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white px-4 relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #000000 1px, transparent 1px),
                           linear-gradient(-45deg, #000000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
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
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">About Me</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My <span className="text-blue-600">Journey</span></h2>
          
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">

              {/* ✅ Replaced emoji with your photo using Next/Image */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="Isha Singh"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <div className="text-2xl">🚀</div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <div className="text-2xl">💡</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Data Science Enthusiast & AI Learner
            </motion.h3>

            <motion.div 
              className="space-y-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p>
                I&apos;m a passionate MCA candidate at Lovely Professional University with a strong foundation in 
                Computer Science, Mathematics, and Data Analytics. My focus is on extracting insights from data, 
                solving real-world problems, and building intelligent data-driven solutions.
              </p>
              
              <p>
                I thrive on working with data — cleaning, visualizing, analyzing, and creating predictive models. 
                Whether it&apos;s machine learning, statistical analysis, or AI-based applications, I enjoy turning raw 
                data into meaningful outcomes that create impact.
              </p>

              <p>
                When I&apos;m not learning or experimenting with datasets, you can find me diving into new ML tools, 
                exploring AI advancements, or continuously sharpening my analytical skills.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", delay: 1.2 }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-600">Data Projects Completed</div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", delay: 1.4 }}
                >
                  4+
                </motion.div>
                <div className="text-sm text-gray-600">ML & Data Tools Mastered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
