import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg": "var(--gradient-bg)",
        "gradient-br": "var(--gradient-br)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        clashGrotesk: [
          "var(--font-clash-grotesk)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      rotate: {
        "124": "124deg",
        "112": "112deg",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 0%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shining: {
          "0%": { width: "0px" },
          "50%": { width: "40px" },
          "100%": { width: "0px" },
        },
        tail: {
          "0%": { width: "0px" },
          "30%": { width: "100px" },
          "100%": { width: "0px" },
        },
        falling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(800px)" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
        comet:
          "tail 3s ease-in-out infinite, falling 3s ease-in-out infinite, shining 3s ease-in-out infinite",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1760px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
