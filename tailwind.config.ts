import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
      xxl: "1920px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXL: { max: "1279.98px" },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.875rem",
          xl: "1.875rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        snakeBg: `url(/images/snakeHero.png)`,
        backdrop: `linear-gradient(rgba(41, 41, 41, 0.40),rgba(41, 41, 41, 0.40))`,
        "radial-gray":
          "radial-gradient(circle farthest-side at center, hsl(0, 0%, 30%) 0%, hsl(0, 0%, 14%) 100%)",
      },
      boxShadow: {
        shadow: "0px 10px 24px -15px rgba(0, 0, 0, 0.5)",
        input: "0px 5px 15px -12px rgba(0, 0, 0, 0.5)",
        "custom-card": "0px 0px 10px 0px #d2d7e0",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)"],
        audi: ["Audiowide", "sans-serif"],
        ephesis: ["Ephesis", "cursive"],
        arvo: ["Arvo", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        agu: ["Agu Display", "serif"],
      },
      colors: {
        mainColor: "#707090",
        unactive: "#b7bec7",
        mainBcg: "#888fdc",
        sectionBcg: "#cad9f0",
        warning: "#f87171",
        "dark-gray": "hsl(0, 0%, 14%)",
        "darker-gray": "hsl(0, 0%, 30%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
