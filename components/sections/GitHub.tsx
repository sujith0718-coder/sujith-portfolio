'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {GitHubCalendar} from "react-github-calendar";
import { Github, GitFork, Star, ArrowUpRight, GitCommit } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { siteConfig, additionalProjects, certifications } from '@/lib/data';

const langBars = [
  { lang: 'JavaScript', pct: 38, color: 'bg-yellow-400' },
  { lang: 'Python', pct: 30, color: 'bg-blue-400' },
  { lang: 'HTML/CSS', pct: 18, color: 'bg-orange-400' },
  { lang: 'TypeScript', pct: 9, color: 'bg-sky-500' },
  { lang: 'C', pct: 5, color: 'bg-slate-400' },
];

// Simulated contribution heatmap (52 weeks x 7 days)
/*const contributionData = Array.from({ length: 52 * 7 }, (_, i) => {
  const seed = (i * 7 + 13) % 23;
  if (seed < 5) return 0;
  if (seed < 10) return 1;
  if (seed < 15) return 2;
  if (seed < 19) return 3;
  return 4;
});

const intensityClasses = [
  'bg-muted/40',
  'bg-blue-500/20',
  'bg-blue-500/40',
  'bg-blue-500/70',
  'bg-blue-500',
];*/

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function GitHub() {
  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="GitHub"
          title="Code, in public"
          subtitle="Every project is open source. The commit history, the iterations, the mistakes — all visible."
        />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-4"
        >
          {/* Stats */}
          <motion.div variants={card} className="lg:col-span-1 space-y-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-blue-500/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <Github className="h-7 w-7 text-foreground" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">GitHub Profile</p>
              <p className="text-lg font-semibold text-foreground">sujith0718-coder</p>
            </a>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: GitCommit, label: 'Commits', value: '120+' },
                { icon: Star, label: 'Stars', value: '12+' },
                { icon: GitFork, label: 'Repos', value: '9+' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border/60 bg-card/40 p-4 text-center">
                  <Icon className="mx-auto h-4 w-4 text-blue-500 mb-2" />
                  <p className="text-lg font-bold text-foreground">{value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Most used languages</h3>
              <div className="flex h-2.5 overflow-hidden rounded-full mb-4">
                {langBars.map((l) => (
                  <div key={l.lang} className={l.color} style={{ width: `${l.pct}%` }} />
                ))}
              </div>
              <div className="space-y-2">
                {langBars.map((l) => (
                  <div key={l.lang} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className={`h-2.5 w-2.5 rounded-sm ${l.color}`} />
                      {l.lang}
                    </span>
                    <span className="font-medium text-foreground">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contribution graph + pinned repos */}
          <motion.div variants={card} className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">Contribution activity</h3>
                <span className="text-xs text-muted-foreground">Last 12 months</span>
              </div>
              {/* <div className="flex gap-[3px] overflow-x-auto pb-2">
                {Array.from({ length: 52 }).map((_, week) => (
                  <div key={week} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, day) => {
                      const idx = week * 7 + day;
                      const level = contributionData[idx] ?? 0;
                      return (
                        <div
                          key={day}
                          className={`h-[10px] w-[10px] rounded-sm ${intensityClasses[level]}`}
                          title={`${level} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
                <span>Less</span>
                {intensityClasses.map((c, i) => (
                  <span key={i} className={`h-[10px] w-[10px] rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>*/}
              <GitHubCalendar
             username="sujith0718-coder"
             colorScheme="dark"
             blockSize={12}
             blockMargin={4}
             fontSize={14}
           />

            </div>

            {/* Pinned repositories */}
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Pinned repositories</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {additionalProjects.map((repo) => (
                  <a
                    key={repo.title}
                    href={repo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-border/60 bg-background/40 p-4 transition-all hover:border-blue-500/40"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Github className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="font-medium text-foreground text-sm">{repo.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{repo.stack}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-6"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Certifications & courses completed</h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span key={cert.title} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {cert.title}
                <span className="text-muted-foreground">· {cert.issuer} · {cert.year}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
