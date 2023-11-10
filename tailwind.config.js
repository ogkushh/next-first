/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/about/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'img-port1': "url('/illustration.png')",
        'img-port2': "url('/websites.jpg')",
        'img-port3': "url('/apps.jpg')",
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'anim-img': 'move 3s infinite ease alternate',
      },
      colors: {
        'btn' : '#53c28b',
        'btn-blue': '#3b82f6',
        'bbb' : '#bbb'
      }
    },
  },
  plugins: [],
}
