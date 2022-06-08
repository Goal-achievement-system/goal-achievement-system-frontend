import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	result: any;
}

export interface IResult {
	actionType: string;
	isSuccess: boolean;
	errorMsg?: string | null;
}

const initialState: InitialState = {
	result: {},
};

export const resultSlice = createSlice({
	name: 'result',
	initialState,
	reducers: {
		initResult: (state, { payload: actionType }: PayloadAction<string>) => {
			state.result[actionType] = null;
		},
		getResult: (state, { payload }: PayloadAction<IResult>) => {
			state.result[payload.actionType] = {
				isSuccess: payload.isSuccess,
				errorMsg: payload.errorMsg ? payload.errorMsg : null,
			};
		},
	},
});

export default resultSlice;
