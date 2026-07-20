'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { services, type Service } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeServices() {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <MotionSection className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Our Services</span>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">What we can build for you</h2>
          </div>
          <Link href="/services" className="w-fit rounded-full bg-zinc-950 px-7 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-teal-600">View all services</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActiveService(service)}
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`card-hover rounded-[1.8rem] border p-5 text-left ${activeService.title === service.title ? 'border-teal-400 bg-teal-600 text-white shadow-2xl shadow-teal-600/20' : 'border-orange-100 bg-white text-zinc-950 shadow-lg shadow-orange-100/60'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-3 shadow">
                    <Image src={service.icon} alt="" width={42} height={42} className="h-10 w-10 object-contain" />
                  </span>
                  <span>
                    <span className="block text-xl font-black">{service.title}</span>
                    <span className={`mt-1 block text-sm leading-6 ${activeService.title === service.title ? 'text-orange-50' : 'text-zinc-600'}`}>{service.short}</span>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-5 text-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32 }}
                className="grid h-full overflow-hidden rounded-[2rem] lg:grid-cols-[1fr_.8fr]"
              >
                <div className="relative min-h-[340px]">
                  <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
                </div>
                <div className="bg-zinc-950 p-7">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">Selected Service</p>
                  <h3 className="mt-3 text-3xl font-black">{activeService.title}</h3>
                  <p className="mt-4 leading-8 text-zinc-300">{activeService.short}</p>
                  <div className="mt-6 grid gap-3">
                    {activeService.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 p-4 font-bold">✓ {bullet}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
