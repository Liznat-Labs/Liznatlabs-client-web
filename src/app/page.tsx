import type { Metadata } from "next";
import { home, processIntro } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { zynkWorksLd, zynkworksHrLd } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { CTABand, MarqueeStrip, ProcessSteps, QuoteBand, WhyUs } from "@/components/sections/shared";
import { Ecosystem, Enterprise, Proof, Talent, WhatWeDo, WhoWeAre } from "@/components/sections/home";
import { LegacyHero } from "@/components/sections/LegacyHero";
import { ZynkWorks } from "@/components/sections/ZynkWorks";

export const metadata: Metadata = {
  title: { absolute: "Liznat Labs — AI Development & IT Solutions in Bengaluru" },
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[zynkWorksLd, zynkworksHrLd]} />
      <LegacyHero />
      <MarqueeStrip />
      <WhoWeAre />
      <WhatWeDo />
      <Enterprise />
      <Talent />

      <Section id="how-it-works" tone="surface">
        <SectionHeading
          eyebrow="How it works"
          title={[{ text: "From " }, { text: "problem", accent: true }, { text: " to production." }]}
          body={processIntro}
          className="mb-14"
        />
        <ProcessSteps />
      </Section>

      <Proof />
      <ZynkWorks />
      <Ecosystem />
      <QuoteBand {...home.quote} />
      <WhyUs {...home.whyUs} />
      <CTABand />
    </>
  );
}
