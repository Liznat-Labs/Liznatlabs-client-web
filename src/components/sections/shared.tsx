"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ctaBand, processSteps, whyUs, workContent, type Segment } from "@/content/site";
import { Button, CardGrid, GlowCard, Reveal, SectionHeading, Section, Segments } from "@/components/ui/primitives";

export function ProcessSteps() {
  return (
    <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-5" role="list">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-[27px] hidden h-px md:block"
        style={{ background: "linear-gradient(90deg, transparent, rgba(106,168,255,0.5), transparent)" }}
      />
      {processSteps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 0.1} className="relative flex flex-col gap-5">
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border hairline bg-bg font-mono text-sm text-blue-bright shadow-[0_0_30px_rgba(61,124,255,0.25)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-light text-pearl">{s.title}</h3>
          <p className="text-pearl-dim" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function WhyUs({ eyebrow, title, body }: { eyebrow: string; title: Segment[]; body: string }) {
  return (
    <Section id="why">
      <SectionHeading eyebrow={eyebrow} title={title} body={body} className="mb-16" />
      <CardGrid items={whyUs} cols={4} numbered />
    </Section>
  );
}

export function WorkGrid({ limit }: { limit?: number }) {
  const items = limit ? workContent.slice(0, limit) : workContent;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((w, i) => (
        <Reveal as="article" key={w.title} delay={(i % 3) * 0.08}>
          <GlowCard className="group flex h-full flex-col overflow-hidden">
            <a href={w.url} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col" aria-label={`${w.title} — visit live site (opens in new tab)`}>
              <div className="relative aspect-[16/10] overflow-hidden border-b hairline">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top opacity-80 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border hairline bg-[rgba(5,6,10,0.7)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-blue-bright backdrop-blur">
                  {String(i + 1).padStart(2, "0")} · {w.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{w.type}</span>
                <h3 className="text-2xl font-light text-pearl">{w.title}</h3>
                <p className="text-pearl-dim" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>{w.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                  {w.tags.map((t) => (
                    <span key={t} className="rounded-full border hairline px-3 py-1 font-mono text-[0.68rem] tracking-wide text-pearl-dim">
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blue-bright">
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#3ee089]" aria-hidden="true" />
                    Live
                  </span>
                </div>
              </div>
            </a>
          </GlowCard>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b hairline">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className={`text-lg font-light transition-colors md:text-xl ${isOpen ? "text-pearl" : "text-pearl-dim hover:text-pearl"}`}>
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border hairline text-blue-bright transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                >
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
                  <p className="max-w-3xl pb-8 text-pearl-dim" style={{ lineHeight: 1.8 }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

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
    <section className="relative overflow-hidden border-t hairline">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(800px 400px at 50% 100%, rgba(61,124,255,0.22), transparent 70%)" }}
      />
      <div className="shell relative flex flex-col items-center gap-8 py-32 text-center md:py-44">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-extralight text-pearl" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 1, letterSpacing: "-0.035em" }}>
            <Segments segments={title} />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-pearl-dim" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>{body}</p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap justify-center gap-3">
          <Button href="/contact">{ctaBand.primary}</Button>
          {secondary && <Button href={secondary.href} variant="ghost">{secondary.label}</Button>}
        </Reveal>
      </div>
    </section>
  );
}
