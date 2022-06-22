/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterGoalBody, LoadGoalListParam } from 'api/goalAPI';
import { Goal, GoalsResponse } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	goal: Goal;
	maxPage: number;
	categories: string[];
}

const initialState: InitialState = {
	goalList: [],
	goal: {} as Goal,
	maxPage: 0,
	categories: [],
};

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadGoalList: (state, action: PayloadAction<LoadGoalListParam>) => {},
		loadGoalListSuccess: (state, { payload }: PayloadAction<GoalsResponse>) => {
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
		loadGoal: (state, action: PayloadAction) => {},
		loadGoalSuccess: (state, { payload }: PayloadAction) => {},
		registerGoal: (state, action: PayloadAction<RegisterGoalBody>) => {},
		loadCategories: (state) => {},
		loadCategoriesSuccess: (state, { payload }: PayloadAction<string[]>) => {
			state.categories = payload;
		},
	},
});

export default goalSlice;
