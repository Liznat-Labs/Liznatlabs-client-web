// Central content store — edit copy here, never in components.

export type Segment = { text: string; accent?: boolean; italic?: boolean };
export type HeadlineLine = { segments: Segment[] };
export type Card = { title: string; kicker?: string; body: string; points?: string[] };
export type Stat = { value: string; label: string };
export type Step = { title: string; body: string };

export type WorkItem = {
  title: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

// ─── Brand ────────────────────────────────────────────────────────────────────

export const brand = {
  name: "Liznat Labs",
  tagline: "A deep tech studio — Bengaluru, India",
  statement:
    "Empowering businesses through Artificial Intelligence, enterprise technology, and engineering talent.",
  motto: "Built with intent. Shipped with speed.",
  email: "liznatlabs@gmail.com",
  whatsapp: "https://wa.me/916361618251",
  linkedin: "https://www.linkedin.com/in/faizan-khan-51b635411",
  location: "Bengaluru, Karnataka, India",
  domain: "liznatlabs.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

export const disciplines = ["AI Applications", "AI & IT Solutions", "IT Staffing"];

export const marqueeItems = ["AI Agents", "Voice AI", "Knowledge Assistants", "Cloud", "Cybersecurity", "IT Staffing", "Websites", "Android Apps", "Custom Software"];

// ─── Home hero (original Liznat Labs hero, unchanged) ─────────────────────────

export const heroContent = {
  headlineLines: [
    { segments: [{ text: "Software" }] },
    { segments: [{ text: "crafted with " }, { text: "intent,", italic: true, accent: true }] },
    { segments: [{ text: "shipped with " }, { text: "speed.", italic: true, accent: true }] },
  ] satisfies HeadlineLine[],
  subhead:
    "Liznat Labs is a Bengaluru-based dev studio building modern websites, Android apps, and custom software for ambitious teams. Co-founder care. Fixed pricing. Real results.",
};

// ─── Home ─────────────────────────────────────────────────────────────────────

export const home = {
  whoWeAre: {
    eyebrow: "Who we are",
    title: [{ text: "A studio that ships, " }, { text: "not slides.", accent: true }] as Segment[],
    body: [
      "Liznat Labs is a deep tech studio from Bengaluru. We combine applied Artificial Intelligence with serious software engineering and a bench of senior engineers — so ideas leave the whiteboard and start running your business.",
      "Agents, language models, vision and automation, designed as one system — then built, deployed and looked after with the same care as the rest of your infrastructure.",
    ],
    kicker: "Not prototypes. Software your team relies on every day.",
    location: "Bengaluru · India",
    pillars: [
      { title: "AI that runs in production", body: "Shipped, monitored and fully owned by you — not a demo that dies after the pitch." },
      { title: "Engineering done properly", body: "Cloud, data and security sized for the real workload, not the slide deck." },
      { title: "Engineers on demand", body: "Vetted developers who plug into your team and deliver from week one." },
    ] as Card[],
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: [{ text: "Three " }, { text: "practices", accent: true }, { text: ", one result." }] as Segment[],
    items: [
      {
        kicker: "01 — AI Applications",
        title: "AI products that do real work.",
        body: "Assistants, voice agents, document intelligence and custom builds — AI that takes work off your team's plate and moves your numbers. Every build is grounded in your data, locked down with access controls and tied to a business goal.",
        points: [
          "Agents that complete goals, not just answer questions",
          "Models tuned on your own data and terminology",
          "Secure, auditable and ready for real traffic",
        ],
      },
      {
        kicker: "02 — AI & IT Solutions",
        title: "Enterprise IT, built right.",
        body: "Cloud, infrastructure, cybersecurity, and smart campus and city systems — complete IT delivery with round-the-clock support.",
      },
      {
        kicker: "03 — IT Staffing",
        title: "Engineers, productive from week one.",
        body: "Vetted, experienced engineers matched to your stack and your goals — on the engagement model that suits you.",
      },
    ] as Card[],
    engagement: {
      eyebrow: "Delivery",
      title: "Engagement that fits.",
      body: "Dedicated engineering pods, fixed-outcome project builds, or fully managed functions — shaped around your roadmap and budget.",
      models: ["Dedicated engineering pods", "Fixed-outcome builds", "Managed AI functions"],
    },
  },

  intelligence: {
    eyebrow: "The intelligence layer",
    title: [{ text: "Six capabilities, " }, { text: "working as one", accent: true }, { text: "." }] as Segment[],
    items: [
      { title: "Agents", kicker: "Autonomous", body: "Workflows that plan, act and follow through." },
      { title: "LLMs", kicker: "Reasoning", body: "Language models grounded in your own knowledge." },
      { title: "Vision", kicker: "Perception", body: "Read documents, inspect images, understand video." },
      { title: "Automation", kicker: "Velocity", body: "Hand the repetitive work to software. Keep people for judgement." },
      { title: "Enterprise AI", kicker: "At scale", body: "Governed, observable and ready for real load." },
      { title: "Prompting", kicker: "Precision", body: "Turning intent into dependable, repeatable output." },
    ] as Card[],
  },

  enterprise: {
    eyebrow: "Enterprise",
    title: [{ text: "We build the " }, { text: "foundations", accent: true }, { text: " under the product." }] as Segment[],
    body: "Services, data pipelines, queues and dashboards — the unglamorous architecture that keeps a product fast, secure and online as it grows.",
    points: [
      "Zero-downtime releases into secure production environments",
      "Logging, monitoring and access control from the first deploy",
      "Ongoing tuning and cost optimisation as usage grows",
    ],
    cta: "See how we engineer",
  },

  talent: {
    eyebrow: "Talent",
    title: [{ text: "Built in India. " }, { text: "Delivered anywhere", accent: true }, { text: "." }] as Segment[],
    body: "Engineers in Bengaluru. Clients across India, the Gulf and beyond. One connected team that scales up or down as fast as your plans change.",
    points: [
      "Dedicated engineering pods that grow with you",
      "Vetted engineers who are productive from week one",
      "Senior architects and fractional tech leadership on demand",
    ],
    cta: "Build your team",
  },

  proof: {
    eyebrow: "Proof",
    title: [{ text: "Results", accent: true }, { text: ", not promises." }] as Segment[],
    stats: [
      { value: "5", label: "Products shipped & live" },
      { value: "2–4", label: "Weeks to a first release" },
      { value: "24h", label: "Response to every enquiry" },
      { value: "2026", label: "Founded in Bengaluru" },
    ] as Stat[],
  },

  ecosystem: {
    eyebrow: "Work",
    title: [{ text: "Products " }, { text: "already live", accent: true }, { text: "." }] as Segment[],
    body: "Not concepts — real products in production, used every day, across commerce, fintech, SaaS and events.",
    cta: "See all work",
  },

  quote: {
    quote: "Not concepts — products in production, used every day.",
    byline: "Liznat Labs · A deep tech studio",
    cta: { label: "See the work", href: "/work" },
  },

  whyUs: {
    eyebrow: "Why Liznat Labs",
    title: [{ text: "Built by a team that has " }, { text: "shipped", accent: true }, { text: " before." }] as Segment[],
    body: "Founded in 2026 in Bengaluru to build production-grade software that solves real operational problems for growing businesses.",
  },
};

// ─── Shared blocks ────────────────────────────────────────────────────────────

export const processIntro =
  "Every engagement opens with a discovery session. We look at your goals, check your data and systems, and come back within a week with a clear scope, an architecture plan and a milestone timeline.";

export const processSteps: Step[] = [
  { title: "Discover", body: "We pin down the real bottleneck, map the systems you already have and agree on measurable goals." },
  { title: "Design", body: "We plan the architecture, data flows and model choices, and design the interface people will use." },
  { title: "Build", body: "Weekly sprints, model tuning where needed, and automated tests that keep every release safe." },
  { title: "Deploy", body: "Zero-downtime launch into a secure production environment with monitoring and access control in place." },
  { title: "Evolve", body: "We keep watching, retraining and optimising as your users and volumes grow." },
];

export const whyUs: Card[] = [
  { title: "Business-first", body: "We start from the problem that costs you time or money — not from a technology looking for a use." },
  { title: "AI + engineering", body: "Modern AI models backed by solid software engineering, strict data security and predictable behaviour." },
  { title: "End-to-end", body: "Discovery, scoping, design, build, cloud deployment and ongoing support — one team the whole way." },
  { title: "Flexible delivery", body: "Dedicated pods, fixed-outcome builds or managed functions — whichever fits your roadmap." },
];

export const ctaBand = {
  eyebrow: "Ready when you are",
  title: [{ text: "Let's build " }, { text: "what's next", accent: true }, { text: "." }] as Segment[],
  body: "Tell us where you're stuck. We'll show up with ideas, not a sales pitch.",
  primary: "Book a strategy call",
  secondary: "Explore services",
};

// ─── Work ─────────────────────────────────────────────────────────────────────

export const workContent: WorkItem[] = [
  {
    title: "Azha Packaging",
    category: "E-Commerce",
    type: "Web Platform",
    description:
      "Full-stack e-commerce platform for a custom packaging business — product catalogue, custom order requests, customer portal and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/work/azha-packaging.png",
    url: "https://azha-packaging.vercel.app",
  },
  {
    title: "Unnati Loan Services",
    category: "Fintech",
    type: "Web App",
    description:
      "Loan management platform with customer and bank-manager portals, authentication, loan tracking and repayment workflows.",
    tags: ["Fintech", "Auth", "Workflows"],
    image: "/work/loan-manager.png",
    url: "https://loan-manager-tan.vercel.app/",
  },
  {
    title: "DevFest 2025",
    category: "Event",
    type: "Web",
    description:
      "Event site for Google Developer Group's DevFest 2025 Bengaluru — live countdown, speaker line-up, agenda and ticket registration.",
    tags: ["Event", "AWS", "Mobile-first"],
    image: "/work/devfest.png",
    url: "http://devfest2025-event-demo.s3-website.ap-south-1.amazonaws.com",
  },
  {
    title: "FocusFlow",
    category: "SaaS",
    type: "Web App",
    description:
      "Productivity SaaS landing experience with deep-work focus blocks, a session-stats dashboard preview and conversion-focused pricing.",
    tags: ["SaaS", "Dashboard", "Conversion"],
    image: "/work/staging-app.png",
    url: "https://staging.dtzjgg2whesyw.amplifyapp.com/",
  },
  {
    title: "Reddy's Jewellery",
    category: "E-Commerce",
    type: "Web",
    description:
      "Heritage jewellery brand site with a rich gold aesthetic, product catalogue and an immersive browsing experience.",
    tags: ["Brand", "Catalogue", "E-Commerce"],
    image: "/work/jewellery.png",
    url: "https://jewellary-website-noedb8er7-t-mounika-s-projects.vercel.app/",
  },
];

export const workPage = {
  eyebrow: "Selected work",
  title: [{ text: "Products already " }, { text: "live", accent: true }, { text: "." }] as Segment[],
  body: "Not concepts — real products in production, used every day. Across commerce, fintech, SaaS and events. Every one is a live link.",
  stats: [
    { value: "5", label: "Live products" },
    { value: "4", label: "Industries served" },
    { value: "2–4 wks", label: "Typical first release" },
    { value: "2026", label: "Founded" },
  ] as Stat[],
  closing: [{ text: "Your product could be " }, { text: "next", accent: true }, { text: "." }] as Segment[],
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const servicesPage = {
  hero: {
    eyebrow: "What we do",
    title: [{ text: "Three practices, " }, { text: "one result", accent: true }, { text: "." }] as Segment[],
    body: "AI Applications, AI & IT Solutions and IT Staffing — delivered as one connected team. From custom AI products to dependable infrastructure to the engineers who keep it all moving.",
    stats: [
      { value: "2026", label: "Founded in Bengaluru" },
      { value: "3", label: "Connected practices" },
      { value: "5+", label: "Products in production" },
      { value: "Global", label: "Bengaluru HQ, remote delivery" },
    ] as Stat[],
  },
  subnav: [
    { label: "Overview", href: "#overview" },
    { label: "01 AI Applications", href: "#ai-applications" },
    { label: "Process", href: "#process" },
    { label: "02 AI & IT Solutions", href: "#it-solutions" },
    { label: "03 IT Staffing", href: "#staffing" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],
  overview: {
    eyebrow: "What we build",
    title: [{ text: "Technology shaped around " }, { text: "real problems", accent: true }, { text: "." }] as Segment[],
    body: "Liznat Labs brings AI applications, automation, enterprise technology and engineering capacity together to turn messy business problems into working digital systems.",
    items: [
      { title: "AI Applications", body: "Intelligent products, assistants and automated workflows built for real business use." },
      { title: "AI & Data", body: "Machine learning models, data pipelines and predictive systems that inform decisions." },
      { title: "Enterprise Technology", body: "Cloud architecture, scalable infrastructure, cybersecurity and modern business systems." },
      { title: "Engineering Talent", body: "Flexible technical capacity, vetted specialists and dedicated engineering pods." },
    ] as Card[],
  },
  aiApps: {
    eyebrow: "01 — AI Applications",
    title: [{ text: "AI products that do the " }, { text: "heavy lifting", accent: true }, { text: "." }] as Segment[],
    body: "Production-ready AI applications that automate workflows, sharpen decisions and create measurable impact.",
    products: [
      { kicker: "AI Command Centre", title: "One place for all your AI.", body: "A single dashboard that brings your models, automations and analytics together — so the business can see and steer what AI is doing." },
      { kicker: "Knowledge Assistant", title: "Scattered data, made useful.", body: "An AI layer that connects your documents, systems and people, and answers questions with sources you can check." },
      { kicker: "CRM Voice Agent", title: "Sales and support, always on.", body: "A voice agent that talks to customers, logs every conversation and updates your CRM automatically — day and night." },
      { kicker: "Customer Chat Assistant", title: "Answers in seconds, not hours.", body: "A chat assistant for your website or WhatsApp that resolves common questions and hands off to your team when it matters." },
      { kicker: "Document Intelligence", title: "Paperwork, handled.", body: "Read invoices, forms and contracts automatically — extract the data, check it and push it straight into your systems." },
      { kicker: "Custom AI Builds", title: "Built for your exact problem.", body: "Need something specific? We design and deploy AI applications and data models around your exact business challenge." },
    ] as Card[],
    capabilitiesEyebrow: "AI capabilities",
    capabilitiesTitle: [{ text: "From automation to " }, { text: "production systems", accent: true }, { text: "." }] as Segment[],
    capabilitiesBody: "The architectures we design, build and run for our clients.",
    capabilities: [
      {
        kicker: "01 — AI Agents · Autonomous execution",
        title: "AI workflows that finish the job.",
        body: "Agents reason through multi-step tasks, pick the right tools or internal APIs, and complete the work end to end — with guardrails, logging and fail-safes built in.",
        points: ["Multi-step planning and tool calling", "Guardrails that block unsafe or invented actions", "Full audit log of every decision"],
      },
      {
        kicker: "02 — RAG & Knowledge · Verified answers",
        title: "Connect AI to what your company knows.",
        body: "Retrieval-augmented generation indexes your manuals, policies, CRM history and databases, so answers come with citations your team can verify.",
        points: ["Hybrid semantic and keyword search", "Role-based document permissions", "Citations back to the exact source"],
      },
      {
        kicker: "03 — Multimodal AI · Vision & audio",
        title: "Systems that see, listen and understand.",
        body: "Models that work across scanned documents, images, video and audio together — for automated inspection, extraction and analysis.",
        points: ["OCR and layout analysis for dense forms", "Computer vision for defects and safety", "Combined voice and text understanding"],
      },
      {
        kicker: "04 — Intelligent Pipelines · Workflow automation",
        title: "Automate the repetitive, end to end.",
        body: "Turn manual, error-prone processes into automated pipelines that plug into your databases, email, CRM and ERP.",
        points: ["Automatic extraction, validation and data entry", "Exceptions routed to a human when needed", "Sync with CRM, ERP and payment systems"],
      },
      {
        kicker: "05 — Voice AI Agents · Real-time calls",
        title: "Natural conversations at phone speed.",
        body: "Fast voice agents that handle interruptions, listen properly and take action — for support lines, intake calls and outbound reminders.",
        points: ["Low-latency, natural-sounding replies", "Intent detection with live CRM updates", "Works with standard telephony and SIP"],
      },
      {
        kicker: "06 — Custom Domain Models · Your data, your model",
        title: "Models trained on how your business talks.",
        body: "When off-the-shelf APIs aren't enough, we fine-tune open models on your domain data to hit your accuracy, cost and privacy targets.",
        points: ["Private hosting inside your own cloud", "Fine-tuning with LoRA / QLoRA", "Optimised inference for high throughput"],
      },
    ] as Card[],
  },
  process: {
    eyebrow: "From idea to impact",
    title: [{ text: "How we " }, { text: "deliver", accent: true }, { text: "." }] as Segment[],
    body: "A five-stage method designed to cut risk and get you to production sooner.",
  },
  itSolutions: {
    eyebrow: "02 — AI & IT Solutions",
    title: [{ text: "Enterprise technology, " }, { text: "built to scale", accent: true }, { text: "." }] as Segment[],
    body: "AI, data, cloud and infrastructure — the foundation every modern business runs on.",
    items: [
      { kicker: "AI & Data Models", title: "Turn data into advantage.", body: "Machine learning and analytics that turn the data you already collect into measurable outcomes." },
      { kicker: "IT Infrastructure", title: "Infrastructure that keeps up.", body: "Scalable infrastructure with monitoring, security and continuous optimisation built in." },
      { kicker: "Cloud & Data Centre", title: "Ready for what's next.", body: "Cloud architecture, migration, reliability engineering and disaster recovery designed for continuity." },
      { kicker: "Cybersecurity", title: "Secure by design.", body: "Threat assessment, hardening, vulnerability audits and compliance support across your systems." },
      { kicker: "Smart City", title: "Connected urban systems.", body: "IoT devices, telemetry and secure platforms for efficient, sustainable public operations." },
      { kicker: "Smart Campus", title: "Campuses, modernised.", body: "Digital campus platforms, access and safety systems, and connected infrastructure in one architecture." },
    ] as Card[],
    stackEyebrow: "Our technology stack",
    stackTitle: [{ text: "Built on " }, { text: "proven technology", accent: true }, { text: "." }] as Segment[],
    stackBody: "Mature frameworks, current model foundations and battle-tested cloud platforms.",
    stack: [
      { group: "AI & Machine Learning", items: ["PyTorch", "TensorFlow", "LangChain", "Llama", "OpenAI", "Claude", "Whisper", "Hugging Face"] },
      { group: "Backend & Data", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST"] },
      { group: "Cloud & Infrastructure", items: ["AWS", "Vercel", "Docker", "Kubernetes", "Nginx", "Linux", "Terraform", "CI/CD"] },
      { group: "Web & Mobile", items: ["Next.js", "React", "TypeScript", "Tailwind", "Kotlin", "React Native", "Three.js", "Figma"] },
    ],
  },
  staffing: {
    eyebrow: "03 — IT Staffing",
    title: [{ text: "The people behind " }, { text: "the technology", accent: true }, { text: "." }] as Segment[],
    body: "Experienced technology professionals and flexible engineering teams that extend what your company can do.",
    roles: [
      { kicker: "Product Engineering", title: "Build without slowing down.", body: "Full-stack, backend and cloud engineers, vetted on real projects, to speed up your roadmap." },
      { kicker: "AI & Data", title: "Bring AI skills in-house.", body: "Data scientists, ML engineers and LLM specialists ready to ship production models." },
      { kicker: "Quality & Reliability", title: "Release with confidence.", body: "Test automation, security testing and reliability engineers for stable, low-defect releases." },
      { kicker: "Dedicated Pods", title: "A team built around your goals.", body: "Self-managing engineering pods or staff augmentation — with payroll, HR and replacements handled by us." },
    ] as Card[],
    segmentsEyebrow: "Solutions for modern teams",
    segmentsTitle: [{ text: "Right for every " }, { text: "stage", accent: true }, { text: "." }] as Segment[],
    segmentsBody: "Whether you're launching a first product or modernising systems that have run for years.",
    segments: [
      { title: "Startups", body: "Fast MVPs, AI prototypes and quick go-to-market without the cost of a full in-house team." },
      { title: "Enterprises", body: "Private LLM deployments, cloud migrations, compliance and always-on critical infrastructure." },
      { title: "Product teams", body: "Embedded engineering pods that join your sprints and help you hit roadmap milestones sooner." },
      { title: "Growing businesses", body: "Turnkey IT, workflow automation and dedicated engineers who are ready from week one." },
    ] as Card[],
  },
  work: {
    eyebrow: "Selected work",
    title: [{ text: "Built for " }, { text: "real impact", accent: true }, { text: "." }] as Segment[],
    body: "Not theory — real products shipped to production and used every day.",
  },
  why: {
    eyebrow: "Why Liznat Labs",
    title: [{ text: "Engineering-led, " }, { text: "proven in production", accent: true }, { text: "." }] as Segment[],
    body: "We connect modern AI with disciplined engineering across every product we ship.",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: [{ text: "Common questions, " }, { text: "answered", accent: true }, { text: "." }] as Segment[],
    body: "Engagement models, technical capabilities and how projects get started.",
    items: [
      {
        q: "What does Liznat Labs do?",
        a: "We run three connected practices: AI Applications (assistants, voice agents and custom models), AI & IT Solutions (cloud, infrastructure, data and cybersecurity) and IT Staffing (dedicated engineering pods and individual engineers).",
      },
      {
        q: "What kind of AI solutions can you build?",
        a: "AI agents, retrieval-augmented knowledge assistants, CRM voice agents, chat assistants, document and vision pipelines, and fine-tuned models for your domain.",
      },
      {
        q: "Can you build a completely custom AI application?",
        a: "Yes. Our Custom AI Builds are designed, trained and deployed around your data, your workflows and your security requirements.",
      },
      {
        q: "Do you provide enterprise IT solutions?",
        a: "Yes — cloud architecture and migration, infrastructure management, security audits and hardening, and smart campus and smart city systems.",
      },
      {
        q: "Can you provide dedicated engineers?",
        a: "Yes. Through IT Staffing we provide vetted full-stack, data and AI engineers, individually or as pods. We handle payroll, HR, compliance and onboarding; you set the technical direction.",
      },
      {
        q: "Do you work with clients outside India?",
        a: "Yes. We're based in Bengaluru and work remotely with clients in India and abroad, with overlapping hours for your timezone. International clients are billed in USD.",
      },
      {
        q: "How does a project start?",
        a: "With a discovery session. We review your goals, check your data and systems, and within a week share a defined scope, an architecture plan and a milestone timeline.",
      },
    ],
  },
  closing: {
    eyebrow: "Ready to build what's next?",
    title: [{ text: "Let's talk about " }, { text: "your project", accent: true }, { text: "." }] as Segment[],
    body: "Whether you need an AI application, an enterprise technology solution or more engineering capacity — tell us what you're trying to build.",
  },
};

// ─── About ────────────────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    eyebrow: "Who we are",
    title: [{ text: "A deep tech studio, " }, { text: "not a vendor", accent: true }, { text: "." }] as Segment[],
    body: "Liznat Labs pairs applied Artificial Intelligence with enterprise-grade engineering and a bench of vetted engineers — turning ambitious ideas into systems that run in production.",
    stats: [
      { value: "2026", label: "Founded in Bengaluru" },
      { value: "5", label: "Products shipped" },
      { value: "3", label: "Connected practices" },
      { value: "∞", label: "Problems worth solving" },
    ] as Stat[],
  },
  story: {
    eyebrow: "Our story",
    title: [{ text: "A studio built for " }, { text: "what comes next", accent: true }, { text: "." }] as Segment[],
    body: "Founded in 2026, Liznat Labs builds production-grade software for businesses that can't afford software that only works in a demo.",
    timeline: [
      { kicker: "01 — The foundation", title: "Founded in 2026", body: "Started in Bengaluru to bring applied AI and disciplined engineering to growing businesses in India and beyond." },
      { kicker: "02 — First products", title: "Shipping for clients", body: "Delivered platforms across e-commerce, fintech, SaaS and events — each one live and in daily use." },
      { kicker: "03 — Going deeper", title: "AI in production", body: "Bringing agents, knowledge assistants and automation into real client workflows, with security and reliability built in." },
      { kicker: "04 — Scale", title: "Beyond Bengaluru", body: "Growing a network of engineers and clients across India, the Gulf and international markets." },
    ] as Card[],
  },
  foundation: {
    eyebrow: "Our foundation",
    title: [{ text: "Built on " }, { text: "production trust", accent: true }, { text: "." }] as Segment[],
    body: "We pair modern AI with sound cloud architecture and hands-on engineering — and we hold every idea to the same standard.",
    quote: "We don't sell slideware. Every idea gets the same test: would we put it into production ourselves?",
    footnote: "Real innovation isn't judged in demos. It shows up in production logs, response times, uptime and results the business can feel.",
  },
  founders: {
    eyebrow: "The founders",
    title: [{ text: "The people behind " }, { text: "the systems", accent: true }, { text: "." }] as Segment[],
    body: [
      "Liznat Labs was founded by Faizan Khan and Faraaz Khan A in 2026. The name 'Liznat' comes from the people who shaped who we are — and that same care goes into every line of code.",
      "Between us, we've spent years building products across fintech, e-commerce and consumer apps. We know what good software feels like to build and to use, and every project here gets that standard.",
    ],
    people: [
      { name: "Faizan Khan", role: "Co-Founder" },
      { name: "Faraaz Khan A", role: "Co-Founder" },
    ],
    teams: [
      { title: "Leadership", body: "Strategy, client partnerships and delivery oversight." },
      { title: "Engineering", body: "Frontend, backend, full-stack, AI/ML and cloud/DevOps." },
      { title: "AI & Research", body: "Applied AI, data science and rapid prototyping." },
      { title: "Product & Quality", body: "Product thinking, UI/UX design and test automation." },
    ] as Card[],
  },
  capabilities: {
    eyebrow: "Technology & capabilities",
    title: [{ text: "Technology built for " }, { text: "real-world impact", accent: true }, { text: "." }] as Segment[],
    items: [
      { kicker: "01", title: "Artificial Intelligence", body: "Machine learning, generative AI, agents and intelligent automation." },
      { kicker: "02", title: "Data & Intelligence", body: "Data processing, analytics, knowledge systems and retrieval." },
      { kicker: "03", title: "Software Engineering", body: "Web platforms, backends, APIs and cloud-ready architecture." },
      { kicker: "04", title: "Research & Prototyping", body: "Applied experiments that turn new technology into working features." },
      { kicker: "05", title: "Product & Experience", body: "Product strategy, UX/UI design and continuous improvement." },
    ] as Card[],
  },
  principles: {
    eyebrow: "How we work",
    title: [{ text: "Built for " }, { text: "the real world", accent: true }, { text: "." }] as Segment[],
    items: [
      { kicker: "01 / Capability", title: "AI-first thinking", body: "AI is part of the architecture from day one — agent workflows and private LLM integrations designed in, not bolted on." },
      { kicker: "02 / Discipline", title: "Engineering-led", body: "Ambition backed by engineering: observability, secure-by-default design, predictable performance and automated deployments." },
      { kicker: "03 / Network", title: "Talent without borders", body: "A core team in Bengaluru working with vetted engineers wherever they are — speed without lowering the bar." },
      { kicker: "04 / Outcome", title: "Production-minded", body: "We judge ideas by whether they work in the real world: uptime, cost, hours saved and growth." },
    ] as Card[],
  },
  beliefs: {
    eyebrow: "What we believe",
    title: [{ text: "Four convictions behind " }, { text: "everything we build", accent: true }, { text: "." }] as Segment[],
    items: [
      { title: "Intelligence is infrastructure.", body: "AI isn't a feature you tack on. It's a layer your business runs on — governed, observable and owned by you." },
      { title: "Great engineers are everywhere.", body: "The right engineer for your problem might be in another city or country. We make distance irrelevant and keep quality non-negotiable." },
      { title: "Ship, then prove.", body: "Outcomes over opinions. We measure in uptime, hours saved and revenue moved — not in promises." },
      { title: "Your data stays yours.", body: "Private by default. Models and knowledge run in your own cloud, under your access rules and your retention policies." },
    ] as Card[],
  },
  direction: {
    eyebrow: "Where we're going",
    title: [{ text: "Our " }, { text: "direction", accent: true }, { text: "." }] as Segment[],
    body: "Rooted in Bengaluru and working globally, we're guided by two commitments.",
    vision: {
      title: "Intelligent businesses, built in India",
      body: "To become the studio growing businesses trust to build, own and scale intelligent systems — where modern AI and human skill work together with lasting confidence.",
    },
    mission: {
      title: "Turn AI into production reality",
      body: "To connect breakthroughs in Artificial Intelligence with disciplined engineering and dependable talent — turning ambitious ideas into reliable systems that move real business numbers.",
    },
  },
  closing: {
    eyebrow: "Built with intent",
    title: [{ text: "Let's build " }, { text: "what comes next", accent: true }, { text: "." }] as Segment[],
    body: "From Artificial Intelligence and enterprise technology to dedicated engineers, Liznat Labs brings what you need to turn big ideas into systems that work.",
  },
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactPage = {
  eyebrow: "Let's talk",
  title: [{ text: "Book a " }, { text: "strategy call", accent: true }, { text: "." }] as Segment[],
  lead: "Tell us what you're trying to build.",
  body: "AI in production, an enterprise platform, or a team to ship it — we'll come prepared with ideas, not a sales script.",
  interests: [...disciplines, "Something else"],
  messagePlaceholder: "What are you building, and where are you stuck?",
  success: "Thanks — your message is in. We'll reply within 24 hours.",
};
