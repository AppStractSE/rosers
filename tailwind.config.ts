import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontSize: {
        xxxs: [".5rem", "1"],
        xxs: [".625rem", "1"],
      },
      colors: {
        gold: "#f5cea4",
        brass: "#af8f6e",
        charcoal: {
          50: "#707070",
          100: "#666666",
          200: "#5C5C5C",
          300: "#525252",
          400: "#474747",
          500: "#3D3D3D",
          600: "#333333",
          700: "#232323",
          800: "#1F1F1F",
          850: "#1A1A1A",
          900: "#141414",
          950: "#0A0A0A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
