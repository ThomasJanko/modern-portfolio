'use client';
import Approach from "@/components/Approach";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  const navItems = [
    { name: t('nav.about'), link: "#about" },
    { name: t('nav.projects'), link: "#projects" },
    { name: t('nav.technologies'), link: "#technologies" },
    { name: t('nav.experiences'), link: "#experiences" },
    { name: t('nav.contact'), link: "#contact" },
  ];
  
  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <LanguageSwitcher />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Technologies />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
