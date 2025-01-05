/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'sm': '12px',   // Customize small font size
        'base': '16px', // Customize base font size
        'md': '20px',   // Customize medium font size
        'lg': '26px',   // Customize large font size
        'xl': '42px',   // Customize extra-large font size
        '2xl': '68px',  // Customize extra-extra-large font size
        '3xl': '110px', // Customize extra-extra-extra-large font size
        '4xl': '178px', // Customize extra-extra-extra-large font size
      },
    },
  },
  plugins: [],
}

