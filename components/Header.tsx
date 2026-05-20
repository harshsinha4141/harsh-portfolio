"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#almanac", label: "Almanac" },
  { href: "#logbook", label: "Logbook" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-paper/70 border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="Home">
          <span className="font-mono text-[11px] tracking-widest text-ember">HS</span>
          <span className="rule" />
          <span className="font-mono text-[11px] tracking-widest text-smoke">ENGINEER · MMXXVI</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-u font-mono text-[11px] uppercase tracking-widest text-ink/80 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:harshsinha9122@gmail.com"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink hover:text-ember transition-colors"
        >
          <span className="pulse-dot" />
          Available · Q2 2026
        </a>
      </div>
    </header>
  );
}
