import Image from 'next/image';
import Link from 'next/link';
import { processSteps } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeProcess() {
  return (
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
            <article key={step.title} className="card-hover group relative isolate aspect-square w-full overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-2xl shadow-slate-300/50">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 1280px) 405px, (min-width: 768px) 31vw, 100vw"
                className={`object-cover transition duration-700 ease-out group-hover:scale-110 ${
                  index === 0 ? 'object-[62%_center]' : index === 1 ? 'object-center' : 'object-[48%_center]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950/95 transition duration-500 group-hover:from-slate-950/5 group-hover:via-slate-950/45" />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/35 via-transparent to-orange-400/10 opacity-80" />

              <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/15 text-sm font-black text-white shadow-lg backdrop-blur-md">
                0{index + 1}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-orange-300">Step 0{index + 1}</span>
                <h3 className="mt-2 text-2xl font-black leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{step.text}</p>
                <span className="mt-5 block h-1 w-12 rounded-full bg-teal-400 transition-all duration-500 group-hover:w-full group-hover:bg-orange-400" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
