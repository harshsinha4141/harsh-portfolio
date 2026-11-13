export default function Manifesto() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="chapter-num">§ 01 — ABOUT</div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-smoke">
              The engineer behind <br />the masthead.
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <p
              className="fade-up display text-ink"
              style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.4rem)", lineHeight: 1.08 }}
            >
              I build the <em className="display-italic text-ember">unglamorous</em> middle
              layer — service modules, settlement queries, telephony bridges, data-lake
              dashboards — the parts of a logistics platform that decide whether a truck
              dispatches on time or a warehouse runs out of stock.
            </p>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              <Block
                k="Production scale"
                v="Production dashboards shipped at Mylo — Shipment, P&L, B2B Packaging, Settlement — wired to E-way bills, Exotel, and marketplace data lakes."
              />
              <Block
                k="Architecture"
                v="Migrated Laravel dashboards to React with role-based access, and built side projects around Redis caching, Docker Compose, and Kafka event pipelines."
              />
              <Block
                k="Foundations"
                v="DSA, OOP, system design — 50- and 100-day LeetCode streaks, CGPA 8.71 at Chitkara University. Hackathon winner."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ k, v }: { k: string; v: string }) {
  return (
    <div className="fade-up">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ember">{k}</div>
      <div className="mt-3 hairline" />
      <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink/85">{v}</p>
    </div>
  );
}
