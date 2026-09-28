"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ThemeToggleProps = { tone?: "light" | "dark"; className?: string };

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-[17px] w-[17px]"
    >
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
      <path d="M20.6 15.3a8.6 8.6 0 0 1-10.9-10.9 1 1 0 0 0-1.3-1.2A10.6 10.6 0 1 0 21.8 16.6a1 1 0 0 0-1.2-1.3Z" />
    </svg>
  );
}

export default function ThemeToggle({ tone = "light", className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme just won't persist */
    }
  }

  const styles =
    tone === "light"
      ? "border-ink/15 text-ink hover:border-ink/40"
      : "border-white/25 text-white hover:border-white/60";

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={`inline-block h-9 w-9 rounded-full border ${styles} ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors duration-300 ${styles} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -70, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.5 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
