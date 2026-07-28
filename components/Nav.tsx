'use client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './ui/LanguageSwitcher';
import { Logo } from './ui/Logo';

const Nav = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/92 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1312px] items-center justify-between px-5 md:h-[84px] md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight hover:no-underline md:gap-3 md:text-xl"
        >
          <Logo className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="md:hidden">T. Jankowski</span>
          <span className="hidden md:inline">Thomas Jankowski</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-10">
          <nav className="hidden items-center gap-8 text-[15px] md:flex">
            <a href="/#projets">{t('nav.projects')}</a>
            <a href="/#stack">{t('nav.stack')}</a>
            <a href="/#experience">{t('nav.experience')}</a>
            <a href="/#contact">{t('nav.contact')}</a>
          </nav>

          <LanguageSwitcher />

          <a
            href="mailto:thomas.jankowski.dev@gmail.com"
            className="hidden rounded-sm bg-accent px-4 py-[9px] text-[13px] font-medium text-ivory transition-colors hover:bg-accent-dark hover:text-ivory hover:no-underline sm:inline-block md:px-[22px] md:py-[10px] md:text-sm"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
