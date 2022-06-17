import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import notificationSlice from 'store/slices/notificationsSlice';
import client from 'api/client';
import * as MemberAPI from 'api/memberAPI';

import { Notification } from 'types/notification';
import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { loadNotification, loadNotificationSuccess } = notificationSlice.actions;

export function* loadNotificationsSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<Notification[]> = yield call(MemberAPI.getNotifications);
		yield put(loadNotificationSuccess(result.data));
	} catch (err) {
		yield put(getResult({ isSuccess: false, actionType: action.type }));
	}
	yield put(finishLoading(action.type));
}

export function* watchLoadNotificationsSaga() {
	yield takeLatest(loadNotification, loadNotificationsSaga);
}

export default function* notificationsSaga() {
	yield all([fork(watchLoadNotificationsSaga)]);
}
