'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div variants={container} initial="hidden" animate="visible" className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div>
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-foreground/80">Available for internship opportunities</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
              Hi, I&apos;m <span className="text-gradient-blue">Sujith E</span>
            </motion.h1>

            <motion.p variants={item} className="mt-5 text-xl md:text-2xl font-medium text-muted-foreground">
              {siteConfig.role}
            </motion.p>

            <motion.p variants={item} className="mt-6 text-lg text-muted-foreground/90 max-w-xl leading-relaxed">
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
              <a
                href={siteConfig.resumeUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-5">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Find me on</span>
              <div className="h-px flex-1 max-w-[40px] bg-border" />
              <div className="flex items-center gap-2">
                {[
                  { href: siteConfig.github, icon: Github, label: 'GitHub' },
                  { href: siteConfig.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${siteConfig.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: profile visual */}
          <motion.div variants={item} className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] border border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-6 rounded-[2rem] border border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile placeholder card */}
              <div className="absolute inset-12 rounded-[1.75rem] bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10 border border-border/60 overflow-hidden glass-card">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-4xl font-bold text-white shadow-2xl shadow-blue-500/30">
                      SE
                    </div>
                    <p className="text-sm font-medium text-foreground">Sujith E</p>
                    <p className="text-xs text-muted-foreground">PSG College of Technology</p>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                      <Sparkles className="h-3 w-3" />
                      B.E. CSE · First Year
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 rounded-xl glass-card px-3 py-2 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-bold text-foreground">9+ Projects</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 rounded-xl glass-card px-3 py-2 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-xs font-bold text-foreground">AI Builder</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
