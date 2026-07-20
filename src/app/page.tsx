import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/HomeServices';
import HomeProcess from '@/components/home/HomeProcess';
import HomeTech from '@/components/home/HomeTech';
import HomeWhyChoose from '@/components/home/HomeWhyChoose';
import HomeWorkShowcase from '@/components/home/HomeWorkShowcase';
import PageShell from '@/components/animations/PageShell';

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <HomeServices />
      <HomeProcess />
      <HomeTech />
      <HomeWhyChoose />
      <HomeWorkShowcase />
    </PageShell>
  );
}
