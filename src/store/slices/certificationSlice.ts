/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadCertGoalParam } from 'api/goalAPI';
import { Goal, GoalsResponse } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	maxPage: 0,
};

export const certificationSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadCertGoalList: (state, action: PayloadAction<LoadCertGoalParam>) => {},
		loadCertGoalListSuccess: (state, { payload }: PayloadAction<GoalsResponse>) => {
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
	},
});

export default certificationSlice;
