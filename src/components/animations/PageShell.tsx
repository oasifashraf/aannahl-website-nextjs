'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export default function PageShell({ children }: PropsWithChildren) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
