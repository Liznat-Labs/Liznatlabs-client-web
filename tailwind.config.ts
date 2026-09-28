import type { Config } from "tailwindcss";

// Liznat Labs palette: brand purple + cyan, with the purple→cyan hero gradient.
const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFB",
        surface: "#F5F5F5",
        lilac: "#F2EDFF",
        ice: "#E8F6FA",
        mist: "#EEF0FF",
        brand: "#6D28D9",
        "brand-dk": "#4C1D95",
        "brand-lt": "#C4B5FD",
        cyan: "#0891B2",
        "cyan-dk": "#0E7490",
        indigo: "#4F46E5",
        ink: "#0A0A0A",
        "ink-soft": "#52525B",
        line: "#E4E4EA",
        night: "#0B0B12",
        danger: "#B42318",
        // Aliases used by the legal pages
        cream: "#0A0A0A",
        accent: "#6D28D9",
        muted: "#52525B",
        bg: "#FAFAFB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        fraunces: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "16px" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        flow: { from: { strokeDashoffset: "24" }, to: { strokeDashoffset: "0" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        flow: "flow 1.2s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
