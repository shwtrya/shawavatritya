import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya asisten AI Shawava. Saya bisa membantu Anda mengetahui lebih lanjut tentang proyek, pengalaman, dan keahlian saya. Ada yang ingin Anda tanyakan?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('proyek') || message.includes('project')) {
      return 'Saya telah mengerjakan beberapa proyek menarik seperti Smart Home berbasis Arduino Uno yang dapat memonitor suhu dan mengontrol lampu dari jarak jauh, serta instalasi jaringan ISP dengan tingkat uptime 99.8%. Proyek mana yang ingin Anda ketahui lebih detail?';
    }
    
    if (message.includes('arduino') || message.includes('iot')) {
      return 'Proyek Arduino saya adalah sistem Smart Home yang menggunakan Arduino Uno, sensor DHT22, dan ESP8266 untuk konektivitas WiFi. Sistem ini dapat memonitor suhu real-time dan mengontrol lampu melalui smartphone dengan response time kurang dari 2 detik. Sangat efisien untuk menghemat energi hingga 30%!';
    }
    
    if (message.includes('pengalaman') || message.includes('kerja') || message.includes('experience')) {
      return 'Saya memiliki pengalaman sebagai Operator Produksi di PT Serin Indonesia dan Data Entry di PT Wova Group Indonesia. Saya juga aktif dalam instalasi jaringan ISP. Pengalaman ini mengajarkan saya tentang ketelitian, disiplin, dan kerja tim yang solid.';
    }
    
    if (message.includes('skill') || message.includes('keahlian')) {
      return 'Keahlian saya meliputi: Arduino & IoT, Data Entry dengan akurasi 99.5%, Instalasi Jaringan, Microsoft Office, dan Production. Saya juga memiliki soft skills seperti komunikasi yang baik, kerja tim, dan problem solving yang sistematis.';
    }
    
    if (message.includes('kontak') || message.includes('contact')) {
      return 'Anda bisa menghubungi saya melalui email di shawavatritya@gmail.com atau WhatsApp di 085187805786. Saya juga aktif di LinkedIn dan GitHub. Jangan ragu untuk berkolaborasi!';
    }
    
    if (message.includes('sekolah') || message.includes('pendidikan')) {
      return 'Saya adalah pelajar aktif di SMK Negeri 1 Cileungsi jurusan Teknik Komputer dan Jaringan (2023-2026). Di sini saya mempelajari instalasi jaringan, pemrograman mikrokontroler, dan sistem komputer secara mendalam.';
    }
    
    return 'Terima kasih atas pertanyaannya! Saya siap membantu Anda mengetahui lebih lanjut tentang proyek, pengalaman, atau keahlian saya. Bisa Anda spesifikkan apa yang ingin Anda ketahui? Misalnya tentang proyek Arduino, pengalaman kerja, atau skill teknis saya.';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'ai' && (
                        <Bot size={16} className="mt-1 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User size={16} className="mt-1 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-1">
                      <Bot size={16} />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tanyakan tentang proyek saya..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;