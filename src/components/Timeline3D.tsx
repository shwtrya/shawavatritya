import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  position: [number, number, number];
  color: string;
}

const TimelineNode: React.FC<{ item: TimelineItem; isActive: boolean }> = ({ item, isActive }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(isActive ? 1.2 : 1);
    }
  });

  return (
    <group position={item.position}>
      <Sphere ref={meshRef} args={[0.3, 16, 16]}>
        <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.2} />
      </Sphere>
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {item.title}
      </Text>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="#888"
        anchorX="center"
        anchorY="middle"
      >
        {item.date}
      </Text>
    </group>
  );
};

const Timeline3D = () => {
  const timelineData: TimelineItem[] = [
    {
      id: '1',
      title: 'SMK Start',
      date: '2023',
      description: 'Memulai perjalanan di SMK Negeri 1 Cileungsi',
      position: [-4, 0, 0],
      color: '#3B82F6'
    },
    {
      id: '2',
      title: 'Data Entry',
      date: '2023',
      description: 'Freelance Data Entry di PT Wova Group',
      position: [-2, 1, 0],
      color: '#10B981'
    },
    {
      id: '3',
      title: 'Arduino Project',
      date: '2024',
      description: 'Smart Home dengan Arduino Uno',
      position: [0, -1, 0],
      color: '#F59E0B'
    },
    {
      id: '4',
      title: 'IoT System',
      date: '2024',
      description: 'Sistem IoT untuk monitoring rumah',
      position: [2, 0.5, 0],
      color: '#EF4444'
    },
    {
      id: '5',
      title: 'Network Install',
      date: '2024',
      description: 'Instalasi jaringan ISP',
      position: [4, -0.5, 0],
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Interactive Timeline 3D</h2>
          <p className="text-lg text-gray-300">Jelajahi perjalanan saya dalam ruang 3D</p>
        </motion.div>

        <div className="h-96 w-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enablePan enableZoom enableRotate />
            
            {timelineData.map((item, index) => (
              <TimelineNode key={item.id} item={item} isActive={index === 2} />
            ))}
            
            {/* Connection lines */}
            {timelineData.map((item, index) => {
              if (index < timelineData.length - 1) {
                const nextItem = timelineData[index + 1];
                return (
                  <mesh
                    key={`line-${index}`}
                    position={[
                      (item.position[0] + nextItem.position[0]) / 2,
                      (item.position[1] + nextItem.position[1]) / 2,
                      (item.position[2] + nextItem.position[2]) / 2
                    ]}
                  >
                    <boxGeometry
                      args={[
                        Math.abs(nextItem.position[0] - item.position[0]) || 0.1,
                        0.05,
                        0.05
                      ]}
                    />
                    <meshStandardMaterial color="#444" />
                  </mesh>
                );
              }
              return null;
            })}
          </Canvas>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Drag untuk memutar • Scroll untuk zoom • Klik dan drag untuk menggeser
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline3D;