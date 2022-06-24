import { useDispatch } from 'react-redux';
import modalSlice from 'store/slices/modalSlice';
import { modalName } from 'utils/importModal';

export interface OpenModal {
	name: string;
	props?: { index: number };
}
export interface CloseModal {
	name: string;
}
export interface OpenModalOnClickArgs {
	certState?: string;
	name?: string;
	index?: number;
}

export type OpenModalOnClick = ({ certState, name }: OpenModalOnClickArgs) => void;

export default function useModal(): [OpenModalOnClick, any] {
	const dispatch = useDispatch();

	const openModal = (payLoad: OpenModal) => {
		dispatch(modalSlice.actions.open(payLoad));
	};

	const openModalOnClick = ({ certState, name, index }: OpenModalOnClickArgs) => {
		// goalModal 제외한 모달 오픈
		if (name) {
			openModal({ name });
		}
		if (certState === 'register') {
			openModal({ name: modalName.GoalRegModal });
			return;
		}
		if (certState === 'ongoing' && index !== null && index !== undefined) {
			openModal({ name: modalName.CertAddModal, props: { index } });
			return;
		}
		openModal({ name: modalName.CertDetailModal });
	};

	const closeModal = (payLoad: CloseModal) => {
		return dispatch(modalSlice.actions.close());
	};

	return [openModalOnClick, closeModal];
}
