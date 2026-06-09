"use client";

import { motion, useReducedMotion } from "framer-motion";
import { servicesContent } from "@/content/site";

function WebIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 4 C11.5 9.5, 11.5 22.5, 16 28" />
      <path d="M16 4 C20.5 9.5, 20.5 22.5, 16 28" />
      <path d="M4 16 H28" /><path d="M5.5 11 H26.5" /><path d="M5.5 21 H26.5" />
    </svg>
  );
}
function MobileIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="20" height="28" rx="3" />
      <circle cx="14" cy="26" r="1.1" />
      <path d="M10 6.5 H18" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="10,12 4,16 10,20" />
      <polyline points="22,12 28,16 22,20" />
      <line x1="19" y1="8" x2="13" y2="24" />
    </svg>
  );
}

const icons = [WebIcon, MobileIcon, CodeIcon];

function ArrowCta({ label }: { label: string }) {
  return (
    <span
      className="group inline-flex items-center gap-2"
      style={{
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "var(--text)",
        letterSpacing: "0.01em",
        transition: "color 0.2s ease",
      }}
    >
      <span
        style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        className="group-hover:-translate-x-0.5"
      >
        {label}
      </span>
      <svg
        width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        style={{ flexShrink: 0, transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        className="group-hover:translate-x-0.5"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" aria-labelledby="services-heading" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-6 xl:px-8" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        {/* Section header */}
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
            What we build
          </span>
          <h2
            id="services-heading"
            className="font-fraunces"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1, color: "var(--text)", marginTop: "1rem" }}
          >
            End-to-end digital products.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <ul className="grid grid-cols-1 gap-px md:grid-cols-3" style={{ listStyle: "none", padding: 0, margin: 0, background: "var(--border)", border: "1px solid var(--border)" }}>
          {servicesContent.map((service, i) => {
            const Icon = icons[i];
            return (
              <li key={service.number} style={{ background: "#FFFFFF" }}>
                <motion.article
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="group flex h-full flex-col"
                  style={{
                    padding: "2.5rem",
                    background: "#FFFFFF",
                    transition: "background 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FAFAFA";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  }}
                >
                  {/* Number + category */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                    <span
                      className="font-mono"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 500 }}
                    >
                      {service.number}
                    </span>
                    <span
                      className="font-mono"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase" }}
                    >
                      / {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ color: "var(--text)", marginBottom: "1.75rem", opacity: 0.75 }}>
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-fraunces"
                    style={{ fontSize: "1.5rem", fontWeight: 500, lineHeight: 1.15, color: "var(--text)", marginBottom: "1rem" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-geist"
                    style={{ fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 400, color: "var(--muted)", marginBottom: "2rem", flex: 1 }}
                  >
                    {service.body}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono"
                        style={{
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          padding: "0.3rem 0.65rem",
                          border: "1px solid var(--border)",
                          borderRadius: "3px",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                    <ArrowCta label="Learn more" />
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
