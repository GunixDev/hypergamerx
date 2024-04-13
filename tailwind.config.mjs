/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FAFAFA',
      black: '#0A0A0A',
      gray: '#171717',
      'gray-light': '#9CA3AF',
      'dark-white': '#A3A3A3',
      green: '#22C55E',
      'green-dark': '#15803D',
      red: '#EF4444',
      'red-dark': '#B91C1C',
      yellow: '#EAB308',
      blue: '#3B82F6',
      'blue-lighter': '#93C5FD',
      'blue-darker': '#1E40AF',
      purple: '#A855F7',
      pink: '#EC4899',
      'pink-darker': '#9D174D',
      'teal-darker': '#115E59',
      'orange-lighter': '#FDBA74',
    },
    fontFamily: {
      'Segoe-UI': ['Segoe-UI', 'sans-serif', 'Arial'],
      'Segoe-UI-Bold': ['Segoe-UI-Bold', 'sans-serif', 'Arial'],
      ReadexPro: ['ReadexPro', 'sans-serif', 'Arial'],
    },
    extend: {
      screens: {
        ls: '10px',
        lgi: '400px',
        lss: '560px',
        lga: '700px',
      },
      gridTemplateRows: {
        18: 'repeat(18, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
