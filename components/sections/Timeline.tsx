'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Code2, GraduationCap, Rocket, Trophy } from 'lucide-react';
import { timeline } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { cn } from '@/lib/utils';

const typeConfig: Record<string, { icon: any; color: string; ring: string }> = {
  hackathon: { icon: Trophy, color: 'text-amber-500', ring: 'from-amber-500/20 to-amber-600/5' },
  achievement: { icon: Rocket, color: 'text-blue-500', ring: 'from-blue-500/20 to-blue-600/5' },
  certification: { icon: Award, color: 'text-purple-500', ring: 'from-purple-500/20 to-purple-600/5' },
  project: { icon: Code2, color: 'text-emerald-500', ring: 'from-emerald-500/20 to-emerald-600/5' },
  learning: { icon: BookOpen, color: 'text-cyan-500', ring: 'from-cyan-500/20 to-cyan-600/5' },
  education: { icon: GraduationCap, color: 'text-rose-500', ring: 'from-rose-500/20 to-rose-600/5' },
};

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title="From first commit to hackathon podium"
          subtitle="A chronological view of what I've built, learned, and earned — all in under a year of focused effort."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-border to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const config = typeConfig[item.type] ?? typeConfig.project;
              const Icon = config.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={cn('relative pl-12 md:pl-0', isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]')}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 top-2 grid h-8 w-8 place-items-center rounded-full bg-background border-2 border-blue-500/40 md:-translate-x-1/2">
                    <div className={cn('h-2.5 w-2.5 rounded-full bg-blue-500', item.highlight && 'animate-pulse')} />
                  </div>

                  <div className={cn('group rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-blue-500/30 hover:-translate-y-0.5', isLeft ? 'md:text-right' : '')}>
                    <div className={cn('flex items-center gap-3 mb-3', isLeft && 'md:flex-row-reverse')}>
                      <div className={cn('grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br', config.ring, config.color)}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className={cn(isLeft && 'md:text-right')}>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.month} {item.year}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className={cn('mt-2 text-sm text-muted-foreground leading-relaxed', isLeft && 'md:text-right')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
