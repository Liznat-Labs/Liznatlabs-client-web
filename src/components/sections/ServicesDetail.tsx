"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Segment } from "@/content/site";
import { processSteps, servicesPage as c, whyUs, type Card } from "@/content/services";

const EASE = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Title({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.accent ? (
          <span key={i} className="font-fraunces italic gradient-text">{s.text}</span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

function Heading({
  eyebrow,
  title,
  body,
  as: Tag = "h2",
  id,
}: {
  eyebrow: string;
  title: Segment[];
  body?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  const size = Tag === "h1" ? "clamp(2.5rem, 6vw, 4.5rem)" : Tag === "h2" ? "clamp(2rem, 4vw, 2.75rem)" : "clamp(1.6rem, 3vw, 2.1rem)";
  return (
    <Reveal className="mb-14 max-w-3xl">
      <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)" }}>
        {eyebrow}
      </span>
      <Tag id={id} className="font-fraunces" style={{ fontSize: size, fontWeight: 600, lineHeight: 1.1, color: "var(--text)", marginTop: "1rem" }}>
        <Title segments={title} />
      </Tag>
      {body && (
        <p className="font-geist" style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "60ch" }}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

function Band({ id, children, grey = false }: { id?: string; children: React.ReactNode; grey?: boolean }) {
  return (
    <section id={id} style={{ background: grey ? "#F5F5F5" : "#FFFFFF", scrollMarginTop: "8rem" }}>
      <div className="mx-auto max-w-7xl px-6 xl:px-8" style={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        {children}
      </div>
    </section>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0" aria-hidden="true">
      <path d="M2.5 7.5 L5.5 10.5 L11.5 3.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Hairline-separated card grid, matching the homepage Services cards. */
function Cards({ items, cols = 3, numbered = false }: { items: Card[]; cols?: 2 | 3 | 4; numbered?: boolean }) {
  const grid = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid grid-cols-1 gap-px ${grid}`} style={{ listStyle: "none", padding: 0, margin: 0, background: "var(--border)", border: "1px solid var(--border)" }}>
      {items.map((item, i) => (
        <li key={item.title} className="bg-white transition-colors duration-300 hover:bg-[#FAFAFA]">
          <Reveal delay={(i % 4) * 0.06} className="flex h-full flex-col" >
            <div style={{ padding: "2.25rem" }} className="flex h-full flex-col">
              <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "var(--accent)", fontWeight: 500, textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {numbered ? String(i + 1).padStart(2, "0") : item.kicker}
              </span>
              <h3 className="font-fraunces" style={{ fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.2, color: "var(--text)", marginBottom: "0.75rem" }}>
                {item.title}
              </h3>
              <p className="font-geist" style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--muted)" }}>
                {item.body}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      {c.faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderBottom: "1px solid var(--border)" }}>
            <button
              type="button"
              id={`svc-faq-q-${i}`}
              aria-expanded={isOpen}
              aria-controls={`svc-faq-a-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              style={{ color: isOpen ? "var(--text)" : "var(--muted)" }}
            >
              <span className="font-geist" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.2 }}
                className="shrink-0 font-mono text-xl text-accent"
                style={{ lineHeight: 1, width: 20, textAlign: "center" }}
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`svc-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`svc-faq-q-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="pb-6 font-geist" style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--muted)" }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function PillButton({ children, onClick, dark = true }: { children: React.ReactNode; onClick: () => void; dark?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2"
      style={{
        borderRadius: "9999px",
        background: dark ? "#0A0A0A" : "transparent",
        color: dark ? "#FFFFFF" : "#0A0A0A",
        border: dark ? "none" : "2px solid rgba(10,10,10,0.35)",
        padding: "0.85rem 1.75rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        transition: "background 0.25s ease",
      }}
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{children}</span>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

const openContact = () => window.dispatchEvent(new CustomEvent("open-book-call"));

export function ServicesDetail() {
  const ai = c.aiApps;
  const it = c.itSolutions;
  const st = c.staffing;

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 xl:px-8" style={{ paddingTop: "10rem", paddingBottom: "4rem" }}>
          <Heading as="h1" eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} />
          <Reveal className="flex flex-wrap gap-3">
            <PillButton onClick={openContact}>Book a call</PillButton>
          </Reveal>
        </div>
      </section>

      {/* In-page navigation */}
      <nav
        aria-label="On this page"
        className="sticky z-40"
        style={{ top: 76, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <ul className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 xl:px-8 [scrollbar-width:none]" role="list">
          {c.subnav.map((l) => (
            <li key={l.href} className="shrink-0">
              <a href={l.href} className="font-mono text-xs transition-colors hover:text-accent" style={{ letterSpacing: "0.08em", color: "var(--muted)" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Band id="overview">
        <Heading eyebrow={c.overview.eyebrow} title={c.overview.title} body={c.overview.body} />
        <Cards items={c.overview.items} cols={4} numbered />
      </Band>

      <Band id="ai-applications" grey>
        <Heading eyebrow={ai.eyebrow} title={ai.title} body={ai.body} />
        <Cards items={ai.products} />

        <div style={{ marginTop: "6rem" }}>
          <Heading as="h3" eyebrow={ai.capabilitiesEyebrow} title={ai.capabilitiesTitle} body={ai.capabilitiesBody} />
          <div className="flex flex-col gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
            {ai.capabilities.map((cap) => (
              <Reveal key={cap.title} className="grid grid-cols-1 gap-8 bg-white p-8 md:p-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "var(--accent)", textTransform: "uppercase" }}>
                    {cap.kicker}
                  </span>
                  <h4 className="font-fraunces" style={{ fontSize: "1.45rem", fontWeight: 500, lineHeight: 1.2, color: "var(--text)", margin: "0.75rem 0" }}>
                    {cap.title}
                  </h4>
                  <p className="font-geist" style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)" }}>{cap.body}</p>
                </div>
                <ul className="flex flex-col justify-center gap-3" role="list">
                  {cap.points?.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-geist" style={{ fontSize: "0.875rem", color: "var(--text)" }}>
                      <Tick />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      <Band id="process">
        <Heading eyebrow={c.process.eyebrow} title={c.process.title} body={c.process.body} />
        <ol className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-5" role="list" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
          {processSteps.map((s, i) => (
            <li key={s.title} className="bg-white">
              <Reveal delay={i * 0.06} className="flex h-full flex-col gap-3 p-7">
                <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-fraunces" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text)" }}>{s.title}</h3>
                <p className="font-geist" style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--muted)" }}>{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Band>

      <Band id="it-solutions" grey>
        <Heading eyebrow={it.eyebrow} title={it.title} body={it.body} />
        <Cards items={it.items} />

        <div style={{ marginTop: "6rem" }}>
          <Heading as="h3" eyebrow={it.stackEyebrow} title={it.stackTitle} body={it.stackBody} />
          <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
            {it.stack.map((g) => (
              <Reveal key={g.group} className="bg-white p-7">
                <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "var(--accent)", textTransform: "uppercase" }}>{g.group}</span>
                <ul className="mt-5 flex flex-wrap gap-2" role="list">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="font-mono"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.08em", padding: "0.35rem 0.7rem", border: "1px solid var(--border)", borderRadius: "3px", color: "var(--muted)", textTransform: "uppercase" }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      <Band id="staffing">
        <Heading eyebrow={st.eyebrow} title={st.title} body={st.body} />
        <Cards items={st.roles} cols={4} />

        <div style={{ marginTop: "6rem" }}>
          <Heading as="h3" eyebrow={st.segmentsEyebrow} title={st.segmentsTitle} body={st.segmentsBody} />
          <Cards items={st.segments} cols={4} numbered />
        </div>
      </Band>

      <Band id="why" grey>
        <Heading eyebrow={c.why.eyebrow} title={c.why.title} body={c.why.body} />
        <Cards items={whyUs} cols={4} numbered />
      </Band>

      <Band id="faq">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Heading eyebrow={c.faq.eyebrow} title={c.faq.title} body={c.faq.body} />
          <Reveal><FAQ /></Reveal>
        </div>
      </Band>

      {/* Closing CTA */}
      <section style={{ background: "#0A0A0A" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center xl:px-8" style={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
          <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A78BFA" }}>
            {c.closing.eyebrow}
          </span>
          <h2 className="font-fraunces" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1, color: "#FFFFFF" }}>
            <Title segments={c.closing.title} />
          </h2>
          <p className="font-geist" style={{ maxWidth: "52ch", fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.7)" }}>{c.closing.body}</p>
          <button
            type="button"
            onClick={openContact}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-geist text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-[#EDE9FE]"
          >
            Let&apos;s talk →
          </button>
        </div>
      </section>
    </>
  );
}
