import { combineReducers } from '@reduxjs/toolkit';
import goalSlice from './goalSlice';
import statisticsSlice from './statisticsSlice';

const rootReducer = combineReducers({
	goal: goalSlice.reducer,
	statistics: statisticsSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
