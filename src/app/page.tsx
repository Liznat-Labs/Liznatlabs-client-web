import { home, processIntro } from "@/content/site";
import { Section, SectionHeading, Sparkles } from "@/components/ui/primitives";
import { CTABand, ProcessSteps, QuoteBand, Ribbon, WhyUs } from "@/components/sections/shared";
import { Ecosystem, Enterprise, Hero, Proof, Talent, WhatWeDo, WhoWeAre } from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Enterprise />
      <Talent />

      <Section id="how-it-works" tone="sky">
        <Sparkles count={6} />
        <SectionHeading
          eyebrow="How it works"
          title={[{ text: "From " }, { text: "problem", accent: true }, { text: " to production." }]}
          body={processIntro}
          className="mb-14"
        />
        <ProcessSteps />
      </Section>

      <Proof />
      <Ecosystem />
      <QuoteBand {...home.quote} />
      <WhyUs {...home.whyUs} />
      <Ribbon />
      <CTABand />
    </>
  );
}
