'use client';

import { motion } from 'framer-motion';

type FloatingGlowProps = {
  className?: string;
};

export default function FloatingGlow({ className = '' }: FloatingGlowProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{ x: [0, 24, -18, 0], y: [0, -20, 18, 0], scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
