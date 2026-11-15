import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			lato: ['Lato', ...defaultTheme.fontFamily.sans],
			assistant: ['Assistant Variable', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [],
}
