'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';

const colorMap: Record<string, { bg: string; text: string; border: string; chip: string }> = {
  blue: { bg: 'from-blue-500/10 to-blue-600/5', text: 'text-blue-600 dark:text-blue-400', border: 'group-hover:border-blue-500/40', chip: 'bg-blue-500/10 text-blue-700 dark:text-blue-300' },
  purple: { bg: 'from-purple-500/10 to-purple-600/5', text: 'text-purple-600 dark:text-purple-400', border: 'group-hover:border-purple-500/40', chip: 'bg-purple-500/10 text-purple-700 dark:text-purple-300' },
  green: { bg: 'from-emerald-500/10 to-emerald-600/5', text: 'text-emerald-600 dark:text-emerald-400', border: 'group-hover:border-emerald-500/40', chip: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' },
  orange: { bg: 'from-orange-500/10 to-orange-600/5', text: 'text-orange-600 dark:text-orange-400', border: 'group-hover:border-orange-500/40', chip: 'bg-orange-500/10 text-orange-700 dark:text-orange-300' },
  cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', text: 'text-cyan-600 dark:text-cyan-400', border: 'group-hover:border-cyan-500/40', chip: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300' },
  yellow: { bg: 'from-amber-500/10 to-amber-600/5', text: 'text-amber-600 dark:text-amber-400', border: 'group-hover:border-amber-500/40', chip: 'bg-amber-500/10 text-amber-700 dark:text-amber-300' },
  red: { bg: 'from-rose-500/10 to-rose-600/5', text: 'text-rose-600 dark:text-rose-400', border: 'group-hover:border-rose-500/40', chip: 'bg-rose-500/10 text-rose-700 dark:text-rose-300' },
  teal: { bg: 'from-teal-500/10 to-teal-600/5', text: 'text-teal-600 dark:text-teal-400', border: 'group-hover:border-teal-500/40', chip: 'bg-teal-500/10 text-teal-700 dark:text-teal-300' },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="The full toolkit"
          subtitle="From HTTP-level server code to AI prompt engineering. Every layer of the stack, learned by building."
        />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon] ?? Icons.Code2;
            const c = colorMap[skill.color] ?? colorMap.blue;
            return (
              <motion.div
                key={skill.category}
                variants={card}
                className={`group rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:-translate-y-1 ${c.border}`}
              >
                <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.bg} ${c.text}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className={`rounded-md px-2 py-1 text-xs font-medium ${c.chip}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
