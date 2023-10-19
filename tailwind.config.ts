import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d13530",
        secondary: "#ffffff",
        border: "#d9d9d9",
        pBlue: "rgb(29, 86, 217)",
        pOrange: "rgb(228, 118, 13)",
      },
    },
    gridTemplateColumns: { fluid: "repeat(auto-fit, minmax(16rem, 1fr))" },
  },
  plugins: [],
};
export default config;
