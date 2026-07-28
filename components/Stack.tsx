'use client';
import React from 'react';
import Image from 'next/image';
import { SiNodedotjs, SiNestjs, SiLinux } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import type { IconType } from 'react-icons';
import { stackLevels, blockchainStack } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

const iconComponents: Record<string, IconType> = {
  SiNodedotjs,
  SiNestjs,
  SiLinux,
  DiJava,
};

type StackItem = {
  name: string;
  link: string;
  icon?: string;
  iconComponent?: string;
};

const StackIcon = ({ item }: { item: StackItem }) => {
  if (item.icon) {
    return (
      <Image src={item.icon} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
    );
  }
  const Icon = item.iconComponent ? iconComponents[item.iconComponent] : null;
  if (!Icon) return null;
  return <Icon size={22} className="text-ink" />;
};

const levelLabelKeys: Record<string, string> = {
  core: 'stackSection.levels.core',
  advanced: 'stackSection.levels.advanced',
  intermediate: 'stackSection.levels.intermediate',
  junior: 'stackSection.levels.junior',
};

const Stack = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="border-t border-line px-5 py-16 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-12 font-serif text-3xl font-medium md:mb-20 md:text-[42px]">
          {t('stackSection.title')}
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {stackLevels.map((level, levelIndex) => (
            <div key={level.key}>
              <p
                className={`mb-5 text-[13px] font-medium uppercase tracking-[0.1em] md:mb-7 ${
                  levelIndex === 0 ? 'text-accent' : 'text-stone'
                }`}
              >
                {t(levelLabelKeys[level.key])}
              </p>
              <div className="flex flex-col">
                {level.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-3.5 py-3 ${
                      itemIndex < level.items.length - 1 ? 'border-b border-line' : ''
                    }`}
                  >
                    <StackIcon item={item} />
                    <span className="text-[15px] md:text-base">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-accent/30 bg-accent/[0.04] p-6 md:mt-16 md:p-8">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.1em] text-accent">
            {t('stackSection.blockchain.title')}
          </p>
          <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-clay md:text-base">
            {t('stackSection.blockchain.description')}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {blockchainStack.items.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[15px] opacity-80 transition-opacity hover:opacity-100"
              >
                <StackIcon item={item} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
