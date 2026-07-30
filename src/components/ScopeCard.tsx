"use client";

import { motion, useReducedMotion } from "framer-motion";

const rows = [
  { term: "Scope", value: "Written before we start" },
  { term: "Timeline", value: "Agreed, in writing" },
  { term: "Deliverable", value: "Yours to keep" },
  { term: "Invoice", value: "One, up front" },
];

const BASE_DELAY = 0.55;

export default function ScopeCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl bg-ink p-8 shadow-[0_40px_80px_-40px_rgba(12,31,38,0.55)] sm:p-10"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
      />

      {/* monogram watermark */}
      <motion.span
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.86 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-14 -right-4 select-none font-display text-[240px] font-bold leading-none text-white"
      >
        M
      </motion.span>

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="label text-accent-bright">Statement of work</span>
          <span className="label text-white/35">MTC / 2026</span>
        </div>

        <motion.div
          className="mt-6 h-px origin-left bg-white/15"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: BASE_DELAY, ease: [0.22, 1, 0.36, 1] }}
        />

        <dl className="mt-6 space-y-0">
          {rows.map((row, i) => (
            <motion.div
              key={row.term}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: BASE_DELAY + 0.12 + i * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-baseline justify-between gap-6 border-b border-white/[0.07] py-3.5 last:border-b-0"
            >
              <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/45">
                {row.term}
              </dt>
              <dd className="text-right text-[15px] text-white/90">{row.value}</dd>
            </motion.div>
          ))}
        </dl>

        <motion.div
          className="mt-6 h-px origin-left bg-white/15"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: BASE_DELAY + 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: BASE_DELAY + 0.68 }}
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse-dot" />
            <span className="label text-white/60">Accepting new projects</span>
          </span>
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: BASE_DELAY + 0.8 }}
          className="mt-4 font-display text-lg font-medium leading-snug text-white"
        >
          Built to deliver — designed to convert.
        </motion.p>
      </div>
    </motion.div>
  );
}
