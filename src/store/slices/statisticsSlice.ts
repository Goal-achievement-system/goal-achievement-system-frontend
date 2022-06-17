/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoalCount } from 'types/statistics';

export interface InitialState {
	goalCount: GoalCount | null;
}

const initialState: InitialState = {
	goalCount: null,
};

export const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	reducers: {
		loadGoalCount: (state, { payload }: PayloadAction) => {},
		loadGoalCountSuccess: (state, { payload }: PayloadAction<GoalCount>) => {
			state.goalCount = {
				totalSuccessGoalCount: payload.totalSuccessGoalCount,
				totalGoalCount: payload.totalGoalCount,
				totalOngoingGoalCount: payload.totalOngoingGoalCount,
				totalFailGoalCount: payload.totalFailGoalCount,
				totalHoldGoalCount: payload.totalHoldGoalCount,
			};
		},
	},
});

export default statisticsSlice;
