'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-[#34302A] bg-ink px-5 py-8 text-sm text-[#7A7367] md:flex-row md:px-12">
      <p>{t('footer.copyright')}</p>
      <p>{t('footer.role')}</p>
    </footer>
  );
};

export default Footer;
