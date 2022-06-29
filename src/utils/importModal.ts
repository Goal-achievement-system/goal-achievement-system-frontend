import { lazy } from 'react';
import { ModalIndex } from 'types/modal';

export const modalName = {
	GoalRegModal: 'GoalRegModal',
	CertDetailModal: 'CertDetailModal',
	CertAddModal: 'certAddModal',
	AnnounceMentsAddModal: 'AnnounceMentsAddModal',
	AnnounceMentsEditModal: 'AnnounceMentsEditModal',
	CertAdminModal: 'CertAdminModal',
	LogoutModal: 'LogoutModal',
	WithdrawalModal: 'WithdrawalModal',
};

const modalList: ModalIndex[] = [
	{
		name: modalName.CertDetailModal,
		component: lazy(() => import('components/Modal/CertDetail/CertDetailModalContainer')),
	},
	{
		name: modalName.CertAddModal,
		component: lazy(() => import('components/Modal/CertAdd/CertAddModalContainer')),
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
	{
		name: modalName.LogoutModal,
		component: lazy(() => import('components/Modal/LogoutModal')),
	},
	{
		name: modalName.WithdrawalModal,
		component: lazy(() => import('components/Modal/WithdrawalModal')),
	},
];

export default modalList;
