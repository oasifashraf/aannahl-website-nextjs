import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ProcessShowcase from '@/components/ProcessShowcase';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';

export const metadata: Metadata = {
  title: 'About Aan Nahl | Software Development Firm',
  description: 'Learn how Aan Nahl plans, designs, develops, and supports practical digital products for business growth.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Aan Nahl"
        title="A software development firm with insanely high standards."
        text="We provide software development outsourcing services that help businesses improve time to market, build better products, and support long-term digital growth."
        image="/assets/advanced/office-wide.jpg"
        ctaHref="/team"
        ctaLabel="Meet the team"
      />

      <MotionSection className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-orange-100/80">
            <Image src="/assets/advanced/office-team.jpg" alt="Aan Nahl software team working" width={1000} height={680} className="h-[420px] w-full rounded-[2rem] object-cover" />
            <div className="absolute -bottom-5 right-8 rounded-2xl bg-zinc-950 px-6 py-4 text-white shadow-glow">
              <strong className="block text-3xl font-black text-orange-300">120+</strong>
              <span className="text-sm font-bold text-zinc-300">Projects Delivered</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Who we are</span>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">We turn ideas into practical digital products.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Our team works with planning, design, development, quality assurance, and ongoing support. The goal is to make technology useful, simple, and valuable for your business.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['2010', 'Founded'],
                ['120+', 'Projects'],
                ['5+', 'Core Services'],
              ].map(([num, label]) => (
                <div key={label} className="rounded-3xl bg-orange-50 p-6 text-center">
                  <strong className="block text-4xl font-black text-orange-600">{num}</strong>
                  <span className="mt-2 block font-bold text-zinc-600">{label}</span>
                </div>
              ))}
            </div>
            <Link href="/team" className="mt-8 inline-flex rounded-full bg-zinc-950 px-7 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-orange-500">Meet the team</Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Our process</span>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">How we build software</h2>
          </div>
          <ProcessShowcase />
        </div>
      </MotionSection>
    </PageShell>
  );
}
