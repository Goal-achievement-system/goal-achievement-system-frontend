import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

export const modalName = {
	GoalRegModal: 'GoalRegModal',
	CertDetailModal: 'CertDetailModal',
	AnnounceMentsAddModal: 'AnnounceMentsAddModal',
	AnnounceMentsEditModal: 'AnnounceMentsEditModal',
	CertAdminModal: 'CertAdminModal',
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
		name: modalName.AnnounceMentsAddModal,
		component: lazy(() => import('components/Modal/AnnounceMents/AnnounceMentsAddModal')),
	},
	{
		name: modalName.AnnounceMentsEditModal,
		component: lazy(() => import('components/Modal/AnnounceMents/AnnounceMentsEditModal')),
	},
	{
		name: modalName.CertAdminModal,
		component: lazy(() => import('components/Modal/CertDetail/CertAdminModalContainer')),
	},
];

export default modalList;
