"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BrowserMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        border: "1px solid rgba(0,0,0,0.09)",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.16), 0 12px 32px rgba(0,0,0,0.09), 0 0 0 1px rgba(255,255,255,0.9)",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "linear-gradient(180deg, #F5F5F5 0%, #EFEFEF 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.09)",
          padding: "11px 16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          {[
            { c: "#FF5F57", hover: "#FF3B30" },
            { c: "#FEBC2E", hover: "#FFCC00" },
            { c: "#28C840", hover: "#34C759" },
          ].map((dot) => (
            <div
              key={dot.c}
              style={{ width: 11, height: 11, borderRadius: "50%", background: dot.c, boxShadow: `0 1px 2px rgba(0,0,0,0.2)` }}
            />
          ))}
        </div>

        {/* Address bar */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "8px",
            padding: "5px 12px",
            fontSize: "11px",
            color: "#555",
            fontFamily: "var(--font-geist-mono, monospace)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="2.5" strokeLinecap="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span style={{ color: "#888" }}>liznatlabs.com</span>
        </div>

        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          {[18, 22, 18].map((w, i) => (
            <div key={i} style={{ width: w, height: 7, background: "#ddd", borderRadius: 4 }} />
          ))}
        </div>
      </div>

      {/* Page content */}
      <div style={{ background: "#F8F9FC" }}>

        {/* Fake nav */}
        <div
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, background: "#0E0E1A", borderRadius: 3 }} />
            <div style={{ width: 68, height: 7, background: "#0E0E1A", borderRadius: 3, opacity: 0.85 }} />
          </div>
          <div style={{ display: "flex", gap: "11px" }}>
            {[28, 32, 36, 28].map((w, i) => (
              <div key={i} style={{ width: w, height: 4, background: "#ccc", borderRadius: 3 }} />
            ))}
          </div>
          <div style={{ width: 64, height: 24, background: "#E96E33", borderRadius: 6, boxShadow: "0 2px 8px rgba(233,110,51,0.35)" }} />
        </div>

        {/* Hero area with gradient */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(233,110,51,0.1) 0%, rgba(0,119,170,0.04) 40%, rgba(247,248,252,0.95) 70%)",
            padding: "24px 20px 20px",
            display: "flex",
            gap: 14,
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
            {/* Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} />
              <div style={{ width: 80, height: 5, background: "rgba(0,119,170,0.3)", borderRadius: 3 }} />
            </div>
            <div style={{ width: "65%", height: 11, background: "#0E0E1A", borderRadius: 4 }} />
            <div style={{ width: "85%", height: 11, background: "#0E0E1A", borderRadius: 4, opacity: 0.8 }} />
            <div style={{ width: "50%", height: 11, background: "#E96E33", borderRadius: 4, opacity: 0.9 }} />
            <div style={{ width: "90%", height: 5, background: "#bbb", borderRadius: 3, marginTop: 3 }} />
            <div style={{ width: "72%", height: 5, background: "#bbb", borderRadius: 3 }} />
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <div style={{ width: 80, height: 28, background: "#E96E33", borderRadius: 6, boxShadow: "0 4px 12px rgba(233,110,51,0.4)" }} />
              <div style={{ width: 70, height: 28, borderRadius: 6, border: "1.5px solid rgba(0,0,0,0.12)", background: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>

          {/* Right — mini browser preview visual */}
          <div
            style={{
              width: 72,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ width: "100%", height: 54, background: "rgba(233,110,51,0.12)", borderRadius: 8, border: "1px solid rgba(233,110,51,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(233,110,51,0.25)", border: "1px solid rgba(233,110,51,0.3)" }} />
            </div>
            <div style={{ width: "100%", height: 38, background: "rgba(0,119,170,0.08)", borderRadius: 8, border: "1px solid rgba(0,119,170,0.12)" }} />
          </div>
        </div>

        {/* Animated cards row */}
        <div
          style={{
            padding: "14px 20px 16px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          {[
            { r: 233, g: 110, b: 51, label: "Web" },
            { r: 0, g: 119, b: 170, label: "App" },
            { r: 107, g: 96, b: 255, label: "API" },
          ].map((c, i) => (
            <motion.div
              key={i}
              style={{
                background: `linear-gradient(135deg, rgba(${c.r},${c.g},${c.b},0.09) 0%, rgba(255,255,255,0.7) 100%)`,
                border: `1px solid rgba(${c.r},${c.g},${c.b},0.2)`,
                borderRadius: 8,
                padding: "10px 9px",
                boxShadow: `0 2px 8px rgba(${c.r},${c.g},${c.b},0.08)`,
              }}
              animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{
                duration: 2.5 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  background: `rgba(${c.r},${c.g},${c.b},0.25)`,
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: 2, background: `rgba(${c.r},${c.g},${c.b},0.7)` }} />
              </div>
              <div style={{ width: "80%", height: 5, background: "rgba(0,0,0,0.2)", borderRadius: 3, marginBottom: 4 }} />
              <div style={{ width: "95%", height: 4, background: "rgba(0,0,0,0.1)", borderRadius: 3, marginBottom: 3 }} />
              <div style={{ width: "65%", height: 4, background: "rgba(0,0,0,0.07)", borderRadius: 3 }} />
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <div
          style={{
            background: "linear-gradient(180deg, #F3F4F8 0%, #EEEEF4 100%)",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            padding: "10px 20px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 6,
          }}
        >
          {[
            { accent: "#E96E33" },
            { accent: "#0077AA" },
            { accent: "#8264ff" },
            { accent: "#16a34a" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ width: "60%", height: 8, background: s.accent, borderRadius: 3, opacity: 0.7 }} />
              <div style={{ width: "80%", height: 4, background: "#ccc", borderRadius: 3 }} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
