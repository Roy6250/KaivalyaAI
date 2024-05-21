/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
       animation: {
        'spin-slow': 'spin 0.75s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
       maxHeight: {
        '500': '500px',
        '600': '600px',
      },
    },
  },
  plugins: [
        // require('tailwindcss-filters'),

  ],
}
