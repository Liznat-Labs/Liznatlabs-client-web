import { aboutPage, brand, servicesPage, workContent, zynk } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// Plain-text summary for AI assistants and answer engines (https://llmstxt.org).
export function GET() {
  const ai = servicesPage.aiApps;
  const it = servicesPage.itSolutions;
  const st = servicesPage.staffing;
  const leaders = aboutPage.founders.people.map((p) => `${p.name} (${p.role})`).join(", ");

  const text = `# ${brand.name}

> ${brand.name} is a software company and technology startup in Bengaluru, India, founded in 2026 by Faizan Khan. It builds production AI applications, enterprise IT solutions and dedicated engineering teams for businesses in India and worldwide, and develops Zynk Works, a connected platform of business apps for small businesses.

- Website: ${SITE_URL}
- Email: ${brand.email}
- Location: ${brand.location}
- Leadership: ${leaders}

## Services

### AI Applications
${ai.products.map((p) => `- ${p.kicker}: ${p.body}`).join("\n")}
${ai.capabilities.map((c) => `- ${c.kicker?.split(" · ")[0].replace(/^\d+ — /, "")}: ${c.body}`).join("\n")}

### AI & IT Solutions
${it.items.map((i) => `- ${i.kicker}: ${i.body}`).join("\n")}

### IT Staffing
${st.roles.map((r) => `- ${r.kicker}: ${r.body}`).join("\n")}

Also: modern websites, Android apps and custom software.

## Product: Zynk Works (in development)
${zynk.body}
${zynk.principles.map((p) => `- ${p.title}: ${p.body}`).join("\n")}
Apps: ${zynk.apps.map((a) => a.name + (a.live ? " (live)" : "")).join(", ")}.
- ${zynk.hr.name} is live at ${zynk.hr.url}: ${zynk.hr.body}

## Selected work
${workContent.map((w) => `- ${w.title} (${w.category}): ${w.description} ${w.url}`).join("\n")}

## Frequently asked questions
${servicesPage.faq.items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Pages
- [Home](${SITE_URL}/)
- [Services](${SITE_URL}/services): AI applications, AI & IT solutions, IT staffing, process, tech stack, FAQ
- [Work](${SITE_URL}/work): Zynk Works and live client projects
- [About](${SITE_URL}/about): story, leadership, principles, vision and mission
- [Contact](${SITE_URL}/contact): book a strategy call
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
