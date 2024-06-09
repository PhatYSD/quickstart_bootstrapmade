/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "4c": [
          '1px 1px 3px rgba(0, 0, 0, 0.05)',
          '-1px -1px 3px rgba(0, 0, 0, 0.05)'
        ]
      }
    },
  },
  plugins: [],
}