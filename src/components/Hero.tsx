import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, User, Briefcase, FolderOpen, GraduationCap, MessageCircle } from 'lucide-react';

const Hero = () => {
  const navigationFlow = [
    { path: '/about', label: 'About Me', icon: User, description: 'Learn about my background' },
    { path: '/experience', label: 'Experience', icon: Briefcase, description: 'My professional journey' },
    { path: '/projects', label: 'Projects', icon: FolderOpen, description: 'See my work' },
    { path: '/education', label: 'Education', icon: GraduationCap, description: 'Academic background' },
    { path: '/contact', label: 'Contact', icon: MessageCircle, description: 'Get in touch' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Shawava Tritya</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Welcome to my portfolio! I'm a passionate <span className="font-semibold text-gray-800">SMK Student – Computer and Network Engineering</span> | Project Developer & Data Enthusiast.
            </p>
          </motion.div>

          {/* Navigation Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6 px-4">Explore my journey:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
              {navigationFlow.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="group block p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 h-full"
                    aria-label={`Navigate to ${item.label}: ${item.description}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <item.icon size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
                        {item.description}
                      </p>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 sm:w-4 sm:h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 text-center"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
          >
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md text-gray-600 hover:text-gray-900 transition-all duration-300"
              aria-label="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md text-gray-600 hover:text-blue-600 transition-all duration-300"
              aria-label="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </motion.a>
            <motion.a
              href="mailto:john.doe@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md text-gray-600 hover:text-emerald-600 transition-all duration-300"
              aria-label="Send email"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;