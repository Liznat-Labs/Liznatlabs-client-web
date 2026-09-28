"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; z: number; vx: number; vy: number; phase: number };

/**
 * Full-screen constellation of drifting blue nodes joined by faint lines.
 * Depth (z) drives size, brightness and scroll parallax.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(coarse ? 45 : 110, (w * h) / (coarse ? 16000 : 12000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 1.6,
        z: Math.random() * 0.85 + 0.15,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const LINK = 150;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const scroll = window.scrollY;
      const pts: { x: number; y: number; z: number }[] = [];

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h * 1.6;
          if (n.y > h * 1.6) n.y = -20;
        }
        // Nearer nodes move faster with scroll, giving a sense of depth
        let y = (n.y - scroll * n.z * 0.35) % (h * 1.6);
        if (y < -20) y += h * 1.6;
        let x = n.x;
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const d = Math.hypot(dx, dy);
        if (d < 180) {
          x += (dx / d) * (180 - d) * 0.06 * n.z;
          y += (dy / d) * (180 - d) * 0.06 * n.z;
        }
        pts.push({ x, y, z: n.z });
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.16 * Math.min(a.z, b.z);
            ctx.strokeStyle = `rgba(106,168,255,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const p = pts[i];
        const pulse = reduceMotion ? 1 : 0.7 + 0.3 * Math.sin(t * 0.0012 + n.phase);
        const r = 0.6 + p.z * 1.8;
        const alpha = 0.25 + p.z * 0.6 * pulse;
        if (p.z > 0.7) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 9);
          g.addColorStop(0, `rgba(61,124,255,${(0.35 * pulse).toFixed(3)})`);
          g.addColorStop(1, "rgba(61,124,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 9, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(170,200,255,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    };
    const onScrollStatic = () => draw(0);

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw(0);
      window.addEventListener("scroll", onScrollStatic, { passive: true });
    } else {
      raf = requestAnimationFrame(loop);
      if (!coarse) window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScrollStatic);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 70% -10%, rgba(61,124,255,0.14), transparent 60%), radial-gradient(900px 600px at -10% 110%, rgba(61,124,255,0.08), transparent 60%), #05060a",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
