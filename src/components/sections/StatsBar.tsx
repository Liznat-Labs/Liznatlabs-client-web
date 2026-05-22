"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Projects shipped", color: "var(--accent)" },
  { value: 100, suffix: "%", label: "On-time delivery", color: "var(--accent-2)" },
  { value: 6, suffix: " wks", label: "Max. delivery time", color: "#8264ff" },
  { value: 5, suffix: ".0â˜…", label: "Average rating", color: "#16a34a" },
];

function CountUp({ target, suffix, color, duration = 1.4 }: {
  target: number;
  suffix: string;
  color: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) { setCount(target); return; }

    let frame = 0;
    const totalFrames = Math.round(duration * 60);
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      setCount(Math.round(progress * target));
      if (frame < totalFrames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, shouldReduceMotion]);

  return (
    <span ref={ref} style={{ color }}>
      {count}{suffix}
    </span>
  );
}

export function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Studio highlights"
      className="relative mx-auto max-w-7xl px-6 py-16 xl:px-8"
    >
      {/* Subtle background bloom */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(233,110,51,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4"
        style={{ border: "1px solid var(--border)", background: "var(--border)" }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="flex flex-col items-center gap-2 px-6 py-10 text-center"
            style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)" }}
          >
            {/* Accent dot */}
            <span
              className="mb-1 h-1.5 w-1.5 rounded-full"
              style={{ background: stat.color }}
              aria-hidden="true"
            />

            <span
              className="font-geist tabular-nums"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} />
            </span>

            <span
              className="font-mono text-muted"
              style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


