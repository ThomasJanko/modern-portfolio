'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Positioning = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-line px-5 py-16 md:px-12 md:py-28">
      <div className="mx-auto w-[90%] md:w-[80%] gap-10 flex-col md:gap-16">
        <h2 className="font-serif text-2xl font-medium leading-tight md:text-[34px]">
          {t('positioning.title')}
        </h2>
        <div className="space-y-6 text-base leading-relaxed text-clay md:text-lg md:leading-[1.85]">
          <p>{t('positioning.paragraph1')}</p>
          <p>{t('positioning.paragraph2')}</p>
          <p>{t('positioning.paragraph3')}</p>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
