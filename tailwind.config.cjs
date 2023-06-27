/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'background': '#0c0c0c',
        'altbackground': '#1a1a1a',
        'foreground': '#ffffff',
        'altforeground': '#CECECE',
        'primary': '#e5202b',      
        'altprimary': '#B71A22',
      },
    },
	},
	plugins: [],
}
