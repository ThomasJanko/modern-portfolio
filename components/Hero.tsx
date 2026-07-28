'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 pb-16 pt-14 md:px-12 md:pb-32 md:pt-24 lg:pb-36 lg:pt-32">
      <div className="mx-auto max-w-[1120px]">
        <p className="mb-6 text-xs uppercase tracking-[0.14em] text-stone md:mb-7 md:text-sm">
          {t('hero.eyebrow')}
        </p>
        <h1 className="mb-6 max-w-4xl font-serif text-[34px] font-medium leading-[1.15] tracking-tight md:mb-10 md:text-[58px] lg:text-[68px] lg:leading-[1.08]">
          {t('hero.titleStart')}
          <em className="italic text-accent">{t('hero.titleAccent')}</em>
          {t('hero.titleEnd')}
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-clay md:mb-12 md:text-lg md:leading-[1.7]">
          {t('hero.description')}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:thomas.jankowski.dev@gmail.com"
            className="rounded-sm bg-accent px-7 py-4 text-center text-[15px] font-medium text-ivory transition-colors hover:bg-accent-dark hover:text-ivory hover:no-underline md:px-8 md:text-base"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#projets"
            className="rounded-sm border border-sand px-7 py-4 text-center text-[15px] text-ink transition-colors hover:bg-ink hover:text-ivory hover:no-underline md:px-8 md:text-base"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
