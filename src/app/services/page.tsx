'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';
import { services, type Service } from '@/data/siteData';

export default function ServicesPage() {
  const [selected, setSelected] = useState<Service>(services[0]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Software services built for business growth."
        text="Click any service to view details. The design uses the orange, black, and white Aan Nahl style with animated service previews."
        image="/assets/advanced/workspace-laptop.jpg"
        ctaHref="/contact"
        ctaLabel="Request a service"
      />

      <MotionSection className="section-pad">
        <div className="mx-auto mt-4 grid max-w-7xl gap-6 lg:grid-cols-5">
          {services.map((service) => (
            <button key={service.title} type="button" onClick={() => setSelected(service)} className={`card-hover rounded-[2rem] border p-6 text-left ${selected.title === service.title ? 'border-orange-400 bg-orange-500 text-white shadow-2xl shadow-orange-500/25' : 'border-orange-100 bg-white text-zinc-950 shadow-lg shadow-orange-100/70'}`}>
              <Image src={service.icon} alt="" width={58} height={58} className="mb-5 h-14 w-14 object-contain" />
              <h2 className="text-xl font-black">{service.title}</h2>
              <p className={`mt-4 text-sm leading-6 ${selected.title === service.title ? 'text-orange-50' : 'text-zinc-600'}`}>{service.short}</p>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-zinc-950 text-white shadow-2xl lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-300">Selected service</p>
            <div className="mt-7 flex items-center gap-5">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white p-4"><Image src={selected.icon} alt="" width={56} height={56} className="max-h-14" /></div>
              <h2 className="text-4xl font-black">{selected.title}</h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{selected.short}</p>
            <div className="mt-8 space-y-4">
              {selected.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold">✓ {bullet}</div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-orange-600">Request This Service</Link>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={selected.title} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }} transition={{ duration: 0.35 }} className="relative min-h-[420px] bg-white/5">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionSection>
    </PageShell>
  );
}
