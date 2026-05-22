"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processContent } from "@/content/site";

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="mx-auto max-w-7xl px-6 py-24 xl:px-8"
    >
      {/* Section eyebrow */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="mb-4 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>
          HOW WE WORK
        </span>
        <div className="h-px max-w-xs flex-1" style={{ background: "var(--border)" }} aria-hidden="true" />
      </motion.div>

      <motion.h2
        id="process-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
        className="mb-16 font-fraunces text-cream"
        style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1 }}
      >
        Simple. Transparent. Predictable.
      </motion.h2>

      <div
        className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
        role="list"
      >
        {processContent.map((step, i) => (
          <motion.div
            key={step.number}
            role="listitem"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1],
              delay: i * 0.08,
            }}
            className="flex flex-col gap-5 px-0 py-8 pr-8"
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {/* Accent tick + number */}
            <div className="flex items-center gap-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M2 6.5 L4.5 9 L10 3"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="font-mono text-xs text-accent"
                style={{ letterSpacing: "0.1em" }}
              >
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-fraunces text-cream"
              style={{ fontSize: "1.35rem", fontWeight: 400, lineHeight: 1.15 }}
            >
              {step.title}
            </h3>

            {/* Body */}
            <p
              className="font-geist text-muted"
              style={{ fontSize: "0.875rem", lineHeight: 1.75, fontWeight: 400 }}
            >
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


