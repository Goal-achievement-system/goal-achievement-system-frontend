// import UserProfileModal from "components/Modal/UserProfileModal";

import { useDispatch } from 'react-redux';
import modalSlice from 'store/slices/modalSlice';

export default function useModal() {
	const dispatch = useDispatch();
	const openModal = (payLoad: { name: string; props?: { id: number } }) => {
		dispatch(modalSlice.actions.open(payLoad));
	};

	const closeModal = (payLoad: { name: string }) => {
		return dispatch(modalSlice.actions.close());
	};

	return [openModal, closeModal];
}
