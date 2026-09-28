"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/site";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import AnimatedHeading from "./ui/AnimatedHeading";
import CTAButton from "./ui/CTAButton";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <Eyebrow>What we do</Eyebrow>

        <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          <AnimatedHeading text="Five disciplines, // one standard of work." />
        </h2>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            Every service is delivered as a defined project with clear scope, timelines
            and outcomes. You see exactly what you are paying for — and exactly what you
            are getting back.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{
                opacity: { duration: 0.65, delay: (i % 3) * 0.09, ease: [0.22, 1, 0.36, 1] },
                y: { type: "spring", stiffness: 300, damping: 22 },
                scale: { type: "spring", stiffness: 300, damping: 22 },
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper-raised p-7 transition-colors duration-500 ease-expo hover:border-accent/35 hover:shadow-[0_28px_60px_-32px_rgba(22,27,46,0.35)]"
            >
              <span className="absolute inset-x-0 top-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-expo group-hover:w-full" />
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.span
                className="relative font-mono text-[13px] font-medium text-accent-deep"
                whileHover={{ scale: 1.15, x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                {service.number}
              </motion.span>

              <h3 className="relative mt-5 font-display text-[22px] font-semibold tracking-[-0.02em]">
                {service.title}
              </h3>

              <p className="relative mt-3 text-[15px] leading-relaxed text-muted">
                {service.blurb}
              </p>

              <div className="relative my-6 h-px w-full bg-rule" />

              <ul className="relative mt-auto space-y-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[14px] text-ink/80"
                  >
                    <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          {/* Fit card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{
              opacity: { duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
              y: { type: "spring", stiffness: 300, damping: 22 },
              scale: { type: "spring", stiffness: 300, damping: 22 },
            }}
            className="relative flex flex-col overflow-hidden rounded-2xl bg-night p-8 text-white"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
            />
            <span className="relative label text-accent-bright">Not sure yet</span>
            <h3 className="relative mt-5 font-display text-[24px] font-semibold tracking-[-0.02em]">
              Not sure which fits?
            </h3>
            <p className="relative mt-4 text-[15px] leading-relaxed text-white/70">
              Tell us what you are trying to achieve. We will tell you which mix of
              services gets you there fastest — or honestly tell you if we are not the
              right fit.
            </p>
            <div className="relative mt-8">
              <CTAButton href="#contact" variant="accent">
                Talk to us
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
