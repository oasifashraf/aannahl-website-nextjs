'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';
import { techLogos, workItems } from '@/data/siteData';

export default function PortfolioPage() {
  const [active, setActive] = useState(0);
  const item = workItems[active];

  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title="Our work, process, and technology expertise."
        text="This page uses your uploaded portfolio, dashboard, and technology images to show a stronger Aan Nahl style portfolio section."
        image="/assets/advanced/laptop-product.jpg"
        ctaHref="/contact"
        ctaLabel="Start similar project"
      />

      <MotionSection className="section-pad bg-gradient-to-br from-slate-50 via-white to-sky-50/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-sky-700">Case Study Preview</span>
            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-950 md:text-6xl">{item.title}</h2>
            <p className="mt-3 font-black text-orange-600">{item.category}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">{item.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">{tag}</span>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-slate-950 px-8 py-4 font-black text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-orange-500 hover:shadow-orange-500/25">Start Similar Project</Link>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={item.title} initial={{ opacity: 0, scale: 0.96, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.96, x: -28 }} transition={{ duration: 0.35 }} className="rounded-[2.5rem] border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-sky-200/70">
              <Image src={item.image} alt={item.title} width={1300} height={760} className="h-[430px] w-full rounded-[2rem] object-cover object-left-top" />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-slate-100/70">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {workItems.map((work, index) => (
              <button key={work.title} type="button" onClick={() => setActive(index)} className={`card-hover rounded-[2rem] border p-7 text-left ${active === index ? 'border-slate-800 bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-xl shadow-slate-950/20' : 'border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-200/70 hover:border-orange-300'}`}>
                <span className={`text-4xl font-black ${active === index ? 'text-orange-400' : 'text-sky-700'}`}>0{index + 1}</span>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] opacity-80">{work.category}</p>
                <h2 className="mt-2 text-2xl font-black">{work.title}</h2>
                <p className={`mt-4 leading-7 ${active === index ? 'text-slate-300' : 'text-slate-600'}`}>{work.text}</p>
              </button>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-pad bg-white">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-2xl shadow-slate-300/50 md:p-12">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
          <span className="relative text-sm font-black uppercase tracking-[0.25em] text-orange-400">Key Tech Expertise</span>
          <h2 className="relative mt-3 text-4xl font-black">Technology stack</h2>
          <div className="relative mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
            {techLogos.map((tech) => (
              <div key={tech.name} className="grid h-28 place-items-center rounded-3xl border border-white/70 bg-white/95 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-950/30">
                <Image src={tech.image} alt={tech.name} width={120} height={80} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </PageShell>
  );
}
