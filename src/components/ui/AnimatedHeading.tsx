"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedHeadingProps = {
  /** Wrap words in [[double brackets]] to render them in the accent style. */
  text: string;
  className?: string;
  accentClassName?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view. */
  onLoad?: boolean;
};

type Token = { word: string; accent: boolean; break: boolean };

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let inAccent = false;

  for (const raw of text.split(/\s+/).filter(Boolean)) {
    let word = raw;
    const opens = word.includes("[[");
    const closes = word.includes("]]");
    word = word.replace("[[", "").replace("]]", "");

    const forcesBreak = word.includes("//");
    word = word.replace("//", "");

    tokens.push({ word, accent: inAccent || opens, break: forcesBreak });

    if (opens) inAccent = true;
    if (closes) inAccent = false;
  }

  return tokens;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedHeading({
  text,
  className = "",
  accentClassName = "text-accent-deep italic",
  delay = 0,
  onLoad = false,
}: AnimatedHeadingProps) {
  const reduce = useReducedMotion();
  const tokens = tokenize(text);

  if (reduce) {
    return (
      <span className={className}>
        {tokens.map((t, i) => (
          <span key={i} className={t.accent ? accentClassName : undefined}>
            {t.word}
            {i < tokens.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  const activation = onLoad
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <motion.span
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      {...activation}
    >
      {tokens.map((t, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.16em] -mb-[0.16em] align-bottom">
            <motion.span
              variants={word}
              className={`inline-block ${t.accent ? accentClassName : ""}`}
            >
              {t.word}
            </motion.span>
          </span>
          {i < tokens.length - 1 && <span> </span>}
          {t.break && <br />}
        </span>
      ))}
    </motion.span>
  );
}
