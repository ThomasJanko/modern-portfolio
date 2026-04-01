'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaArrowRight, FaMapLocation } from 'react-icons/fa6'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { type PortfolioCategory } from './RecentProjects'
import { FaMapPin } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

type HeroProps = {
  activeCategory: PortfolioCategory;
};

const Hero = ({ activeCategory }: HeroProps) => {
  const { t, language } = useLanguage();

  const cvAssetsByCategory = {
    web3: {
      fr: {
        image: '/CV/JANKOWSKI_THOMAS_CV_2026_blockchain.png',
        pdf: '/CV/JANKOWSKI_THOMAS_CV_2026_blockchain.pdf',
      },
      en: {
        image: '/CV/JANKOWSKI_THOMAS_CV_2026_blockchain_en.png',
        pdf: '/CV/JANKOWSKI_THOMAS_CV_2026_blockchain_en.pdf',
      },
    },
    default: {
      fr: {
        image: '/CV/JANKOWSKI_THOMAS_CV_2026_fullstack.png',
        pdf: '/CV/JANKOWSKI_THOMAS_CV_2026_fullstack.pdf',
      },
      en: {
        image: '/CV/JANKOWSKI_THOMAS_CV_fullstack_en.png',
        pdf: '/CV/JANKOWSKI_THOMAS_CV_fullstack_en.pdf',
      },
    },
  } as const;

  const languageKey = language === 'fr' ? 'fr' : 'en';
  const categoryKey = activeCategory === 'web3' ? 'web3' : 'default';
  const cvAsset = cvAssetsByCategory[categoryKey][languageKey];
  
  return (
    <div className='pb-20 pt-36'>

        <div className=''>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>{t('hero.subtitle')}</h2>
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words={t('hero.title')}
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              {t('hero.description')}
            </p>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <FaMapLocation size={20} color='white'  />
              <p className='text-center md:tracking-wider  text-sm md:text-lg lg:text-2xl'>
                {t('hero.location')}
              </p>
            </div>
            <div className='flex justify-center my-4'>
              <div className='w-full h-full relative'>
                <Tilt
                  className='w-full h-full relative'
                >
                <Image
                  src={cvAsset.image}
                  alt='CV'
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 85vw, 500px"
                  quality={75}
                  className='rounded-md cursor-pointer'
                  onClick={() => window.open(encodeURI(cvAsset.pdf), '_blank')}
                />
                </Tilt>
              </div>
            </div>
            <a href="#about">
              <ShimmerButton 
                title={t('hero.showWork')}
                icon={<FaArrowRight />}
                position='right'
              />
            </a>
           
          </div>

          
        </div>
    </div>
  )
}

export default Hero