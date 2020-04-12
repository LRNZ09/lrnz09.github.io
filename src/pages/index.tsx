/** @format */

import { List, Modal, TaskBar } from '@react95/core'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Page from '../components/Page'

const MODAL_DEFAULT_POSITION = { x: 60, y: 60 }

const HomeGlobalStyle = createGlobalStyle({
	body: {
		userSelect: 'none',
	},
})

const HomePage: React.FC = () => (
	<>
		<HomeGlobalStyle />

		<Page>
			<Modal
				icon='info_bubble'
				defaultPosition={MODAL_DEFAULT_POSITION}
				title='About'
				height={100}
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
						<List.Item icon='defrag'>Menu under construction</List.Item>
					</List>
				}
			/>
		</Page>
	</>
)

export default HomePage
