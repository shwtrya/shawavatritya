import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterProject {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeTitle: string;
  afterTitle: string;
  improvements: string[];
}

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: BeforeAfterProject[] = [
    {
      id: '1',
      title: 'Smart Home System Upgrade',
      description: 'Transformasi dari sistem manual ke otomatis berbasis IoT',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      afterImage: 'https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      beforeTitle: 'Manual Control',
      afterTitle: 'Smart IoT System',
      improvements: [
        'Remote monitoring via smartphone',
        'Automated temperature control',
        '30% energy savings',
        'Real-time alerts'
      ]
    },
    {
      id: '2',
      title: 'Network Infrastructure Optimization',
      description: 'Peningkatan dari jaringan basic ke enterprise-grade',
      beforeImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      afterImage: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      beforeTitle: 'Basic Setup',
      afterTitle: 'Enterprise Network',
      improvements: [
        '99.8% uptime achievement',
        'Scalable architecture',
        'Advanced security protocols',
        'Centralized management'
      ]
    },
    {
      id: '3',
      title: 'Data Processing Workflow',
      description: 'Evolusi dari manual entry ke automated system',
      beforeImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      afterImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      beforeTitle: 'Manual Process',
      afterTitle: 'Automated System',
      improvements: [
        '99.5% accuracy rate',
        '500+ entries per day',
        'Error reduction by 80%',
        'Real-time validation'
      ]
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Before vs After</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Lihat transformasi proyek-proyek saya dari awal hingga hasil akhir
          </p>
        </motion.div>

        {/* Project Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Project {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div
              ref={containerRef}
              className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <img
                  src={currentProject.beforeImage}
                  alt={`Before: ${currentProject.beforeTitle}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentProject.beforeTitle}
                </div>
              </div>

              {/* After Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentProject.afterImage}
                  alt={`After: ${currentProject.afterTitle}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentProject.afterTitle}
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
                  <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Drag slider atau klik dan geser untuk melihat perbandingan
              </p>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {currentProject.description}
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Improvements:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentProject.improvements.map((improvement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{improvement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;