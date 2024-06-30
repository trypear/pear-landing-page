/** @type {import('tailwindcss').Config} */
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
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
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
          50: "#F1FEFB",
          100: "#E3FCF6",
          200: "#C3F9EC",
          300: "#9EF5E0",
          400: "#75F0D3",
          500: "#3CEAC1",
          600: "#17D4A8",
          700: "#14BD95",
          800: "#12A885",
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
        fontFamily: {
          inter: ["var(--font-inter)", "sans-serif"],
          "architects-daughter": [
            "var(--font-architects-daughter)",
            "sans-serif",
          ],
        },
        fontSize: {
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
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
