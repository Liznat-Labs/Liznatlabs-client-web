"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/content/site";
import { LogoLockup } from "@/components/ui/Logo";

const NAV_H = 76;

export function Nav() {
  const pathname = usePathname();
  const [overDark, setOverDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Light-on-dark while the nav sits over a [data-nav-dark] hero, dark-on-light otherwise
  useEffect(() => {
    const check = () => {
      const probe = NAV_H / 2;
      const dark = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-dark]")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setOverDark(dark);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const dark = overDark && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ${
          dark ? "border-b border-transparent text-white" : "border-b border-line/80 bg-[#EFE9FF]/85 text-ink backdrop-blur-xl"
        }`}
      >
        <nav className="shell flex items-center justify-between" style={{ height: NAV_H }} aria-label="Main navigation">
          <Link href="/" aria-label="Liznat Labs, home" className={dark ? "text-white" : "text-ink"}>
            <LogoLockup size={26} />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-9" role="list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`relative py-1 text-sm tracking-wide transition-colors duration-300 ${
                      isActive(l.href) ? (dark ? "text-white" : "text-brand") : dark ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-brand"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-0 -bottom-1.5 h-[2px] origin-left rounded-full transition-transform duration-500 ${dark ? "bg-white" : "bg-brand"} ${
                        isActive(l.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                dark ? "border border-white/25 bg-white/10 text-white hover:bg-white/20" : "bg-ink text-white hover:bg-brand"
              }`}
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
            <span className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.75px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`} />
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
            className="fixed inset-x-0 bottom-0 z-40 bg-canvas md:hidden"
            style={{ top: NAV_H }}
          >
            <ul className="shell flex flex-col pt-6" role="list">
              {[...navLinks, { label: "Let's Talk", href: "/contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`flex items-baseline gap-4 py-5 font-display text-3xl font-bold ${isActive(l.href) ? "text-brand" : "text-ink"}`}
                  >
                    <span className="kicker text-cyan">{String(i + 1).padStart(2, "0")}</span>
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
