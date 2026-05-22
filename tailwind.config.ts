import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030309",
        surface: "#0C0C18",
        cream: "#EDEEFF",
        muted: "#5E5E80",
        "border-line": "#1E1E32",
        accent: "#E96E33",
        "accent-2": "#00E5FF",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "var(--font-jetbrains-mono)", "monospace"],
      },
      screens: {
        xs: "375px", sm: "640px", md: "768px",
        lg: "1024px", xl: "1280px", "2xl": "1440px",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":       { opacity: "0.4", transform: "scale(0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
