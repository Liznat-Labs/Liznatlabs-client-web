"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/site";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading"
      className="mx-auto max-w-7xl px-6 py-24 xl:px-8">

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="grid grid-cols-1 gap-0 overflow-hidden rounded-sm lg:grid-cols-2"
        style={{
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left â€” pull-quote */}
        <div
          className="flex flex-col justify-center px-10 py-14 lg:px-14 lg:py-16"
          style={{ borderRight: "1px solid var(--glass-border)" }}
        >
          <span
            className="font-fraunces leading-none text-accent"
            style={{
              fontSize: "clamp(4rem, 8vw, 6rem)",
              fontWeight: 600,
              lineHeight: 0.8,
              marginBottom: "0.5rem",
              display: "block",
              opacity: 0.6,
              filter: "drop-shadow(0 0 20px rgba(233,110,51,0.5))",
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote>
            <p
              className="font-fraunces italic text-cream"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                fontWeight: 600,
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
              }}
            >
              {aboutContent.pullQuote}
            </p>
          </blockquote>
        </div>

        {/* Right â€” founder note */}
        <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
          <h2 id="about-heading" className="sr-only">About the Founder</h2>

          {aboutContent.paragraphs.map((para, i) => (
            <p key={i} className="font-geist text-muted"
              style={{ fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 400 }}>
              {para}
            </p>
          ))}

          <p className="font-fraunces italic text-cream"
            style={{ fontSize: "0.95rem", fontWeight: 400 }}>
            {aboutContent.signature}
          </p>

          <div
            className="mt-2 h-px w-12"
            style={{ background: "var(--accent)", opacity: 0.5, boxShadow: "0 0 8px rgba(233,110,51,0.6)" }}
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}


