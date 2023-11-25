/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-20': '#F8F4EB',
				'gray-50': '#EFE6E6',
				'gray-100': '#DFCCCC',
				'gray-500': '##323133',
				'primary-100': '#FFE1E0',
				'primary-300': '#FFA6A3',
				'primary-500': '#FF6B66',
				'secondary-400': '#FFCD5B',
				'secondary-500': '#FFC132',
			},
			backgroundImage: (theme) => ({
				'gradient-yellowred':
					'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
				'mobile-home': "url('./assets/HomePageGraphic.png')",
			}),
			content: {
				krasnayatext: "url('./assets/KrasnayaText.png')",
			},
			fontFamily: {
				dmsans: ['DM Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			screens: {
				xs: '375px',
				sm: '768px',
				md: '1060px',
			},
		},
	},
	plugins: [],
};
