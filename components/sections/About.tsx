'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { about } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About Me" title="The story behind the code" />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl border border-border/60 bg-card/40 p-8">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-500/20" />
              <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line">{about.story}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Engineering Philosophy
                </h3>
                <p className="text-base leading-relaxed text-foreground/80">{about.philosophy}</p>
              </div>
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.03] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                  Problem-Solving Approach
                </h3>
                <p className="text-base leading-relaxed text-foreground/80">{about.approach}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: mindset cards */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              How I think
            </h3>
            {about.mindset.map((m) => (
              <motion.div
                key={m.title}
                variants={item}
                className="group rounded-2xl border border-border/60 bg-card/40 p-5 transition-all hover:border-blue-500/40 hover:bg-blue-500/[0.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{m.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
