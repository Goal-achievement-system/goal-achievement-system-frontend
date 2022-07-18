import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPushNotice, IPushNoticeView } from 'types/notification';

interface InitialState {
	pushNoticeList: IPushNoticeView[];
	notReadPushNoticeNumber: number;
}

export const initialState: InitialState = {
	pushNoticeList: [],
	notReadPushNoticeNumber: 0,
};
export const pushNoticeSlice = createSlice({
	name: 'pushNotice',
	initialState,
	reducers: {
		loadNotification: (state) => {},
		loadNotificationSuccess: (state, { payload: pushNoticeList }: PayloadAction<IPushNoticeView[]>) => {
			state.pushNoticeList = [...state.pushNoticeList, ...pushNoticeList];
			state.notReadPushNoticeNumber = pushNoticeList.filter(({ read }: IPushNotice) => !read).length;
		},
		processReadNotification: (state, payload: PayloadAction<number>) => {},
		processReadNotificationSuccess: (state, payload: PayloadAction<any>) => {},
	},
});

export default pushNoticeSlice;
