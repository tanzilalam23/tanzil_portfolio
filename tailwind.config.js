/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // ✅ Include root HTML file (for Vite)
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Include all files inside src with these extensions
  ],
  darkMode: 'class',        // ✅ Enable dark mode toggle
  theme: {
    extend: {},
  },
  plugins: [],
}