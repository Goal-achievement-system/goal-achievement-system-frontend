/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadGoalParam, RegisterGoalParam } from 'store/sagas/goalSaga';
import { Goal, GoalsResponse } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	maxPage: 0,
};

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadGoalList: (state, action: PayloadAction<LoadGoalParam>) => {},
		loadGoalListSuccess: (state, { payload }: PayloadAction<GoalsResponse>) => {
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
		registerGoal: (state, action: PayloadAction<RegisterGoalParam>) => {},
	},
});

export default goalSlice;
