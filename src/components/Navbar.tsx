'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { pages, services } from '@/data/siteData';

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" onClick={closeMenus} className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-400/40" aria-label="Go to home page">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, x: -14, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative block overflow-hidden rounded-lg"
          >
            <Image src="/assets/logo-white.png" alt="Aan Nahl" width={160} height={48} className="h-12 w-auto object-contain" priority />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[430%]"
            />
            <span
              aria-hidden
              className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-400 via-teal-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
            />
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((page) => (
            <div key={page.id} className="relative">
              {page.id === 'services' ? (
                <button
                  type="button"
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen((value) => !value)}
                  className={`focus-ring rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive(page.href) ? 'bg-teal-600 text-white' : 'text-zinc-200 hover:bg-white/10 hover:text-teal-300'}`}
                >
                  {page.label} ▾
                </button>
              ) : (
                <Link href={page.href} onClick={closeMenus} className={`block rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive(page.href) ? 'bg-teal-600 text-white' : 'text-zinc-200 hover:bg-white/10 hover:text-teal-300'}`}>
                  {page.label}
                </Link>
              )}

              <AnimatePresence>
                {page.id === 'services' && servicesOpen && (
                  <motion.div
                    onMouseLeave={() => setServicesOpen(false)}
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="absolute left-1/2 top-12 w-[820px] -translate-x-1/2 rounded-[2rem] border border-orange-300/30 bg-white p-5 text-zinc-950 shadow-2xl shadow-black/30"
                  >
                    <div className="mb-4 flex items-center justify-between rounded-3xl bg-gradient-to-r from-zinc-950 to-zinc-800 p-5 text-white">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">Services menu</p>
                        <h3 className="mt-1 text-2xl font-black">Build, launch, and support your software</h3>
                      </div>
                      <Link href="/services" onClick={closeMenus} className="rounded-full bg-teal-600 px-5 py-3 text-sm font-black text-white hover:bg-teal-700">View all</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {services.slice(0, 4).map((service) => (
                        <Link key={service.title} href="/services" onClick={closeMenus} className="flex gap-4 rounded-2xl border border-zinc-100 p-4 text-left transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50">
                          <Image src={service.icon} alt="" width={42} height={42} className="h-10 w-10 object-contain" />
                          <span>
                            <span className="block text-lg font-black text-zinc-950">{service.title}</span>
                            <span className="mt-1 block text-sm leading-6 text-zinc-600">{service.short}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/team" onClick={closeMenus} className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-zinc-100 hover:border-teal-300 hover:text-teal-300">Meet Team</Link>
          <Link href="/contact" onClick={closeMenus} className="rounded-full bg-teal-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-teal-600/25 hover:bg-teal-700">Get in Touch</Link>
        </div>

        <button type="button" className="focus-ring rounded-xl border border-white/20 px-3 py-2 text-2xl text-white lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
          {mobileOpen ? '×' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 bg-zinc-950/75 px-5 py-4 backdrop-blur-2xl lg:hidden">
            {pages.map((page) => (
              <Link key={page.id} href={page.href} onClick={closeMenus} className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left font-black ${isActive(page.href) ? 'bg-teal-600 text-white' : 'text-zinc-200 hover:bg-white/10'}`}>
                {page.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
