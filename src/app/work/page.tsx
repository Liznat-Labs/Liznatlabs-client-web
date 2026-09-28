import type { Metadata } from "next";
import { workContent, workPage as c } from "@/content/site";
import { Button, Reveal, Section, Segments, StatsRow, Tile } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description: "Live products built by Liznat Labs across e-commerce, fintech, SaaS and events.",
};

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} body={c.body} />

      <Section id="projects">
        <ul className="border-t border-brand-lt/60" role="list">
          {workContent.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 0.05} className="border-b border-brand-lt/60">
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-xl px-2 py-5 transition-colors hover:bg-ice md:grid-cols-[48px_120px_1fr_1fr_auto] md:gap-8 md:px-4"
              >
                <span className="kicker text-brand">{String(i + 1).padStart(2, "0")}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.image} alt="" loading="lazy" className="hidden aspect-[16/10] w-[120px] rounded-lg border border-line object-cover object-top md:block" />
                <span className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-ink transition-[transform,color] group-hover:text-brand duration-500 group-hover:translate-x-2 md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                    {w.title}
                  </span>
                  <span className="mt-1 truncate text-xs text-ink-soft md:hidden">{w.category} · {w.type}</span>
                </span>
                <span className="hidden flex-col gap-1 text-right md:flex">
                  <span className="text-sm text-ink-soft">{w.description.split(" — ")[0]}</span>
                  <span className="text-xs tracking-wide text-brand">{hostOf(w.url)}</span>
                </span>
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-lt text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  ›
                </span>
                <span className="sr-only">Visit {w.title} (opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 border-y border-brand-lt/60 py-12">
          <StatsRow stats={c.stats} color="brand" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1fr_1fr]">
          <Reveal className="lg:row-span-2">
            <Tile tone="night" className="h-full">
              <div className="flex h-full flex-col gap-5 p-8 md:p-10" style={{ background: "linear-gradient(135deg, #4C1D95, #5B21B6 60%, #7C3AED)" }}>
                <span className="kicker text-brand-lt">The team behind it</span>
                <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.1 }}>Founded in 2026.</h2>
                <p className="text-white/85" style={{ lineHeight: 1.75 }}>
                  Liznat Labs was founded in Bengaluru to build production-grade software for growing businesses — and every product above is live and in daily use.
                </p>
                <div className="mt-auto pt-4"><Button href="/about" variant="link-light">Our story</Button></div>
              </div>
            </Tile>
          </Reveal>
          {[
            { v: "5", l: "Live products", tone: "white" as const },
            { v: "4", l: "Industries served", tone: "lilac" as const },
            { v: "2–4 wks", l: "Typical first release", tone: "mist" as const },
            { v: "24h", l: "Reply to every enquiry", tone: "ice" as const },
          ].map((s, i) => (
            <Reveal key={s.l} delay={0.05 + i * 0.06}>
              <Tile tone={s.tone} className="h-full">
                <div className="flex h-full min-h-[150px] flex-col justify-end gap-2 p-6">
                  <span className="gradient-text font-display font-bold" style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)", lineHeight: 1 }}>{s.v}</span>
                  <span className="kicker !text-[0.62rem] text-ink">{s.l}</span>
                </div>
              </Tile>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-canvas pb-28">
        <div className="shell flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-ink" style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.6rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              <Segments segments={c.closing} accent="gradient" />
            </h2>
          </Reveal>
          <Reveal delay={0.08}><Button href="/contact" variant="brand">Book a strategy call</Button></Reveal>
        </div>
      </section>
    </>
  );
}
