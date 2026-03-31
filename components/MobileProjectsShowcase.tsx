'use client';

import { AnimatedTooltip } from './ui/AnimatedTooltip';

type MobileProject = {
  id: number;
  title: string;
  des: string;
  img: string[];
  iconLists: { name: string; icon: string; link: string }[];
};

type MobileProjectsShowcaseProps = {
  items: MobileProject[];
};

const MobileProjectsShowcase = ({ items }: MobileProjectsShowcaseProps) => {
  return (
    <div className='relative flex flex-wrap dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03] bg-opacity-10 bg-white items-center justify-center p-4 gap-x-24 gap-y-20 mt-6'>
      {items.map(({ id, title, des, img, iconLists }) => (
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
  );
};

export default MobileProjectsShowcase;
