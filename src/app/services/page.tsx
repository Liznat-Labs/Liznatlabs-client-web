import type { Metadata } from "next";
import { servicesPage as c } from "@/content/site";
import { CardGrid, CheckList, GlowCard, Reveal, Section, SectionHeading } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand, FAQList, ProcessSteps, WhyUs, WorkGrid } from "@/components/sections/shared";
import { SubNav } from "@/components/sections/SubNav";

export const metadata: Metadata = {
  title: "Services",
  description: "AI Applications, AI & IT Solutions and IT Staffing from Liznat Labs, Bengaluru — agents, RAG, voice AI, cloud, cybersecurity and dedicated engineering pods.",
};

export default function ServicesPage() {
  const ai = c.aiApps;
  const it = c.itSolutions;
  const st = c.staffing;
  return (
    <>
      <PageHero {...c.hero} />
      <SubNav items={c.subnav} />

      <Section id="overview">
        <SectionHeading eyebrow={c.overview.eyebrow} title={c.overview.title} body={c.overview.body} className="mb-16" />
        <CardGrid items={c.overview.items} cols={4} numbered />
      </Section>

      <Section id="ai-applications">
        <SectionHeading eyebrow={ai.eyebrow} title={ai.title} body={ai.body} className="mb-16" />
        <CardGrid items={ai.products} cols={3} />

        <div className="mt-32">
          <SectionHeading eyebrow={ai.capabilitiesEyebrow} title={ai.capabilitiesTitle} body={ai.capabilitiesBody} size="md" className="mb-14" />
          <div className="flex flex-col gap-4">
            {ai.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={0.05}>
                <GlowCard className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
                  <div className="flex flex-col gap-5">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{cap.kicker}</span>
                    <h3 className="font-extralight text-pearl" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                      {cap.title}
                    </h3>
                    <p className="text-pearl-dim" style={{ lineHeight: 1.8 }}>{cap.body}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-6 border-t hairline pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    {cap.points && <CheckList points={cap.points} />}
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      Capability {String(i + 1).padStart(2, "0")} / {String(ai.capabilities.length).padStart(2, "0")}
                    </span>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="process">
        <SectionHeading eyebrow={c.process.eyebrow} title={c.process.title} body={c.process.body} className="mb-20" />
        <ProcessSteps />
      </Section>

      <Section id="it-solutions">
        <SectionHeading eyebrow={it.eyebrow} title={it.title} body={it.body} className="mb-16" />
        <CardGrid items={it.items} cols={3} />

        <div className="mt-32">
          <SectionHeading eyebrow={it.stackEyebrow} title={it.stackTitle} body={it.stackBody} size="md" className="mb-14" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {it.stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.08}>
                <GlowCard className="flex h-full flex-col gap-6 p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-bright">{g.group}</span>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {g.items.map((t) => (
                      <li key={t} className="rounded-full border hairline px-3 py-1.5 text-sm text-pearl-dim">{t}</li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="staffing">
        <SectionHeading eyebrow={st.eyebrow} title={st.title} body={st.body} className="mb-16" />
        <CardGrid items={st.roles} cols={4} />

        <div className="mt-32">
          <SectionHeading eyebrow={st.segmentsEyebrow} title={st.segmentsTitle} body={st.segmentsBody} size="md" className="mb-14" />
          <div className="grid grid-cols-1 border-t hairline md:grid-cols-2">
            {st.segments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08} className={`flex flex-col gap-3 border-b hairline py-10 md:px-10 ${i % 2 === 1 ? "md:border-l" : "md:pl-0"}`}>
                <h3 className="text-3xl font-extralight text-pearl">{s.title}</h3>
                <p className="max-w-md text-pearl-dim" style={{ lineHeight: 1.75 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="work">
        <SectionHeading eyebrow={c.work.eyebrow} title={c.work.title} body={c.work.body} className="mb-16" />
        <WorkGrid />
      </Section>

      <WhyUs {...c.why} />

      <Section id="faq">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} body={c.faq.body} size="md" />
          <Reveal delay={0.1}><FAQList items={c.faq.items} /></Reveal>
        </div>
      </Section>

      <CTABand eyebrow={c.closing.eyebrow} title={c.closing.title} body={c.closing.body} secondary={null} />
    </>
  );
}
