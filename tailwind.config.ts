import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF7",
        sky: "#E4F0F3",
        soft: "#FAFEED",
        pink: "#FFD4D1",
        coral: "#E37C78",
        "coral-tx": "#D95F5B",
        "coral-dp": "#B8332D",
        red: "#D33A33",
        teal: "#006078",
        "teal-dk": "#004858",
        "teal-lt": "#82BAC4",
        ink: "#17343D",
        "ink-soft": "#354A53",
        obsidian: "#05060A",
        line: "#CFE0E5",
        // Aliases used by the legal pages
        cream: "#17343D",
        accent: "#006078",
        muted: "#354A53",
        bg: "#FAFAF7",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "ui-monospace", "monospace"],
        fraunces: ["var(--font-sora)", "system-ui", "sans-serif"],
        geist: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "18px" },
      keyframes: {
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        twinkle: { "0%,100%": { opacity: "0.25", transform: "scale(0.8)" }, "50%": { opacity: "1", transform: "scale(1)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "scroll-line": "scroll-line 2.2s cubic-bezier(.65,.05,.36,1) infinite",
        float: "float 7s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
