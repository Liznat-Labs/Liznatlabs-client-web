"use client";

import { motion, useReducedMotion } from "framer-motion";
import { workContent } from "@/content/site";

function VisitLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2"
      style={{
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "var(--text)",
        textDecoration: "none",
        letterSpacing: "0.02em",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        marginTop: "1.25rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        borderBottom: "1.5px solid var(--text)",
        paddingBottom: "1px",
        transition: "color 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--accent)";
        el.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--text)";
        el.style.borderColor = "var(--text)";
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <span style={{ transition: "transform 0.3s ease" }} className="group-hover/link:-translate-x-0.5">
        Visit site
      </span>
      <svg
        width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
        className="group-hover/link:translate-x-0.5"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading" style={{ background: "#F5F5F5" }}>
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
            style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}
          >
            Selected work
          </span>
          <h2
            id="work-heading"
            className="font-fraunces"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1, color: "var(--text)", marginTop: "1rem" }}
          >
            Work that speaks.
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {workContent.map((item, i) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group relative overflow-hidden flex flex-col"
              style={{ background: "#FFFFFF" }}
            >
              {item.image ? (
                <>
                  {/* Image with grayscale → color on hover */}
                  <div style={{ position: "relative", height: "clamp(180px, 25vw, 240px)", overflow: "hidden", flexShrink: 0 }}>
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
                        transition: "transform 0.55s ease",
                      }}
                      className="group-hover:scale-105"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 50%, #FFFFFF 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem 1.75rem 2rem", display: "flex", flexDirection: "column", flex: 1 }}>
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
                        marginBottom: "0.75rem",
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.type} · {item.category}
                    </span>
                    <h3
                      className="font-fraunces"
                      style={{ fontSize: "1.4rem", fontWeight: 500, lineHeight: 1.15, color: "var(--text)", marginBottom: "0.5rem" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.825rem", lineHeight: 1.7, color: "var(--muted)" }}>
                      {item.description}
                    </p>
                    {item.url && <VisitLink url={item.url} />}
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(145deg, ${item.accentHue} 0%, transparent 55%)`,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      minHeight: 300,
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: 1,
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
                        style={{ fontSize: "1.4rem", fontWeight: 500, lineHeight: 1.15, color: "var(--text)", marginBottom: "0.6rem" }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.825rem", lineHeight: 1.7, color: "var(--muted)" }}>
                        {item.description}
                      </p>
                      {item.url && <VisitLink url={item.url} />}
                    </div>
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
