import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "480px",
      lg: "1140px",
    },
    colors: {
      purple: {
        light: "#7429e7",
        regular: "#4e1c9b",
      },
      blue: {
        light: "#049fdc",
        regular: "#166ba1",
        dark: "#112c4a",
      },
      black: "#000000",
      white: "#ffffff",
      gray: "#d9d9d9",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nav-hover": "url('/img/header/bg-nav-hover.svg')",
        "hero-pattern": "url('/img/hero/bg-hero.png')",
        "events-social": "url('/img/events-social/bg-events-social.png')",
      },
      fontFamily: {
        slowdex: ["Slowdex"],
        sugo: ["Sugo Pro"],
        edo: ["Edo SZ"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
export default config;
