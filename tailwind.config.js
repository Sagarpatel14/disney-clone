/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'media1140': '1140px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}