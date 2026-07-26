'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('mb-16', centered && 'text-center', className)}
    >
      {eyebrow && (
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500">{eyebrow}</span>
          <div className="h-px w-8 bg-blue-500" />
        </motion.div>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn('mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed', centered && 'mx-auto')}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
