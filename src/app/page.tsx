import { home, processIntro } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { CTABand, MarqueeStrip, ProcessSteps, QuoteBand, WhyUs } from "@/components/sections/shared";
import { Ecosystem, Enterprise, Proof, Talent, WhatWeDo, WhoWeAre } from "@/components/sections/home";
import { LegacyHero } from "@/components/sections/LegacyHero";

export default function HomePage() {
  return (
    <>
      <LegacyHero />
      <MarqueeStrip />
      <WhoWeAre />
      <WhatWeDo />
      <Enterprise />
      <Talent />

      <Section id="how-it-works" tone="lilac">
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
      <CTABand />
    </>
  );
}
