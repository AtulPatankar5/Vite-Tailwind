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
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-delay': 'bounce 1s infinite',
        'progress': 'progress 1.5s ease-in-out infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        progress: {
          '0%': {
            width: '0%',
          },
          '50%': {
            width: '70%',
          },
          '100%': {
            width: '100%',
          },
        },
        skeleton: {
          '0%': {
            backgroundColor: 'rgb(229, 231, 235)',
          },
          '50%': {
            backgroundColor: 'rgb(209, 213, 219)',
          },
          '100%': {
            backgroundColor: 'rgb(229, 231, 235)',
          },
        },
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}