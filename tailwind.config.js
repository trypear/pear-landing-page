/** @type {import('tailwindcss').Config} */

import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        gray: {
          DEFAULT: "hsla(var(--gray), <alpha-value>)",
          foreground: "hsla(var(--gray-foreground), <alpha-value>)",
          50: "hsla(var(--gray-50), <alpha-value>)",
          100: "hsla(var(--gray-100), <alpha-value>)",
          200: "hsla(var(--gray-200), <alpha-value>)",
          300: "hsla(var(--gray-300), <alpha-value>)",
          400: "hsla(var(--gray-400), <alpha-value>)",
          500: "hsla(var(--gray-500), <alpha-value>)",
          600: "hsla(var(--gray-600), <alpha-value>)",
          700: "hsla(var(--gray-700), <alpha-value>)",
          800: "hsla(var(--gray-800), <alpha-value>)",
          900: "hsla(var(--gray-900), <alpha-value>)",
        },
        purple: {
          100: "#F4F4FF",
          200: "#E2E1FF",
          300: "#CBCCFF",
          400: "#ABABFF",
          500: "#8D8DFF",
          600: "#5D5DFF",
          700: "#4B4ACF",
          800: "#38379C",
          900: "#262668",
        },
        primary: {
          DEFAULT: "hsla(var(--primary), <alpha-value>)",
          foreground: "hsla(var(--primary-foreground), <alpha-value>)",
          50: "hsla(var(--primary-50), <alpha-value>)",
          100: "hsla(var(--primary-100), <alpha-value>)",
          200: "hsla(var(--primary-200), <alpha-value>)",
          300: "hsla(var(--primary-300), <alpha-value>)",
          400: "hsla(var(--primary-400), <alpha-value>)",
          500: "hsla(var(--primary-500), <alpha-value>)",
          600: "hsla(var(--primary-600), <alpha-value>)",
          700: "hsla(var(--primary-700), <alpha-value>)",
          800: "hsla(var(--primary-800), <alpha-value>)",
          900: "hsla(var(--primary-900), <alpha-value>)",
          1000: "hsla(var(--primary-1000), <alpha-value>)",
        },
        secondary: {
          300: "#878787",
          400: "#616161",
          500: "#383838",
          600: "#363636",
          700: "#2E2E2E",
          750: "#292929",
          800: "#000000",
          main: "#000000",
        },
        tertiary: {
          50: "#F2F2F2",
          100: "#E8E8E8",
          200: "#CCCCCC",
          300: "#ABABAB",
        },
        blue: {
          50: "#F6FCFD",
          100: "#F2FAFD",
          200: "#E5F5FA",
          300: "#D4EEF7",
          400: "#C7E8F4",
        },
        beige: {
          100: "#FFFDFA",
          200: "#FEFCFS", // This is the main color according to the image
          300: "#FEFDEC",
          400: "#FDF7E7",
          500: "#FDF6E3",
          600: "#FADE96",
        },
        white: {
          50: "#FCFDFD",
          100: "#F9FBFB",
          200: "#FOF4F5",
          300: "#F3FBFB",
          400: "#EDEGER",
          500: "#F8DE96",
          main: "#FFFFFF",
        },
        spacing: {
          "9/16": "56.25%",
          "3/4": "75%",
          "1/1": "100%",
        },
        fontSize: {
          "2xs": "0.625rem",
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "2rem",
          "4xl": "2.5rem",
          "5xl": "3.25rem",
          "6xl": "4rem",
        },
        inset: {
          full: "100%",
        },
        letterSpacing: {
          tighter: "-0.02em",
          tight: "-0.01em",
          normal: "0",
          wide: "0.01em",
          wider: "0.02em",
          widest: "0.4em",
        },
        minWidth: {
          10: "2.5rem",
        },
        scale: {
          98: ".98",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadein-opacity": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadein-opacity": "fadein-opacity 0.6s ease-in-out",
        spin: "spin .5s linear infinite",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-light": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none"><circle fill="rgb(0 0 0 / 0.1)" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
          "bg-dot-dark": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none"><circle fill="rgb(255 255 255 / 0.2)" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};
// Function to add CSS variables for colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
