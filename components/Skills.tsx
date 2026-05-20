import { skills, marqueeStack } from "@/lib/data";

export default function Skills() {
  return (
    <section id="almanac" className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="chapter-num">§ 03 — ALMANAC</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="fade-up display text-ink"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
            >
              An index of the
              <em className="display-italic text-ember"> tools </em>
              I keep sharp.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {Object.entries(skills).map(([k, v], i) => (
            <div key={k} className="fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-ember tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-smoke">
                  Class
                </span>
              </div>
              <h3
                className="mt-2 display text-ink"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                {k}
              </h3>
              <div className="mt-4 hairline" />
              <ul className="mt-4 space-y-2">
                {v.map((s) => (
                  <li
                    key={s}
                    className="font-sans text-[15px] text-ink/85 flex items-baseline gap-3"
                  >
                    <span className="font-mono text-[10px] text-ember">›</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* dual marquees */}
      <div className="mt-24 border-y border-ink/15 py-5 overflow-hidden">
        <div className="marquee marquee-fast gap-10 font-display text-3xl md:text-5xl text-ink whitespace-nowrap">
          {[...marqueeStack, ...marqueeStack].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              <em className="display-italic">{s}</em>
              <span className="text-ember text-base not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="border-b border-ink/15 py-3 overflow-hidden">
        <div className="marquee marquee-reverse gap-8 font-mono text-[11px] uppercase tracking-widest text-smoke whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              Ships production code · GST-compliant by design · Service modules over monoliths · Data-lake dashboards · React · Next.js · NestJS
              <span className="text-ember">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
