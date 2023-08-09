/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Customizing my own breakpoints
      'sm1': '320px',
      'sm2': '370px',
      'sm3': '410px',
      'md1': '550px',
      'md': '820px',
      'lg': '1200px',
    },
    extend: {},
  },
  plugins: [],
}

