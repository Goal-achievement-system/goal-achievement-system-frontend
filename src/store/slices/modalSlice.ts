import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalComponentState {
	name: string;
	props: {
		index: number;
	};
}

interface InitialState {
	isOpenModal: boolean;
	openList: ModalComponentState[];
}
export const initialState: InitialState = {
	isOpenModal: false,
	openList: [],
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open: (state, action: PayloadAction<ModalComponentState>) => {
			state.openList = [...state.openList, action.payload];
			state.isOpenModal = true;
		},
		close: (state) => {
			state.openList = [];
			state.isOpenModal = false;
		},
	},
});

export default modalSlice;
