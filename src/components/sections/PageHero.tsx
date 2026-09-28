"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Segment, Stat } from "@/content/site";
import { StatsRow } from "@/components/ui/primitives";

// Same look as the homepage hero (LegacyHero): photo background, light overlay,
// bold Plus Jakarta Sans headline with the purple-to-teal italic accent, Geist body.
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

export function PageHero({
  eyebrow,
  title,
  body,
  stats,
  compact = false,
}: {
  eyebrow: string;
  title: Segment[];
  body?: string;
  stats?: Stat[];
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <>
      <section
        className="relative flex w-full flex-col justify-center overflow-hidden"
        style={{
          minHeight: compact ? "52vh" : "78vh",
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "rgba(255,255,255,0.38)" }} />

        <div className="shell relative" style={{ paddingTop: "9rem", paddingBottom: compact ? "4rem" : "6rem" }}>
          <motion.div
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
            className="flex flex-col"
            style={{ gap: "2rem" }}
          >
            <motion.span
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#0A0A0A",
                textShadow: "0 1px 12px rgba(255,255,255,0.9)",
              }}
            >
              {eyebrow}
            </motion.span>

            <motion.div variants={itemVariants}>
              <h1 style={{ fontSize: "clamp(2.8rem, 6.6vw, 6.4rem)", lineHeight: 0.98, letterSpacing: "-0.035em", maxWidth: "15ch" }}>
                {title.map((seg, i) =>
                  seg.accent ? (
                    <span
                      key={i}
                      className="italic legacy-gradient-text"
                      style={{ fontWeight: 700, fontFamily: JAKARTA, filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.9))" }}
                    >
                      {seg.text}
                    </span>
                  ) : (
                    <span
                      key={i}
                      style={{
                        fontWeight: 700,
                        fontFamily: JAKARTA,
                        color: "#0A0A0A",
                        textShadow: "0 2px 24px rgba(255,255,255,0.95), 0 0 40px rgba(255,255,255,0.7)",
                      }}
                    >
                      {seg.text}
                    </span>
                  ),
                )}
              </h1>
            </motion.div>

            {body && (
              <>
                <motion.div variants={itemVariants}>
                  <div style={{ height: "1.5px", background: "rgba(10,10,10,0.25)", width: "100%" }} aria-hidden="true" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                      fontFamily: GEIST,
                      lineHeight: 1.6,
                      fontWeight: 500,
                      color: "#0A0A0A",
                      maxWidth: "52ch",
                      textShadow: "0 1px 16px rgba(255,255,255,0.9)",
                    }}
                  >
                    {body}
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {stats && (
        <section className="bg-canvas">
          <div className="shell">
            <div className="border-b border-teal/30 py-10">
              <StatsRow stats={stats} color="teal" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
