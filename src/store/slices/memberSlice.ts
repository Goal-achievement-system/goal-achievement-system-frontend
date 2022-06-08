import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChargeMoney } from 'api/memberAPI';
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
		replaceMemberInfo: (state, { payload }) => {
			state.isLoading = true;
		},
		replaceMemberInfoSuccess: (state, { payload }: PayloadAction<Member>) => {
			state.isLoading = false;
			state.memberinfo = { ...state.memberinfo, ...payload };
		},
		replaceMemberInfoFail: (state, { payload: error }: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = error;
		},
		chargeMoney: (state, { payload }: PayloadAction<IChargeMoney>) => {},
		chargeMoneySuccess: (state, { payload: money }: PayloadAction<number>) => {
			state.memberinfo = {
				...state.memberinfo!,
				money: state.memberinfo!.money! + money,
			};
		},
		chargeMoneyFailure: (state, { payload: error }) => {
			state.error = error;
		},
	},
});

export default memberSlice;
