"use client";

import { motion, useReducedMotion } from "framer-motion";
import { workContent } from "@/content/site";

export function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading" style={{ background: "#0A0A0A" }}>
      <div className="mx-auto max-w-7xl px-6 xl:px-8" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <span
            className="font-mono"
            style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}
          >
            Selected work
          </span>
          <h2
            id="work-heading"
            className="font-fraunces"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1, color: "#EEEDF0", marginTop: "1rem" }}
          >
            Work that speaks.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {workContent.map((item, i) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group relative overflow-hidden"
              style={{ background: "#111111", cursor: "default" }}
            >
              {item.image ? (
                <>
                  {/* Image with grayscale → color on hover */}
                  <div style={{ position: "relative", height: "clamp(200px, 30vw, 280px)", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${item.image}?v=2`}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        filter: "grayscale(100%) brightness(0.8)",
                        transition: "filter 0.55s ease, transform 0.55s ease",
                      }}
                      className="work-img"
                    />
                    {/* Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 40%, #111111 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.75rem 2rem 2rem" }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent-2)",
                        border: "1px solid rgba(8,145,178,0.25)",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "3px",
                        display: "inline-block",
                        marginBottom: "0.85rem",
                      }}
                    >
                      {item.type} · {item.category}
                    </span>
                    <h3
                      className="font-fraunces"
                      style={{ fontSize: "1.6rem", fontWeight: 400, lineHeight: 1.1, color: "#EEEDF0", marginBottom: "0.5rem" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: "38ch" }}>
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Color block for non-image cards */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(145deg, ${item.accentHue} 0%, transparent 55%)`,
                      opacity: 0.15,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      minHeight: 320,
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent-2)",
                        border: "1px solid rgba(8,145,178,0.25)",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "3px",
                        display: "inline-block",
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.type} · {item.category}
                    </span>
                    <div>
                      <h3
                        className="font-fraunces"
                        style={{ fontSize: "1.6rem", fontWeight: 500, lineHeight: 1.1, color: "#EEEDF0", marginBottom: "0.75rem" }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: "38ch" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Hover arrow */}
              <div
                className="group-hover:opacity-100"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  transform: "rotate(-45deg)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
