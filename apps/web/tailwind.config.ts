import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "../../node_modules/@verysimple/react/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(.1, .1)", opacity: "1" },
          "100%": { transform: "scale(2.5, 2.5)", opacity: "0" },
        },
        twinkle: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        ripple: "ripple 5s linear forwards",
        twinkle: "twinkle 5s infinite",
        typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      colors: {
        primary: colors.purple,
        primaryoffset: colors.white,
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities, theme }: any) {
      addBase({
        ":root": {
          "--my-bg-primary": theme("colors.white"),
          "--my-bg-secondary": theme("colors.zinc.100"),
          "--my-border": theme("colors.zinc.700"),
          "--my-border-disabled": theme("colors.zinc.600"),
        },
        ":root.dark": {
          "--my-bg-primary": theme("colors.black"),
          "--my-bg-secondary": theme("colors.zinc.900"),
          "--my-border": theme("colors.zinc.700"),
          "--my-border-disabled": theme("colors.zinc.600"),
        },
      });

      addUtilities({
        ".my-bg-primary": {
          backgroundColor: "var(--my-bg-primary)",
        },
        ".my-bg-secondary": {
          backgroundColor: "var(--my-bg-secondary)",
        },
      });
    },
  ],
};
export default config;
