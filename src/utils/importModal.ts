import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

export const ModalNameList = {
	goalModal: 'GoalModal',
	certAddModal: 'CertAddModal',
	goalRegModal: 'GoalRegModal',
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
		name: ModalNameList.goalRegModal,
		component: lazy(() => import('components/Modal/GoalRegister/GoalRegModalContainer')),
	},
];

export default modalList;
