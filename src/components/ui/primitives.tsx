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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

export type Accent = "coral" | "teal" | "hero" | "cyan";

const accentClass: Record<Accent, string> = {
  coral: "text-coral font-normal",
  teal: "text-teal font-semibold",
  hero: "hero-gradient font-semibold",
  cyan: "text-[#7CCBDA] font-semibold",
};

export function Segments({ segments, accent = "coral" }: { segments: Segment[]; accent?: Accent }) {
  return (
    <>
      {segments.map((s, i) =>
        s.accent ? (
          <span key={i} className={accentClass[accent]}>{s.text}</span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

export function Eyebrow({ children, variant = "pill", light = false }: { children: React.ReactNode; variant?: "pill" | "plain"; light?: boolean }) {
  if (variant === "plain") {
    return <span className={`kicker ${light ? "text-teal-lt" : "text-teal"}`}>{children}</span>;
  }
  return (
    <span
      className={`kicker inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 ${
        light ? "border-white/30 bg-white/10 text-white" : "border-teal-lt/70 bg-sky text-teal"
      }`}
    >
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
  accent = "coral",
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
    size === "xl" ? "clamp(2.9rem, 7vw, 6rem)" : size === "lg" ? "clamp(2.2rem, 4.6vw, 3.9rem)" : "clamp(1.8rem, 3.2vw, 2.7rem)";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${className}`}>
      {eyebrow && <Eyebrow variant={eyebrowVariant} light={light}>{eyebrow}</Eyebrow>}
      <Tag className={`font-light ${light ? "text-white" : "text-ink"}`} style={{ fontSize, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        <Segments segments={title} accent={accent} />
      </Tag>
      {body && (
        <p className={`max-w-2xl ${light ? "text-white/80" : "text-ink-soft"}`} style={{ fontSize: "1.02rem", lineHeight: 1.75 }}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

export type Tone = "canvas" | "white" | "sky" | "soft" | "teal";

const sectionTone: Record<Tone, string> = {
  canvas: "bg-canvas",
  white: "bg-white",
  sky: "bg-sky",
  soft: "bg-soft",
  teal: "bg-teal text-white",
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
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type ButtonVariant = "teal" | "white" | "coral" | "outline" | "outline-light" | "link" | "link-light";

const buttonClass: Record<ButtonVariant, string> = {
  teal: "rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,96,120,0.25)] hover:bg-teal-dk",
  white: "rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-sky",
  coral: "kicker rounded-full bg-coral px-8 py-4 !text-[0.78rem] !tracking-[0.16em] text-obsidian hover:bg-pink",
  outline: "rounded-full border border-teal/40 px-6 py-3 text-sm font-semibold text-teal hover:border-teal hover:bg-sky",
  "outline-light": "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10",
  link: "kicker text-teal hover:text-coral-tx",
  "link-light": "kicker text-white hover:text-pink",
};

export function Button({
  href,
  children,
  variant = "teal",
  external = false,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `group inline-flex w-fit items-center gap-2.5 transition-colors duration-300 ${buttonClass[variant]}`;
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

export type CardTone = "white" | "sky" | "soft" | "pink" | "teal" | "red" | "canvas";

const cardTone: Record<CardTone, string> = {
  white: "bg-white border-line",
  canvas: "bg-canvas border-line",
  sky: "bg-sky border-teal-lt/60",
  soft: "bg-soft border-[#D8E3B0]",
  pink: "bg-[#FFE7E4] border-pink",
  teal: "bg-teal border-teal text-white",
  red: "bg-red border-red text-white",
};

export function isDarkTone(t: CardTone) {
  return t === "teal" || t === "red";
}

/** Rounded card with a pastel tone and an optional faint watermark number. */
export function Tile({
  tone = "white",
  watermark,
  className = "",
  children,
}: {
  tone?: CardTone;
  watermark?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,52,61,0.1)] ${cardTone[tone]} ${className}`}
    >
      {watermark && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-4 right-3 select-none font-semibold leading-none ${isDarkTone(tone) ? "text-white/10" : "text-ink/[0.06]"}`}
          style={{ fontSize: "5.5rem", letterSpacing: "-0.04em" }}
        >
          {watermark}
        </span>
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export function CheckList({ points, light = false, color = "teal" }: { points: string[]; light?: boolean; color?: "teal" | "coral" }) {
  return (
    <ul className="flex flex-col gap-2.5" role="list">
      {points.map((p) => (
        <li key={p} className={`flex items-start gap-3 ${light ? "text-white/90" : "text-ink-soft"}`} style={{ fontSize: "0.93rem", lineHeight: 1.6 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className={`mt-[0.35em] shrink-0 ${light ? "text-teal-lt" : color === "coral" ? "text-coral" : "text-teal"}`} aria-hidden="true">
            <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {p}
        </li>
      ))}
    </ul>
  );
}

const rotation: CardTone[] = ["sky", "soft", "pink", "sky"];

export function CardGrid({
  items,
  cols = 3,
  numbered = false,
  tones,
  kickerColor = "teal",
}: {
  items: Card[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
  tones?: CardTone[] | "rotate";
  kickerColor?: "teal" | "coral";
}) {
  const grid = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((item, i) => {
        const tone: CardTone = tones === "rotate" ? rotation[i % rotation.length] : tones?.[i % tones.length] ?? "white";
        const dark = isDarkTone(tone);
        return (
          <Reveal key={item.title || item.kicker || i} delay={(i % 4) * 0.07}>
            <Tile tone={tone} watermark={numbered ? String(i + 1).padStart(2, "0") : undefined} className="h-full">
              <div className="flex h-full flex-col gap-3 p-6 md:p-7">
                {item.kicker && (
                  <span className={`kicker ${dark ? "text-white/75" : kickerColor === "coral" ? "text-coral-tx" : "text-teal"}`}>{item.kicker}</span>
                )}
                {item.title && (
                  <h3 className={`${dark ? "text-white" : "text-teal"}`} style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                )}
                <p className={dark ? "text-white/85" : "text-ink-soft"} style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>
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

export function StatsRow({ stats, color = "coral" }: { stats: Stat[]; color?: "coral" | "teal" }) {
  return (
    <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={`flex flex-col gap-3 pr-4 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line pl-6 md:pl-8" : ""}`}>
          <dt className="kicker order-2 !text-[0.66rem] text-ink">{s.label}</dt>
          <dd className={`order-1 font-light ${color === "coral" ? "text-coral" : "text-teal"}`} style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            {s.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}

/** Small decorative constellation used under headings. */
export function Constellation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 80" width="230" height="76" className={className} aria-hidden="true">
      <g stroke="#82BAC4" strokeWidth="1.4" fill="none">
        <path d="M6 58 L62 18 L84 70 M62 18 L128 44 L184 12 L228 42 M128 44 L162 72" />
      </g>
      {[[6, 58], [62, 18], [84, 70], [128, 44], [184, 12], [228, 42]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#82BAC4" />
      ))}
      <circle cx="162" cy="72" r="5.5" fill="#E37C78" />
    </svg>
  );
}

/** Scattered four-point sparkles for section backgrounds. */
export function Sparkles({ count = 6, className = "" }: { count?: number; className?: string }) {
  const spots = [
    [8, 18, "#82BAC4"], [92, 12, "#E37C78"], [78, 70, "#82BAC4"], [15, 82, "#E37C78"], [52, 8, "#82BAC4"], [96, 48, "#82BAC4"], [34, 92, "#E37C78"], [64, 36, "#82BAC4"],
  ] as const;
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {spots.slice(0, count).map(([x, y, c], i) => (
        <svg key={i} viewBox="0 0 20 20" width={i % 3 === 0 ? 16 : 11} className="absolute animate-twinkle" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.6}s` }}>
          <path d="M10 0 C11 7 13 9 20 10 C13 11 11 13 10 20 C9 13 7 11 0 10 C7 9 9 7 10 0Z" fill={c} opacity="0.7" />
        </svg>
      ))}
    </div>
  );
}
