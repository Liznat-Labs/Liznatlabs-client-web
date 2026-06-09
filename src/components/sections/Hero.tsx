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
    <div style={{ lineHeight: 1.0 }}>
      {lines.map((line, li) => (
        <motion.div key={li} variants={itemVariants}>
          {line.segments.map((seg, si) =>
            seg.italic && seg.accent ? (
              <span
                key={si}
                className="font-fraunces italic gradient-text"
                style={{ fontWeight: 700 }}
              >
                {seg.text}
              </span>
            ) : (
              <span
                key={si}
                className="font-fraunces"
                style={{ fontWeight: 700, color: "var(--text)" }}
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

      {/* Floating decorative shapes — CSS only, no JS */}
      {!shouldReduceMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large circle outline — upper right */}
          <div style={{
            position: "absolute", top: "8%", right: "-6%",
            width: 400, height: 400, borderRadius: "50%",
            border: "1.5px solid rgba(79, 70, 229,0.13)",
            animation: "floatA 20s ease-in-out infinite",
          }} />
          {/* Medium ring — inner right */}
          <div style={{
            position: "absolute", top: "20%", right: "5%",
            width: 180, height: 180, borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.1)",
            animation: "floatB 26s ease-in-out infinite",
          }} />
          {/* Diamond shape — lower left */}
          <div style={{
            position: "absolute", bottom: "18%", left: "1%",
            width: 60, height: 60,
            background: "rgba(79, 70, 229,0.07)",
            transform: "rotate(45deg)",
            animation: "floatC 15s ease-in-out infinite",
          }} />
          {/* Small accent dot */}
          <div style={{
            position: "absolute", top: "52%", right: "9%",
            width: 10, height: 10, borderRadius: "50%",
            background: "rgba(168,85,247,0.35)",
            animation: "floatA 11s ease-in-out infinite reverse",
          }} />
          {/* Tiny orange dot */}
          <div style={{
            position: "absolute", top: "33%", right: "23%",
            width: 6, height: 6, borderRadius: "50%",
            background: "rgba(79, 70, 229,0.45)",
            animation: "floatB 9s ease-in-out infinite",
          }} />
        </div>
      )}

      {/* Horizontal scan line â€" purely decorative */}
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
        <div className="grid w-full grid-cols-1 items-center gap-12 py-24 lg:grid-cols-[1fr_440px] xl:gap-20">

          {/* â"€â"€ Left: content â"€â"€ */}
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
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
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
                  <button
                    key={cta.label}
                    onClick={() => window.dispatchEvent(new CustomEvent("open-book-call"))}
                    className="shimmer-btn inline-flex items-center rounded-sm bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-all duration-200"
                    style={{
                      letterSpacing: "0.04em",
                      boxShadow: "0 0 24px rgba(79, 70, 229,0.4), 0 0 60px rgba(79, 70, 229,0.15)",
                    }}
                  >
                    {cta.label}
                  </button>
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
            <motion.div variants={itemVariants}>
              <ul
                className="mt-2 grid grid-cols-2 overflow-hidden rounded-sm md:grid-cols-4"
                style={{
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
                aria-label="Studio highlights"
              >
                {heroContent.meta.map((cell, i) => (
                  <li
                    key={cell.label}
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
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── Right: code window ── */}
          <div
            className="hidden lg:flex lg:items-center lg:justify-end"
            style={{
              transform: "rotate(1.5deg)",
              filter: "drop-shadow(0 40px 80px rgba(0,229,255,0.10)) drop-shadow(0 0 40px rgba(79, 70, 229,0.08))",
            }}
          >
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}


