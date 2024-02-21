import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        purple: {
            light: '#7429e7',
            regular: '#4e1c9b'
        },
        blue: {
            light: '#049fdc',
            regular: '#166ba1',
            dark: '#112c4a',
        },
        black: '#00000',
        white: '#fffff',
        gray: '#d9d9d9'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'slowdex': ['Slowdex'],
        'sugo': ['Sugo Pro']
      }
    },
  },
  plugins: [],
};
export default config;
