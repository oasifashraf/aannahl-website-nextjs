'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { processSteps } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeProcess() {
  const [selectedStep, setSelectedStep] = useState<(typeof processSteps)[number] | null>(null);

  useEffect(() => {
    if (!selectedStep) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedStep(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStep]);

  return (
    <>
      <MotionSection className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">How we work</span>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">From planning to working software</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Our process is simple: assign the right team, work in agile cycles, and deliver usable software that supports your business.</p>
            <Link href="/about" className="mt-8 inline-flex rounded-full bg-teal-600 px-7 py-3 font-black text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-zinc-950">Learn about us</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <button
                type="button"
                key={step.title}
                onClick={() => setSelectedStep(step)}
                aria-label={`Open ${step.title} details`}
                className="card-hover group relative isolate aspect-square w-full overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 text-left shadow-2xl shadow-slate-300/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-4"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1280px) 405px, (min-width: 768px) 31vw, 100vw"
                  className={`object-cover transition duration-700 ease-out group-hover:scale-110 ${
                    index === 0 ? 'object-[62%_center]' : index === 1 ? 'object-center' : 'object-[48%_center]'
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950/95 transition duration-500 group-hover:from-slate-950/5 group-hover:via-slate-950/45" />
                <span className="absolute inset-0 bg-gradient-to-tr from-teal-950/35 via-transparent to-orange-400/10 opacity-80" />

                <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/15 text-sm font-black text-white shadow-lg backdrop-blur-md">
                  0{index + 1}
                </span>
                <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-xs font-black uppercase tracking-wider text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  View details
                </span>

                <span className="absolute inset-x-0 bottom-0 block p-6 text-left text-white">
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-orange-300">Step 0{index + 1}</span>
                  <span className="mt-2 block text-2xl font-black leading-tight">{step.title}</span>
                  <span className="mt-3 block text-sm leading-6 text-slate-200">{step.text}</span>
                  <span className="mt-5 block h-1 w-12 rounded-full bg-teal-400 transition-all duration-500 group-hover:w-full group-hover:bg-orange-400" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </MotionSection>

      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setSelectedStep(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="process-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-950 shadow-2xl"
            >
              <div className="relative aspect-[16/9] min-h-[420px] w-full sm:min-h-0">
                <Image src={selectedStep.image} alt={selectedStep.title} fill sizes="(min-width: 1024px) 896px, 95vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">Our process</span>
                  <h3 id="process-modal-title" className="mt-3 text-3xl font-black sm:text-5xl">{selectedStep.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{selectedStep.text}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-slate-950/65 text-2xl font-bold text-white shadow-lg backdrop-blur-md transition hover:rotate-90 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
                aria-label="Close process details"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
