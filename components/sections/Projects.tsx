'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Github, Lightbulb, Wrench, Cpu, CheckCircle2, X } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { cn } from '@/lib/utils';

const badgeColor: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  green: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  orange: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  cyan: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  teal: 'bg-teal-500/10 text-teal-700 dark:text-teal-300',
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Built, not just studied"
          subtitle="Each project started with a real problem. Click any project to see the full case study — problem, architecture, and engineering decisions."
        />

        {/* Featured projects */}
        <div className="space-y-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={cn(
                'group relative grid lg:grid-cols-2 gap-8 rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8 transition-all hover:border-blue-500/30',
                i % 2 === 1 && 'lg:[direction:rtl]'
              )}
            >
              {/* Image */}
              <div className={cn('relative aspect-[16/10] overflow-hidden rounded-2xl', i % 2 === 1 && 'lg:[direction:ltr]')}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={cn('absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md', badgeColor[project.color])}>
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className={cn('flex flex-col justify-center', i % 2 === 1 && 'lg:[direction:ltr]')}>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2">{project.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs font-medium text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                  >
                    View Case Study
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-blue-500/40"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:text-foreground hover:border-blue-500/40"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">More work</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group text-left rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-blue-500/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={cn('rounded-full px-2.5 py-1 text-xs font-semibold', badgeColor[project.color])}>
                    {project.badge}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground">{project.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{tech}</span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl border border-border bg-background p-6 md:p-10 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">{selected.subtitle}</p>
              <h3 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{selected.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{selected.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80">{tech}</span>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <DetailBlock icon={Lightbulb} color="text-amber-500" title="Problem" body={selected.problem} />
                <DetailBlock icon={Wrench} color="text-blue-500" title="Solution" body={selected.solution} />
                <DetailBlock icon={Cpu} color="text-purple-500" title="Architecture" body={selected.architecture} />
                <DetailBlock icon={CheckCircle2} color="text-emerald-500" title="Challenges" body={selected.challenges} />

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Features</h4>
                  <ul className="grid gap-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-blue-500/40"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DetailBlock({ icon: Icon, color, title, body }: { icon: any; color: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={cn('h-4 w-4', color)} />
        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
