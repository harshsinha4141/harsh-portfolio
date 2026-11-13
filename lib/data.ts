export const profile = {
  name: "Harsh Sinha",
  role: "Full-Stack Engineer",
  city: "Gurugram, IN",
  timezone: "GMT+5:30",
  status: "Engineer at Accenture",
  email: "harshsinha9122@gmail.com",
  phone: "+91 9122 357 161",
  github: "github.com/harshsinha4141",
  githubUrl: "https://github.com/harshsinha4141",
  linkedin: "linkedin.com/in/harsh-sinha-542140251",
  linkedinUrl: "https://www.linkedin.com/in/harsh-sinha-542140251",
  leetcode: "leetcode.com/harshsinha4141000",
  leetcodeUrl: "https://leetcode.com/harshsinha4141000",
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  index: string;
  title: string;
  kind: string;
  period: string;
  where: string;
  summary: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
  art: "route" | "tiles" | "grid" | "pulse" | "stream" | "phone";
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Accenture — Advanced Associate Software Engineer",
    kind: "Experience · Full-time",
    period: "Jun 2026 — Present",
    where: "India",
    summary:
      "Joined as an Advanced Associate Software Engineer on the React Native track — cross-platform mobile training, a shipped e-commerce app, and now awaiting project allocation.",
    bullets: [
      "Completed Mobile Application Development training focused on React Native and cross-platform app development.",
      "Built myShoppy, a mobile-first household products e-commerce app with React Native and Expo (see 06).",
      "Completed assigned technical training in August 2026; currently awaiting project allocation and onboarding.",
    ],
    stack: ["React Native", "Expo", "JavaScript"],
    art: "phone",
  },
  {
    index: "02",
    title: "Mylo — Raise Happiness",
    kind: "Experience · SDE-1 Intern",
    period: "Dec 2025 — Jun 2026",
    where: "Gurugram, India · Onsite",
    summary:
      "Production dashboards for logistics and finance — shipment lifecycle, P&L, B2B packaging, vendor settlements — wired to E-way bills, Exotel telephony, and marketplace data lakes.",
    bullets: [
      "Developed and maintained multiple production dashboards, with major ownership of the Shipment Panels (shipment lifecycle and AWB tracking), plus P&L and B2B Packaging dashboards.",
      "Integrated E-way bill generation and Exotel telephony APIs through REST endpoints — GST-compliant dispatch and in-app calls between vendors and warehouse teams.",
      "Migrated multiple Laravel dashboards to React.js and implemented authentication and role-based authorization across panels.",
      "Built the Settlement Dashboard for vendor billing, and Data Lake Dashboard endpoints for channel-wise order data from Flipkart, Amazon, Meesho, and Blinkit.",
      "Worked on the FlyHigh app for offline employees — attendance tracking and PJP-based visit analysis for sales teams and administrators.",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "MongoDB"],
    art: "route",
  },
  {
    index: "03",
    title: "Sweety — Blood Glucose Tracker",
    kind: "Project · Live",
    period: "Oct 2026 — Nov 2026",
    where: "Patient–doctor platform",
    summary:
      "Patients log up to four time-slot-bound glucose readings a day and read daily and monthly reports; doctors get read-only access to the patients assigned to them.",
    bullets: [
      "Daily/monthly reports with charts, JWT auth, and role-based authorization separating patient and doctor access.",
      "Cloud PostgreSQL on Supabase with a Redis report cache — versioned keys, invalidation on writes, graceful fallback.",
      "Containerized the full stack (Postgres, PostgREST, Redis, API, Nginx) with Docker Compose.",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "JWT"],
    links: [
      { label: "Live", href: "https://sweety-frontend.vercel.app/" },
      { label: "GitHub", href: "https://github.com/harshsinha4141/Sweety" },
    ],
    art: "pulse",
  },
  {
    index: "04",
    title: "Kafka — Order Event Pipeline",
    kind: "Project · Learning",
    period: "Oct 2026",
    where: "Event-driven architecture",
    summary:
      "A learning-focused order pipeline where producers and consumers publish, process, and consume order events across services.",
    bullets: [
      "Implemented Apache Kafka producers and consumers for order events across services.",
      "Worked through topics, consumer groups, message serialization, and asynchronous event processing.",
    ],
    stack: ["Apache Kafka", "Node.js", "JavaScript", "REST APIs"],
    art: "stream",
  },
  {
    index: "05",
    title: "PrepMate",
    kind: "Project · Live",
    period: "Jun 2025 — Oct 2025",
    where: "Peer-to-peer interview platform",
    summary:
      "A full interview simulation in one tab — video, screen-share, chat, and an in-browser code editor, with a coin-based reward economy.",
    bullets: [
      "Real-time mock interviews with role-based user management and a coin reward/penalty system.",
      "Jitsi video calls, WebRTC screen sharing, Socket.IO chat, in-browser code editor.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
    links: [
      { label: "Live", href: "https://prep-mate-gold.vercel.app/" },
      { label: "GitHub", href: "https://github.com/harshsinha4141/PrepMate" },
    ],
    art: "tiles",
  },
  {
    index: "06",
    title: "myShoppy",
    kind: "Project · Mobile",
    period: "Jul 2026 — Aug 2026",
    where: "Household e-commerce app",
    summary:
      "A mobile-first household products store built during Accenture's React Native training — catalogue to cart to order history.",
    bullets: [
      "Renders the product catalogue from JSON with search and filtering.",
      "Cart management, delivery details, order placement, and order history.",
    ],
    stack: ["React Native", "Expo", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/harshsinha4141/myShoppy" }],
    art: "grid",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "C++", "Java", "SQL", "HTML5", "CSS3"],
  Frameworks: ["React.js", "React Native", "Next.js", "Node.js", "Nest.js", "Express.js", "Tailwind", "Redux", "GSAP"],
  Data: ["MongoDB", "MySQL", "PostgreSQL (Supabase)", "Redis"],
  Ops: ["Git", "GitHub Actions", "Docker", "Postman"],
  Cloud: ["Vercel", "AWS", "Render", "Netlify"],
  Concepts: ["OOP", "DSA", "REST APIs", "Agile", "Responsive Design", "GST Compliance", "Service Architecture"],
};

export const marqueeStack = [
  "React", "Next.js", "NestJS", "TypeScript", "MySQL", "MongoDB",
  "Node.js", "Express", "React Native", "PostgreSQL", "Redis", "Kafka",
  "Tailwind", "GSAP", "Redux", "Socket.IO",
  "Docker", "AWS", "Vercel", "Postman", "GitHub Actions",
];

export const achievements = [
  {
    label: "Hackathon",
    title: "Byte Tourney",
    detail: "1st place — live demo + PPT round, 25+ teams",
    meta: "Winner",
  },
  {
    label: "Education",
    title: "Chitkara University, Punjab",
    detail: "B.E. Computer Science — CGPA 8.71",
    meta: "Oct 2022 — Jun 2026",
  },
  {
    label: "Practice",
    title: "LeetCode Streaks",
    detail: "50-day and 100-day problem-solving streaks",
    meta: "Ongoing",
  },
];
