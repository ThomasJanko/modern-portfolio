'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t, language } = useLanguage();
  
  const cvImage = language === 'fr' 
    ? '/CV/JANKOWSKI THOMAS CV 2026.png' 
    : '/CV/JANKOWSKI THOMAS CV - EN.png';
  
  const cvPdf = language === 'fr' 
    ? '/CV/JANKOWSKI THOMAS CV 2025.pdf' 
    : '/CV/JANKOWSKI THOMAS CV 2025 - EN.pdf';
  
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
            <div className='flex justify-center my-4'>
              <div className='w-full h-full relative'>
                <Image
                  src={cvImage}
                  alt='CV'
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 85vw, 500px"
                  quality={75}
                  className='rounded-md cursor-pointer'
                  onClick={() => window.open(cvPdf, '_blank')}
                />
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