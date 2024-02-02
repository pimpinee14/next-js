import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontSize: {
        xxs: '0.7rem',
        sm: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'demo-brown': '#695A5B',
        'demo-violet': '#D4D2F2',
        'demo-pink': '#E5D0E2',
        'demo-green': '#ADD495',
        'demo-cream': '#FCEEE2',
      },
    },
    container: {
      screens: {
        xl: '1125px',
      },
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '15px',
        xl: '15px',
        '2xl': '15px',
      },
    },
    fontFamily: {
      prompt: ['Prompt', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
