/** @format */

const theme = {
	breakpoints: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#07c',
		modes: {
			dark: {
				text: '#fff',
				background: '#000',
				primary: '#0cf',
			},
		},
	},
	defaultColorModeName: 'dark',
	initialColorModeName: 'light',
}

export { theme }
