'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SocialLinks } from '@/components/ui/SocialLinks';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-line bg-footer px-5 py-8 text-sm text-stone md:flex-row md:px-12">
      <p>{t('footer.copyright')}</p>
      <SocialLinks className="gap-5 text-stone" iconClassName="h-[17px] w-[17px]" />
      <p>{t('footer.role')}</p>
    </footer>
  );
};

export default Footer;
