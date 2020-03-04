/** @format */

import { Box } from '@xstyled/styled-components'
import React from 'react'

import Anchor from '../components/Anchor'
import Icon from '../components/Icon'
import Page from '../components/Page'
import Text from '../components/Text'

const SOCIAL_ANCHORS_LIST = [
	{ icon: 'dribbble', url: '//dribbble.com/LRNZ09' },
	{ icon: 'github-alt', url: '//github.com/LRNZ09' },
	{
		icon: 'google-play',
		url: '//play.google.com/store/apps/developer?id=LRNZ09',
	},
	{ icon: 'instagram', url: '//instagram.com/lrnz09' },
	{ icon: 'lastfm-square', url: '//www.last.fm/user/LRNZ09' },
	{ icon: 'linkedin', url: '//linkedin.com/in/lrnz09' },
	{ icon: 'medium', url: '//medium.com/@LRNZ09' },
	{ icon: 'spotify', url: '//open.spotify.com/user/lrnz09' },
	{ icon: 'twitch', url: '//www.twitch.tv/LRNZ09' },
	{ icon: 'twitter', url: '//twitter.com/LRNZ09' },
]

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

						{SOCIAL_ANCHORS_LIST.map(({ icon, url }) => (
							<Anchor
								href={url}
								key={icon}
								mr={4}
								rel="noopener"
								target="_blank"
							>
								<Icon name={icon} />
							</Anchor>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	</Page>
)

export default HomePage
