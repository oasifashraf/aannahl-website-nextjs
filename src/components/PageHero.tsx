'use client';

import Image from 'next/image';
import Link from 'next/link';
import FloatingGlow from '@/components/animations/FloatingGlow';
import MotionSection from '@/components/animations/MotionSection';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function PageHero({ eyebrow, title, text, image = '/assets/advanced/code-screen.jpg', ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-[7%]">
      <div className="absolute inset-0 opacity-28">
        <Image src={image} alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-zinc-950/60" />
      <div className="absolute inset-0 grid-lines opacity-50" />
      <FloatingGlow className="left-8 top-24 h-48 w-48 bg-orange-500/35" />
      <FloatingGlow className="bottom-10 right-12 h-60 w-60 bg-sky-500/15" />

      <MotionSection className="relative z-10 mx-auto max-w-5xl">
        <span className="inline-flex rounded-full border border-orange-400/40 bg-orange-500/15 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-orange-200 backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">{text}</p>
        {ctaHref && ctaLabel ? (
          <Link href={ctaHref} className="mt-9 inline-flex rounded-full bg-teal-600 px-8 py-4 font-black text-white shadow-lg shadow-teal-900/25 transition hover:-translate-y-1 hover:bg-teal-500">
            {ctaLabel}
          </Link>
        ) : null}
      </MotionSection>
    </section>
  );
}
