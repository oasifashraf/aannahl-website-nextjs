import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import TeamGrid from '@/components/TeamGrid';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';
import { teamMembers } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Our Team | Aan Nahl Software',
  description: 'Meet the Aan Nahl team behind planning, development, UI/UX design, HR, quality control, and SEO strategy.',
};

export default function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind the creative work."
        text="Our team includes leadership, product planning, HR, frontend development, UI/UX design, and SEO strategy."
        image="/assets/advanced/office-glass.jpg"
        ctaHref="/contact"
        ctaLabel="Work with us"
      />

      {/* <MotionSection className="section-pad">
        <div className="mx-auto mb-24 grid max-w-7xl items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Real office energy</span>
            <h2 className="mt-3 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">A focused team for digital product delivery.</h2>
          </div>
          <Image src="/assets/advanced/office-wide.jpg" alt="Aan Nahl office" width={1200} height={620} className="h-80 w-full rounded-[2.5rem] object-cover shadow-2xl shadow-orange-900" />
        </div>

        <TeamGrid members={teamMembers} />
      </MotionSection> */}

      <MotionSection className="section-pad">
  <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
    <div>
      <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
        Real office energy
      </span>

      <h2 className="mt-3 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">
        A focused team for digital product delivery.
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
        Our team works across leadership, technology, planning, design, support,
        and digital growth to deliver practical software solutions.
      </p>
    </div>

    <Image
      src="/assets/advanced/office-wide.jpg"
      alt="Aan Nahl office"
      width={1200}
      height={620}
      className="h-80 w-full rounded-[2.5rem] object-cover shadow-2xl shadow-orange-900/30"
    />
  </div>

  <div className="mx-auto mt-28 mb-14 max-w-4xl text-center">
    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-600">
      Team Members
    </span>

    <h2 className="mt-5 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">
      Meet the People Who Build, Plan, and Support Every Project
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
      Each team member brings a specific role to the process, from business
      direction and technical planning to design, delivery, and client support.
    </p>
  </div>

  <TeamGrid members={teamMembers} />
</MotionSection>

    </PageShell>
  );
}
