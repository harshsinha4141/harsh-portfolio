import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="logbook" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="chapter-num">§ 04 — LOGBOOK</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="fade-up display text-ink"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
            >
              Entries from the
              <em className="display-italic text-ember"> ship&rsquo;s </em>
              log.
            </h2>
          </div>
        </div>

        <ol className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
          {achievements.map((a, i) => (
            <li
              key={a.title}
              className="fade-up grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-9 items-baseline group hover:bg-ink/[0.025] transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="col-span-12 md:col-span-1 font-mono text-[11px] tracking-widest text-ember">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-widest text-smoke">
                {a.label}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3
                  className="display text-ink group-hover:text-ember transition-colors"
                  style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.4rem)" }}
                >
                  {a.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-3 font-sans text-[15px] text-ink/80">
                {a.detail}
              </div>
              <div className="col-span-12 md:col-span-1 text-right font-mono text-[11px] uppercase tracking-widest text-smoke">
                {a.meta}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
