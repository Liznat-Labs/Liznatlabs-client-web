"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/site";
import { ParticleField } from "@/components/ui/ParticleField";
import {
  Button,
  CheckList,
  Constellation,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  Segments,
  Sparkles,
  StatsRow,
  Tile,
} from "@/components/ui/primitives";
import { AINetworkVisual, CityVisual, GlobeVisual, Rings } from "@/components/ui/visuals";
import { WorkGrid } from "@/components/sections/shared";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Hero ────────────────────────────────────────────────────────────────────

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
    <section
      data-nav-dark
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden text-white"
      style={{ background: "radial-gradient(1000px 600px at 70% 10%, rgba(61,124,255,0.18), transparent 60%), #05060A" }}
    >
      <ParticleField density={1.2} />
      <div className="shell relative pb-32 pt-36">
        <motion.span
          className="kicker block text-[#6AA8FF]"
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.32em" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          {home.hero.eyebrow}
        </motion.span>

        <h1 className="relative mt-8 font-extralight" style={{ fontSize: "clamp(3rem, 8.4vw, 8.5rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}>
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
                      <Segments segments={line} accent="hero" />
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
        >
          <Button href="/contact" variant="white">Book a strategy call</Button>
          <Button href="/services" variant="outline-light">Explore services</Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4" aria-hidden="true">
        <span className="kicker !text-[0.6rem] !tracking-[0.4em] text-white/50">{home.hero.scroll}</span>
        <span className="h-12 w-px animate-scroll-line bg-gradient-to-b from-[#6AA8FF] to-transparent" />
      </div>
    </section>
  );
}

// ─── Who we are ──────────────────────────────────────────────────────────────

export function WhoWeAre() {
  const c = home.whoWeAre;
  const bars = ["border-coral", "border-teal", "border-teal"];
  return (
    <Section id="who-we-are">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="font-light text-ink" style={{ fontSize: "clamp(2.6rem, 5.6vw, 4.8rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            {c.title.map((s, i) => (
              <span key={i} className={s.accent ? "block text-coral" : "block"}>{s.text.trim()}</span>
            ))}
          </h2>
          <Constellation className="mt-2" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 lg:pt-6">
          <div className="relative h-px w-full bg-teal-lt/60">
            <span className="absolute left-0 top-0 h-px w-16 bg-coral" />
          </div>
          <p className="text-ink" style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>{c.body[0]}</p>
          <p className="text-ink-soft" style={{ fontSize: "0.98rem", lineHeight: 1.75 }}>{c.body[1]} {c.kicker}</p>
          <span className="kicker flex items-center gap-3 text-ink">
            <span className="h-px w-6 bg-coral" />
            {c.location}
          </span>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-teal-lt/60 pt-12 md:grid-cols-3">
        {c.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className={`flex flex-col gap-2 border-l-2 pl-5 ${bars[i]}`}>
            <span className="kicker text-teal">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-semibold text-teal">{p.title}</h3>
            <p className="text-ink-soft" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ─── What we do: bento ───────────────────────────────────────────────────────

function IconBox({ d, className = "" }: { d: string; className?: string }) {
  return (
    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border border-teal-lt bg-white text-teal ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    </span>
  );
}

export function WhatWeDo() {
  const c = home.whatWeDo;
  const [ai, it, staffing] = c.items;
  const intel = home.intelligence;
  return (
    <Section id="what-we-do" tone="sky">
      <Sparkles count={5} />
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="mb-14" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.65fr_1fr]">
        <Reveal className="lg:row-span-2">
          <Tile tone="teal" className="h-full">
            <Rings className="-bottom-16 -right-16 h-56 w-56" color="rgba(255,255,255,0.07)" />
            <div className="flex h-full flex-col gap-6 p-7 md:p-9">
              <span className="kicker text-white/75">{ai.kicker}</span>
              <h3 className="font-normal" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.15rem)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>{ai.title}</h3>
              <p className="text-white/85" style={{ lineHeight: 1.75 }}>{ai.body}</p>
              <AINetworkVisual className="aspect-[16/9] w-full" />
              {ai.points && <CheckList points={ai.points} light />}
              <Button href="/services#ai-applications" variant="link-light">Explore AI applications</Button>
            </div>
          </Tile>
        </Reveal>

        {[
          { item: it, href: "/services#it-solutions", tone: "white" as const, icon: "M4 6h16M4 12h16M4 18h10" },
          { item: staffing, href: "/services#staffing", tone: "soft" as const, icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 4-6 8-6s8 2 8 6" },
        ].map(({ item, href, tone, icon }, i) => (
          <Reveal key={item.title} delay={0.08 + i * 0.08}>
            <Tile tone={tone} className="h-full border-teal-lt">
              <div className="flex h-full flex-col gap-4 p-7">
                <IconBox d={icon} />
                <span className="kicker text-teal">{item.kicker}</span>
                <h3 className="text-2xl font-normal text-ink" style={{ letterSpacing: "-0.015em" }}>{item.title}</h3>
                <p className="text-ink-soft" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>{item.body}</p>
                <div className="mt-auto pt-3"><Button href={href} variant="link">Learn more</Button></div>
              </div>
            </Tile>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2.1fr]">
        <Reveal>
          <Tile tone="red" className="h-full">
            <Rings className="-bottom-14 -right-14 h-52 w-52" />
            <div className="flex h-full flex-col gap-4 p-7 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/15">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /></svg>
              </span>
              <span className="kicker text-white/80">{c.engagement.eyebrow}</span>
              <h3 className="text-2xl font-normal">{c.engagement.title}</h3>
              <p className="text-white/90" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>{c.engagement.body}</p>
              <CheckList points={c.engagement.models} light />
            </div>
          </Tile>
        </Reveal>
        <Reveal delay={0.08}>
          <Tile tone="soft" className="h-full border-coral/50">
            <div className="flex h-full flex-col gap-7 p-7 md:p-9">
              <div className="flex flex-col gap-2">
                <span className="kicker text-teal">{intel.eyebrow}</span>
                <h3 className="text-2xl font-normal text-ink md:text-[1.75rem]" style={{ letterSpacing: "-0.015em" }}>
                  <Segments segments={intel.title} accent="teal" />
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-3">
                {intel.items.map((x) => (
                  <div key={x.title} className="flex flex-col gap-1">
                    <span className="kicker !text-[0.64rem] text-teal">{x.title}</span>
                    <span className="text-lg font-semibold text-teal">{x.kicker}</span>
                    <span className="text-ink-soft" style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>{x.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tile>
        </Reveal>
      </div>
    </Section>
  );
}

// ─── Enterprise (full teal band) and Talent ──────────────────────────────────

export function Enterprise() {
  const c = home.enterprise;
  return (
    <Section id="enterprise" tone="teal">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-7">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} size="md" light accent="coral" />
          <Reveal delay={0.1}><CheckList points={c.points} light /></Reveal>
          <Reveal delay={0.15}><Button href="/services#it-solutions" variant="link-light">{c.cta}</Button></Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <CityVisual className="aspect-[4/3] w-full shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
          <span className="kicker absolute bottom-5 left-5 rounded-full border border-white/25 bg-[#062530]/80 px-3.5 py-1.5 !text-[0.62rem] text-white backdrop-blur">
            Enterprise systems
          </span>
        </Reveal>
      </div>
    </Section>
  );
}

export function Talent() {
  const c = home.talent;
  return (
    <Section id="talent">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <GlobeVisual className="aspect-[4/3] w-full shadow-[0_30px_60px_rgba(23,52,61,0.25)]" />
          <span className="kicker absolute bottom-5 left-5 rounded-full bg-white px-3.5 py-1.5 !text-[0.62rem] text-teal">Delivery network</span>
        </Reveal>
        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} />
          <Reveal delay={0.1}><CheckList points={c.points} color="coral" /></Reveal>
          <Reveal delay={0.15}><Button href="/services#staffing" variant="link">{c.cta}</Button></Reveal>
        </div>
      </div>
    </Section>
  );
}

// ─── Proof and ecosystem ─────────────────────────────────────────────────────

export function Proof() {
  const c = home.proof;
  return (
    <Section id="proof" tone="soft">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="mb-14" />
      <StatsRow stats={c.stats} />
    </Section>
  );
}

export function Ecosystem() {
  const c = home.ecosystem;
  return (
    <Section id="ecosystem">
      <div className="mb-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-card" style={{ background: "radial-gradient(120% 100% at 30% 30%, #0B3A4A, #031419)" }} aria-hidden="true">
            {home.ecosystemImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="absolute w-[58%] rounded-lg border border-white/15 object-cover object-top shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                style={{ aspectRatio: "16/10", left: `${6 + i * 17}%`, top: `${10 + (i % 2) * 30}%`, transform: `rotate(${(i - 1) * 3}deg)`, zIndex: i }}
              />
            ))}
          </div>
        </Reveal>
        <div className="flex flex-col gap-7">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} />
          <Reveal delay={0.1}><Button href="/work" variant="link">{c.cta}</Button></Reveal>
        </div>
      </div>
      <WorkGrid limit={4} cols={4} />
    </Section>
  );
}
