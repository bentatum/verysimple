import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: 'class',
  mode: 'aot',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    process.env.VERCEL === 'true' ? './node_modules/@verysimple/react/dist/**/*.{js,ts,jsx,tsx,mdx}' : '../../node_modules/@verysimple/react/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: colors.zinc[800],
        gray: colors.zinc,
        purple: colors.indigo,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
    },
  },
};
export default config;
