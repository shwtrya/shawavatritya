import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DynamicTheme = () => {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'day' | 'evening' | 'night'>('day');
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setTimeOfDay('morning');
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay('day');
      } else if (hour >= 17 && hour < 20) {
        setTimeOfDay('evening');
      } else {
        setTimeOfDay('night');
      }
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeOfDay === 'night') {
      // Generate random stars for night theme
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1
      }));
      setStars(newStars);
    }
  }, [timeOfDay]);

  const getThemeStyles = () => {
    switch (timeOfDay) {
      case 'morning':
        return {
          background: 'linear-gradient(135deg, #FFE4B5 0%, #FFA07A 50%, #87CEEB 100%)',
          overlay: 'rgba(255, 228, 181, 0.1)'
        };
      case 'day':
        return {
          background: 'linear-gradient(135deg, #87CEEB 0%, #98FB98 50%, #F0E68C 100%)',
          overlay: 'rgba(135, 206, 235, 0.1)'
        };
      case 'evening':
        return {
          background: 'linear-gradient(135deg, #FF6347 0%, #FF4500 50%, #8B008B 100%)',
          overlay: 'rgba(255, 99, 71, 0.1)'
        };
      case 'night':
        return {
          background: 'linear-gradient(135deg, #191970 0%, #000080 50%, #000000 100%)',
          overlay: 'rgba(25, 25, 112, 0.2)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #87CEEB 0%, #98FB98 50%, #F0E68C 100%)',
          overlay: 'rgba(135, 206, 235, 0.1)'
        };
    }
  };

  const getTimeMessage = () => {
    switch (timeOfDay) {
      case 'morning':
        return '🌅 Selamat pagi! Semoga hari Anda penuh inspirasi';
      case 'day':
        return '☀️ Selamat siang! Waktunya produktif dan berkarya';
      case 'evening':
        return '🌆 Selamat sore! Nikmati senja yang indah';
      case 'night':
        return '🌙 Selamat malam! Waktu yang tepat untuk refleksi';
      default:
        return '👋 Selamat datang di portfolio saya!';
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: themeStyles.background }}
      />
      
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{ backgroundColor: themeStyles.overlay }}
      />

      {/* Stars for night theme */}
      {timeOfDay === 'night' && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating particles for morning */}
      {timeOfDay === 'morning' && (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      )}

      {/* Time-based message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 pointer-events-auto"
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white text-sm font-medium shadow-lg">
          {getTimeMessage()}
        </div>
      </motion.div>

      {/* Weather-like effects */}
      {timeOfDay === 'evening' && (
        <div className="absolute inset-0">
          {/* Sunset rays */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-yellow-300 to-transparent opacity-20"
                style={{
                  height: '200px',
                  transformOrigin: 'bottom',
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTheme;