import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of multiple web applications serving 100K+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored 5 junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: [
        'Built and maintained e-commerce platform from scratch',
        'Developed RESTful APIs handling 10K+ requests per day',
        'Collaborated with design team to implement responsive UI/UX',
        'Integrated third-party payment systems and analytics tools'
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'Google Analytics']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: [
        'Created responsive websites for 20+ clients across various industries',
        'Optimized website loading speeds by 50% on average',
        'Worked closely with designers to pixel-perfect implementations',
        'Maintained and updated existing client websites'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'WordPress']
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDev Studio',
      location: 'Los Angeles, CA',
      period: '2018 - 2019',
      description: [
        'Assisted in developing custom web applications',
        'Fixed bugs and implemented new features in existing projects',
        'Learned modern development practices and version control',
        'Participated in daily standups and sprint planning'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <Building size={16} />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;