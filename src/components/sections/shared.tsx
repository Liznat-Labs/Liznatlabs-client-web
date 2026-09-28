"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ctaBand, marqueeItems, processSteps, whyUs, workContent, type Segment } from "@/content/site";
import { Button, Glow, LMark, Reveal, Section, SectionHeading, Segments, Tile, type CardTone } from "@/components/ui/primitives";

// ─── Process: numbered steps on a gradient rail ──────────────────────────────

export function ProcessSteps() {
  return (
    <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
      <motion.span
        aria-hidden="true"
        className="absolute left-6 right-6 top-[30px] hidden h-[2px] origin-left rounded-full lg:block"
        style={{ background: "linear-gradient(90deg, #7C3AED, #4F46E5, #0891B2)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {processSteps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 0.08} className="relative flex flex-col gap-4">
          <span className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-line bg-white font-display text-lg font-bold shadow-[0_8px_24px_rgba(76,29,149,0.10)]">
            <span className="gradient-text">{String(i + 1).padStart(2, "0")}</span>
          </span>
          <div className="flex h-full flex-col gap-2 rounded-card border border-line bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
            <p className="text-ink-soft" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

// ─── Why us ──────────────────────────────────────────────────────────────────

const whyIcons = [
  "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
  "M13 2L4 14h7l-1 8 9-12h-7z",
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v10 M7 12h10",
  "M5 6h5v5H5z M14 6h5v5h-5z M5 15h5v5H5z M16.5 15v5 M14 17.5h5",
];
const whyTones: CardTone[] = ["white", "lilac", "ice", "mist"];

export function WhyUs({ eyebrow, title, body, id = "why" }: { eyebrow: string; title: Segment[]; body: string; id?: string }) {
  return (
    <Section id={id} tone="white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} className="lg:sticky lg:top-32 lg:self-start" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08}>
              <Tile tone={whyTones[i]} className="h-full">
                <div className="flex h-full flex-col gap-4 p-6 md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={whyIcons[i]} />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{w.title}</h3>
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
  const reduce = useReducedMotion();
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map((w, i) => (
        <Reveal as="article" key={w.title} delay={(i % 4) * 0.07}>
          <a
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-lt hover:shadow-[0_16px_40px_rgba(76,29,149,0.12)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={w.image}
                alt={`${w.title} website`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, ease: [0.65, 0.05, 0.36, 1], delay: 0.1 + (i % 4) * 0.08 }}
              />
              <span className="kicker absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 !text-[0.6rem] text-ink backdrop-blur">
                {w.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{w.title}</h3>
              <p className="text-ink-soft" style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{w.type}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                <span className="truncate font-mono text-[0.68rem] text-ink-soft">{hostOf(w.url)}</span>
                <span className="shrink-0 text-sm font-semibold text-brand">Visit →</span>
              </div>
            </div>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Quote band over Liznat's studio photo ───────────────────────────────────

export function QuoteBand({ quote, byline, cta }: { quote: string; byline: string; cta: { label: string; href: string } }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "url('/cta-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/60" />
      <div className="shell relative flex min-h-[460px] flex-col items-center justify-center gap-6 py-24 text-center">
        <Reveal>
          <p
            className="max-w-3xl font-display font-bold text-ink"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-0.02em", textShadow: "0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.9)" }}
          >
            {quote}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="kicker font-semibold text-ink" style={{ textShadow: "0 0 16px rgba(255,255,255,1)" }}>{byline}</span>
        </Reveal>
        <Reveal delay={0.12}><Button href={cta.href} variant="dark">{cta.label}</Button></Reveal>
      </div>
    </section>
  );
}

// ─── Scrolling services strip ────────────────────────────────────────────────

export function MarqueeStrip() {
  const reduce = useReducedMotion();
  const row = (
    <span className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-6 pr-6">
          <span className="font-display text-2xl font-bold text-ink md:text-4xl" style={{ letterSpacing: "-0.02em" }}>{item}</span>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "linear-gradient(135deg, #7C3AED, #0891B2)" }} />
        </span>
      ))}
    </span>
  );
  return (
    <section aria-label="What we build" className="tint-periwinkle overflow-hidden border-y border-[#E2DCFB] py-8">
      <div className={`flex w-max ${reduce ? "" : "animate-marquee"}`} aria-hidden="true">
        {row}
        {row}
      </div>
      <ul className="sr-only">
        {marqueeItems.map((m) => <li key={m}>{m}</li>)}
      </ul>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display font-semibold transition-colors ${isOpen ? "text-ink" : "text-ink-soft hover:text-ink"}`} style={{ fontSize: "1.02rem" }}>{item.q}</span>
                <span aria-hidden="true" className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-[transform,background-color,color] duration-500 ${isOpen ? "rotate-45 bg-ink text-white" : "bg-surface text-ink"}`}>
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
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-ink-soft" style={{ fontSize: "0.93rem", lineHeight: 1.8 }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Closing call to action: dark card with the Liznat mark ──────────────────

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
    <section className="tint-lavender relative overflow-hidden py-24 md:py-28">
      <Glow />
      <div className="shell relative">
        <Reveal>
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[24px] bg-night px-7 py-14 text-white md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand opacity-50 blur-[100px]" />
            <div aria-hidden="true" className="absolute -bottom-40 right-40 h-80 w-80 rounded-full bg-cyan opacity-30 blur-[100px]" />
            <LMark className="-bottom-10 right-8 h-56 w-56 md:h-72 md:w-72" />
            <span className="kicker relative text-brand-lt">{eyebrow}</span>
            <h2 className="relative max-w-2xl font-display font-bold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              <Segments segments={title} light />
            </h2>
            <p className="relative max-w-xl text-white/75" style={{ lineHeight: 1.75 }}>{body}</p>
            <div className="relative flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="white">{ctaBand.primary}</Button>
              {secondary && <Button href={secondary.href} variant="outline-light">{secondary.label}</Button>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
