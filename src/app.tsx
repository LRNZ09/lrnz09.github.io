import { List, Modal, TaskBar } from '@react95/core';
import { InfoBubble, Progman8 } from '@react95/icons';

export const App = () => {
	return (
		<>
			<Modal icon={<InfoBubble />} left='50px' title='About'>
				<Modal.Content>Work in progress...</Modal.Content>
			</Modal>

			<TaskBar
				list={
					<List>
						<List.Item icon={<Progman8 />}>Hang in there</List.Item>
					</List>
				}
			/>
		</>
	);
};
