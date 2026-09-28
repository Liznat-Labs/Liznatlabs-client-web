"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Card, Segment, Stat } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

export function Segments({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.accent ? (
          <span key={i} className="gradient-text font-semibold">
            {s.text}
          </span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  as: Tag = "h2",
  size = "lg",
  className = "",
}: {
  eyebrow?: string;
  title: Segment[];
  body?: string;
  as?: "h1" | "h2";
  size?: "xl" | "lg" | "md";
  className?: string;
}) {
  const fontSize =
    size === "xl" ? "clamp(2.75rem, 7vw, 6rem)" : size === "lg" ? "clamp(2.1rem, 4.6vw, 4rem)" : "clamp(1.75rem, 3.2vw, 2.75rem)";
  return (
    <Reveal className={`flex max-w-4xl flex-col gap-6 ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="font-extralight text-pearl" style={{ fontSize, lineHeight: 1.04, letterSpacing: "-0.03em" }}>
        <Segments segments={title} />
      </Tag>
      {body && <p className="max-w-2xl text-pearl-dim" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>{body}</p>}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={`relative scroll-mt-36 ${bordered ? "border-t hairline" : ""} ${className}`}>
      <div className="shell py-24 md:py-32">{children}</div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "link";
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "bg-pearl text-bg hover:bg-blue-bright"
      : variant === "ghost"
        ? "border hairline text-pearl hover:border-blue-bright hover:text-blue-bright"
        : "text-blue-bright hover:text-pearl";
  const pad = variant === "link" ? "" : "rounded-full px-6 py-3";
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} {...props} className={`group inline-flex items-center gap-2.5 font-mono text-sm tracking-wide transition-colors duration-300 ${pad} ${cls}`}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Card with a soft glow that follows the cursor. */
export function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`glow-card glass rounded-[18px] transition-colors duration-500 hover:border-[rgba(106,168,255,0.35)] ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}

export function CheckList({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-3 text-pearl-dim" style={{ fontSize: "0.95rem" }}>
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-bright shadow-[0_0_10px_#3d7cff]" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({
  items,
  cols = 3,
  numbered = false,
}: {
  items: Card[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const grid = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 4) * 0.08}>
          <GlowCard className="flex h-full flex-col gap-4 p-7 md:p-8">
            {(numbered || item.kicker) && (
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">
                {numbered ? String(i + 1).padStart(2, "0") : item.kicker}
              </span>
            )}
            {numbered && item.kicker && (
              <span className="-mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">{item.kicker}</span>
            )}
            <h3 className="text-pearl" style={{ fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.01em" }}>
              {item.title}
            </h3>
            <p className="text-pearl-dim" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              {item.body}
            </p>
            {item.points && <CheckList points={item.points} />}
          </GlowCard>
        </Reveal>
      ))}
    </div>
  );
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 border-y hairline md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className={`flex flex-col gap-2 px-2 py-8 md:px-6 ${i % 2 === 1 ? "border-l hairline" : ""} ${i >= 2 ? "border-t hairline md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <dt className="order-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">{s.label}</dt>
          <dd className="order-1 gradient-text font-light" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            {s.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
