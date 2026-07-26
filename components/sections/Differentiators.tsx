'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { differentiators } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function Differentiators() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="What Makes Me Different"
          title="Why you'd want me on your team"
          subtitle="These aren't soft skills listed on a slide. Each one is backed by a specific project or decision in the sections above."
        />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {differentiators.map((d) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[d.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={d.title}
                variants={card}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-blue-500/40 hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
