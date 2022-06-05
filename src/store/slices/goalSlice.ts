/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadGoalParam } from 'store/sagas/goalSaga';
import { Goal } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	isLoading: boolean;
	error: null | string;
}

const initialState: InitialState = {
	goalList: [],
	isLoading: false,
	error: null,
};

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadGoalList: (state, action: PayloadAction<LoadGoalParam>) => {
			state.isLoading = true;
		},
		loadGoalListSuccess: (state, { payload: goalList }: PayloadAction<Goal[]>) => {
			state.isLoading = false;
			state.goalList = goalList;
		},
		loadGoalListFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default goalSlice;
