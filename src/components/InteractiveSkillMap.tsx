import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Network, Cpu, Users, Zap, Target, Award } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  level: number;
  children?: SkillNode[];
  description: string;
  projects: string[];
}

const InteractiveSkillMap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['root']);

  const skillTree: SkillNode = {
    id: 'root',
    name: 'Shawava Tritya',
    icon: Target,
    level: 10,
    description: 'Pelajar SMK Teknik Komputer dan Jaringan',
    projects: ['Smart Home', 'Network Installation', 'Data Processing'],
    children: [
      {
        id: 'technical',
        name: 'Technical Skills',
        icon: Code,
        level: 9,
        description: 'Kemampuan teknis dalam bidang teknologi',
        projects: ['Arduino Projects', 'IoT Systems'],
        children: [
          {
            id: 'arduino',
            name: 'Arduino & IoT',
            icon: Cpu,
            level: 8,
            description: 'Pengembangan sistem IoT menggunakan Arduino',
            projects: ['Smart Home System', 'Temperature Monitoring', 'Remote Control']
          },
          {
            id: 'networking',
            name: 'Network Installation',
            icon: Network,
            level: 7,
            description: 'Instalasi dan konfigurasi jaringan komputer',
            projects: ['ISP Installation', 'Router Configuration', 'Network Troubleshooting']
          },
          {
            id: 'data',
            name: 'Data Processing',
            icon: Database,
            level: 9,
            description: 'Pengolahan dan analisis data dengan akurasi tinggi',
            projects: ['Data Entry Systems', 'Quality Control', 'Report Generation']
          }
        ]
      },
      {
        id: 'soft-skills',
        name: 'Soft Skills',
        icon: Users,
        level: 9,
        description: 'Kemampuan interpersonal dan profesional',
        projects: ['Team Collaboration', 'Client Communication'],
        children: [
          {
            id: 'teamwork',
            name: 'Team Work',
            icon: Users,
            level: 10,
            description: 'Kemampuan bekerja dalam tim dengan efektif',
            projects: ['Production Team', 'Project Collaboration']
          },
          {
            id: 'problem-solving',
            name: 'Problem Solving',
            icon: Zap,
            level: 9,
            description: 'Analisis dan penyelesaian masalah sistematis',
            projects: ['Network Troubleshooting', 'System Optimization']
          },
          {
            id: 'communication',
            name: 'Communication',
            icon: Award,
            level: 8,
            description: 'Komunikasi efektif dengan berbagai stakeholder',
            projects: ['Client Relations', 'Technical Documentation']
          }
        ]
      }
    ]
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => 
      prev.includes(nodeId) 
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const renderNode = (node: SkillNode, level: number = 0, parentPosition: { x: number; y: number } = { x: 0, y: 0 }) => {
    const isExpanded = expandedNodes.includes(node.id);
    const isSelected = selectedNode === node.id;
    const hasChildren = node.children && node.children.length > 0;

    const nodePosition = {
      x: parentPosition.x + (level * 200),
      y: parentPosition.y + (level * 100)
    };

    return (
      <div key={node.id} className="relative">
        {/* Connection Line */}
        {level > 0 && (
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: '200px',
              height: '100px',
              transform: 'translate(-200px, -50px)'
            }}
          >
            <path
              d="M 200 50 Q 100 50 0 50"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </svg>
        )}

        {/* Node */}
        <motion.div
          className={`relative cursor-pointer ${level === 0 ? 'mx-auto' : ''}`}
          style={{
            marginLeft: level > 0 ? '200px' : '0',
            marginTop: level > 0 ? '50px' : '0'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelectedNode(node.id);
            if (hasChildren) toggleNode(node.id);
          }}
        >
          <div
            className={`w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
              isSelected
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl'
            } border-4 ${
              level === 0 
                ? 'border-yellow-400' 
                : level === 1 
                ? 'border-blue-400' 
                : 'border-green-400'
            }`}
          >
            <node.icon size={24} className="mb-1" />
            <span className="text-xs font-semibold text-center px-2">{node.name}</span>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                    i < Math.floor(node.level / 2) 
                      ? 'bg-yellow-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Expand/Collapse Indicator */}
          {hasChildren && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs"
              >
                ▼
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Children */}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8"
            >
              <div className="flex flex-wrap justify-center gap-8">
                {node.children!.map((child, index) => (
                  <div key={child.id} style={{ marginTop: index * 20 }}>
                    {renderNode(child, level + 1, nodePosition)}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const getSelectedNodeData = (node: SkillNode): SkillNode | null => {
    if (node.id === selectedNode) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = getSelectedNodeData(child);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedNodeData = selectedNode ? getSelectedNodeData(skillTree) : null;

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Interactive Skill Map</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Klik pada node untuk menjelajahi keahlian dan pengalaman saya
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Skill Tree */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-max p-8">
              {renderNode(skillTree)}
            </div>
          </div>

          {/* Selected Node Details */}
          <div className="lg:w-80">
            <AnimatePresence mode="wait">
              {selectedNodeData && (
                <motion.div
                  key={selectedNodeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-8"
                >
                  <div className="flex items-center mb-4">
                    <selectedNodeData.icon size={32} className="text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedNodeData.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Level</span>
                      <span className="text-sm font-bold text-blue-600">{selectedNodeData.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${selectedNodeData.level * 10}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {selectedNodeData.description}
                  </p>

                  {selectedNodeData.projects.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Related Projects:</h4>
                      <div className="space-y-2">
                        {selectedNodeData.projects.map((project, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {!selectedNodeData && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Target size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Klik pada node di skill map untuk melihat detail
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillMap;