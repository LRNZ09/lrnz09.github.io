/** @format */

import { Icon, List, Modal, TaskBar } from '@react95/core'
import React, { useState, useCallback } from 'react'

import IconBox from '../components/icon-box'
import IconText from '../components/icon-text'
import Page from '../components/page'

const MODAL_DEFAULT_POSITION = { x: 60, y: 60 }

const SOCIAL_ANCHORS_LIST = [
	// 	{ icon: 'dribbble', url: '//dribbble.com/LRNZ09' },
	// 	{ icon: 'instagram', url: '//instagram.com/lrnz09' },
	// 	{ icon: 'pinterest', url: '//www.pinterest.com/lrnz09' },
	// 	{ icon: 'playstation', url: '//my.playstation.com/profile/LRNZ09-' },
	// 	{ icon: 'reddit', url: '//www.reddit.com/user/LRNZ09' },
	// 	{ icon: 'spotify', url: '//open.spotify.com/user/lrnz09' },
	// 	{ icon: 'twitch', url: '//www.twitch.tv/LRNZ09' },

	{
		icon: 'keyboard_mouse',
		name: 'GitHub',
		url: '//github.com/LRNZ09',
	},
	{
		icon: 'packager',
		name: 'Play Store',
		url: '//play.google.com/store/apps/developer?id=LRNZ09',
	},
	{
		icon: 'cd_music',
		name: 'Last.fm',
		url: '//www.last.fm/user/LRNZ09',
	},
	{
		icon: 'desktop',
		name: 'LinkedIn',
		url: '//linkedin.com/in/lrnz09',
	},
	{
		icon: 'file_pen',
		name: 'Medium',
		url: '//medium.com/@LRNZ09',
	},
	{
		icon: 'defrag',
		name: 'StackOverflow',
		url: '//stackoverflow.com/users/story/5436797',
	},
	{
		icon: 'textchat',
		name: 'Twitter',
		url: '//twitter.com/LRNZ09',
	},
]

// const handleClose = () => {
// 	window.open('', '_self').close()
// }

const HomePage: React.FC = () => {
	const [showAboutModal, setShowAboutModal] = useState(true)

	const handleOpenAboutModal = useCallback(() => {
		setShowAboutModal(true)
	}, [])

	const handleCloseAboutModal = useCallback(() => {
		setShowAboutModal(false)
	}, [])

	return (
		<Page>
			<IconBox>
				<Icon name='recycle_full' />
				<IconText>Recycle Bin</IconText>
			</IconBox>

			{showAboutModal && (
				<Modal
					defaultPosition={MODAL_DEFAULT_POSITION}
					height={100}
					icon='info_bubble'
					title='About'
					width={250}
					closeModal={handleCloseAboutModal}
				>
					<p>
						I'm Lorenzo Pieri, a software developer currently working for{' '}
						<a href='//tate.it' rel='noopener noreferrer' target='_blank'>
							Tate
						</a>
					</p>
				</Modal>
			)}

			<TaskBar
				list={
					<List>
						<List.Item icon='user'>
							Socials
							<List>
								{SOCIAL_ANCHORS_LIST.map(({ icon, name, url }) => (
									<List.Item
										as='a'
										href={url}
										icon={icon}
										key={name}
										rel='noopener noreferrer'
										target='_blank'
									>
										{name}
									</List.Item>
								))}
							</List>
						</List.Item>
						<List.Item
							as='a'
							href='mailto:hello@lorenzopieri.dev'
							icon='mail'
							target='_blank'
						>
							Contact me
						</List.Item>

						<List.Divider />

						<List.Item icon='info_bubble' onClick={handleOpenAboutModal}>
							About
						</List.Item>
						{/* <List.Item icon='computer_3' onClick={handleClose}>
							Close
						</List.Item> */}
					</List>
				}
			/>
		</Page>
	)
}

export default HomePage
