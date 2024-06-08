
import React from 'react'
import { projects, reactNativeProjects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { ThreeDCard } from './ThreeDCard'
import { Meteors } from './ui/Meteor'
import { Tilt } from 'react-tilt'
import { AnimatedTooltip } from './ui/AnimatedTooltip'
import { BackgroundBeams } from './ui/BackgroundBeam'

const RecentProjects = () => {

  const randomColors = () => {
    const colors = [
      "before:from-[#d06efd]",
      "before:from-[#f9a826]",
      "before:from-[#f64e60]",
      "before:from-[#4e67eb]",
      "before:from-[#1bc6b4]",
      "before:from-[#f472b6]",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-20 mt-10'>
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
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl'>
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
                <AnimatedTooltip items={iconLists} />
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
                <BackgroundBeams />
              </div>
            </PinContainer>
          </div>
        ))}
        </div>

        <h1 className='heading mt-6'>
            And some {' '}
            <span className='text-purple'>Mobil App</span>
        </h1>

        <div className='relative flex flex-wrap dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03] bg-opacity-10 bg-white items-center justify-center p-4 gap-x-24 gap-y-20 mt-10'>
        {reactNativeProjects.map(({id, title, des, link, img, iconLists, demo}) => (
          <div key={id} className='flex flex-col items-center justify-center'>
            <span className='font-bold text-xl sm:text-2xl text-center'> {title} </span>
            <div className='flex flex-wrap justify-center gap-x-20 gap-y-20 mt-10'>
            {img.map((image, index) => (
              <Tilt key={index} className='relative flex flex-col rounded-xl w-[300px] h-auto'>
                <div className='w-full h-full relative'>
                <img
                  src='https://imgs.search.brave.com/aUFvZvEvh63QpAy0tnaWIhXFjf-6AVqHyhSbHTeHZIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM0L0lQaG9uZV8x/Ml9CbHVlLnN2Zw.svg'
                  alt='bg-img'
                  className='w-full h-full object-center rounded-3xl'
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                  }}
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
                <div className={`flex justify-center mt-4 items-center ${index % 2 === 0? 'ml-14' : 'mr-6'}`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                }}>
                   <AnimatedTooltip items={iconLists} />
                </div>
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