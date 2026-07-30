"use client";

import { motion } from "framer-motion";
import { principles, site } from "@/lib/site";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow tone="dark">About {site.shortName}</Eyebrow>

            <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.25rem)]">
              <AnimatedHeading
                text="A focused team, built // around outcomes."
                accentClassName="text-accent-bright"
              />
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-7 text-[17px] leading-relaxed text-white/65">
                {site.name} exists because most agencies sell hours. We sell{" "}
                <span className="font-display italic text-accent-bright">
                  finished work
                </span>
                . Every engagement is a defined project with a clear deliverable —
                priced up front, delivered on time, and built to outlast the engagement.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 text-[17px] leading-relaxed text-white/65">
                We work with clients globally — founders launching, authors publishing,
                professionals levelling up, and small businesses that need real digital
                infrastructure without the overhead of a full agency relationship.
              </p>
            </Reveal>
          </div>

          <div className="lg:pt-4">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-t border-white/10 py-7 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-7"
              >
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
