/** @format */

import { getColorModeInitScriptElement } from '@xstyled/styled-components'

const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents([getColorModeInitScriptElement()])
}

export { onRenderBody }
