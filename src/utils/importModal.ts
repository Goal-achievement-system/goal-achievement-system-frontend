import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

export const modalName = {
	GoalRegModal: 'GoalRegModal',
	CertDetailModal: 'CertDetailModal',
};

const modalList: ModalIndex[] = [
	{
		name: modalName.CertDetailModal,
		component: lazy(() => import('components/Modal/CertDetail/CertDetailModalContainer')),
	},
	{
		name: 'GoalAddModal',
		component: lazy(() => import('components/Modal/GoalAddModal')),
	},
	{
		name: modalName.GoalRegModal,
		component: lazy(() => import('components/Modal/GoalRegister/GoalRegModalContainer')),
	},
	{
		name: 'AnnounceMentsAddModal',
		component: lazy(() => import('components/Modal/AnnounceMents/AnnounceMentsAddModal')),
	},
	{
		name: 'AnnounceMentsEditModal',
		component: lazy(() => import('components/Modal/AnnounceMents/AnnounceMentsEditModal')),
	},
];

export default modalList;
