'use client';
import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiences } from '@/data';
import { TracingBeam } from './ui/TracingBeam';
import { useLanguage } from '@/contexts/LanguageContext';
// import 'react-vertical-timeline-component/style.min.css'

type ExperienceType = 'all' | 'stage' | 'alternance' | 'cdi';

const Experiences = () => {
  const { t, language } = useLanguage();
  const [activeType, setActiveType] = useState<ExperienceType>('all');
  const [reverseOrder, setReverseOrder] = useState(false);

  const getContractTypeLabel = (type?: string) => {
    if (type === 'stage') return t('experiences.filters.stage');
    if (type === 'alternance') return t('experiences.filters.alternance');
    if (type === 'cdi') return t('experiences.filters.cdi');
    return t('experiences.filters.formation');
  };

  const typeFilters: { id: ExperienceType; label: string }[] = [
    { id: 'all', label: t('experiences.filters.all') },
    { id: 'stage', label: t('experiences.filters.stage') },
    { id: 'alternance', label: t('experiences.filters.alternance') },
    { id: 'cdi', label: t('experiences.filters.cdi') },
  ];

  const mappedExperiences = experiences
    .map((experience) => ({
      ...experience,
      title: language === 'en' && experience.titleEn ? experience.titleEn : experience.title,
      date: language === 'en' && experience.dateEn ? experience.dateEn : experience.date,
      points: language === 'en' && experience.pointsEn ? experience.pointsEn : experience.points,
      contractTypeLabel: getContractTypeLabel(experience.type),
    }))
    .filter((experience) => activeType === 'all' ? true : experience.type === activeType);

  const orderedExperiences = reverseOrder ? [...mappedExperiences].reverse() : mappedExperiences;

  return (
    <div className='py-20' id="experiences">
      <h1 className='heading'>
        {t('experiences.title')} <span className='text-purple'>{t('experiences.workExperiences')}</span>
      </h1>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
        {typeFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveType(filter.id)}
            className={`rounded-full border px-5 py-2 text-sm md:text-base transition-colors ${
              activeType === filter.id
                ? 'bg-purple text-white border-purple'
                : 'border-white/20 text-white/80 hover:border-purple/50 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className='mt-4 flex justify-center'>
        <button
          onClick={() => setReverseOrder((prev) => !prev)}
          className='rounded-full border border-white/20 px-5 py-2 text-sm md:text-base text-white/80 hover:border-purple/50 hover:text-white transition-colors'
        >
          {reverseOrder ? t('experiences.order.oldestFirst') : t('experiences.order.latestFirst')}
        </button>
      </div>
      <div>
      <TracingBeam className="px-6">
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {orderedExperiences.map((experience) => (
              <ExperienceCard key={`${experience.date}-${experience.company_name}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </TracingBeam>
      </div>
    </div>
  );
}

interface Experience {
  type?: string;
  title: string;
  titleEn?: string;
  contractTypeLabel?: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  dateEn?: string;
  points: string[];
  pointsEn?: string[];
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
      <span className='inline-flex rounded-full border border-purple/50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-purple mb-3'>
        {experience.contractTypeLabel}
      </span>
      <h3 className='text-purple text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-white-200 text-[16px] font-semibold m-0'>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point) => (
        <li key={`${experience.date}-${point}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)};

export default Experiences;
