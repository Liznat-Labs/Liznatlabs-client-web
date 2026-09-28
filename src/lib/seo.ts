import { brand, zynk } from "@/content/site";

// liznatlabs.com redirects to www, so www is the canonical host.
export const SITE_URL = "https://www.liznatlabs.com";

export const PAGES = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export const ORG_ID = `${SITE_URL}/#organization`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": ORG_ID,
  name: brand.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/opengraph-image`,
  email: brand.email,
  telephone: "+91-63616-18251",
  description:
    "Liznat Labs is a software company and technology startup in Bengaluru, India, building production AI applications, enterprise IT solutions and dedicated engineering teams, and the Zynk Works platform for small businesses.",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Faizan Khan", jobTitle: "Founder & CEO" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  areaServed: ["IN", "Worldwide"],
  sameAs: [brand.linkedin],
  knowsAbout: [
    "Artificial intelligence", "AI agents", "Retrieval-augmented generation", "Voice AI", "Custom software development",
    "Web development", "Android app development", "Cloud infrastructure", "Cybersecurity", "IT staffing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: brand.email,
    url: `${SITE_URL}/contact`,
    availableLanguage: ["English", "Hindi"],
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: brand.name,
  alternateName: ["Liznat", "liznatlabs.com"],
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

/** The live Zynk Works HR app. */
export const zynkworksHrLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: zynk.hr.name,
  url: zynk.hr.url,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "HR and payroll",
  operatingSystem: "Web",
  description: zynk.hr.body,
  featureList: zynk.hr.points,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial for up to 10 staff" },
  isPartOf: { "@type": "SoftwareApplication", name: zynk.name, applicationCategory: "BusinessApplication" },
  publisher: { "@id": ORG_ID },
};

/** Zynk Works, the connected business-app platform (in development). */
export const zynkWorksLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: zynk.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: zynk.body,
  featureList: zynk.apps.map((a) => a.name),
  publisher: { "@id": ORG_ID },
};
