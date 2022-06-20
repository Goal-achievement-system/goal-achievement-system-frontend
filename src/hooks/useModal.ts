// import UserProfileModal from "components/Modal/UserProfileModal";

import { useDispatch } from 'react-redux';
import modalSlice from 'store/slices/modalSlice';

export interface OpenModal {
	name: string;
	props: { index: number };
}
export interface CloseModal {
	name: string;
}
export interface OpenModalOnClickArgs {
	certState: string;
	index: number;
}

export type OpenModalOnClick = ({ certState, index }: OpenModalOnClickArgs) => void;

export default function useModal(): [OpenModalOnClick, any] {
	const dispatch = useDispatch();

	const openModal = (payLoad: OpenModal) => {
		dispatch(modalSlice.actions.open(payLoad));
	};

	const openModalOnClick = ({ certState, index }: OpenModalOnClickArgs) => {
		if (certState === 'ongoing') {
			openModal({ name: 'CertAddModal', props: { index } });
			return;
		}
		openModal({ name: 'CertAddModal', props: { index } });
	};

	const closeModal = (payLoad: CloseModal) => {
		return dispatch(modalSlice.actions.close());
	};

	return [openModalOnClick, closeModal];
}
