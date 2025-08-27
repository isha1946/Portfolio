// src/components/Contact.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit service to handle form submissions
      const response = await fetch("https://formsubmit.co/ajax/Rahulkumar201203@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New message from your portfolio website"
        })
      });
      
      const data = await response.json();
      
      if (data.success === "true") {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 text-white px-4 relative overflow-hidden">
      {/* Animated background elements */}
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => {
          // Predefined positions for consistent rendering
          const positions = [
            { left: 15, top: 25 }, { left: 85, top: 80 }, { left: 70, top: 20 },
            { left: 30, top: 70 }, { left: 60, top: 90 }, { left: 20, top: 50 },
            { left: 90, top: 35 }, { left: 45, top: 15 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              className="absolute text-xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
              }}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
            >
              {['</>', '{ }', '/*', '=>', '()'][i % 5]}
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
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">Get In Touch</span>
            <div className="w-2 h-2 rounded-full bg-blue-400 ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s <span className="text-blue-400">Connect</span></h2>
          
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8" />
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>Rahulkumar201203@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p>Bijnor, Uttar Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                <motion.a
                  href="https://www.linkedin.com/in/rahul734779/"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                
                <motion.a
                  href="https://github.com/R0ahulkd"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>

                <motion.a
                  href="https://facebook.com/R0ahulkd2" // Replace with your Facebook URL
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>

                <motion.a
                  href="https://instagram.com/r0ahulkd2" // Replace with your Instagram URL
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>

                <motion.a
                  href="https://youtube.com/@rahulteachspot" // Replace with your YouTube URL
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-800 text-green-100 rounded-lg"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-800 text-red-100 rounded-lg"
                >
                  ❌ There was an error sending your message. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}