'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import MotionSection from '@/components/animations/MotionSection';
import PageShell from '@/components/animations/PageShell';
import { services, type Service } from '@/data/siteData';

const serviceJourney = [
  {
    number: '01',
    title: 'Discovery & Planning',
    text: 'We clarify your goals, users, required features, and delivery priorities before development begins.',
    feature: 'Clear project roadmap',
    accent: 'from-orange-500 to-amber-400',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    text: 'We shape the user experience and technical foundation so the product is clear, scalable, and practical.',
    feature: 'User-focused prototypes',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    number: '03',
    title: 'Agile Development',
    text: 'We build in focused cycles, share progress regularly, and improve the product through continuous feedback.',
    feature: 'Frequent progress updates',
    accent: 'from-violet-500 to-fuchsia-400',
  },
  {
    number: '04',
    title: 'Launch & Support',
    text: 'We prepare the final release, monitor performance, and stay available for updates and long-term support.',
    feature: 'Reliable ongoing support',
    accent: 'from-teal-500 to-emerald-400',
  },
];

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
            <button key={service.title} type="button" onClick={() => setSelected(service)} className={`card-hover rounded-[2rem] border p-6 text-left ${selected.title === service.title ? 'border-teal-400 bg-teal-600 text-white shadow-2xl shadow-teal-600/25' : 'border-orange-100 bg-white text-zinc-950 shadow-lg shadow-orange-100/70'}`}>
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
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-teal-600 px-8 py-4 font-black text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-teal-700">Request This Service</Link>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={selected.title} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }} transition={{ duration: 0.35 }} className="relative min-h-[420px] bg-white/5">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50 px-5 py-24 text-zinc-950 md:px-8 md:py-32">
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"
          animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1.08, 1, 1.08] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[18%] top-20 h-20 w-20 rounded-[1.75rem] border-2 border-orange-200/70"
          animate={{ rotate: [0, 180, 360], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
            <div>
              <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-orange-600 shadow-sm">How we deliver</span>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">What every service includes.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 lg:justify-self-end">
              A transparent process keeps your project focused from the first conversation through launch and beyond.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {['Transparent updates', 'Quality checks', 'Flexible collaboration'].map((benefit, index) => (
              <motion.span
                key={benefit}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-black text-zinc-700 shadow-sm"
              >
                <span className="mr-2 text-teal-600">&#10003;</span>{benefit}
              </motion.span>
            ))}
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              aria-hidden="true"
              className="absolute left-[6%] right-[6%] top-7 hidden h-1 origin-left rounded-full bg-gradient-to-r from-orange-400 via-sky-400 to-teal-400 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {serviceJourney.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white/90 p-7 shadow-xl shadow-zinc-200/60 backdrop-blur-sm"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r ${step.accent} transition duration-500 group-hover:scale-x-100`} />
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${step.accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-20`} />
                <span className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${step.accent} text-sm font-black text-white shadow-lg`}>
                  {step.number}
                </span>
                <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{step.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5 text-sm font-black text-zinc-800">
                  <motion.span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${step.accent}`}
                    animate={{ scale: [1, 1.55, 1], opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.25 }}
                  />
                  {step.feature}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="mt-12 flex flex-col gap-6 rounded-[2rem] border border-orange-100 bg-white/90 p-7 shadow-xl shadow-orange-100/60 sm:flex-row sm:items-center sm:justify-between md:p-9"
          >
            <div>
              <h3 className="text-2xl font-black">Have a project in mind?</h3>
              <p className="mt-2 text-zinc-600">Tell us what you want to build, and we will help define the next step.</p>
            </div>
            <Link href="/contact" className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-zinc-950 px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500">
              Start a Conversation
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </MotionSection>
    </PageShell>
  );
}
