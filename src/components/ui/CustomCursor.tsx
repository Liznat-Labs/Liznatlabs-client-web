"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 30, mass: 0.5 };
  const ringX = useSpring(rawX, springConfig);
  const ringY = useSpring(rawY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);
    document.body.classList.add("cursor-active");

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setHovered(true);
      }
    };

    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.body.classList.remove("cursor-active");
    };
  }, [rawX, rawY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot — follows mouse exactly */}
      <motion.div
        aria-hidden="true"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? "var(--accent)" : "var(--text)",
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "inherit",
          }}
        />
      </motion.div>

      {/* Outer ring — lags behind via spring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          width: hovered ? 40 : 28,
          height: hovered ? 40 : 28,
          borderRadius: "50%",
          border: `1px solid ${hovered ? "var(--accent)" : "rgba(245,239,230,0.35)"}`,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
