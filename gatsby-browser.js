/** @format */

import { GlobalStyle, ThemeProvider } from '@react95/core'
import React from 'react'

// eslint-disable-next-line react/prop-types
const wrapRootElement = ({ element }) => (
	<ThemeProvider>
		<GlobalStyle />

		{element}
	</ThemeProvider>
)

export { wrapRootElement }
