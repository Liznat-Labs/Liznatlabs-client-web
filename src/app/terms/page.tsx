import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Liznat Labs",
  description: "Terms and conditions governing the use of Liznat Labs services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By engaging Liznat Labs for any service — including website development, Android app development, or custom software — you agree to be bound by these Terms of Service. If you do not agree, please do not proceed with any engagement.",
      "These terms apply to all clients, regardless of how the engagement was initiated (website form, email, WhatsApp, or direct referral).",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Liznat Labs provides software development services including, but not limited to: modern websites, landing pages, Android applications, custom software, APIs, dashboards, and automation systems.",
      "Each project begins with a written proposal that defines the scope, deliverables, timeline, and fixed price. Work begins only after the proposal is accepted and the deposit is paid.",
    ],
  },
  {
    title: "3. Project Proposals & Scope",
    body: [
      "All projects are delivered under a fixed-price, fixed-scope model. The proposal document serves as the binding scope of work. Any changes to the scope after acceptance will be handled as a separate change request with a revised price.",
      "If you request features or changes that fall outside the agreed scope, Liznat Labs will provide a revised quote. Work on out-of-scope items will not begin until a new agreement is reached in writing.",
    ],
  },
  {
    title: "4. Payment Terms",
    body: [
      "A 50% deposit is required before work begins on any project. The remaining 50% is due upon completion and before final delivery of files, credentials, or deployment.",
      "All prices are quoted in Indian Rupees (INR) unless otherwise agreed. International clients will be billed in USD at the equivalent rate agreed upon in the proposal.",
      "Invoices are due within 7 days of issue. Late payments beyond 14 days may result in work being paused until the outstanding amount is cleared.",
    ],
  },
  {
    title: "5. Revisions",
    body: [
      "Each pricing tier includes a fixed number of revision rounds as specified in the proposal (typically 1–3 rounds). A revision round is a single consolidated set of feedback. Revisions beyond the included rounds will be billed at ₹2,000 per hour.",
      "Revisions must be submitted in writing (email or WhatsApp message). Verbal feedback alone will not be actioned until confirmed in writing.",
    ],
  },
  {
    title: "6. Timelines & Delivery",
    body: [
      "Liznat Labs will make every reasonable effort to meet the timeline specified in the proposal. Delays caused by late feedback, missing content, unavailability of the client, or third-party dependencies are not the responsibility of Liznat Labs.",
      "If Liznat Labs anticipates a delay on its end, you will be notified promptly with a revised estimated completion date.",
    ],
  },
  {
    title: "7. Client Responsibilities",
    body: [
      "You are responsible for providing all required content (text, images, branding assets, credentials) in a timely manner. Delays in content delivery may result in timeline adjustments.",
      "You warrant that any content you provide does not infringe any third-party intellectual property rights, and you agree to indemnify Liznat Labs against any claims arising from content you supply.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "Upon receipt of full payment, Liznat Labs assigns to you all intellectual property rights to the final deliverables specific to your project (custom code, designs, and content created for you).",
      "Liznat Labs retains the right to use the project in its portfolio and case studies, unless you request confidentiality in writing before the project begins.",
      "Third-party libraries, frameworks, and open-source components used in your project remain subject to their respective licences. Liznat Labs is not responsible for licence compliance on third-party code.",
    ],
  },
  {
    title: "9. Post-Launch Support",
    body: [
      "Each project includes a free support window after launch — 2 weeks for websites, 30 days for Studio tier, and 60 days for Build tier projects. During this period, Liznat Labs will fix bugs that are directly attributable to the delivered work at no additional charge.",
      "Support does not cover new features, content changes, or issues arising from third-party service outages. After the support window, ongoing work is available on a retainer or per-request basis.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "Liznat Labs' total liability for any claim arising from a project shall not exceed the total amount paid by the client for that project.",
      "Liznat Labs is not liable for any indirect, incidental, or consequential damages including lost revenue, lost data, or business interruption, even if advised of the possibility of such damages.",
    ],
  },
  {
    title: "11. Confidentiality",
    body: [
      "Both parties agree to keep confidential any proprietary information shared during the course of a project. This includes business plans, unreleased product details, technical architecture, and pricing.",
      "This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
    ],
  },
  {
    title: "12. Termination",
    body: [
      "Either party may terminate an engagement with 7 days written notice. In the event of termination, you will be invoiced for all work completed up to the termination date, prorated against the project total. The deposit is non-refundable.",
      "If Liznat Labs terminates the engagement for reasons other than client breach, any deposit paid beyond the value of work completed will be refunded.",
    ],
  },
  {
    title: "13. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.",
    ],
  },
  {
    title: "14. Changes to These Terms",
    body: [
      "Liznat Labs may update these Terms of Service from time to time. The version in effect at the time a proposal is accepted governs that engagement. Updated terms apply to new engagements only.",
    ],
  },
  {
    title: "15. Contact",
    body: [
      "For any questions regarding these terms, please contact us at liznatlabs@gmail.com. We are based in Bengaluru, Karnataka, India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-bg min-h-screen">
      {/* Top bar */}
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 xl:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            aria-label="Liznat Labs, home"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span
              className="font-fraunces text-cream"
              style={{ fontSize: "1.05rem", fontWeight: 400 }}
            >
              Liznat Labs
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
            style={{ letterSpacing: "0.06em" }}
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 xl:px-8">
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
            Terms of Service
          </h1>
          <p className="mt-4 font-geist text-muted" style={{ fontSize: "0.875rem" }}>
            Effective date: 25 May 2026 &nbsp;·&nbsp; Liznat Labs, Bengaluru, India
          </p>
          <p className="mt-3 max-w-2xl font-geist text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
            Plain-English terms for working with Liznat Labs. Fixed scope. Fixed price. No surprises.
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
          style={{ background: "rgba(79, 70, 229,0.05)", border: "1px solid rgba(79, 70, 229,0.2)" }}
        >
          <p className="font-geist text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
            Questions about these terms? Email us at{" "}
            <a href="mailto:liznatlabs@gmail.com" className="text-accent hover:underline">
              liznatlabs@gmail.com
            </a>{" "}
            and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="mx-auto max-w-4xl px-6 py-8 xl:px-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
            © 2026 Liznat Labs · Bengaluru, India
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
              style={{ letterSpacing: "0.04em" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-mono text-xs text-accent"
              style={{ letterSpacing: "0.04em" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
