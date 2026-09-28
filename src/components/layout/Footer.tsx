import Link from "next/link";
import { brand, navLinks } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

function Icon({ d }: { d: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-[0.3em] shrink-0 text-brand-lt" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand opacity-25 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan opacity-15 blur-[120px]" />
      <div className="shell relative grid grid-cols-1 gap-12 pb-10 pt-20 md:grid-cols-[1.4fr_1fr_0.8fr]">
        <div className="flex flex-col gap-5">
          {/* The logo's wordmark uses text-cream (var(--ink)); flip it to white on the dark footer */}
          <Link href="/" aria-label="Liznat Labs, home" className="text-white" style={{ "--ink": "#FFFFFF" } as React.CSSProperties}>
            <LogoLockup size={22} />
          </Link>
          <p className="max-w-sm text-white/80" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>
            {brand.statement}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="kicker !text-[0.66rem] text-white/70">Reach out to us</span>
          <a href={`mailto:${brand.email}`} className="flex items-start gap-3 text-sm hover:text-brand-lt">
            <Icon d="M4 6h16v12H4z M4 7l8 6 8-6" />
            {brand.email}
          </a>
          <span className="flex items-start gap-3 text-sm text-white/90">
            <Icon d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            {brand.location}
          </span>
          <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-brand-lt">
            <Icon d="M20 12a8 8 0 0 1-11.8 7L4 20l1-4.2A8 8 0 1 1 20 12z" />
            WhatsApp
          </a>
          <a href={brand.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-brand-lt">
            <Icon d="M4 9h4v11H4z M6 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4 M10 9h4v1.6c.6-1 1.9-1.8 3.5-1.8 2.8 0 3.5 1.8 3.5 4.4V20h-4v-5.8c0-1.4-.4-2.3-1.7-2.3S14 13 14 14.3V20h-4z" />
            LinkedIn
          </a>
        </div>

        <nav className="flex flex-col gap-4" aria-label="Footer navigation">
          <span className="kicker !text-[0.66rem] text-white/70">Navigation</span>
          <ul className="flex flex-col gap-2.5" role="list">
            {[...navLinks, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/90 hover:text-brand-lt">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div aria-hidden="true" className="shell pointer-events-none relative select-none">
        <span className="block whitespace-nowrap font-semibold leading-none text-white/[0.07]" style={{ fontSize: "clamp(3rem, 11.5vw, 9.8rem)", letterSpacing: "-0.03em" }}>
          LIZNAT LABS
        </span>
      </div>

      <div className="shell relative">
        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-[0.72rem] tracking-wide text-white/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Liznat Labs — Bengaluru, India</span>
          <span className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </span>
          <span>{brand.motto}</span>
        </div>
      </div>
    </footer>
  );
}
