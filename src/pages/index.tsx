/** @format */

import { Icon, List, Modal, TaskBar } from '@react95/core'
import React from 'react'

import IconBox from '../components/icon-box'
import IconText from '../components/icon-text'
import Page from '../components/page'

const MODAL_DEFAULT_POSITION = { x: 60, y: 60 }

const HomePage: React.FC = () => (
	<Page>
		<IconBox>
			<Icon name='recycle_full' />
			<IconText>Recycle Bin</IconText>
		</IconBox>

		<Modal
			defaultPosition={MODAL_DEFAULT_POSITION}
			height={100}
			icon='info_bubble'
			title='About'
			width={250}
		>
			<p>
				I'm Lorenzo Pieri, a software developer currently working for{' '}
				<a href='//tate.it' rel='noopener noreferrer' target='_blank'>
					Tate
				</a>
			</p>
		</Modal>

		<TaskBar
			list={
				<List>
					<List.Item
						as='a'
						href='mailto:hello@lorenzopieri.dev'
						icon='mail'
						target='_blank'
					>
						Contact me
					</List.Item>
				</List>
			}
		/>
	</Page>
)

export default HomePage
