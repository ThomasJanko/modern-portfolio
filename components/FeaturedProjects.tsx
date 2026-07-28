'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, reactNativeProjects, featuredProjectKeys } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

type LightboxImage = {
  src: (typeof projects)[number]['img'];
  alt: string;
};

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

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
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: project.img,
                        alt: t(`projectsData.${key}.title`),
                      })
                    }
                    aria-label={t('projectsSection.viewLargerImage')}
                    className="aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(28,26,23,0.25)] transition-opacity hover:opacity-95"
                  >
                    <Image
                      src={project.img}
                      alt=""
                      width={880}
                      height={660}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 440px"
                      priority={index === 0}
                    />
                  </button>
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={t('projectsSection.closeLightbox')}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-sm text-2xl text-ivory/90 transition-colors hover:text-ivory md:right-8 md:top-8"
          >
            ×
          </button>
          <div
            className="relative max-h-[min(90vh,900px)] w-full max-w-[min(100%,1120px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1760}
              height={1320}
              className="mx-auto h-auto max-h-[min(90vh,900px)] w-full object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
