"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { zynk } from "@/content/site";
import { Button, CheckList, Reveal, Section, SectionHeading, Tile } from "@/components/ui/primitives";

// Scroll story: the hub builds up in three stages, one per principle.
const STAGE_APPS: string[][] = [
  ["HR & Payroll"],
  ["HR & Payroll", "Accounting & Finance", "Billing", "CFO Suite", "ERP & Operations"],
  zynk.apps.map((a) => a.name),
];
const STAGE_CAPTIONS = ["Start with one app", "Apps connect as you add them", "Run the whole company"];

function useIsDesktop() {
  const [lg, setLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setLg(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return lg;
}

/** Every Zynk Works app around a central hub; apps outside the current stage are dimmed. */
function AppHub({ stage }: { stage: number }) {
  const reduce = useReducedMotion();
  const lit = new Set(STAGE_APPS[stage]);
  const n = zynk.apps.length;
  const nodes = zynk.apps.map((app, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { ...app, x: 50 + Math.cos(a) * 38, y: 50 + Math.sin(a) * 38, on: lit.has(app.name) };
  });
  return (
    <div aria-hidden="true" className="px-10 sm:px-0">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle cx="50" cy="50" r="38" fill="none" stroke="#C4B5FD" strokeWidth="0.25" strokeDasharray="1 1.5" />
          {nodes.map((nd, i) => (
            <g key={nd.name}>
              <line x1="50" y1="50" x2={nd.x} y2={nd.y} stroke="#DDD6FE" strokeWidth="0.3" />
              <motion.line
                x1="50" y1="50" x2={nd.x} y2={nd.y}
                stroke={nd.live ? "#6D28D9" : "#8B5CF6"}
                strokeWidth={nd.live ? 0.7 : 0.45}
                initial={false}
                animate={{ pathLength: nd.on ? 1 : 0, opacity: nd.on ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : (i % 5) * 0.05 }}
              />
              {!reduce && nd.on && (
                <circle r={nd.live ? 0.9 : 0.6} fill={i % 2 ? "#0891B2" : "#6D28D9"}>
                  <animateMotion dur={`${2.4 + (i % 4) * 0.5}s`} repeatCount="indefinite" path={`M50 50 L${nd.x} ${nd.y}`} keyPoints={i % 2 ? "0;1" : "1;0"} keyTimes="0;1" calcMode="linear" />
                </circle>
              )}
            </g>
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-night text-center text-white shadow-[0_20px_50px_rgba(76,29,149,0.4)]">
            <span className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 25%, rgba(124,58,237,0.7), transparent 65%)" }} />
            {!reduce && <span className="absolute -inset-2 animate-ping rounded-full border border-brand-lt [animation-duration:2.6s]" />}
            <span className="relative font-display text-[clamp(0.95rem,2.4vw,1.35rem)] font-bold leading-tight">Zynk<br />Works</span>
          </div>
        </div>

        {nodes.map((nd) => (
          <span key={nd.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${nd.x}%`, top: `${nd.y}%` }}>
            <motion.span
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-1 text-[0.58rem] font-semibold shadow-sm sm:px-3 sm:py-1.5 sm:text-[0.7rem] ${
                nd.live ? "border-brand bg-brand text-white" : "border-line bg-white text-ink"
              }`}
              initial={false}
              animate={{ opacity: nd.on ? 1 : 0.35, scale: nd.on ? 1 : 0.9 }}
              transition={{ duration: reduce ? 0 : 0.5 }}
            >
              {nd.live && <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />}
              {nd.name}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Principles({ stage, story }: { stage: number; story: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {zynk.principles.map((p, i) => {
        const active = !story || i === stage;
        return (
          <div
            key={p.title}
            className={`flex gap-4 rounded-card border p-5 transition-[background-color,border-color,opacity,transform] duration-500 ${
              active ? "border-brand-lt bg-white opacity-100 shadow-[0_12px_30px_rgba(76,29,149,0.10)]" : "border-line bg-white/90 opacity-75"
            } ${story && active ? "translate-x-2" : ""}`}
          >
            <span className={`font-mono text-xs ${active ? "text-brand" : "text-ink-soft"}`}>{String(i + 1).padStart(2, "0")}</span>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-semibold text-ink">{p.title}</h3>
              <p className="text-ink-soft" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{p.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ZynkWorks({ id = "zynk-works" }: { id?: string }) {
  const hr = zynk.hr;
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const story = desktop && !reduce;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const [stage, setStage] = useState(2);

  useEffect(() => setStage(story ? 0 : 2), [story]);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (story) setStage(v < 0.34 ? 0 : v < 0.67 ? 1 : 2);
  });

  const body = (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={zynk.eyebrow} title={zynk.title} body={zynk.body} />
        <Principles stage={stage} story={story} />
      </div>
      <div>
        <AppHub stage={stage} />
        <div className="mt-3 flex flex-col items-center gap-2">
          {story && (
            <div className="flex items-center gap-3">
              {STAGE_CAPTIONS.map((c, i) => (
                <span key={c} className={`h-1.5 rounded-full transition-all duration-500 ${i <= stage ? "w-8 bg-brand" : "w-4 bg-brand-lt/60"}`} />
              ))}
            </div>
          )}
          <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">
            {story ? STAGE_CAPTIONS[stage] : <><span className="text-brand">●</span> Live now &nbsp;·&nbsp; others in development</>}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Section id={id} tone="lilac">
      {story ? (
        // Tall track; the content stays pinned while the page scrolls through it
        <div ref={trackRef} className="relative h-[230vh]">
          <div className="sticky top-0 flex h-screen items-center pt-16">{body}</div>
        </div>
      ) : (
        <div ref={trackRef}>{body}</div>
      )}

      <Reveal className="mt-16">
        <Tile tone="white" className="shadow-[0_24px_60px_rgba(76,29,149,0.12)]">
          <div className="grid grid-cols-1 items-center gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col gap-5">
              <span className="kicker flex items-center gap-2 text-brand">
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                {hr.kicker} · {hr.name}
              </span>
              <h3 className="font-display font-bold text-ink" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                {hr.title}
              </h3>
              <p className="text-ink-soft" style={{ lineHeight: 1.75 }}>{hr.body}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <CheckList points={hr.points.slice(0, 2)} />
                <CheckList points={hr.points.slice(2)} />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href={hr.url} external variant="brand">Try {hr.name}</Button>
                <Button href="/contact" variant="outline">{zynk.cta}</Button>
              </div>
            </div>
            <a href={hr.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-line shadow-[0_16px_40px_rgba(10,10,10,0.12)]">
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-[0.65rem] text-ink-soft">{hr.host}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hr.image} alt="zynkworks-hr homepage" loading="lazy" className="block w-full transition-transform duration-700 group-hover:scale-[1.02]" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </Tile>
      </Reveal>
    </Section>
  );
}
