/** @format */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
	ColorModeProvider,
	ThemeProvider,
	createGlobalStyle,
} from '@xstyled/styled-components'
import Color from 'color'
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
		background: 'white',
		text: 'black',
		link: '#4392F1',
		linkHover: Color('#4392F1')
			.lighten(0.2)
			.toString(),
		modes: {
			dark: {
				background: '#121212',
				text: 'white',
			},
		},
	},
	// defaultColorModeName: 'dark',
	initialColorModeName: 'light',
}

library.add(fab)

export const GlobalStyle = createGlobalStyle`
  html, body {
	background-color: background;
	color: text;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin: 0;
	padding: 0;
	transition: background-color 0.3s ease;
	height: 100%;
  }
  h1, h2, h3 {
	  text-transform: uppercase;
  }
  a {
	color: link;
  }
  a:hover {
	color: linkHover;
  }
`

const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>
		<ColorModeProvider>
			<GlobalStyle />

			{element}
		</ColorModeProvider>
	</ThemeProvider>
)

export { wrapRootElement }
