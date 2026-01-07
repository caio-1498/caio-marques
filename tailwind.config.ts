import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyber: {
          dark: "#050505",
          primary: "#00f0ff", 
          secondary: "#7000ff", 
          accent: "#0aff00", 
          muted: "#121212",
          border: "#2a2a2a",
          text: "#e0e0e0"
        }
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      }
    },
  },
  plugins: [],
};
export default config;
