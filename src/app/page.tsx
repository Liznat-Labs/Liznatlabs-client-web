import { home, processIntro } from "@/content/site";
import { Section, SectionHeading, StatsRow } from "@/components/ui/primitives";
import { CTABand, ProcessSteps, WhyUs } from "@/components/sections/shared";
import { Ecosystem, Enterprise, Hero, IntelligenceLayer, Talent, WhatWeDo, WhoWeAre } from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <IntelligenceLayer />
      <Enterprise />
      <Talent />

      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title={[{ text: "From problem to " }, { text: "production", accent: true }, { text: "." }]}
          body={processIntro}
          className="mb-20"
        />
        <ProcessSteps />
      </Section>

      <Section id="proof">
        <SectionHeading eyebrow={home.proof.eyebrow} title={home.proof.title} className="mb-16" />
        <StatsRow stats={home.proof.stats} />
      </Section>

      <Ecosystem />
      <WhyUs {...home.whyUs} />
      <CTABand />
    </>
  );
}
