'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

const testimonials = [
  {
    quote:
      'Sujith approaches problems the way experienced engineers do — he starts with the user, works backward to the architecture, and ships. Rare to see that mindset in a first-year student.',
    name: 'Project Mentor',
    role: 'Hackathon Review',
    initials: 'PM',
  },
  {
    quote:
      'When the rest of the team was still discussing which framework to pick, Sujith had a working prototype deployed on Cloud Run. His bias toward action is genuine.',
    name: 'Hackathon Teammate',
    role: '24-hour Build',
    initials: 'HT',
  },
  {
    quote:
      'His code is clean, his commits tell a story, and he documents his reasoning. You can trace how he thinks by reading his GitHub history.',
    name: 'Peer Developer',
    role: 'Code Review',
    initials: 'PD',
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What collaborators say"
          subtitle="Representative feedback from hackathon teammates, project mentors, and peer developers."
        />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="relative rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-blue-500/30"
            >
              <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
              <p className="text-sm leading-relaxed text-foreground/80 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
