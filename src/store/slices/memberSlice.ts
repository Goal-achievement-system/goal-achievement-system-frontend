import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChargeMoney, IGetMemberGoals, IGetMemberGoalsResult } from 'api/memberAPI';
import { Cert } from 'types/certification';
import { Goal } from 'types/goal';
import { Member } from 'types/member';
import { GoalCount } from 'types/statistics';

export interface MemberMenuInfos {
	goalStatistics: GoalCount;
	menuGoals: Goal[];
	menuCerts: Cert[];
}

export interface InitialState {
	memberinfo: Member | null;
	memberGoals: IGetMemberGoalsResult;
	goalStatistics: null | GoalCount;
	menuGoals: Goal[];
	menuCerts: Cert[];
}

const initialState: InitialState = {
	memberinfo: null,
	memberGoals: {
		maxPage: 1,
		goals: null,
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
		getMemberGoals: (state, { payload }: PayloadAction<IGetMemberGoals>) => {},
		getMemberGoalsSuccess: (state, { payload }: PayloadAction<IGetMemberGoalsResult>) => {
			state.memberGoals = { ...payload };
		},
		replaceMemberInfo: (state, { payload }: PayloadAction<Member>) => {},
		replaceMemberInfoSuccess: (state, { payload }: PayloadAction<Member>) => {
			state.memberinfo = { ...state.memberinfo, ...payload };
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
		getMemberMenuInfos: (state) => {},
		getMemberMenuInfosSuccess: (state, { payload }: PayloadAction<MemberMenuInfos>) => {
			state.goalStatistics = payload.goalStatistics;
			state.menuGoals = payload.menuGoals;
			state.menuCerts = payload.menuCerts;
		},
	},
});

export default memberSlice;
