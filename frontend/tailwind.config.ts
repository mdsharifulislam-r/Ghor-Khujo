import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary_color:"#FF5A3C",
       dark_color:"#F2F6F7",
       text_color:"#071c1f"
      },
    },
  },
  plugins: [],
} satisfies Config;
