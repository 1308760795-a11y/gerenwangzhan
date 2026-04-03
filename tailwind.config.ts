import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080d",
        mist: "#a7b2c7",
        line: "rgba(255,255,255,0.09)",
        panel: "rgba(12,16,28,0.68)",
        cyan: "#7ce8ff",
        gold: "#f6c88a",
        mint: "#89f4cd",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-space-grotesk)"],
      },
      boxShadow: {
        halo: "0 20px 80px rgba(0,0,0,0.35)",
        panel: "0 18px 70px rgba(0,0,0,0.32)",
      },
      animation: {
        "slow-pulse": "slowPulse 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.45" },
          "50%": { transform: "scale(1.08)", opacity: "0.7" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
