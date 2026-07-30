import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C1F26",
          deep: "#081619",
          soft: "#143038",
          line: "#22424A",
        },
        paper: {
          DEFAULT: "#F4F6F5",
          raised: "#FFFFFF",
          sunk: "#E9EDEB",
        },
        accent: {
          DEFAULT: "#0E8A6A",
          deep: "#0A6E55",
          soft: "#D9EFE7",
          bright: "#3FBF97",
        },
        rule: "#DCE2E0",
        muted: "#5C6B6F",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        shell: "1200px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
