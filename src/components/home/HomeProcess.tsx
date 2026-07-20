import Image from 'next/image';
import Link from 'next/link';
import { processSteps } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeProcess() {
  return (
    <MotionSection className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">How we work</span>
          <h2 className="mt-3 text-4xl font-black text-zinc-950 md:text-5xl">From planning to working software</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Our process is simple: assign the right team, work in agile cycles, and deliver usable software that supports your business.</p>
          <Link href="/about" className="mt-8 inline-flex rounded-full bg-teal-600 px-7 py-3 font-black text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-zinc-950">Learn about us</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="card-hover rounded-[2rem] bg-[#fff7eb] p-5 text-center shadow-lg shadow-orange-100/70">
              <Image src={step.image} alt={step.title} width={420} height={300} className="mx-auto h-44 w-full rounded-2xl object-contain" />
              <span className="mt-4 block text-sm font-black text-orange-600">0{index + 1}</span>
              <h3 className="mt-2 text-xl font-black text-zinc-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
