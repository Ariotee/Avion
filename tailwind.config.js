/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			ibm: 'IBM Plex Mono',
			satoshi: 'Satoshi',
		},
		extend: {
			colors: {
				'dark-hard': '#22202e',
				purple: '#726e8d',
			},
		},
	},
	plugins: [],
}
