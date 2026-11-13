"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Work() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
        gsap.from(row.querySelectorAll(".reveal-stagger"), {
          y: 36,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <SectionHead num="02" label="Selected Work" tagline="Two desks. Four builds. One ledger." />

        <div className="mt-16 md:mt-24 space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <ProjectRow key={p.index} project={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  num,
  label,
  tagline,
}: {
  num: string;
  label: string;
  tagline: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-3">
        <div className="chapter-num">§ {num} — {label.toUpperCase()}</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2
          className="fade-up display text-ink"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
        >
          {label}
          <em className="display-italic text-ember">,</em> indexed.
        </h2>
        <p className="fade-up mt-4 font-mono text-[11px] uppercase tracking-widest text-smoke">
          {tagline}
        </p>
      </div>
    </div>
  );
}

function ProjectRow({ project, flipped }: { project: Project; flipped: boolean }) {
  return (
    <article
      className="project-row group"
      data-cursor="read"
      data-cursor-label="Read"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* index column */}
        <div className={`col-span-12 md:col-span-3 ${flipped ? "md:order-3" : ""}`}>
          <div className="reveal-stagger">
            <div className="font-display text-ember" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1 }}>
              {project.index}
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-smoke">
              {project.period}
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-smoke">
              {project.where}
            </div>
            <div className="mt-6 hairline" />
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-widest text-ink/75">
              {project.stack.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < project.stack.length - 1 && <span className="text-ember ml-3">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* content column */}
        <div className={`col-span-12 md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
          <div className="reveal-stagger flex items-baseline gap-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ember">
              {project.kind}
            </div>
          </div>
          <h3
            className="reveal-stagger mt-3 display text-ink"
            style={{ fontSize: "clamp(2rem, 4.6vw, 4.2rem)" }}
          >
            {project.title.split(" — ")[0]}
            {project.title.includes(" — ") && (
              <>
                <em className="display-italic text-ink/55"> — {project.title.split(" — ")[1]}</em>
              </>
            )}
          </h3>

          <p
            className="reveal-stagger mt-6 font-display italic text-ink/85"
            style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.4rem)", lineHeight: 1.4 }}
          >
            {project.summary}
          </p>

          <ul className="reveal-stagger mt-8 space-y-3.5">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-ink/85">
                <span className="font-mono text-[11px] text-ember mt-1.5 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {project.links && project.links.length > 0 && (
            <div className="reveal-stagger mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 border border-ink/25 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:border-ember hover:text-ember"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* decorative column */}
        <div className={`col-span-12 md:col-span-2 ${flipped ? "md:order-1" : ""} hidden md:flex items-start justify-end pt-4`}>
          <div className="reveal-stagger">
            {project.art === "route" && <RouteSvg />}
            {project.art === "tiles" && <TilesSvg />}
            {project.art === "grid" && <GridSvg />}
            {project.art === "pulse" && <PulseSvg />}
            {project.art === "stream" && <StreamSvg />}
            {project.art === "phone" && <PhoneSvg />}
          </div>
        </div>
      </div>

      <div className="mt-12 hairline" />
    </article>
  );
}

/* Decorative SVGs — typographic, no fake screenshots */

function RouteSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.5">
        <path d="M20 10 Q 90 50 30 100 Q -20 150 100 190" strokeDasharray="2 5" />
      </g>
      <g fill="rgb(var(--ember))">
        <circle cx="20" cy="10" r="3.5" />
        <circle cx="60" cy="55" r="2.5" />
        <circle cx="30" cy="100" r="2.5" />
        <circle cx="40" cy="145" r="2.5" />
        <circle cx="100" cy="190" r="3.5" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="8" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="28" y="13">DEL</text>
        <text x="68" y="58">GGN</text>
        <text x="38" y="103">BLR</text>
        <text x="48" y="148">HYD</text>
        <text x="78" y="200">CHN</text>
      </g>
    </svg>
  );
}

function TilesSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.4">
        <rect x="8" y="20" width="60" height="42" rx="2" />
        <rect x="38" y="50" width="60" height="42" rx="2" />
        <rect x="20" y="100" width="60" height="42" rx="2" />
      </g>
      <g fill="rgb(var(--ember))">
        <circle cx="14" cy="26" r="1.5" />
        <circle cx="44" cy="56" r="1.5" />
        <circle cx="26" cy="106" r="1.5" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="7" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="14" y="84">LIVE · 05</text>
        <text x="14" y="170">CODE · STREAM · CHAT</text>
      </g>
    </svg>
  );
}

function GridSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.45">
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={10 + c * 34}
              y={20 + r * 38}
              width="28"
              height="32"
            />
          )),
        )}
      </g>
      <g fill="rgb(var(--ember))">
        <rect x="10" y="20" width="28" height="32" />
        <rect x="78" y="96" width="28" height="32" opacity="0.7" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="7" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="10" y="188">SKU · CART · ORDER</text>
      </g>
    </svg>
  );
}

function PulseSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.35">
        <line x1="8" y1="40" x2="112" y2="40" strokeDasharray="2 4" />
        <line x1="8" y1="140" x2="112" y2="140" strokeDasharray="2 4" />
      </g>
      <path
        d="M8 100 L30 100 L38 70 L48 125 L58 55 L68 100 L112 100"
        stroke="rgb(var(--ember))"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g fill="rgb(var(--ember))">
        <circle cx="38" cy="70" r="2.5" />
        <circle cx="58" cy="55" r="2.5" />
        <circle cx="48" cy="125" r="2.5" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="7" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="8" y="34">HIGH</text>
        <text x="8" y="152">LOW</text>
        <text x="8" y="188">AM · NOON · PM · NIGHT</text>
      </g>
    </svg>
  );
}

function StreamSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.4">
        <line x1="10" y1="40" x2="110" y2="40" />
        <line x1="10" y1="90" x2="110" y2="90" />
        <line x1="10" y1="140" x2="110" y2="140" />
      </g>
      <g fill="rgb(var(--ink))" opacity="0.55">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={`a${i}`} x={14 + i * 18} y="34" width="12" height="12" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <rect key={`b${i}`} x={14 + i * 18} y="84" width="12" height="12" />
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={`c${i}`} x={14 + i * 18} y="134" width="12" height="12" />
        ))}
      </g>
      <g fill="rgb(var(--ember))">
        <rect x="86" y="34" width="12" height="12" />
        <rect x="68" y="84" width="12" height="12" />
        <rect x="50" y="134" width="12" height="12" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="7" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="10" y="26">P0</text>
        <text x="10" y="76">P1</text>
        <text x="10" y="126">P2</text>
        <text x="10" y="188">TOPIC · ORDERS</text>
      </g>
    </svg>
  );
}

function PhoneSvg() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" aria-hidden>
      <g stroke="rgb(var(--ink))" strokeWidth="1" opacity="0.45">
        <rect x="30" y="14" width="60" height="120" rx="9" />
        <line x1="52" y1="22" x2="68" y2="22" />
        <rect x="38" y="34" width="44" height="22" />
        <rect x="38" y="62" width="20" height="20" />
        <rect x="62" y="62" width="20" height="20" />
        <rect x="38" y="88" width="20" height="20" />
        <rect x="62" y="88" width="20" height="20" />
      </g>
      <g fill="rgb(var(--ember))">
        <rect x="38" y="34" width="44" height="22" opacity="0.8" />
        <circle cx="60" cy="122" r="3" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="7" fill="rgb(var(--smoke))" letterSpacing="0.1em">
        <text x="14" y="170">iOS · ANDROID</text>
        <text x="14" y="188">ONE CODEBASE</text>
      </g>
    </svg>
  );
}
