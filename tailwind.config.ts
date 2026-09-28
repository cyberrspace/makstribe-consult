import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#161B2E",
          deep: "#0B0E1B",
          soft: "#242B47",
          line: "#3C4569",
        },
        paper: {
          DEFAULT: "#F7F4EE",
          raised: "#FFFFFF",
          sunk: "#ECE7DA",
        },
        accent: {
          DEFAULT: "#B85C2E",
          deep: "#8F4620",
          soft: "#F2DFC7",
          bright: "#DE8C4E",
        },
        rule: "#E4DECE",
        muted: "#6B6559",
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
