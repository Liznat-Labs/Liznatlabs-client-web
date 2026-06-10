// Central content store — edit copy here, never in components.

export type NavLink = { label: string; href: string };
export type Segment = { text: string; italic?: boolean; accent?: boolean };
export type HeadlineLine = { segments: Segment[]; indent?: boolean };
export type MetaCell = { label: string; value: string };
export type ServiceTag = string;

export type Service = {
  number: string;
  category: string;
  title: string;
  body: string;
  tags: ServiceTag[];
};

export type WorkItem = {
  title: string;
  category: string;
  type: string;
  description: string;
  accentHue: string;
  image?: string;
  url?: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type PricingTier = {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navContent = {
  logo: "Liznat Labs",
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  cta: { label: "Book a call →", href: "#contact" },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroContent = {
  status: "Now booking · Q3 2026",
  headlineLines: [
    {
      segments: [
        { text: "Software" },
      ],
    },
    {
      segments: [
        { text: "crafted with " },
        { text: "intent,", italic: true, accent: true },
      ],
    },
    {
      segments: [
        { text: "shipped with " },
        { text: "speed.", italic: true, accent: true },
      ],
    },
  ] satisfies HeadlineLine[],
  subhead:
    "Liznat Labs is a Bengaluru-based dev studio building modern websites, Android apps, and custom software for ambitious teams. Co-founder care. Fixed pricing. Real results.",
  ctas: [
    { label: "Start a project →", href: "#contact", primary: true },
    { label: "See our work", href: "#work", primary: false },
  ],
  meta: [
    { label: "Based in", value: "Bengaluru" },
    { label: "Avg. delivery", value: "2–4 wks" },
    { label: "Starting at", value: "₹15k" },
    { label: "Built with", value: "Care" },
  ] satisfies MetaCell[],
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const marqueeItems = [
  "WEBSITES",
  "ANDROID APPS",
  "CUSTOM SOFTWARE",
  "DASHBOARDS",
  "APIs",
  "AUTOMATIONS",
  "MVPs",
  "LANDING PAGES",
  "ECOMMERCE",
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const servicesContent: Service[] = [
  {
    number: "01",
    category: "Web",
    title: "Modern Websites",
    body:
      "Fast, conversion-focused websites that actually represent your brand. From sharp landing pages to full multi-page sites — built for performance, not bloat.",
    tags: ["Next.js", "React", "Tailwind", "CMS-ready"],
  },
  {
    number: "02",
    category: "Mobile",
    title: "Android Apps",
    body:
      "Native-quality Android apps built with Kotlin or React Native. Clean architecture, offline-first where it matters, and shipped to the Play Store.",
    tags: ["Kotlin", "React Native", "Play Store", "Offline-first"],
  },
  {
    number: "03",
    category: "Custom",
    title: "Custom Software",
    body:
      "Bespoke tools, internal dashboards, APIs, and automation systems. If you have a workflow problem, we build the exact thing that solves it.",
    tags: ["Node.js", "PostgreSQL", "REST / GraphQL", "Automation"],
  },
];

// ─── Work ─────────────────────────────────────────────────────────────────────

export const workContent: WorkItem[] = [
  {
    title: "Azha Packaging",
    category: "E-Commerce",
    type: "Web",
    description:
      "Full-stack e-commerce platform for a custom packaging business — product catalog, custom order requests, customer portal, and admin dashboard. Built with React, Node.js, and MongoDB.",
    accentHue: "rgba(8, 145, 178, 0.12)",
    image: "/work/azha-packaging.png",
    url: "https://azha-packaging.vercel.app",
  },
  {
    title: "DevFest 2025",
    category: "Event",
    type: "Web",
    description:
      "Event landing page for Google Developer Group's DevFest 2025 Bengaluru — live countdown, speaker lineup, agenda, and ticket registration. Clean, fast, and mobile-first.",
    accentHue: "rgba(109, 40, 217, 0.12)",
    image: "/work/devfest.png",
    url: "http://devfest2025-event-demo.s3-website.ap-south-1.amazonaws.com",
  },
  {
    title: "Unnati Loan Services",
    category: "Fintech",
    type: "Web App",
    description:
      "Full-featured loan management platform with customer and bank-manager portals, authentication, loan tracking, and repayment workflows. Built for scale and security.",
    accentHue: "rgba(234, 179, 8, 0.12)",
    image: "/work/loan-manager.png",
    url: "https://loan-manager-tan.vercel.app/",
  },
  {
    title: "FocusFlow",
    category: "SaaS",
    type: "Web App",
    description:
      "Productivity SaaS landing page with deep-work focus blocks, session stats dashboard preview, and conversion-optimised pricing — built to drive trial sign-ups.",
    accentHue: "rgba(109, 40, 217, 0.12)",
    image: "/work/staging-app.png",
    url: "https://staging.dtzjgg2whesyw.amplifyapp.com/",
  },
  {
    title: "Jewellery Store",
    category: "E-Commerce",
    type: "Web",
    description:
      "Elegant e-commerce storefront for a jewellery brand — curated product catalog, smooth browsing experience, and a checkout flow built for conversion.",
    accentHue: "rgba(234, 179, 8, 0.15)",
    url: "https://jewellary-website-git-main-t-mounika-s-projects.vercel.app/",
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────

export const processContent: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    body: "30-minute call. We dig into the problem, the users, and what success actually looks like.",
  },
  {
    number: "02",
    title: "Plan",
    body: "Fixed scope, fixed price, fixed timeline — sent to you as a plain-English document, no jargon.",
  },
  {
    number: "03",
    title: "Build",
    body: "Working software shipped in weekly increments. You see real progress, not Jira tickets.",
  },
  {
    number: "04",
    title: "Launch",
    body: "Deploy to production, hand over all credentials, and stay on for two weeks of free support.",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const aboutContent = {
  pullQuote:
    "We started Liznat Labs because the best work happens when the people building it care end-to-end. No handoffs. No diluted vision.",
  paragraphs: [
    "Founded by Faizan Khan and Faraaz Khan A in 2026. The name 'Liznat' is drawn from people who shaped who we are — that same care goes into every line of code.",
    "Between us, we've spent years building products across fintech, e-commerce, and consumer apps. We know what good software feels like to build and to use. Every project here gets that standard.",
  ],
  signature: "— Faizan Khan & Faraaz Khan A, Co-Founders",
};

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const pricingContent: PricingTier[] = [
  {
    name: "Launch",
    price: "₹15k+",
    features: [
      "One-page landing site",
      "5-day delivery",
      "Mobile responsive",
      "1 round of revisions",
      "Vercel deployment",
    ],
    cta: "Get started →",
  },
  {
    name: "Studio",
    price: "₹40k+",
    featured: true,
    features: [
      "Multi-page website",
      "Custom design system",
      "CMS optional",
      "2-week delivery",
      "3 rounds of revisions",
      "30 days of post-launch support",
    ],
    cta: "Get started →",
  },
  {
    name: "Build",
    price: "₹1.5L+",
    features: [
      "Android app or custom software MVP",
      "Full design + development",
      "4–6 week delivery",
      "Fixed scope contract",
      "60 days of post-launch support",
    ],
    cta: "Get started →",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqContent: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Landing pages are done in 5 days. Multi-page websites take 2 weeks. Android apps and custom software typically run 4–6 weeks. Every project starts with a scoped proposal, so there are no surprises.",
  },
  {
    question: "Do you work with non-Indian clients?",
    answer:
      "Absolutely. Around a third of my clients are based outside India. Payments work via international transfer or Stripe, and I accommodate timezone overlap for async collaboration.",
  },
  {
    question: "What if I only have an idea, not a spec?",
    answer:
      "That's actually the ideal starting point. The 30-minute discovery call is free and is exactly the tool for turning a rough idea into a scoped proposal. Bring a problem, not a spec.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a free support window — 2 weeks for websites, 30–60 days for apps and software. I also offer retainer packages if you need ongoing development or maintenance.",
  },
  {
    question: "Why fixed pricing instead of hourly?",
    answer:
      "Hourly billing creates misaligned incentives — it rewards slow work and punishes efficiency. Fixed pricing means you know the cost upfront, I'm incentivized to build cleanly, and we both focus on outcomes.",
  },
];

// ─── Final CTA ────────────────────────────────────────────────────────────────

export const ctaContent = {
  headlineLines: [
    { segments: [{ text: "Let's build" }] },
    {
      segments: [
        { text: "something " },
        { text: "real.", italic: true, accent: true },
      ],
    },
  ] satisfies HeadlineLine[],
  subhead:
    "Have a project in mind? Send a short brief and I'll get back to you within 24 hours.",
  email: "liznatlabs@gmail.com",
  calendlyLabel: "Book a free 30-min call →",
  calendlyHref: "#contact",
  whatsappLabel: "Message on WhatsApp",
  whatsappHref: "https://wa.me/916361618251",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerContent = {
  brand: {
    name: "Liznat Labs",
    tagline: "Modern software, shipped with intent.",
  },
  studioLinks: [
    { label: "Services", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ],
  connectLinks: [
    { label: "Book a Call", href: "#contact" },
    { label: "Email Us", href: "mailto:hello@liznatlabs.com" },
    { label: "WhatsApp", href: "https://wa.me/916361618251" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/faizan-khan-51b635411" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  copyright: "© 2026 Liznat Labs · Bengaluru, India",
};
