'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, reactNativeProjects, web3Resources } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type Category = 'all' | 'web' | 'mobile' | 'web3';

const allEntries = [
  ...projects.map((project) => ({ ...project, img: Array.isArray(project.img) ? project.img[0] : project.img })),
  ...reactNativeProjects.map((project) => ({ ...project, img: Array.isArray(project.img) ? project.img[0] : project.img })),
].sort((a, b) => {
  if (a.type !== b.type) return a.type === 'mobile' ? 1 : -1;
  return b.id - a.id;
});

export default function AllProjectsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Category>('all');

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

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const demoOrLink = project.demo || project.link;
            const card = (
              <>
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_12px_24px_-14px_rgba(28,26,23,0.25)]">
                  <Image
                    src={project.img}
                    alt={t(`projectsData.${project.key}.title`)}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mb-2 text-xs uppercase tracking-[0.08em] text-stone">
                  {t(`projects.categories.${project.category}`)}
                </p>
                <h3 className="mb-2 font-serif text-xl font-medium">
                  {t(`projectsData.${project.key}.title`)}
                </h3>
                <p className="mb-2.5 text-[13px] text-stone">
                  {project.iconLists.map((tech) => tech.name).join(' · ')}
                </p>
              </>
            );

            return (
              <div key={`${project.type}-${project.id}`}>
                {demoOrLink ? (
                  <a href={demoOrLink} target="_blank" rel="noreferrer" className="block hover:no-underline">
                    {card}
                    <span className="text-sm font-medium">{t('projectsSection.viewProject')} →</span>
                  </a>
                ) : (
                  <div>{card}</div>
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
    </main>
  );
}
