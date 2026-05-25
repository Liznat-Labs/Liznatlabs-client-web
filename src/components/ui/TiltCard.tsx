"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function TiltCard({
  children,
  maxTilt = 8,
  className,
}: {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 200, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 20 });

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        style={{ rotateX: springRx, rotateY: springRy, height: "100%" }}
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const { left, top, width, height } = el.getBoundingClientRect();
          rx.set(-((e.clientY - top) / height - 0.5) * maxTilt * 2);
          ry.set(((e.clientX - left) / width - 0.5) * maxTilt * 2);
        }}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
