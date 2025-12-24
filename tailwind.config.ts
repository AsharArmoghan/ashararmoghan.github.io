import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { default: "20px" },
      screens: {
        sm: "375px",
        md: "760px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "760px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(ellipse 50% 50px, amber 10%, #1e90ff 50%, slate)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
        ninja: ["NinjaKage", "sans-serif"],
        ninjaRough: ["NinjaKageRough", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          black: "oklch(0% 0 360)",
          white: "oklch(100% 0 360)",
          light_card: "oklch(43.74% 0.013 285.805)",
          textLight: "oklch(75.07% 0.0716 75.164)",
          textsecond: "oklch(0.279 0.041 260.031)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          planetDark: "oklch(37.6% 0.1582 260.58)",
          planetLight: "oklch(63.63% 0.1968 256.7)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [typography],
};
export default config;
