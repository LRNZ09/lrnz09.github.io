import { List, TaskBar } from '@react95/core';
import { Progman8 } from '@react95/icons';

export const App = () => {
	return (
		<TaskBar
			list={
				<List>
					<List.Item icon={<Progman8 />}>Hang in there</List.Item>
				</List>
			}
		/>
	);
};
