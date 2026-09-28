"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin purple→cyan bar along the top edge that fills as the page scrolls. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ scaleX: reduce ? scrollYProgress : scaleX, background: "linear-gradient(90deg, #7C3AED, #4F46E5, #0891B2)" }}
    />
  );
}
