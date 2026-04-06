import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F1419",
        surface: "#1A2332",
        border: "#2A3544",
        foreground: "#F1F5F9",
        muted: "#94A3B8",
        primary: {
          DEFAULT: "#F97316",
          hover: "#FB923C",
        },
        success: "#22C55E",
        warning: "#EAB308",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "industrial-stripes":
          "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(249,115,22,0.03) 10px, rgba(249,115,22,0.03) 20px)",
      },
    },
  },
  plugins: [],
};

export default config;
