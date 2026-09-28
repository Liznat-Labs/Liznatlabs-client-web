import type { Metadata } from "next";
import { aboutPage as c } from "@/content/site";
import { CardGrid, Reveal, Section, SectionHeading, Tile, type CardTone } from "@/components/ui/primitives";
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

const storyTones: CardTone[] = ["night", "ice", "lilac", "mist"];

/** Hub-and-spoke layout: the studio in the middle, capabilities around it. */
function CapabilityHub({ items }: { items: typeof c.capabilities.items }) {
  const dots = ["bg-brand", "bg-cyan", "bg-[#4F46E5]", "bg-brand", "bg-ink"];
  const card = (i: number) => {
    const item = items[i];
    return (
      <Reveal key={item.title} delay={i * 0.06} className="relative z-10">
        <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_rgba(10,10,10,0.06)]">
          <div className="mb-2 flex items-center justify-between">
            <span className="kicker !text-[0.6rem] text-brand">{item.kicker} / Capability</span>
            <span className={`h-2 w-2 rounded-full ${dots[i]}`} aria-hidden="true" />
          </div>
          <h3 className="font-semibold text-ink">{item.title}</h3>
          <p className="mt-1 text-ink-soft" style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{item.body}</p>
        </div>
      </Reveal>
    );
  };
  return (
    <div className="grid-lines relative rounded-[22px] border border-line bg-white/60 p-6 md:p-10">
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-5">{card(0)}{card(3)}</div>
        <Reveal className="relative z-10 mx-auto my-4 flex h-52 w-52 flex-col items-center justify-center rounded-full text-center text-white shadow-[0_20px_50px_rgba(76,29,149,0.35)]" >
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #7C3AED, #2E1065)" }} />
          <div className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-brand-lt" aria-hidden="true" />
          <span className="kicker relative !text-[0.58rem] text-brand-lt">Integration core</span>
          <span className="relative mt-1 text-xl font-semibold tracking-wide">LIZNAT LABS</span>
          <span className="kicker relative mt-1 !text-[0.58rem] text-white/75">AI + Engineering</span>
        </Reveal>
        <div className="flex flex-col gap-5">{card(1)}{card(2)}</div>
      </div>
      <div className="mx-auto mt-5 max-w-sm">{card(4)}</div>
    </div>
  );
}

export default function AboutPage() {
  const f = c.founders;
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} stats={c.hero.stats} />

      <Section id="story">
        <SectionHeading eyebrow={c.story.eyebrow} eyebrowVariant="plain" title={c.story.title} body={c.story.body} className="mb-12" />
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {c.story.timeline.map((t, i) => {
            const [num, label] = (t.kicker ?? "").split(" — ");
            const tone = storyTones[i];
            const dark = tone === "night" || tone === "brand";
            return (
              <Reveal as="li" key={t.title} delay={i * 0.08}>
                <Tile tone={tone} className="h-full">
                  <div className="flex h-full flex-col gap-2 p-6">
                    <span className={`kicker !text-[0.62rem] ${dark ? "text-white/70" : "text-brand"}`}>{num}</span>
                    <span className={`kicker !text-[0.6rem] ${dark ? "text-white/70" : "text-ink-soft"}`}>{label}</span>
                    <h3 className={`mt-1 text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}>{t.title}</h3>
                    <p className={dark ? "text-white/85" : "text-ink-soft"} style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>{t.body}</p>
                  </div>
                </Tile>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section id="foundation" tight>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 rounded-[22px] border border-line bg-white p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-5 lg:border-r lg:border-cyan/40 lg:pr-12">
              <span className="kicker text-brand">{c.foundation.eyebrow}</span>
              <h2 className="font-display font-bold text-ink" style={{ fontSize: "clamp(2rem, 3.6vw, 2.9rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                {c.foundation.title.map((s, i) => (
                  <span key={i} className={s.accent ? "font-semibold text-brand" : ""}>{s.text}</span>
                ))}
              </h2>
              <p className="text-ink-soft" style={{ lineHeight: 1.75 }}>{c.foundation.body}</p>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <blockquote className="rounded-2xl bg-night p-6 font-display text-lg font-semibold italic text-white shadow-[0_14px_30px_rgba(76,29,149,0.25)]" style={{ lineHeight: 1.5 }}>
                &ldquo;{c.foundation.quote}&rdquo;
              </blockquote>
              <p className="text-ink-soft" style={{ fontSize: "0.93rem", lineHeight: 1.75 }}>{c.foundation.footnote}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="founders" tone="white">
        <SectionHeading eyebrow={f.eyebrow} eyebrowVariant="plain" title={f.title} className="mb-12" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col gap-5">
            {f.body.map((p) => (
              <p key={p} className="text-ink-soft" style={{ fontSize: "1.02rem", lineHeight: 1.85 }}>{p}</p>
            ))}
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {f.people.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Tile tone={i === 0 ? "lilac" : "ice"} className="h-full">
                  <div className="flex h-full flex-col gap-6 p-7">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-semibold text-white shadow-[0_10px_24px_rgba(109,40,217,0.3)]">
                      {initials(p.name)}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-semibold text-ink">{p.name}</span>
                      <span className="kicker !text-[0.62rem] text-brand">{p.role}</span>
                    </div>
                  </div>
                </Tile>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-14">
          <div className="rounded-[22px] border border-line bg-canvas p-5 md:p-7">
            <span className="kicker mb-5 flex items-center gap-2 !text-[0.62rem] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              How the team is organised
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {f.teams.map((t, i) => (
                <div key={t.title} className="rounded-xl border border-line bg-white p-4">
                  <span className="kicker !text-[0.58rem] text-cyan-dk">Layer {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-semibold text-ink">{t.title}</h3>
                  <p className="mt-1 text-ink-soft" style={{ fontSize: "0.84rem", lineHeight: 1.55 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="capabilities">
        <SectionHeading eyebrow={c.capabilities.eyebrow} eyebrowVariant="plain" title={c.capabilities.title} className="mb-12" />
        <CapabilityHub items={c.capabilities.items} />
      </Section>

      <Section id="how-we-work" tone="white">
        <SectionHeading eyebrow={c.principles.eyebrow} eyebrowVariant="plain" title={c.principles.title} className="mb-12" />
        <CardGrid items={c.principles.items} cols={2} numbered tones={["night", "ice", "lilac", "mist"]} />
      </Section>

      <Section id="beliefs" tone="ice">
        <SectionHeading eyebrow={c.beliefs.eyebrow} eyebrowVariant="plain" title={c.beliefs.title} className="mb-12" />
        <Beliefs items={c.beliefs.items} />
      </Section>

      <Section id="direction">
        <SectionHeading eyebrow={c.direction.eyebrow} eyebrowVariant="plain" title={c.direction.title} body={c.direction.body} className="mb-12" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { label: "Our vision", tone: "mist" as const, ...c.direction.vision },
            { label: "Our mission", tone: "ice" as const, ...c.direction.mission },
          ].map((d, i) => (
            <Reveal key={d.label} delay={i * 0.1}>
              <Tile tone={d.tone} className="h-full">
                <div className="flex h-full flex-col gap-4 p-8 md:p-10">
                  <span className="kicker text-brand">{d.label}</span>
                  <h3 className="font-display font-bold text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", lineHeight: 1.2 }}>{d.title}</h3>
                  <p className="text-ink-soft" style={{ lineHeight: 1.8 }}>{d.body}</p>
                </div>
              </Tile>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand eyebrow={c.closing.eyebrow} title={c.closing.title} body={c.closing.body} secondary={{ label: "See our work", href: "/work" }} />
    </>
  );
}
