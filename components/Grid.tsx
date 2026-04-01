'use client';
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { useLanguage } from '@/contexts/LanguageContext'

const Grid = () => {
  const { t } = useLanguage();
  
  const gridItems = [
    {
      id: 1,
      title: t('grid.clientCollaboration'),
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t('grid.timezone'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t('grid.techStack'),
      description: t('grid.techStackDesc'),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t('grid.techEnthusiast'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: t('grid.currentProject'),
      description: t('grid.currentProjectDesc'),
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-85 rounded-md",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/images/weddinghat-code.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: t('grid.startProject'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map
        (({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid