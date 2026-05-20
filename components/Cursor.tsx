"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "default" | "hover" | "view" | "read" | "write";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [invert, setInvert] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const detectInvert = (el: HTMLElement) => {
      // dark sections marked with data-theme="dark" OR descendants of <footer>
      return !!el.closest('[data-theme="dark"], footer');
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setInvert(detectInvert(t));
      const cue = t.closest("[data-cursor]") as HTMLElement | null;
      if (cue) {
        const v = (cue.getAttribute("data-cursor") || "hover") as Mode;
        setMode(v);
        if (labelRef.current) {
          labelRef.current.textContent =
            cue.getAttribute("data-cursor-label") ||
            (v === "view" ? "View" : v === "read" ? "Read" : v === "write" ? "Write" : "");
        }
        return;
      }
      const interactive = t.closest("a, button");
      setMode(interactive ? "hover" : "default");
      if (labelRef.current) labelRef.current.textContent = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const ringSize =
    mode === "view" || mode === "read" || mode === "write"
      ? "h-20 w-20"
      : mode === "hover"
        ? "h-14 w-14"
        : "h-9 w-9";

  const ringTint = invert
    ? "border-paper/60"
    : mode === "default"
      ? "border-ink/40"
      : "border-ember/80";

  const dotTint = invert ? "bg-paper" : "bg-ember";

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full pointer-events-none transition-colors duration-300 ${dotTint}`}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`fixed left-0 top-0 z-[199] flex items-center justify-center rounded-full pointer-events-none border transition-[width,height,border-color,background-color] duration-300 ease-out ${ringSize} ${ringTint} ${
          mode === "view" || mode === "read" || mode === "write"
            ? "bg-ember/90 border-transparent"
            : "bg-transparent"
        }`}
      >
        <span
          ref={labelRef}
          className={`font-mono text-[10px] uppercase tracking-widest select-none ${
            mode === "view" || mode === "read" || mode === "write"
              ? "text-paper"
              : "text-transparent"
          }`}
        />
      </div>
    </>
  );
}
