import Image from 'next/image';
import Link from 'next/link';
import { whyChooseUs } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeWhyChoose() {
  return (
    <MotionSection className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Why Choose Aan Nahl</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">We build digital products with purpose and precision.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Our team focuses on clear planning, clean design, strong development, and dependable support. Every project is built to solve a real business problem.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-orange-500 px-7 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-zinc-950">Discuss Your Project</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <article key={item.title} className="card-hover rounded-[2rem] border border-zinc-100 bg-[#fff7eb] p-7 shadow-lg shadow-orange-100/70">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">{index + 1}</span>
                <Image src={item.icon} alt="" width={54} height={54} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-zinc-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
