/** @format */

import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

const NotFoundPage = (): React.FC => {
	useEffect(() => {
		navigate('/', { replace: true })
	}, [])

	return null
}

export default NotFoundPage
