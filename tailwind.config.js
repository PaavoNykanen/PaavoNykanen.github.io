/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      fontSize: {
        'base': '16px', // Customize base font size
        'lg': '26px',   // Customize large font size
        'xl': '42px',   // Customize extra-large font size
        '2xl': '68px',  // Customize extra-extra-large font size
        '3xl': '110px', // Customize extra-extra-extra-large font size
      },
    },
  },
  plugins: [],
}

