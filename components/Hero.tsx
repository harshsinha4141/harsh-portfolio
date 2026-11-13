"use client";

import { useEffect, useState } from "react";
import { profile, marqueeStack } from "@/lib/data";

export default function Hero() {
  const [clock, setClock] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const f = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setClock(f.format(d) + " IST");
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col">
      {/* top metadata bar */}
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10 pt-28 md:pt-32">
        <div className="grid grid-cols-12 gap-4 font-mono text-[11px] uppercase tracking-widest text-smoke">
          <div className="col-span-6 md:col-span-3 flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="text-ink/80">{profile.status}</span>
          </div>
          <div className="hidden md:flex md:col-span-3 items-center gap-2">
            <span>28.46° N · 77.03° E</span>
          </div>
          <div className="hidden md:flex md:col-span-3 items-center gap-2">
            <span>{clock || "—"}</span>
          </div>
          <div className="col-span-6 md:col-span-3 text-right">
            <span>Vol. 01 / Ed. 26</span>
          </div>
        </div>
      </div>

      {/* main masthead */}
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10 flex-1 flex items-center pt-12 md:pt-6">
        <div className="grid grid-cols-12 gap-6 w-full">
          {/* left chapter mark */}
          <div className="col-span-12 md:col-span-2 order-2 md:order-1 flex md:flex-col items-start md:justify-end md:pb-2 gap-4">
            <div className="chapter-num">§ 00 — MASTHEAD</div>
            <div className="hidden md:block w-px h-24 bg-ink/20" />
          </div>

          {/* center display name */}
          <div className="col-span-12 md:col-span-8 order-1 md:order-2">
            <h1
              className="display text-ink"
              style={{ fontSize: "clamp(4.5rem, 14vw, 13rem)" }}
            >
              <span className="reveal" style={{ ["--reveal-delay" as never]: "0.15s" }}>
                <span>Harsh</span>
              </span>
              <br />
              <span className="reveal" style={{ ["--reveal-delay" as never]: "0.32s" }}>
                <em className="display-italic text-ember">Sinha.</em>
              </span>
            </h1>

            <div className="mt-10 md:mt-14 max-w-2xl">
              <p className="fade-up font-sans text-lg md:text-xl leading-snug text-ink/85">
                Full-stack engineer shipping the boring infrastructure that keeps
                logistics moving — REST APIs that talk to GST portals, dashboards
                that flag inventory before warehouses run dry, and refactored
                monoliths that stop bleeding minutes off every dispatch.
              </p>
              <p className="fade-up mt-5 font-mono text-[12px] uppercase tracking-widest text-smoke" style={{ transitionDelay: "120ms" }}>
                — Currently at <span className="text-ink">Accenture</span> · Previously <span className="text-ink">Mylo · Gurugram</span> · React · React Native · Node.js · SQL
              </p>
            </div>
          </div>

          {/* right edge col — small composition */}
          <aside className="col-span-12 md:col-span-2 order-3 hidden md:flex flex-col justify-end items-end gap-3">
            <div className="text-right font-mono text-[10px] uppercase tracking-widest text-smoke leading-relaxed">
              <div>An almanac of</div>
              <div className="text-ink">production work,</div>
              <div>indexed, dated, and</div>
              <div className="text-ink">honestly told.</div>
            </div>
            <Star />
          </aside>
        </div>
      </div>

      {/* bottom ticker */}
      <div className="mt-12 border-y border-ink/15 py-4 overflow-hidden">
        <div className="marquee gap-12 font-display italic text-2xl text-ink/80">
          {[...marqueeStack, ...marqueeStack].map((s, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              {s}
              <span className="text-ember not-italic font-sans text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-smoke">
        <div className="flex items-center gap-3">
          <span className="text-ink">↓</span>
          <span>Scroll · five chapters follow</span>
        </div>
        <div className="hidden md:block">
          ISSN 8.71 · CGPA · CHITKARA UNIVERSITY
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <g stroke="rgb(var(--ember))" strokeWidth="1" strokeLinecap="round">
        <line x1="28" y1="6" x2="28" y2="50" />
        <line x1="6" y1="28" x2="50" y2="28" />
        <line x1="12.5" y1="12.5" x2="43.5" y2="43.5" />
        <line x1="43.5" y1="12.5" x2="12.5" y2="43.5" />
        <circle cx="28" cy="28" r="3" fill="rgb(var(--ember))" />
      </g>
    </svg>
  );
}
