import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

const modalList: ModalIndex[] = [
	{
		name: 'GoalModal',
		component: lazy(() => import('components/Modal/GoalModal')),
	},
	{
		name: 'CertAddModal',
		component: lazy(() => import('components/Modal/CertAddModal')),
	},
];

export default modalList;
