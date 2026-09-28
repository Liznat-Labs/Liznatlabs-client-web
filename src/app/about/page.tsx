import type { Metadata } from "next";
import { aboutPage as c } from "@/content/site";
import { CardGrid, GlowCard, Reveal, Section, SectionHeading } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { Beliefs } from "@/components/sections/Beliefs";
import { CTABand } from "@/components/sections/shared";

export const metadata: Metadata = {
  title: "About",
  description: "Liznat Labs is a deep tech studio founded in Bengaluru in 2026 by Faizan Khan and Faraaz Khan A — pairing applied AI with enterprise-grade engineering.",
};

function initials(name: string) {
  return name.split(" ").filter((p) => p.length > 1).slice(0, 2).map((p) => p[0]).join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero {...c.hero} />

      <Section id="story">
        <SectionHeading eyebrow={c.story.eyebrow} title={c.story.title} body={c.story.body} className="mb-20" />
        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6" role="list">
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-blue-bright/60 to-transparent md:bottom-auto md:left-0 md:right-0 md:top-[7px] md:h-px md:w-auto md:bg-gradient-to-r" />
          {c.story.timeline.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 0.1} className="relative flex flex-col gap-4 pl-10 md:pl-0 md:pt-12">
              <span aria-hidden="true" className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-blue-bright bg-bg shadow-[0_0_16px_rgba(61,124,255,0.7)] md:top-0" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{t.kicker}</span>
              <h3 className="text-2xl font-light text-pearl">{t.title}</h3>
              <p className="text-pearl-dim" style={{ lineHeight: 1.75 }}>{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="foundation">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <SectionHeading eyebrow={c.foundation.eyebrow} title={c.foundation.title} body={c.foundation.body} size="md" />
          <Reveal delay={0.1} className="flex flex-col gap-8">
            <blockquote className="border-l-2 border-blue-bright pl-8 font-extralight text-pearl" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
              &ldquo;{c.foundation.quote}&rdquo;
            </blockquote>
            <p className="text-pearl-dim" style={{ lineHeight: 1.8 }}>{c.foundation.footnote}</p>
          </Reveal>
        </div>
      </Section>

      <Section id="founders">
        <SectionHeading eyebrow={c.founders.eyebrow} title={c.founders.title} className="mb-16" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            {c.founders.body.map((p) => (
              <p key={p} className="text-pearl-dim" style={{ fontSize: "1.05rem", lineHeight: 1.85 }}>{p}</p>
            ))}
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {c.founders.people.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <GlowCard className="flex h-full flex-col gap-8 p-8">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border hairline bg-[rgba(61,124,255,0.12)] text-xl font-light text-blue-bright">
                    {initials(p.name)}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-light text-pearl">{p.name}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.role}</span>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <CardGrid items={c.founders.teams} cols={4} numbered />
        </div>
      </Section>

      <Section id="capabilities">
        <SectionHeading eyebrow={c.capabilities.eyebrow} title={c.capabilities.title} className="mb-16" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {c.capabilities.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
              <GlowCard className="flex h-full min-h-[220px] flex-col justify-between gap-8 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{item.kicker} / Capability</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-light text-pearl">{item.title}</h3>
                  <p className="text-pearl-dim" style={{ lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="how-we-work">
        <SectionHeading eyebrow={c.principles.eyebrow} title={c.principles.title} className="mb-16" />
        <CardGrid items={c.principles.items} cols={4} />
      </Section>

      <Section id="beliefs">
        <SectionHeading eyebrow={c.beliefs.eyebrow} title={c.beliefs.title} className="mb-16" />
        <Beliefs items={c.beliefs.items} />
      </Section>

      <Section id="direction">
        <SectionHeading eyebrow={c.direction.eyebrow} title={c.direction.title} body={c.direction.body} className="mb-16" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { label: "Our vision", ...c.direction.vision },
            { label: "Our mission", ...c.direction.mission },
          ].map((d, i) => (
            <Reveal key={d.label} delay={i * 0.1}>
              <GlowCard className="flex h-full flex-col gap-6 p-10 md:p-12">
                <span className="eyebrow">{d.label}</span>
                <h3 className="font-extralight text-pearl" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.15 }}>{d.title}</h3>
                <p className="text-pearl-dim" style={{ lineHeight: 1.8 }}>{d.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand eyebrow={c.closing.eyebrow} title={c.closing.title} body={c.closing.body} secondary={{ label: "See our work", href: "/work" }} />
    </>
  );
}
