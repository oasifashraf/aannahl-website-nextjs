'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type MotionSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function MotionSection({ children, className = '', delay = 0 }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
