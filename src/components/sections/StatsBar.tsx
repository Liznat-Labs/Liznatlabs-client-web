"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Projects shipped", color: "var(--accent)" },
  { value: 100, suffix: "%", label: "On-time delivery", color: "var(--accent-2)" },
  { value: 6, suffix: " wks", label: "Max. delivery time", color: "#8264ff" },
  { value: 5, suffix: ".0*", label: "Average rating", color: "#16a34a" },
];

function CountUp({
  target,
  suffix,
  color,
  duration = 1.4,
}: {
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
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

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
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Studio highlights"
      style={{
        background: "rgba(10,10,10,0.04)",
        borderTop: "1px solid var(--border)",
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 xl:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          role="list"
          style={{ position: "relative" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              role="listitem"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.09,
              }}
              className="relative flex flex-col items-start"
              style={{
                padding: "3rem 2.5rem",
              }}
            >
              {/* Vertical separator — shown between columns on desktop only */}
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    top: "20%",
                    bottom: "20%",
                    left: 0,
                    width: "1px",
                    background: "var(--border)",
                    opacity: 0.3,
                  }}
                />
              )}

              {/* Accent top rule */}
              <div
                aria-hidden="true"
                style={{
                  width: "24px",
                  height: "2px",
                  background: stat.color,
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                }}
              />

              {/* Stat number */}
              <span
                className="font-geist tabular-nums"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} />
              </span>

              {/* Label */}
              <span
                className="font-mono text-muted"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginTop: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
