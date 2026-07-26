'use client';

import { motion } from 'framer-motion';

interface FloatingShape {
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  color: string;
  blur?: boolean;
}

const shapes: FloatingShape[] = [
  { size: 380, top: '8%', left: '12%', delay: 0, duration: 22, color: 'from-blue-500/20 to-blue-600/5', blur: true },
  { size: 280, top: '20%', left: '75%', delay: 2, duration: 26, color: 'from-purple-500/20 to-purple-600/5', blur: true },
  { size: 220, top: '55%', left: '85%', delay: 1, duration: 24, color: 'from-blue-400/15 to-blue-500/5', blur: true },
  { size: 160, top: '70%', left: '20%', delay: 3, duration: 28, color: 'from-purple-400/15 to-purple-500/5', blur: true },
];

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} ${shape.blur ? 'blur-3xl' : ''}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          color: 'hsl(var(--foreground))',
        }}
      />
    </div>
  );
}
