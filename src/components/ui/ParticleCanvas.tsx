"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  phase: number;
  phaseSpeed: number;
  r: number;
  g: number;
  b: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const size = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const init = () => {
      size.current.w = canvas.width = canvas.offsetWidth;
      size.current.h = canvas.height = canvas.offsetHeight;

      const { w, h } = size.current;
      const count = Math.min(70, Math.floor((w * h) / 9000));
      particlesRef.current = Array.from({ length: count }, () => {
        const isCyan = Math.random() > 0.45;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 0.6,
          baseOpacity: Math.random() * 0.3 + 0.1,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.018 + 0.006,
          r: isCyan ? 8 : 233,
          g: isCyan ? 145 : 110,
          b: isCyan ? 178 : 51,
        };
      });
    };

    init();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const LINK = 140;
    const REPEL = 90;
    const MAX_SPD = 1.8;

    const tick = () => {
      const { w, h } = size.current;
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current;
      const { x: mx, y: my } = mouse.current;

      for (const p of ps) {
        p.phase += p.phaseSpeed;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse repulsion
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < REPEL && md > 0) {
          p.vx += (mdx / md) * ((REPEL - md) / REPEL) * 0.12;
          p.vy += (mdy / md) * ((REPEL - md) / REPEL) * 0.12;
        }

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPD) { p.vx = (p.vx / spd) * MAX_SPD; p.vy = (p.vy / spd) * MAX_SPD; }

        const a = p.baseOpacity * (0.65 + 0.35 * Math.sin(p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${a.toFixed(2)})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const a = ((1 - d / LINK) * 0.18).toFixed(3);
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(8,145,178,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.55, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
