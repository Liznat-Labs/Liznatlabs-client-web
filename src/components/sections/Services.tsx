"use client";

import { motion, useReducedMotion } from "framer-motion";
import { servicesContent } from "@/content/site";
import { TiltCard } from "@/components/ui/TiltCard";

function WebIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="18" r="13" />
      <path d="M18 5 C13.5 11, 13.5 25, 18 31" />
      <path d="M18 5 C22.5 11, 22.5 25, 18 31" />
      <path d="M5 18 H31" /><path d="M6.5 12 H29.5" /><path d="M6.5 24 H29.5" />
    </svg>
  );
}
function MobileIcon() {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="3" width="20" height="30" rx="3" />
      <circle cx="16" cy="29" r="1.2" />
      <path d="M12 7.5 H20" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="11,13 5,18 11,23" />
      <polyline points="25,13 31,18 25,23" />
      <line x1="22" y1="9" x2="14" y2="27" />
    </svg>
  );
}

const icons = [WebIcon, MobileIcon, CodeIcon];

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-6 py-24 xl:px-8">

      <div className="relative mb-16 overflow-visible">
        <span className="section-num pointer-events-none absolute -top-6 right-0 select-none" aria-hidden="true">01</span>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>
            WHAT WE BUILD
          </span>
          <div className="h-px max-w-xs flex-1" style={{ background: "var(--border)" }} aria-hidden="true" />
        </motion.div>
      </div>

      <h2 id="services-heading" className="sr-only">Services</h2>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {servicesContent.map((service, i) => {
          const Icon = icons[i];
          return (
            <li key={service.number}>
            <TiltCard>
            <motion.article
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="group flex h-full flex-col gap-5 rounded-sm p-5 sm:gap-6 sm:p-8"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(233,110,51,0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(233,110,51,0.15), 0 2px 8px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent" style={{ letterSpacing: "0.1em" }}>
                  {service.number}
                </span>
                <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.1em" }}>
                  / {service.category.toUpperCase()}
                </span>
              </div>

              <div className="text-accent" style={{ filter: "drop-shadow(0 0 8px rgba(233,110,51,0.5))" }}>
                <Icon />
              </div>

              <h3 className="font-fraunces text-cream"
                style={{ fontSize: "1.5rem", fontWeight: 400, lineHeight: 1.1 }}>
                {service.title}
              </h3>

              <p className="font-geist text-muted"
                style={{ fontSize: "0.875rem", lineHeight: 1.75, fontWeight: 400 }}>
                {service.body}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span key={tag}
                    className="rounded-sm px-2 py-0.5 font-mono text-xs text-muted"
                    style={{ border: "1px solid var(--border)", letterSpacing: "0.04em", background: "rgba(0,0,0,0.04)", color: "var(--text)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
            </TiltCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}


