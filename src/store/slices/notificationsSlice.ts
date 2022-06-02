import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from 'types/notification';

interface InitialState {
	isLoading: boolean;
	error: string | null;
	notificationList: Notification[];
}

export const initialState: InitialState = {
	isLoading: false,
	error: null,
	notificationList: [],
};
export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		loadNotification: (state) => {
			state.isLoading = true;
		},
		loadNotificationSuccess: (state, { payload: notificationList }: PayloadAction<Notification[]>) => {
			state.isLoading = false;
			state.notificationList = [...state.notificationList, ...notificationList];
		},
		loadNotificationFail: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
	},
});

export default notificationsSlice;
