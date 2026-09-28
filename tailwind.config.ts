import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060A",
        "bg-2": "#0A0C14",
        pearl: "#F4F6FB",
        "pearl-dim": "#AAB1C4",
        muted: "#7A8299",
        blue: "#3D7CFF",
        "blue-bright": "#6AA8FF",
        chrome: "#C8D0E0",
        // Aliases kept for the legal pages
        cream: "#F4F6FB",
        accent: "#6AA8FF",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "ui-monospace", "monospace"],
        fraunces: ["var(--font-sora)", "system-ui", "sans-serif"],
        geist: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1280px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "scroll-line": "scroll-line 2.2s cubic-bezier(.65,.05,.36,1) infinite",
        "pulse-soft": "pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
