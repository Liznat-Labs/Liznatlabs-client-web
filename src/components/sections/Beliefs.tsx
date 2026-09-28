"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Card } from "@/content/site";

export function Beliefs({ items }: { items: Card[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.25fr]">
      <div role="tablist" aria-label="Our convictions" aria-orientation="vertical" className="flex flex-col gap-3">
        {items.map((b, i) => (
          <button
            key={b.title}
            type="button"
            role="tab"
            id={`belief-tab-${i}`}
            aria-selected={active === i}
            aria-controls="belief-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const next = (i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length;
                setActive(next);
                document.getElementById(`belief-tab-${next}`)?.focus();
              }
            }}
            className={`flex items-center gap-5 rounded-2xl border px-6 py-5 text-left transition-colors ${
              active === i ? "border-teal bg-white shadow-[0_10px_30px_rgba(0,96,120,0.1)]" : "border-line bg-white/60 hover:border-teal-lt"
            }`}
          >
            <span className={`text-sm font-semibold ${active === i ? "text-coral" : "text-teal"}`}>{String(i + 1).padStart(2, "0")}</span>
            <span className={`font-semibold ${active === i ? "text-teal" : "text-ink"}`}>{b.title}</span>
          </button>
        ))}
      </div>
      <div
        id="belief-panel"
        role="tabpanel"
        aria-labelledby={`belief-tab-${active}`}
        className="relative min-h-[300px] overflow-hidden rounded-card border border-teal-lt border-l-4 border-l-teal bg-sky p-8 md:p-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="kicker text-teal">Conviction {String(active + 1).padStart(2, "0")}</span>
            <h3 className="font-light text-ink" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>{current.title}</h3>
            <p className="max-w-lg text-ink-soft" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
