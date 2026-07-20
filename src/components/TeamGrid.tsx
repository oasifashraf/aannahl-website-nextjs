'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { TeamMember } from '@/data/siteData';

type TeamGridProps = {
  members: TeamMember[];
};

export default function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedMember) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMember(null);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [selectedMember]);

  return (
    <>
      <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.button
            key={member.name}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setSelectedMember(member);
            }}
            whileTap={{ scale: 0.98 }}
            aria-label={`View ${member.name}'s profile`}
            className={`card-hover group overflow-hidden rounded-[2.3rem] border border-orange-100 bg-white text-left shadow-xl shadow-orange-100/70 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-4 ${index === 1 || index === 4 ? 'lg:mt-10' : ''}`}
          >
            <span className="relative block bg-gradient-to-br from-orange-50 via-white to-zinc-100 p-8 text-center">
              <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow">Team</span>
              <Image src={member.image} alt={`${member.name} - ${member.role}`} width={180} height={180} className="mx-auto h-44 w-44 rounded-full object-cover shadow-2xl shadow-orange-200/70 transition group-hover:scale-105" />
            </span>
            <span className="block p-7">
              <span className="block text-2xl font-black text-zinc-950">{member.name}</span>
              <span className="mt-1 block font-black text-orange-600">{member.role}</span>
              <span className="mt-4 block leading-7 text-zinc-600">{member.bio}</span>
              <span className="mt-6 inline-flex rounded-full bg-zinc-950 px-6 py-3 font-black text-white transition group-hover:-translate-y-1 group-hover:bg-orange-500">View Profile</span>
            </span>
          </motion.button>
        ))}
      </div>

      {typeof document !== 'undefined' && createPortal(<AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedMember(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-member-name"
              aria-describedby="team-member-bio"
              className="relative w-full max-w-xl overflow-hidden rounded-[2.3rem] bg-white shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label="Close profile"
                className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-bold text-zinc-950 shadow-lg transition hover:rotate-90 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400"
              >
                &times;
              </button>

              <div className="bg-gradient-to-br from-orange-50 via-white to-zinc-100 px-8 pb-7 pt-10 text-center">
                <Image src={selectedMember.image} alt={`${selectedMember.name} - ${selectedMember.role}`} width={220} height={220} className="mx-auto h-52 w-52 rounded-full object-cover shadow-2xl shadow-orange-200/70" />
              </div>
              <div className="p-8 text-center sm:p-10">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">Our Team</span>
                <h2 id="team-member-name" className="mt-2 text-3xl font-black text-zinc-950">{selectedMember.name}</h2>
                <p className="mt-1 text-lg font-black text-orange-600">{selectedMember.role}</p>
                <p id="team-member-bio" className="mx-auto mt-5 max-w-md leading-7 text-zinc-600">{selectedMember.bio}</p>
                <Link href="/contact" className="mt-7 inline-flex rounded-full bg-zinc-950 px-7 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-orange-500">
                  Contact Team
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  );
}
