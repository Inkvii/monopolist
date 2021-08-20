module.exports = {
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
		'./public/**/*.html',
	],
	darkMode: false, // or 'media' or 'class'
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
