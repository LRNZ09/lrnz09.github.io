/** @format */

import { prefix } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icon = ({ name, ...props }) => (
	<FontAwesomeIcon {...props} icon={[prefix, name]} />
)

export default Icon
