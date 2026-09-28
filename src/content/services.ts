// Content for the /services page — AI Applications, AI & IT Solutions, IT Staffing.
import type { Segment } from "@/content/site";

export type Card = { title: string; kicker?: string; body: string; points?: string[] };
export type Step = { title: string; body: string };

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

export const servicesPage = {
  hero: {
    eyebrow: "What we do",
    title: [{ text: "Three practices, " }, { text: "one result", accent: true }, { text: "." }] as Segment[],
    body: "AI Applications, AI & IT Solutions and IT Staffing — delivered as one connected team. From custom AI products to dependable infrastructure to the engineers who keep it all moving.",
  },
  subnav: [
    { label: "Overview", href: "#overview" },
    { label: "01 AI Applications", href: "#ai-applications" },
    { label: "Process", href: "#process" },
    { label: "02 AI & IT Solutions", href: "#it-solutions" },
    { label: "03 IT Staffing", href: "#staffing" },
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
