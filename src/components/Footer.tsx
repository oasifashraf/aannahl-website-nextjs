import Image from 'next/image';
import Link from 'next/link';
import { pages, services } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-[7%]">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src="/assets/logo-white.png" alt="Aan Nahl" width={180} height={60} className="mb-6 h-14 w-auto" />
          <h3 className="text-3xl font-black">Design. Develop. Inspire.</h3>
          <p className="mt-4 max-w-xl leading-8 text-zinc-400">
            Aan Nahl is a software company focused on web applications, mobile applications, UI/UX design, dedicated teams, and support.
          </p>
          <Link href="/contact" className="mt-7 inline-block rounded-full bg-teal-600 px-7 py-3 font-black text-white shadow-lg shadow-teal-950/20 transition hover:-translate-y-1 hover:bg-teal-500">
            Start a New Project
          </Link>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-orange-400">Pages</h4>
          <div className="grid gap-3">
            {pages.map((page) => (
              <Link key={page.id} href={page.href} className="text-left font-bold text-zinc-300 hover:text-orange-300">
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-orange-400">Services</h4>
          <div className="grid gap-3">
            {services.map((service) => (
              <Link key={service.title} href="/services" className="text-left font-bold text-zinc-300 hover:text-orange-300">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <span>© Aan Nahl. All rights reserved.</span>
        <span>info@aan-nahl.com | +88 01624555544</span>
      </div>
    </footer>
  );
}
