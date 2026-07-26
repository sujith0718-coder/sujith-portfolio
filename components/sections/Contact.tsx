'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/data';
import { SectionHeader } from '@/components/common/SectionHeader';

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Open to internship opportunities, collaboration on AI or full-stack projects, or a conversation about what I'm building next."
        />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1.3fr_1fr] gap-4"
        >
          {/* CTA card */}
          <motion.div variants={card} className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-card/40 to-purple-500/[0.06] p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Available now</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Ready for my next problem to solve.
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
                If you're hiring for an internship where ownership, curiosity, and a bias to ship matter more than years of experience — let's talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-blue-500/40"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact details */}
          <motion.div variants={card} className="space-y-3">
            {[
              { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Linkedin, label: 'LinkedIn', value: 'Sujith E', href: siteConfig.linkedin },
              { icon: Github, label: 'GitHub', value: 'sujith0718-coder', href: siteConfig.github },
              { icon: MapPin, label: 'Location', value: siteConfig.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 transition-all hover:border-blue-500/30"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                </div>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground opacity-0 group-hover:opacity-100 transition-all hover:text-blue-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
