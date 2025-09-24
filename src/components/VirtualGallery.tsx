import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  position: [number, number, number];
}

const GalleryFrame: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = item.position[1] + Math.sin(state.clock.elapsedTime + item.position[0]) * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      position={item.position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Frame */}
      <Box args={[2.2, 1.7, 0.1]} position={[0, 0, -0.05]}>
        <meshStandardMaterial color={hovered ? '#FFD700' : '#8B4513'} />
      </Box>
      
      {/* Image placeholder */}
      <Plane args={[2, 1.5]}>
        <meshStandardMaterial color={hovered ? '#E0E0E0' : '#F0F0F0'} />
      </Plane>
      
      {/* Title */}
      <Text
        position={[0, -1.2, 0.1]}
        fontSize={0.15}
        color={hovered ? '#FFD700' : '#333'}
        anchorX="center"
        anchorY="middle"
      >
        {item.title}
      </Text>
    </group>
  );
};

const VirtualGallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Smart Home Arduino',
      image: 'arduino-project.jpg',
      description: 'Sistem IoT untuk monitoring dan kontrol rumah pintar',
      position: [-3, 0, 0]
    },
    {
      id: '2',
      title: 'Network Installation',
      image: 'network-project.jpg',
      description: 'Instalasi jaringan ISP dengan uptime 99.8%',
      position: [0, 0, 0]
    },
    {
      id: '3',
      title: 'Data Entry System',
      image: 'data-project.jpg',
      description: 'Sistem pengolahan data dengan akurasi tinggi',
      position: [3, 0, 0]
    },
    {
      id: '4',
      title: 'Production Line',
      image: 'production-project.jpg',
      description: 'Optimasi proses produksi dengan quality control',
      position: [-1.5, 2, -2]
    },
    {
      id: '5',
      title: 'IoT Monitoring',
      image: 'iot-project.jpg',
      description: 'Sistem monitoring real-time berbasis IoT',
      position: [1.5, 2, -2]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Virtual Gallery</h2>
          <p className="text-lg text-gray-300">Jelajahi portofolio saya dalam ruang virtual 3D</p>
        </motion.div>

        <div className="h-96 w-full mb-8">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <OrbitControls 
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true}
              maxDistance={15}
              minDistance={3}
            />
            
            {/* Gallery Floor */}
            <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
              <meshStandardMaterial color="#1a1a1a" />
            </Plane>
            
            {/* Gallery Walls */}
            <Plane args={[20, 10]} position={[0, 2, -5]}>
              <meshStandardMaterial color="#2a2a2a" />
            </Plane>
            
            {galleryItems.map((item) => (
              <GalleryFrame
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </Canvas>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400">Klik pada frame untuk melihat detail • Drag untuk melihat sekeliling • Scroll untuk zoom</p>
        </div>

        {/* Selected Item Details */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-gray-300 mb-4">{selectedItem.description}</p>
            <button
              onClick={() => setSelectedItem(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Tutup Detail
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VirtualGallery;