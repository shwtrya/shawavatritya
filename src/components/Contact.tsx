import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shawavatritya@gmail.com',
      link: 'mailto:shawavatritya@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '085187805786',
      link: 'https://wa.me/6285187805786'
    },
    {
      icon: MapPin,
      title: 'Domisili',
      value: 'Cileungsi, Kab. Bogor, Jawa Barat',
      link: 'https://maps.app.goo.gl/9UCcE1a2dkAqDWUq5'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get touch Me</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Punya proyek atau ingin berkolaborasi? Saya senang mendengar dari Anda!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 lg:px-0"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Mari diskusikan proyek Anda</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Saya selalu tertarik dengan peluang baru dan proyek yang menarik. 
                  Baik Anda membutuhkan bantuan dalam bidang teknologi, data entry, atau 
                  instalasi jaringan, saya siap membantu dengan kemampuan terbaik saya.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    {...(info.link.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 group-hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300">
                      <info.icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base text-gray-900 font-semibold">{info.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 lg:px-0"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 text-sm">Terima kasih! Pesan Anda telah berhasil dikirim.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 text-sm">Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.</p>
                </motion.div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="email.anda@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tentang apa ini?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 sm:py-3 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
