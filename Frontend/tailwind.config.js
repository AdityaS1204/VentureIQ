/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #3f5efb, #46fbfc)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}

// #3f5efb, #46fbfc default blue gradient