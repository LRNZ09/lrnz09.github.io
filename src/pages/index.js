import React from 'react'
import { Box } from '@xstyled/styled-components'
import { ThemeProvider } from 'styled-components'

import Text from '../components/Text'
import theme from '../utils/theme'

const Home = () => (
    <Box row justifyContent="center">
        <Box col={{ xs: 1, md: 2 / 3 }} p={24}>
            <Text as="h1">Hello</Text>

            <Box row m={-24}>
                <Box col={{ xs: 1, md: 1 / 2 }} p={24} m={0}>
                    <Text as="h2">Bio</Text>

                    <Text>
                        Nice to meet you, I'm{' '}
                        <Text as="strong">Lorenzo Pieri</Text>.
                    </Text>

                    <Text as="h4">Work</Text>
                    <Text>
                        I'm currently working as a developer for{' '}
                        <Text as="a" href="//tate.it" target="_blank">
                            Tate
                        </Text>
                        .
                    </Text>
                </Box>

                <Box col={{ xs: 1, md: 1 / 2 }} p={24} m={0}>
                    <Text as="h2">Contact me</Text>
                    <Text>
                        Reasons to get in touch: discuss about crazy ideas, just
                        meet, asking for advice.
                    </Text>
                    <Text as="h4">Mail</Text>
                    <Text as="a" href="mailto:hello@lorenzopieri.dev">
                        hello@lorenzopieri.dev
                    </Text>
                    <Text as="h4">Social</Text>
                    <Text as="a" href="//dribbble.com/LRNZ09" target="_blank">
                        Dribbble
                    </Text>{' '}
                    <Text
                        as="a"
                        href="//linkedin.com/in/lrnz09"
                        target="_blank"
                    >
                        Linkedin
                    </Text>{' '}
                    <Text as="a" href="//medium.com/@LRNZ09" target="_blank">
                        Medium
                    </Text>{' '}
                    <Text as="a" href="//twitter.com/LRNZ09" target="_blank">
                        Twitter
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
)

const Index = () => (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
)

export default Index
