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
	{
		name: 'GoalRegModal',
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
