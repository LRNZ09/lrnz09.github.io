/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@xstyled/styled-components'
import React from 'react'

import Anchor from '../components/Anchor'
import Page from '../components/Page'
import Text from '../components/Text'

const HomePage = () => (
	<Page>
		<Text forwardedAs="h1">Hello</Text>

		<Box row m={-16}>
			<Box col={{ xs: 1, md: 1 / 2 }} p={16} m={0}>
				<Text forwardedAs="h2">Bio</Text>

				<Text>
					Nice to meet you, I'm{' '}
					<Text forwardedAs="strong">Lorenzo Pieri</Text>.
				</Text>

				<Text forwardedAs="h4">Work</Text>
				<Text>
					I'm currently working as a software developer for{' '}
					<Text
						forwardedAs="a"
						href="//tate.it"
						rel="noopener"
						target="_blank"
					>
						Tate
					</Text>
					.
				</Text>
			</Box>

			<Box col={{ xs: 1, md: 1 / 2 }} p={16} m={0}>
				<Text forwardedAs="h2">Contact me</Text>
				<Text>
					Reasons to get in touch: discuss about crazy ideas, just
					meet, asking for advice.
				</Text>

				<Box row m={-16}>
					<Box p={16}>
						<Text forwardedAs="h4">Email</Text>

						<Text
							forwardedAs="a"
							href="mailto:hello@lorenzopieri.dev"
						>
							hello@lorenzopieri.dev
						</Text>
					</Box>

					<Box p={16}>
						<Text forwardedAs="h4">Social</Text>

						<Anchor
							href="//dribbble.com/LRNZ09"
							mr={4}
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon icon={['fab', 'dribbble']} />
						</Anchor>
						<Anchor
							href="//instagram.com/lrnz09"
							mr={4}
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</Anchor>
						<Anchor
							href="//www.last.fm/user/LRNZ09"
							mr={4}
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon icon={['fab', 'lastfm-square']} />
						</Anchor>
						<Anchor
							href="//linkedin.com/in/lrnz09"
							mr={4}
							rel="noopener"
							target="_blank"
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</Anchor>
						<Anchor
							href="//medium.com/@LRNZ09"
							mr={4}
							target="_blank"
							rel="noopener"
						>
							<FontAwesomeIcon icon={['fab', 'medium']} />
						</Anchor>
						<Anchor
							href="//twitter.com/LRNZ09"
							target="_blank"
							rel="noopener"
						>
							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</Anchor>
					</Box>
				</Box>
			</Box>
		</Box>
	</Page>
)

export default HomePage
