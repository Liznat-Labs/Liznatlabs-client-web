"use client";

import { useEffect, useState } from "react";

/** Sticky pill navigation that highlights the section in view. */
export function SubNav({ label, items }: { label?: string; items: { label: string; href: string }[] }) {
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
    <nav aria-label="On this page" className="sticky top-[84px] z-40 bg-transparent">
      <div className="shell py-3">
        <ul
          className="flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-brand-lt bg-white/90 p-1.5 shadow-[0_8px_24px_rgba(10,10,10,0.08)] backdrop-blur [scrollbar-width:none]"
          role="list"
        >
          {label && (
            <li className="kicker hidden shrink-0 border-r border-line px-4 !text-[0.62rem] text-brand md:block" aria-hidden="true">
              {label}
            </li>
          )}
          {items.map((i) => (
            <li key={i.href} className="shrink-0">
              <a
                href={i.href}
                aria-current={active === i.href ? "true" : undefined}
                className={`block rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  active === i.href ? "bg-brand text-white" : "text-ink-soft hover:text-brand"
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
