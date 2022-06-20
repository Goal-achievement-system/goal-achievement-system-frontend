/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadGoalParam } from 'store/sagas/goalSaga';
import { RegisterGoalBody } from 'api/goalAPI';
import { Goal, GoalsResponse } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	maxPage: number;
	categories: string[];
}

const initialState: InitialState = {
	goalList: [],
	maxPage: 0,
	categories: [],
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
		registerGoal: (state, action: PayloadAction<RegisterGoalBody>) => {},
		loadCategories: (state) => {},
		loadCategoriesSuccess: (state, { payload }: PayloadAction<string[]>) => {
			state.categories = payload;
		},
	},
});

export default goalSlice;
