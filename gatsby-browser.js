/** @format */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components'
import React from 'react'

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

library.add(fab)

const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>
		<ColorModeProvider>{element}</ColorModeProvider>
	</ThemeProvider>
)

export { wrapRootElement }
