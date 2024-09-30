/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['"Red Hat Text"', 'sans-serif'],
      },
      colors: {
        'custom-red': '#C73B0F',
        'custom-rose-900': '#260F08',
        'custom-rose-500': '#87635A',
        'custom-rose-400': '#AD8A85',
        'custom-rose-300': '#CAAFA7',
        'custom-rose-100': '#F5EEEC',
        'custom-rose-50': '#FCF8F6'
      },
      borderRadius: {
        '8px': '8px',
        '12px': '12px',
        '999': '999px',
      },
      gap: {
        '24': '24px',
      }
    },
  },
  plugins: [],
}

