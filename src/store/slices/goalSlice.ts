/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadGoalParam, RegisterGoalParam } from 'store/sagas/goalSaga';
import { Goal, GoalsResponse } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	isLoading: boolean;
	error: null | string;
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	isLoading: false,
	error: null,
	maxPage: 0,
};

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadGoalList: (state, action: PayloadAction<LoadGoalParam>) => {
			state.isLoading = true;
		},
		loadGoalListSuccess: (state, { payload }: PayloadAction<GoalsResponse>) => {
			state.isLoading = false;
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
		loadGoalListFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
		registerGoal: (state, action: PayloadAction<RegisterGoalParam>) => {},
	},
});

export default goalSlice;
