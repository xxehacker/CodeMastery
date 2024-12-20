import starlightPlugin from '@astrojs/starlight-tailwind';
// import colors from 'tailwindcss/colors';

const accent = { 200: '#cbbdff', 600: '#6e00dc', 900: '#3a1673', 950: '#28154d' };
const gray = { 100: '#e7ffdc', 200: '#ceffb7', 300: '#9bd57e', 400: '#50a300', 500: '#2d6100', 700: '#1d4300', 800: '#122f00', 900: '#091e00' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				accent , gray
			},
			fontFamily: {
				sans: ['"Atkinson Hyperlegible"'],
				mono: ['"IBM Plex Mono"'],
			}
		},
	},
	plugins: [starlightPlugin()],
}
