import { technologies, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Technologies = () => {
  return (
    <div className='py-20' id="testimonials">
        <h1 className='heading'>
            My Top {' '}
            <span className='text-purple'>Technologies</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {technologies.map((tech, index) =>(
                <Button 
                    key={tech.title}
                    borderRadius='1.75rem'
                    borderClassName={index === 0 || index === technologies.length - 1 ? 'bg-purple' : 'bg-red-500'}
                    duration={Math.floor(Math.random() * 10000 + 10000)}
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img 
                            src={tech.icon} 
                            alt={tech.title} 
                            className='lg:w-32 md:w-20 w-16' 
                        />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'> {tech.title} </h1>
                            <div className='flex flex-wrap gap-4 items-center mt-2'>
                                {tech.items.map((item) => (
                                    <img
                                        key={item.name} 
                                        src={item.icon} 
                                        alt={item.name} 
                                        className='w-10 h-10 hover:scale-110 object-center transition-all duration-200'
                                        onClick={() => window.open(item.link, '_blank')}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Technologies