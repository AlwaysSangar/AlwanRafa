"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function ActiveHeader() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
        if (v?.target?.id) setActive(v.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const idx = Math.max(0, items.findIndex((i) => i.id === active));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <span className="hidden rounded-full border-2 border-ink bg-sun px-4 py-2 font-display text-lg font-extrabold shadow-hard sm:block">
          Alwan.
        </span>
        <nav className="mx-auto w-full max-w-md sm:mx-0" aria-label="Navigasi utama">
          <div className="rounded-full border-2 border-ink bg-white p-1 shadow-hard">
            <div className="relative grid grid-cols-4">
              <span
                className="absolute left-0 top-0 h-full w-1/4 rounded-full bg-ink transition-transform duration-300"
                style={{ transform: `translateX(${idx * 100}%)` }}
              />
              {items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  aria-current={it.id === active ? "true" : undefined}
                  onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className={`relative z-10 rounded-full py-2.5 text-xs font-bold transition-colors active:scale-95 ${
                    it.id === active ? "text-paper" : "text-ink/70"
                  }`}
                >
                  {it.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
