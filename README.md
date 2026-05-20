# Harsh Sinha — Portfolio

Editorial / almanac-style Next.js portfolio. Fraunces + Manrope + JetBrains Mono. GSAP + Lenis for motion.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 3
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Custom cursor, grain overlay, fluid typography

## Structure

```
app/
  layout.tsx      — fonts, metadata, providers
  page.tsx        — section assembly
  globals.css     — palette, grain, marquee, reveal primitives
components/
  SmoothScroll.tsx — Lenis + GSAP ticker + IntersectionObserver fade-ups
  Cursor.tsx       — paired dot + lagging ring (desktop only)
  Header.tsx       — fixed nav, scroll-aware backdrop
  Hero.tsx         — masthead, live IST clock, ticker
  Manifesto.tsx    — § 01 about
  Work.tsx         — § 02 projects (Mylo, PrepMate, EazyKart)
  Skills.tsx       — § 03 almanac + dual marquees
  Achievements.tsx — § 04 logbook
  Footer.tsx       — § 05 colophon + CTA
lib/
  data.ts          — profile, projects, skills, achievements
```

## Edit content

Everything that changes lives in `lib/data.ts`.
"# harsh-portfolio" 
