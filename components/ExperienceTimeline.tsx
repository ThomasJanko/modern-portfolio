'use client';
import React from 'react';
import { experiences } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const typeLabelKeys: Record<string, string> = {
  stage: 'experiencesSection.filters.stage',
  alternance: 'experiencesSection.filters.alternance',
  cdi: 'experiencesSection.filters.cdi',
  formation: 'experiencesSection.filters.formation',
};

const ExperienceTimeline = () => {
  const { t, language } = useLanguage();

  const items = experiences.map((experience) => ({
    label: t(typeLabelKeys[experience.type] ?? 'experiencesSection.filters.formation'),
    title: language === 'en' && experience.titleEn ? experience.titleEn : experience.title,
    description: (language === 'en' && experience.pointsEn ? experience.pointsEn : experience.points).join(' '),
    accent: experience.type === 'formation',
  }));

  items.push({
    label: t('experiencesSection.today.label'),
    title: t('experiencesSection.today.title'),
    description: t('experiencesSection.today.description'),
    accent: false,
  });

  return (
    <section id="experience" className="border-t border-line px-5 py-16 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-12 font-serif text-3xl font-medium md:mb-20 md:text-[42px]">
          {t('experiencesSection.title')}
        </h2>

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={`${item.label}-${item.title}`}
                className="grid grid-cols-[20px_1fr] gap-x-4 md:grid-cols-[200px_24px_1fr] md:gap-x-8"
              >
                <div className={`text-[13px] md:pt-0.5 md:text-[15px] ${item.accent ? 'font-medium text-accent' : 'text-stone'} hidden md:block`}>
                  {item.label}
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`h-2.5 w-2.5 shrink-0 rounded-full md:h-3 md:w-3 ${
                      isLast
                        ? 'border-2 border-accent bg-ivory'
                        : item.accent
                          ? 'bg-accent'
                          : 'bg-sand'
                    }`}
                  />
                  {!isLast && <div className="mt-1.5 w-px flex-1 bg-line" />}
                </div>
                <div className={isLast ? 'pb-0' : 'pb-8 md:pb-14'}>
                  <p className={`mb-2 text-[13px] md:hidden ${item.accent ? 'font-medium text-accent' : 'text-stone'}`}>
                    {item.label}
                  </p>
                  <p className="mb-2 text-[17px] font-medium md:mb-2.5 md:text-xl">{item.title}</p>
                  <p className="text-[15px] leading-relaxed text-clay md:text-base md:leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
