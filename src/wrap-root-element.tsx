/** @format */

import { GlobalStyle, ThemeProvider } from '@react95/core'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const CustomGlobalStyle = createGlobalStyle`
	body {
		user-select: none;

		a {
			color: ${(props) => props.theme.colors.black};
		}
		ul a {
			text-decoration: none;
		}
	}
`

// eslint-disable-next-line react/prop-types
const wrapRootElement: React.FC = ({ element }) => (
	<ThemeProvider>
		<GlobalStyle />
		<CustomGlobalStyle />

		{element}
	</ThemeProvider>
)

export { wrapRootElement }
