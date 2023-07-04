/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
        "light-gray": "hsl(212, 45%, 89%)",
      },
      fontFamily: {
        outfit: [`var(--font-outfit)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
