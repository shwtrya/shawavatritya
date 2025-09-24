import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomLoadingScreenProps {
  onLoadingComplete: () => void;
}

const CustomLoadingScreen: React.FC<CustomLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showName, setShowName] = useState(false);

  const loadingPhases = [
    'Initializing portfolio...',
    'Loading projects...',
    'Preparing experiences...',
    'Setting up skills...',
    'Almost ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * loadingPhases.length);
        setCurrentPhase(Math.min(phaseIndex, loadingPhases.length - 1));
        
        // Show name animation when 50% complete
        if (newProgress >= 50 && !showName) {
          setShowName(true);
        }
        
        // Complete loading when 100%
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete, showName]);

  const nameLetters = 'SHAWAVA TRITYA'.split('');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          {/* Name Animation */}
          <div className="mb-12">
            <AnimatePresence>
              {showName && (
                <div className="flex justify-center space-x-2 mb-4">
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 100
                      }}
                      className="text-4xl md:text-6xl font-bold text-white inline-block"
                      style={{
                        textShadow: '0 0 20px rgba(255,255,255,0.5)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </div>
              )}
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showName ? 1 : 0 }}
              transition={{ delay: 1.5 }}
              className="text-xl text-blue-200 font-medium"
            >
              SMK Student • Tech Enthusiast • Problem Solver
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto mb-8">
            <div className="relative">
              {/* Background Bar */}
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                className="absolute -top-8 text-white font-bold text-lg"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                animate={{ left: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </div>

          {/* Loading Phase Text */}
          <motion.p
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-blue-200 text-lg font-medium mb-8"
          >
            {loadingPhases[currentPhase]}
          </motion.p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Skills Preview */}
          {progress > 70 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <div className="flex justify-center space-x-4 text-sm text-blue-200">
                {['Arduino', 'IoT', 'Networking', 'Data Entry'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-2 border-white/20 rounded-full"
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 border-2 border-white/20 rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomLoadingScreen;