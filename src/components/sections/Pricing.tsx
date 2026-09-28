"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pricingContent } from "@/content/site";
import { TiltCard } from "@/components/ui/TiltCard";

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" aria-labelledby="pricing-heading"
      className="mx-auto max-w-7xl px-6 py-24 xl:px-8">

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>TRANSPARENT PRICING</span>
        <div className="h-px max-w-xs flex-1" style={{ background: "var(--border)" }} aria-hidden="true" />
      </motion.div>

      <div className="relative overflow-visible">
        <span className="section-num pointer-events-none absolute -top-2 right-0 select-none" aria-hidden="true">03</span>
        <motion.h2
          id="pricing-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-4 font-fraunces text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1 }}
        >
          No surprises. Ever.
        </motion.h2>
      </div>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16 max-w-lg font-geist text-muted"
        style={{ fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 400 }}
      >
        Every project starts with a fixed-price proposal. If the scope doesn&apos;t change, the price doesn&apos;t either.
      </motion.p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pricingContent.map((tier, i) => (
          <TiltCard key={tier.name} maxTilt={6}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.1 }}
            whileHover={shouldReduceMotion ? {} : {
              y: -10,
              scale: 1.025,
              boxShadow: tier.featured
                ? "0 24px 60px rgba(109, 40, 217,0.25), 0 8px 24px rgba(109, 40, 217,0.15), inset 0 0 40px rgba(109, 40, 217,0.06)"
                : "0 24px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
              transition: { duration: 0.22, ease: "easeOut" },
            }}
            className="relative flex h-full flex-col gap-6 rounded-sm p-5 cursor-pointer sm:gap-8 sm:p-8"
            style={{
              background: tier.featured ? "rgba(109, 40, 217,0.05)" : "var(--glass-bg)",
              border: tier.featured ? "1px solid rgba(109, 40, 217,0.45)" : "1px solid var(--glass-border)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: tier.featured ? "0 4px 24px rgba(109, 40, 217,0.18), 0 1px 4px rgba(0,0,0,0.05)" : "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {tier.featured && (
              <div className="absolute -top-px left-8" aria-label="Most popular plan">
                <span
                  className="inline-block rounded-b-sm bg-accent px-3 py-1 font-mono text-xs font-medium text-bg"
                  style={{ letterSpacing: "0.1em" }}
                >
                  POPULAR
                </span>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-4">
              <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.1em" }}>
                {tier.name.toUpperCase()}
              </span>
              <span className="font-fraunces gradient-text"
                style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>
                {tier.price}
              </span>
            </div>

            <div className="h-px w-full" style={{ background: tier.featured ? "rgba(109, 40, 217,0.2)" : "var(--glass-border)" }} />

            <ul className="flex flex-col gap-3" role="list" aria-label={`${tier.name} plan features`}>
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 font-geist text-muted"
                  style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M2.5 7.5 L5.5 10.5 L11.5 3.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-book-call"))}
                className="inline-flex w-full items-center justify-center rounded-sm px-5 py-3 font-mono text-xs transition-all duration-200"
                style={{
                  background: tier.featured ? "var(--accent)" : "transparent",
                  color: tier.featured ? "var(--bg)" : "var(--text)",
                  border: tier.featured ? "none" : "1px solid var(--border)",
                  letterSpacing: "0.04em",
                  boxShadow: tier.featured ? "0 0 20px rgba(109, 40, 217,0.4)" : "none",
                }}
              >
                {tier.cta}
              </button>
            </div>
          </motion.div>
          </TiltCard>
        ))}
      </div>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center font-mono text-xs text-muted"
        style={{ letterSpacing: "0.04em" }}
      >
        All prices in INR. International clients billed in USD equivalent. Custom quotes available for complex scopes.
      </motion.p>
    </section>
  );
}


