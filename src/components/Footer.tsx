// src/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4 px-4 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              fontSize: '2rem'
            }}
          >
            {['</>', '{ }', '=>'][i]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated copyright text */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-gray-400 text-sm">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} 
            </motion.span>
            
            <motion.span 
              className="text-blue-400 font-medium"
              whileHover={{ 
                scale: 1.05,
                color: '#60a5fa',
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Rahul Kumar
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              • Crafted with
            </motion.span>
            
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-red-500"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              and
            </motion.span>
            
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-400"
            >
              <Code size={14} />
            </motion.span>
            
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-yellow-400 ml-1"
            >
              <Sparkles size={12} />
            </motion.span>
          </div>

          {/* Subtle divider line with animation */}
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-3"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </footer>
  );
}