/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        purple: {
          600: "var(--purple600)",
          700: "var(--purple700)",
          800: "var(--purple00)",
          300: "var(--purple300)",
          50: "var(--purple50)",
        },
        grey: {
          700: "var(--grey700)",
          500: "var(--grey500)",
          600: "var(--grey600)",
          300: "var(--grey300)",
          400: "var(--grey400)",
          200: "var(--grey200)",
          100: "var(--grey100)",
          800: "var(--grey800)",
          900: "var(--grey900)",
          50: "var(--grey50)",
        },
        white: {
          100: "var(--white100)",
        },

        green: {
          50: "var(--green50)",
        },
      },
    },
  },
  plugins: [],
};
