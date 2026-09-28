import type { Metadata } from "next";
import { workPage as c } from "@/content/site";
import { Section } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand, WorkGrid } from "@/components/sections/shared";

export const metadata: Metadata = {
  title: "Work",
  description: "Live products built by Liznat Labs across e-commerce, fintech, SaaS and events.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} body={c.body} stats={c.stats} />
      <Section id="projects" bordered={false} className="-mt-12">
        <WorkGrid />
      </Section>
      <CTABand eyebrow="What's next" title={c.closing} secondary={{ label: "Explore services", href: "/services" }} />
    </>
  );
}
