"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

/**
 * Inertia smooth scrolling for wheel and trackpad. Scroll position stays native,
 * so sticky sections and framer-motion scroll effects keep working.
 * Skipped entirely for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({
      lerp: 0.1,
      autoRaf: true,
      // In-page links (#section) glide there; sections' scroll-margin clears the fixed nav
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // New page: start at the top (unless the URL targets a section)
  useEffect(() => {
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
