import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member } from 'types/member';

export interface InitialState {
	memberinfo: Member | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: InitialState = {
	memberinfo: null,
	isLoading: false,
	error: null,
};

export const memberSlice = createSlice({
	name: 'member',
	initialState,
	reducers: {
		loadMemberInfo: (state) => {
			state.isLoading = true;
		},
		loadMemberInfoSuccess: (state, { payload }: PayloadAction<Member>) => {
			state.memberinfo = payload;
			state.isLoading = false;
		},
		loadMemberInfoFailure: (state, { payload: error }: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default memberSlice;
