"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processContent } from "@/content/site";

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      style={{
        background: "rgba(109,40,217,0.03)",
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 xl:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-4 flex items-center gap-4"
        >
          <span
            className="font-mono text-muted"
            style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            HOW WE WORK
          </span>
          <div
            className="h-px max-w-xs flex-1"
            style={{ background: "var(--border)", opacity: 0.35 }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="process-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: 0.06 }}
          className="mb-20 font-fraunces text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1 }}
        >
          Simple. Transparent. Predictable.
        </motion.h2>

        {/* Desktop track layout */}
        <div className="hidden lg:block">
          {/* Connecting dashed line layer */}
          <div className="relative mb-0" aria-hidden="true">
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "12.5%",
                right: "12.5%",
                height: "1px",
                borderTop: "1px dashed var(--border)",
                opacity: 0.5,
                transform: "translateY(-50%)",
              }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-4 gap-0" role="list">
            {processContent.map((step, i) => (
              <motion.div
                key={step.number}
                role="listitem"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
                className="relative flex flex-col px-6 py-8"
                style={{ paddingTop: "3.5rem" }}
              >
                {/* Watermark step number */}
                <span
                  aria-hidden="true"
                  className="font-fraunces pointer-events-none select-none"
                  style={{
                    position: "absolute",
                    top: "-1.5rem",
                    left: "1.25rem",
                    fontSize: "9rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "#0A0A0A",
                    opacity: 0.055,
                    letterSpacing: "-0.04em",
                    zIndex: 0,
                  }}
                >
                  {step.number}
                </span>

                {/* Connector dot on the line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: "2px solid var(--accent)",
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Step label */}
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-fraunces"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      lineHeight: 1.15,
                      color: "var(--text)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Accent rule */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: "24px",
                      height: "1px",
                      background: "var(--accent)",
                      opacity: 0.4,
                    }}
                  />

                  {/* Body */}
                  <p
                    className="font-geist text-muted"
                    style={{ fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 400 }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="lg:hidden" role="list">
          <div className="relative flex flex-col gap-0 pl-8">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1rem",
                bottom: "1rem",
                left: "0",
                width: "1px",
                borderLeft: "1px dashed var(--border)",
                opacity: 0.45,
              }}
            />

            {processContent.map((step, i) => (
              <motion.div
                key={step.number}
                role="listitem"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className="relative flex flex-col gap-3 py-8"
              >
                {/* Dot on vertical line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "2rem",
                    left: "-1.5rem",
                    transform: "translateX(-50%)",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: "2px solid var(--accent)",
                  }}
                />

                {/* Watermark number behind content */}
                <span
                  aria-hidden="true"
                  className="font-fraunces pointer-events-none select-none"
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0",
                    fontSize: "6rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "#0A0A0A",
                    opacity: 0.04,
                    letterSpacing: "-0.04em",
                    zIndex: 0,
                  }}
                >
                  {step.number}
                </span>

                <div className="relative z-10 flex flex-col gap-3">
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {step.number}
                  </span>

                  <h3
                    className="font-fraunces"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: "var(--text)",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="font-geist text-muted"
                    style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
