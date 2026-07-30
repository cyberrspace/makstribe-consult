"use client";

import { motion, useReducedMotion } from "framer-motion";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  delay?: number;
};

export default function Eyebrow({
  children,
  tone = "light",
  delay = 0,
}: EyebrowProps) {
  const reduce = useReducedMotion();
  const color = tone === "light" ? "text-accent-deep" : "text-accent-bright";
  const rule = tone === "light" ? "bg-accent-deep" : "bg-accent-bright";

  return (
    <motion.div
      className={`flex items-center gap-3 ${color}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span
        className={`block h-px ${rule}`}
        initial={{ width: reduce ? 28 : 0 }}
        whileInView={{ width: 28 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="label font-medium">{children}</span>
    </motion.div>
  );
}
