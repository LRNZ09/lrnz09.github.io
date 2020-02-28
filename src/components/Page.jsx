/** @format */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from '@xstyled/styled-components'

const Page = ({ children, title = 'Lorenzo Pieri' }) => (
	<>
		<Helmet>
			<title>{title}</title>
		</Helmet>

		<Box row justifyContent="center">
			<Box col={{ xs: 1, md: 2 / 3 }} p={24}>
				{children}
			</Box>
		</Box>
	</>
)

export default Page
