import { combineReducers } from '@reduxjs/toolkit';
import goalSlice from './goalSlice';

const rootReducer = combineReducers({
	goal: goalSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
