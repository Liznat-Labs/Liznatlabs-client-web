"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Card, Segment, Stat } from "@/content/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

/** "gradient" is Liznat's italic purple→cyan highlight; "brand" is solid purple. */
export type Accent = "gradient" | "brand";

export function Segments({ segments, accent = "gradient", light = false }: { segments: Segment[]; accent?: Accent; light?: boolean }) {
  return (
    <>
      {segments.map((s, i) =>
        s.accent ? (
          <span
            key={i}
            className={accent === "gradient" ? `italic ${light ? "text-[#A5F3FC]" : "gradient-text"}` : light ? "text-brand-lt" : "text-brand"}
          >
            {s.text}
          </span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

export function Eyebrow({ children, variant = "pill", light = false }: { children: React.ReactNode; variant?: "pill" | "plain"; light?: boolean }) {
  if (variant === "plain") {
    return <span className={`kicker ${light ? "text-brand-lt" : "text-ink-soft"}`}>{children}</span>;
  }
  return (
    <span
      className={`kicker inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 ${
        light ? "border-white/25 bg-white/5 text-white/85" : "border-line bg-white text-ink-soft"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-brand-lt" : "bg-brand"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  as: Tag = "h2",
  size = "lg",
  accent = "gradient",
  eyebrowVariant = "pill",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: Segment[];
  body?: string;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  accent?: Accent;
  eyebrowVariant?: "pill" | "plain";
  light?: boolean;
  className?: string;
}) {
  const fontSize =
    size === "xl" ? "clamp(2.6rem, 6vw, 5rem)" : size === "lg" ? "clamp(2rem, 4vw, 3.1rem)" : "clamp(1.7rem, 3vw, 2.4rem)";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${className}`}>
      {eyebrow && <Eyebrow variant={eyebrowVariant} light={light}>{eyebrow}</Eyebrow>}
      <Tag className={`font-display font-semibold ${light ? "text-white" : "text-ink"}`} style={{ fontSize, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
        <Segments segments={title} accent={accent} light={light} />
      </Tag>
      {body && (
        <p className={`max-w-2xl ${light ? "text-white/75" : "text-ink-soft"}`} style={{ fontSize: "1rem", lineHeight: 1.75 }}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

export type Tone = "canvas" | "white" | "surface" | "lilac" | "ice" | "night";

const sectionTone: Record<Tone, string> = {
  canvas: "bg-canvas",
  white: "bg-white",
  surface: "bg-surface",
  lilac: "bg-lilac",
  ice: "bg-ice",
  night: "bg-night text-white",
};

export function Section({
  id,
  children,
  className = "",
  tone = "canvas",
  tight = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`relative scroll-mt-32 overflow-hidden ${sectionTone[tone]} ${className}`}>
      <div className={`shell relative ${tight ? "py-16 md:py-20" : "py-24 md:py-28"}`}>{children}</div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type ButtonVariant = "brand" | "dark" | "white" | "outline" | "outline-light" | "link" | "link-light";

// Pill buttons in the style of the original Liznat hero
const buttonClass: Record<ButtonVariant, string> = {
  brand: "rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dk",
  dark: "rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand",
  white: "rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-lilac",
  outline: "rounded-full border-2 border-ink/30 bg-white/70 px-6 py-[10px] text-sm font-semibold text-ink hover:border-brand hover:text-brand",
  "outline-light": "rounded-full border-2 border-white/35 px-6 py-[10px] text-sm font-semibold text-white hover:border-white hover:bg-white/10",
  link: "text-sm font-semibold text-ink underline decoration-brand-lt decoration-2 underline-offset-[6px] hover:text-brand",
  "link-light": "text-sm font-semibold text-white underline decoration-white/40 decoration-2 underline-offset-[6px] hover:decoration-white",
};

export function Button({
  href,
  children,
  variant = "dark",
  external = false,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `group inline-flex w-fit items-center gap-2 transition-colors duration-300 ${buttonClass[variant]}`;
  if (!href) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        {children}
        <Arrow />
      </button>
    );
  }
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} {...props} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
}

export type CardTone = "white" | "canvas" | "lilac" | "ice" | "mist" | "night" | "brand";

const cardTone: Record<CardTone, string> = {
  white: "bg-white border-line",
  canvas: "bg-canvas border-line",
  lilac: "bg-lilac border-[#E2D6FF]",
  ice: "bg-ice border-[#CDEBF3]",
  mist: "bg-mist border-[#DCDFFB]",
  night: "bg-night border-night text-white",
  brand: "bg-brand border-brand text-white",
};

export function isDarkTone(t: CardTone) {
  return t === "night" || t === "brand";
}

/** Card in a Liznat tone, with an optional corner index number. */
export function Tile({
  tone = "white",
  index,
  className = "",
  children,
}: {
  tone?: CardTone;
  index?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = isDarkTone(tone);
  return (
    <div className={`relative overflow-hidden rounded-card border transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(76,29,149,0.10)] ${cardTone[tone]} ${className}`}>
      {tone === "night" && (
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand opacity-40 blur-[80px]" />
      )}
      {index && (
        <span aria-hidden="true" className={`absolute right-5 top-5 font-mono text-xs ${dark ? "text-white/40" : "text-ink/30"}`}>
          {index}
        </span>
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export function CheckList({ points, light = false, color = "brand" }: { points: string[]; light?: boolean; color?: "brand" | "cyan" }) {
  return (
    <ul className="flex flex-col gap-2.5" role="list">
      {points.map((p) => (
        <li key={p} className={`flex items-start gap-3 ${light ? "text-white/85" : "text-ink-soft"}`} style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`mt-[0.2em] shrink-0 ${light ? "text-brand-lt" : color === "cyan" ? "text-cyan" : "text-brand"}`} aria-hidden="true">
            <path d="M2.5 7.5 L5.5 10.5 L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {p}
        </li>
      ))}
    </ul>
  );
}

const rotation: CardTone[] = ["lilac", "ice", "mist", "white"];

export function CardGrid({
  items,
  cols = 3,
  numbered = false,
  tones,
  kickerColor = "brand",
}: {
  items: Card[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
  tones?: CardTone[] | "rotate";
  kickerColor?: "brand" | "cyan";
}) {
  const grid = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((item, i) => {
        const tone: CardTone = tones === "rotate" ? rotation[i % rotation.length] : tones?.[i % tones.length] ?? "white";
        const dark = isDarkTone(tone);
        return (
          <Reveal key={item.title || item.kicker || i} delay={(i % 4) * 0.07}>
            <Tile tone={tone} index={numbered ? String(i + 1).padStart(2, "0") : undefined} className="h-full">
              <div className="flex h-full flex-col gap-3 p-6 md:p-7">
                {item.kicker && (
                  <span className={`kicker ${dark ? "text-white/70" : kickerColor === "cyan" ? "text-cyan-dk" : "text-brand"}`}>{item.kicker}</span>
                )}
                {item.title && (
                  <h3 className={`font-display ${dark ? "text-white" : "text-ink"}`} style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                )}
                <p className={dark ? "text-white/80" : "text-ink-soft"} style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {item.body}
                </p>
                {item.points && <div className="pt-2"><CheckList points={item.points} light={dark} /></div>}
              </div>
            </Tile>
          </Reveal>
        );
      })}
    </div>
  );
}

export function StatsRow({ stats, color = "gradient" }: { stats: Stat[]; color?: "gradient" | "brand" }) {
  return (
    <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={`flex flex-col gap-3 pr-4 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line pl-6 md:pl-8" : ""}`}>
          <dt className="kicker order-2 text-ink-soft">{s.label}</dt>
          <dd
            className={`order-1 font-display font-bold ${color === "gradient" ? "gradient-text" : "text-brand"}`}
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            {s.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}

/** Soft purple/cyan glows for section backgrounds. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/10 blur-[90px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan/10 blur-[90px]" />
    </div>
  );
}

/** Large faint Liznat "L" mark used as a card watermark. */
export function LMark({ className = "", color = "rgba(255,255,255,0.08)" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 46" className={`pointer-events-none absolute ${className}`}>
      <path d="M0 0 L14 0 L14 32 L38 32 L38 46 L0 46 Z" fill={color} />
      <rect x="22" y="4" width="10" height="10" fill={color} />
    </svg>
  );
}
