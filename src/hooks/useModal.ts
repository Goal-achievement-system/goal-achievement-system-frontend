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

export default function useModal() {
	const dispatch = useDispatch();

	const openModal = (payLoad: OpenModal) => {
		dispatch(modalSlice.actions.open(payLoad));
	};

	const closeModal = (payLoad: CloseModal) => {
		return dispatch(modalSlice.actions.close());
	};

	return [openModal, closeModal];
}
