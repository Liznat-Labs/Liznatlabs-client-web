"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroContent, type HeadlineLine } from "@/content/site";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { CodeWindow } from "@/components/ui/CodeWindow";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] } },
};

function HeadlineRenderer({ lines }: { lines: HeadlineLine[] }) {
  return (
    <div style={{ lineHeight: 1.05 }}>
      {lines.map((line, li) => (
        <motion.div
          key={li}
          variants={itemVariants}
          style={{ paddingLeft: line.indent ? "clamp(1.5rem, 8vw, 7rem)" : 0 }}
        >
          {line.segments.map((seg, si) =>
            seg.italic && seg.accent ? (
              <span
                key={si}
                className="font-fraunces italic glow-accent"
                style={{ fontWeight: 600, color: "var(--accent)" }}
              >
                {seg.text}
              </span>
            ) : (
              <span
                key={si}
                className="font-fraunces"
                style={{ fontWeight: 500, color: "var(--text)" }}
              >
                {seg.text}
              </span>
            )
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 xl:px-8"
      style={{ minHeight: "92vh" }}
    >
      {/* Particle layer */}
      <ParticleCanvas />

      {/* Horizontal scan line â€” purely decorative */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/3 h-px"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.25) 30%, rgba(0,229,255,0.5) 50%, rgba(0,229,255,0.25) 70%, transparent 100%)",
            animation: "gridScroll 6s linear infinite",
            opacity: 0.5,
          }}
        />
      )}

      <div className="relative z-10 flex min-h-[92vh] items-center">
        <div className="grid w-full grid-cols-1 items-center gap-16 py-24 lg:grid-cols-[1fr_auto]">

          {/* â”€â”€ Left: content â”€â”€ */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-8"
          >
            {/* Status pill */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs"
                style={{
                  border: "1px solid rgba(0,229,255,0.3)",
                  color: "var(--accent-2)",
                  background: "rgba(0,229,255,0.06)",
                  letterSpacing: "0.06em",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
                  aria-hidden="true"
                />
                {heroContent.status}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                }}
              >
                <HeadlineRenderer lines={heroContent.headlineLines} />
              </h1>
            </motion.div>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
                lineHeight: 1.75,
                fontWeight: 600,
                color: "var(--muted)",
                maxWidth: "44ch",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {heroContent.subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {heroContent.ctas.map((cta) =>
                cta.primary ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(cta.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="inline-flex items-center rounded-sm bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-all duration-200"
                    style={{
                      letterSpacing: "0.04em",
                      boxShadow: "0 0 24px rgba(233,110,51,0.4), 0 0 60px rgba(233,110,51,0.15)",
                    }}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(cta.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="inline-flex items-center rounded-sm px-6 py-3 font-mono text-xs transition-all duration-200 hover:text-cream"
                    style={{
                      border: "1px solid var(--glass-border)",
                      color: "var(--muted)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(8px)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {cta.label}
                  </a>
                )
              )}
            </motion.div>

            {/* Meta strip */}
            <motion.div
              variants={itemVariants}
              className="mt-2 grid grid-cols-2 overflow-hidden rounded-sm md:grid-cols-4"
              style={{
                border: "1px solid var(--glass-border)",
                background: "var(--glass-bg)",
                backdropFilter: "blur(12px)",
              }}
              role="list"
              aria-label="Studio highlights"
            >
              {heroContent.meta.map((cell, i) => (
                <div
                  key={cell.label}
                  role="listitem"
                  className="flex flex-col gap-1 px-5 py-4"
                  style={{
                    borderRight:
                      i < heroContent.meta.length - 1
                        ? "1px solid var(--glass-border)"
                        : "none",
                  }}
                >
                  <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                    {cell.label}
                  </span>
                  <span
                    className="font-fraunces"
                    style={{ fontSize: "1.1rem", fontWeight: 400, color: "var(--text)" }}
                  >
                    {cell.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* â”€â”€ Right: code window â”€â”€ */}
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}


