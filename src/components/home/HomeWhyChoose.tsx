'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useState, type MouseEvent } from 'react';
import { whyChooseUs } from '@/data/siteData';

const featureLabels = ['Discover', 'Assemble', 'Deliver', 'Support'];

const featureThemes = [
  {
    surface: 'border-rose-200/80 bg-gradient-to-br from-rose-50/90 via-white to-orange-50/80 hover:border-rose-300',
    activeSurface: 'border-rose-300 bg-gradient-to-br from-rose-50 via-white to-orange-50 shadow-[0_28px_70px_-28px_rgba(244,63,94,0.42)]',
    accent: 'bg-gradient-to-br from-rose-500 to-orange-500 shadow-rose-500/25',
    label: 'text-rose-700',
    icon: 'border-rose-100 bg-rose-50',
    line: 'bg-gradient-to-r from-rose-500 to-orange-400',
    glow: 'rgba(244, 63, 94, 0.16)',
  },
  {
    surface: 'border-sky-200/80 bg-sky-50/75 hover:border-sky-300',
    activeSurface: 'border-sky-300 bg-sky-50 shadow-[0_28px_70px_-28px_rgba(14,165,233,0.45)]',
    accent: 'bg-sky-500 shadow-sky-500/25',
    label: 'text-sky-700',
    icon: 'border-sky-100 bg-sky-50',
    line: 'bg-sky-500',
    glow: 'rgba(14, 165, 233, 0.16)',
  },
  {
    surface: 'border-violet-200/80 bg-violet-50/70 hover:border-violet-300',
    activeSurface: 'border-violet-300 bg-violet-50 shadow-[0_28px_70px_-28px_rgba(139,92,246,0.42)]',
    accent: 'bg-violet-500 shadow-violet-500/25',
    label: 'text-violet-700',
    icon: 'border-violet-100 bg-violet-50',
    line: 'bg-violet-500',
    glow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    surface: 'border-emerald-200/80 bg-emerald-50/70 hover:border-emerald-300',
    activeSurface: 'border-emerald-300 bg-emerald-50 shadow-[0_28px_70px_-28px_rgba(16,185,129,0.42)]',
    accent: 'bg-emerald-500 shadow-emerald-500/25',
    label: 'text-emerald-700',
    icon: 'border-emerald-100 bg-emerald-50',
    line: 'bg-emerald-500',
    glow: 'rgba(16, 185, 129, 0.15)',
  },
] as const;

type FeatureCardProps = {
  index: number;
  active: boolean;
  onSelect: () => void;
  item: (typeof whyChooseUs)[number];
};

function FeatureCard({ item, index, active, onSelect }: FeatureCardProps) {
  const theme = featureThemes[index];
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), {
    stiffness: 240,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 240,
    damping: 24,
  });
  const glowX = useTransform(pointerX, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ['20%', '80%']);
  const glow = useMotionTemplate`radial-gradient(260px circle at ${glowX} ${glowY}, ${theme.glow}, transparent 65%)`;

  const handlePointerMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onFocus={onSelect}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetTilt}
      aria-pressed={active}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border p-7 text-left transition-[border-color,box-shadow,background-color] duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:min-h-[280px] ${
        active
          ? theme.activeSurface
          : `${theme.surface} shadow-[0_18px_50px_-32px_rgba(63,63,70,0.3)]`
      }`}
    >
      <motion.span className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative flex items-start justify-between gap-5">
        <span className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl text-lg font-black text-white shadow-lg ${theme.accent}`}>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          {String(index + 1).padStart(2, '0')}
        </span>
        <motion.span
          animate={active && !reduceMotion ? { rotate: [0, -6, 6, 0], scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.55 }}
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm ${theme.icon}`}
        >
          <Image src={item.icon} alt="" width={48} height={48} className="h-10 w-10 object-contain" />
        </motion.span>
      </span>

      <span className="relative mt-7 block">
        <span className={`text-[11px] font-black uppercase tracking-[0.22em] ${theme.label}`}>
          {featureLabels[index]}
        </span>
        <span className="mt-2 block text-2xl font-black text-zinc-950">{item.title}</span>
        <span className="mt-3 block leading-7 text-zinc-600">{item.text}</span>
      </span>

      <span className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${theme.line}`} style={{ width: active ? '100%' : '0%' }} />
    </motion.button>
  );
}

export default function HomeWhyChoose() {
  const reduceMotion = useReducedMotion();
  const [activeFeature, setActiveFeature] = useState(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotlightX}% ${spotlightY}%, rgba(249, 115, 22, 0.10), transparent 70%)`;

  const handleSectionPointer = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    spotlightX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    spotlightY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  return (
    <motion.section
      onMouseMove={handleSectionPointer}
      className="section-pad relative isolate overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} />
      <div aria-hidden className="pointer-events-none absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full border border-orange-200/60"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Why Choose Aan Nahl</span>
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.035em] text-zinc-950 md:text-5xl xl:text-6xl">
            We build digital products with{' '}
            <span className="relative inline-block">
              purpose
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-orange-300/55"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
              />
            </span>{' '}
            and precision.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Our team focuses on clear planning, clean design, strong development, and dependable support. Every project is built to solve a real business problem.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Our delivery approach">
            {featureLabels.map((label, index) => (
              <button
                type="button"
                key={label}
                onClick={() => setActiveFeature(index)}
                className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                  activeFeature === index
                    ? 'border-teal-600 bg-teal-600 text-white shadow-lg shadow-teal-200'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-teal-300 hover:text-teal-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-teal-600 px-7 py-3.5 font-black text-white shadow-xl shadow-teal-200 transition hover:-translate-y-1 hover:bg-zinc-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
            >
              Discuss Your Project
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
            <span className="text-sm font-bold text-zinc-500" aria-live="polite">
              <span className="text-orange-500">0{activeFeature + 1}</span> / 04 · {whyChooseUs[activeFeature].title}
            </span>
          </div>
        </motion.div>

        <div className="relative">
          <div aria-hidden className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-200 to-transparent sm:block" />
          <div aria-hidden className="absolute left-8 top-1/2 hidden h-px w-[calc(100%-4rem)] -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-200 to-transparent sm:block" />
          <div className="relative grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <FeatureCard
                key={item.title}
                item={item}
                index={index}
                active={activeFeature === index}
                onSelect={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
