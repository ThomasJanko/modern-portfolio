'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, reactNativeProjects, featuredProjectKeys } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedProjects = () => {
  const { t } = useLanguage();

  const featured = featuredProjectKeys
    .map((key) => projects.find((project) => project.key === key))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  const totalProjects = projects.length + reactNativeProjects.length;

  return (
    <section id="projets" className="border-t border-line px-5 py-16 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-12 flex items-baseline justify-between md:mb-20">
          <h2 className="font-serif text-3xl font-medium md:text-[42px]">
            {t('projectsSection.title')}
          </h2>
          <span className="hidden text-sm text-stone sm:block">
            {t('projectsSection.count')}
          </span>
        </div>

        <div className="flex flex-col gap-16 md:gap-0">
          {featured.map((project, index) => {
            const key = project.key;
            const reversed = index % 2 === 1;
            const demoOrLink = project.demo || project.link;
            const highlight = t(`projectsData.${key}.highlight`);
            const hasHighlight = highlight !== `projectsData.${key}.highlight`;

            return (
              <div
                key={project.id}
                className={`grid gap-8 md:grid-cols-2 md:items-center md:gap-16 ${
                  index < featured.length - 1 ? 'md:mb-[110px]' : ''
                }`}
              >
                <div className={reversed ? 'md:order-2' : ''}>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(28,26,23,0.25)]">
                    <Image
                      src={project.img}
                      alt={t(`projectsData.${key}.title`)}
                      width={880}
                      height={660}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 440px"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className={reversed ? 'md:order-1' : ''}>
                  <p className="mb-3 text-[13px] uppercase tracking-[0.1em] text-stone md:mb-4">
                    {t(`projectsData.${key}.tag`)}
                  </p>
                  <h3 className="mb-3 font-serif text-2xl font-medium md:mb-4 md:text-[30px]">
                    {t(`projectsData.${key}.title`)}
                  </h3>
                  <p className="mb-5 text-[15px] leading-relaxed text-clay md:mb-6 md:text-base">
                    {t(`projectsData.${key}.description`)}
                  </p>

                  <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
                    {project.iconLists.map((tech) => (
                      <a
                        key={tech.name}
                        href={tech.link}
                        target="_blank"
                        rel="noreferrer"
                        title={tech.name}
                        className="opacity-70 transition-opacity hover:opacity-100"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px] object-contain"
                        />
                      </a>
                    ))}
                  </div>

                  {hasHighlight && (
                    <p className="mb-6 text-[15px] font-medium text-accent">{highlight}</p>
                  )}

                  {demoOrLink && (
                    <a
                      href={demoOrLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[15px] font-medium"
                    >
                      {t('projectsSection.viewProject')} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center md:mt-24">
          <Link
            href="/projets"
            className="border-b border-accent pb-[2px] text-base font-medium hover:no-underline"
          >
            {t('projectsSection.viewAll')} ({totalProjects}) →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
