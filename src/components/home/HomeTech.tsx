import Image from 'next/image';
import Link from 'next/link';
import { techLogos } from '@/data/siteData';
import MotionSection from '@/components/animations/MotionSection';

export default function HomeTech() {
  // Duplicate the tech logos array for seamless looping
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <MotionSection className="section-pad">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-2xl md:p-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">Key Tech Expertise</span>
            <h2 className="mt-3 text-4xl font-black">Tools we work with</h2>
          </div>
          <Link href="/portfolio" className="w-fit rounded-full bg-teal-600 px-7 py-3 font-black text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-teal-700">See our work</Link>
        </div>
        <div className="scroll-left-container">
          <div className="scroll-left-content gap-4">
            {duplicatedLogos.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="group flex-shrink-0 grid h-28 w-40 place-items-center rounded-3xl bg-white p-5 transition hover:shadow-glow">
                <Image src={tech.image} alt={tech.name} width={120} height={80} className="max-h-16 max-w-full object-contain transition group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
