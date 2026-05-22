"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type LT = "cmd" | "ok" | "info" | "metric" | "blank" | "label" | "comment" | "code";

interface Line { text: string; type: LT }

const FRAMES: Line[][] = [
  [
    { text: "next build", type: "cmd" },
    { text: "", type: "blank" },
    { text: "  ▲ Next.js 14.2.5", type: "info" },
    { text: "", type: "blank" },
    { text: "  Creating optimized production build...", type: "info" },
    { text: "✓  Compiled in 487ms (615 modules)", type: "ok" },
    { text: "✓  Linting and checking types", type: "ok" },
    { text: "✓  Collecting page data", type: "ok" },
    { text: "✓  Generating static pages (8/8)", type: "ok" },
    { text: "", type: "blank" },
    { text: "  Lighthouse", type: "label" },
    { text: "  Performance   ·  99   ▓▓▓▓▓▓▓▓▓▓▓░", type: "metric" },
    { text: "  Accessibility · 100   ▓▓▓▓▓▓▓▓▓▓▓▓", type: "metric" },
    { text: "  Best Practices· 100   ▓▓▓▓▓▓▓▓▓▓▓▓", type: "metric" },
    { text: "  SEO           · 100   ▓▓▓▓▓▓▓▓▓▓▓▓", type: "metric" },
  ],
  [
    { text: "cat app/api/bookings/route.ts", type: "cmd" },
    { text: "", type: "blank" },
    { text: "// POST /api/bookings — Spice & Smoke", type: "comment" },
    { text: "export async function POST(req: Request) {", type: "code" },
    { text: "  const { date, covers } = await req.json()", type: "code" },
    { text: "  const booking = await db.bookings.create({", type: "code" },
    { text: "    data: { date, covers, status: 'confirmed' },", type: "code" },
    { text: "  })", type: "code" },
    { text: "  await email.sendConfirmation(booking)", type: "code" },
    { text: "  return Response.json({ id: booking.id })", type: "code" },
    { text: "}", type: "code" },
    { text: "", type: "blank" },
    { text: "✓  p95 latency: 38ms on Vercel Edge", type: "ok" },
    { text: "✓  Zero-downtime deploy pipeline", type: "ok" },
  ],
  [
    { text: "./scripts/audit flow-studio.apk", type: "cmd" },
    { text: "", type: "blank" },
    { text: "  Analysing Android bundle...", type: "info" },
    { text: "", type: "blank" },
    { text: "  Flow Studio v1.4.2", type: "label" },
    { text: "  Build variant   release (minified)", type: "info" },
    { text: "  APK size        4.2 MB  (↓ 38% vs prev)", type: "info" },
    { text: "  Cold start      820ms   (target < 1s)", type: "info" },
    { text: "", type: "blank" },
    { text: "✓  Proguard rules applied", type: "ok" },
    { text: "✓  Baseline profiles generated", type: "ok" },
    { text: "✓  Play Store listing ready", type: "ok" },
    { text: "", type: "blank" },
    { text: "  Delivered in 18 days  ·  Fixed price", type: "label" },
  ],
];

function lineColor(type: LT): string {
  switch (type) {
    case "cmd":     return "#F5EFE6";
    case "ok":      return "#00E5FF";
    case "metric":  return "#E96E33";
    case "label":   return "#F5EFE6";
    case "comment": return "#5A6478";
    case "code":    return "#B8C4D0";
    case "info":    return "#6B7A8D";
    default:        return "transparent";
  }
}

export function CodeWindow() {
  const [frameIdx, setFrameIdx] = useState(0);
  const [visible, setVisible] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setVisible(0);
    const frame = FRAMES[frameIdx];

    if (shouldReduceMotion) {
      setVisible(frame.length);
      timerRef.current = setTimeout(() => {
        setFrameIdx((p) => (p + 1) % FRAMES.length);
      }, 4000);
      return;
    }

    let idx = 0;
    intervalRef.current = setInterval(() => {
      idx++;
      setVisible(idx);
      if (idx >= frame.length) {
        clearInterval(intervalRef.current!);
        timerRef.current = setTimeout(() => {
          setFrameIdx((p) => (p + 1) % FRAMES.length);
        }, 3200);
      }
    }, 130);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [frameIdx, shouldReduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="hidden lg:flex lg:flex-col"
      style={{
        width: 420,
        flexShrink: 0,
        background: "#080807",
        border: "1px solid rgba(0,229,255,0.18)",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow:
          "0 0 0 1px rgba(0,229,255,0.06), 0 32px 64px rgba(0,0,0,0.35), 0 0 120px rgba(0,229,255,0.07)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.025)",
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E", display: "block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28CA41", display: "block" }} />
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.06em",
          }}
        >
          liznat-studio — zsh
        </span>
      </div>

      {/* Frame indicator dots */}
      <div style={{ display: "flex", gap: 4, padding: "8px 14px 0", justifyContent: "flex-end" }}>
        {FRAMES.map((_, i) => (
          <span
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: i === frameIdx ? "#00E5FF" : "rgba(255,255,255,0.15)",
              transition: "background 0.3s",
              display: "block",
            }}
          />
        ))}
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: "10px 18px 20px",
          minHeight: 300,
          fontFamily: "var(--font-geist-mono), 'JetBrains Mono', monospace",
          fontSize: 12,
          lineHeight: 1.9,
          letterSpacing: "0.025em",
          /* Subtle scanline texture */
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.012) 1px, rgba(255,255,255,0.012) 2px)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={frameIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {FRAMES[frameIdx].slice(0, visible).map((line, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.12 }}
                style={{
                  color: lineColor(line.type),
                  minHeight: line.type === "blank" ? "0.7em" : undefined,
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                {line.type === "cmd" ? (
                  <>
                    <span style={{ color: "#00E5FF", marginRight: 6, userSelect: "none" }}>❯</span>
                    <span>{line.text}</span>
                    {i === visible - 1 && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 7,
                          height: "0.85em",
                          background: "#F5EFE6",
                          marginLeft: 2,
                          verticalAlign: "text-bottom",
                          animation: "pulse-dot 0.9s step-end infinite",
                        }}
                      />
                    )}
                  </>
                ) : (
                  <span>{line.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
