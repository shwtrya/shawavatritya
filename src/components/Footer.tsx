import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              John<span className="text-blue-400">Doe</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-friendly applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="/education" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Education
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex md:justify-end space-x-4">
              <motion.a
                href="https://github.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:john.doe@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} John Doe. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;