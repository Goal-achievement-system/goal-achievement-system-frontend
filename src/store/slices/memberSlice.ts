import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChargeMoney, IGetMemberGoals, IGetMemberGoalsResult } from 'api/memberAPI';
import { Member } from 'types/member';

export interface InitialState {
	memberinfo: Member | null;
	memberGoals: IGetMemberGoalsResult;
	isLoading: boolean;
	error: null | string;
}

const initialState: InitialState = {
	// memberinfo: {
	// 	email: '',
	// 	password: '',
	// 	nickName: '',
	// 	sex: 'UNKNOWN',
	// 	age: 0,
	// 	money: 0,
	// },
	memberinfo: null,
	memberGoals: {
		maxPage: 1,
		goals: [],
	},
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
		getMemberGoals: (state, { payload }: PayloadAction<IGetMemberGoals>) => {
			state.isLoading = true;
		},
		getMemberGoalsSuccess: (state, { payload }: PayloadAction<IGetMemberGoalsResult>) => {
			state.isLoading = false;
			state.memberGoals = payload;
		},
		getMemberGoalsFail: (state, { payload: error }: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = error;
		},
		replaceMemberInfo: (state, { payload }: PayloadAction<Member>) => {
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
		transferMoney: (state, { payload }: PayloadAction<IChargeMoney>) => {},
		transferMoneySuccess: (state, { payload: money }: PayloadAction<number>) => {
			state.memberinfo = {
				...state.memberinfo!,
				money: state.memberinfo!.money! - money,
			};
		},
	},
});

export default memberSlice;
