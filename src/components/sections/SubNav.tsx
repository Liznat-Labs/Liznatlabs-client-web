"use client";

import { useEffect, useState } from "react";

/** Sticky in-page navigation that highlights the section in view. */
export function SubNav({ items }: { items: { label: string; href: string }[] }) {
  const [active, setActive] = useState(items[0]?.href);

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-[76px] z-40 border-y hairline bg-[rgba(5,6,10,0.8)] backdrop-blur-xl">
      <ul className="shell flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]" role="list">
        {items.map((i) => (
          <li key={i.href} className="shrink-0">
            <a
              href={i.href}
              aria-current={active === i.href ? "true" : undefined}
              className={`block rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors ${
                active === i.href ? "bg-[rgba(61,124,255,0.15)] text-pearl" : "text-pearl-dim hover:text-pearl"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
