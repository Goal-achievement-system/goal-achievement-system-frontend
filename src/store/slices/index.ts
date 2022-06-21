import { combineReducers } from '@reduxjs/toolkit';
import authSlice from 'store/slices/authSlice';
import goalSlice from 'store/slices/goalSlice';
import memberSlice from './memberSlice';
import statisticsSlice from './statisticsSlice';
import notificationsSlice from './notificationsSlice';
import loadingSlice from './loadingSlice';
import resultSlice from './resultSlice';
import modalSlice from './modalSlice';
import certificationSlice from './certificationSlice';
import adminSlice from './adminSlice';

const rootReducer = combineReducers({
	goal: goalSlice.reducer,
	auth: authSlice.reducer,
	statistics: statisticsSlice.reducer,
	member: memberSlice.reducer,
	notifications: notificationsSlice.reducer,
	loading: loadingSlice.reducer,
	result: resultSlice.reducer,
	modal: modalSlice.reducer,
	certification: certificationSlice.reducer,
	admin: adminSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
