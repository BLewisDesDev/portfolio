/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"b-white": "#ffffff",
				"b-green": "#8E9C82",
				"b-red": "#C72C3D",
				"b-blue": "#55637C",
				"b-yellow": "#E8B24E",
			},
		},
	},
	plugins: [],
};
