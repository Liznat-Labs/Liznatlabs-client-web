"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonialsContent } from "@/content/site";

const cardAccents = [
  {
    bg: "linear-gradient(135deg, rgba(233,110,51,0.08) 0%, rgba(255,255,255,0.9) 50%)",
    border: "rgba(233,110,51,0.2)",
    quoteColor: "rgba(233,110,51,0.15)",
    dotColor: "var(--accent)",
  },
  {
    bg: "linear-gradient(135deg, rgba(0,119,170,0.08) 0%, rgba(255,255,255,0.9) 50%)",
    border: "rgba(0,119,170,0.2)",
    quoteColor: "rgba(0,119,170,0.15)",
    dotColor: "var(--accent-2)",
  },
  {
    bg: "linear-gradient(135deg, rgba(130,100,255,0.08) 0%, rgba(255,255,255,0.9) 50%)",
    border: "rgba(130,100,255,0.2)",
    quoteColor: "rgba(130,100,255,0.15)",
    dotColor: "#8264ff",
  },
];

const avatarColors = [
  { bg: "rgba(233,110,51,0.15)", color: "var(--accent)" },
  { bg: "rgba(0,119,170,0.15)", color: "var(--accent-2)" },
  { bg: "rgba(130,100,255,0.15)", color: "#8264ff" },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-glow-blue relative mx-auto max-w-7xl px-6 py-24 xl:px-8"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>
          WHAT CLIENTS SAY
        </span>
        <div className="h-px max-w-xs flex-1" style={{ background: "var(--border)" }} aria-hidden="true" />
      </motion.div>

      <motion.h2
        id="testimonials-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mb-14 font-geist"
        style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1, color: "var(--text)" }}
      >
        Don&apos;t take{" "}
        <span className="gradient-text">my word</span>{" "}
        for it.
      </motion.h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonialsContent.map((item, i) => (
          <motion.div
            key={item.name}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            style={{ marginTop: i === 1 ? "1.5rem" : 0 }}
          >
            <div
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-7"
              style={{
                background: cardAccents[i].bg,
                border: `1px solid ${cardAccents[i].border}`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              {/* Giant decorative quote mark */}
              <span
                className="pointer-events-none absolute right-5 top-3 font-fraunces select-none"
                aria-hidden="true"
                style={{
                  fontSize: "7rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: cardAccents[i].quoteColor,
                  letterSpacing: "-0.05em",
                }}
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1" aria-label="5 stars">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill={cardAccents[i].dotColor} aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 flex-1">
                <p
                  className="font-geist text-muted"
                  style={{ fontSize: "0.9rem", lineHeight: 1.9, fontWeight: 400 }}
                >
                  {item.quote}
                </p>
              </blockquote>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: cardAccents[i].border }}
                aria-hidden="true"
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: avatarColors[i].bg,
                    border: `1.5px solid ${cardAccents[i].border}`,
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="font-mono text-xs font-semibold"
                    style={{ color: avatarColors[i].color, letterSpacing: "0.04em" }}
                  >
                    {item.initials}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-geist"
                    style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="font-mono text-muted"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.07em" }}
                  >
                    {item.role} Â· {item.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


