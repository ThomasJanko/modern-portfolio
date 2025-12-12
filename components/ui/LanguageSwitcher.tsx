'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="fixed top-4 right-4 z-[5001]">
      <motion.button
        onClick={toggleLanguage}
        className="relative flex items-center bg-black-100 border border-white/[0.2] rounded-full p-1 shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center relative">
          <span className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
            language === 'fr' ? 'text-white' : 'text-white/50'
          }`}>
            FR
          </span>
          <span className="text-white/30">|</span>
          <span className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
            language === 'en' ? 'text-white' : 'text-white/50'
          }`}>
            EN
          </span>
          <motion.div
            className="absolute top-0 bottom-0  rounded-full"
            initial={false}
            animate={{
              left: language === 'fr' ? '0%' : '50%',
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
            style={{
              width: 'calc(50% - 4px)',
              margin: '2px',
            }}
          />
        </div>
      </motion.button>
    </div>
  );
}

