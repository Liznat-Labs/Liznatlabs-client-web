import Link from "next/link";
import { brand, navLinks } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t hairline bg-[rgba(5,6,10,0.6)] backdrop-blur-sm">
      <div className="shell grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="Liznat Labs, home" className="text-pearl">
            <LogoLockup size={24} />
          </Link>
          <p className="max-w-sm text-pearl-dim" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            {brand.statement}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="eyebrow">Reach out to us</span>
          <a href={`mailto:${brand.email}`} className="text-pearl transition-colors hover:text-blue-bright">
            {brand.email}
          </a>
          <span className="text-pearl-dim" style={{ fontSize: "0.95rem" }}>{brand.location}</span>
          <div className="flex gap-5 text-sm">
            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="text-pearl-dim transition-colors hover:text-blue-bright">
              WhatsApp
            </a>
            <a href={brand.linkedin} target="_blank" rel="noopener noreferrer" className="text-pearl-dim transition-colors hover:text-blue-bright">
              LinkedIn
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-5" aria-label="Footer navigation">
          <span className="eyebrow">Navigation</span>
          <ul className="flex flex-col gap-3" role="list">
            {[...navLinks, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-pearl-dim transition-colors hover:text-pearl">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell flex flex-col items-start justify-between gap-4 border-t hairline py-7 font-mono text-xs uppercase tracking-[0.16em] text-muted md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Liznat Labs — Bengaluru, India</span>
        <span className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-pearl">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-pearl">Terms</Link>
        </span>
        <span>{brand.motto}</span>
      </div>
    </footer>
  );
}
