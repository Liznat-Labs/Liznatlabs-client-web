"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Card } from "@/content/site";

export function Beliefs({ items }: { items: Card[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.3fr]">
      <div role="tablist" aria-label="Our convictions" aria-orientation="vertical" className="flex flex-col border-t hairline">
        {items.map((b, i) => (
          <button
            key={b.title}
            type="button"
            role="tab"
            id={`belief-tab-${i}`}
            aria-selected={active === i}
            aria-controls="belief-panel"
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const next = (i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length;
                setActive(next);
                document.getElementById(`belief-tab-${next}`)?.focus();
              }
            }}
            tabIndex={active === i ? 0 : -1}
            className={`flex items-center gap-6 border-b hairline py-6 text-left transition-colors ${active === i ? "text-pearl" : "text-pearl-dim hover:text-pearl"}`}
          >
            <span className={`font-mono text-sm ${active === i ? "text-blue-bright" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-xl font-light md:text-2xl">{b.title}</span>
          </button>
        ))}
      </div>
      <div id="belief-panel" role="tabpanel" aria-labelledby={`belief-tab-${active}`} className="glass relative min-h-[320px] overflow-hidden rounded-[18px] p-10 md:p-14">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue opacity-20 blur-[90px]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col gap-6"
          >
            <span className="eyebrow">Conviction {String(active + 1).padStart(2, "0")}</span>
            <h3 className="font-extralight text-pearl" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {current.title}
            </h3>
            <p className="max-w-lg text-pearl-dim" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
