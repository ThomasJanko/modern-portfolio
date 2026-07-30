'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { projects, reactNativeProjects, web3Resources } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Carousel } from '@/components/ui/Carousel';
import { GithubBadge } from '@/components/ui/GithubBadge';
import { PhoneFrame } from '@/components/ui/PhoneFrame';

type Category = 'all' | 'web' | 'mobile' | 'web3';

type LightboxImage = {
  src: string;
  alt: string;
};

const allEntries = [...projects, ...reactNativeProjects].sort((a, b) => {
  if (a.type !== b.type) return a.type === 'mobile' ? 1 : -1;
  return b.id - a.id;
});

export default function AllProjectsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Category>('all');
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

  const categories: { id: Category; labelKey: string }[] = [
    { id: 'all', labelKey: 'projects.categories.all' },
    { id: 'web', labelKey: 'projects.categories.web' },
    { id: 'mobile', labelKey: 'projects.categories.mobile' },
    { id: 'web3', labelKey: 'projects.categories.web3' },
  ];

  const visibleProjects = useMemo(() => {
    if (filter === 'all') return allEntries;
    if (filter === 'mobile') return allEntries.filter((p) => p.type === 'mobile');
    return allEntries.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Nav />

      <div className="mx-auto max-w-[1120px] px-5 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20">
        <h1 className="mb-4 font-serif text-4xl font-medium md:text-[52px]">
          {t('allProjectsPage.title')}
        </h1>
        <p className="mb-10 max-w-xl text-base text-clay md:mb-16 md:text-lg">
          {t('allProjectsPage.subtitle')}
        </p>

        <div className="mb-12 flex flex-wrap gap-3 md:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              className={`rounded-sm border px-5 py-2.5 text-sm transition-colors ${
                filter === category.id
                  ? 'border-accent bg-accent text-ivory'
                  : 'border-sand text-ink hover:border-accent'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const demoOrLink = project.demo || project.link;
            const githubUrl = project.link && project.link.includes('github.com') ? project.link : null;
            const title = t(`projectsData.${project.key}.title`);
            const isMobile = project.type === 'mobile';

            return (
              <div key={`${project.type}-${project.id}`}>
                <div className="mb-4">
                  {isMobile ? (
                    <div className="relative mx-auto w-fit">
                      <PhoneFrame>
                        <Carousel
                          images={project.img}
                          alt={title}
                          onImageClick={(i) => setLightbox({ src: project.img[i], alt: title })}
                        />
                      </PhoneFrame>
                      {githubUrl && <GithubBadge href={githubUrl} />}
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_12px_24px_-14px_rgba(28,26,23,0.25)]">
                      <Carousel
                        images={project.img}
                        alt={title}
                        onImageClick={(i) => setLightbox({ src: project.img[i], alt: title })}
                      />
                      {githubUrl && <GithubBadge href={githubUrl} />}
                    </div>
                  )}
                </div>

                <p className="mb-2 text-xs uppercase tracking-[0.08em] text-stone">
                  {t(`projects.categories.${project.category}`)}
                </p>
                <h3 className="mb-2 font-serif text-xl font-medium">{title}</h3>
                <p className="mb-2.5 text-[13px] text-stone">
                  {project.iconLists.map((tech) => tech.name).join(' · ')}
                </p>

                {demoOrLink && (
                  <a
                    href={demoOrLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:no-underline"
                  >
                    {t('projectsSection.viewProject')} →
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 border-t border-line pt-12 md:mt-28 md:pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.1em] text-stone md:mb-8">
            {t('allProjectsPage.resources')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {web3Resources.map((resource) => (
              <a
                key={resource.id}
                href={encodeURI(resource.file)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-sm border border-line px-6 py-5 transition-colors hover:border-accent hover:no-underline"
              >
                <p className="mb-1 text-xs uppercase tracking-[0.1em] text-stone">{resource.lang}</p>
                <p className="font-medium text-ink">
                  {resource.lang === 'EN' ? t('projects.cv.enTitle') : t('projects.cv.frTitle')}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay/85 p-4 md:p-10"
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
    </main>
  );
}
