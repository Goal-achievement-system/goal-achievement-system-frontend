import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChargeMoneyBody, GetMemberGoalsBody, ReplaceMemberBody } from 'api/memberAPI';
import { Goal, GoalsResponse } from 'types/goal';
import { Member } from 'types/member';
import { GoalCount } from 'types/statistics';

export interface MemberMenuInfos {
	goalStatistics: GoalCount;
	menuGoals: Goal[];
	menuCerts: Goal[];
}

export interface InitialState {
	memberinfo: Member | null;
	memberGoals: GoalsResponse;
	goalStatistics: null | GoalCount;
	menuGoals: Goal[];
	menuCerts: Goal[];
}

const initialState: InitialState = {
	memberinfo: null,
	memberGoals: {
		maxPage: 1,
		goals: [],
	},
	goalStatistics: null,
	menuGoals: [],
	menuCerts: [],
};

export const memberSlice = createSlice({
	name: 'member',
	initialState,
	reducers: {
		loadMemberInfo: (state) => {},
		loadMemberInfoSuccess: (state, { payload }: PayloadAction<Member>) => {
			state.memberinfo = payload;
		},
		getMemberGoals: (state, { payload }: PayloadAction<GetMemberGoalsBody>) => {},
		getMemberGoalsSuccess: (state, { payload }: PayloadAction<GoalsResponse>) => {
			if (payload.maxPage === 0) {
				state.memberGoals = initialState.memberGoals;
				return;
			}
			state.memberGoals = { ...payload };
		},
		replaceMemberInfo: (state, { payload }: PayloadAction<ReplaceMemberBody>) => {},
		replaceMemberInfoSuccess: (state, { payload }: PayloadAction<Member>) => {
			state.memberinfo = { ...state.memberinfo, ...payload };
		},
		chargeMoney: (state, { payload }: PayloadAction<ChargeMoneyBody>) => {},
		chargeMoneySuccess: (state, { payload: money }: PayloadAction<number>) => {
			state.memberinfo = {
				...state.memberinfo!,
				money: state.memberinfo!.money! + money,
			};
		},
		transferMoney: (state, { payload }: PayloadAction<ChargeMoneyBody>) => {},
		transferMoneySuccess: (state, { payload: money }: PayloadAction<number>) => {
			state.memberinfo = {
				...state.memberinfo!,
				money: state.memberinfo!.money! - money,
			};
		},
		getMemberMenuInfos: (state) => {},
		getMemberMenuInfosSuccess: (state, { payload }: PayloadAction<MemberMenuInfos>) => {
			state.goalStatistics = payload.goalStatistics;
			state.menuGoals = payload.menuGoals;
			state.menuCerts = payload.menuCerts;
		},
	},
});

export default memberSlice;
