/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoalCount } from 'types/statistics';

export interface InitialState {
	goalCount: GoalCount | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: InitialState = {
	goalCount: null,
	isLoading: false,
	error: null,
};

export const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	reducers: {
		loadGoalCount: (state, action: PayloadAction) => {
			state.isLoading = true;
		},
		loadGoalCountSuccess: (state, action: PayloadAction<GoalCount>) => {
			state.isLoading = false;
			state.goalCount = {
				totalSuccessGoalCount: action.payload.totalSuccessGoalCount,
				totalGoalCount: action.payload.totalGoalCount,
				totalOngoingGoalCount: action.payload.totalOngoingGoalCount,
				totalFailGoalCount: action.payload.totalFailGoalCount,
			};
		},
		loadGoalCountFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default statisticsSlice;
