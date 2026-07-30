'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SocialLinks } from '@/components/ui/SocialLinks';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-ink px-5 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1120px] text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.14em] text-sand md:mb-7 md:text-sm">
          {t('contactSection.available')}
        </p>
        <h2 className="mx-auto mb-8 max-w-2xl font-serif text-[28px] font-medium leading-[1.3] text-ivory md:mb-10 md:text-[48px] md:leading-[1.25]">
          {t('contactSection.title')}
        </h2>
        <p className="mb-8 text-base text-sand md:mb-12 md:text-[17px]">
          {t('contactSection.rate')}
        </p>
        <a
          href="mailto:thomas.jankowski.dev@gmail.com"
          className="mb-8 inline-block rounded-sm bg-ivory px-8 py-4 text-[15px] font-medium text-ink transition-opacity hover:opacity-90 hover:text-ink hover:no-underline md:mb-10 md:px-10 md:py-[18px] md:text-[17px]"
        >
          thomas.jankowski.dev@gmail.com
        </a>
        <SocialLinks className="justify-center gap-8 text-ivory" iconClassName="h-5 w-5" />
      </div>
    </section>
  );
};

export default Contact;
