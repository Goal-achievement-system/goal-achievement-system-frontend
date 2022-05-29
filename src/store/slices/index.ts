import { combineReducers } from '@reduxjs/toolkit';
import goalSlice from './goalSlice';
import memberSlice from './memberSlice';

const rootReducer = combineReducers({
	goal: goalSlice.reducer,
	member: memberSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
