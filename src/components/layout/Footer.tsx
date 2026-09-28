"use client";

import { footerContent } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mx-auto max-w-7xl px-6 xl:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Main grid */}
      <div className="grid grid-cols-2 gap-6 py-16 md:grid-cols-4 md:gap-12">
        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <div className="text-cream">
            <LogoLockup size={22} />
          </div>
          <p
            className="font-geist text-muted"
            style={{ fontSize: "0.8rem", lineHeight: 1.7, fontWeight: 400, maxWidth: "22ch" }}
          >
            {footerContent.brand.tagline}
          </p>
        </div>

        {/* Studio links */}
        <div className="flex flex-col gap-4">
          <span
            className="font-mono text-xs text-muted"
            style={{ letterSpacing: "0.1em" }}
          >
            STUDIO
          </span>
          <nav aria-label="Studio links">
            <ul className="flex flex-col gap-2.5" role="list">
              {footerContent.studioLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="font-geist text-muted transition-colors hover:text-accent"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Connect links */}
        <div className="flex flex-col gap-4">
          <span
            className="font-mono text-xs text-muted"
            style={{ letterSpacing: "0.1em" }}
          >
            CONNECT
          </span>
          <nav aria-label="Connect links">
            <ul className="flex flex-col gap-2.5" role="list">
              {footerContent.connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="font-geist text-muted transition-colors hover:text-accent"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal links */}
        <div className="flex flex-col gap-4">
          <span
            className="font-mono text-xs text-muted"
            style={{ letterSpacing: "0.1em" }}
          >
            LEGAL
          </span>
          <nav aria-label="Legal links">
            <ul className="flex flex-col gap-2.5" role="list">
              {footerContent.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-geist text-muted transition-colors hover:text-accent"
                    style={{ fontSize: "0.875rem", fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="font-mono text-xs text-muted"
          style={{ letterSpacing: "0.06em" }}
        >
          {footerContent.copyright}
        </span>

        <span
          className="font-mono text-xs text-muted"
          style={{ letterSpacing: "0.04em" }}
        >
          Crafted with intent in Bengaluru.
        </span>
      </div>
    </footer>
  );
}


