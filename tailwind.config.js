/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#18a1ad',		
			secondary: '#779E43',
			tertiary: '#ffee65',
			dark: '#00090A',
			// dark: '#000F11',
			light: '#F2FCFE',
			// light: '#FCFCFC',
		},
		
		
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		// other plugins
	  ],
};
