import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import notificationSlice from 'store/slices/notificationsSlice';
import client from 'api/client';
import * as MemberAPI from 'api/memberAPI';

import { Notification } from 'types/notification';
import { AxiosResponse } from 'axios';

const { loadNotification, loadNotificationSuccess, loadNotificationFail } = notificationSlice.actions;

export function* loadNotificationsSaga() {
	try {
		const token: string = localStorage.getItem('goalKeeperToken')!;
		client.defaults.headers.common.Authorization = token;
		const result: AxiosResponse<Notification[]> = yield call(MemberAPI.getNotifications);

		yield put(loadNotificationSuccess(result.data));
	} catch (err) {
		yield put(loadNotificationFail(err));
	}
}

export function* watchLoadNotificationsSaga() {
	yield takeLatest(loadNotification, loadNotificationsSaga);
}
export default function* notificationsSaga() {
	yield all([fork(watchLoadNotificationsSaga)]);
}
