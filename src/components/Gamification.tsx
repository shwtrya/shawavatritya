import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Zap, Target, Crown } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

interface Skill {
  name: string;
  level: number;
  maxLevel: number;
  experience: number;
  maxExperience: number;
}

const Gamification = () => {
  const [userLevel, setUserLevel] = useState(1);
  const [totalXP, setTotalXP] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);

  const badges: Badge[] = [
    {
      id: 'explorer',
      title: 'Explorer',
      description: 'Menjelajahi semua section portfolio',
      icon: Target,
      unlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: 'project-master',
      title: 'Project Master',
      description: 'Melihat semua detail proyek',
      icon: Trophy,
      unlocked: true,
      progress: 2,
      maxProgress: 2
    },
    {
      id: 'tech-enthusiast',
      title: 'Tech Enthusiast',
      description: 'Mengeksplorasi skill map',
      icon: Zap,
      unlocked: false,
      progress: 1,
      maxProgress: 3
    },
    {
      id: 'networking-pro',
      title: 'Networking Pro',
      description: 'Menghubungi melalui semua channel',
      icon: Crown,
      unlocked: false,
      progress: 0,
      maxProgress: 3
    }
  ];

  const skills: Skill[] = [
    { name: 'Arduino & IoT', level: 8, maxLevel: 10, experience: 850, maxExperience: 1000 },
    { name: 'Data Entry', level: 9, maxLevel: 10, experience: 950, maxExperience: 1000 },
    { name: 'Network Installation', level: 7, maxLevel: 10, experience: 720, maxExperience: 1000 },
    { name: 'Microsoft Office', level: 8, maxLevel: 10, experience: 800, maxExperience: 1000 },
    { name: 'Problem Solving', level: 9, maxLevel: 10, experience: 900, maxExperience: 1000 },
    { name: 'Team Work', level: 10, maxLevel: 10, experience: 1000, maxExperience: 1000 }
  ];

  useEffect(() => {
    // Simulate XP gain over time
    const interval = setInterval(() => {
      setTotalXP(prev => {
        const newXP = prev + Math.floor(Math.random() * 10) + 5;
        const newLevel = Math.floor(newXP / 100) + 1;
        
        if (newLevel > userLevel) {
          setUserLevel(newLevel);
          setShowLevelUp(true);
          setTimeout(() => setShowLevelUp(false), 3000);
        }
        
        return newXP;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [userLevel]);

  const unlockBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges(prev => [...prev, badgeId]);
      setTotalXP(prev => prev + 50);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievement System</h2>
          <p className="text-lg text-gray-300">Unlock badges dan level up dengan mengeksplorasi portfolio!</p>
        </motion.div>

        {/* Level Up Animation */}
        <AnimatePresence>
          {showLevelUp && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -100 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg shadow-2xl"
            >
              <div className="text-center">
                <Crown size={48} className="mx-auto mb-2" />
                <h3 className="text-2xl font-bold">LEVEL UP!</h3>
                <p className="text-lg">Level {userLevel}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <Crown size={32} className="mx-auto mb-2 text-yellow-400" />
            <h3 className="text-2xl font-bold">Level {userLevel}</h3>
            <p className="text-gray-300">Current Level</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <Star size={32} className="mx-auto mb-2 text-blue-400" />
            <h3 className="text-2xl font-bold">{totalXP} XP</h3>
            <p className="text-gray-300">Total Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <Trophy size={32} className="mx-auto mb-2 text-green-400" />
            <h3 className="text-2xl font-bold">{unlockedBadges.length}/{badges.length}</h3>
            <p className="text-gray-300">Badges Unlocked</p>
          </motion.div>
        </div>

        {/* Badges */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Achievement Badges</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${
                  badge.unlocked || unlockedBadges.includes(badge.id)
                    ? 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/20'
                    : 'hover:bg-white/20'
                }`}
                onClick={() => !badge.unlocked && unlockBadge(badge.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <badge.icon 
                  size={48} 
                  className={`mx-auto mb-3 ${
                    badge.unlocked || unlockedBadges.includes(badge.id) 
                      ? 'text-yellow-400' 
                      : 'text-gray-500'
                  }`} 
                />
                <h4 className="font-bold mb-2">{badge.title}</h4>
                <p className="text-sm text-gray-300 mb-3">{badge.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">{badge.progress}/{badge.maxProgress}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Bars RPG Style */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Skill Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="text-sm text-yellow-400">Lv.{skill.level}</span>
                </div>
                
                {/* XP Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.experience / skill.maxExperience) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{skill.experience} XP</span>
                  <span>{skill.maxExperience} XP</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;