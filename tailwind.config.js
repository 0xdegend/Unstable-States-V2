module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        // Add USDBonk brand colors here
        primary: '#yourPrimaryColor',
        secondary: '#yourSecondaryColor',
        accent: '#yourAccentColor',
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
}