/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoalListParams, LoadGoalParam } from 'store/sagas/goalSaga';
import { Goal } from 'types/goal';

export interface InitialState {
	list: Goal[];
	isLoading: boolean;
	error: null | string;
}

const initialState: InitialState = {
	list: [],
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
		loadGoalListSuccess: (state, action: PayloadAction<GoalListParams>) => {
			state.isLoading = false;
			state.list = action.payload.list;
		},
		loadGoalListFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default goalSlice;
