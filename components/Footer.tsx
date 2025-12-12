'use client';
import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id="contact">
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src="/footer-grid.svg" 
                alt="grid" 
                className="w-full h-full opacity-50" 
            />
        </div> */}
        <div className='flex flex-col items-center'>
            <h1 className='heading md:max-w-[45vw]'>
                {t('footer.title')} <span className='text-purple'>{t('footer.your')}</span> {t('footer.digitalPresence')}
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'> {t('footer.description')} </p>
            <a href="mailto:thomas78125@gmail.com">
                <ShimmerButton
                    title={t('footer.getInTouch')}
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'> {t('footer.copyright')} </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((social) => (
                    <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-black-300 bg-black-200'>
                        <img
                            src={social.img}
                            alt={social.id.toString()}
                            width={20}
                            height={20}
                            onClick={() => window.open(social.link, '_blank')}
                        />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer