import type { Metadata } from "next";
import { brand, contactPage as c } from "@/content/site";
import { Reveal, SectionHeading } from "@/components/ui/primitives";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a strategy call with Liznat Labs — AI applications, enterprise IT and engineering teams from Bengaluru.",
};

export default function ContactPage() {
  return (
    <section className="relative">
      <div className="shell grid grid-cols-1 gap-16 pb-32 pt-40 md:pt-48 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-10">
          <SectionHeading as="h1" size="lg" eyebrow={c.eyebrow} title={c.title} />
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <p className="text-2xl font-light text-pearl">{c.lead}</p>
            <p className="max-w-md text-pearl-dim" style={{ lineHeight: 1.8 }}>{c.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="flex flex-col border-t hairline">
              {[
                { k: "Email", v: <a href={`mailto:${brand.email}`} className="text-pearl hover:text-blue-bright">{brand.email}</a> },
                { k: "WhatsApp", v: <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="text-pearl hover:text-blue-bright">Message us</a> },
                { k: "Office", v: <span className="text-pearl">{brand.location}</span> },
              ].map((row) => (
                <div key={row.k} className="flex flex-wrap items-baseline justify-between gap-4 border-b hairline py-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{brand.tagline}</span>
        </div>
        <Reveal delay={0.1} className="relative">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
