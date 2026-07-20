'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { workItems } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeWorkShowcase() {
  const featuredWork = workItems[0];

  return (
    <MotionSection className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div whileHover={{ rotate: -1.5, scale: 1.015 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
          <Image src={featuredWork.image} alt={featuredWork.title} width={1200} height={760} className="h-[420px] w-full object-cover object-left-top" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-zinc-950/90 px-5 py-4 text-white backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">Featured</p>
            <h3 className="mt-1 text-xl font-black">{featuredWork.title}</h3>
          </div>
        </motion.div>
        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Our Work</span>
          <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">Recent project showcase</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Showcase responsive web applications, business platforms, and polished digital products with a strong case study layout.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredWork.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-700">{tag}</span>
            ))}
          </div>
          <Link href="/portfolio" className="mt-8 inline-flex rounded-full bg-zinc-950 px-7 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-teal-600">Open portfolio page</Link>
        </div>
      </div>
    </MotionSection>
  );
}
