import { useDispatch } from 'react-redux';
import modalSlice from 'store/slices/modalSlice';
import { ModalNameList } from 'utils/importModal';

// name 에 문자열을 넣어주기 번거롭고  어떤 모달들이 존재하는지 알기 어렵다 변수로 지정해놓자

export interface OpenModal {
	name: string;
	props?: { index: number };
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
			openModal({ name: ModalNameList.certAddModal, props: { index } });
			return;
		}
		openModal({ name: ModalNameList.goalModal, props: { index } });
	};

	const closeModal = (payLoad: CloseModal) => {
		return dispatch(modalSlice.actions.close());
	};

	return [openModalOnClick, closeModal];
}
