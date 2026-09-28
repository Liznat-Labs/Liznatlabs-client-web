"use client";

import { home } from "@/content/site";
import { Button, CheckList, Eyebrow, Glow, LMark, Reveal, Section, SectionHeading, Segments, StatsRow, Tile } from "@/components/ui/primitives";
import { ArchitectureVisual, AssistantVisual, TeamVisual } from "@/components/ui/visuals";
import { WorkGrid } from "@/components/sections/shared";

// ─── Who we are ──────────────────────────────────────────────────────────────

export function WhoWeAre() {
  const c = home.whoWeAre;
  return (
    <Section id="who-we-are" tone="white">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-ink" style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            {c.title.map((s, i) => (
              <span key={i} className={s.accent ? "block italic gradient-text" : "block"}>{s.text.trim()}</span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 lg:pt-3">
          <p className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>{c.body[0]}</p>
          <p className="text-ink-soft" style={{ fontSize: "0.97rem", lineHeight: 1.75 }}>{c.body[1]} {c.kicker}</p>
          <span className="kicker text-ink-soft">{c.location}</span>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {c.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <Tile tone={(["lilac", "ice", "mist"] as const)[i]} index={String(i + 1).padStart(2, "0")} className="h-full">
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="text-ink-soft" style={{ fontSize: "0.93rem", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            </Tile>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ─── What we do ──────────────────────────────────────────────────────────────

function IconBox({ d }: { d: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
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
    <Section id="what-we-do" tone="canvas">
      <Glow />
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="mb-14" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="lg:row-span-2">
          <Tile tone="night" className="h-full">
            <div className="grid h-full grid-cols-1 gap-8 p-7 md:p-9">
              <div className="flex flex-col gap-4">
                <span className="kicker text-brand-lt">{ai.kicker}</span>
                <h3 className="font-display font-bold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>{ai.title}</h3>
                <p className="text-white/75" style={{ lineHeight: 1.75 }}>{ai.body}</p>
              </div>
              <AssistantVisual className="w-full" />
              {ai.points && <CheckList points={ai.points} light />}
              <Button href="/services#ai-applications" variant="link-light">Explore AI applications</Button>
            </div>
          </Tile>
        </Reveal>

        {[
          { item: it, href: "/services#it-solutions", tone: "white" as const, icon: "M4 6h16v5H4z M4 13h16v5H4z M7 8.5h.01 M7 15.5h.01" },
          { item: staffing, href: "/services#staffing", tone: "lilac" as const, icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 4-6 8-6s8 2 8 6" },
        ].map(({ item, href, tone, icon }, i) => (
          <Reveal key={item.title} delay={0.08 + i * 0.08}>
            <Tile tone={tone} className="h-full">
              <div className="flex h-full flex-col gap-4 p-7">
                <IconBox d={icon} />
                <span className="kicker text-brand">{item.kicker}</span>
                <h3 className="font-display text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="text-ink-soft" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>{item.body}</p>
                <div className="mt-auto pt-3"><Button href={href} variant="link">Learn more</Button></div>
              </div>
            </Tile>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2.1fr]">
        <Reveal>
          <Tile tone="brand" className="h-full">
            <LMark className="-bottom-8 -right-6 h-40 w-40" color="rgba(255,255,255,0.10)" />
            <div className="flex h-full flex-col gap-4 p-7 md:p-8">
              <span className="kicker text-white/75">{c.engagement.eyebrow}</span>
              <h3 className="font-display text-2xl font-bold">{c.engagement.title}</h3>
              <p className="text-white/85" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>{c.engagement.body}</p>
              <CheckList points={c.engagement.models} light />
            </div>
          </Tile>
        </Reveal>
        <Reveal delay={0.08}>
          <Tile tone="white" className="h-full">
            <div className="flex h-full flex-col gap-7 p-7 md:p-9">
              <div className="flex flex-col gap-2">
                <span className="kicker text-brand">{intel.eyebrow}</span>
                <h3 className="font-display text-2xl font-bold text-ink md:text-[1.7rem]" style={{ letterSpacing: "-0.02em" }}>
                  <Segments segments={intel.title} />
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {intel.items.map((x) => (
                  <div key={x.title} className="flex flex-col gap-1 rounded-xl bg-surface p-4">
                    <span className="font-display font-bold text-ink">{x.title}</span>
                    <span className="kicker !text-[0.6rem] text-brand">{x.kicker}</span>
                    <span className="mt-1 text-ink-soft" style={{ fontSize: "0.84rem", lineHeight: 1.55 }}>{x.body}</span>
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

// ─── Enterprise (dark band) and Talent ───────────────────────────────────────

export function Enterprise() {
  const c = home.enterprise;
  return (
    <Section id="enterprise" tone="night">
      <div aria-hidden="true" className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand opacity-30 blur-[120px]" />
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-7">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} size="md" light />
          <Reveal delay={0.1}><CheckList points={c.points} light /></Reveal>
          <Reveal delay={0.15}><Button href="/services#it-solutions" variant="link-light">{c.cta}</Button></Reveal>
        </div>
        <Reveal delay={0.1}>
          <ArchitectureVisual className="aspect-[56/26] w-full shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
        </Reveal>
      </div>
    </Section>
  );
}

export function Talent() {
  const c = home.talent;
  return (
    <Section id="talent" tone="surface">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <TeamVisual className="w-full shadow-[0_24px_60px_rgba(76,29,149,0.12)]" />
        </Reveal>
        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} />
          <Reveal delay={0.1}><CheckList points={c.points} color="cyan" /></Reveal>
          <Reveal delay={0.15}><Button href="/services#staffing" variant="link">{c.cta}</Button></Reveal>
        </div>
      </div>
    </Section>
  );
}

// ─── Proof and work ──────────────────────────────────────────────────────────

export function Proof() {
  const c = home.proof;
  return (
    <Section id="proof" tone="lilac" tight>
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[0.8fr_2fr]">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} size="md" />
        <StatsRow stats={c.stats} />
      </div>
    </Section>
  );
}

export function Ecosystem() {
  const c = home.ecosystem;
  return (
    <Section id="ecosystem">
      <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.body} />
        <Reveal><Button href="/work" variant="outline">{c.cta}</Button></Reveal>
      </div>
      <WorkGrid limit={4} cols={4} />
    </Section>
  );
}
