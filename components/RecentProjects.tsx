'use client';
import React, { useMemo } from 'react'
import { projects, reactNativeProjects, web3Resources } from '@/data'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { ThreeDCard } from './ThreeDCard'
import { AnimatedTooltip } from './ui/AnimatedTooltip'
import { useLanguage } from '@/contexts/LanguageContext'

export type PortfolioCategory = 'all' | 'web' | 'mobile' | 'web3';
const projectKeys = ['smoldAI', 'spotify', 'imaginify', 'crypto', 'gFormation', 'revochat', 'airbnb', 'netflix', 'sportizer'];
const reactNativeKeys = ['instagram', 'taskmaster', 'nft'];

type RecentProjectsProps = {
  activeCategory: PortfolioCategory;
};

const RecentProjects = ({ activeCategory }: RecentProjectsProps) => {
  const { t } = useLanguage();

  const translatedProjects = useMemo(() => projects.map((project, index) => ({
    ...project,
    title: t(`projectsData.${projectKeys[index]}.title`),
    des: t(`projectsData.${projectKeys[index]}.description`)
  })), [t]);

  const translatedReactNativeProjects = useMemo(() => reactNativeProjects.map((project, index) => ({
    ...project,
    title: t(`projectsData.${reactNativeKeys[index]}.title`),
    des: t(`projectsData.${reactNativeKeys[index]}.description`)
  })), [t]);

  const translatedWeb3Resources = useMemo(() => web3Resources.map((resource) => ({
    ...resource,
    title: resource.lang === 'EN' ? t('projects.cv.enTitle') : t('projects.cv.frTitle'),
    des: resource.lang === 'EN' ? t('projects.cv.enDescription') : t('projects.cv.frDescription'),
  })), [t]);

  const webProjects = translatedProjects.filter((project) => project.category === 'web');
  const web3Projects = translatedProjects.filter((project) => project.category === 'web3');
  const mobileProjects = translatedReactNativeProjects.filter((project) => project.category === 'mobile');
  const mobileWeb3Projects = translatedReactNativeProjects.filter((project) => project.category === 'web3');

  const showWeb = activeCategory === 'all' || activeCategory === 'web';
  const showMobile = activeCategory === 'all' || activeCategory === 'mobile';
  const showWeb3 = activeCategory === 'all' || activeCategory === 'web3';

  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        {t('projects.recentSelection')} {' '}
        <span className='text-purple'>{t('projects.recentProjects')}</span>
      </h1>

      {showWeb && (
        <>
          <h2 className='heading mt-12'>
            <span className='text-purple'>{t('projects.sections.web')}</span>
          </h2>
          <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-20 mt-6'>
            {webProjects.map(({ id, title, des, link, img, iconLists, demo }) => (
              <div key={id} className='relative sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                <ThreeDCard
                  title={title}
                  description={des}
                  link={link}
                  img={img}
                  iconLists={iconLists}
                  demo={demo}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {showWeb3 && (
        <>
          <h2 className='heading mt-12'>
            <span className='text-purple'>{t('projects.sections.web3')}</span>
          </h2>
          <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-6'>
            {web3Projects.map(({ id, title, des, link, img, iconLists, demo }) => (
              <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                <PinContainer title={demo || link} href={demo || link}>
                  <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl'>
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className='z-40 absolute bottom-0 w-5/6 h-5/6 object-center rounded-lg rotate-3 translate-y-4'
                    />
                  </div>
                  <h3 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h3>
                  <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2'>{des}</p>
                  <div className='flex items-center justify-between mt-7 mb-3'>
                    <AnimatedTooltip items={iconLists} />
                    <div className='flex justify-center items-center pr-4'>
                      <Image src='/git.svg' alt='github' width={40} height={40} />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>

          {!!mobileWeb3Projects.length && (
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-2'>
              {mobileWeb3Projects.map(({ id, title, des, iconLists }) => (
                <div key={id} className='w-[80vw] sm:w-[570px] rounded-3xl border border-white/15 p-6 bg-black-200'>
                  <h3 className='font-bold text-xl'>{title}</h3>
                  <p className='text-white/80 mt-2'>{des}</p>
                  <div className='mt-6'>
                    <AnimatedTooltip items={iconLists} />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className='flex flex-wrap items-center justify-center p-4 gap-6 mt-4'>
            {translatedWeb3Resources.map(({ id, title, des, lang, file }) => (
              <a
                key={id}
                href={encodeURI(file)}
                target='_blank'
                rel='noreferrer'
                className='w-[80vw] sm:w-[570px] rounded-2xl border border-purple/40 bg-gradient-to-br from-black-200 to-black-100 p-6 hover:border-purple transition-colors'
              >
                <p className='text-xs uppercase tracking-[0.2em] text-purple'>{lang}</p>
                <h3 className='mt-2 text-xl font-bold'>{title}</h3>
                <p className='mt-2 text-white/80'>{des}</p>
                <p className='mt-4 text-sm text-purple'>{t('projects.cv.open')}</p>
              </a>
            ))}
          </div>
        </>
      )}

      {showMobile && (
        <>
          <h2 className='heading mt-12'>
            <span className='text-purple'>{t('projects.sections.mobile')}</span>
          </h2>
          <div className='relative flex flex-wrap dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03] bg-opacity-10 bg-white items-center justify-center p-4 gap-x-24 gap-y-20 mt-6'>
            {mobileProjects.map(({ id, title, des, img, iconLists }) => (
              <div key={id} className='flex flex-col items-center justify-center'>
                <span className='font-bold text-xl sm:text-2xl text-center'>{title}</span>
                <p className='text-sm sm:text-base text-white/80 mt-2 text-center'>{des}</p>
                <div className='flex flex-wrap justify-center gap-x-20 gap-y-20 mt-10'>
                  {img.map((image, index) => (
                    <div key={`${title}-${image}`} className='relative flex flex-col rounded-xl w-[300px] h-auto'>
                      <div className='w-full h-full relative'>
                        <img
                          src='/images/iphoneX_bg.webp'
                          alt='bg-img'
                          className='w-full h-full object-center rounded-3xl'
                          style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
                        />
                        <img
                          src={image}
                          alt={title}
                          className='w-[90%] h-[96%] absolute left-4 top-3 object-center rounded-3xl'
                          style={{
                            transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                            borderRadius: '36px',
                          }}
                        />
                      </div>
                      <div
                        className={`flex justify-center mt-4 items-center ${index % 2 === 0 ? 'ml-14' : 'mr-6'}`}
                        style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
                      >
                        <AnimatedTooltip items={iconLists} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default RecentProjects