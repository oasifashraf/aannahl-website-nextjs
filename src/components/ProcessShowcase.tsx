'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/siteData';

const cardThemes = [
  {
    accent: 'from-orange-500 to-amber-300',
    glow: 'bg-orange-400/20',
    badge: 'border-orange-200 bg-orange-50 text-orange-700',
    image: 'from-orange-50 to-amber-50',
  },
  {
    accent: 'from-sky-500 to-cyan-300',
    glow: 'bg-sky-400/20',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
    image: 'from-sky-50 to-cyan-50',
  },
  {
    accent: 'from-emerald-500 to-lime-300',
    glow: 'bg-emerald-400/20',
    badge: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    image: 'from-emerald-50 to-lime-50',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 54, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 115, damping: 17 },
  },
};

export default function ProcessShowcase() {
  return (
    <motion.div
      className="relative grid gap-7 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-orange-200 via-sky-200 to-emerald-200 lg:block" />

      {processSteps.map((step, index) => {
        const theme = cardThemes[index];

        return (
          <motion.article
            key={step.title}
            variants={card}
            whileHover={{
              y: -14,
              rotateY: index === 0 ? -1.5 : index === 2 ? 1.5 : 0,
              scale: 1.018,
              transition: { type: 'spring', stiffness: 280, damping: 18 },
            }}
            whileTap={{ scale: 0.99 }}
            className="group relative isolate overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-200/60 [transform-style:preserve-3d] sm:p-7"
          >
            <div className={`absolute inset-x-8 -top-20 h-36 rounded-full ${theme.glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`} />
            <div className={`absolute inset-x-0 top-0 h-1.5 origin-left bg-gradient-to-r ${theme.accent} transition duration-500 group-hover:scale-x-110`} />
            <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

            <div className={`relative overflow-hidden rounded-[1.8rem] border border-white bg-gradient-to-br ${theme.image} p-4 shadow-inner`}>
              <span className={`absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border text-xs font-black shadow-sm ${theme.badge}`}>
                0{index + 1}
              </span>
              <Image
                src={step.image}
                alt={step.title}
                width={520}
                height={360}
                className="mx-auto h-52 w-full object-contain transition duration-700 ease-out group-hover:-rotate-2 group-hover:scale-110"
              />
              <div className={`absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r ${theme.accent} opacity-50 blur-sm transition-all duration-500 group-hover:w-40 group-hover:opacity-90`} />
            </div>

            <div className="relative px-1 pb-2 pt-6">
              <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.22em] ${theme.badge}`}>
                Step 0{index + 1}
              </p>
              <h3 className="mt-4 text-3xl font-black text-slate-950 transition-colors duration-300 group-hover:text-slate-800">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{step.text}</p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-black text-slate-400 transition-colors group-hover:text-slate-700">
                <span>Next stage</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  className={`h-2.5 w-8 rounded-full bg-gradient-to-r ${theme.accent}`}
                />
              </div>
            </div>

            {index < processSteps.length - 1 && (
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 7, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                className="absolute -right-5 top-12 z-20 hidden h-10 w-10 place-items-center rounded-full border-4 border-white bg-slate-950 text-lg font-black text-white shadow-lg lg:grid"
              >
                →
              </motion.span>
            )}
          </motion.article>
        );
      })}
    </motion.div>
  );
}
