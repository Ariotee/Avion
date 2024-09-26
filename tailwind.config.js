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
				'light-purple': 'rgba(249, 249, 249, 0.15)',
				'dark-primary': '#2A254B',
				'dark-hard': '#22202e',
				purple: '#726e8d',
			},
		},
	},
	plugins: [],
}
