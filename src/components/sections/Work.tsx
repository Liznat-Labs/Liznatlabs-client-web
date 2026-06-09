"use client";

import { motion, useReducedMotion } from "framer-motion";
import { workContent } from "@/content/site";
import { TiltCard } from "@/components/ui/TiltCard";

export function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading"
      style={{ background: "#0C0C0F" }}
      className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 xl:px-8">

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-4"
      >
        <span className="font-mono text-xs" style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}>
          SELECTED WORK
        </span>
        <div className="h-px max-w-xs flex-1" style={{ background: "rgba(255,255,255,0.1)" }} aria-hidden="true" />
      </motion.div>

      <div className="relative mb-16 overflow-visible">
        <span className="section-num pointer-events-none absolute -top-2 right-0 select-none" aria-hidden="true">02</span>
        <motion.h2
          id="work-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-fraunces"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1, color: "#EEEDF0" }}
        >
          Work that speaks.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {workContent.map((item, i) => (
          <TiltCard key={item.title}>
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            className="group relative h-full overflow-hidden rounded-sm"
            style={{
              border: "1px solid var(--border)",
              backdropFilter: "blur(12px)",
              minHeight: item.image ? "auto" : 380,
              boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
              transition: "border-color 0.3s, box-shadow 0.3s, transform 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139, 92, 246,0.4)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(139, 92, 246,0.12), 0 2px 8px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)";
            }}
          >
            {item.image ? (
              <>
                {/* Image top half */}
                <div className="relative w-full overflow-hidden" style={{ height: "clamp(160px, 30vw, 220px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${item.image}?v=2`}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform 0.5s ease" }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Content below image */}
                <div className="flex flex-col gap-2 p-5 pt-3 sm:p-8 sm:pt-4">
                  <span
                    className="inline-block self-start rounded-sm px-2 py-1 font-mono text-xs mb-2"
                    style={{
                      border: "1px solid rgba(8,145,178,0.3)",
                      color: "var(--accent-2)",
                      background: "rgba(8,145,178,0.06)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.type} · {item.category}
                  </span>
                  <h3 className="font-fraunces" style={{ fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.1, color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 400, color: "var(--muted)", maxWidth: "34ch" }}>
                    {item.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Background for no-image cards */}
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(145deg, ${item.accentHue} 0%, transparent 60%), rgba(255,255,255,0.85)`,
                }} />
                <div className="absolute inset-0" aria-hidden="true" style={{
                  background: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(0,0,0,0.015) 40px, rgba(0,0,0,0.015) 41px)`,
                }} />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                  background: "radial-gradient(ellipse at top left, rgba(139, 92, 246,0.06), transparent 60%)",
                }} />

                <div className="relative flex h-full min-h-[280px] flex-col justify-between p-5 sm:min-h-[380px] sm:p-8">
                  <span
                    className="inline-block self-start rounded-sm px-2 py-1 font-mono text-xs"
                    style={{
                      border: "1px solid rgba(8,145,178,0.3)",
                      color: "var(--accent-2)",
                      background: "rgba(8,145,178,0.07)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.type} · {item.category}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-fraunces" style={{ fontSize: "1.75rem", fontWeight: 500, lineHeight: 1.1, color: "var(--text)" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 400, maxWidth: "34ch", color: "var(--muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            )}

          </motion.article>
          </TiltCard>
        ))}
      </div>
      </div>
    </section>
  );
}



