/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primaryBlue':'#228be6',
        'secondaryBlue': '#D7EAFB',
        'primaryOrange': '#e67e22',
        'ternaryBlue': '#0A3357'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}

