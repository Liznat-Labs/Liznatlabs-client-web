"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navContent } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      // On other pages (e.g. /services) the section lives on the homepage
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.assign("/" + href);
    }
  };

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        borderBottom: `1px solid ${scrolled ? "#E8E8E8" : "transparent"}`,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 xl:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname !== "/") return;
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center no-underline"
          style={{ color: "var(--text)" }}
          aria-label="Liznat Labs, home"
        >
          <LogoLockup size={26} />
        </a>

        {/* Desktop center links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navContent.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-geist text-sm transition-colors duration-200"
                style={{ fontWeight: 400, letterSpacing: "0.01em", color: "var(--muted)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — pill button */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-book-call"))}
            className="group inline-flex items-center gap-2"
            style={{
              borderRadius: "9999px",
              background: "#0A0A0A",
              color: "#FFFFFF",
              border: "none",
              padding: "0.6rem 1.4rem",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              cursor: "pointer",
              transition: "background 0.25s ease",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0A0A0A"; }}
          >
            <span
              style={{ display: "inline-block", transition: "transform 0.3s ease" }}
              className="group-hover:-translate-x-0.5"
            >
              {navContent.cta.label}
            </span>
            <svg
              width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
              style={{ flexShrink: 0, transition: "transform 0.3s ease" }}
              className="group-hover:translate-x-0.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            className="block h-px w-5"
            style={{ background: "var(--text)" }}
            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-5"
            style={{ background: "var(--text)" }}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-5"
            style={{ background: "var(--text)" }}
            animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        aria-label="Mobile navigation"
        initial={false}
        // visibility:hidden once collapsed keeps the links out of the tab order
        animate={
          menuOpen
            ? { height: "auto", opacity: 1, visibility: "visible" }
            : { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } }
        }
        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ overflow: "hidden", borderTop: menuOpen ? "1px solid var(--border)" : "none", background: "#FFFFFF" }}
      >
        <div className="flex flex-col gap-0 px-6 pb-6 pt-4">
          {navContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-3 font-geist text-sm"
              style={{
                fontWeight: 400,
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("open-book-call")); }}
            className="group mt-5 inline-flex items-center justify-center gap-2"
            style={{
              borderRadius: "9999px",
              background: "#0A0A0A",
              color: "#FFFFFF",
              border: "none",
              padding: "0.85rem 1.75rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
          >
            {navContent.cta.label}
          </button>
        </div>
      </motion.div>
    </header>
  );
}
