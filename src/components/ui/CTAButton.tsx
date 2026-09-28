"use client";

import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "accent" | "ghost-dark";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 ease-expo";

const variants: Record<Variant, string> = {
  solid:
    "bg-night text-white hover:bg-night-soft hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(22,27,46,0.55)]",
  outline:
    "border border-ink/20 text-ink hover:border-ink/60 hover:-translate-y-0.5 hover:bg-ink/[0.03]",
  accent:
    "bg-accent text-white hover:bg-accent-deep hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(194,99,46,0.7)]",
  "ghost-dark":
    "border border-white/25 text-white hover:border-white/70 hover:-translate-y-0.5 hover:bg-white/5",
};

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
    >
      &rarr;
    </span>
  );
}

export default function CTAButton({
  href,
  children,
  variant = "solid",
  type = "button",
  disabled,
  className = "",
  onClick,
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0`}
    >
      {children}
      <Arrow />
    </button>
  );
}
