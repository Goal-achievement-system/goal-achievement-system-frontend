import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from 'types/notification';

interface InitialState {
	notificationList: Notification[];
}

export const initialState: InitialState = {
	notificationList: [],
};
export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		loadNotification: (state) => {},
		loadNotificationSuccess: (state, { payload: notificationList }: PayloadAction<Notification[]>) => {
			state.notificationList = [...state.notificationList, ...notificationList];
		},
	},
});

export default notificationsSlice;
