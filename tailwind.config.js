/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#d4af37',
        muted: '#666666',
        'bg-main': '#ffffff',
        'bg-secondary': '#f8f8f8',
        'bg-tertiary': '#f0f0f0',
        border: '#e5e5e5',
      }
    },
  },
  plugins: [],
}
