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
              Shawava<span className="text-blue-400">Tritya</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Pelajar SMK Teknik Komputer dan Jaringan yang passionate dalam bidang teknologi, 
              Arduino, IoT, dan pengolahan data dengan fokus pada kualitas dan ketelitian.
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
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white">
                Tentang
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white">
                Pengalaman
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white">
                Proyek
              </a>
              <a href="/education" className="block text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white">
                Pendidikan
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white">
                Kontak
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
            <h4 className="text-lg font-semibold mb-4">Terhubung Dengan Saya</h4>
            <div className="flex md:justify-end space-x-4">
              <motion.a
                href="https://github.com/CyXd404"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shawava-tritya"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:text-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:shawavatritya@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 focus:outline-none focus:text-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Send email"
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
            <span>© {currentYear} Shawava Tritya. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>dan banyak kopi</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;