"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, var(--accent), rgba(0,119,170,0.8))",
      }}
      aria-hidden="true"
    />
  );
}
