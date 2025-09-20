import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Teknik Komputer dan Jaringan',
      school: 'SMK Negeri 1 Cileungsi',
      location: 'Cileungsi, Bogor',
      period: '2023 - 2026',
      gpa: 'Pelajar Aktif',
      description: 'Mempelajari instalasi jaringan, konfigurasi perangkat, pemrograman mikrokontroler, dan sistem komputer. Fokus pada pengembangan kemampuan praktis di bidang teknologi informasi.',
      achievements: [
        'Aktif dalam praktikum Arduino dan IoT',
        'Pengalaman magang di bidang produksi',
        'Freelance data entry dengan tingkat akurasi tinggi'
      ],
      coursework: ['Instalasi Jaringan', 'Arduino Programming', 'Network Configuration', 'Computer Systems', 'Data Management']
    }
  ];

  const certifications = [
    {
      name: 'Hard Skills',
      issuer: 'Data Entry · Produksi · Arduino & IoT · Instalasi Jaringan',
      date: '',
      credentialId: ''
    },
    {
      name: 'Soft Skills',
      issuer: 'Teliti · Disiplin · Komunikasi · Kerja Tim',
      date: '',
      credentialId: ''
    },
    {
      name: 'Software & Tools',
      issuer: 'Microsoft Office (Word, Excel, PowerPoint)',
      date: '',
      credentialId: ''
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Latar belakang pendidikan dan keahlian saya
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Pendidikan
          </motion.h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold text-blue-600 mb-2">{edu.school}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award size={16} />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{edu.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Skills & Keahlian
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                {cert.date && <p className="text-gray-600 text-sm mb-2">Issued: {cert.date}</p>}
                {cert.credentialId && <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;