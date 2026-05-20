export const profile = {
  name: "Harsh Sinha",
  role: "Full-Stack Engineer",
  city: "Gurugram, IN",
  timezone: "GMT+5:30",
  status: "Shipping at Mylo",
  email: "harshsinha9122@gmail.com",
  phone: "+91 9122 357 161",
  github: "github.com/harshsinha4141",
  githubUrl: "https://github.com/harshsinha4141",
  linkedin: "linkedin.com/in/harsh-sinha-542140251",
  linkedinUrl: "https://www.linkedin.com/in/harsh-sinha-542140251",
  leetcode: "leetcode.com/harshsinha4141000",
  leetcodeUrl: "https://leetcode.com/harshsinha4141000",
};

export const projects = [
  {
    index: "01",
    title: "Mylo — Raise Happiness",
    kind: "Production · Internship",
    period: "Dec 2025 — Present",
    where: "Gurugram, India",
    summary:
      "Full-stack ownership across logistics dashboards — trucking, gate pass, B2B, settlements, and inventory — wired to telephony, GST, and FBA/FBF data lakes.",
    bullets: [
      "Engineered 10+ production features across Trucking Panel, Gate Pass, and B2B dashboards; resolved critical bugs in shipment lifecycle and AWB tracking.",
      "Integrated E-way bill generation and Exotel telephony via NestJS REST endpoints — GST-compliant dispatch and real-time in-app vendor calls.",
      "Refactored a monolithic API service into panel-based NestJS modules, eliminating duplicate base URLs and enforcing clean separation across the React frontend.",
      "Built CCC Settlement Reports (Trade Vendor, AP Non-Trade, PO GRN); fixed Sale and Sale Return Reports — corrected Taxable Value, HSN codes, added GST-compliant Delivery Status via complex SQL.",
      "Developed a DOC and DOH Inventory Dashboard with FBA and FBF data lake integration — channel-SKU-level Days-of-Holding visibility for B2B purchase-order prediction.",
    ],
    stack: ["React", "Next.js", "NestJS", "Node.js", "TypeScript", "MySQL", "MongoDB"],
  },
  {
    index: "02",
    title: "PrepMate",
    kind: "Side Project · Live",
    period: "Jun 2025 — Oct 2025",
    where: "Peer-to-peer interview platform",
    summary:
      "A full interview simulation in one tab — video, screen-share, chat, and an in-browser code editor, with a coin-based reward economy.",
    bullets: [
      "Real-time mock interviews with role-based user management and a coin reward/penalty system.",
      "Jitsi video calls, WebRTC screen sharing, Socket.IO chat, in-browser code editor.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
  },
  {
    index: "03",
    title: "EazyKart",
    kind: "Side Project",
    period: "Feb 2025 — May 2025",
    where: "E-commerce platform",
    summary:
      "Role-based commerce — products, cart, wishlist, orders, and an admin panel, behind JWT-authenticated REST APIs and a Sequelize MySQL store.",
    bullets: [
      "Product browsing, cart, wishlist, and order management with a role-based admin panel.",
      "Secure JWT-authenticated REST APIs with Sequelize ORM and MySQL.",
    ],
    stack: ["React (TS)", "Express", "Sequelize", "MySQL"],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "C++", "Java", "SQL", "HTML5", "CSS3"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Nest.js", "Express.js", "Tailwind", "Redux", "GSAP"],
  Data: ["MongoDB", "MySQL"],
  Ops: ["Git", "GitHub Actions", "Docker", "Postman"],
  Cloud: ["Vercel", "AWS", "Render", "Netlify"],
  Concepts: ["OOP", "DSA", "REST APIs", "Agile", "Responsive Design", "GST Compliance", "Service Architecture"],
};

export const marqueeStack = [
  "React", "Next.js", "NestJS", "TypeScript", "MySQL", "MongoDB",
  "Node.js", "Express", "Tailwind", "GSAP", "Redux", "Socket.IO",
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
    detail: "B.E. Computer Science — CGPA 8.60",
    meta: "Oct 2022 — Jun 2026",
  },
  {
    label: "Practice",
    title: "LeetCode Streaks",
    detail: "50-day and 100-day problem-solving streaks",
    meta: "Ongoing",
  },
];
