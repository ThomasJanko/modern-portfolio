import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({id, title, des, link, img, iconLists, demo}) => (
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
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center'
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
    </div>
  )
}

export default RecentProjects