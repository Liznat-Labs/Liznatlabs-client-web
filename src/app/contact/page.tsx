import type { Metadata } from "next";
import { brand, contactPage as c } from "@/content/site";
import { Reveal, Section } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a strategy call with Liznat Labs — AI applications, enterprise IT and engineering teams from Bengaluru.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} compact />
      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <h2 className="font-display font-bold text-ink" style={{ fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>{c.lead}</h2>
            <p className="max-w-md text-ink-soft" style={{ lineHeight: 1.8 }}>{c.body}</p>
            <dl className="flex flex-col gap-3 pt-2 text-sm">
              <div className="flex flex-wrap gap-2">
                <dt className="kicker !text-[0.64rem] text-ink-soft">Email ·</dt>
                <dd><a href={`mailto:${brand.email}`} className="font-semibold text-brand hover:text-cyan-dk">{brand.email}</a></dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="kicker !text-[0.64rem] text-ink-soft">WhatsApp ·</dt>
                <dd><a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:text-cyan-dk">Message us</a></dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="kicker !text-[0.64rem] text-ink-soft">Office ·</dt>
                <dd className="text-ink-soft">{brand.location}</dd>
              </div>
            </dl>
            <span className="kicker !text-[0.64rem] text-ink-soft">{brand.tagline}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
