"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brand, ctaBand, processSteps, whyUs, workContent, type Segment } from "@/content/site";
import { Button, Reveal, Section, SectionHeading, Segments, Sparkles, Tile, type CardTone } from "@/components/ui/primitives";

// ─── Process: five circles on a zig-zag dotted path, in a pink panel ─────────

const stepIcons = [
  // magnifier
  <g key="d"><circle cx="21" cy="21" r="9" stroke="#006078" /><path d="M28 28l8 8" stroke="#E37C78" strokeWidth="3" /></g>,
  // pen
  <g key="p"><path d="M12 36l3-10 16-16 7 7-16 16z" stroke="#006078" /><path d="M29 12l7 7" stroke="#E37C78" strokeWidth="3" /></g>,
  // code
  <g key="c"><path d="M17 15l-8 9 8 9M31 15l8 9-8 9" stroke="#006078" /><path d="M27 11l-6 26" stroke="#E37C78" strokeWidth="3" /></g>,
  // rocket
  <g key="r"><path d="M24 8c6 5 8 13 5 22h-10c-3-9-1-17 5-22z" stroke="#006078" /><circle cx="24" cy="19" r="3" stroke="#006078" /><path d="M21 34l3 7 3-7" stroke="#E37C78" strokeWidth="3" /></g>,
  // chart
  <g key="e"><path d="M10 38h28" stroke="#006078" /><path d="M14 38v-8M21 38v-13M28 38v-10M35 38v-18" stroke="#006078" strokeWidth="3.5" /><path d="M12 24l9-8 7 5 9-10" stroke="#E37C78" strokeWidth="2.5" /></g>,
];

export function ProcessSteps() {
  return (
    <Reveal>
      <div
        className="relative overflow-hidden rounded-[22px] border border-pink px-6 py-12 md:px-12 md:py-16"
        style={{ background: "linear-gradient(120deg, #FFE0DD 0%, #FFF1EE 45%, #FDFBEA 100%)" }}
      >
        <svg aria-hidden="true" className="absolute inset-x-12 top-[92px] hidden h-[110px] w-[calc(100%-6rem)] lg:block" viewBox="0 0 1000 110" preserveAspectRatio="none">
          <path d="M100 100 L300 10 L500 100 L700 10 L900 100" fill="none" stroke="#82BAC4" strokeWidth="2" strokeDasharray="3 7" />
        </svg>
        <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4" role="list">
          {processSteps.map((s, i) => (
            <li key={s.title} className={`flex flex-col items-center gap-4 text-center ${i % 2 === 1 ? "lg:-mt-2" : "lg:mt-[90px]"}`}>
              <span className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-teal-lt bg-white shadow-[0_10px_30px_rgba(0,96,120,0.12)]">
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {stepIcons[i]}
                </svg>
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-dk text-[0.7rem] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="text-lg font-semibold text-teal">{s.title}</h3>
              <p className="max-w-[16rem] text-ink-soft" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

// ─── Why us: heading on the left, four icon cards on the right ──────────────

const whyIcons = [
  "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
  "M13 2L4 14h7l-1 8 9-12h-7z",
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v10 M7 12h10",
  "M5 6h5v5H5z M14 6h5v5h-5z M5 15h5v5H5z M16.5 15v5 M14 17.5h5",
];
const whyTones: CardTone[] = ["white", "sky", "pink", "soft"];

export function WhyUs({ eyebrow, title, body, id = "why" }: { eyebrow: string; title: Segment[]; body: string; id?: string }) {
  return (
    <Section id={id} tone="soft">
      <Sparkles count={4} />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} size="lg" className="lg:sticky lg:top-32 lg:self-start" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
              <Tile tone={whyTones[i]} className="h-full">
                <div className="flex h-full flex-col gap-4 p-6 md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-lt bg-white/70 text-teal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={whyIcons[i]} />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-teal">{w.title}</h3>
                  <p className="text-ink-soft" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{w.body}</p>
                </div>
              </Tile>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Work: screenshot cards ──────────────────────────────────────────────────

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function WorkGrid({ limit, cols = 3 }: { limit?: number; cols?: 3 | 4 }) {
  const items = limit ? workContent.slice(0, limit) : workContent;
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map((w, i) => (
        <Reveal as="article" key={w.title} delay={(i % 4) * 0.07}>
          <a
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-card border border-line bg-white p-3 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-teal-lt hover:shadow-[0_18px_40px_rgba(23,52,61,0.12)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-sky">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.image} alt={`${w.title} website`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 px-2 pb-2 pt-4">
              <span className="kicker text-teal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-semibold text-ink">{w.title}</h3>
              <p className="text-ink-soft" style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>{w.category} · {w.type}</p>
              <div className="mt-auto flex items-center justify-between pt-3">
                <span className="truncate text-[0.72rem] tracking-wide text-teal">{hostOf(w.url)}</span>
                <span aria-hidden="true" className="text-teal-lt transition-transform duration-300 group-hover:translate-x-1">›</span>
              </div>
            </div>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Dark quote band with floating project screenshots ───────────────────────

const floatSpots = [
  { left: "3%", top: "20%", w: 250, delay: "0s" },
  { left: "21%", top: "5%", w: 200, delay: "1.2s" },
  { left: "15%", top: "62%", w: 220, delay: "2.1s" },
  { left: "67%", top: "8%", w: 210, delay: "0.6s" },
  { left: "80%", top: "34%", w: 250, delay: "1.8s" },
  { left: "71%", top: "70%", w: 210, delay: "2.6s" },
];

export function QuoteBand({ quote, byline, cta }: { quote: string; byline: string; cta: { label: string; href: string } }) {
  const shots = floatSpots.map((s, i) => ({ ...s, image: workContent[i % workContent.length].image }));
  return (
    <section data-nav-dark className="relative overflow-hidden" style={{ background: "radial-gradient(700px 400px at 50% 50%, rgba(0,96,120,0.4), transparent 70%), #05060A" }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {shots.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={s.image}
            alt=""
            loading="lazy"
            className="absolute animate-float rounded-lg border border-white/15 object-cover object-top opacity-80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ left: s.left, top: s.top, width: s.w, aspectRatio: "16/10", animationDelay: s.delay }}
          />
        ))}
      </div>
      <div className="shell relative flex min-h-[560px] flex-col items-center justify-center gap-7 py-24 text-center">
        <Reveal>
          <p className="max-w-3xl font-light text-white" style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            <span className="font-semibold text-coral">“</span>
            {quote}
            <span className="font-semibold text-coral">”</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}><span className="kicker text-teal-lt">{byline}</span></Reveal>
        <Reveal delay={0.12}><Button href={cta.href} variant="coral">{cta.label}</Button></Reveal>
      </div>
    </section>
  );
}

// ─── Wavy ribbon marquee ─────────────────────────────────────────────────────

export function Ribbon({ text = brand.motto.toUpperCase() }: { text?: string }) {
  const reduce = useReducedMotion();
  const phrase = `${text}  ✦  `;
  const content = phrase.repeat(12);
  return (
    <section aria-hidden="true" className="relative overflow-hidden bg-canvas py-10">
      <svg viewBox="0 0 1440 220" className="block h-[150px] w-[160%] -translate-x-[18%] md:h-[220px] md:w-full md:translate-x-0" preserveAspectRatio="none">
        <defs>
          <path id="ribbon-path" d="M-400 130 C -200 64, 0 64, 200 110 S 600 156, 800 110 S 1200 64, 1440 110 S 1840 156, 2040 110" />
        </defs>
        <use href="#ribbon-path" stroke="#00627A" strokeWidth="84" fill="none" strokeLinecap="butt" />
        <text fill="#FFFFFF" fontFamily="var(--font-sora), sans-serif" fontWeight="700" fontSize="46" letterSpacing="1" dy="16">
          <textPath href="#ribbon-path" startOffset="0">
            {content}
            {!reduce && <animate attributeName="startOffset" from="0" to="-1200" dur="22s" repeatCount="indefinite" />}
          </textPath>
        </text>
      </svg>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`rounded-2xl border transition-colors duration-300 ${isOpen ? "border-teal-lt bg-white" : "border-line bg-white/60"}`}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className={`font-semibold transition-colors ${isOpen ? "text-teal" : "text-ink"}`} style={{ fontSize: "1rem" }}>{item.q}</span>
                <span aria-hidden="true" className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-lt text-lg text-teal transition-transform duration-500 ${isOpen ? "rotate-45 bg-sky" : ""}`}>
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-ink-soft" style={{ fontSize: "0.93rem", lineHeight: 1.8 }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Closing call to action: a teal card ─────────────────────────────────────

export function CTABand({
  eyebrow = ctaBand.eyebrow,
  title = ctaBand.title,
  body = ctaBand.body,
  secondary = { label: ctaBand.secondary, href: "/services" },
}: {
  eyebrow?: string;
  title?: Segment[];
  body?: string;
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="relative bg-canvas py-24 md:py-28">
      <div className="shell">
        <Reveal>
          <div
            className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-[26px] px-6 py-16 text-center text-white md:px-16 md:py-20"
            style={{ background: "linear-gradient(135deg, #004858 0%, #00627A 55%, #3E8597 100%)" }}
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
            <span className="kicker relative text-teal-lt">{eyebrow}</span>
            <h2 className="relative font-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              <Segments segments={title} accent="coral" />
            </h2>
            <p className="relative max-w-xl text-white/85" style={{ lineHeight: 1.75 }}>{body}</p>
            <div className="relative flex flex-wrap justify-center gap-3 pt-2">
              <Button href="/contact" variant="white">{ctaBand.primary}</Button>
              {secondary && <Button href={secondary.href} variant="outline-light">{secondary.label}</Button>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
