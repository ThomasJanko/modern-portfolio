import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Positioning from '@/components/Positioning';
import FeaturedProjects from '@/components/FeaturedProjects';
import Stack from '@/components/Stack';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Nav />
      <Hero />
      <Positioning />
      <FeaturedProjects />
      <Stack />
      <ExperienceTimeline />
      <Contact />
      <Footer />
    </main>
  );
}
