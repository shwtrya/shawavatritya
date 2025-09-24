import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Timeline3D from './components/Timeline3D';
import AIAssistant from './components/AIAssistant';
import VirtualGallery from './components/VirtualGallery';
import Gamification from './components/Gamification';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DynamicTheme from './components/DynamicTheme';
import InteractiveSkillMap from './components/InteractiveSkillMap';
import CustomLoadingScreen from './components/CustomLoadingScreen';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <CustomLoadingScreen onLoadingComplete={handleLoadingComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <DynamicTheme />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <AIAssistant />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <About />
      <Experience />
      <Timeline3D />
      <VirtualGallery />
      <BeforeAfterSlider />
      <Gamification />
      <InteractiveSkillMap />
      <Projects />
      <Education />
      <Contact />
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="sr-only">
        <h1>Tentang Shawava Tritya</h1>
      </div>
      <About />
    </motion.div>
  );
}

function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="sr-only">
        <h1>Pengalaman Kerja Shawava Tritya</h1>
      </div>
      <Experience />
    </motion.div>
  );
}

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="sr-only">
        <h1>Proyek Unggulan Shawava Tritya</h1>
      </div>
      <Projects />
    </motion.div>
  );
}

function EducationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="sr-only">
        <h1>Pendidikan dan Keahlian Shawava Tritya</h1>
      </div>
      <Education />
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <div className="sr-only">
        <h1>Kontak Shawava Tritya</h1>
      </div>
      <Contact />
    </motion.div>
  );
}

export default App;
