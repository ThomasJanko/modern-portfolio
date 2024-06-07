"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardProps {
  title: string;
  description: string;
  link: string;
  img: string;
  iconLists: string[];
  demo: string;

}

export function ThreeDCard({ title, description, link, img, iconLists, demo }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="sm:w-[570px] flex flex-col justify-between sm:h-[40rem] w-[80vw]  h-[30rem]  group/card dark:hover:shadow-2xl bg-[#13162D] dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border  ">
        <div>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
            alt="thumbnail"
            onClick={() => window.open(demo, '_blank')}
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base max-w-sm mt-3 dark:text-neutral-300 line-clamp-4"
        >
          {description}
        </CardItem>
        </div>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
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
                </div>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl text-white text-xs font-bold"
          >
            <div className='flex justify-center items-center pr-4'>
                  <Image
                    src='/git.svg'
                    alt='github'
                    width={40}
                    height={40}
                    onClick={() => window.open(link, '_blank')}
                  />
                </div>
          </CardItem>
        </div>
        
      </CardBody>
    </CardContainer>
  );
}
