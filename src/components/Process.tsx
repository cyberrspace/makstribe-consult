"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site";
import Eyebrow from "./ui/Eyebrow";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-paper-raised py-24 sm:py-32"
    >
      <div className="shell">
        <Eyebrow>How we work</Eyebrow>

        <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          <AnimatedHeading text="A straightforward process, // designed around your project." />
        </h2>

        <div className="relative mt-20">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-px origin-left bg-rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + i * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative pt-9"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-expo group-hover:w-full" />

                <div className="font-display text-[44px] font-semibold leading-none tracking-[-0.04em] text-accent">
                  {step.number}
                </div>

                <h3 className="mt-5 font-display text-[19px] font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
