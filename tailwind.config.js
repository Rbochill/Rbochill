/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./client/**/*.html'],
	theme: {
		extend: {},
		colors: {
			black: '#000000',
			secondary: '#bd76ff',
			white: '#ffffff',
			primary: '#5f0080',
			content: '#333333',
			'gray/50': '#f9f9f9',
			'gray/100': '#e1e1e1',
			'gray/200': '#c4c4c4',
			'gray/300': '#a6a6a6',
			'gray/400': '#898989',
			'gray/500': '#6b6b6b',
			'gray/600': '#565656',
			'gray/700': '#404040',
			'gray/800': '#2b2b2b',
			'gray/900': '#151515',
			'accent/yellow': '#fa622f',
			'blue/100': '#cce0ff',
			'blue/200': '#99c2ff',
			'blue/300': '#66a3ff',
			'blue/400': '#3385ff',
			'blue/500': '#0066ff',
			'blue/600': '#0052cc',
			'blue/700': '#003d99',
			'blue/800': '#002966',
			'blue/900': '#001433',
			'Info/Error': '#f03f40',
		},
		fontSize: {
			sm: '0.7501875162124634rem', // 12px
			base: '1rem', // 16px
			lg: '1.3329999446868896rem', // 21px
			xl: '1.7768750190734863rem', // 28px
			'2xl': '2.3685624599456787rem', // 37px
			'3xl': '3.1573123931884766rem', // 50px
		},
		fontFamily: {
			pretendard: 'Pretendard',
		},
		boxShadow: {
			text: 'inset 1px 1px 0px 0px rgba(0,0,0,1)',
			'Above/High': '0px -16px 48px 0px rgba(0,0,0,0.3)',
			'Above/Medium': '0px -8px 36px 0px rgba(0,0,0,0.2)',
			'Above/Low': '0px -4px 24px 0px rgba(0,0,0,0.1)',
			'Below/High': '0px 16px 48px 0px rgba(0,0,0,0.3)',
			'Below/Medium': '0px 8px 36px 0px rgba(0,0,0,0.2)',
			'Below/Low': '0px 4px 24px 0px rgba(0,0,0,0.1)',
		},
		borderRadius: {
			none: '0',
			xs: '0.0625rem',
			sm: '0.25rem',
			default: '0.3125rem',
			lg: '0.625rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.0625rem',
		},
	},
	plugins: [],
};
