"use client";

import { motion } from "framer-motion";

export function BorderBeam({
  duration = 8,
  colorFrom = "rgba(0,229,255,0.85)",
  colorTo = "rgba(139, 92, 246,0.65)",
}: {
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        width: "200%",
        height: "200%",
        left: "-50%",
        top: "-50%",
        background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 12%, ${colorTo} 26%, transparent 40%)`,
        zIndex: 0,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    />
  );
}
