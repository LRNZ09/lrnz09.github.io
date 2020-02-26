/** @format */

import { Box } from '@xstyled/styled-components'
import { Linkedin, Medium, Twitter } from 'grommet-icons'
import React from 'react'

import Page from '../components/Page'
import Text from '../components/Text'
import Anchor from '../components/Anchor'

const HomePage = () => (
	<Page>
		<Text forwardedAs="h1">Hello</Text>

		<Box row m={-24}>
			<Box col={{ xs: 1, md: 1 / 2 }} p={24} m={0}>
				<Text forwardedAs="h2">Bio</Text>

				<Text>
					Nice to meet you, I'm{' '}
					<Text forwardedAs="strong">Lorenzo Pieri</Text>.
				</Text>

				<Text forwardedAs="h4">Work</Text>
				<Text>
					I'm currently working as a developer for{' '}
					<Text forwardedAs="a" href="//tate.it" target="_blank">
						Tate
					</Text>
					.
				</Text>
			</Box>

			<Box col={{ xs: 1, md: 1 / 2 }} p={24} m={0}>
				<Text forwardedAs="h2">Contact me</Text>
				<Text>
					Reasons to get in touch: discuss about crazy ideas, just
					meet, asking for advice.
				</Text>

				<Box row>
					<Box mr={32}>
						<Text forwardedAs="h4">Mail</Text>

						<Text
							forwardedAs="a"
							href="mailto:hello@lorenzopieri.dev"
						>
							hello@lorenzopieri.dev
						</Text>
					</Box>

					<Box>
						<Text forwardedAs="h4">Social</Text>

						<Anchor
							href="//linkedin.com/in/lrnz09"
							mr={4}
							target="_blank"
						>
							<Linkedin />
						</Anchor>
						<Anchor
							href="//medium.com/@LRNZ09"
							mr={4}
							target="_blank"
						>
							<Medium />
						</Anchor>
						<Anchor
							href="//twitter.com/LRNZ09"
							mr={4}
							target="_blank"
						>
							<Twitter />
						</Anchor>
					</Box>
				</Box>
			</Box>
		</Box>
	</Page>
)

export default HomePage
