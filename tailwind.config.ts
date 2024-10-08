import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 2s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: {transform: 'translateX(0)'},
          to: { transform: 'translateX(-40%)'}
        }
      }
    }
  },
  plugins: [],
};
export default config;
