import React from 'react'
import { Box } from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'

import theme from '../utils/theme'

const Page = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Box row justifyContent="center">
            <Box col={{ xs: 1, md: 2 / 3 }} p={24}>
                {children}
            </Box>
        </Box>
    </ThemeProvider>
)

export default Page
