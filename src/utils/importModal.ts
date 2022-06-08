import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

const modalList: ModalIndex[] = [
	{
		name: 'GoalModal',
		component: lazy(() => import('components/Modal/GoalModal')),
	},
	{
		name: 'GoalAddModal',
		component: lazy(() => import('components/Modal/GoalAddModal')),
	},
];

export default modalList;
