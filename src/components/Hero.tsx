"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import AnimatedHeading from "./ui/AnimatedHeading";
import CTAButton from "./ui/CTAButton";
import ScopeCard from "./ScopeCard";

const stats = [
  { value: "5", label: "Service lines" },
  { value: "Global", label: "Client coverage" },
  { value: "Project", label: "-based delivery" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper-raised pt-[130px] sm:pt-[150px]">
      {/* ambient field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(60%_60%_at_78%_18%,rgba(194,99,46,0.12),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:radial-gradient(rgb(var(--ink))_0.7px,transparent_0.7px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.16),transparent_70%)]"
      />

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.div
              className="flex items-center gap-3 text-accent-deep"
              {...fade(0.05)}
            >
              <motion.span
                className="block h-px bg-accent-deep"
                initial={{ width: reduce ? 28 : 0 }}
                animate={{ width: 28 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="label font-medium">Multi-service digital agency</span>
            </motion.div>

            <h1 className="display mt-7 text-[clamp(2.6rem,6.2vw,4.6rem)]">
              <AnimatedHeading
                text="Finished work for // businesses [[serious about growth.]]"
                onLoad
                delay={0.2}
                accentClassName="text-accent"
              />
            </h1>

            <motion.p
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted"
              {...fade(0.75)}
            >
              {site.name} helps founders, authors and small businesses win online —
              through digital marketing, web development, grant applications, resume
              optimization and book publishing. One team. Five disciplines. Zero fluff.
            </motion.p>

            <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.88)}>
              <CTAButton href="#contact" variant="solid">
                Start a project
              </CTAButton>
              <CTAButton href="#services" variant="outline">
                See what we do
              </CTAButton>
            </motion.div>

            <motion.div
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-rule pt-8"
              {...fade(1.0)}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-[28px]">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:pl-4">
            <ScopeCard />
          </div>
        </div>
      </div>

      <div className="shell mt-24 sm:mt-28">
        <div className="h-px w-full bg-rule" />
      </div>
    </section>
  );
}
