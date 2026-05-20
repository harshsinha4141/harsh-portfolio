"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const headline = ["Let's", "ship", "something", "real."];

export default function Footer() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cta-word > span", {
        yPercent: 110,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".cta-headline",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={root}
      data-theme="dark"
      className="relative bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 pt-28 md:pt-40 pb-12">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-ember">
              § 05 — COLOPHON
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-paper/55">
              Closing notes <br />and contact ledger.
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="cta-headline display"
              style={{ fontSize: "clamp(3rem, 11vw, 11rem)", lineHeight: 0.92 }}
            >
              {headline.map((w, i) => (
                <span
                  key={i}
                  className="cta-word inline-block overflow-hidden align-bottom mr-[0.18em]"
                >
                  <span className="inline-block">
                    {i === 2 ? (
                      <em className="display-italic text-ember">{w}</em>
                    ) : (
                      w
                    )}
                  </span>
                </span>
              ))}
            </h2>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="write"
              data-cursor-label="Write"
              className="mt-10 inline-flex items-baseline gap-3 group"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-paper/55 group-hover:text-ember transition-colors">
                Write to me
              </span>
              <span
                className="display text-paper group-hover:text-ember transition-colors"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.6rem)" }}
              >
                <em className="display-italic">{profile.email}</em>
                <span className="ml-3 text-ember">↗</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-8 border-t border-paper/15 pt-12">
          <FootCol
            head="Direct"
            items={[
              { label: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { label: "Phone", v: profile.phone, href: "tel:+919122357161" },
            ]}
          />
          <FootCol
            head="Networks"
            items={[
              { label: "GitHub", v: profile.github, href: profile.githubUrl },
              { label: "LinkedIn", v: profile.linkedin, href: profile.linkedinUrl },
              { label: "LeetCode", v: profile.leetcode, href: profile.leetcodeUrl },
            ]}
          />
          <FootCol
            head="Coordinates"
            items={[
              { label: "City", v: profile.city },
              { label: "Timezone", v: profile.timezone },
              { label: "Status", v: profile.status },
            ]}
          />
          <div className="col-span-12 md:col-span-3">
            <Head>Set in</Head>
            <ul className="mt-4 space-y-3 font-sans text-sm text-paper/80">
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/45">Display</span>
                <em className="display-italic text-lg">Fraunces</em>
              </li>
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/45">Body</span>
                Manrope
              </li>
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/45">Mono</span>
                <span className="font-mono">JetBrains Mono</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-paper/45">
          <div>
            © {new Date().getFullYear()} Harsh Sinha · Issue 01 · Hand-coded in Next.js
          </div>
          <div className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="text-paper/70">Currently shipping at Mylo, Gurugram</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-paper/15">
        <div className="marquee gap-12 py-3 font-mono text-[11px] uppercase tracking-widest text-paper/70 whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              END OF EDITION
              <span className="text-ember">✦</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Head({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest text-ember">
      {children}
    </div>
  );
}

function FootCol({
  head,
  items,
}: {
  head: string;
  items: { label: string; v: string; href?: string }[];
}) {
  return (
    <div className="col-span-12 md:col-span-3">
      <Head>{head}</Head>
      <ul className="mt-4 space-y-3 font-sans text-sm text-paper/80">
        {items.map((it) => (
          <li key={it.label}>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/45">
              {it.label}
            </span>
            {it.href ? (
              <a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link-u text-paper hover:text-ember transition-colors"
              >
                {it.v}
              </a>
            ) : (
              <span className="text-paper">{it.v}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
