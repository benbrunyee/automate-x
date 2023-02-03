/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#5603AD',
				'dark-body': 'rgb(23 23 23)',
				'light-body': 'rgb(241 245 249)'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
