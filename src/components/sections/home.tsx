"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { home, workContent } from "@/content/site";
import { Button, CheckList, GlowCard, Reveal, SectionHeading, Section } from "@/components/ui/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { headlines } = home.hero;

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % headlines.length), 4200);
    return () => clearInterval(id);
  }, [reduce, headlines.length]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center" aria-label="Introduction">
      <div className="shell pb-32 pt-36">
        <motion.span
          className="eyebrow block"
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.32em" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          {home.hero.eyebrow}
        </motion.span>

        <h1
          className="relative mt-10 font-extralight text-pearl"
          style={{ fontSize: "clamp(3rem, 8.4vw, 8.75rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}
        >
          {/* Screen readers get both headlines once instead of the animation */}
          <span className="sr-only">Software built with intent. Shipped with speed.</span>
          <span aria-hidden="true" className="relative block min-h-[2.1em]">
            <AnimatePresence mode="wait">
              <motion.span key={index} className="block">
                {headlines[index].map((line, li) => (
                  <span key={li} className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className="block"
                      initial={reduce ? false : { y: "105%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-105%", transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] } }}
                      transition={{ duration: 1, ease: EASE, delay: 0.1 + li * 0.08 }}
                    >
                      {line.map((s, si) =>
                        s.accent ? (
                          <span key={si} className="gradient-text font-bold">{s.text}</span>
                        ) : (
                          <span key={si}>{s.text}</span>
                        ),
                      )}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.div
          className="mt-14 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
        >
          <Button href="/contact">Book a strategy call</Button>
          <Button href="/services" variant="ghost">Explore services</Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4" aria-hidden="true">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.4em] text-muted">{home.hero.scroll}</span>
        <span className="h-12 w-px animate-scroll-line bg-gradient-to-b from-blue-bright to-transparent" />
      </div>
    </section>
  );
}

export function WhoWeAre() {
  const c = home.whoWeAre;
  return (
    <Section id="who-we-are">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />
        <Reveal delay={0.1} className="flex flex-col gap-6 lg:pt-14">
          {c.body.map((p) => (
            <p key={p} className="text-pearl-dim" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>{p}</p>
          ))}
          <p className="text-pearl" style={{ fontSize: "1.05rem" }}>{c.kicker}</p>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">{c.location}</span>
        </Reveal>
      </div>
      <div className="mt-20 grid grid-cols-1 border-t hairline md:grid-cols-3">
        {c.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className={`flex flex-col gap-4 py-10 md:px-8 ${i > 0 ? "border-t hairline md:border-l md:border-t-0" : "md:pl-0"}`}>
            <span className="font-mono text-sm text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-2xl font-light text-pearl">{p.title}</h3>
            <p className="text-pearl-dim" style={{ lineHeight: 1.7 }}>{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function WhatWeDo() {
  const c = home.whatWeDo;
  const [first, ...rest] = c.items;
  return (
    <Section id="what-we-do">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="mb-16" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Reveal className="lg:row-span-2">
          <GlowCard className="flex h-full flex-col gap-6 p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{first.kicker}</span>
            <h3 className="font-extralight text-pearl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {first.title}
            </h3>
            <p className="text-pearl-dim" style={{ lineHeight: 1.8 }}>{first.body}</p>
            {first.points && <CheckList points={first.points} />}
            <div className="mt-auto pt-4">
              <Button href="/services#ai-applications" variant="link">Explore AI applications</Button>
            </div>
          </GlowCard>
        </Reveal>
        {rest.map((item, i) => (
          <Reveal key={item.title} delay={0.1 + i * 0.08}>
            <GlowCard className="flex h-full flex-col gap-5 p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{item.kicker}</span>
              <h3 className="text-3xl font-extralight text-pearl" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
              <p className="text-pearl-dim" style={{ lineHeight: 1.8 }}>{item.body}</p>
              <div className="mt-auto pt-2">
                <Button href={i === 0 ? "/services#it-solutions" : "/services#staffing"} variant="link">Learn more</Button>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <div className="glass grid grid-cols-1 gap-8 rounded-[18px] p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
          <div className="flex flex-col gap-3">
            <span className="eyebrow">{c.engagement.eyebrow}</span>
            <h3 className="text-3xl font-extralight text-pearl">{c.engagement.title}</h3>
            <p className="text-pearl-dim" style={{ lineHeight: 1.75 }}>{c.engagement.body}</p>
          </div>
          <ul className="flex flex-col justify-center" role="list">
            {c.engagement.models.map((m, i) => (
              <li key={m} className="flex items-center gap-5 border-b hairline py-4 last:border-b-0">
                <span className="font-mono text-xs text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-light text-pearl">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export function IntelligenceLayer() {
  const c = home.intelligence;
  return (
    <Section id="intelligence">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="mb-16" />
      <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border hairline sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 3) * 0.08}
            className="group relative flex min-h-[240px] flex-col justify-between gap-10 border-b border-r hairline bg-[rgba(10,12,20,0.5)] p-8 transition-colors duration-500 hover:bg-[rgba(61,124,255,0.07)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{item.kicker}</span>
              <span className="h-2 w-2 rounded-full bg-blue-bright shadow-[0_0_16px_4px_rgba(61,124,255,0.6)] transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-extralight text-pearl" style={{ letterSpacing: "-0.03em" }}>{item.title}</h3>
              <p className="text-pearl-dim" style={{ lineHeight: 1.7 }}>{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Stacked "towers" of services — a visual for the enterprise section. */
function SystemsVisual() {
  const bars = [46, 72, 58, 92, 64, 80, 40, 68];
  return (
    <div className="glass relative flex aspect-[4/3] items-end justify-center gap-3 overflow-hidden rounded-[18px] p-10" aria-hidden="true">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(160,185,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(160,185,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {bars.map((h, i) => (
        <Reveal key={i} delay={i * 0.06} y={60} className="relative w-full max-w-[44px]">
          <div
            className="w-full rounded-t-md border hairline"
            style={{ height: `${h * 2.2}px`, background: "linear-gradient(to top, rgba(61,124,255,0.05), rgba(106,168,255,0.35))" }}
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 animate-pulse-soft rounded-full bg-blue-bright shadow-[0_0_14px_#3d7cff]" style={{ animationDelay: `${i * 0.3}s` }} />
          </div>
        </Reveal>
      ))}
      <span className="absolute left-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">Enterprise systems</span>
    </div>
  );
}

/** Network of locations radiating from Bengaluru — a visual for the talent section. */
function NetworkVisual() {
  const hub = { x: 62, y: 62 };
  const nodes = [
    { x: 20, y: 30, label: "Europe" },
    { x: 42, y: 44, label: "Gulf" },
    { x: 84, y: 28, label: "Asia-Pacific" },
    { x: 18, y: 72, label: "Americas" },
    { x: 86, y: 80, label: "Australia" },
  ];
  return (
    <div className="glass relative aspect-[4/3] overflow-hidden rounded-[18px]" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1={hub.x} y1={hub.y} x2={n.x} y2={n.y}
            stroke="rgba(106,168,255,0.45)" strokeWidth="0.25" strokeDasharray="1 1.2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: EASE }}
          />
        ))}
      </svg>
      {nodes.map((n) => (
        <div key={n.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <span className="h-2 w-2 rounded-full bg-pearl-dim" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">{n.label}</span>
        </div>
      ))}
      <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${hub.x}%`, top: `${hub.y}%` }}>
        <span className="relative flex h-4 w-4">
          <span className="absolute inset-0 animate-ping rounded-full bg-blue opacity-60" />
          <span className="relative h-4 w-4 rounded-full bg-blue-bright shadow-[0_0_24px_6px_rgba(61,124,255,0.6)]" />
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-pearl">Bengaluru</span>
      </div>
      <span className="absolute left-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">Delivery network</span>
    </div>
  );
}

function SplitFeature({
  id,
  content,
  href,
  visual,
  reverse = false,
}: {
  id: string;
  content: typeof home.enterprise;
  href: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <Section id={id}>
      <div className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} body={content.body} size="md" />
          <Reveal delay={0.1}><CheckList points={content.points} /></Reveal>
          <Reveal delay={0.15}><Button href={href} variant="ghost">{content.cta}</Button></Reveal>
        </div>
        <Reveal delay={0.1}>{visual}</Reveal>
      </div>
    </Section>
  );
}

export function Enterprise() {
  return <SplitFeature id="enterprise" content={home.enterprise} href="/services#it-solutions" visual={<SystemsVisual />} />;
}

export function Talent() {
  return <SplitFeature id="talent" content={home.talent} href="/services#staffing" visual={<NetworkVisual />} reverse />;
}

export function Ecosystem() {
  const c = home.ecosystem;
  return (
    <Section id="ecosystem">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} />
        <Reveal><Button href="/work" variant="ghost">{c.cta}</Button></Reveal>
      </div>
      <ul className="border-t hairline" role="list">
        {workContent.map((w, i) => (
          <Reveal as="li" key={w.title} delay={i * 0.05} className="border-b hairline">
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors md:grid-cols-[60px_1.2fr_1fr_auto]"
            >
              <span className="font-mono text-sm text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-2xl font-light text-pearl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{w.title}</span>
              <span className="hidden text-pearl-dim md:block">{w.category} · {w.type}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border hairline text-pearl-dim transition-colors duration-300 group-hover:border-blue-bright group-hover:text-blue-bright" aria-hidden="true">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-10">
        <Link href="/work" className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-pearl">
          Liznat Labs · A deep tech studio
        </Link>
      </Reveal>
    </Section>
  );
}
