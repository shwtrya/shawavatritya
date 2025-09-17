import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.8/4.0',
      description: 'Specialized in Software Engineering and Machine Learning. Completed thesis on "Optimizing Web Application Performance using Modern JavaScript Frameworks".',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Graduate Teaching Assistant for Web Development course',
        'Published research paper on React performance optimization'
      ],
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Database Systems', 'Software Architecture', 'Human-Computer Interaction']
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2012 - 2016',
      gpa: '3.7/4.0',
      description: 'Strong foundation in computer science fundamentals with focus on web development and software engineering principles.',
      achievements: [
        'Magna Cum Laude graduate',
        'President of Computer Science Student Association',
        'Winner of Annual Hackathon 2015',
        'Volunteer tutor for introductory programming courses'
      ],
      coursework: ['Data Structures', 'Computer Networks', 'Operating Systems', 'Web Development', 'Software Engineering']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-2022-045'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-RDC-2021-789'
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
            My academic background and professional certifications
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
            Academic Background
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
            Professional Certifications
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
                <p className="text-gray-600 text-sm mb-2">Issued: {cert.date}</p>
                <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;