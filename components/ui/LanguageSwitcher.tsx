'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      aria-label="Changer de langue"
      className="relative flex items-center rounded-full border border-line bg-ivory p-[3px] text-sm"
    >
      <span
        className="absolute inset-y-[3px] w-[34px] rounded-full bg-accent transition-transform duration-200 ease-out"
        style={{ transform: language === 'fr' ? 'translateX(0px)' : 'translateX(34px)' }}
      />
      <span
        className={`relative z-10 w-[34px] py-1 text-center font-medium transition-colors ${
          language === 'fr' ? 'text-ivory' : 'text-stone'
        }`}
      >
        FR
      </span>
      <span
        className={`relative z-10 w-[34px] py-1 text-center font-medium transition-colors ${
          language === 'en' ? 'text-ivory' : 'text-stone'
        }`}
      >
        EN
      </span>
    </button>
  );
}
