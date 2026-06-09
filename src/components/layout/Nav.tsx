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
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      role="banner"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(249,248,246,0.92)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        transition: "border-color 0.3s ease",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 xl:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center no-underline text-cream"
          aria-label="Liznat Labs, home"
        >
          <LogoLockup size={26} />
        </a>

        {/* Desktop center links */}
        <ul
          className="hidden items-center gap-8 md:flex"
          role="list"
        >
          {navContent.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-geist text-sm text-muted transition-colors duration-200 hover:text-cream"
                style={{ fontWeight: 400, letterSpacing: "0.01em" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-book-call"))}
            className="inline-flex items-center rounded-sm border border-accent bg-transparent px-4 py-2 font-mono text-xs text-accent transition-all duration-200 hover:bg-accent hover:text-bg"
            style={{ letterSpacing: "0.04em" }}
          >
            {navContent.cta.label}
          </button>
        </div>

        {/* Mobile menu button */}
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
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ overflow: "hidden", borderTop: menuOpen ? "1px solid var(--border)" : "none" }}
      >
        <div className="flex flex-col gap-0 px-6 pb-6 pt-4">
          {navContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="border-b border-border-line py-3 font-geist text-sm text-muted transition-colors hover:text-cream"
              style={{ fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("open-book-call")); }}
            className="mt-4 inline-flex items-center justify-center rounded-sm border border-accent px-4 py-2.5 font-mono text-xs text-accent transition-all hover:bg-accent hover:text-bg"
            style={{ letterSpacing: "0.04em" }}
          >
            {navContent.cta.label}
          </button>
        </div>
      </motion.div>
    </header>
  );
}


