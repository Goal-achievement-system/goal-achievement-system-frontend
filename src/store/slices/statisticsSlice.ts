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
		loadGoalCount: (state, { payload }: PayloadAction) => {
			state.isLoading = true;
		},
		loadGoalCountSuccess: (state, { payload }: PayloadAction<GoalCount>) => {
			state.isLoading = false;
			state.goalCount = {
				totalSuccessGoalCount: payload.totalSuccessGoalCount,
				totalGoalCount: payload.totalGoalCount,
				totalOngoingGoalCount: payload.totalOngoingGoalCount,
				totalFailGoalCount: payload.totalFailGoalCount,
			};
		},
		loadGoalCountFailure: (state, { payload: error }: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default statisticsSlice;
