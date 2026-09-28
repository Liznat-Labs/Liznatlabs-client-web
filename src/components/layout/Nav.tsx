"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation, and lock page scroll while it's open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? "border-b hairline bg-[rgba(5,6,10,0.72)] backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <Link href="/" aria-label="Liznat Labs, home" className="text-pearl">
          <LogoLockup size={24} />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-9" role="list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`relative py-1 text-sm tracking-wide transition-colors duration-300 ${
                    isActive(l.href) ? "text-pearl" : "text-pearl-dim hover:text-pearl"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-pearl transition-transform duration-500 ${
                      isActive(l.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="glass rounded-full px-5 py-2.5 text-sm tracking-wide text-pearl transition-colors duration-300 hover:border-blue-bright hover:text-blue-bright"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-px w-6 bg-pearl transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-pearl transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

    </header>

      {/* Outside the header: backdrop-filter there would make it the menu's containing block */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 bg-bg md:hidden"
          >
            <ul className="shell flex flex-col pt-8" role="list">
              {[...navLinks, { label: "Let's Talk", href: "/contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b hairline"
                >
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`flex items-baseline gap-4 py-5 text-3xl font-extralight ${isActive(l.href) ? "text-pearl" : "text-pearl-dim"}`}
                  >
                    <span className="font-mono text-xs text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
