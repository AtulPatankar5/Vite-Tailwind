/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Orange Theme
        orange: {
          primary: '#ff6600',
          secondary: '#ff6600',
          accent: '#ff6600',
          text: '#1a1a1a',
          background: '#ffffff',
        },
        // Blue Theme
        blue: {
          primary: '#3b82f6',
          secondary: '#60a5fa',
          accent: '#2563eb',
          text: '#1a1a1a',
          background: '#ffffff',
        },
        // Dark Theme
        dark: {
          primary: '#374151',
          secondary: '#1f2937',
          accent: '#4b5563',
          text: '#ffffff',
          background: '#111827',
        },
      },
    },
  },
  plugins: [],
}