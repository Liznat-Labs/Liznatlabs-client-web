import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Liznat Labs",
  description: "How Liznat Labs collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use our contact form or book a call, we collect the information you provide: your name, email address, phone number (optional), project type, and any message you write.",
      "We do not use cookies, tracking pixels, or analytics scripts on this website. We do not collect any information passively.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you submit solely to respond to your enquiry, discuss your project, and communicate with you about our services.",
      "We do not sell, rent, or share your personal information with any third party for marketing purposes.",
    ],
  },
  {
    title: "3. Email Communications",
    body: [
      "By submitting our contact form, you consent to receiving email responses from Liznat Labs regarding your project enquiry. We will not add you to any mailing list without your explicit consent.",
      "You may opt out of any ongoing communication at any time by replying to any email with 'unsubscribe' in the subject line.",
    ],
  },
  {
    title: "4. Data Storage & Security",
    body: [
      "Your enquiry details are received via email and stored only within our email account. We do not maintain a separate database of contact form submissions.",
      "We take reasonable measures to protect your information, including using encrypted email transmission (TLS) via our email provider.",
    ],
  },
  {
    title: "5. Third-Party Services",
    body: [
      "Our website is hosted on Vercel. Contact form submissions are processed via Resend. These services may process your data as part of delivering our website and email infrastructure. We encourage you to review their respective privacy policies.",
      "We do not integrate with any advertising networks, social media trackers, or analytics providers.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You have the right to request access to, correction of, or deletion of any personal information you have submitted to us. To exercise these rights, email us at liznatlabs@gmail.com and we will respond within 7 business days.",
      "If you are based in the European Union, you may also have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    title: "7. Children's Privacy",
    body: [
      "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us and we will delete it promptly.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of our website after changes constitutes your acceptance of the revised policy.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "If you have any questions about this Privacy Policy, please contact us at liznatlabs@gmail.com. We are based in Bengaluru, Karnataka, India.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-36 xl:px-8">
        {/* Heading */}
        <div className="mb-12">
          <span
            className="mb-3 block font-mono text-xs text-muted"
            style={{ letterSpacing: "0.12em" }}
          >
            LEGAL
          </span>
          <h1
            className="font-fraunces text-cream"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, lineHeight: 1.1 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 font-geist text-muted" style={{ fontSize: "0.875rem" }}>
            Effective date: 25 May 2026 &nbsp;·&nbsp; Liznat Labs, Bengaluru, India
          </p>
          <p className="mt-3 max-w-2xl font-geist text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
            We keep it simple: we only collect what you give us, we use it only to respond to you, and we never sell it.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "3rem" }} />

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className="mb-3 font-fraunces text-cream"
                style={{ fontSize: "1.15rem", fontWeight: 600 }}
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="font-geist text-muted"
                    style={{ fontSize: "0.9rem", lineHeight: 1.8 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-16 rounded-sm p-6"
          style={{ background: "rgba(61,124,255,0.06)", border: "1px solid rgba(106,168,255,0.25)" }}
        >
          <p className="font-geist text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
            Questions? Email us at{" "}
            <a href="mailto:liznatlabs@gmail.com" className="text-accent hover:underline">
              liznatlabs@gmail.com
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
