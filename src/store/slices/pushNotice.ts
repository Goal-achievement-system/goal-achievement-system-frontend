import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPushNoticeView } from 'types/notification';

interface InitialState {
	pushNoticeList: IPushNoticeView[];
}

export const initialState: InitialState = {
	pushNoticeList: [],
};
export const pushNoticeSlice = createSlice({
	name: 'pushNotice',
	initialState,
	reducers: {
		loadNotification: (state) => {},
		loadNotificationSuccess: (state, { payload: pushNoticeList }: PayloadAction<IPushNoticeView[]>) => {
			state.pushNoticeList = [...state.pushNoticeList, ...pushNoticeList];
		},
	},
});

export default pushNoticeSlice;
