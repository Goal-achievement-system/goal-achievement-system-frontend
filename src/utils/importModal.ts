import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

export const ModalNameList = {
	goalModal: 'GoalModal',
	certAddModal: 'certAddModal',
};

const modalList: ModalIndex[] = [
	{
		name: ModalNameList.goalModal,
		component: lazy(() => import('components/Modal/GoalModal')),
	},
	{
		name: ModalNameList.certAddModal,
		component: lazy(() => import('components/Modal/CertAddModal')),
	},
	{
		name: 'GoalRegModal',
		component: lazy(() => import('components/Modal/GoalRegister/GoalRegModalContainer')),
	},
];

export default modalList;
