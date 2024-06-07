
import React from 'react'
import { projects, reactNativeProjects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { ThreeDCard } from './ThreeDCard'
import { Meteors } from './ui/Meteor'
import { Tilt } from 'react-tilt'

const RecentProjects = () => {

  const randomColors = () => {
    const colors = [
      "before:from-[#d06efd]",
      "before:from-[#f9a826]",
      "before:from-[#f64e60]",
      "before:from-[#4e67eb]",
      "before:from-[#1bc6b4]",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.slice(0,4).map(({id, title, des, link, img, iconLists, demo}) => (
          <div key={id} className='relative sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]' >
            <ThreeDCard 
              title={title} 
              description={des} 
              link={link} 
              img={img} 
              iconLists={iconLists}
              demo={demo}
            />
            <div className='absolute w-5/6 h-full left-0 top-0 overflow-hidden pointer-events-none z-10'>
              <Meteors className={randomColors()} number={20} />
            </div>
            
          </div>
        ))}
        </div>

        <h1 className='heading mt-6'>
            More projects {' '}
            <span className='text-purple'>on the way</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.slice(4).map(({id, title, des, link, img, iconLists, demo}) => (
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={demo} href={demo}>
              <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10' onClick={() => window.open(demo, '_blank')}>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                  <img 
                    src="/bg.png"
                    alt="bg-img"
                  />
                </div>
                <img 
                  src={img}
                  alt={title}
                  className='z-40 absolute bottom-0 w-5/6 h-5/6 object-center rounded-lg rotate-3 translate-y-4'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'> {title} </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2'> {des} </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div 
                      key={icon} 
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-8 h-8 flex justify-center items-center'
                      style={{transform: `translateX(-${5 * index * 2}px)`}}
                    >
                      <img 
                        src={icon} 
                        alt={icon} 
                        className='p-2' 
                      />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center pr-4'>
                  <Image
                    src='/git.svg'
                    alt='github'
                    width={40}
                    height={40}
                    onClick={() => window.open(link, '_blank')}
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        </div>

        <h1 className='heading mt-6'>
            And some {' '}
            <span className='text-purple'>React Native</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-20 mt-10'>
        {reactNativeProjects.map(({id, title, des, link, img, iconLists, demo}) => (
          <div key={id} className='flex flex-col items-center justify-center'>
            <span className='font-bold text-xl'> {title} </span>
            <div className='flex flex-wrap justify-center gap-x-20 gap-y-8 mt-6'>
            {img.map((image, index) => (
              <Tilt key={index} className='flex rounded-xl w-[300px] h-auto'>
                <img 
                  src={image}
                  alt={title}
                  className='w-full h-full object-center rounded-xl'
                />
              </Tilt>
            ))}
            </div>
          </div>
        ))}
        </div>

    </div>
  )
}

export default RecentProjects