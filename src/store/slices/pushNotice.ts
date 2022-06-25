import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPushNotice } from 'types/notification';

interface InitialState {
	pushNoticeList: IPushNotice[];
}

export const initialState: InitialState = {
	pushNoticeList: [],
};
export const pushNoticeSlice = createSlice({
	name: 'pushNotice',
	initialState,
	reducers: {
		loadNotification: (state) => {},
		loadNotificationSuccess: (state, { payload: pushNoticeList }: PayloadAction<IPushNotice[]>) => {
			state.pushNoticeList = [...state.pushNoticeList, ...pushNoticeList];
		},
	},
});

export default pushNoticeSlice;
