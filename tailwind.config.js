/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pfp/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      colors: {
        // Add USDBonk brand colors here
        primary: "#062938",
        secondary: "#072b0e",
        accent: "#4bbf67",
      },
      // Add any additional theme customizations here
    },
  },
  variants: {
    extend: {
      // Add any variants you want to customize
    },
  },
  plugins: [],
};
