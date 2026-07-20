'use client';

import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="mr-3 inline-block"
          initial={{ opacity: 0, y: 36, rotateX: -35 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.65, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
