"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; z: number; vx: number; vy: number; phase: number };

/**
 * Constellation of drifting blue nodes joined by faint lines, filling its parent.
 * Depth (z) drives size and brightness. Pauses while off-screen or the tab is hidden.
 */
export function ParticleField({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(coarse ? 40 : 95, ((w * h) / (coarse ? 14000 : 11000)) * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.85 + 0.15,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        phase: Math.random() * Math.PI * 2,
      }));
      if (reduceMotion) draw(0);
    };

    const LINK = 150;

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      const pts = nodes.map((n) => {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
        let { x, y } = n;
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const d = Math.hypot(dx, dy);
        if (d < 180 && d > 0) {
          x += (dx / d) * (180 - d) * 0.06 * n.z;
          y += (dy / d) * (180 - d) * 0.06 * n.z;
        }
        return { x, y, z: n.z };
      });

      ctx!.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx!.strokeStyle = `rgba(106,168,255,${((1 - d / LINK) * 0.18 * Math.min(a.z, b.z)).toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const p = pts[i];
        const pulse = reduceMotion ? 1 : 0.7 + 0.3 * Math.sin(t * 0.0012 + n.phase);
        const r = 0.6 + p.z * 1.8;
        if (p.z > 0.7) {
          const g = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 10);
          g.addColorStop(0, `rgba(61,124,255,${(0.4 * pulse).toFixed(3)})`);
          g.addColorStop(1, "rgba(61,124,255,0)");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, r * 10, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = `rgba(170,200,255,${(0.25 + p.z * 0.6 * pulse).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
      });
    }

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (!reduceMotion && visible && !document.hidden) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); });
    io.observe(host);
    document.addEventListener("visibilitychange", start);
    if (!coarse && !reduceMotion) {
      host.addEventListener("pointermove", onMove, { passive: true });
      host.addEventListener("pointerleave", onLeave);
    }
    resize();
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", start);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}
