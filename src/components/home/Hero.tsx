

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedText from '@/components/animations/AnimatedText';
import FloatingGlow from '@/components/animations/FloatingGlow';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

const studioSlides = [
  { src: '/assets/advanced/client-cards.png', alt: 'Client cards interface' },
  { src: '/assets/advanced/dashboard-overview.png', alt: 'Dashboard overview' },
  { src: '/assets/advanced/task-login.png', alt: 'Task management login interface' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % studioSlides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
  <div className="absolute inset-0">
    <Image
      src="/assets/banner1.jpg"
      alt="Aan Nahl office workspace"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/60 to-zinc-950/20" />

  

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_30%)]" />

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

  <FloatingGlow className="left-10 top-32 h-52 w-52 bg-orange-500/18" />
  <FloatingGlow className="bottom-20 right-20 h-72 w-72 bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 md:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-orange-400/40 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-200 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Software Development Firm
            </motion.span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.05] md:text-7xl lg:text-8xl">
              <AnimatedText
                text="Design. Develop. Inspire."
                className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            >
              We build modern websites, web applications, mobile experiences,
              and business software with clean strategy, sharp design, and
              scalable React functionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-teal-600 px-9 py-4 text-center font-black text-white shadow-[0_20px_60px_rgba(13,148,136,0.3)] transition hover:-translate-y-1 hover:bg-teal-500"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition duration-500 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 bg-white/10 px-9 py-4 text-center font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-600"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-500/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="relative mb-8 h-56 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-lg shadow-black/20">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={studioSlides[activeSlide].src}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={studioSlides[activeSlide].src}
                      alt={studioSlides[activeSlide].alt}
                      fill
                      sizes="(min-width: 1024px) 550px, 100vw"
                      className="object-cover object-left-top"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 to-transparent" />

                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {studioSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index
                          ? 'w-7 bg-teal-400'
                          : 'w-2 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
                    Aan Nahl Studio
                  </p>

                  <h2 className="mt-3 max-w-md text-3xl font-black leading-tight text-white">
                    Clean digital products for serious business growth.
                  </h2>
                </div>

                <div className="grid h-14 w-14 place-items-center rounded-full border border-orange-300/40 bg-orange-500/15 text-xl font-black text-orange-300">
                  AN
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 120, suffix: '+', label: 'Projects' },
                  { value: 75, suffix: '+', label: 'Clients' },
                  { value: 24, suffix: '/7', label: 'Support' },
                ].map(({ value, suffix, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                  >
                    <strong className="block text-2xl font-black text-white">
                      <AnimatedCounter value={value} suffix={suffix} duration={1.8} />
                    </strong>
                    <span className="mt-1 block text-xs font-semibold text-slate-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 right-8 rounded-2xl border border-orange-300/40 bg-orange-500 px-6 py-4 text-white shadow-xl shadow-black/30"
            >
              <strong className="block text-2xl font-black">
                <AnimatedCounter value={10} suffix="+" duration={1.5} />
              </strong>
              <span className="text-xs font-bold text-orange-50">
                Years Experience
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
