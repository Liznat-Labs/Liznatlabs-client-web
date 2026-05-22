"use client";

import { useReducedMotion } from "framer-motion";
import { marqueeItems } from "@/content/site";

function MarqueeContent() {
  return (
    <>
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-4">
          <span
            className="font-mono text-xs font-medium text-muted"
            style={{ letterSpacing: "0.12em" }}
          >
            {item}
          </span>
          <span
            className="inline-block h-1 w-1 rounded-full bg-accent"
            aria-hidden="true"
          />
        </span>
      ))}
    </>
  );
}

export function MarqueeStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Services offered"
      className="relative overflow-hidden border-y py-4"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Edge fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background: "linear-gradient(to right, var(--bg), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background: "linear-gradient(to left, var(--bg), transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className={`flex gap-4 whitespace-nowrap ${shouldReduceMotion ? "" : "animate-marquee"}`}
        style={{
          width: shouldReduceMotion ? "auto" : "max-content",
          animationDuration: "32s",
        }}
        aria-hidden={shouldReduceMotion ? undefined : "true"}
      >
        {/* Duplicate for seamless loop */}
        <span className="inline-flex gap-4 pr-4">
          <MarqueeContent />
        </span>
        {!shouldReduceMotion && (
          <span className="inline-flex gap-4 pr-4" aria-hidden="true">
            <MarqueeContent />
          </span>
        )}
      </div>

      {/* Accessible static list for screen readers */}
      {!shouldReduceMotion && (
        <ul className="sr-only" aria-label="Services offered">
          {marqueeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


