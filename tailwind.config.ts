/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				'xs': '400px',
				'sm': '576px',
				'md': '769px',
				'lg': '950px',
				'xl': '1200px',
				'2xl': '1440px',
			},
			colors: {
				mainBgColor: '#F4F4F5',
				danger: '#ff0000',
				warning: '#ff8800',
				success: '#4cb050',
				primaryColor: "#7C3AED",
				secondaryColor: "var(--secondaryColor)",
			},
			fontFamily: {
				vazirmatn: ["Vazirmatn", "Roboto", "Helvetica", "Arial", "sans-serif"],
			},
			spacing: {
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.666667%',
				'2/6': '33.333333%',
				'3/6': '50%',
				'4/6': '66.666667%',
				'5/6': '83.333333%',
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
				'100': '100%',
				'130p': '130%',
				'150p': '150%',
				'72': '18rem',
				'80': '20rem',

			},
			minWidth: (theme) => ({
				none: 'none',
				...theme('spacing'),
			}),
			maxWidth: {
				'screen-sm': '97%',
				'screen-md': '730px',
				'screen-lg': '870px',
				'screen-xl': '1170px',
				'screen-2xl': '1400px',
			},
			minHeight: (theme) => ({
				none: 'none',
				...theme('spacing'),
			}),
			maxHeight: (theme) => ({
				none: 'none',
				...theme('spacing'),
			}),
			flex: {
				'base': '0 0 auto'
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'999': '999',
				'9999': '9999',
				'99999': '99999',
			}
		},
	},
	plugins: [],
}
