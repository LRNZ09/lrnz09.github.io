/** @format */

import { List, Modal, TaskBar } from '@react95/core'
import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'

const MODAL_DEFAULT_POSITION = { x: 60, y: 60 }

// const UnselectablePage = styled(Page)({
// 	userSelect: 'none',
// })

const HomePage: React.FC = () => (
	<Page>
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
					<List.Item icon='defrag'>Menu under construction</List.Item>
				</List>
			}
		/>
	</Page>
)

export default HomePage
