'use client';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiences } from '@/data';
import { TracingBeam } from './ui/TracingBeam';
import { useLanguage } from '@/contexts/LanguageContext';
// import 'react-vertical-timeline-component/style.min.css'

const Experiences = () => {
  const { t } = useLanguage();
  
  const experienceKeys = ['vueDev', 'reactDev', 'fullstack1', 'frontendDev', 'fullstack2'];
  const translatedExperiences = experiences.map((exp, index) => {
    const key = experienceKeys[index];
    const translatedPoints = t(`experiencesData.${key}.points`);
    return {
      ...exp,
      title: t(`experiencesData.${key}.title`),
      points: Array.isArray(translatedPoints) ? translatedPoints : exp.points
    };
  });

  return (
    <div className='py-20' id="experiences">
      <h1 className='heading'>
        {t('experiences.title')} <span className='text-purple'>{t('experiences.workExperiences')}</span>
      </h1>
      <div>
      <TracingBeam className="px-6">
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {translatedExperiences.map((experience) => (
              <ExperienceCard key={experience.date} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </TracingBeam>
      </div>
    </div>
  );
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  
  return (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain rounded-full' />
      </div>
    }
  >
    <div>
      <h3 className='text-purple text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-white-200 text-[16px] font-semibold m-0'>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)};

export default Experiences;
