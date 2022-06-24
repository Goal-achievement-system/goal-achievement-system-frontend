import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

// export const ModalNameList = {
// 	goalModal: 'GoalModal',
// 	certAddModal: 'CertAddModal',
// 	goalRegModal: 'GoalRegModal',
// }

export const modalName = {
	GoalRegModal: 'GoalRegModal',
	CertDetailModal: 'CertDetailModal',
	CertAddModal: 'certAddModal',
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
		name: modalName.CertAddModal,
		component: lazy(() => import('components/Modal/CertAddModal')),
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
