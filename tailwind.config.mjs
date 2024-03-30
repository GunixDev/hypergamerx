/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FAFAFA',
      dark: '#0A0A0A',
      gray: '#171717',
      'light-gray': '#3F3F46',
      'dark-white': '#A3A3A3',
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
