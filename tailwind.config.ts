import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          dark: "rgb(var(--color-accent-dark) / <alpha-value>)",
        },
        stone: "rgb(var(--color-stone) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        footer: "rgb(var(--color-footer-bg) / <alpha-value>)",
        overlay: "rgb(var(--color-overlay) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        carouselInRight: {
          from: { opacity: "0", transform: "translateX(12%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        carouselInLeft: {
          from: { opacity: "0", transform: "translateX(-12%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        carouselOutLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-12%)" },
        },
        carouselOutRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(12%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        carouselInRight: "carouselInRight 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        carouselInLeft: "carouselInLeft 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        carouselOutLeft: "carouselOutLeft 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        carouselOutRight: "carouselOutRight 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
