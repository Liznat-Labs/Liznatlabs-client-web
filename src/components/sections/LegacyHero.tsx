"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroContent, type HeadlineLine } from "@/content/site";

// Original Liznat Labs hero, kept as-is. Fonts: Plus Jakarta Sans (headline) and Geist (body).
const JAKARTA = "var(--font-jakarta), system-ui, sans-serif";
const GEIST = "var(--font-geist-sans), system-ui, sans-serif";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillBtn({
  label,
  onClick,
  primary = false,
  href,
}: {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  href?: string;
}) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "9999px",
    padding: "0.85rem 1.85rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.01em",
    cursor: "pointer",
    transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    textDecoration: "none",
    border: primary ? "2px solid #0A0A0A" : "2px solid rgba(10,10,10,0.35)",
    background: primary ? "#0A0A0A" : "rgba(255,255,255,0.75)",
    color: primary ? "#FFFFFF" : "#0A0A0A",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  const inner = (
    <>
      <span
        style={{ display: "inline-block", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        className="group-hover:-translate-x-0.5"
      >
        {label}
      </span>
      <span
        style={{ display: "inline-flex", alignItems: "center", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        className="group-hover:translate-x-0.5"
      >
        <ArrowRight />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group"
        style={base}
        onClick={(e) => {
          if (!href.startsWith("#")) return;
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className="group" style={base} onClick={onClick}>
      {inner}
    </button>
  );
}

function HeadlineRenderer({ lines }: { lines: HeadlineLine[] }) {
  return (
    <div style={{ lineHeight: 1.0 }}>
      {lines.map((line, li) => (
        <div key={li}>
          {line.segments.map((seg, si) =>
            seg.italic && seg.accent ? (
              <span
                key={si}
                className="italic legacy-gradient-text"
                style={{
                  fontWeight: 700,
                  fontFamily: JAKARTA,
                  filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.9))",
                }}
              >
                {seg.text}
              </span>
            ) : (
              <span
                key={si}
                style={{
                  fontWeight: 700,
                  fontFamily: JAKARTA,
                  color: "#0A0A0A",
                  textShadow: "0 2px 24px rgba(255,255,255,0.95), 0 0 40px rgba(255,255,255,0.7)",
                }}
              >
                {seg.text}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export function LegacyHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light overlay — keep image visible, text readable */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.38)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative mx-auto w-full max-w-7xl px-6 xl:px-8"
        style={{ paddingTop: "9rem", paddingBottom: "8rem" }}
      >
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={containerVariants}
          className="flex flex-col"
          style={{ gap: "2.5rem" }}
        >
          {/* Giant headline */}
          <motion.div variants={itemVariants}>
            <h1
              style={{
                fontSize: "clamp(3.5rem, 9.5vw, 9.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
              }}
            >
              <HeadlineRenderer lines={heroContent.headlineLines} />
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants}>
            <div style={{ height: "1.5px", background: "rgba(10,10,10,0.25)", width: "100%" }} aria-hidden="true" />
          </motion.div>

          {/* Subhead */}
          <motion.div variants={itemVariants}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                fontFamily: GEIST,
                lineHeight: 1.6,
                fontWeight: 500,
                color: "#0A0A0A",
                maxWidth: "48ch",
                textShadow: "0 1px 16px rgba(255,255,255,0.9)",
              }}
            >
              {heroContent.subhead}
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <PillBtn label="Book a call" primary href="/contact" />
            <PillBtn label="View our work" href="/work" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              fontFamily: "var(--font-geist-mono), monospace",
              color: "#0A0A0A",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              textShadow: "0 1px 8px rgba(255,255,255,0.8)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #0A0A0A, transparent)" }}
          />
        </motion.div>
      )}
    </section>
  );
}
