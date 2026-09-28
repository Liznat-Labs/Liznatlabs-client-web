import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORG_ID, SITE_URL } from "@/lib/seo";
import { servicesPage as c } from "@/content/site";
import { Button, CardGrid, LMark, CheckList, Reveal, Section, SectionHeading, Tile, type CardTone } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand, FAQList, ProcessSteps, WhyUs, WorkGrid } from "@/components/sections/shared";
import { SubNav } from "@/components/sections/SubNav";

export const metadata: Metadata = {
  title: "AI Development, IT Solutions & IT Staffing",
  description:
    "AI agents, knowledge assistants, voice AI and custom models; cloud, cybersecurity and IT infrastructure; and vetted engineers or dedicated pods, from Bengaluru.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

const servicesLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Liznat Labs services",
    itemListElement: [
      ...c.aiApps.products.map((p) => ({ name: p.kicker, description: p.body, category: "AI Applications" })),
      ...c.itSolutions.items.map((p) => ({ name: p.kicker, description: p.body, category: "AI & IT Solutions" })),
      ...c.staffing.roles.map((p) => ({ name: p.kicker, description: p.body, category: "IT Staffing" })),
    ].map((svc) => ({ "@type": "Offer", itemOffered: { "@type": "Service", ...svc, provider: { "@id": ORG_ID }, areaServed: ["IN", "Worldwide"] } })),
  },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` }] },
];


function NextDiscipline({ links }: { links: { label: string; href: string }[] }) {
  return (
    <Reveal className="mt-16">
      <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-brand-lt px-6 py-5 md:flex-row md:items-center md:justify-between">
        <span className="kicker !text-[0.64rem] text-brand">Explore next discipline</span>
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-brand hover:text-cyan-dk">
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

const productTones: CardTone[] = ["ice", "mist", "white", "lilac", "white"];

export default function ServicesPage() {
  const ai = c.aiApps;
  const it = c.itSolutions;
  const st = c.staffing;
  const [lead, ...products] = ai.products;

  return (
    <>
      <JsonLd data={servicesLd} />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} body={c.hero.body} stats={c.hero.stats} />
      <SubNav label="Disciplines" items={c.subnav} />

      <Section id="overview">
        <SectionHeading eyebrow={c.overview.eyebrow} eyebrowVariant="plain" title={c.overview.title} body={c.overview.body} className="mb-12" />
        <CardGrid items={c.overview.items.map((x) => ({ ...x, kicker: x.title, title: "" }))} cols={4} numbered tones={["lilac", "ice", "mist", "lilac"]} />
      </Section>

      <Section id="ai-applications" tone="white">
        <SectionHeading eyebrow={ai.eyebrow} eyebrowVariant="plain" title={ai.title} body={ai.body} className="mb-12" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:row-span-2">
            <Tile tone="night" className="h-full">
              <LMark className="-bottom-8 -right-6 h-40 w-40" />
              <div className="flex h-full min-h-[340px] flex-col gap-4 p-7 md:p-8">
                <span className="kicker text-white/85">{lead.kicker}</span>
                <h3 className="font-display font-bold" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", lineHeight: 1.15 }}>{lead.title}</h3>
                <p className="text-white/85" style={{ lineHeight: 1.75 }}>{lead.body}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                  <Button href="/contact" variant="link-light">Explore capability</Button>
                </div>
              </div>
            </Tile>
          </Reveal>
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <Tile tone={productTones[i]} className="h-full border-brand-lt">
                <div className="flex h-full flex-col gap-3 p-6 md:p-7">
                  <span className="kicker text-brand">{p.kicker}</span>
                  <h3 className="text-xl font-semibold text-ink" style={{ lineHeight: 1.3 }}>{p.title}</h3>
                  <p className="text-ink-soft" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>{p.body}</p>
                  <div className="mt-auto pt-3"><Button href="/contact" variant="link">Explore capability</Button></div>
                </div>
              </Tile>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-brand-lt pt-20">
          <SectionHeading eyebrow={ai.capabilitiesEyebrow} eyebrowVariant="plain" title={ai.capabilitiesTitle} body={ai.capabilitiesBody} size="md" className="mb-12" />
          <div className="flex flex-col gap-4">
            {ai.capabilities.map((cap, i) => {
              const [label, tag] = (cap.kicker ?? "").split(" · ");
              const altCard = i % 2 === 1;
              return (
                <Reveal key={cap.title}>
                  <Tile tone={altCard ? "mist" : "white"} className="border-line">
                    <div className="grid grid-cols-1 gap-8 p-7 md:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className={`kicker ${altCard ? "text-cyan-dk" : "text-brand"}`}>{label}</span>
                          {tag && (
                            <span className={`kicker rounded-full border px-3 py-1 !text-[0.6rem] ${altCard ? "border-cyan text-cyan-dk" : "border-brand-lt text-brand"}`}>
                              {tag}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-ink" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>{cap.title}</h3>
                        <p className="text-ink-soft" style={{ lineHeight: 1.75 }}>{cap.body}</p>
                      </div>
                      <div className="flex flex-col gap-6">
                        {cap.points && <CheckList points={cap.points} color={altCard ? "cyan" : "brand"} />}
                        <Button href="/contact" variant="brand">Discuss this</Button>
                      </div>
                    </div>
                  </Tile>
                </Reveal>
              );
            })}
          </div>
          <NextDiscipline links={[{ label: "02 — AI & IT Solutions", href: "#it-solutions" }, { label: "03 — IT Staffing", href: "#staffing" }]} />
        </div>
      </Section>

      <Section id="process" tone="lilac">
        <SectionHeading eyebrow={c.process.eyebrow} eyebrowVariant="plain" title={c.process.title} body={c.process.body} className="mb-12" />
        <ProcessSteps />
      </Section>

      <Section id="it-solutions">
        <SectionHeading eyebrow={it.eyebrow} eyebrowVariant="plain" title={it.title} body={it.body} className="mb-12" />
        <CardGrid items={it.items} cols={3} tones={["lilac", "ice", "mist", "white", "lilac", "ice"]} />

        <div className="mt-24 border-t border-brand-lt pt-20">
          <SectionHeading eyebrow={it.stackEyebrow} eyebrowVariant="plain" title={it.stackTitle} body={it.stackBody} size="md" className="mb-12" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {it.stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.07}>
                <Tile tone={(["white", "lilac", "ice", "mist"] as CardTone[])[i]} className="h-full">
                  <div className="flex flex-col gap-5 p-6">
                    <span className="kicker text-brand">{g.group}</span>
                    <ul className="flex flex-wrap gap-2" role="list">
                      {g.items.map((t) => (
                        <li key={t} className="rounded-full border border-brand-lt bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft">{t}</li>
                      ))}
                    </ul>
                  </div>
                </Tile>
              </Reveal>
            ))}
          </div>
        </div>
        <NextDiscipline links={[{ label: "01 — AI Applications", href: "#ai-applications" }, { label: "03 — IT Staffing", href: "#staffing" }]} />
      </Section>

      <Section id="staffing" tone="ice">
        <SectionHeading eyebrow={st.eyebrow} eyebrowVariant="plain" title={st.title} body={st.body} className="mb-12" />
        <CardGrid items={st.roles} cols={4} numbered tones={["night", "white", "mist", "lilac"]} />

        <div className="mt-24 border-t border-brand-lt pt-20">
          <SectionHeading eyebrow={st.segmentsEyebrow} eyebrowVariant="plain" title={st.segmentsTitle} body={st.segmentsBody} size="md" className="mb-12" />
          <CardGrid items={st.segments} cols={4} tones={["white", "lilac", "mist", "white"]} />
        </div>
        <NextDiscipline links={[{ label: "01 — AI Applications", href: "#ai-applications" }, { label: "02 — AI & IT Solutions", href: "#it-solutions" }]} />
      </Section>

      <Section id="work">
        <SectionHeading eyebrow={c.work.eyebrow} eyebrowVariant="plain" title={c.work.title} body={c.work.body} className="mb-12" />
        <WorkGrid />
      </Section>

      <WhyUs {...c.why} />

      <Section id="faq">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow={c.faq.eyebrow} eyebrowVariant="plain" title={c.faq.title} body={c.faq.body} size="md" className="lg:sticky lg:top-40 lg:self-start" />
          <Reveal delay={0.1}><FAQList items={c.faq.items} /></Reveal>
        </div>
      </Section>

      <CTABand eyebrow={c.closing.eyebrow} title={c.closing.title} body={c.closing.body} secondary={null} />
    </>
  );
}
