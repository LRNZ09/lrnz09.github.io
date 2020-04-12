/** @format */

import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Page: React.FC = ({ children, title = 'Lorenzo Pieri' }) => (
	<>
		<Helmet>
			<title>{title}</title>
		</Helmet>

		{children}
	</>
)

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
}

export default Page
