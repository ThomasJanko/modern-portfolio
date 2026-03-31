'use client';
import { useState } from "react";
import Approach from "@/components/Approach";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects, { type PortfolioCategory } from "@/components/RecentProjects";
import Technologies from "@/components/Technologies";
import CategoryPanel from "@/components/CategoryPanel";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  
  const navItems = [
    { name: t('nav.about'), link: "#about" },
    { name: t('nav.projects'), link: "#projects" },
    { name: t('nav.technologies'), link: "#technologies" },
    { name: t('nav.experiences'), link: "#experiences" },
    { name: t('nav.contact'), link: "#contact" },
  ];

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: "all", label: t("projects.categories.all") },
    { id: "web", label: t("projects.categories.web") },
    { id: "mobile", label: t("projects.categories.mobile") },
    { id: "web3", label: t("projects.categories.web3") },
  ];
  
  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Image src="/logo.png" alt="Logo" width={100} height={100} className='fixed top-4 left-2 z-[5001]' />

      <LanguageSwitcher />
      <CategoryPanel
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero activeCategory={activeCategory} />
        <Grid />
        <RecentProjects activeCategory={activeCategory} />
        <Technologies />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
