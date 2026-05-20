import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        ember: "rgb(var(--ember) / <alpha-value>)",
        moss: "rgb(var(--moss) / <alpha-value>)",
        bone: "rgb(var(--bone) / <alpha-value>)",
        smoke: "rgb(var(--smoke) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
  },
  plugins: [],
} satisfies Config;
